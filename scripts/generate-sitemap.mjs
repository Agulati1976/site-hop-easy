// Generates public/sitemap.xml from the route list below.
// Run automatically before `vite build` (see package.json "build" script).
// Keep this list in sync with src/content/seoPages.ts + src/content/staticPages.ts.

import { writeFileSync, mkdirSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const BASE_URL = "https://russianpartyingoa.com";

const danceClubLocs = ["goa", "baga-beach", "calangute"];
const beachPartyLocs = [
  "goa","baga-beach","candolim","anjuna","panjim","mandrem","nerul","morjim","mapusa",
  "arambol","siolim","sligo","nagoa","arpora","porvorim","vagator","south-goa","north-goa",
];
const russianDanceLocs = [
  "goa","calangute","baga-beach","candolim","anjuna","panjim","mandrem","nerul","morjim",
  "mapusa","arambol","siolim","saligao","nagoa","arpora","porvorim","vagator","north-goa","south-goa",
];
const discoClubIn = [
  "calangute","nerul","morjim","mapusa","arambol","siolim","saligao","nagoa","arpora",
  "porvorim","vagator","south-goa","north-goa",
];
const discoClubNightlife = ["baga-beach","candolim","anjuna","panjim","mandrem"];
const russianPubLocs = [
  "goa","calangute","baga-beach","candolim","anjuna","panjim","mandrem","nerul","morjim",
  "mapusa","arambol","siolim","saligao","nagoa","arpora","porvorim","vagator","south-goa","north-goa",
];
const ladiesBarLocs = ["goa","calangute","baga-beach"];

const seoRoutes = [
  ...danceClubLocs.map((k) => `/dance-club-in-${k}/`),
  ...beachPartyLocs.map((k) => `/beach-party-in-${k}/`),
  ...russianDanceLocs.map((k) => `/russian-dance-in-${k}/`),
  "/disco-club-goa-russian-party-nightlife/",
  ...discoClubIn.map((k) => `/disco-club-in-${k}/`),
  ...discoClubNightlife.map((k) => `/disco-club-${k}-goa-nightlife/`),
  ...russianPubLocs.map((k) => `/russian-pub-in-${k}/`),
  ...ladiesBarLocs.map((k) => `/ladies-bar-in-${k}/`),
];

const staticRoutes = [
  "/faq/", "/what-we-offer/", "/appointment-page/", "/blog/",
  "/sample-page/", "/comming-soon/", "/404-page/",
];

const routes = [
  { path: "/", changefreq: "weekly", priority: "1.0" },
  ...seoRoutes.map((p) => ({ path: p, changefreq: "weekly", priority: "0.8" })),
  ...staticRoutes.map((p) => ({ path: p, changefreq: "monthly", priority: "0.5" })),
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
