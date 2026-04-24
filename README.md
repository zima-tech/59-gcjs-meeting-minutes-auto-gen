# 会议纪要、研讨会自动生成文档工具

**部门**: 工程建设部

**序号**: 59

## 原需求描述

对工程会议语音转写、议题提取、纪要结构化、人工编辑和项目台账同步形成闭环。

保留原始 PRD 文档：

- [59_工程建设部_会议纪要、研讨会自动生成文档工具_PRD.md](./59_工程建设部_会议纪要、研讨会自动生成文档工具_PRD.md)
- [59_工程建设部_会议纪要、研讨会自动生成文档工具_需求文档.md](./59_工程建设部_会议纪要、研讨会自动生成文档工具_需求文档.md)

## 应用定位

会议纪要生成台 是一个独立的 Next.js App Router 管理后台，使用 Ant Design 蓝白浅色 B 端控制台风格，使用 Prisma + SQLite 进行本地持久化。核心模块包括：会议管理、语音转写、议题提取、纪要编辑、责任分工、台账同步。

## 技术栈

- Next.js App Router + React Hooks + TypeScript strict
- Ant Design 基础组件与主题 token
- Ant Design X 的 Sender、Bubble、Conversations 用于 AI 交互
- Prisma + SQLite，开发库为 `prisma/dev.db`
- CSS 样式隔离在 `app/globals.css` 的控制台命名空间内

## 本地启动

1. 安装依赖：`npm install`
2. 初始化数据库：`npm run db:init`
3. 启动开发服务：`npm run dev`
4. 打开 `http://localhost:3000`

## 常用命令

- `npm run verify`：检查标准目录、Ant Design X 和外部 CDN 约束
- `npm run typecheck`：TypeScript 严格检查
- `npm run build`：Next.js 构建检查
- `npm run db:seed`：重置并写入专业业务种子数据

## 数据闭环

- 页面首屏通过 `lib/service.ts` 读取 SQLite 数据；空库时自动写入专业演示数据。
- 新增记录、状态流转、删除确认和 AI 生成结果均通过 Server Actions 写入 Prisma。
- 高风险删除操作使用 Ant Design Modal 二次确认。
- OA、会议台账、成交批次、巡检批次等来源数据目前由 `lib/mock-integrations.ts` 以本地业务数据呈现，页面不展示接口接入说明。

## 部署说明

该目录可作为独立 Vercel 项目部署，构建命令为 `npm run build`。SQLite 适合本地演示和原型验证，生产环境建议在上线前将 `DATABASE_URL` 切换为 Vercel Postgres、托管 SQLite 或其他持久化数据库。

## 验证记录

- 已通过脚手架结构校验：`npm run verify`
- 已通过数据库初始化与种子数据写入：`npm run db:init`
- 已通过 TypeScript 严格检查：`npm run typecheck`
- 已通过 Next.js 生产构建：`npm run build`
