export const SKILLS = ['React', 'Next.js', 'Redux', 'TypeScript', 'JavaScript', 'TailwindCSS', 'Bootstrap', 'SQL', 'Supabase'];

// GitHub Pages 子路徑部署時，next.config.js 的 basePath 不會自動套用到寫死的字串路徑，這裡手動補上。
const BASE = process.env.NODE_ENV === 'production' ? '/joy-portfolio' : '';
const asset = (path: string) => `${BASE}${path}`;

export type FeaturedProject = {
  title: string;
  tags: string;
  bullets: string[];
  demo: string;
  demoLabel: string;
  github: string;
  githubLabel: string;
  thumbSrc: string;
};

export const FEATURED: FeaturedProject[] = [
  {
    title: '救渴の輕鬆小棧',
    tags: 'NEXT.JS / TYPESCRIPT / TAILWIND CSS / SUPABASE / POSTGRESQL',
    bullets: [
      '使用 Next.js App Router 架構開發，結合 Server Component 與 Client Component 分離資料拉取與互動邏輯。',
      '實作諧音注音模糊搜尋功能，支援關鍵字、分類、圖片標籤比對。',
      '後台管理系統及留言板功能開發。',
      'Vercel 部署，環境變數管理 Supabase API 金鑰。',
    ],
    demo: 'https://usaminjoke.vercel.app',
    demoLabel: '吳莎敏｜諧音梗圖搜尋',
    github: 'https://github.com/aijoyzuo/usaminjoke.git',
    githubLabel: 'https://github.com/aijoyzuo/usaminjoke',
    thumbSrc: asset('/assets/proj-suke.webp'),
  },
  {
    title: '醫美電商Redesign',
    tags: 'REACT / REDUX TOOLKIT / MSW V2 / CONTEXT API / BOOTSTRAP / REST API / JAVASCRIPT',
    bullets: [
      '從 Context API 遷移至 Redux Toolkit，保留 Toast 等輕量局部狀態使用 Context。',
      'JavaScript 重構為 TypeScript，建立型別安全的資料結構。',
      'MSW v2（Mock Service Worker）取代已停用的 API。',
      '完整電商流程實作：商品分類、購物車、結帳、優惠券系統、後臺增刪功能。',
    ],
    demo: 'https://aijoyzuo.github.io/myAnswerSkinCare/',
    demoLabel: 'Answer肌膚管理中心',
    github: 'https://github.com/aijoyzuo/myAnswerSkinCare.git',
    githubLabel: 'github.com/aijoyzuo/myAnswerSkinCare',
    thumbSrc: asset('/assets/proj-answer.webp'),
  },
  {
    title: 'Lazy Savior',
    tags: 'REACT / CONTEXT API / BOOTSTRAP / REST API / JAVASCRIPT',
    bullets: [
      'React Context API 建立全域狀態管理，處理問卷結果與跨元件資料共享。',
      '問卷權重邏輯與隨機轉盤機制設計，依使用者回答推薦不同結果。Pagination分頁功能實作。',
      'SNS 分享 API 整合。',
    ],
    demo: 'https://aijoyzuo.github.io/lazy-savior/',
    demoLabel: 'Lazy Savior',
    github: 'https://github.com/aijoyzuo/lazy-savior.git',
    githubLabel: 'github.com/aijoyzuo/lazy-savior',
    thumbSrc: asset('/assets/proj-lazysavior.webp'),
  },
];

export type SmallProject = {
  title: string;
  tags: string;
  demo: string;
  github: string;
  thumbSrc: string;
};

export const SMALL: SmallProject[] = [
  { title: '隨手記', tags: 'React (Vite) / Redux / JavaScript / REST API / Fetch API', demo: 'https://aijoyzuo.github.io/todo-react-redux/', github: 'https://github.com/aijoyzuo/todo-react-redux.git', thumbSrc: asset('/assets/proj-notes.webp') },
  { title: '留言板', tags: 'React (Vite) / Supabase JavaScript / Tailwind Next.js / TypeScript', demo: 'https://messageboard-five.vercel.app/', github: 'https://github.com/aijoyzuo/messageboard.git', thumbSrc: asset('/assets/proj-board.webp') },
  { title: 'Amelia Salon', tags: 'Freelance Project', demo: '', github: '', thumbSrc: asset('/assets/proj-amelia.webp') },
  { title: '寬微廣告公司', tags: 'Freelance Project', demo: '', github: '', thumbSrc: asset('/assets/proj-kwang.webp') },
];

export type OtherItem = {
  title: string;
  sub?: string;
  thumbSrc: string;
};

export const OTHERS: OtherItem[] = [
  { title: '行銷企劃', sub: '社群管理/剪輯/製圖', thumbSrc: asset('/assets/more-marketing.webp') },
  { title: 'WIREFRAME', sub: '後臺管理系統設計', thumbSrc: asset('/assets/more-wireframe.webp') },
  { title: 'GOOGLE ANALYTICS CERTIFICATION', sub: '2026/2/27', thumbSrc: asset('/assets/more-ga.webp') },
  { title: '日本語能力試驗', sub: 'N1', thumbSrc: asset('/assets/more-jlpt.webp') },
  { title: '人資主管', sub: '部立醫院/教育局', thumbSrc: asset('/assets/more-ai.webp') },
  { title: 'AI AGENT', thumbSrc: asset('/assets/more-hr.webp') },
];
