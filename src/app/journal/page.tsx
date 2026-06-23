import type { Metadata } from "next";
import { CTASection } from "@/components/CTASection";
import { JournalCarousel } from "@/components/JournalCarousel";
import { articles } from "@/lib/articles";

export const metadata: Metadata = {
  title: "Journal Ouidesign — Conseils villas et architecture au Maroc",
  description:
    "Conseils d'experts, tendances et guides pratiques pour la rénovation, la domotique et l'architecture de villas et riads haut de gamme au Maroc.",
  alternates: { canonical: "/journal" },
};

export default function JournalPage() {
  return (
    <>
      <section className="bg-charcoal text-ivory">
        <div className="flex flex-col lg:flex-row lg:min-h-[100svh]">

          {/* ── LEFT — sticky hero ─────────────────────────── */}
          <div className="relative flex flex-col justify-between overflow-hidden
                          px-8 pb-12 pt-36 sm:px-12 sm:pt-44
                          lg:sticky lg:top-0 lg:h-screen lg:w-[46%] lg:pb-14 lg:pt-36">

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

            {/* Eyebrow */}
            <div className="relative anim-fade-in flex items-center gap-4">
              <span className="hero-line-grow inline-block h-px bg-bronze/65" />
              <p className="text-[0.62rem] uppercase tracking-[0.4em] text-bronze">Journal Ouidesign</p>
            </div>

            {/* Title */}
            <div className="relative my-auto py-12 lg:py-0">
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

            {/* Bottom — count */}
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

          {/* ── RIGHT — carousel ───────────────────────────── */}
          <JournalCarousel articles={articles} />

        </div>
      </section>

      <CTASection title="Un projet en tête ? Parlons-en directement." />
    </>
  );
}
