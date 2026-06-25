import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import NotFound from "./pages/NotFound";

/**
 * Central route table.
 *
 * Add a new page:
 *   1. Create src/pages/MyPage.tsx
 *   2. Add <Route path="/my-page" element={<MyPage />} /> below
 *   3. Add the slug to scripts/generate-sitemap.mjs
 *
 * All client-side routes rely on the SPA rewrite in public/.htaccess
 * so refresh / deep-links work on Hostinger.
 */
export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
