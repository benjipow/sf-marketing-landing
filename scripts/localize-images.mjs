// One-time script: downloads every image hosted on GHL's CDN (vibe.filesafe.space)
// into public/images/ and rewrites the code to use the local copies.
// Run with:  node scripts/localize-images.mjs
import fs from "node:fs";
import path from "node:path";

const FILES = ["index.html", ...fs.readdirSync("src/components").map((f) => `src/components/${f}`)]
  .filter((f) => fs.statSync(f).isFile());
const RE = /https:\/\/vibe\.filesafe\.space\/[^"'`\s)]+/g;
const outDir = "public/images";
fs.mkdirSync(outDir, { recursive: true });

const urls = new Set();
for (const f of FILES) for (const m of fs.readFileSync(f, "utf8").matchAll(RE)) urls.add(m[0]);

const map = {};
for (const url of urls) {
  const name = path.basename(new URL(url).pathname);
  const res = await fetch(url);
  if (!res.ok) { console.error(`FAILED ${res.status}: ${url}`); continue; }
  fs.writeFileSync(path.join(outDir, name), Buffer.from(await res.arrayBuffer()));
  map[url] = `/images/${name}`;
  console.log(`saved ${name}`);
}

for (const f of FILES) {
  let txt = fs.readFileSync(f, "utf8");
  const before = txt;
  for (const [url, local] of Object.entries(map)) txt = txt.split(url).join(local);
  if (txt !== before) { fs.writeFileSync(f, txt); console.log(`updated ${f}`); }
}
console.log(`\nDone: ${Object.keys(map).length}/${urls.size} images localized.`);
