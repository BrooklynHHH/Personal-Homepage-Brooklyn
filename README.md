# 專案說明：Designer Portfolio

## 一、技術棧與依賴包

本專案為一個現代化的前端個人作品集網站，主要技術棧如下：

- **React 19**：主流前端框架，負責組件化開發與狀態管理。
- **Vite**：新一代前端構建工具，提供極速開發體驗。
- **Tailwind CSS 4**：實用優先的 CSS 框架，快速構建響應式美觀界面。
- **Framer Motion**：動畫庫，實現流暢的過場與互動效果。
- **Radix UI**：一系列無障礙、可組合的 React UI 元件。
- **shadcn/ui**：基於 Radix UI 的設計系統與元件集。
- **Lucide-react**：圖標庫，提供現代化 SVG 圖標。
- **react-router-dom 7**：路由管理。
- **react-hook-form、zod**：表單驗證與管理。
- **date-fns**：日期處理。
- **embla-carousel-react、recharts**：輪播與圖表。
- 其他：clsx、cmdk、next-themes、sonner、vaul 等。

> 依賴包詳見 `package.json`。

## 二、主要網頁內容與結構

網站為單頁應用（SPA），主要內容結構如下：

1. **導覽列（Navigation）**
   - LOGO 與網站名稱
   - 導航連結（About Me, Skills, Project, Contact me）
   - 行動裝置下拉選單
   - 履歷下載按鈕

2. **首頁 Hero 區塊**
   - 個人歡迎詞、職稱、所在地
   - 介紹文字
   - 動態 SVG 頭像插畫

3. **技能（Skills）區塊**
   - 展示多項技能（Git、Javascript、Sass、Tailwind CSS、ReactJs 等）
   - 動畫卡片效果

4. **經歷（Experience）區塊**
   - 以卡片方式展示主要工作經歷（如 Google、YouTube）
   - 各經歷含公司 LOGO、職稱、時間、描述

5. **關於我（About Me）區塊**
   - 個人簡介、學習歷程、技術熱情
   - 動態 SVG 插畫

6. **專案（Projects）區塊**
   - 展示代表性專案（如 Crypto Screener Application）
   - 專案描述、連結按鈕

7. **推薦（Testimonial）區塊**
   - 顯示來自不同人物的推薦語
   - 支援高亮 featured 樣式

8. **聯絡我（Contact）區塊**
   - 表單（姓名、Email、網站、訊息）
   - 社群連結（GitHub、Twitter、Linkedin、Instagram）
   - 聯絡資訊

9. **回頂部按鈕**

## 三、設計風格與元件體系

- **設計風格**：
  - 極簡現代，明亮主題為主，支援暗色模式
  - 大量留白、圓角、柔和陰影
  - 動畫豐富，交互流暢
  - 色彩以黑白灰為主，輔以品牌色點綴

- **元件體系**：
  - 主要 UI 元件來自 shadcn/ui 與 Radix UI，並有自定義封裝
  - `src/components/ui/` 目錄下包含按鈕、表單、對話框、輪播、圖表、導航等豐富元件
  - 樣式主要通過 Tailwind CSS 實現，並結合自定義 CSS 變數與主題

- **配置與別名**：
  - 透過 Vite 設定 `@` 為 `src` 目錄別名，方便導入
  - `components.json` 配置 shadcn/ui 風格與目錄結構

---

如需本地開發：

```bash
pnpm install
pnpm dev
```

---

本說明文件自動生成，歡迎補充與修正。 