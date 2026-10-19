/**
 * 数据层：项目交付看板的读写、校验与派生指标。
 *
 * 设计原则
 * - `readState()` 永不抛错：文件缺失、JSON 损坏、结构非法一律降级为空状态。
 *   看板宁可显示空态，也不能因为一个坏文件白屏。
 * - 写入先落 `.tmp` 再 rename 覆盖（Windows 上同样原子），避免中断留下半个文件。
 * - 进程内写操作串行化，避免并发 POST 互相覆盖。
 * - 校验只裁剪不合法的字段值，不因单个字段报错而拒绝整份状态；
 *   只有结构性错误（不是对象、项目不是数组）才返回 {ok:false}。
 * - 派生指标在宿主侧计算并随响应下发，客户端不重复实现，保证前后端一致。
 */
import { readFileSync, writeFileSync, mkdirSync, renameSync, existsSync, rmSync } from "node:fs"
import os from "node:os"
import path from "node:path"

export const STATE_VERSION = 1

const PROJECT_STATUS = ["planning", "active", "blocked", "delivered", "archived"]
const PRIORITY = ["high", "medium", "low"]
const TASK_STATUS = ["todo", "doing", "done"]
const RISK_SEVERITY = ["high", "medium", "low"]

const DATE_RE = /^\d{4}-\d{2}-\d{2}$/
const ID_RE = /^[A-Za-z0-9_-]{1,64}$/

/** 配置根：默认 <DSH_HOME|~/.dsh>/delivery-board，可用 DELIVERY_BOARD_HOME 覆盖。 */
export function boardHome() {
  if (process.env.DELIVERY_BOARD_HOME) return process.env.DELIVERY_BOARD_HOME
  const dshHome = process.env.DSH_HOME || path.join(os.homedir(), ".dsh")
  return path.join(dshHome, "delivery-board")
}

export function statePath() {
  return path.join(boardHome(), "delivery.json")
}

/** 本地日期 YYYY-MM-DD（宿主本地时区；客户端时区不可依赖）。 */
export function todayLocal(now = new Date()) {
  const y = now.getFullYear()
  const m = String(now.getMonth() + 1).padStart(2, "0")
  const d = String(now.getDate()).padStart(2, "0")
  return `${y}-${m}-${d}`
}

/**
 * 「目标不存在」哨兵：mutate 返回它表示本次变更的前置条件不成立，
 * updateState 不落盘并回 {ok:false, error:'not-found'}，供路由层转 404/400。
 */
export const NOT_FOUND = Symbol("delivery-board.not-found")

let idCounter = 0
/** 短随机 id：前缀 + base36 时间戳 + 计数器，保证同毫秒内批量创建也不重复。 */
function newId(prefix) {
  idCounter = (idCounter + 1) % 46656
  const t = Date.now().toString(36)
  const c = idCounter.toString(36).padStart(3, "0")
  const r = Math.floor(Math.random() * 46656).toString(36).padStart(3, "0")
  return `${prefix}_${t}${c}${r}`
}

/* ── 字段收敛 ───────────────────────────────────────────── */

function str(v, max = 400) {
  if (v === undefined || v === null) return ""
  if (typeof v === "number" || typeof v === "boolean") return String(v).slice(0, max)
  if (typeof v !== "string") return ""
  return v.trim().slice(0, max)
}

function pick(v, allowed, fallback) {
  const s = typeof v === "string" ? v : ""
  return allowed.includes(s) ? s : fallback
}

function dateStr(v) {
  const s = str(v, 10)
  if (!s) return ""
  if (!DATE_RE.test(s)) return ""
  // 排除 2026-13-45 这类形状正确但不存在的日期
  const [y, m, d] = s.split("-").map(Number)
  const probe = new Date(Date.UTC(y, m - 1, d))
  if (probe.getUTCFullYear() !== y || probe.getUTCMonth() !== m - 1 || probe.getUTCDate() !== d) return ""
  return s
}

/** 两个 YYYY-MM-DD 字符串相差的天数（b - a）；任一为空或非法返回 null。 */
export function daysBetween(a, b) {
  if (typeof a !== "string" || typeof b !== "string") return null
  if (!DATE_RE.test(a) || !DATE_RE.test(b)) return null
  const da = new Date(`${a}T00:00:00Z`).getTime()
  const db = new Date(`${b}T00:00:00Z`).getTime()
  if (Number.isNaN(da) || Number.isNaN(db)) return null
  return Math.round((db - da) / 86400000)
}

function clampInt(v, min, max, fallback) {
  // 注意：这里必须用 parseFloat 而不是 parseInt——"37.6" 应当四舍五入为 38。
  const n = typeof v === "number" ? v : Number.parseFloat(String(v ?? ""))
  if (!Number.isFinite(n)) return fallback
  return Math.min(max, Math.max(min, Math.round(n)))
}

function ownId(v, prefix) {
  const s = str(v, 64)
  return ID_RE.test(s) ? s : newId(prefix)
}

function milestone(input) {
  return {
    id: ownId(input?.id, "m"),
    title: str(input?.title, 200),
    due: dateStr(input?.due),
    done: input?.done === true,
  }
}

function task(input) {
  return {
    id: ownId(input?.id, "t"),
    title: str(input?.title, 200),
    status: pick(input?.status, TASK_STATUS, "todo"),
    assignee: str(input?.assignee, 80),
    due: dateStr(input?.due),
  }
}

function risk(input) {
  return {
    id: ownId(input?.id, "r"),
    title: str(input?.title, 200),
    severity: pick(input?.severity, RISK_SEVERITY, "medium"),
    note: str(input?.note, 500),
  }
}

/** 归一化单个项目；非法输入返回 null（由调用方决定是丢弃还是报错）。 */
export function normalizeProject(input) {
  if (input === null || typeof input !== "object" || Array.isArray(input)) return null
  const name = str(input.name, 120)
  if (!name) return null
  const now = new Date().toISOString()
  const createdAt = str(input.createdAt, 40) || now
  return {
    id: ownId(input.id, "p"),
    name,
    client: str(input.client, 120),
    owner: str(input.owner, 80),
    status: pick(input.status, PROJECT_STATUS, "planning"),
    priority: pick(input.priority, PRIORITY, "medium"),
    startDate: dateStr(input.startDate),
    dueDate: dateStr(input.dueDate),
    overview: str(input.overview, 2000),
    nextAction: str(input.nextAction, 500),
    deliveredAt: dateStr(input.deliveredAt),
    progress: clampInt(input.progress, 0, 100, 0),
    createdAt,
    updatedAt: now,
    milestones: Array.isArray(input.milestones) ? input.milestones.map(milestone).filter((m) => m.title) : [],
    tasks: Array.isArray(input.tasks) ? input.tasks.map(task).filter((t) => t.title) : [],
    risks: Array.isArray(input.risks) ? input.risks.map(risk).filter((r) => r.title) : [],
  }
}

/** 归一化整份状态；任何结构性问题都收敛到空看板。 */
export function normalizeState(input) {
  if (input === null || typeof input !== "object" || Array.isArray(input)) {
    return { version: STATE_VERSION, projects: [] }
  }
  const raw = Array.isArray(input.projects) ? input.projects : []
  const projects = []
  const seen = new Set()
  for (const item of raw) {
    const p = normalizeProject(item)
    if (p === null) continue
    // 去重：同 id 只保留第一个，避免集合视图出现重复 key
    if (seen.has(p.id)) continue
    seen.add(p.id)
    projects.push(p)
  }
  return { version: STATE_VERSION, projects }
}

/* ── 读写 ───────────────────────────────────────────────── */

let writeChain = Promise.resolve()

/** 同步读取；任何异常都降级为空状态。 */
export function readState() {
  const file = statePath()
  try {
    if (!existsSync(file)) return { version: STATE_VERSION, projects: [] }
    const raw = readFileSync(file, "utf8")
    if (!raw.trim()) return { version: STATE_VERSION, projects: [] }
    return normalizeState(JSON.parse(raw))
  } catch {
    return { version: STATE_VERSION, projects: [] }
  }
}

/** 同步原子写入（内部用，调用方需自行串行化）。 */
function writeStateSync(state) {
  const dir = boardHome()
  mkdirSync(dir, { recursive: true })
  const file = statePath()
  const tmp = `${file}.${process.pid}.tmp`
  try {
    writeFileSync(tmp, JSON.stringify(state, null, 2) + "\n", "utf8")
    renameSync(tmp, file)
  } catch (e) {
    try { rmSync(tmp, { force: true }) } catch { /* 清理失败不影响主流程 */ }
    throw e
  }
}

/**
 * 串行化的「读-改-写」。mutate 收到当前状态，返回新状态（或就地改后返回同一个）。
 * 返回 { ok, state?, error? }。
 */
export function updateState(mutate) {
  const run = writeChain.then(() => {
    try {
      const current = readState()
      const next = mutate(current)
      if (next === NOT_FOUND) return { ok: false, error: "not-found", notFound: true }
      const normalized = normalizeState(next ?? current)
      writeStateSync(normalized)
      return { ok: true, state: normalized }
    } catch (e) {
      return { ok: false, error: e instanceof Error ? e.message : String(e) }
    }
  })
  // 链条自身永不 reject，否则一次失败会毒化后续所有写入
  writeChain = run.then(() => undefined, () => undefined)
  return run
}

/* ── 派生指标 ───────────────────────────────────────────── */

/** 有任务时以任务完成度为准；否则用人工填写的 progress。 */
export function progressOf(project) {
  const tasks = Array.isArray(project?.tasks) ? project.tasks : []
  if (tasks.length === 0) return clampInt(project?.progress, 0, 100, 0)
  const done = tasks.filter((t) => t.status === "done").length
  return Math.round((done / tasks.length) * 100)
}

/** 逾期未完成的里程碑。 */
export function overdueMilestones(project, today) {
  const list = Array.isArray(project?.milestones) ? project.milestones : []
  return list.filter((m) => !m.done && m.due && m.due < today)
}

/**
 * 是否「有风险」：
 * - 状态为 blocked；或
 * - 进行中且已过截止日期；或
 * - 存在逾期未完成的里程碑。
 * 已交付/已归档不计风险。
 */
export function isAtRisk(project, today) {
  const status = project?.status
  if (status === "delivered" || status === "archived") return false
  if (status === "blocked") return true
  if (status === "active" && project?.dueDate && project.dueDate < today) return true
  return overdueMilestones(project, today).length > 0
}

/** 单个项目的视图（含派生字段），供看板与详情共用。 */
export function projectView(project, today) {
  const tasks = Array.isArray(project.tasks) ? project.tasks : []
  const milestones = Array.isArray(project.milestones) ? project.milestones : []
  const risks = Array.isArray(project.risks) ? project.risks : []
  const dueInDays = daysBetween(today, project.dueDate ?? "")
  const doneOrClosed = project.status === "delivered" || project.status === "archived"
  return {
    ...project,
    progress: progressOf(project),
    progressDerived: tasks.length > 0,
    taskCounts: {
      total: tasks.length,
      done: tasks.filter((t) => t.status === "done").length,
      doing: tasks.filter((t) => t.status === "doing").length,
      todo: tasks.filter((t) => t.status === "todo").length,
    },
    milestoneCounts: {
      total: milestones.length,
      done: milestones.filter((m) => m.done).length,
    },
    overdueMilestones: overdueMilestones(project, today).map((m) => m.id),
    riskCount: risks.length,
    atRisk: isAtRisk(project, today),
    overdue: Boolean(
      project.dueDate && project.dueDate < today && project.status !== "delivered" && project.status !== "archived",
    ),
    dueInDays,
    dueSoon: dueInDays !== null && dueInDays >= 0 && dueInDays <= 3 && !doneOrClosed,
    taskViews: tasks.map((t) => {
      const d = daysBetween(today, t.due ?? "")
      return {
        ...t,
        overdue: t.status !== "done" && t.due !== "" && t.due < today,
        dueSoon: t.status !== "done" && d !== null && d >= 0 && d <= 3,
        dueInDays: d,
      }
    }),
    milestoneSoon: milestones
      .filter((m) => !m.done && m.due)
      .map((m) => ({ id: m.id, dueInDays: daysBetween(today, m.due) }))
      .filter((x) => x.dueInDays !== null && x.dueInDays >= 0 && x.dueInDays <= 3)
      .map((x) => x.id),
  }
}

/** 看板顶部统计。 */
export function summarize(projects, today) {
  const views = projects.map((p) => projectView(p, today))
  const count = (s) => views.filter((v) => v.status === s).length
  const avg = views.length === 0 ? 0 : Math.round(views.reduce((sum, v) => sum + v.progress, 0) / views.length)
  return {
    total: views.length,
    planning: count("planning"),
    active: count("active"),
    blocked: count("blocked"),
    delivered: count("delivered"),
    archived: count("archived"),
    atRisk: views.filter((v) => v.atRisk).length,
    avgProgress: avg,
  }
}

/** 完整响应体：服务端是唯一真相，客户端直接采用。 */
export function boardPayload(state, today) {
  const projects = Array.isArray(state?.projects) ? state.projects : []
  return {
    ok: true,
    today,
    projects: projects.map((p) => projectView(p, today)),
    summary: summarize(projects, today),
    reminders: buildReminders(projects, today),
  }
}

/**
 * 跨项目汇总的「到期提醒」：今天到期 / 已逾期的任务与里程碑。
 * 宿主无通知/调度服务，退化为「打开看板即见」的本地提醒条。
 */
function buildReminders(projects, today) {
  const list = []
  for (const p of projects) {
    if (p.status === "delivered" || p.status === "archived") continue
    for (const t of Array.isArray(p.tasks) ? p.tasks : []) {
      if (t.status === "done" || !t.due) continue
      const d = daysBetween(today, t.due)
      if (d === null || d > 3) continue
      list.push({
        projectId: p.id,
        projectName: p.name,
        kind: "task",
        title: t.title,
        due: t.due,
        overdue: d < 0,
        dueInDays: d,
      })
    }
    for (const m of Array.isArray(p.milestones) ? p.milestones : []) {
      if (m.done || !m.due) continue
      const d = daysBetween(today, m.due)
      if (d === null || d > 3) continue
      list.push({
        projectId: p.id,
        projectName: p.name,
        kind: "milestone",
        title: m.title,
        due: m.due,
        overdue: d < 0,
        dueInDays: d,
      })
    }
  }
  // 逾期在前，随后按剩余天数升序
  return list.sort((a, b) => {
    if (a.overdue !== b.overdue) return a.overdue ? -1 : 1
    return a.dueInDays - b.dueInDays
  })
}
