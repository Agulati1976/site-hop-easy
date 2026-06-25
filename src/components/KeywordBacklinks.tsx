/**
 * Internal-link block placed on every SEO landing page. It anchors all the
 * primary money keywords back to the homepage to consolidate link equity.
 */
const KEYWORDS = [
  "Russian Party in Goa",
  "Russian Night Club",
  "Russian Party Goa",
  "Russian Night Lounge",
  "Russian Club in Goa",
  "Nightlife in Goa",
  "Russian Dance Club Goa",
  "Russian Disco Goa",
  "Best Russian Party in Goa",
  "Russian Bar in Goa",
  "Russian DJ Night Goa",
  "Belly Dance Goa",
  "Pole Dance Goa",
  "Ladies Night Goa",
  "Russian Lounge Calangute",
  "Goa Night Club",
];

export default function KeywordBacklinks() {
  return (
    <section className="border-t border-line bg-deep py-16">
      <div className="container-page mx-auto max-w-4xl text-center">
        <span className="eyebrow">Popular Searches</span>
        <h2 className="mt-3 display-lg">
          Goa's #1 <span className="text-gold">Russian Party</span> Network
        </h2>
        <div className="mx-auto my-5 h-px w-12 bg-gradient-to-r from-transparent via-gold to-transparent" />
        <p className="mx-auto max-w-2xl text-cream/80">
          Explore the main Russian Night Lounge homepage to book tables, browse upcoming themed
          events and see why we're rated Goa's #1 Russian night club:
        </p>
        <ul className="mx-auto mt-8 flex max-w-3xl flex-wrap justify-center gap-2">
          {KEYWORDS.map((k) => (
            <li key={k}>
              <a
                href="/"
                title={`${k} — Russian Night Lounge Goa`}
                className="inline-block border border-line bg-ink/70 px-4 py-2 text-xs tracking-wide text-cream/85 transition hover:border-gold hover:text-gold"
              >
                {k}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
