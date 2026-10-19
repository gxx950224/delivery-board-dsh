/**
 * 变更操作：把一次用户动作翻译成对状态的读-改-写。
 *
 * 每个操作返回 { ok, state?, error?, notFound? }；成功时 `state` 是完整的归一化状态，
 * 路由层再套上 boardPayload() 一并回给客户端——客户端不需要自己合并增量。
 *
 * 「目标不存在」用 store.js 的 NOT_FOUND 哨兵表达：updateState 见到它就不落盘、
 * 直接回 notFound，避免"先查一次再改一次"的竞态，也避免把失败写成空状态。
 */
import { NOT_FOUND, normalizeProject, normalizeState, updateState, statePath, boardHome } from "./store.js"
import { copyFileSync, existsSync, mkdirSync } from "node:fs"
import path from "node:path"

function fail(error) {
  return { ok: false, error }
}

function asObject(v) {
  return v !== null && typeof v === "object" && !Array.isArray(v)
}

function notFound(what) {
  return { ok: false, error: `${what}不存在`, notFound: true }
}

/** 兼容同步返回值与 Promise 的收尾：notFound 转成统一形状。 */
function settle(result, what) {
  return result.notFound ? notFound(what) : result
}

/** 新建或更新项目。`project.id` 为空即新建。 */
export function saveProject(input) {
  if (!asObject(input)) return fail("project 必须是对象")
  if (typeof input.name !== "string" || !input.name.trim()) return fail("项目名称不能为空")
  const id = typeof input.id === "string" ? input.id : ""

  return updateState((state) => {
    const existing = id ? state.projects.find((p) => p.id === id) : undefined
    if (id && !existing) return NOT_FOUND
    const norm = normalizeProject(existing ? { ...existing, ...input } : input)
    if (norm === null) return state
    if (existing) {
      state.projects = state.projects.map((p) =>
        p.id === existing.id ? { ...norm, id: existing.id, createdAt: existing.createdAt } : p,
      )
    } else {
      state.projects = [...state.projects, norm]
    }
    return state
  }).then((r) => settle(r, `项目 ${id}`))
}

export function deleteProject(id) {
  const key = typeof id === "string" ? id : ""
  if (!key) return fail("缺少项目 id")
  return updateState((state) => {
    if (!state.projects.some((p) => p.id === key)) return NOT_FOUND
    state.projects = state.projects.filter((p) => p.id !== key)
    return state
  }).then((r) => settle(r, `项目 ${key}`))
}

/** 按给定 id 顺序重排项目（未列出的保持相对顺序排在后面）。 */
export function reorderProjects(ids) {
  if (!Array.isArray(ids)) return fail("ids 必须是数组")
  const order = ids.map((v) => String(v))
  return updateState((state) => {
    const index = new Map(order.map((id, i) => [id, i]))
    state.projects = [...state.projects].sort((a, b) => {
      const ai = index.has(a.id) ? index.get(a.id) : Number.MAX_SAFE_INTEGER
      const bi = index.has(b.id) ? index.get(b.id) : Number.MAX_SAFE_INTEGER
      return ai - bi
    })
    return state
  })
}

/** 在指定项目下新增/更新任务。 */
export function saveTask(projectId, taskInput) {
  const pid = typeof projectId === "string" ? projectId : ""
  if (!pid) return fail("缺少项目 id")
  if (!asObject(taskInput)) return fail("task 必须是对象")
  if (typeof taskInput.title !== "string" || !taskInput.title.trim()) return fail("任务标题不能为空")

  return updateState((state) => {
    const project = state.projects.find((p) => p.id === pid)
    if (!project) return NOT_FOUND
    const existing = taskInput.id ? project.tasks.find((t) => t.id === taskInput.id) : undefined
    const merged = normalizeProject({
      ...project,
      tasks: existing
        ? project.tasks.map((t) => (t.id === existing.id ? { ...t, ...taskInput } : t))
        : [...project.tasks, taskInput],
    })
    if (merged === null) return state
    project.tasks = merged.tasks
    project.updatedAt = new Date().toISOString()
    return state
  }).then((r) => settle(r, `项目 ${pid}`))
}

export function deleteTask(projectId, taskId) {
  const pid = typeof projectId === "string" ? projectId : ""
  const tid = typeof taskId === "string" ? taskId : ""
  if (!pid || !tid) return fail("缺少项目 id 或任务 id")
  return updateState((state) => {
    const project = state.projects.find((p) => p.id === pid)
    if (!project) return NOT_FOUND
    project.tasks = project.tasks.filter((t) => t.id !== tid)
    project.updatedAt = new Date().toISOString()
    return state
  }).then((r) => settle(r, `项目 ${pid}`))
}

export function saveMilestone(projectId, milestoneInput) {
  const pid = typeof projectId === "string" ? projectId : ""
  if (!pid) return fail("缺少项目 id")
  if (!asObject(milestoneInput)) return fail("milestone 必须是对象")
  if (typeof milestoneInput.title !== "string" || !milestoneInput.title.trim()) return fail("里程碑标题不能为空")

  return updateState((state) => {
    const project = state.projects.find((p) => p.id === pid)
    if (!project) return NOT_FOUND
    const existing = milestoneInput.id ? project.milestones.find((m) => m.id === milestoneInput.id) : undefined
    const merged = normalizeProject({
      ...project,
      milestones: existing
        ? project.milestones.map((m) => (m.id === existing.id ? { ...m, ...milestoneInput } : m))
        : [...project.milestones, milestoneInput],
    })
    if (merged === null) return state
    project.milestones = merged.milestones
    project.updatedAt = new Date().toISOString()
    return state
  }).then((r) => settle(r, `项目 ${pid}`))
}

export function deleteMilestone(projectId, milestoneId) {
  const pid = typeof projectId === "string" ? projectId : ""
  const mid = typeof milestoneId === "string" ? milestoneId : ""
  if (!pid || !mid) return fail("缺少项目 id 或里程碑 id")
  return updateState((state) => {
    const project = state.projects.find((p) => p.id === pid)
    if (!project) return NOT_FOUND
    project.milestones = project.milestones.filter((m) => m.id !== mid)
    project.updatedAt = new Date().toISOString()
    return state
  }).then((r) => settle(r, `项目 ${pid}`))
}

/**
 * 整份导入：用给定 JSON 覆盖当前看板。
 *
 * 覆盖前把现有 delivery.json 备份为 `delivery.json.bak-<timestamp>`，
 * 误导入可手工恢复。输入非法（非对象、JSON 已损坏、结构不合法）时拒绝
 * 并回 {ok:false}，绝不误清空已有数据；输入是「合法但空」的看板对象时
 * 视为用户明确要清空，允许覆盖。
 */
export function importState(input) {
  if (!asObject(input)) return fail("导入内容必须是对象")
  const normalized = normalizeState(input)
  // 结构非法时 normalizeState 收敛为空看板，但这里要区分「合法空看板」与「非法输入」：
  // 合法空看板 {projects: []} 与非法输入 {projects: "nope"} 都得到空 projects，
  // 因此用原始输入的 projects 是否数组来判断是否接受覆盖。
  if (!Array.isArray(input.projects)) return fail("导入内容缺少 projects 数组")

  return updateState(() => {
    try {
      mkdirSync(boardHome(), { recursive: true })
      const file = statePath()
      if (existsSync(file)) {
        const ts = new Date().toISOString().replace(/[:.]/g, "-")
        copyFileSync(file, path.join(boardHome(), `delivery.json.bak-${ts}`))
      }
    } catch {
      // 备份失败不阻断导入（但会让「可恢复」承诺打折），继续覆盖
    }
    return normalized
  })
}
