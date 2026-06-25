import { SiteHeader, SiteFooter, FloatingWhatsApp, WHATSAPP } from "@/components/SiteChrome";
import { Phone, MessageCircle } from "lucide-react";
import { PHONE, PHONE_DISPLAY } from "@/components/SiteChrome";
import SeoHead from "@/components/SeoHead";

export interface StaticPageProps {
  title: string;
  description: string;
  path: string;
  h1: string;
  intro: string;
  blocks: { h: string; p: string }[];
}

export default function StaticPage({ title, description, path, h1, intro, blocks }: StaticPageProps) {
  const canonical = `https://russianpartyingoa.com${path}`;
  return (
    <>
      <SeoHead title={title} description={description} canonical={canonical} />
      <SiteHeader />
      <main className="pt-28">
        <section className="container-page mx-auto max-w-4xl py-16">
          <span className="eyebrow">Russian Night Lounge Goa</span>
          <h1 className="mt-3 display-xl">{h1}</h1>
          <div className="my-6 h-px w-12 bg-gradient-to-r from-gold to-transparent" />
          <p className="serif-lead">{intro}</p>
          {blocks.map((b, i) => (
            <article key={i} className="mt-10">
              <h2 className="display-lg"><span className="text-gold">{b.h}</span></h2>
              <p className="mt-4 text-cream/85 leading-relaxed">{b.p}</p>
            </article>
          ))}
          <div className="mt-12 flex flex-wrap gap-3">
            <a href={`tel:${PHONE}`} className="inline-flex items-center gap-2 bg-gradient-to-r from-gold to-gold-soft px-7 py-3.5 text-[0.78rem] font-semibold tracking-[0.14em] uppercase text-ink">
              <Phone className="h-4 w-4" /> {PHONE_DISPLAY}
            </a>
            <a href={WHATSAPP} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 bg-whatsapp px-7 py-3.5 text-[0.78rem] font-semibold tracking-[0.14em] uppercase text-white">
              <MessageCircle className="h-4 w-4" /> WhatsApp
            </a>
          </div>
        </section>
      </main>
      <SiteFooter />
      <FloatingWhatsApp />
    </>
  );
}
