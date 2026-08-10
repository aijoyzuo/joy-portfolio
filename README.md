# Joy Portfolio — Next.js + Tailwind（正式建置版）

前端工程師 Joy 的個人作品集網站。

## 本網站為測試 AI Agent 協作呈現而製作。

整個網站的設計、排版、互動動畫、內容調整，是以既有作品集網站為原型，透過與 AI Agent（Claude）對話完成，用來驗證 AI 輔助前端協作開發的可行性與效率，並了解無使用經驗者看到的畫面過程。頁面內容為真實作品集資料，但製作過程本身即為此次測試的主軸。

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

## 結構

- `app/` — App Router 頁面與全站 layout
- `components/` — Nav, Hero, About, Projects, Others, Contact, Loader
- `components/useReveal.ts` / `useEyeTrack.ts` / `useNarrow.ts` 
- `lib/data.ts` — 技能、專案、其他成就資料
- `public/assets/` — WebP 圖片

## 更新內容

- **有程式經驗者**：可直接在編輯器中開啟 \`components/\`、\`lib/data.ts\` 微調文字、圖片、版面，改完 \`npm run build\` 重新部署即可，不需要每次都透過 AI 對話。
- **無程式經驗者**：回到製作此網站的 AI 對話中提出修改需求，取得更新後的專案檔案，重複上方「部署到 GitHub Pages」步驟覆蓋即可。

## 待辦

- 「留言板」「Amelia Salon」「寬微廣告公司」的 demo/github 連結目前留白或沿用 aijoyzuo 首頁，需換成正式連結
