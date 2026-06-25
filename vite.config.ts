import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import tsconfigPaths from "vite-tsconfig-paths";
import path from "node:path";
import { SEO_PAGES } from "./src/content/seoPages";
import { STATIC_PAGES } from "./src/content/staticPages";

const BASE_URL = "https://russianpartyingoa.com";
const CARD_IMAGE = `${BASE_URL}/images/16.42.12-1.jpeg`;
const HOME_META = {
  title: "Russian Night Lounge Goa | #1 Russian Party & Night Club in Goa",
  description:
    "Russian Night Lounge is the most exclusive Russian party in Goa. Experience the best Russian night club in Goa with belly dance, pole dance, hookah, and electrifying DJ nights. Book your table now!",
  canonical: `${BASE_URL}/`,
  image: CARD_IMAGE,
};

const ROUTE_META = new Map(
  [
    ["/", HOME_META],
    ...SEO_PAGES.flatMap((page) => {
      const meta = {
        title: page.title,
        description: page.description,
        canonical: `${BASE_URL}${page.path}`,
        image: CARD_IMAGE,
      };
      return [
        [page.path, meta],
        [page.path.replace(/\/$/, ""), meta],
      ] as const;
    }),
    ...STATIC_PAGES.flatMap((page) => {
      const meta = {
        title: page.title,
        description: page.description,
        canonical: `${BASE_URL}${page.path}`,
        image: CARD_IMAGE,
      };
      return [
        [page.path, meta],
        [page.path.replace(/\/$/, ""), meta],
      ] as const;
    }),
  ] as const,
);

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/"/g, "&quot;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

function replaceOrInsertMeta(html: string, selector: RegExp, replacement: string) {
  if (selector.test(html)) {
    return html.replace(selector, replacement);
  }

  return html.replace("</head>", `    ${replacement}\n  </head>`);
}

function applyMeta(html: string, meta: typeof HOME_META) {
  let output = html.replace(/<title[\s\S]*?>[\s\S]*?<\/title>/, `<title data-rh="true">${escapeHtml(meta.title)}</title>`);

  output = replaceOrInsertMeta(
    output,
    /<meta(?=[^>]*\bname="description")[^>]*>/,
    `<meta data-rh="true" name="description" content="${escapeHtml(meta.description)}" />`,
  );
  output = replaceOrInsertMeta(
    output,
    /<link(?=[^>]*\brel="canonical")[^>]*>/,
    `<link data-rh="true" rel="canonical" href="${escapeHtml(meta.canonical)}" />`,
  );
  output = replaceOrInsertMeta(
    output,
    /<meta(?=[^>]*\bproperty="og:title")[^>]*>/,
    `<meta data-rh="true" property="og:title" content="${escapeHtml(meta.title)}" />`,
  );
  output = replaceOrInsertMeta(
    output,
    /<meta(?=[^>]*\bproperty="og:description")[^>]*>/,
    `<meta data-rh="true" property="og:description" content="${escapeHtml(meta.description)}" />`,
  );
  output = replaceOrInsertMeta(
    output,
    /<meta(?=[^>]*\bproperty="og:url")[^>]*>/,
    `<meta data-rh="true" property="og:url" content="${escapeHtml(meta.canonical)}" />`,
  );
  output = replaceOrInsertMeta(
    output,
    /<meta(?=[^>]*\bproperty="og:image")[^>]*>/,
    `<meta data-rh="true" property="og:image" content="${escapeHtml(meta.image)}" />`,
  );
  output = replaceOrInsertMeta(
    output,
    /<meta(?=[^>]*\bname="twitter:title")[^>]*>/,
    `<meta data-rh="true" name="twitter:title" content="${escapeHtml(meta.title)}" />`,
  );
  output = replaceOrInsertMeta(
    output,
    /<meta(?=[^>]*\bname="twitter:description")[^>]*>/,
    `<meta data-rh="true" name="twitter:description" content="${escapeHtml(meta.description)}" />`,
  );
  output = replaceOrInsertMeta(
    output,
    /<meta(?=[^>]*\bname="twitter:image")[^>]*>/,
    `<meta data-rh="true" name="twitter:image" content="${escapeHtml(meta.image)}" />`,
  );

  return output;
}

function perRouteMetaPlugin() {
  return {
    name: "per-route-html-meta",
    transformIndexHtml: {
      order: "pre" as const,
      handler(html: string, context: { path?: string; originalUrl?: string }) {
        const requestedPath = new URL(context.originalUrl || context.path || "/", BASE_URL).pathname;
        const normalizedPath = requestedPath === "/index.html" ? "/" : requestedPath.replace(/\/$/, "") || "/";
        const meta = ROUTE_META.get(requestedPath) || ROUTE_META.get(normalizedPath) || HOME_META;

        return applyMeta(html, meta);
      },
    },
  };
}

// Static SPA build for Hostinger.
// Outputs dist/index.html + dist/assets/*. Upload the contents of dist/
// (including the .htaccess from public/) to public_html on Hostinger.
export default defineConfig({
  plugins: [perRouteMetaPlugin(), react(), tailwindcss(), tsconfigPaths()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  server: {
    host: "::",
    port: 8080,
    strictPort: true,
  },
  build: {
    outDir: "dist",
    assetsDir: "assets",
    sourcemap: false,
  },
});
