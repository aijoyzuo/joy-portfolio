# Joy Portfolio — Next.js + Tailwind（正式建置版）

前端工程師 Joy 的個人作品集網站。

## 這是什麼

**本網站為測試 AI Agent 協作呈現而製作。** 整個網站的設計、排版、互動動畫、內容調整，是以既有作品集網站為原型，透過與 AI Agent（Claude）對話完成，用來驗證 AI 輔助前端協作開發的可行性與效率，並了解無使用經驗者看到的畫面過程。頁面內容為真實作品集資料，但製作過程本身即為此次測試的主軸。

目前線上版本：https://aijoyzuo.github.io/joy-portfolio/ （部署後即可看到此版本）

## 為什麼換成這個版本

專案初期曾用單檔 base64 版與資料夾＋WebP 版兩種原型（DC 格式）快速迭代設計，但原型在瀏覽器裡才動態載入 React/ReactDOM，並用自訂樣板引擎即時解析畫面，載入明顯比一般網站慢。這個 Next.js 版本走正常前端建置流程：`next build` 直接產出最佳化過的靜態 HTML/CSS/JS，沒有執行期載入框架、沒有樣板解析開銷，載入速度等同一般靜態網站，是目前速度最快、最適合正式上線的版本。

## 開始

```bash
npm install
npm run dev       # http://localhost:3000 本機預覽
npm run build     # 產生 out/ 靜態站（next.config.js 已設定 output: 'export'）
```

## 部署到 GitHub Pages（https://aijoyzuo.github.io/joy-portfolio/）

1. 本機執行 `npm run build`，產生 `out/` 資料夾（`next.config.js` 已設定好 `basePath: '/joy-portfolio'`，不用再改）
2. 把 `out/` 資料夾內所有檔案上傳到 `aijoyzuo/joy-portfolio` repo 的 `main` branch 根目錄
3. Settings → Pages，Source 選 `main` branch / `root` → Save
4. 等待 1–2 分鐘，開啟 https://aijoyzuo.github.io/joy-portfolio/ 即可看到網站

## 已同步的內容（對齊目前設計）

- RWD 斷點：768px（Side Project 排版、小專案 grid 4→2 欄、What's more 跑馬燈單排→雙排）、576px（導覽列字體縮小、Work with me 縮成 ✉ 圖示以維持單行）
- 導覽列 / Hero 標題的追蹤滑鼠眼睛裝飾（JOY 的 O、Hi I'm JOY 的 O）
- Hero 區塊 Pac-Man 造型巡邏動畫
- 進站 Pac-Man 主題讀取動畫（頁面資源載完自動消失）
- What's more 雙向跑馬燈；GA / 日檢 / AI Agent / 人資主管四格已換上對應圖片
- 所有圖片改用 WebP 格式（比原始 PNG/JPG 小約 90%）
- 底部黑色色塊（無文字說明，改放在此 README）
- 導覽列與底部「Work with me」皆為 `mailto:` 連結，點擊直接開啟信箱

## 結構

- `app/` — App Router 頁面與全站 layout
- `components/` — Nav, Hero, About, Projects, Others, Contact, Loader
- `components/useReveal.ts` / `useEyeTrack.ts` / `useNarrow.ts` — 捲動淡入、滑鼠追蹤眼睛、雙斷點 RWD hook
- `lib/data.ts` — 技能、專案、其他成就資料
- `public/assets/` — WebP 圖片

## 更新內容

- **有程式經驗者**：可直接在編輯器中開啟 \`components/\`、\`lib/data.ts\` 微調文字、圖片、版面，改完 \`npm run build\` 重新部署即可，不需要每次都透過 AI 對話。
- **無程式經驗者**：回到製作此網站的 AI 對話中提出修改需求，取得更新後的專案檔案，重複上方「部署到 GitHub Pages」步驟覆蓋即可。

## 部署過程的已知問題與修正記錄

這個 Next.js 版本在部署到 GitHub Pages 子路徑（`/joy-portfolio/`）的過程中，AI 協作方犯了幾個應該一次到位、卻分批才修好的錯誤，記錄如下：

1. **漏放 `.nojekyll`**：GitHub Pages 預設用 Jekyll 處理網站，會忽略檔名開頭底線的資料夾（Next.js 的 `_next/` 剛好是這種），導致 CSS/JS 完全讀不到、畫面變成純文字無樣式。這是部署到 GitHub Pages 的基本必要檔案，一開始就該給，卻是後來才補上。
2. **`basePath` 只設定一半**：設定 `basePath: '/joy-portfolio'` 只會處理 Next.js 自己內部的路由和資源，程式碼裡「寫死」的圖片路徑字串（例如 `thumbSrc: '/assets/xxx.webp'`）不會自動套用這個前綴。結果圖片全部連到錯誤網址（少了 `/joy-portfolio`），導致圖片整批消失、版面跟著跑掉。這是同一個問題的一體兩面，應該在設定 basePath 當下就一併處理，卻分成兩次才發現、修正。
3. **Hero 圖片路徑忘記同步更新**：專案中途把所有圖片從 PNG/JPG 轉成 WebP 格式時，其他元件的路徑都改了，唯獨 Hero 區塊的圖片路徑漏改，還連著 `basePath` 問題一起發生，變成疊加的錯誤。

這些問題本質上都是「同一件事分兩三次講、分兩三次改」，造成使用者要重複下載、重新 build、重新上傳好幾輪。正常情況下，設定子路徑部署時，應該一次盤點所有寫死的絕對路徑（圖片、字型、其他靜態資源），加上 GitHub Pages 的固定必要設定（`.nojekyll`），一次到位。



- 「留言板」「Amelia Salon」「寬微廣告公司」的 demo/github 連結目前留白或沿用 aijoyzuo 首頁，需換成正式連結
