import { SEO_PAGES, type Category } from "@/content/seoPages";
import { STATIC_PAGES } from "@/content/staticPages";

const CATEGORY_LABEL: Record<Category, string> = {
  "dance-club": "Dance Clubs in Goa",
  "beach-party": "Beach Parties in Goa",
  "russian-dance": "Russian Dance in Goa",
  "disco-club": "Disco Clubs & Nightlife",
  "russian-pub": "Russian Pubs & Bars",
  "ladies-bar": "Ladies Bars in Goa",
  "belly-dance": "Belly Dance in Goa",
};

const CATEGORY_ORDER: Category[] = [
  "dance-club",
  "disco-club",
  "russian-dance",
  "belly-dance",
  "russian-pub",
  "beach-party",
  "ladies-bar",
];

function anchorText(slug: string): string {
  // turn "dance-club-in-baga-beach" -> "Dance Club in Baga Beach"
  return slug
    .replace(/-/g, " ")
    .replace(/\b\w/g, (m) => m.toUpperCase())
    .replace(/\bIn\b/g, "in")
    .replace(/\bAnd\b/g, "and")
    .replace(/\bGoa\b/g, "Goa");
}

export default function SeoLinksGrid() {
  const grouped: Record<Category, typeof SEO_PAGES> = {
    "dance-club": [],
    "beach-party": [],
    "russian-dance": [],
    "disco-club": [],
    "russian-pub": [],
    "ladies-bar": [],
    "belly-dance": [],
  };
  for (const p of SEO_PAGES) grouped[p.category].push(p);

  return (
    <section className="border-t border-line bg-deep py-20">
      <div className="container-page">
        <div className="text-center">
          <span className="eyebrow">Explore Every Page</span>
          <h2 className="mt-3 display-lg">
            Russian Party in Goa — <span className="text-gold">All Locations</span>
          </h2>
          <div className="mx-auto my-5 h-px w-12 bg-gradient-to-r from-transparent via-gold to-transparent" />
          <p className="mx-auto max-w-2xl text-cream/80">
            From Calangute and Baga Beach to Anjuna, Candolim, Morjim and beyond — explore the
            complete Russian Night Lounge network of dance clubs, beach parties, Russian pubs and
            ladies bars across North &amp; South Goa.
          </p>
        </div>

        <div className="mt-12 grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {CATEGORY_ORDER.map((cat) => (
            <div key={cat} className="border border-line bg-ink/70 p-6">
              <h3 className="font-display text-lg tracking-[0.14em] uppercase text-gold">
                {CATEGORY_LABEL[cat]}
              </h3>
              <div className="mt-3 h-px w-10 bg-gold/60" />
              <ul className="mt-5 space-y-2 text-sm">
                {grouped[cat].map((p) => (
                  <li key={p.path}>
                    <a
                      href={p.path}
                      className="text-cream/85 transition hover:text-gold"
                      title={p.title}
                    >
                      › {anchorText(p.slug)}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 border border-line bg-ink/70 p-6">
          <h3 className="font-display text-lg tracking-[0.14em] uppercase text-gold">
            More From Russian Night Lounge
          </h3>
          <div className="mt-3 h-px w-10 bg-gold/60" />
          <ul className="mt-5 grid gap-2 text-sm md:grid-cols-2 lg:grid-cols-3">
            {STATIC_PAGES.map((p) => (
              <li key={p.path}>
                <a href={p.path} className="text-cream/85 transition hover:text-gold" title={p.title}>
                  › {p.h1}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
