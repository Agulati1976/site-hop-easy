import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import SeoPage from "./pages/SeoPage";
import StaticPage from "./pages/StaticPage";
import { SEO_PAGES } from "@/content/seoPages";
import { STATIC_PAGES } from "@/content/staticPages";

/**
 * Central route table — preserves every original WordPress URL so
 * existing Google rankings + backlinks transfer 1:1 on Hostinger.
 *
 * Adding a page:
 *   - SEO landing page:   add to src/content/seoPages.ts
 *   - Generic page:       add to src/content/staticPages.ts
 *   - Fully custom page:  create src/pages/MyPage.tsx + register here
 *   - Also add the slug to scripts/generate-sitemap.mjs
 */
export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />

      {/* SEO landing pages (90+) — keep trailing slash, mirror WP exactly */}
      {SEO_PAGES.flatMap((p) => [
        <Route key={p.path} path={p.path} element={<SeoPage data={p} />} />,
        // Tolerate no-slash variants so links never 404
        <Route key={p.path + "noslash"} path={p.path.replace(/\/$/, "")} element={<SeoPage data={p} />} />,
      ])}

      {/* Static / utility pages */}
      {STATIC_PAGES.flatMap((p) => [
        <Route key={p.path} path={p.path} element={<StaticPage {...p} />} />,
        <Route key={p.path + "noslash"} path={p.path.replace(/\/$/, "")} element={<StaticPage {...p} />} />,
      ])}

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
