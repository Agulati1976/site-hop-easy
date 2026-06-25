import { Helmet } from "react-helmet-async";
import {
  Phone,
  MessageCircle,
  Calendar,
  Instagram,
  Facebook,
  Youtube,
  MapPin,
  Mail,
  Music,
  Sparkles,
  Wine,
  Crown,
  Cake,
  Headphones,
  Star,
  Clock,
  Flame,
} from "lucide-react";

import dj from "@/assets/16.41.36-1.jpeg.asset.json";
import drinks from "@/assets/16.41.39.jpeg.asset.json";
import food from "@/assets/16.41.39-1.jpeg.asset.json";
import cocktail from "@/assets/16.41.40-2.jpeg.asset.json";
import dancers from "@/assets/16.41.40.jpeg.asset.json";
import pole from "@/assets/16.41.41.jpeg.asset.json";
import club from "@/assets/16.42.12.jpeg.asset.json";
import card from "@/assets/16.42.12-1.jpeg.asset.json";

const PHONE = "+918793432338";
const PHONE_DISPLAY = "+91 87934 32338";
const WHATSAPP = `https://api.whatsapp.com/send/?phone=918793432338&text=Hello+Russian+Night+Lounge+Goa&type=phone_number&app_absent=0`;
const EMAIL = "russiannightlounge@gmail.com";

const services = [
  { icon: Sparkles, name: "Belly Dance", desc: "World-class belly dancers light up the stage with graceful, hypnotic performances — the signature highlight of every Russian party in Goa." },
  { icon: Flame, name: "Pole Dance", desc: "Athletic artistry meets show-stopping spectacle. Watch professional pole dance artists defy gravity at Goa's top Russian night club." },
  { icon: Wine, name: "Cocktail & Hookah Bar", desc: "Premium hookah flavors, signature cocktails and unlimited drinks served from the most stylish bar in the heart of North Goa." },
  { icon: Headphones, name: "DJ Music & Big Dance Floor", desc: "Resident and guest DJs spin Russian electro, Bollywood anthems and international house — the dance floor never sleeps." },
  { icon: Crown, name: "VIP Table Service", desc: "Reserve an exclusive VIP table for priority entry, bottle service and the best view of every performance." },
  { icon: Cake, name: "Private & Themed Events", desc: "Birthdays, bachelorette parties, corporate nights, themed Russian parties in Goa — we curate every detail of the celebration." },
];

const features = [
  { img: dj.url, title: "DJ Music & Big Dance Floor" },
  { img: drinks.url, title: "Unlimited Drinks" },
  { img: food.url, title: "Unlimited Beer & Food" },
  { img: cocktail.url, title: "Cocktail Bar" },
  { img: dancers.url, title: "Russian Dancers" },
  { img: pole.url, title: "Pole Dance" },
];

const steps = [
  { n: "01", title: "Arrive in Style", desc: "Ambient lighting, Russian-inspired décor and an energy that's infectious from the door. Our team greets every guest with warmth." },
  { n: "02", title: "World-Class Performances", desc: "Be mesmerized by professional belly dancers, pole artists and guest performers — the finest exotic entertainment in Goa." },
  { n: "03", title: "Dance Till Dawn", desc: "Russian electro, Bollywood, international hits — our DJs keep the floor packed at Goa's best Russian club until sunrise." },
  { n: "04", title: "Sip, Smoke & Celebrate", desc: "Unwind with premium hookah and signature cocktails in our lounge — perfect for groups, couples and big celebrations." },
];

const events = [
  { day: "Wednesday & Friday", name: "Belly Dance Night", desc: "Mid-week fire. Our professional belly dancers take the main stage with a live DJ set keeping the crowd dancing.", time: "9:00 PM – 3:00 AM", where: "Main Stage", img: card.url },
  { day: "Saturday", name: "Pole Dance Spectacular", desc: "Saturday belongs to our pole stars. Elite performances, dazzling lights, Goa's most electrifying weekly show.", time: "9:30 PM – 4:00 AM", where: "VIP Arena", img: pole.url },
  { day: "Every Night", name: "Russian Party in Goa", desc: "DJ-led Russian night sets, themed drinks and the most energetic dance floor anywhere on the Calangute strip.", time: "8:30 PM – Late", where: "Club Midnight", img: club.url },
];

const seoArticle = [
  { h: "Experience the Ultimate Russian Party in Goa", p: "If you're looking for an unforgettable night out, look no further than a Russian party in Goa. Goa, known for its vibrant nightlife and stunning beaches, becomes even more electrifying with the unique twist of Russian-themed parties at Russian Night Lounge. Whether you're a local or a tourist, the excitement of a Russian party in Goa is something you don't want to miss." },
  { h: "What Makes a Russian Party in Goa Special?", p: "A Russian party in Goa is not just any ordinary event. These parties are famous for their high energy, exceptional music and an atmosphere that brings the best of Russian culture to the tropical paradise of Goa. From traditional Russian dishes to the latest Russian pop and electronic music, every aspect of the party is designed to transport you straight to Russia — without ever leaving the beach." },
  { h: "Popular Venues for a Russian Party in Goa", p: "Several venues in Goa are known for hosting an incredible Russian party in Goa. Places like Baga Beach, Anjuna Beach and various upscale clubs in North Goa often feature these themed events. Russian Night Lounge, located in Calangute, is widely considered the #1 Russian night club in Goa — combining the laid-back Goan vibe with the lively, spirited Russian party atmosphere." },
  { h: "The Music Scene at a Russian Party in Goa", p: "Music is at the heart of any Russian party in Goa. Our DJs spin a mix of popular Russian hits, EDM and international tracks, creating a dance floor that stays packed all night long. The beats are infectious and the crowd is always ready to dance — making every Russian night club experience in Goa unforgettable." },
  { h: "Authentic Russian Cuisine", p: "One of the highlights of a Russian party in Goa is the food. Partygoers can indulge in authentic Russian delicacies like borscht, pelmeni and blini, alongside Goan favourites. These dishes add a flavourful cultural touch to the party, ensuring guests get a full experience — not just a night out." },
  { h: "Dress Code and Ambience", p: "The dress code at a Russian party in Goa is glamorous and chic. Guests are encouraged to dress to impress, adding to the upscale feel of the event. The ambience is enhanced by stunning décor with traditional Russian elements, creating a visually immersive environment unlike any other Goa night club." },
  { h: "Meeting New People", p: "A Russian party in Goa is a great place to meet people from around the world. The friendly, welcoming atmosphere makes it easy to strike up conversations and make lasting connections — whether you're dancing the night away or relaxing at our cocktail bar." },
  { h: "Russian Influence in Goa", p: "The Russian community in Goa has contributed significantly to the state's nightlife and culture. Known for their energetic music, delicious cuisine and lively spirit, the Russian influence is evident across Goa's entertainment scene — and the Russian part in Goa is celebrated nightly at Russian Night Lounge with themed nights, authentic cuisine, and exclusive entertainment." },
  { h: "Why Choose Russian Night Lounge", p: "At Russian Night Lounge we specialise in immersive Russian-themed nights, electrifying performances, a curated menu of Russian and Goan favourites, top Russian DJs, captivating live shows and a luxurious club ambience designed for the ultimate Russian party in Goa experience." },
  { h: "Plan Your Visit", p: "Ready to explore the Russian part in Goa? Visit Russian Night Lounge in North Goa Calangute and let us create memories that last a lifetime. Follow us on Instagram for upcoming Russian-themed events and book your table now to be part of a celebration that blends the best of Russia with the vibrant spirit of Goa." },
];

const faqs = [
  { q: "Where is the best Russian party in Goa?", a: "Russian Night Lounge in Calangute, North Goa is widely considered the #1 Russian night club in Goa, with belly dance, pole dance, hookah, premium drinks and nightly DJ sets." },
  { q: "What is the dress code at the Russian night club in Goa?", a: "Smart-chic or glamorous attire is recommended. Most guests dress up to match the upscale ambience — beachwear is not permitted." },
  { q: "How do I book a table at Russian Night Lounge?", a: "Call or WhatsApp +91 87934 32338. We accept bookings for couples, groups, VIP tables, birthdays, bachelorettes and private events." },
  { q: "What time does the Russian party in Goa start?", a: "Doors open from 8:30 PM. Live performances usually start by 9:30 PM and the DJ sets go on till late — often 3:00–4:00 AM on weekends." },
  { q: "Do you serve food and unlimited drinks?", a: "Yes — we run an unlimited drinks and beer + food package on most party nights, plus a full cocktail menu and Russian delicacies." },
];

export default function Home() {
  const faqLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <>
      <Helmet>
        <title>Russian Night Lounge Goa | #1 Russian Party & Night Club in Goa</title>
        <meta
          name="description"
          content="Russian Night Lounge is the most exclusive Russian party in Goa. Experience the best Russian night club in Goa with belly dance, pole dance, hookah and electrifying DJ nights. Book your table now!"
        />
        <link rel="canonical" href="https://russianpartyingoa.com/" />
        <meta property="og:title" content="Russian Night Lounge Goa | #1 Russian Party & Night Club in Goa" />
        <meta property="og:url" content="https://russianpartyingoa.com/" />
        <meta property="og:image" content={card.url} />
        <meta name="twitter:image" content={card.url} />
        <script type="application/ld+json">{JSON.stringify(faqLd)}</script>
      </Helmet>

      {/* NAV */}
      <header className="fixed inset-x-0 top-0 z-50 border-b border-line/60 bg-ink/85 backdrop-blur-md">
        <div className="container-page flex items-center justify-between py-4">
          <a href="#hero" className="flex flex-col leading-none">
            <span className="font-display text-xl tracking-[0.12em] text-white">RUSSIAN NIGHT LOUNGE</span>
            <span className="mt-1 text-[0.6rem] tracking-[0.35em] text-gold uppercase">Goa · Est. Calangute</span>
          </a>
          <nav className="hidden gap-8 md:flex">
            {[
              ["About", "#about"],
              ["Services", "#services"],
              ["Experience", "#experience"],
              ["Events", "#events"],
              ["Contact", "#contact"],
            ].map(([label, href]) => (
              <a
                key={href}
                href={href}
                className="text-[0.72rem] tracking-[0.18em] uppercase text-cream/85 transition hover:text-gold"
              >
                {label}
              </a>
            ))}
          </nav>
          <div className="hidden items-center gap-3 md:flex">
            <a href={`tel:${PHONE}`} className="flex items-center gap-2 text-[0.72rem] font-semibold tracking-wide text-gold">
              <Phone className="h-3.5 w-3.5" /> {PHONE_DISPLAY}
            </a>
            <a
              href={WHATSAPP}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 bg-whatsapp px-4 py-2 text-[0.7rem] font-semibold tracking-[0.15em] uppercase text-white transition hover:opacity-90"
            >
              <MessageCircle className="h-3.5 w-3.5" /> WhatsApp
            </a>
          </div>
        </div>
      </header>

      <main>
        {/* HERO */}
        <section id="hero" className="relative flex min-h-screen items-center overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${club.url})` }}
            aria-hidden
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(135deg, rgba(6,6,8,0.94) 0%, rgba(6,6,8,0.72) 50%, rgba(6,6,8,0.55) 100%)",
            }}
            aria-hidden
          />
          <div className="container-page relative z-10 py-32">
            <div className="mb-6 inline-flex items-center gap-3">
              <span className="h-px w-10 bg-gold/60" />
              <span className="text-[0.65rem] font-semibold tracking-[0.3em] uppercase text-gold">
                Goa's #1 Russian Night Club
              </span>
              <span className="h-px w-10 bg-gold/60" />
            </div>
            <h1 className="display-xl">
              RUSSIAN
              <span className="block text-gold">NIGHT LOUNGE</span>
            </h1>
            <p className="mt-6 max-w-xl font-serif italic text-lg text-cream/85 md:text-xl">
              Where Goa's nights come alive — exotic performances, premium hookah and electrifying Russian party vibes in the heart of Calangute.
            </p>
            <div className="mt-10 flex flex-wrap gap-3">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-gold to-gold-soft px-7 py-3.5 text-[0.78rem] font-semibold tracking-[0.14em] uppercase text-ink transition hover:-translate-y-0.5 hover:shadow-[0_10px_30px_rgba(201,151,58,0.4)]"
              >
                <Calendar className="h-4 w-4" /> Book Your Table
              </a>
              <a
                href={WHATSAPP}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 bg-whatsapp px-7 py-3.5 text-[0.78rem] font-semibold tracking-[0.14em] uppercase text-white transition hover:-translate-y-0.5"
              >
                <MessageCircle className="h-4 w-4" /> WhatsApp Us
              </a>
              <a
                href={`tel:${PHONE}`}
                className="inline-flex items-center gap-2 border border-gold px-7 py-3.5 text-[0.78rem] font-semibold tracking-[0.14em] uppercase text-gold transition hover:bg-gold hover:text-ink"
              >
                <Phone className="h-4 w-4" /> Call Now
              </a>
            </div>
            <div className="mt-14 grid max-w-2xl grid-cols-2 gap-y-6 gap-x-10 sm:grid-cols-4">
              {[
                ["10+", "Years of Nightlife"],
                ["50K+", "Happy Guests"],
                ["365", "Nights a Year"],
                ["4.9★", "Guest Rating"],
              ].map(([n, l]) => (
                <div key={l}>
                  <div className="font-display text-3xl text-white">{n}</div>
                  <div className="mt-1 text-[0.65rem] tracking-[0.18em] uppercase text-muted">{l}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* MARQUEE */}
        <div className="overflow-hidden border-y border-line/70 bg-deep py-5">
          <div className="marquee-track flex w-max items-center gap-8 whitespace-nowrap">
            {Array.from({ length: 2 }).flatMap((_, i) =>
              [
                "Russian Party in Goa",
                "Belly Dance Shows",
                "Pole Dance Performances",
                "Premium Hookah Bar",
                "Russian Night Club in Goa",
                "DJ Nights & Live Music",
                "Exotic Entertainment Goa",
              ].map((t, j) => (
                <span key={`${i}-${j}`} className="flex items-center gap-8 font-display text-2xl tracking-[0.18em] text-cream/70">
                  {t}
                  <span className="text-gold">✦</span>
                </span>
              )),
            )}
          </div>
        </div>

        {/* ABOUT */}
        <section id="about" className="py-24 md:py-32">
          <div className="container-page grid items-center gap-14 lg:grid-cols-2">
            <div className="relative">
              <img src={dancers.url} alt="Russian dancers at the best Russian night club in Goa" className="aspect-[4/5] w-full object-cover" loading="lazy" />
              <img src={cocktail.url} alt="Cocktail bar at Russian Night Lounge Goa" className="absolute -bottom-8 -right-6 hidden aspect-square w-48 border-8 border-ink object-cover md:block" loading="lazy" />
              <div className="absolute -top-5 -left-5 flex h-24 w-24 flex-col items-center justify-center bg-gold text-ink">
                <span className="font-display text-3xl">#1</span>
                <span className="text-[0.6rem] tracking-[0.2em] uppercase">In Goa</span>
              </div>
            </div>

            <div>
              <span className="eyebrow">About Russian Night Lounge</span>
              <h2 className="mt-3 display-lg">
                Goa's Most Exclusive <span className="text-gold">Russian Night Club</span>
              </h2>
              <div className="my-5 h-px w-12 bg-gradient-to-r from-gold to-transparent" />
              <p className="serif-lead mb-5">
                Welcome to <strong className="text-cream">Russian Night Lounge</strong> — Goa's premier destination for an unparalleled nightlife experience. We bring the soul of Russian entertainment to the beaches of Goa, crafting nights that linger in memory long after the music fades.
              </p>
              <p className="serif-lead mb-5">
                Every night at our <strong className="text-cream">Russian party in Goa</strong> is a curated spectacle — mesmerizing belly dance and pole dance, premium hookah, signature cocktails and DJ beats that command the floor.
              </p>
              <p className="serif-lead">
                Whether you're a tourist discovering Goa's nightlife or a regular seeking the finest Russian club experience, our doors open to luxury, celebration and unforgettable entertainment.
              </p>

              <div className="mt-10 grid gap-5 sm:grid-cols-2">
                {[
                  [Star, "Premium Venue", "World-class ambience in Calangute"],
                  [Music, "Live Entertainment", "Nightly shows by pro artists"],
                  [Wine, "Premium Bar", "Signature cocktails & spirits"],
                  [Crown, "VIP Service", "Personal attention for every guest"],
                ].map(([Icon, t, d]) => {
                  const I = Icon as typeof Star;
                  return (
                    <div key={t as string} className="flex gap-3">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center border border-gold/40 text-gold">
                        <I className="h-4 w-4" />
                      </div>
                      <div>
                        <div className="font-semibold text-cream">{t as string}</div>
                        <div className="text-sm text-muted">{d as string}</div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* FEATURE POSTERS — the 6 uploaded image posters */}
        <section className="bg-deep py-24">
          <div className="container-page">
            <div className="mx-auto max-w-2xl text-center">
              <span className="eyebrow">Inside the Lounge</span>
              <h2 className="mt-3 display-lg">
                Every Night, <span className="text-gold">A Full Experience</span>
              </h2>
              <div className="mx-auto my-5 h-px w-12 bg-gradient-to-r from-transparent via-gold to-transparent" />
              <p className="serif-lead">
                Music, dancers, drinks, food, hookah — six reasons we're the most talked-about Russian night club in Goa.
              </p>
            </div>

            <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {features.map((f) => (
                <figure key={f.title} className="group relative overflow-hidden">
                  <img
                    src={f.img}
                    alt={`${f.title} at Russian Night Lounge Goa`}
                    className="aspect-[4/3] w-full object-cover transition duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink via-ink/40 to-transparent" />
                  <figcaption className="absolute inset-x-0 bottom-0 p-5">
                    <div className="font-display text-2xl tracking-[0.08em] text-white">{f.title}</div>
                    <div className="mt-1 text-[0.65rem] tracking-[0.25em] uppercase text-gold">Russian Party in Goa</div>
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>

        {/* SERVICES */}
        <section id="services" className="py-24 md:py-32">
          <div className="container-page">
            <div className="mx-auto max-w-2xl text-center">
              <span className="eyebrow">What We Offer</span>
              <h2 className="mt-3 display-lg">
                Experiences That <span className="text-gold">Electrify the Night</span>
              </h2>
              <div className="mx-auto my-5 h-px w-12 bg-gradient-to-r from-transparent via-gold to-transparent" />
              <p className="serif-lead">
                Every detail at the best Russian night club in Goa is designed to thrill, delight and leave you craving more.
              </p>
            </div>

            <div className="mt-14 grid gap-px bg-line sm:grid-cols-2 lg:grid-cols-3">
              {services.map((s) => (
                <div key={s.name} className="group bg-ink p-8 transition hover:bg-deep">
                  <div className="flex h-12 w-12 items-center justify-center border border-gold/40 text-gold transition group-hover:bg-gold group-hover:text-ink">
                    <s.icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-6 font-display text-2xl tracking-[0.08em] text-white">{s.name}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted">{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* EXPERIENCE */}
        <section id="experience" className="grid items-stretch lg:grid-cols-2">
          <div className="relative min-h-[420px]">
            <img src={dj.url} alt="DJ music and dance floor at Russian Night Lounge Goa" className="absolute inset-0 h-full w-full object-cover" loading="lazy" />
            <div className="absolute inset-0 bg-gradient-to-r from-ink/40 to-ink/80" />
          </div>
          <div className="bg-deep px-6 py-20 md:px-16">
            <span className="eyebrow">The Experience</span>
            <h2 className="mt-3 display-lg">
              A Night Unlike <span className="text-gold">Any Other in Goa</span>
            </h2>
            <div className="my-5 h-px w-12 bg-gradient-to-r from-gold to-transparent" />
            <p className="serif-lead mb-8">
              The Russian Night Lounge isn't just a club — it's a complete sensory experience. Every detail is crafted to immerse you in luxury and excitement.
            </p>
            <ol className="space-y-7">
              {steps.map((s) => (
                <li key={s.n} className="flex gap-5">
                  <div className="font-display text-3xl text-gold leading-none">{s.n}</div>
                  <div>
                    <div className="font-semibold text-cream">{s.title}</div>
                    <p className="mt-1 text-sm text-muted">{s.desc}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* EVENTS */}
        <section id="events" className="py-24 md:py-32">
          <div className="container-page">
            <div className="mx-auto max-w-2xl text-center">
              <span className="eyebrow">Weekly Events</span>
              <h2 className="mt-3 display-lg">
                Something <span className="text-gold">Every Night</span>
              </h2>
              <div className="mx-auto my-5 h-px w-12 bg-gradient-to-r from-transparent via-gold to-transparent" />
              <p className="serif-lead">
                Goa's most exciting Russian party schedule — pick your night and we'll handle the rest.
              </p>
            </div>

            <div className="mt-14 grid gap-6 md:grid-cols-3">
              {events.map((e) => (
                <article key={e.name} className="overflow-hidden border border-line bg-card transition hover:border-gold/60">
                  <div className="aspect-[16/10] overflow-hidden">
                    <img src={e.img} alt={`${e.name} — Russian party in Goa`} className="h-full w-full object-cover" loading="lazy" />
                  </div>
                  <div className="p-6">
                    <div className="text-[0.7rem] tracking-[0.22em] uppercase text-gold">{e.day}</div>
                    <h3 className="mt-2 font-display text-2xl tracking-wide text-white">{e.name}</h3>
                    <p className="mt-3 text-sm text-muted">{e.desc}</p>
                    <div className="mt-5 flex flex-wrap gap-4 border-t border-line pt-4 text-xs text-cream/80">
                      <span className="inline-flex items-center gap-1.5"><Clock className="h-3.5 w-3.5 text-gold" /> {e.time}</span>
                      <span className="inline-flex items-center gap-1.5"><MapPin className="h-3.5 w-3.5 text-gold" /> {e.where}</span>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* SEO LONG-FORM CONTENT */}
        <section className="bg-deep py-24" aria-labelledby="seo-article">
          <div className="container-page mx-auto max-w-4xl">
            <span className="eyebrow">Russian Party in Goa · Russian Night Club Goa</span>
            <h2 id="seo-article" className="mt-3 display-lg">
              The Definitive Guide to the <span className="text-gold">Russian Part in Goa</span>
            </h2>
            <div className="my-6 h-px w-12 bg-gradient-to-r from-gold to-transparent" />

            <div className="space-y-10">
              {seoArticle.map((s) => (
                <article key={s.h}>
                  <h3 className="font-display text-2xl tracking-wide text-white md:text-3xl">{s.h}</h3>
                  <p className="mt-3 font-serif text-base leading-relaxed text-cream/85 md:text-lg">{s.p}</p>
                </article>
              ))}

              <p className="font-serif text-lg italic text-gold">
                A Russian party in Goa is a unique and exciting way to experience the best of both Russian and Goan cultures. Pulsating music, delicious food and a lively crowd — Russian Night Lounge brings the vibrant spirit of Russia to the tropical shores of Goa.
              </p>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="py-24">
          <div className="container-page mx-auto max-w-3xl">
            <div className="text-center">
              <span className="eyebrow">FAQ</span>
              <h2 className="mt-3 display-lg">
                Got <span className="text-gold">Questions?</span>
              </h2>
              <div className="mx-auto my-5 h-px w-12 bg-gradient-to-r from-transparent via-gold to-transparent" />
            </div>
            <dl className="mt-12 divide-y divide-line border-y border-line">
              {faqs.map((f) => (
                <div key={f.q} className="py-6">
                  <dt className="font-display text-xl tracking-wide text-white">{f.q}</dt>
                  <dd className="mt-2 text-cream/80">{f.a}</dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" className="relative overflow-hidden bg-deep py-24">
          <div
            className="absolute inset-0 opacity-25"
            style={{ backgroundImage: `url(${card.url})`, backgroundSize: "cover", backgroundPosition: "center" }}
            aria-hidden
          />
          <div className="absolute inset-0 bg-gradient-to-b from-ink via-ink/85 to-ink" aria-hidden />
          <div className="container-page relative z-10 mx-auto max-w-3xl text-center">
            <span className="eyebrow">Reserve Now</span>
            <h2 className="mt-3 display-lg">
              Reserve Your <span className="text-gold">Table Tonight</span>
            </h2>
            <div className="mx-auto my-5 h-px w-12 bg-gradient-to-r from-transparent via-gold to-transparent" />
            <p className="serif-lead">
              Call, WhatsApp or drop in. Russian Night Lounge, North Goa Calangute — open every night, 8:30 PM till late.
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

      {/* FOOTER */}
      <footer className="border-t border-line bg-ink py-14">
        <div className="container-page grid gap-10 md:grid-cols-3">
          <div>
            <div className="font-display text-2xl tracking-[0.12em] text-white">RUSSIAN NIGHT LOUNGE</div>
            <div className="mt-1 text-[0.6rem] tracking-[0.35em] uppercase text-gold">Goa · Est. Calangute</div>
            <p className="mt-5 max-w-sm text-sm text-muted">
              Goa's #1 Russian night club — belly dance, pole dance, hookah, DJ nights and the most electrifying Russian party in Goa, every single night.
            </p>
          </div>
          <div>
            <div className="eyebrow">Visit</div>
            <p className="mt-3 text-sm text-cream/85">Club Midnight, North Goa Calangute 403516</p>
            <p className="mt-1 text-sm text-cream/85">Open daily · 8:30 PM – Late</p>
          </div>
          <div>
            <div className="eyebrow">Follow</div>
            <div className="mt-3 flex gap-3">
              <a aria-label="Instagram" href="https://www.instagram.com/russian_club_goa" target="_blank" rel="noreferrer" className="flex h-10 w-10 items-center justify-center border border-line text-cream transition hover:border-gold hover:text-gold">
                <Instagram className="h-4 w-4" />
              </a>
              <a aria-label="Facebook" href="https://www.facebook.com/Russianclubgoa" target="_blank" rel="noreferrer" className="flex h-10 w-10 items-center justify-center border border-line text-cream transition hover:border-gold hover:text-gold">
                <Facebook className="h-4 w-4" />
              </a>
              <a aria-label="YouTube" href="https://youtube.com/@russian_nightclub_goa" target="_blank" rel="noreferrer" className="flex h-10 w-10 items-center justify-center border border-line text-cream transition hover:border-gold hover:text-gold">
                <Youtube className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
        <div className="container-page mt-10 flex flex-col items-center justify-between gap-3 border-t border-line pt-6 text-xs text-muted md:flex-row">
          <span>© {new Date().getFullYear()} Russian Night Lounge Goa. All rights reserved.</span>
          <span>Russian Party in Goa · Russian Night Club in Goa · Russian Lounge Goa</span>
        </div>
      </footer>

      {/* Floating WhatsApp */}
      <a
        href={WHATSAPP}
        target="_blank"
        rel="noreferrer"
        aria-label="WhatsApp Russian Night Lounge Goa"
        className="fixed bottom-6 right-6 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-whatsapp text-white shadow-[0_10px_30px_rgba(37,211,102,0.45)] transition hover:scale-110"
      >
        <MessageCircle className="h-6 w-6" />
      </a>
    </>
  );
}
