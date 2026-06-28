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
  | "ladies-bar"
  | "belly-dance";

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
  "belly-dance": "Belly Dance",
};

const CATEGORY_KEYWORDS: Record<Category, string[]> = {
  "dance-club": ["dance club", "best dance club", "night dance club", "russian dance club"],
  "beach-party": ["beach party", "beach club", "beach nightlife", "sunset beach party"],
  "russian-dance": ["russian dance", "russian dancers", "belly dance", "pole dance", "russian party"],
  "disco-club": ["disco club", "nightclub", "russian night club", "disco party"],
  "russian-pub": ["russian pub", "russian bar", "russian lounge", "russian vodka bar"],
  "ladies-bar": ["ladies bar", "ladies night", "girls bar", "ladies dance bar"],
  "belly-dance": [
    "belly dance",
    "belly dancers",
    "live belly dance show",
    "professional belly dancers",
    "arabic belly dance",
    "belly dance performance",
  ],
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
    case "belly-dance":
      return `${c} in ${loc} | Live Belly Dance Shows & Performances in ${loc}`;
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
    case "belly-dance":
      return `Watch the most mesmerising belly dance shows in ${loc} — professional belly dancers, Arabic & Russian fusion sets, live performances every night at Russian Night Lounge, ${loc}'s favourite belly dance destination.`;
  }
}

function pageH1(cat: Category, loc: string): string {
  const c = CATEGORY_LABEL[cat];
  if (cat === "russian-dance") return `Russian Dance in ${loc}`;
  if (cat === "belly-dance") return `Belly Dance in ${loc}`;
  return `${c} in ${loc}`;
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
    case "belly-dance":
      return `Live belly dance shows, Arabic rhythms and Russian fusion sets — ${loc}'s favourite belly dance destination.`;
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
    "belly-dance": `Belly dance in ${loc} comes alive at Russian Night Lounge — Arabic-style oriental sets, Russian fusion choreography and the most-watched live belly dance shows in ${loc}.`,
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

// ─────────────────────────────────────────────────────────────────────────────
// Belly Dance — bespoke per-location builder with unique copy + cross-links.
// Each page references 3 sibling belly-dance pages + 2 related category pages
// + the homepage, so internal link equity flows across the whole cluster.
// ─────────────────────────────────────────────────────────────────────────────

const BELLY_LOCS = [
  "goa", "calangute", "baga-beach", "candolim", "anjuna", "panjim", "mandrem",
  "nerul", "morjim", "mapusa", "arambol", "siolim", "saligao", "nagoa",
  "arpora", "porvorim", "vagator", "south-goa", "north-goa",
];

interface LocFlavour {
  vibe: string;           // 1-line vibe of the place
  crowd: string;          // who fills the floor
  travel: string;         // travel-from line
  landmark: string;       // local hook
}

const BELLY_FLAVOUR: Record<string, LocFlavour> = {
  goa: {
    vibe: "Goa is India's nightlife capital, and belly dance is the show that keeps the season buzzing",
    crowd: "international tourists, the Russian expat community and Bollywood weekenders",
    travel: "All North Goa hubs reach the lounge in under 25 minutes",
    landmark: "five minutes from Calangute beach and Tito's Lane",
  },
  calangute: {
    vibe: "Calangute is Goa's most-loved nightlife strip, and belly dance is its signature live act",
    crowd: "Calangute hotel guests, beach-shack diners and the weekend Mumbai crowd",
    travel: "Walking distance from most Calangute beachfront resorts",
    landmark: "right next to Club Midnight, Calangute 403516",
  },
  "baga-beach": {
    vibe: "Baga Beach never sleeps, and our belly dance shows are the after-beach highlight",
    crowd: "Baga shack regulars, water-sports tourists and Tito's Lane party-hoppers",
    travel: "A 7-minute drive from Tito's Lane and Baga creek",
    landmark: "minutes from Britto's, Cape Town Café and the Baga shack belt",
  },
  candolim: {
    vibe: "Candolim's upscale stretch deserves an upscale belly dance lounge",
    crowd: "honeymooners, Candolim resort guests and Aguada-side regulars",
    travel: "10-minute taxi from Candolim Beach Road",
    landmark: "easy ride from Sinquerim, Aguada and Candolim Beach",
  },
  anjuna: {
    vibe: "Anjuna's bohemian crowd loves a proper belly dance set after the beach",
    crowd: "Anjuna flea-market shoppers, hippy regulars and trance-night crews",
    travel: "15-minute scenic ride from Anjuna Beach Road",
    landmark: "perfectly placed after a day at Anjuna or Curlies",
  },
  panjim: {
    vibe: "Panjim's Latin-quarter charm pairs beautifully with our oriental belly dance nights",
    crowd: "Panjim residents, casino guests and old-Goa weekenders",
    travel: "About 25 minutes from Panjim via NH66",
    landmark: "the closest authentic belly dance lounge to Panjim & Miramar",
  },
  mandrem: {
    vibe: "Mandrem is yoga-quiet by day, but our belly dance lounge gives the area its night-out",
    crowd: "wellness travellers, North-tip stayers and Ashvem regulars",
    travel: "30-minute scenic drive south from Mandrem via Siolim bridge",
    landmark: "Mandrem's closest premium belly dance show venue",
  },
  nerul: {
    vibe: "Nerul's quiet riverside calls for a glamorous belly dance escape down the road",
    crowd: "Nerul villa guests, Coco Beach diners and Reis Magos visitors",
    travel: "Under 15 minutes from Nerul via Verem-Candolim route",
    landmark: "fastest belly dance lounge from Nerul & Coco Beach",
  },
  morjim: {
    vibe: "Morjim — the original 'Little Russia' of Goa — deserves the most authentic belly dance show in the state",
    crowd: "the Russian community, long-stay European tourists and Ashvem regulars",
    travel: "25-minute drive south from Morjim across Chapora bridge",
    landmark: "the original belly dance home of Goa's Russian community",
  },
  mapusa: {
    vibe: "Mapusa locals know — for a real belly dance night out, you head straight to Calangute",
    crowd: "Mapusa residents, market-day visitors and North Goa locals",
    travel: "15-minute drive west from Mapusa via Calangute Road",
    landmark: "closest premium belly dance venue from Mapusa town",
  },
  arambol: {
    vibe: "Arambol's drum-circle crowd pairs perfectly with a glamorous belly dance night down south",
    crowd: "Arambol drum-circle regulars, long-stayers and yoga retreat guests",
    travel: "35-minute scenic ride south from Arambol",
    landmark: "Arambol's go-to premium belly dance lounge",
  },
  siolim: {
    vibe: "Siolim sits perfectly between North-tip beaches and our belly dance dance floor",
    crowd: "Siolim villa guests, Chapora regulars and Vagator party crews",
    travel: "20-minute drive from Siolim circle",
    landmark: "the easiest premium belly dance venue from Siolim",
  },
  saligao: {
    vibe: "Saligao's heritage feel deserves a heritage-grade belly dance show",
    crowd: "Saligao villa guests, foodie travellers and Sangolda regulars",
    travel: "10-minute ride down from Saligao to Calangute",
    landmark: "Saligao's nearest authentic belly dance lounge",
  },
  nagoa: {
    vibe: "Nagoa's quiet villas and big resorts deserve a proper belly dance night out",
    crowd: "Nagoa resort guests and Calangute-Arpora party-hoppers",
    travel: "Under 10 minutes from Nagoa",
    landmark: "the most-recommended belly dance show by Nagoa stays",
  },
  arpora: {
    vibe: "Arpora's Saturday Night Market crowd loves a proper belly dance after-party",
    crowd: "Arpora night-market shoppers, Baga residents and Saturday-night crews",
    travel: "5-minute hop from Arpora down to Calangute",
    landmark: "closest belly dance show from Arpora Saturday Night Market",
  },
  porvorim: {
    vibe: "Porvorim's premium residences deserve a premium belly dance experience",
    crowd: "Porvorim residents, corporate travellers and Mapusa locals",
    travel: "20-minute drive from Porvorim via NH66",
    landmark: "Porvorim's nearest belly dance lounge with Russian fusion sets",
  },
  vagator: {
    vibe: "Vagator's cliff-top sunsets pair perfectly with our late-night belly dance shows",
    crowd: "Vagator beach regulars, Chapora crews and Anjuna-side travellers",
    travel: "20-minute scenic ride south from Vagator",
    landmark: "Vagator's nearest authentic belly dance show",
  },
  "south-goa": {
    vibe: "South Goa's quieter coast is missing one thing — a proper belly dance night out",
    crowd: "South Goa resort guests, Colva regulars and Margao weekenders",
    travel: "Under 90 minutes from most South Goa resorts via NH66",
    landmark: "the most-driven-to belly dance venue for South Goa guests",
  },
  "north-goa": {
    vibe: "North Goa is the home of nightlife, and belly dance is the show that defines the season",
    crowd: "everyone from Anjuna's bohemians to Candolim's honeymooners",
    travel: "Reachable in under 25 minutes from every major North Goa hub",
    landmark: "the most-booked belly dance show across North Goa",
  },
};

function bellyCrossLinks(currentLocKey: string): { sibling: string; siblingPath: string; siblingLabel: string }[] {
  // Pick 3 sibling belly-dance pages (deterministic rotation by index)
  const idx = BELLY_LOCS.indexOf(currentLocKey);
  const siblings: string[] = [];
  for (let i = 1; siblings.length < 3 && i < BELLY_LOCS.length; i++) {
    const next = BELLY_LOCS[(idx + i) % BELLY_LOCS.length];
    if (next !== currentLocKey) siblings.push(next);
  }
  return siblings.map((k) => ({
    sibling: k,
    siblingPath: `/belly-dance-in-${k}/`,
    siblingLabel: `Belly Dance in ${LOC_NAMES[k]}`,
  }));
}

function bellyDanceSectionsFor(locKey: string, loc: string): { h: string; p: string }[] {
  const f = BELLY_FLAVOUR[locKey];
  const links = bellyCrossLinks(locKey);
  const [l1, l2, l3] = links;
  // Related category cross-links (homepage + russian-dance + russian-pub variants)
  const relatedRussianDance = `/russian-dance-in-${locKey === "calangute" || locKey === "saligao" ? locKey : "goa"}/`;
  const relatedClub = locKey === "calangute" || locKey === "baga-beach"
    ? `/dance-club-in-${locKey}/`
    : `/dance-club-in-goa/`;

  return [
    {
      h: `The Best Belly Dance in ${loc}`,
      p: `${f.vibe}. At Russian Night Lounge, our belly dance in ${loc} is more than a performance — it's the centrepiece of the night. Our resident belly dancers blend traditional Arabic technique with Russian-style choreography you won't see anywhere else in Goa. If you've been searching for the real, professionally produced <a href="/belly-dance-in-goa/">belly dance in Goa</a> experience, your search ends in ${loc}.`,
    },
    {
      h: `Why Russian Night Lounge for Belly Dance in ${loc}`,
      p: `Most venues advertising belly dance in ${loc} bring in part-timers for a 10-minute appearance. We don't. Our belly dancers are full-time professional artists trained in oriental, Egyptian-cabaret and Russian fusion styles, performing three full rotating sets every night. Add live DJ accompaniment, dramatic lighting and an audience that knows good belly dance when they see it, and you understand why ${f.crowd} keep coming back. Compare the standard yourself — pair this with our <a href="${relatedClub}">dance club experience</a> and you'll see the difference.`,
    },
    {
      h: `What Our Belly Dance Show in ${loc} Looks Like`,
      p: `Doors open at 8:30 PM. By 9:30 PM the first oriental set begins — classical Arabic rhythms, veil work and a slow build that warms up the floor. The 11 PM set is our signature Russian fusion belly dance — faster, theatrical, with costume changes and choreography built around our DJ's live mix. The midnight set goes full carnival — drums, audience interaction and the crowd on its feet. Every belly dance in ${loc} show we put on is choreographed to feel like a Las Vegas residency rather than a hotel-lobby act.`,
    },
    {
      h: `Belly Dance, Russian Dance & The Full Night Out in ${loc}`,
      p: `Belly dance is the headliner, but the night doesn't stop there. Between sets, our resident DJs spin Russian electro, Bollywood remixes and international house. Pole-dance interludes run on Saturdays. If you love the belly dance shows in ${loc}, you'll equally love our wider <a href="${relatedRussianDance}">Russian dance line-up</a> — same dancers, different specialisms. It's the most complete dance entertainment package in ${loc}, full stop.`,
    },
    {
      h: `Drinks, Hookah & a Bar Worthy of the Belly Dance in ${loc}`,
      p: `A belly dance night in ${loc} needs a bar that lives up to it. Ours is stacked — imported vodka flights, single-malts, Arabic-inspired signature cocktails, mocktails and an unlimited-drinks package on themed nights. The hookah menu features over a dozen premium flavours served straight to your table. The food menu pairs Russian classics with Arabic mezze, Goan favourites and continental late-night plates — designed to keep you at the lounge for the full belly dance show in ${loc}.`,
    },
    {
      h: `Who Comes to Watch Belly Dance in ${loc}`,
      p: `Our belly dance crowd in ${loc} is what makes the room. ${f.crowd[0].toUpperCase() + f.crowd.slice(1)} all share one dance floor, and the energy is electric without ever feeling rowdy. It's stylish, safe and properly fun — exactly what a belly dance night in ${loc} should feel like. Curious which other locations love it as much as ${loc}? Check our shows in <a href="${l1.siblingPath}">${l1.siblingLabel}</a>, <a href="${l2.siblingPath}">${l2.siblingLabel}</a> and <a href="${l3.siblingPath}">${l3.siblingLabel}</a> — same dancers, same level of show.`,
    },
    {
      h: `Perfect for Birthdays, Bachelorettes & Corporate Nights in ${loc}`,
      p: `Booking a belly dance event in ${loc} for a special night? Russian Night Lounge handles it end-to-end. Bachelorettes get a reserved front-row banquette and a personalised dancer dedication. Birthdays get a custom cake-cutting set choreographed into the belly dance show. Corporate teams in ${loc} regularly buy out the venue for client dinners and offsite parties — we customise the show, menu and music to match. Tell us the occasion and we'll engineer the perfect belly dance night in ${loc} around it.`,
    },
    {
      h: `Getting to Our Belly Dance Show from ${loc}`,
      p: `Russian Night Lounge is located ${f.landmark} — Club Midnight, Calangute, North Goa 403516. ${f.travel}, and our team can recommend the fastest route on call. Ride-share, pre-paid taxis and self-drive rentals all work. Doors at 8:30 PM, first belly dance set at 9:30 PM, and the music runs till 3–4 AM on weekends. Browse the full <a href="/">Russian Night Lounge homepage</a> for tonight's line-up.`,
    },
    {
      h: `Book the Best Belly Dance in ${loc} Tonight`,
      p: `Front-row tables for our belly dance show in ${loc} sell out on weekends and through the Goa season. Call or WhatsApp +91 87934 32338 to lock in your seat — we'll confirm timings, walk you through packages and reserve the best table for your group. See you on the dance floor — and don't forget to compare with our shows in <a href="${l1.siblingPath}">${l1.siblingLabel}</a> and <a href="${l2.siblingPath}">${l2.siblingLabel}</a> for your next visit.`,
    },
  ];
}

function bellyDanceFaqsFor(loc: string): { q: string; a: string }[] {
  return [
    {
      q: `Where can I watch the best belly dance in ${loc}?`,
      a: `Russian Night Lounge runs Goa's most-watched professional belly dance show, with three live sets every night — and it's the closest premium belly dance venue serving the ${loc} crowd.`,
    },
    {
      q: `What time does the belly dance show in ${loc} start?`,
      a: `Doors open at 8:30 PM. The first belly dance set begins around 9:30 PM, followed by 11 PM and midnight sets. Music continues till 3–4 AM on weekends.`,
    },
    {
      q: `Do I need to book in advance for belly dance in ${loc}?`,
      a: `Yes — front-row and VIP tables sell out, especially on weekends and through the Goa season. Call or WhatsApp +91 87934 32338 to reserve.`,
    },
    {
      q: `Is the belly dance show in ${loc} family-friendly?`,
      a: `Yes. Our belly dance is professionally choreographed in traditional Arabic and Russian fusion styles — it's a stage show, not a strip act. Couples, friends and groups all enjoy it.`,
    },
    {
      q: `Are there drinks and food available during the belly dance show?`,
      a: `Absolutely — full bar with imported vodka, signature cocktails, premium hookah and a kitchen serving Russian, Arabic, Indian and continental plates till late.`,
    },
  ];
}

function buildBellyDancePage(locKey: string): SeoPageData {
  const location = LOC_NAMES[locKey];
  const slug = `belly-dance-in-${locKey}`;
  return {
    slug,
    path: `/${slug}/`,
    category: "belly-dance",
    location,
    locKey,
    title: pageTitle("belly-dance", location),
    description: pageDescription("belly-dance", location),
    h1: pageH1("belly-dance", location),
    hero: pageHero("belly-dance", location),
    sections: bellyDanceSectionsFor(locKey, location),
    keywords: [
      `belly dance in ${location.toLowerCase()}`,
      `belly dancers in ${location.toLowerCase()}`,
      `belly dance show ${location.toLowerCase()}`,
      `live belly dance ${location.toLowerCase()}`,
      `professional belly dancers ${location.toLowerCase()}`,
      `arabic belly dance ${location.toLowerCase()}`,
      `russian belly dance ${location.toLowerCase()}`,
      ...CATEGORY_KEYWORDS["belly-dance"].map((k) => `${k} in ${location.toLowerCase()}`),
      ...SHARED_KEYWORDS,
    ],
    faqs: bellyDanceFaqsFor(location),
  };
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
