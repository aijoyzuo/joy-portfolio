// next build 產出的 out/ 內容複製到 repo 根目錄，讓 GitHub Pages（main branch / root）能直接讀到。
const fs = require('fs');
const path = require('path');

const root = path.resolve(__dirname, '..');
const outDir = path.join(root, 'out');

if (!fs.existsSync(outDir)) {
  console.error('找不到 out/，請先執行 npm run build');
  process.exit(1);
}

const KEEP = new Set([
  '.git', '.gitignore', 'node_modules', 'out', '.next',
  'app', 'components', 'lib', 'public', 'scripts',
  'next.config.js', 'package.json', 'package-lock.json',
  'postcss.config.js', 'tailwind.config.js', 'tsconfig.json', 'README.md',
]);

for (const entry of fs.readdirSync(root)) {
  if (!KEEP.has(entry)) {
    fs.rmSync(path.join(root, entry), { recursive: true, force: true });
  }
}

fs.cpSync(outDir, root, { recursive: true });
console.log('已將 out/ 內容複製到 repo 根目錄，接下來執行 git add -A && git commit && git push 即可部署。');
