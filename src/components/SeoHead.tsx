import { useEffect } from "react";

type JsonLd = Record<string, unknown>;

interface SeoHeadProps {
  title: string;
  description?: string;
  canonical?: string;
  keywords?: string;
  image?: string;
  robots?: string;
  ogType?: string;
  jsonLd?: JsonLd[];
}

function ensureMeta(attribute: "name" | "property", key: string) {
  const selector = `meta[${attribute}="${key}"]`;
  let element = document.head.querySelector<HTMLMetaElement>(selector);

  if (!element) {
    element = document.createElement("meta");
    element.setAttribute(attribute, key);
    document.head.appendChild(element);
  }

  return element;
}

function ensureCanonical() {
  let element = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');

  if (!element) {
    element = document.createElement("link");
    element.rel = "canonical";
    document.head.appendChild(element);
  }

  return element;
}

function removeSeoJsonLd() {
  document.head.querySelectorAll('script[type="application/ld+json"][data-seo-jsonld="true"]').forEach((script) => {
    script.remove();
  });
}

export default function SeoHead({
  title,
  description,
  canonical,
  keywords,
  image,
  robots,
  ogType = "website",
  jsonLd = [],
}: SeoHeadProps) {
  useEffect(() => {
    document.title = title;

    if (description) {
      ensureMeta("name", "description").content = description;
      ensureMeta("property", "og:description").content = description;
      ensureMeta("name", "twitter:description").content = description;
    }

    if (canonical) {
      ensureCanonical().href = canonical;
      ensureMeta("property", "og:url").content = canonical;
    }

    if (keywords) {
      ensureMeta("name", "keywords").content = keywords;
    }

    if (robots) {
      ensureMeta("name", "robots").content = robots;
    } else {
      document.head.querySelector('meta[name="robots"]')?.remove();
    }

    ensureMeta("property", "og:title").content = title;
    ensureMeta("property", "og:type").content = ogType;
    ensureMeta("name", "twitter:title").content = title;

    if (image) {
      ensureMeta("property", "og:image").content = image;
      ensureMeta("name", "twitter:image").content = image;
      ensureMeta("name", "twitter:card").content = "summary_large_image";
    }

    removeSeoJsonLd();
    jsonLd.forEach((schema) => {
      const script = document.createElement("script");
      script.type = "application/ld+json";
      script.dataset.seoJsonld = "true";
      script.text = JSON.stringify(schema);
      document.head.appendChild(script);
    });
  }, [title, description, canonical, keywords, image, robots, ogType, JSON.stringify(jsonLd)]);

  return null;
}