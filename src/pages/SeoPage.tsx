import { Helmet } from "react-helmet-async";
import { Phone, MessageCircle, Calendar, MapPin, Mail, Sparkles, Flame, Wine, Headphones, Crown, Cake } from "lucide-react";
import { SiteHeader, SiteFooter, FloatingWhatsApp, PHONE, PHONE_DISPLAY, WHATSAPP, EMAIL } from "@/components/SiteChrome";
import KeywordBacklinks from "@/components/KeywordBacklinks";
import type { SeoPageData } from "@/content/seoPages";

const heroImg = "/images/16.42.12.jpeg";
const cardImg = "/images/16.42.12-1.jpeg";
const djImg = "/images/16.41.36-1.jpeg";
const danceImg = "/images/16.41.40.jpeg";
const poleImg = "/images/16.41.41.jpeg";
const cocktailImg = "/images/16.41.40-2.jpeg";

const services = [
  { icon: Sparkles, name: "Belly Dance Shows" },
  { icon: Flame, name: "Pole Dance Spectacular" },
  { icon: Wine, name: "Cocktail & Hookah Bar" },
  { icon: Headphones, name: "Live Russian DJs" },
  { icon: Crown, name: "VIP Table Service" },
  { icon: Cake, name: "Private & Themed Events" },
];

export default function SeoPage({ data }: { data: SeoPageData }) {
  const canonical = `https://russianpartyingoa.com${data.path}`;

  const faqLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: data.faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  const breadcrumbLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://russianpartyingoa.com/" },
      { "@type": "ListItem", position: 2, name: data.h1, item: canonical },
    ],
  };

  const localBizLd = {
    "@context": "https://schema.org",
    "@type": "NightClub",
    name: "Russian Night Lounge Goa",
    image: `https://russianpartyingoa.com${cardImg}`,
    url: canonical,
    telephone: PHONE,
    priceRange: "₹₹₹",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Club Midnight, Calangute",
      addressLocality: "Calangute",
      addressRegion: "Goa",
      postalCode: "403516",
      addressCountry: "IN",
    },
    areaServed: data.location,
    openingHours: "Mo-Su 20:30-04:00",
  };

  return (
    <>
      <Helmet>
        <title>{data.title}</title>
        <meta name="description" content={data.description} />
        <meta name="keywords" content={data.keywords.join(", ")} />
        <link rel="canonical" href={canonical} />
        <meta property="og:title" content={data.title} />
        <meta property="og:description" content={data.description} />
        <meta property="og:url" content={canonical} />
        <meta property="og:type" content="website" />
        <meta property="og:image" content={`https://russianpartyingoa.com${cardImg}`} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={data.title} />
        <meta name="twitter:description" content={data.description} />
        <meta name="twitter:image" content={`https://russianpartyingoa.com${cardImg}`} />
        <script type="application/ld+json">{JSON.stringify(faqLd)}</script>
        <script type="application/ld+json">{JSON.stringify(breadcrumbLd)}</script>
        <script type="application/ld+json">{JSON.stringify(localBizLd)}</script>
      </Helmet>

      <SiteHeader />

      <main>
        {/* HERO */}
        <section className="relative flex min-h-[75vh] items-center overflow-hidden pt-24">
          <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${heroImg})` }} aria-hidden />
          <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, rgba(6,6,8,0.94) 0%, rgba(6,6,8,0.72) 50%, rgba(6,6,8,0.55) 100%)" }} aria-hidden />
          <div className="container-page relative z-10 py-20">
            <nav aria-label="Breadcrumb" className="mb-6 text-[0.7rem] tracking-[0.18em] uppercase text-cream/70">
              <a href="/" className="hover:text-gold">Home</a>
              <span className="mx-2 text-gold">/</span>
              <span className="text-gold">{data.h1}</span>
            </nav>
            <div className="mb-6 inline-flex items-center gap-3">
              <span className="h-px w-10 bg-gold/60" />
              <span className="text-[0.65rem] font-semibold tracking-[0.3em] uppercase text-gold">
                Russian Night Lounge · {data.location}
              </span>
              <span className="h-px w-10 bg-gold/60" />
            </div>
            <h1 className="display-xl">{data.h1}</h1>
            <p className="mt-6 max-w-2xl font-serif italic text-lg text-cream/85 md:text-xl">
              {data.hero}
            </p>
            <div className="mt-10 flex flex-wrap gap-3">
              <a href={`tel:${PHONE}`} className="inline-flex items-center gap-2 bg-gradient-to-r from-gold to-gold-soft px-7 py-3.5 text-[0.78rem] font-semibold tracking-[0.14em] uppercase text-ink transition hover:-translate-y-0.5 hover:shadow-[0_10px_30px_rgba(201,151,58,0.4)]">
                <Calendar className="h-4 w-4" /> Book Your Table
              </a>
              <a href={WHATSAPP} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 bg-whatsapp px-7 py-3.5 text-[0.78rem] font-semibold tracking-[0.14em] uppercase text-white transition hover:-translate-y-0.5">
                <MessageCircle className="h-4 w-4" /> WhatsApp Us
              </a>
            </div>
          </div>
        </section>

        {/* CONTENT BLOCKS */}
        <section className="py-20">
          <div className="container-page mx-auto max-w-4xl">
            {data.sections.map((s, i) => (
              <article key={i} className="mb-12">
                <h2 className="display-lg">
                  {s.h.split(" ").slice(0, -2).join(" ")}{" "}
                  <span className="text-gold">{s.h.split(" ").slice(-2).join(" ")}</span>
                </h2>
                <div className="mx-0 my-5 h-px w-12 bg-gradient-to-r from-gold to-transparent" />
                <p className="text-cream/85 leading-relaxed text-base md:text-lg">{s.p}</p>
              </article>
            ))}
          </div>
        </section>

        {/* GALLERY STRIP */}
        <section className="bg-deep py-20">
          <div className="container-page">
            <div className="text-center">
              <span className="eyebrow">Inside the Lounge</span>
              <h2 className="mt-3 display-lg">
                The {data.location} <span className="text-gold">Experience</span>
              </h2>
              <div className="mx-auto my-5 h-px w-12 bg-gradient-to-r from-transparent via-gold to-transparent" />
            </div>
            <div className="mt-10 grid gap-4 md:grid-cols-4">
              {[
                { img: djImg, t: "Live DJ Nights" },
                { img: danceImg, t: "Russian Dancers" },
                { img: poleImg, t: "Pole Spectacular" },
                { img: cocktailImg, t: "Cocktail Bar" },
              ].map((g) => (
                <div key={g.t} className="group relative overflow-hidden">
                  <img src={g.img} alt={`${g.t} at Russian Night Lounge ${data.location}`} loading="lazy" className="h-64 w-full object-cover transition duration-500 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/20 to-transparent" />
                  <div className="absolute bottom-4 left-4 font-display tracking-wide text-white">{g.t}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SERVICES */}
        <section className="py-20">
          <div className="container-page">
            <div className="text-center">
              <span className="eyebrow">What's Inside</span>
              <h2 className="mt-3 display-lg">
                Everything You Want From a <span className="text-gold">Russian Night</span>
              </h2>
              <div className="mx-auto my-5 h-px w-12 bg-gradient-to-r from-transparent via-gold to-transparent" />
            </div>
            <div className="mt-12 grid gap-6 md:grid-cols-3">
              {services.map((s) => (
                <div key={s.name} className="border border-line bg-ink/70 p-7 transition hover:border-gold">
                  <s.icon className="h-7 w-7 text-gold" />
                  <h3 className="mt-4 font-display text-xl tracking-wide text-white">{s.name}</h3>
                  <p className="mt-2 text-sm text-cream/75">
                    Available every night at Russian Night Lounge — the #1 Russian party in Goa, serving {data.location} guests.
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="bg-deep py-20">
          <div className="container-page mx-auto max-w-3xl">
            <div className="text-center">
              <span className="eyebrow">FAQ</span>
              <h2 className="mt-3 display-lg">
                {data.location} <span className="text-gold">Questions</span>
              </h2>
              <div className="mx-auto my-5 h-px w-12 bg-gradient-to-r from-transparent via-gold to-transparent" />
            </div>
            <dl className="mt-12 divide-y divide-line border-y border-line">
              {data.faqs.map((f) => (
                <div key={f.q} className="py-6">
                  <dt className="font-display text-xl tracking-wide text-white">{f.q}</dt>
                  <dd className="mt-2 text-cream/80">{f.a}</dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        {/* CONTACT */}
        <section className="relative overflow-hidden bg-deep py-24">
          <div className="absolute inset-0 opacity-25" style={{ backgroundImage: `url(${cardImg})`, backgroundSize: "cover", backgroundPosition: "center" }} aria-hidden />
          <div className="absolute inset-0 bg-gradient-to-b from-ink via-ink/85 to-ink" aria-hidden />
          <div className="container-page relative z-10 mx-auto max-w-3xl text-center">
            <span className="eyebrow">Reserve Now</span>
            <h2 className="mt-3 display-lg">
              Book the Best Night in <span className="text-gold">{data.location}</span>
            </h2>
            <div className="mx-auto my-5 h-px w-12 bg-gradient-to-r from-transparent via-gold to-transparent" />
            <p className="serif-lead">
              Russian Night Lounge · North Goa Calangute · Open daily 8:30 PM till late. Call or WhatsApp to reserve your table.
            </p>
            <div className="mt-10 flex flex-wrap justify-center gap-3">
              <a href={`tel:${PHONE}`} className="inline-flex items-center gap-2 bg-gradient-to-r from-gold to-gold-soft px-7 py-3.5 text-[0.78rem] font-semibold tracking-[0.14em] uppercase text-ink transition hover:-translate-y-0.5">
                <Phone className="h-4 w-4" /> {PHONE_DISPLAY}
              </a>
              <a href={WHATSAPP} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 bg-whatsapp px-7 py-3.5 text-[0.78rem] font-semibold tracking-[0.14em] uppercase text-white transition hover:-translate-y-0.5">
                <MessageCircle className="h-4 w-4" /> WhatsApp
              </a>
              <a href={`mailto:${EMAIL}`} className="inline-flex items-center gap-2 border border-gold px-7 py-3.5 text-[0.78rem] font-semibold tracking-[0.14em] uppercase text-gold transition hover:bg-gold hover:text-ink">
                <Mail className="h-4 w-4" /> Email
              </a>
            </div>
            <div className="mt-12 grid gap-6 text-left sm:grid-cols-3">
              {[
                [MapPin, "Location", "North Goa, Calangute 403516"],
                [Phone, "Phone", PHONE_DISPLAY],
                [Mail, "Email", EMAIL],
              ].map(([Icon, t, d]) => {
                const I = Icon as typeof Phone;
                return (
                  <div key={t as string} className="border border-line bg-ink/70 p-6 backdrop-blur">
                    <I className="h-5 w-5 text-gold" />
                    <div className="mt-3 text-[0.7rem] tracking-[0.22em] uppercase text-gold">{t as string}</div>
                    <div className="mt-1 text-cream">{d as string}</div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      </main>

      <KeywordBacklinks />
      <SiteFooter />
      <FloatingWhatsApp />
    </>
  );
}
