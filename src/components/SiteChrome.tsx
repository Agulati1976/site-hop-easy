import { useState } from "react";
import { Phone, MessageCircle, Instagram, Facebook, Youtube, Menu, X } from "lucide-react";

export const PHONE = "+918793432338";
export const PHONE_DISPLAY = "+91 87934 32338";
export const PHONE_TEL = "tel:+918793432338";
export const WHATSAPP =
  "https://api.whatsapp.com/send/?phone=918793432338&text=Hello+Goa+Night+Club&type=phone_number&app_absent=0";
export const EMAIL = "russiannightlounge@gmail.com";

export function SiteHeader() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-line/60 bg-ink/85 backdrop-blur-md">
      <div className="container-page flex items-center justify-between py-4">
        <a href="/" className="flex flex-col leading-none">
          <span className="font-display text-xl tracking-[0.12em] text-white">RUSSIAN NIGHT LOUNGE</span>
          <span className="mt-1 text-[0.6rem] tracking-[0.35em] text-gold uppercase">Goa · Est. Calangute</span>
        </a>
        <nav className="hidden gap-8 md:flex">
          {[
            ["Home", "/"],
            ["Russian Party", "/russian-dance-in-goa/"],
            ["Night Club", "/disco-club-goa-russian-party-nightlife/"],
            ["Beach Party", "/beach-party-in-goa/"],
            ["Russian Pub", "/russian-pub-in-goa/"],
            ["FAQ", "/faq/"],
          ].map(([label, href]) => (
            <a key={href} href={href} className="text-[0.72rem] tracking-[0.18em] uppercase text-cream/85 transition hover:text-gold">
              {label}
            </a>
          ))}
        </nav>
        <div className="hidden items-center gap-3 md:flex">
          <a href={`tel:${PHONE}`} className="flex items-center gap-2 text-[0.72rem] font-semibold tracking-wide text-gold">
            <Phone className="h-3.5 w-3.5" /> {PHONE_DISPLAY}
          </a>
          <a href={WHATSAPP} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 bg-whatsapp px-4 py-2 text-[0.7rem] font-semibold tracking-[0.15em] uppercase text-white transition hover:opacity-90">
            <MessageCircle className="h-3.5 w-3.5" /> WhatsApp
          </a>
        </div>
      </div>
    </header>
  );
}

export function SiteFooter() {
  return (
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
  );
}

export function FloatingWhatsApp() {
  return (
    <>
      {/* WhatsApp — left on mobile, right on desktop */}
      <a
        href={WHATSAPP}
        target="_blank"
        rel="noreferrer"
        aria-label="WhatsApp Russian Night Lounge Goa"
        className="fixed bottom-6 left-6 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-whatsapp text-white shadow-[0_10px_30px_rgba(37,211,102,0.45)] transition hover:scale-110 md:left-auto md:right-6"
      >
        <MessageCircle className="h-6 w-6" />
      </a>
      {/* Call — right on mobile only (desktop nav already has the number) */}
      <a
        href={PHONE_TEL}
        aria-label="Call Russian Night Lounge Goa"
        className="fixed bottom-6 right-6 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-r from-gold to-gold-soft text-ink shadow-[0_10px_30px_rgba(201,151,58,0.45)] transition hover:scale-110 md:hidden"
      >
        <Phone className="h-6 w-6" />
      </a>
    </>
  );
}

