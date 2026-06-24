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
      {/* ── 01  Scroll-driven carousel ───────────────────── */}
      <JournalCarousel articles={articles} />

      {/* ── 02  Topics editorial grid ────────────────────── */}
      <section className="overflow-hidden bg-charcoal text-ivory">

        {/* Full-width hairline */}
        <div className="h-px bg-ivory/[0.06]" />

        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-10 sm:py-24 lg:py-36">

          {/* Header row */}
          <div className="mb-10 flex flex-col gap-6 sm:mb-16 sm:gap-8 lg:flex-row lg:items-end lg:justify-between lg:gap-0">
            <div className="reveal-left text-center sm:text-left">
              <p className="text-[0.52rem] uppercase tracking-[0.45em] text-bronze">
                Thèmes abordés
              </p>
              <h2 className="mt-4 font-serif text-4xl font-medium leading-[1.05] text-ivory sm:text-5xl lg:text-6xl">
                Explorer<br />par sujet.
              </h2>
            </div>
            <p className="reveal mx-auto max-w-[22ch] text-center text-[0.8rem] leading-[1.9] text-ivory/28 sm:mx-0 sm:max-w-[32ch] sm:text-left lg:text-right">
              Chaque article cible un domaine précis de l&apos;art de vivre dans une villa haut de gamme au Maroc.
            </p>
          </div>

          {/* ── MOBILE: snap carousel ── */}
          <div className="relative -mx-5 mb-2 sm:hidden">
            <div className="flex snap-x snap-mandatory overflow-x-auto scrollbar-hide gap-2 px-5 pb-4">
              {topics.map((t) => (
                <Link
                  key={t.label}
                  href={t.href}
                  className="group snap-start shrink-0 flex items-center gap-4 border border-ivory/[0.08] px-5 py-4 transition-colors duration-300 active:border-bronze/50 active:bg-[#141412]"
                >
                  <span className="shrink-0 font-serif text-[0.6rem] leading-none text-bronze/30 transition-colors duration-300 group-active:text-bronze/80">
                    {t.n}
                  </span>
                  <div className="h-px w-0 shrink-0 bg-bronze/45 transition-all duration-300 group-active:w-4" />
                  <span className="whitespace-nowrap text-[0.6rem] uppercase tracking-[0.22em] text-ivory/40 transition-colors duration-300 group-active:text-ivory/80">
                    {t.label}
                  </span>
                  <span className="ml-1 text-[0.6rem] text-bronze/50 transition-colors duration-300 group-active:text-bronze">→</span>
                </Link>
              ))}
              <div className="shrink-0 w-5" aria-hidden="true" />
            </div>
            <div className="pointer-events-none absolute inset-y-0 right-0 w-14 bg-gradient-to-l from-charcoal to-transparent" />
          </div>

          {/* ── DESKTOP: 2-column topic grid ── */}
          <div className="hidden grid-cols-2 gap-x-16 border-t border-ivory/[0.06] sm:grid lg:gap-x-28">
            {topics.map((t, i) => (
              <Link
                key={t.label}
                href={t.href}
                className="reveal group flex items-center gap-5 border-b border-ivory/[0.06] py-6 transition-all duration-300 hover:pl-1"
                style={{ transitionDelay: `${i * 30}ms` }}
              >
                {/* Number */}
                <span className="w-7 shrink-0 font-serif text-[0.65rem] leading-none text-bronze/20 transition-colors duration-300 group-hover:text-bronze/80">
                  {t.n}
                </span>

                {/* Animated dash */}
                <div className="h-px w-0 shrink-0 bg-bronze/45 transition-all duration-500 group-hover:w-5" />

                {/* Label */}
                <span className="flex-1 text-[0.65rem] uppercase tracking-[0.24em] text-ivory/38 transition-colors duration-300 group-hover:text-ivory/80">
                  {t.label}
                </span>

                {/* Arrow */}
                <span className="translate-x-2 text-[0.65rem] text-bronze opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100">
                  →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTASection title="Un projet en tête ? Parlons-en directement." />
    </>
  );
}
