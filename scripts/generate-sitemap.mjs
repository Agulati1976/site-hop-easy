// Generates public/sitemap.xml from the route list below.
// Run automatically before `vite build` (see package.json "build" script).
// Add new pages here when you add them to src/App.tsx.

import { writeFileSync, mkdirSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const BASE_URL = "https://russianpartyingoa.com";

/** @type {Array<{ path: string; changefreq?: string; priority?: string }>} */
const routes = [
  { path: "/", changefreq: "weekly", priority: "1.0" },
  // Add more pages here as we build them:
  // { path: "/events",   changefreq: "weekly", priority: "0.8" },
  // { path: "/contact",  changefreq: "monthly", priority: "0.6" },
];

const today = new Date().toISOString().slice(0, 10);

const xml = [
  `<?xml version="1.0" encoding="UTF-8"?>`,
  `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`,
  ...routes.map((r) =>
    [
      `  <url>`,
      `    <loc>${BASE_URL}${r.path}</loc>`,
      `    <lastmod>${today}</lastmod>`,
      r.changefreq ? `    <changefreq>${r.changefreq}</changefreq>` : null,
      r.priority ? `    <priority>${r.priority}</priority>` : null,
      `  </url>`,
    ]
      .filter(Boolean)
      .join("\n"),
  ),
  `</urlset>`,
  "",
].join("\n");

const outPath = resolve(__dirname, "../public/sitemap.xml");
mkdirSync(dirname(outPath), { recursive: true });
writeFileSync(outPath, xml);
console.log(`✓ sitemap.xml written with ${routes.length} routes`);
