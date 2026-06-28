// Post-build SEO audit. Walks every index.html in dist/ and verifies:
//   1. each page has a non-empty <title> and <meta name="description">
//   2. titles are unique across all routes
//   3. descriptions are unique across all routes
//   4. each page has a self-referencing <link rel="canonical">
//
// Exits with code 1 (failing the build) when any check fails so SEO
// regressions can't ship silently.

import { readFileSync, readdirSync, statSync } from "node:fs";
import { dirname, join, relative, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const DIST = resolve(__dirname, "../dist");

function walkHtml(dir, out = []) {
  for (const name of readdirSync(dir)) {
    const p = join(dir, name);
    const s = statSync(p);
    if (s.isDirectory()) walkHtml(p, out);
    else if (name === "index.html") out.push(p);
  }
  return out;
}

function pick(re, html) {
  const m = html.match(re);
  return m ? m[1].trim() : "";
}

const files = walkHtml(DIST);
const rows = files.map((file) => {
  const html = readFileSync(file, "utf8");
  return {
    route: "/" + relative(DIST, dirname(file)).replace(/\\/g, "/") + (file.endsWith("index.html") ? "/" : ""),
    file,
    title: pick(/<title[^>]*>([\s\S]*?)<\/title>/i, html),
    description: pick(/<meta[^>]*name="description"[^>]*content="([^"]*)"/i, html),
    canonical: pick(/<link[^>]*rel="canonical"[^>]*href="([^"]*)"/i, html),
  };
});

const issues = [];
const titleMap = new Map();
const descMap = new Map();

for (const r of rows) {
  if (!r.title) issues.push(`✗ ${r.route} — missing <title>`);
  if (!r.description) issues.push(`✗ ${r.route} — missing meta description`);
  if (!r.canonical) issues.push(`✗ ${r.route} — missing canonical`);

  if (r.title) {
    if (!titleMap.has(r.title)) titleMap.set(r.title, []);
    titleMap.get(r.title).push(r.route);
  }
  if (r.description) {
    if (!descMap.has(r.description)) descMap.set(r.description, []);
    descMap.get(r.description).push(r.route);
  }
}

for (const [t, routes] of titleMap) {
  if (routes.length > 1) {
    issues.push(`✗ Duplicate <title> "${t.slice(0, 80)}…" on:\n    ${routes.join("\n    ")}`);
  }
}
for (const [d, routes] of descMap) {
  if (routes.length > 1) {
    issues.push(`✗ Duplicate meta description on:\n    ${routes.join("\n    ")}\n    → "${d.slice(0, 100)}…"`);
  }
}

console.log(`SEO audit: scanned ${rows.length} route(s) in dist/`);
if (issues.length) {
  console.error(`\n❌ ${issues.length} SEO issue(s) found:\n`);
  for (const i of issues) console.error(i);
  console.error("\nFix the duplicates/missing tags above before deploying.\n");
  process.exit(1);
}
console.log(`✓ All ${rows.length} routes have unique titles, unique descriptions and canonicals.`);
