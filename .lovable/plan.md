
# Migrate russianpartyingoa.com to a static Vite + React SPA

Goal: a build that outputs `dist/index.html` + `dist/assets/` that you can upload to Hostinger via File Manager / FTP, with clean URLs (`/about`, `/events/...`) working on refresh, and SEO parity with the existing WordPress site.

## Phase 1 — Stack swap (one-time)

Replace the current TanStack Start (SSR) shell with a plain Vite + React SPA.

- Remove: `@tanstack/react-start`, `src/server.ts`, `src/start.ts`, SSR plugin from `vite.config.ts`, `src/routes/__root.tsx` head shell, `src/routeTree.gen.ts`.
- Add:
  - `index.html` at project root (Vite SPA entry, with base meta, favicon, fonts).
  - `src/main.tsx` mounting `<App />` into `#root`.
  - `react-router-dom` for client-side routing (works cleanly with `.htaccess` rewrite).
  - `react-helmet-async` for per-page `<title>`, meta description, canonical, OG tags, JSON-LD — required for SEO parity.
- Keep: Tailwind v4, shadcn/ui components, `src/components/ui/*`, `src/lib/utils.ts`.
- Configure `vite.config.ts`: `base: './'` so assets resolve correctly on Hostinger subdirectories too, build output to `dist/`.

## Phase 2 — Hostinger deployment setup

- Create `public/.htaccess` with SPA rewrite so `/about` etc. serve `index.html`:

```text
RewriteEngine On
RewriteBase /
RewriteRule ^index\.html$ - [L]
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
RewriteRule . /index.html [L]
```

- Create `public/robots.txt` and `public/sitemap.xml` (sitemap regenerated as we add pages — I'll provide a small Node script to auto-generate it from the route list so all 90 pages stay in sync).
- Add `public/_redirects` style 301 mapping isn't needed; for any WP URLs that change shape, we'll add `Redirect 301` lines to `.htaccess` so SEO juice transfers.

## Phase 3 — Design & layout system

Once you upload screenshots/Figma I'll define:
- Color tokens, typography, spacing (in `src/styles.css` via Tailwind v4 `@theme`).
- Shared layout: `Header`, `Footer`, `Layout` wrapper used by every page.
- Reusable section components (Hero, EventCard, Gallery, CTA, ContactForm, etc.) so the 90 pages stay consistent and easy to edit.

## Phase 4 — Pages migration (90 pages)

Strategy to keep this manageable:

1. **Build the templates first** (≈6 templates likely cover everything: Home, Event/Service detail, Listing/Category, Gallery, Article/Blog, Contact, Generic content page).
2. **Content as data**, not hard-coded JSX. Each page is a small `.ts` data file under `src/content/` consumed by a template route. This lets us add/edit pages without touching layout code, and lets the sitemap generator enumerate everything automatically.
3. **Preserve URLs exactly** as on WordPress so existing Google rankings carry over (each page's slug becomes its route).
4. **Per-page SEO**: title, meta description, canonical (absolute, pointing at `russianpartyingoa.com/<slug>`), OG image, JSON-LD where relevant (LocalBusiness on home, Event on event pages, Article on blog).
5. **Images**: optimize originals from WP, put under `src/assets/` (bundled + hashed) or `public/images/` for large galleries (served as-is).

Rollout in batches:
- Batch A: Templates + Home + Header/Footer.
- Batch B: 5–10 highest-traffic pages (you tell me which, or share Search Console data).
- Batch C–onwards: remaining pages in chunks of ~15.

## Phase 5 — Pre-launch SEO checklist

- All canonicals set to `https://russianpartyingoa.com/...`.
- `sitemap.xml` lists every route; submitted to Google Search Console after upload.
- `robots.txt` allows all; references sitemap.
- 301 redirects in `.htaccess` for any URL that changes.
- OG image + Twitter card on every page.
- Page load: lazy-load gallery images, preconnect fonts.
- Verify with Lighthouse before handing the `dist/` folder to you.

## What I need from you to start

1. Upload your design (screenshots, Figma export, or just the homepage to start).
2. A list / export of the 90 page URLs (sitemap from WP or a Screaming Frog export works perfectly).
3. Confirm the domain stays `russianpartyingoa.com` (used for canonicals & sitemap).

## Deliverable each time you publish

You'll run `bun run build`, then upload the contents of `dist/` (including `.htaccess`) to `public_html/` on Hostinger. That's the whole deploy step.

---

### Technical details

- Router: `react-router-dom` v6 with `<BrowserRouter>` — clean URLs, works with the `.htaccess` rewrite.
- Head management: `react-helmet-async` (`<HelmetProvider>` in `main.tsx`).
- Build: `vite build` → `dist/index.html`, `dist/assets/*-[hash].js|css`, hashed images.
- No backend, no Lovable Cloud — fully static.
- Sitemap script: small Node script in `scripts/generate-sitemap.mjs`, run as part of `bun run build` via `"build": "node scripts/generate-sitemap.mjs && vite build"`.
