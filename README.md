# Delivery Board DSH

在 DSH 左侧栏提供「项目管理」入口和多项目交付看板，用于查看项目进度、里程碑、任务和风险，并在项目详情页直接编辑。

[![npm](https://img.shields.io/npm/v/@gxx-labs/delivery-board-dsh)](https://www.npmjs.com/package/@gxx-labs/delivery-board-dsh) [GitHub](https://github.com/gxx950224/delivery-board-dsh)

## 功能

- 首页统计项目总数、进行中、阻塞、已交付、有风险和平均进度。
- 按项目、客户或负责人搜索，并按状态筛选。
- 创建和编辑项目的客户、负责人、状态、优先级、日期、概述和下一步行动。
- 管理里程碑、任务和风险项。
- 有任务时按任务完成度计算进度；没有任务时可以手动填写进度。
- 对逾期里程碑、阻塞项目和逾期中的项目显示风险状态。

## 安装

在 DSH 的插件管理器中安装：

```text
@gxx-labs/delivery-board-dsh
```

也可以安装到 desktop profile：

```powershell
npm install @gxx-labs/delivery-board-dsh --prefix "$env:USERPROFILE\.dsh\profiles\desktop"
```

安装或升级后，从托盘完全退出并重新启动 DSH。

## 使用

1. 打开左侧栏的「项目管理」。
2. 在首页搜索或筛选项目，查看整体交付状态。
3. 点击项目卡片进入详情页。
4. 在详情页编辑项目信息、里程碑、任务和风险项。
5. 删除项目时需要二次确认。

## 数据与配置

默认数据文件为：

```text
~/.dsh/delivery-board/delivery.json
```

也可以通过环境变量 `DELIVERY_BOARD_HOME` 指定数据目录。插件会在写入时使用临时文件再替换目标文件；文件缺失、损坏或结构不合法时显示空看板，避免页面直接崩溃。

写入接口只接受本机 loopback 请求。写入成功后服务端返回完整看板快照，页面以快照为准。

## 开发

```bash
npm install
npm run build
npm test
npm run verify
```

`dist/` 是随包发布的浏览器 bundle，`lib/` 是宿主侧代码。

## 许可

MIT
