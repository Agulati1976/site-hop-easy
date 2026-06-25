// Post-build prerender: writes dist/<route>/index.html with per-page
// <title>, <meta description>, canonical and og:* tags rewritten so
// crawlers (and view-source) get the correct SEO for every route.
//
// Runs after `vite build`. The SPA still hydrates normally; this just
// replaces the static head before JS executes.

import { readFileSync, writeFileSync, mkdirSync, existsSync } from "node:fs";
import { dirname, resolve, join } from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";
import { register } from "node:module";

const __dirname = dirname(fileURLToPath(import.meta.url));
const DIST = resolve(__dirname, "../dist");
const BASE_URL = "https://russianpartyingoa.com";

// Load TS source by transpiling with esbuild.
const { build } = await import("esbuild");
async function loadTs(file) {
  const out = await build({
    entryPoints: [resolve(__dirname, file)],
    bundle: true,
    format: "esm",
    platform: "node",
    write: false,
    target: "node18",
    external: [],
  });
  const code = out.outputFiles[0].text;
  const dataUrl = "data:text/javascript;base64," + Buffer.from(code).toString("base64");
  return import(dataUrl);
}

const { SEO_PAGES } = await loadTs("../src/content/seoPages.ts");
const { STATIC_PAGES } = await loadTs("../src/content/staticPages.ts");

const indexHtml = readFileSync(join(DIST, "index.html"), "utf8");

const cardImg = "/images/16.42.12-1.jpeg";

function esc(s) {
  return String(s).replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

function rewriteHead(html, { title, description, canonical, image }) {
  let out = html;
  // <title>
  out = out.replace(/<title>[\s\S]*?<\/title>/, `<title>${esc(title)}</title>`);
  // description
  out = out.replace(
    /<meta\s+name="description"[\s\S]*?\/>/,
    `<meta name="description" content="${esc(description)}" />`,
  );
  // canonical
  out = out.replace(
    /<link\s+rel="canonical"[\s\S]*?\/>/,
    `<link rel="canonical" href="${esc(canonical)}" />`,
  );
  // og:title
  out = out.replace(
    /<meta\s+property="og:title"[\s\S]*?\/>/,
    `<meta property="og:title" content="${esc(title)}" />`,
  );
  // og:description
  out = out.replace(
    /<meta\s+property="og:description"[\s\S]*?\/>/,
    `<meta property="og:description" content="${esc(description)}" />`,
  );
  // og:url
  out = out.replace(
    /<meta\s+property="og:url"[\s\S]*?\/>/,
    `<meta property="og:url" content="${esc(canonical)}" />`,
  );
  // twitter:title
  out = out.replace(
    /<meta\s+name="twitter:title"[\s\S]*?\/>/,
    `<meta name="twitter:title" content="${esc(title)}" />`,
  );
  // twitter:description
  out = out.replace(
    /<meta\s+name="twitter:description"[\s\S]*?\/>/,
    `<meta name="twitter:description" content="${esc(description)}" />`,
  );
  // og:image (insert if not present)
  if (/property="og:image"/.test(out)) {
    out = out.replace(
      /<meta\s+property="og:image"[\s\S]*?\/>/,
      `<meta property="og:image" content="${esc(image)}" />`,
    );
  } else {
    out = out.replace(
      /<\/head>/,
      `    <meta property="og:image" content="${esc(image)}" />\n  </head>`,
    );
  }
  return out;
}

function writeRoute(path, meta) {
  const clean = path.replace(/^\/+|\/+$/g, "");
  const dir = clean ? join(DIST, clean) : DIST;
  if (!clean) return; // root index.html already written by vite (keep homepage meta)
  mkdirSync(dir, { recursive: true });
  const html = rewriteHead(indexHtml, meta);
  writeFileSync(join(dir, "index.html"), html);
}

let count = 0;
for (const p of SEO_PAGES) {
  writeRoute(p.path, {
    title: p.title,
    description: p.description,
    canonical: `${BASE_URL}${p.path}`,
    image: `${BASE_URL}${cardImg}`,
  });
  count++;
}
for (const p of STATIC_PAGES) {
  writeRoute(p.path, {
    title: p.title,
    description: p.description,
    canonical: `${BASE_URL}${p.path}`,
    image: `${BASE_URL}${cardImg}`,
  });
  count++;
}

console.log(`✓ prerendered ${count} routes with per-page meta`);
