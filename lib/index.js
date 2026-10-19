/**
 * delivery-board 宿主半：注册同源 HTTP 路由，为左侧栏「项目管理」看板提供数据。
 *
 * 为什么用 webServer 精确路由 + 同源 fetch（而不是 Remote/typert）：
 * 已安装的第三方插件拿不到 host.call（那是动态运行时的契约），
 * 而 typert 的 @Remote 契约由 DSH 自身的构建流水线生成、第三方无法手写。
 * 同源路由 + fetch 是这类插件读写宿主数据的可行路径。
 *
 * 读开放、写限本机（loopback）。写成功后一律回传完整 state，客户端以此为准。
 */
import { boardPayload, readState, todayLocal } from "./store.js"
import {
  deleteMilestone,
  deleteProject,
  deleteTask,
  importState,
  reorderProjects,
  saveMilestone,
  saveProject,
  saveTask,
} from "./mutations.js"

export const ROUTES = {
  state: "/api/delivery-board/state",
  project: "/api/delivery-board/project",
  projectDelete: "/api/delivery-board/project/delete",
  projectReorder: "/api/delivery-board/project/reorder",
  task: "/api/delivery-board/task",
  taskDelete: "/api/delivery-board/task/delete",
  milestone: "/api/delivery-board/milestone",
  milestoneDelete: "/api/delivery-board/milestone/delete",
  export: "/api/delivery-board/export",
  import: "/api/delivery-board/import",
}

function isLoopback(req) {
  const a = req?.socket?.remoteAddress ?? ""
  return a === "127.0.0.1" || a === "::1" || a === "::ffff:127.0.0.1"
}

function json(res, status, data) {
  const body = JSON.stringify(data)
  res.writeHead(status, {
    "content-type": "application/json; charset=utf-8",
    "content-length": Buffer.byteLength(body),
  })
  res.end(body)
}

function readBody(req) {
  return new Promise((resolve, reject) => {
    const chunks = []
    req.on("data", (c) => chunks.push(c))
    req.on("end", () => {
      const raw = Buffer.concat(chunks).toString("utf8")
      if (!raw.trim()) return resolve({})
      try {
        resolve(JSON.parse(raw))
      } catch (e) {
        reject(new Error(`请求体不是合法 JSON: ${e instanceof Error ? e.message : String(e)}`))
      }
    })
    req.on("error", reject)
  })
}

/** 当前看板快照（含 today 与派生统计）。 */
export function currentPayload(now = new Date()) {
  const state = readState()
  return boardPayload(state, todayLocal(now))
}

/** 变更结果 → HTTP 响应；成功时回传完整快照。 */
function respondMutation(res, result) {
  if (!result.ok) {
    const status = result.notFound ? 404 : 400
    return json(res, status, { ok: false, error: result.error ?? "操作失败" })
  }
  return json(res, 200, currentPayload())
}

function bodyString(body, key) {
  const v = body?.[key]
  return typeof v === "string" ? v : ""
}

function bodyObject(body, key) {
  const v = body?.[key]
  return v !== null && typeof v === "object" && !Array.isArray(v) ? v : null
}

/**
 * 注册全部路由。返回 disposer 列表；调用方负责并入 ctx.effect。
 *
 * 注册是「全有或全无」的：webServer 对重复的 (kind,path) 会抛错，
 * 若中途失败就把已注册的路由回滚掉再抛出，避免留下半套路由却没人卸载。
 *
 * @param webServer - 宿主 webServer 服务（来自 ctx.get("webServer")）
 */
export function installRoutes(webServer) {
  const specs = buildRouteSpecs()
  const disposers = []
  try {
    for (const spec of specs) disposers.push(webServer.register(spec))
  } catch (e) {
    for (const d of disposers) {
      try {
        d()
      } catch {
        /* 回滚失败不再掩盖原始错误 */
      }
    }
    throw e
  }
  return disposers
}

/** 构造 8 条路由规格（纯数据，不触碰 webServer）。 */
function buildRouteSpecs() {
  const get = (path, handler) => ({
    kind: "exact",
    path,
    async handler(req, res) {
      if (req.method !== "GET" && req.method !== "HEAD") {
        return json(res, 405, { ok: false, error: "仅支持 GET" })
      }
      try {
        return await handler(req, res)
      } catch (e) {
        return json(res, 500, { ok: false, error: e instanceof Error ? e.message : String(e) })
      }
    },
  })

  const post = (path, handle) => ({
    kind: "exact",
    path,
    async handler(req, res) {
      if (req.method !== "POST") return json(res, 405, { ok: false, error: "仅支持 POST" })
      if (!isLoopback(req)) return json(res, 403, { ok: false, error: "仅允许本机访问" })
      let body
      try {
        body = await readBody(req)
      } catch (e) {
        return json(res, 400, { ok: false, error: e instanceof Error ? e.message : String(e) })
      }
      try {
        return respondMutation(res, await handle(body))
      } catch (e) {
        return json(res, 500, { ok: false, error: e instanceof Error ? e.message : String(e) })
      }
    },
  })

  return [
    get(ROUTES.state, (_req, res) => json(res, 200, currentPayload())),
    get(ROUTES.export, (req, res) => {
      // 导出原始状态：触发浏览器下载，响应体是规范化 JSON
      const body = JSON.stringify(readState(), null, 2) + "\n"
      res.writeHead(200, {
        "content-type": "application/json; charset=utf-8",
        "content-disposition": `attachment; filename="delivery-board-export-${todayLocal()}.json"`,
        "content-length": Buffer.byteLength(body),
      })
      res.end(body)
    }),
    post(ROUTES.import, (b) => importState(b?.state)),
    post(ROUTES.project, (b) => {
      const project = bodyObject(b, "project")
      if (project === null) return { ok: false, error: "缺少 project" }
      return saveProject(project)
    }),
    post(ROUTES.projectDelete, (b) => deleteProject(bodyString(b, "id"))),
    post(ROUTES.projectReorder, (b) => reorderProjects(Array.isArray(b?.ids) ? b.ids : null)),
    post(ROUTES.task, (b) => {
      const task = bodyObject(b, "task")
      if (task === null) return { ok: false, error: "缺少 task" }
      return saveTask(bodyString(b, "projectId"), task)
    }),
    post(ROUTES.taskDelete, (b) => deleteTask(bodyString(b, "projectId"), bodyString(b, "taskId"))),
    post(ROUTES.milestone, (b) => {
      const milestone = bodyObject(b, "milestone")
      if (milestone === null) return { ok: false, error: "缺少 milestone" }
      return saveMilestone(bodyString(b, "projectId"), milestone)
    }),
    post(ROUTES.milestoneDelete, (b) => deleteMilestone(bodyString(b, "projectId"), bodyString(b, "milestoneId"))),
  ]
}

/**
 * 插件入口。用 ctx.inject 而非硬依赖，这样 headless profile（无 webServer）下
 * 插件仍能正常加载，只是不注册路由。
 */
export function apply(ctx) {
  ctx.inject(["webServer"], (webCtx) => {
    const webServer = webCtx.get("webServer")
    if (webServer === undefined) return
    const disposers = installRoutes(webServer)
    webCtx.effect(() => () => {
      for (const d of disposers) {
        try {
          d()
        } catch {
          /* 单个卸载失败不影响其余 */
        }
      }
    })
    // eslint-disable-next-line no-console
    console.log(`[delivery-board] 已注册 ${disposers.length} 条项目管理路由`)
  })
}

export default { name: "delivery-board", apply }
