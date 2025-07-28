# 项目说明：Designer Portfolio

## 一、技术栈与依赖包

本项目为一个现代化的前端个人作品集网站，主要技术栈如下：

- **React 19**：主流前端框架，负责组件化开发与状态管理。
- **Vite**：新一代前端构建工具，提供极速开发体验。
- **Tailwind CSS 4**：实用优先的 CSS 框架，快速构建响应式美观界面。
- **Framer Motion**：动画库，实现流畅的过场与互动效果。
- **Radix UI**：一系列无障碍、可组合的 React UI 组件。
- **shadcn/ui**：基于 Radix UI 的设计系统与组件集。
- **Lucide-react**：图标库，提供现代化 SVG 图标。
- **react-router-dom 7**：路由管理。
- **react-hook-form、zod**：表单验证与管理。
- **date-fns**：日期处理。
- **embla-carousel-react、recharts**：轮播与图表。
- 其他：clsx、cmdk、next-themes、sonner、vaul 等。

> 依赖包详见 `package.json`。

## 二、主要网页内容与结构

网站为单页应用（SPA），主要内容结构如下：

1. **导航栏（Navigation）**
   - LOGO 与网站名称
   - 导航链接（About Me, Skills, Project, Contact me）
   - 移动设备下拉菜单
   - 简历下载按钮

2. **首页 Hero 区块**
   - 个人欢迎词、职称、所在地
   - 介绍文字
   - 动态 SVG 头像插画

3. **技能（Skills）区块**
   - 展示多项技能（Git、Javascript、Sass、Tailwind CSS、ReactJs 等）
   - 动画卡片效果

4. **经历（Experience）区块**
   - 以卡片方式展示主要工作经历（如 Google、YouTube）
   - 各经历含公司 LOGO、职称、时间、描述

5. **关于我（About Me）区块**
   - 个人简介、学习历程、技术热情
   - 动态 SVG 插画

6. **项目（Projects）区块**
   - 展示代表性项目（如 Crypto Screener Application）
   - 项目描述、链接按钮

7. **推荐（Testimonial）区块**
   - 显示来自不同人物的推荐语
   - 支持高亮 featured 样式

8. **联系我（Contact）区块**
   - 表单（姓名、Email、网站、消息）
   - 社交链接（GitHub、Twitter、Linkedin、Instagram）
   - 联系信息

9. **回顶部按钮**

## 三、设计风格与组件体系

- **设计风格**：
  - 极简现代，明亮主题为主，支持暗色模式
  - 大量留白、圆角、柔和阴影
  - 动画丰富，交互流畅
  - 色彩以黑白灰为主，辅以品牌色点缀

- **组件体系**：
  - 主要 UI 组件来自 shadcn/ui 与 Radix UI，并有自定义封装
  - `src/components/ui/` 目录下包含按钮、表单、对话框、轮播、图表、导航等丰富组件
  - 样式主要通过 Tailwind CSS 实现，并结合自定义 CSS 变量与主题

- **配置与别名**：
  - 通过 Vite 设置 `@` 为 `src` 目录别名，方便导入
  - `components.json` 配置 shadcn/ui 风格与目录结构

---

如需本地开发：

```bash
pnpm install
pnpm dev
```

---

本说明文件自动生成，欢迎补充与修正。 