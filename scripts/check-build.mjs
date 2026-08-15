import { access, readFile, readdir, stat } from 'node:fs/promises';
import path from 'node:path';

const root = process.cwd();
const dist = path.join(root, 'dist');
const htmlPath = path.join(dist, 'index.html');
const html = await readFile(htmlPath, 'utf8');
const failures = [];

const assert = (condition, message) => {
  if (!condition) failures.push(message);
};

const ids = new Set([...html.matchAll(/\sid="([^"]+)"/g)].map((match) => match[1]));
const hrefs = [...html.matchAll(/\shref="([^"]+)"/g)].map((match) => match[1]);
const sources = [...html.matchAll(/\s(?:src|srcset)="([^"]+)"/g)]
  .flatMap((match) => match[1].split(','))
  .map((source) => source.trim().split(/\s+/)[0]);

for (const href of hrefs) {
  if (href.startsWith('#')) assert(ids.has(href.slice(1)), `Missing anchor target: ${href}`);
  if (/^(javascript|data):/i.test(href)) failures.push(`Unsafe link scheme: ${href}`);
  if (href.startsWith('/')) {
    try {
      await access(path.join(dist, href));
    } catch {
      failures.push(`Missing linked file: ${href}`);
    }
  }
}

for (const source of sources) {
  if (!source.startsWith('/')) continue;
  try {
    await access(path.join(dist, source));
  } catch {
    failures.push(`Missing built asset: ${source}`);
  }
}

const htmlBytes = Buffer.byteLength(html);
assert(htmlBytes <= 25_000, `HTML budget exceeded: ${htmlBytes} > 25000 bytes`);

const imageDir = path.join(dist, 'images');
const imageFiles = await readdir(imageDir);
const imageBytes = (
  await Promise.all(imageFiles.map(async (file) => (await stat(path.join(imageDir, file))).size))
).reduce((total, size) => total + size, 0);
assert(imageBytes <= 1_200_000, `Image budget exceeded: ${imageBytes} > 1200000 bytes`);

const scripts = [...html.matchAll(/<script(?:\s[^>]*)?>([\s\S]*?)<\/script>/g)];
assert(scripts.length <= 1, `Client script count exceeded: ${scripts.length} > 1`);
const scriptBytes = scripts.reduce((total, match) => total + Buffer.byteLength(match[1]), 0);
assert(scriptBytes <= 3_500, `Client script budget exceeded: ${scriptBytes} > 3500 bytes`);

if (failures.length > 0) {
  console.error(failures.map((failure) => `- ${failure}`).join('\n'));
  process.exitCode = 1;
} else {
  console.log(
    `Build checks passed: ${htmlBytes} B HTML, ${imageBytes} B images, ${scriptBytes} B client script.`
  );
}
