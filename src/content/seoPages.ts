/**
 * SEO landing page data. Each entry preserves the exact WordPress URL so existing
 * Google rankings and backlinks transfer 1:1 after deploying to Hostinger.
 *
 * Content is generated from (category, location) so each of the 90+ pages ships
 * with unique, keyword-rich copy without us hand-writing 90 articles.
 */

export type Category =
  | "dance-club"
  | "beach-party"
  | "russian-dance"
  | "disco-club"
  | "russian-pub"
  | "ladies-bar";

export interface SeoPageData {
  slug: string;            // e.g. "dance-club-in-goa"
  path: string;            // e.g. "/dance-club-in-goa/"
  category: Category;
  location: string;        // pretty location name, e.g. "Goa", "Baga Beach"
  locKey: string;          // lowercase key, e.g. "goa"
  title: string;
  description: string;
  h1: string;
  hero: string;
  sections: { h: string; p: string }[];
  keywords: string[];
  faqs: { q: string; a: string }[];
}

const CATEGORY_LABEL: Record<Category, string> = {
  "dance-club": "Dance Club",
  "beach-party": "Beach Party",
  "russian-dance": "Russian Dance",
  "disco-club": "Disco Club",
  "russian-pub": "Russian Pub",
  "ladies-bar": "Ladies Bar",
};

const CATEGORY_KEYWORDS: Record<Category, string[]> = {
  "dance-club": ["dance club", "best dance club", "night dance club", "russian dance club"],
  "beach-party": ["beach party", "beach club", "beach nightlife", "sunset beach party"],
  "russian-dance": ["russian dance", "russian dancers", "belly dance", "pole dance", "russian party"],
  "disco-club": ["disco club", "nightclub", "russian night club", "disco party"],
  "russian-pub": ["russian pub", "russian bar", "russian lounge", "russian vodka bar"],
  "ladies-bar": ["ladies bar", "ladies night", "girls bar", "ladies dance bar"],
};

const SHARED_KEYWORDS = [
  "russian party in goa",
  "russian night club",
  "russian party goa",
  "russian night lounge",
  "nightlife in goa",
  "russian club goa",
];

function pageTitle(cat: Category, loc: string): string {
  const c = CATEGORY_LABEL[cat];
  switch (cat) {
    case "dance-club":
      return `${c} in ${loc} | Best Russian Dance Club & Night Party in ${loc}`;
    case "beach-party":
      return `${c} in ${loc} | Top Russian Beach Parties & Nightlife in ${loc}`;
    case "russian-dance":
      return `${c} in ${loc} | Belly, Pole & Russian Party in ${loc}`;
    case "disco-club":
      return `${c} in ${loc} | #1 Russian Night Club & Disco in ${loc}`;
    case "russian-pub":
      return `${c} in ${loc} | Best Russian Bar & Lounge in ${loc}`;
    case "ladies-bar":
      return `${c} in ${loc} | Top Ladies Night & Russian Party Bar in ${loc}`;
  }
}

function pageDescription(cat: Category, loc: string): string {
  switch (cat) {
    case "dance-club":
      return `Looking for the best dance club in ${loc}? Russian Night Lounge brings electrifying Russian DJ nights, belly dancers, pole performers and premium drinks — Goa's most exclusive Russian party in ${loc}.`;
    case "beach-party":
      return `Experience the ultimate beach party in ${loc}. Russian Night Lounge hosts the most exciting Russian-themed beach parties in ${loc} with live DJs, sunset cocktails, dancers and unlimited drinks.`;
    case "russian-dance":
      return `Watch the most stunning Russian dance shows in ${loc} — belly dance, pole dance and professional Russian dancers performing nightly at Goa's #1 Russian party venue.`;
    case "disco-club":
      return `Step into the best disco club in ${loc}. Goa's premier Russian night club with banging DJ sets, light shows, VIP tables and the most electrifying disco nightlife in ${loc}.`;
    case "russian-pub":
      return `Russian pub in ${loc} — premium vodka, signature cocktails, hookah and authentic Russian lounge vibe. The most loved Russian bar and pub experience in ${loc}.`;
    case "ladies-bar":
      return `Ladies bar in ${loc} — safe, stylish and electrifying. Ladies night specials, Russian dancers, premium drinks and Goa's most upscale ladies bar experience in ${loc}.`;
  }
}

function pageH1(cat: Category, loc: string): string {
  const c = CATEGORY_LABEL[cat];
  return cat === "russian-dance" ? `Russian Dance in ${loc}` : `${c} in ${loc}`;
}

function pageHero(cat: Category, loc: string): string {
  switch (cat) {
    case "dance-club":
      return `Goa's most electrifying Russian dance club, now at your doorstep in ${loc}.`;
    case "beach-party":
      return `Sunset cocktails, Russian DJs and the wildest beach party energy in ${loc}.`;
    case "russian-dance":
      return `Belly, pole and live Russian dance performances every night — ${loc}'s #1 party venue.`;
    case "disco-club":
      return `The disco that never sleeps. Russian nights, world-class DJs and VIP service in ${loc}.`;
    case "russian-pub":
      return `Premium vodka, Russian classics and an authentic lounge vibe right here in ${loc}.`;
    case "ladies-bar":
      return `Goa's most upscale ladies bar — stylish, safe and unforgettable nights in ${loc}.`;
  }
}

function sectionsFor(cat: Category, loc: string): { h: string; p: string }[] {
  const c = CATEGORY_LABEL[cat];
  const cl = c.toLowerCase();

  const intros: Record<Category, string> = {
    "dance-club": `If you're searching for the best dance club in ${loc}, your night begins at Russian Night Lounge. We bring Goa's signature Russian party energy straight to ${loc} with high-energy DJ sets, professional dancers and a dance floor that stays packed from 9 PM till sunrise. Every Russian party in Goa we host has become a benchmark for nightlife — and the ${loc} crowd is at the heart of it.`,
    "beach-party": `A beach party in ${loc} hits different when it's hosted by Goa's #1 Russian night club. We curate themed beach nights, sunset DJ sets and Russian-style party experiences that pull crowds from across ${loc}, North Goa and beyond. From bonfires to belly dancers, every beach party in ${loc} is engineered to be unforgettable.`,
    "russian-dance": `Russian dance in ${loc} is more than entertainment — it's a full-blown cultural experience. Our resident troupe of professional Russian dancers, belly artists and pole performers turn every night in ${loc} into a world-class show. If you want to see the real Russian party in Goa atmosphere, this is where you start.`,
    "disco-club": `The best disco club in ${loc} blends Russian electro, Bollywood remixes and international house into one non-stop dance floor. Russian Night Lounge is the disco that locals, tourists and the Russian community in ${loc} have made their default home for late-night clubbing in Goa.`,
    "russian-pub": `Looking for an authentic Russian pub in ${loc}? Step inside Russian Night Lounge — premium imported vodka, Russian beer, signature cocktails and a lounge ambience built around the spirit of Moscow nightlife. The most loved Russian bar in ${loc} is open every night till late.`,
    "ladies-bar": `A ladies bar in ${loc} should feel safe, glamorous and full of energy — and that's exactly what Russian Night Lounge delivers. Stylish décor, premium drinks, Russian dancers and Goa's most welcoming ladies-night experience in ${loc}.`,
  };

  return [
    {
      h: `Welcome to the Best ${c} in ${loc}`,
      p: intros[cat],
    },
    {
      h: `Why Russian Night Lounge is the #1 ${c} in ${loc}`,
      p: `Russian Night Lounge has built its name on three things — world-class Russian dancers, premium drinks at fair prices and a dance floor that never disappoints. When people search for a ${cl} in ${loc}, they're really looking for that perfect mix of vibe, music and crowd. We deliver it nightly, with curated Russian DJ sets, live belly and pole performances, VIP table service and a dedicated ladies-night every week. No other ${cl} in ${loc} matches the energy of a real Russian party in Goa.`,
    },
    {
      h: `What to Expect at Our ${c} in ${loc}`,
      p: `From the moment you walk in, the music, the lighting and the ambience tell you you're somewhere different. The DJ deck warms up by 9 PM with chilled lounge beats, then ramps into Russian electro, EDM, Bollywood mashups and international house. Our dancers take the stage between 10 PM and 2 AM with rotating belly-dance, pole-dance and themed Russian show sets. Whether you're walking in from ${loc}, Calangute or anywhere else in North Goa, expect a packed floor, premium hookah, signature cocktails and a crowd that's there to celebrate.`,
    },
    {
      h: `Drinks, Hookah & Russian Cuisine`,
      p: `A great ${cl} in ${loc} lives or dies by its bar — and ours is stacked. Imported vodka, premium whisky, single-malts, craft cocktails, mocktails and an unlimited drinks package on most party nights. Pair them with authentic Russian dishes — pelmeni, blini, borscht — plus Indian, Goan and continental favourites from our late-night kitchen. Our hookah menu features over a dozen premium flavours, served at your table on request.`,
    },
    {
      h: `Russian Dancers, Belly & Pole Shows in ${loc}`,
      p: `The signature highlight of our ${cl} in ${loc} is the live performance line-up. Professional belly dancers with years of international experience headline most weeknights. Saturday is our Pole Dance Spectacular — Goa's most electrifying weekly show. Themed Russian nights run on rotating Wednesdays and Fridays. Every performance is family-friendly, professional and choreographed to be jaw-dropping rather than crass — the way Russian-style entertainment is meant to be done in Goa.`,
    },
    {
      h: `Perfect for Groups, Couples & Private Parties`,
      p: `Whether you're a group of friends visiting ${loc} for the weekend, a couple looking for a romantic night out, or planning a bachelorette, birthday or corporate party — Russian Night Lounge has the right table for you. We offer VIP enclosures, group packages, bottle service and full venue buyouts for private events. Speak to our team and we'll customise the ${cl} in ${loc} experience around your celebration.`,
    },
    {
      h: `How to Reach Our ${c} from ${loc}`,
      p: `Russian Night Lounge is located in the heart of North Goa Calangute (403516), within easy reach of ${loc}. Taxis, rentals and ride-share are available across North Goa, and we're happy to recommend the fastest route from ${loc} on call. Doors open at 8:30 PM and the party runs till late — usually 3 to 4 AM on weekends.`,
    },
    {
      h: `Book the Best ${c} in ${loc} Tonight`,
      p: `Tables fill up fast on weekends and during the Goa season. To lock in your spot at the best ${cl} in ${loc}, call or WhatsApp our reservations desk. We'll confirm your table, walk you through the menu and packages, and make sure your Russian party in Goa is everything you've been searching for. See you on the dance floor.`,
    },
  ];
}

function faqsFor(cat: Category, loc: string): { q: string; a: string }[] {
  const c = CATEGORY_LABEL[cat].toLowerCase();
  return [
    {
      q: `Which is the best ${c} in ${loc}?`,
      a: `Russian Night Lounge is widely rated as the best ${c} in ${loc} — and the #1 Russian night club in Goa overall. Expect belly and pole performances, premium drinks, hookah and Russian DJ sets every night.`,
    },
    {
      q: `What are the timings of the ${c} in ${loc}?`,
      a: `Russian Night Lounge opens daily at 8:30 PM. Live performances usually start around 9:30 PM and the music runs till 3–4 AM on weekends. We're open every night of the week.`,
    },
    {
      q: `How do I book a table for the ${c} in ${loc}?`,
      a: `Call or WhatsApp +91 87934 32338. We accept reservations for couples, groups, VIP tables, birthdays, bachelorettes and full private events.`,
    },
    {
      q: `Is there a dress code at the ${c} in ${loc}?`,
      a: `Smart-chic or glamorous attire is recommended. Most guests dress up to match the upscale ambience — beachwear and slippers are not permitted after 9 PM.`,
    },
    {
      q: `Do you have an unlimited drinks package?`,
      a: `Yes — most party nights include an unlimited drinks and beer + food package alongside our full à la carte cocktail and Russian menu.`,
    },
  ];
}

function buildSeoPage(category: Category, slug: string, locKey: string, location: string, path?: string): SeoPageData {
  return {
    slug,
    path: path ?? `/${slug}/`,
    category,
    location,
    locKey,
    title: pageTitle(category, location),
    description: pageDescription(category, location),
    h1: pageH1(category, location),
    hero: pageHero(category, location),
    sections: sectionsFor(category, location),
    keywords: [
      `${CATEGORY_LABEL[category].toLowerCase()} in ${location.toLowerCase()}`,
      `${CATEGORY_LABEL[category].toLowerCase()} ${location.toLowerCase()}`,
      `best ${CATEGORY_LABEL[category].toLowerCase()} in ${location.toLowerCase()}`,
      ...CATEGORY_KEYWORDS[category].map((k) => `${k} in ${location.toLowerCase()}`),
      ...SHARED_KEYWORDS,
    ],
    faqs: faqsFor(category, location),
  };
}

// Pretty-print location keys
const LOC_NAMES: Record<string, string> = {
  goa: "Goa",
  "north-goa": "North Goa",
  "south-goa": "South Goa",
  calangute: "Calangute",
  "baga-beach": "Baga Beach",
  candolim: "Candolim",
  anjuna: "Anjuna",
  panjim: "Panjim",
  mandrem: "Mandrem",
  nerul: "Nerul",
  morjim: "Morjim",
  mapusa: "Mapusa",
  arambol: "Arambol",
  siolim: "Siolim",
  sligo: "Sligo",
  saligao: "Saligao",
  nagoa: "Nagoa",
  arpora: "Arpora",
  porvorim: "Porvorim",
  vagator: "Vagator",
};

const LOCS = {
  danceClub: ["goa", "baga-beach", "calangute"],
  beachParty: [
    "goa", "baga-beach", "candolim", "anjuna", "panjim", "mandrem", "nerul",
    "morjim", "mapusa", "arambol", "siolim", "sligo", "nagoa", "arpora",
    "porvorim", "vagator", "south-goa", "north-goa",
  ],
  russianDance: [
    "goa", "calangute", "baga-beach", "candolim", "anjuna", "panjim", "mandrem",
    "nerul", "morjim", "mapusa", "arambol", "siolim", "saligao", "nagoa",
    "arpora", "porvorim", "vagator", "north-goa", "south-goa",
  ],
  // disco-club has mixed slug formats — preserve exact WP URLs
  discoClubInSlug: [
    "calangute", "nerul", "morjim", "mapusa", "arambol", "siolim", "saligao",
    "nagoa", "arpora", "porvorim", "vagator", "south-goa", "north-goa",
  ],
  discoClubNightlifeSlug: ["baga-beach", "candolim", "anjuna", "panjim", "mandrem"],
  russianPub: [
    "goa", "calangute", "baga-beach", "candolim", "anjuna", "panjim", "mandrem",
    "nerul", "morjim", "mapusa", "arambol", "siolim", "saligao", "nagoa",
    "arpora", "porvorim", "vagator", "south-goa", "north-goa",
  ],
  ladiesBar: ["goa", "calangute", "baga-beach"],
};

export const SEO_PAGES: SeoPageData[] = [
  // Dance club
  ...LOCS.danceClub.map((k) =>
    buildSeoPage("dance-club", `dance-club-in-${k}`, k, LOC_NAMES[k]),
  ),
  // Beach party
  ...LOCS.beachParty.map((k) =>
    buildSeoPage("beach-party", `beach-party-in-${k}`, k, LOC_NAMES[k]),
  ),
  // Russian dance
  ...LOCS.russianDance.map((k) =>
    buildSeoPage("russian-dance", `russian-dance-in-${k}`, k, LOC_NAMES[k]),
  ),
  // Disco club — special hub
  buildSeoPage("disco-club", "disco-club-goa-russian-party-nightlife", "goa", "Goa"),
  // Disco club -in- variants
  ...LOCS.discoClubInSlug.map((k) =>
    buildSeoPage("disco-club", `disco-club-in-${k}`, k, LOC_NAMES[k]),
  ),
  // Disco club nightlife variants
  ...LOCS.discoClubNightlifeSlug.map((k) =>
    buildSeoPage("disco-club", `disco-club-${k}-goa-nightlife`, k, LOC_NAMES[k]),
  ),
  // Russian pub
  ...LOCS.russianPub.map((k) =>
    buildSeoPage("russian-pub", `russian-pub-in-${k}`, k, LOC_NAMES[k]),
  ),
  // Ladies bar
  ...LOCS.ladiesBar.map((k) =>
    buildSeoPage("ladies-bar", `ladies-bar-in-${k}`, k, LOC_NAMES[k]),
  ),
];

export function findSeoPage(path: string): SeoPageData | undefined {
  const normalized = path.endsWith("/") ? path : `${path}/`;
  return SEO_PAGES.find((p) => p.path === normalized);
}
