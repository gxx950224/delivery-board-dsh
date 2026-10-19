# delivery-board-dsh

DSH 插件：左侧栏「**项目管理**」入口 + 多项目交付看板。首页一屏看清每个项目的
进度与关键状态，点进去看详情并直接编辑。

> 包名 `delivery-board-dsh` 中的 `-dsh` 后缀用于标明这是 DeepSeek Harness 插件。
> HTTP 路由（`/api/delivery-board/*`）与数据目录（`<DSH_HOME>/delivery-board/`）
> 保持不含后缀，升级到本版本不会影响既有数据。

## 功能

**左侧栏入口** — 在 `sidebar.panellist` 注册图标与「项目管理」，与「插件」
「自动化任务」并列；点击切换到中央 `main` 面板。

**看板首页**
- 顶部统计卡：项目总数 / 进行中 / 阻塞 / 已交付 / 有风险 / 平均进度
- 项目卡片：名称、状态徽章、进度条、客户、负责人、截止日期、风险或逾期标记、
  下一步行动、里程碑与任务完成数、风险数
- 搜索（项目 / 客户 / 负责人）与状态筛选（含「有风险」）
- 空态与「无匹配结果」态

**新建项目** — 名称（必填）、客户、负责人、状态、优先级、起止日期、概述、下一步行动。

**项目详情**
- 返回看板；删除项目（二次确认）
- 交付进度：无任务时可手动填写；有任务时由任务完成度自动计算并标注
- 项目信息编辑（上述全部字段）——未改动时保存按钮为禁用的「已保存」
- 里程碑：增 / 勾选完成 / 删；逾期项标红并计入风险
- 任务：增 / 改状态（待办 · 进行中 · 已完成）/ 删
- 风险项：增 / 删，按严重度着色

## 数据

| 项 | 值 |
|---|---|
| 文件 | `<DSH_HOME>/delivery-board/delivery.json`（默认 `~/.dsh/delivery-board/delivery.json`） |
| 覆盖 | 环境变量 `DELIVERY_BOARD_HOME` |
| 写入 | 先写 `<file>.<pid>.tmp` 再 rename 覆盖；进程内写操作串行化 |

读取永不抛错：文件缺失、JSON 损坏、结构非法一律降级为空看板——宁可显示空态，
也不因为一个坏文件白屏。

**风险判定**：状态为 `blocked`；或进行中且已过截止日期；或存在逾期未完成的里程碑。
已交付 / 已归档不计风险。「今天」由宿主按本地日期计算并随响应下发，
客户端不做时区推断。

## HTTP 接口

| 方法 | 路径 | 说明 |
|---|---|---|
| GET | `/api/delivery-board/state` | 完整看板快照（含 `today` 与派生统计） |
| POST | `/api/delivery-board/project` | 新建（无 `id`）或更新项目 |
| POST | `/api/delivery-board/project/delete` | `{ id }` |
| POST | `/api/delivery-board/project/reorder` | `{ ids: [...] }` |
| POST | `/api/delivery-board/task` | `{ projectId, task }` |
| POST | `/api/delivery-board/task/delete` | `{ projectId, taskId }` |
| POST | `/api/delivery-board/milestone` | `{ projectId, milestone }` |
| POST | `/api/delivery-board/milestone/delete` | `{ projectId, milestoneId }` |

读开放（同源页面即可）；**写操作限本机 loopback**，非本机返回 403。
写成功后一律回传完整快照，客户端以此为准，不自己算派生指标。

## 开发

```bash
pnpm install
pnpm run build      # esbuild → dist/client.js
pnpm test           # node:test，95 个用例
pnpm run verify     # 校验 bundle 是否符合客户端模块契约
```

### 两个容易踩的坑

1. **侧栏 `id` 必须等于 `main` 的 `key`**。`ctx.layout.selectPanel(id)` 在
   `main` 未注册该 key 时直接抛错。两端共用 `PANEL_ID` 常量，并由
   `verify-bundle.mjs` 与 `test/bundle.test.mjs` 双重断言。
2. **bundle 包装的 `id` 必须等于 `package.json` 的包名**——客户端加载器按包名
   建模块表键，写错会在浏览器里才炸。构建脚本从 `package.json` 读取，不硬编码。

另外：`package.json` 的 `dsh.client.inject` 是**包名数组**（仅用于 boot 图排序），
bundle 导出的 `inject` 是**Cordis 服务键**，两者语义不同。

### 为什么用同源路由而不是 Remote/typert

已安装的第三方插件拿不到 `host.call`（那是动态运行时的契约），而 typert 的
`@Remote` 契约由 DSH 自身的构建流水线生成、第三方无法手写。同源
`webServer` 路由 + `fetch` 是这类插件读写宿主数据的可行路径。

## 安装

### 方式一：在 DSH 界面里安装（推荐）

**设置 → 插件 → 添加插件**，填入包名：

```
delivery-board-dsh
```

本包声明了 `dsh.bundle.patch`（指向自带的 `cordis.patch.yml`），所以 DSH 的
安装器能把它作为 profile layer 正确挂载——Loader 行由包自己提供，**无需手工
编辑 profile**。

> 若安装器提示 `delivery-board-dsh declares no dsh.bundle`，说明拿到的是
> 0.1.0；0.1.1 起已自带 bundle patch，请升级。

### 方式二：命令行

```bash
dsh plugin --profile <profile> add delivery-board-dsh
```

### 方式三：手工安装（不使用插件管理器时）

```bash
# 1. 备份（示例用 desktop profile）
cp ~/.dsh/profiles/desktop/{package.json,pnpm-lock.yaml,cordis.patch.yml} ~/.dsh/profiles/desktop/.backup/

# 2. 在 profile 的 package.json 加依赖
#    "delivery-board-dsh": "^0.2.0"

# 3. 在 profile 目录安装
pnpm install

# 4. 若无插件管理器代劳，在 cordis.patch.yml 追加
#    （行名必须是裸包名，子路径会导致浏览器半不被注册）
# - insert:
#     - id: delivery-board-dsh
#       name: 'delivery-board-dsh'
```

profile 若声明 `patchReload: live` 且 `dsh-hmr` 处于 active，改动会热应用；
否则刷新页面，再不行则重启 DSH（Node 会缓存已加载模块的真实路径）。

> **注意**：本插件只依赖宿主的运行时服务与静态种子模块（`react`、
> `@deepseek-ai/dsh-client-ui-primitives`），**没有把 `@deepseek-ai/*` 写进
> 依赖**——它们由 DSH 自身提供。装到 profile 里若出现 peer 依赖告警属正常。

## 前端规范

本插件按 DSH 前端规范（对照 shipped 的 `dsh-client-ui-schedule` /
`dsh-client-ui-plugin-manager`）改造：

- **复用 primitives**：`Button` / `Input` / `Tag` / `Checkbox` / `Modal` /
  `SegmentedControl` / `Toast` / `Icon*` 均来自
  `@deepseek-ai/dsh-client-ui-primitives`（静态种子，无额外依赖）。
  DSH 无进度条 / Textarea / Select 原语，这三处保留功能自有实现并对齐
  Input 的几何（32px 高、0.5px 描边、`--dsw-radius-md`）。
- **CSS Modules**：`client/Dbd.module.css` 经 esbuild `local-css` 作用域化，
  构建脚本把它按 DSH 约定注入为 `<style data-plugin data-plugin-css>`——
  客户端模块系统 `claimStyles()` 认领、卸载时 `removeOwnedStyles()` 清理。
- **只用设计令牌**：圆角走 `--dsw-radius-{sm,md,lg}`，描边 0.5px
  `--dsw-alias-border-l4`，文案色阶 `label-primary/secondary/tertiary/caption`，
  交互底 `--dsw-alias-interactive-bg-hover`，焦点 `--dsw-focus-ring-*`。
- **页面骨架对齐 shipped 页面**：960px 内容宽、`clamp(24px,4vw,48px)` 留白、
  页首 `h1` 20px/500/28px、控件高度 28/32/36。
- **文案 i18n**：`ctx.locale.register(NS, { zh, en })`，两处注册都声明
  `locale: NS`（渲染框架据此注入 `t`），侧栏 `label` 用 thunk 以便切语言跟随。
- **无障碍**：破坏性操作走 `Modal`（不用 `window.confirm`）；图标按钮带
  `aria-label`；进度条带 `role="progressbar"`；筛选带 `role="tablist"`；
  加载/空态带 `role="status"`、错误带 `role="alert"`；尊重
  `prefers-reduced-motion`。

## 结构

```
package.json              双面包声明（main = 宿主半，exports["./client"] = 浏览器半）
lib/store.js              纯数据层：读写、校验、派生指标
lib/mutations.js          变更操作（读-改-写 + NOT_FOUND 哨兵）
lib/index.js              宿主半：webServer 路由
client/index.tsx          浏览器半：侧栏入口 + 看板 + 详情 + 结果提示（JSX + primitives）
client/Dbd.module.css     CSS Modules：只用 --dsw-* 令牌，经 esbuild local-css 作用域化
dist/client.js            构建产物（__ModuleLoader__ 包裹，CSS 随 bundle 注入）
scripts/build-client.mjs  esbuild 构建（JSX automatic + CSS local-css + style 注入）
scripts/verify-bundle.mjs 契约/规范校验（纯度、CSS 令牌、槽位一致性）
test/                     store / routes / plugin-load / bundle / render / packaging
```

`pnpm run verify` 会在发布前把上面的规范断言跑一遍（模块纯度、CSS 令牌、
无硬编码颜色、无 `window.confirm`、侧栏 id 与 main key 一致等）。
