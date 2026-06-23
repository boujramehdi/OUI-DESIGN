import type { Metadata } from "next";
import Link from "next/link";
import { CTASection } from "@/components/CTASection";
import { JournalCarousel } from "@/components/JournalCarousel";
import { articles } from "@/lib/articles";

export const metadata: Metadata = {
  title: "Journal Ouidesign — Conseils villas et architecture au Maroc",
  description:
    "Conseils d'experts, tendances et guides pratiques pour la rénovation, la domotique et l'architecture de villas et riads haut de gamme au Maroc.",
  alternates: { canonical: "/journal" },
};

const topics = [
  { label: "Rénovation villa",          n: "01", href: "/renovation-villa-maroc" },
  { label: "Smart home & domotique",    n: "02", href: "/smart-home-maroc" },
  { label: "Menuiserie sur mesure",     n: "03", href: "/menuiserie-sur-mesure-maroc" },
  { label: "Piscine & local technique", n: "04", href: "/piscine-local-technique-maroc" },
  { label: "Climatisation",             n: "05", href: "/climatisation-maroc" },
  { label: "Solaire & infrastructure",  n: "06", href: "/solaire-villa-maroc" },
  { label: "Architecture intérieure",   n: "07", href: "/expertises" },
  { label: "Sécurité & caméras",        n: "08", href: "/camera-surveillance-maroc" },
];

export default function JournalPage() {
  return (
    <>
      {/* ══════════════════════════════════════════════════
          01 — SPLIT  Sticky hero  ·  Image carousel
      ══════════════════════════════════════════════════ */}
      <section className="bg-charcoal text-ivory">
        <div className="flex flex-col lg:flex-row lg:min-h-[100svh]">

          {/* LEFT — sticky hero */}
          <div className="relative flex flex-col overflow-hidden
                          px-8 pb-12 pt-[90px] sm:px-12
                          lg:sticky lg:top-0 lg:h-screen lg:w-[46%] lg:pb-14">

            {/* Ghost watermark */}
            <span
              aria-hidden="true"
              className="pointer-events-none absolute inset-x-0 bottom-0 select-none font-serif font-medium uppercase leading-none text-ivory/[0.035]"
              style={{ fontSize: "clamp(4rem, 14vw, 11rem)", letterSpacing: "-0.02em" }}
            >
              JOURNAL
            </span>

            {/* Ambient orb */}
            <div className="pointer-events-none absolute -left-20 top-1/2 h-[60vh] w-[60vh] -translate-y-1/2 rounded-full bg-bronze/[0.06] blur-[100px]" />

            {/* Top rules */}
            <div className="absolute inset-x-0 top-[90px] h-px bg-ivory/6" />
            <div className="absolute bottom-0 right-0 top-[90px] w-px bg-ivory/6" />

            {/* Eyebrow — vertically centred on the navbar (h-[90px] → top: 45px) */}
            <div className="absolute left-8 top-[45px] -translate-y-1/2 anim-fade-in flex items-center gap-4 sm:left-12">
              <span className="hero-line-grow inline-block h-px bg-bronze/65" />
              <p className="text-[0.62rem] uppercase tracking-[0.4em] text-bronze">Journal Ouidesign</p>
            </div>

            {/* Title — centred in the remaining space */}
            <div className="relative flex flex-1 flex-col justify-center py-10 lg:py-0">
              <h1
                className="anim-slide-up anim-delay-1 font-serif leading-[1.0] text-ivory"
                style={{ fontSize: "clamp(2.2rem, 4.5vw, 4rem)" }}
              >
                Guides, conseils<br />
                <span className="text-bronze">et références</span><br />
                pour votre villa.
              </h1>
              <div className="anim-scale-in anim-delay-3 mt-7 h-px w-14 bg-bronze/40" />
              <p className="anim-slide-up anim-delay-4 mt-6 max-w-xs text-sm leading-7 text-ivory/40">
                Des articles écrits par l'équipe Ouidesign pour mieux comprendre,
                décider et investir dans votre propriété au Maroc.
              </p>
            </div>

            {/* Bottom — article count */}
            <div className="relative anim-fade-in anim-delay-6 flex items-end justify-between">
              <div className="flex items-center gap-3 text-ivory/20">
                <span className="text-[0.5rem] uppercase tracking-[0.3em]">Explorer</span>
                <div className="flex flex-col gap-1">
                  <span className="h-px w-4 bg-ivory/20" />
                  <span className="h-px w-6 bg-bronze/35" />
                </div>
              </div>
              <div className="text-right">
                <p className="font-serif text-[3.5rem] font-medium leading-none text-bronze/15 sm:text-[4.5rem]">
                  {String(articles.length).padStart(2, "0")}
                </p>
                <p className="text-[0.5rem] uppercase tracking-[0.3em] text-ivory/20">articles</p>
              </div>
            </div>
          </div>

          {/* RIGHT — carousel */}
          <JournalCarousel articles={articles} />
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          02 — TOPICS  editorial typographic list
      ══════════════════════════════════════════════════ */}
      <section className="overflow-hidden bg-charcoal text-ivory">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:py-28">
          <div className="grid gap-12 lg:grid-cols-[0.65fr_1.35fr] lg:gap-24">

            {/* Left — label */}
            <div className="reveal-left">
              <p className="text-[0.62rem] uppercase tracking-[0.4em] text-bronze">Thèmes abordés</p>
              <h2 className="mt-4 font-serif text-4xl font-medium leading-tight text-ivory sm:text-5xl">
                Explorer<br />par sujet.
              </h2>
              <div className="mt-8 h-px w-12 bg-bronze/35" />
              <p className="mt-6 text-sm leading-7 text-ivory/35">
                Chaque article cible un domaine précis de l'art de vivre dans une villa haut de gamme au Maroc.
              </p>
            </div>

            {/* Right — numbered topic rows */}
            <div className="divide-y divide-ivory/[0.07] border-t border-ivory/[0.07]">
              {topics.map((t, i) => (
                <Link
                  key={t.label}
                  href={t.href}
                  className="reveal group flex items-center gap-6 py-5 transition-all duration-300 hover:pl-2"
                  style={{ transitionDelay: `${i * 35}ms` }}
                >
                  <span className="w-8 shrink-0 font-serif text-sm leading-none text-bronze/25 transition-colors duration-300 group-hover:text-bronze">
                    {t.n}
                  </span>
                  <div className="h-px w-0 shrink-0 bg-bronze/40 transition-all duration-500 group-hover:w-6" />
                  <span className="flex-1 text-[0.7rem] uppercase tracking-[0.22em] text-ivory/45 transition-colors duration-300 group-hover:text-ivory">
                    {t.label}
                  </span>
                  <span className="translate-x-2 text-[0.7rem] text-bronze opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100">
                    →
                  </span>
                </Link>
              ))}
            </div>

          </div>
        </div>
      </section>

      <CTASection title="Un projet en tête ? Parlons-en directement." />
    </>
  );
}
