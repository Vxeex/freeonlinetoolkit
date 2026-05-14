// Post-build script: copies each directory's index.html one level up
// so both /slug/ and /slug work without Cloudflare's 308 redirect.
// Example: dist/mortgage-calculator/index.html → dist/mortgage-calculator.html

import { readdirSync, copyFileSync, existsSync, statSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const distDir = join(__dirname, '..', 'dist');

let count = 0;
for (const entry of readdirSync(distDir)) {
  const fullPath = join(distDir, entry);
  if (!statSync(fullPath).isDirectory()) continue;

  const indexHtml = join(fullPath, 'index.html');
  if (!existsSync(indexHtml)) continue;

  const dest = join(distDir, entry + '.html');
  copyFileSync(indexHtml, dest);
  count++;
}

console.log(`[html-copy] Created ${count} .html fallback files for slash-less URLs`);
