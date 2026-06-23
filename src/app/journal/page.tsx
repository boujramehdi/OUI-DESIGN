import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { CTASection } from "@/components/CTASection";
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
      {/* ── Split layout: sticky hero left / scrollable articles right ── */}
      <section className="bg-charcoal text-ivory">
        <div className="flex flex-col lg:flex-row lg:min-h-[100svh]">

          {/* ── LEFT — sticky hero panel ─────────────────────────────── */}
          <div className="relative flex flex-col justify-between overflow-hidden
                          px-8 pb-12 pt-36 sm:px-12 sm:pt-44
                          lg:sticky lg:top-0 lg:h-screen lg:w-[46%] lg:pt-36 lg:pb-12">

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

            {/* Top rule */}
            <div className="absolute inset-x-0 top-[90px] h-px bg-ivory/6" />
            <div className="absolute bottom-0 right-0 top-[90px] w-px bg-ivory/6" />

            {/* Eyebrow */}
            <div className="relative anim-fade-in flex items-center gap-4">
              <span className="hero-line-grow inline-block h-px bg-bronze/65" />
              <p className="text-[0.62rem] uppercase tracking-[0.4em] text-bronze">Journal Ouidesign</p>
            </div>

            {/* Main title */}
            <div className="relative my-auto py-12 lg:py-0">
              <h1 className="anim-slide-up anim-delay-1 font-serif leading-[1.0] text-ivory"
                  style={{ fontSize: "clamp(2.2rem, 5vw, 4rem)" }}>
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
                <span className="text-[0.5rem] uppercase tracking-[0.3em]">Défiler</span>
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

          {/* ── RIGHT — scrollable articles panel ────────────────────── */}
          <div
            className="articles-scroll border-t border-ivory/8 lg:border-l lg:border-t-0 lg:h-screen lg:w-[54%] lg:overflow-y-auto"
            style={{ scrollbarWidth: "thin", scrollbarColor: "rgba(184,146,95,0.5) rgba(255,255,255,0.04)" }}
          >
            {/* Panel header */}
            <div className="sticky top-0 z-10 flex items-center justify-between border-b border-ivory/8 bg-charcoal/95 px-8 py-4 backdrop-blur-sm sm:px-10">
              <p className="text-[0.55rem] uppercase tracking-[0.35em] text-ivory/30">
                Tous les articles
              </p>
              <p className="font-serif text-xs text-bronze/50">
                {articles.length} publications
              </p>
            </div>

            {/* Article list */}
            <div className="divide-y divide-ivory/[0.07]">
              {articles.map((article, i) => (
                <Link
                  key={article.slug}
                  href={`/journal/${article.slug}`}
                  className="group flex items-stretch gap-0 transition-colors duration-300 hover:bg-ivory/[0.03]"
                >
                  {/* Number */}
                  <div className="flex w-14 shrink-0 items-center justify-center border-r border-ivory/[0.07] sm:w-16">
                    <span className="font-serif text-sm font-medium leading-none text-bronze/25 transition-colors duration-300 group-hover:text-bronze/70">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="flex flex-1 flex-col justify-center gap-2 px-6 py-7 sm:px-8">
                    <span className="text-[0.5rem] uppercase tracking-[0.3em] text-bronze/55 transition-colors duration-300 group-hover:text-bronze">
                      {article.category}
                    </span>
                    <h2 className="font-serif text-lg font-medium leading-snug text-ivory/80 transition-colors duration-300 group-hover:text-ivory sm:text-xl">
                      {article.title}
                    </h2>
                    <p className="line-clamp-2 text-xs leading-6 text-ivory/30 transition-colors duration-300 group-hover:text-ivory/50">
                      {article.excerpt}
                    </p>
                    <div className="mt-1 flex items-center gap-4 text-[0.5rem] uppercase tracking-[0.2em] text-ivory/20">
                      <span>{article.date}</span>
                      <span className="h-px w-3 bg-ivory/15" />
                      <span>{article.readTime} de lecture</span>
                    </div>
                  </div>

                  {/* Thumbnail + arrow */}
                  <div className="relative flex w-28 shrink-0 flex-col items-end justify-between overflow-hidden border-l border-ivory/[0.07] sm:w-36">
                    {article.featuredImage && (
                      <Image
                        src={article.featuredImage}
                        alt=""
                        fill
                        sizes="144px"
                        className="object-cover opacity-30 transition-all duration-700 group-hover:opacity-60 group-hover:scale-105"
                      />
                    )}
                    <div className="absolute inset-0 bg-gradient-to-l from-transparent to-charcoal/50" />
                    <span className="relative ml-auto mr-4 mt-4 text-[0.6rem] text-bronze/0 transition-all duration-300 group-hover:text-bronze">
                      →
                    </span>
                    {/* Bronze sweep line at bottom */}
                    <div className="relative h-px w-0 self-start bg-bronze/60 transition-all duration-500 group-hover:w-full" />
                  </div>
                </Link>
              ))}
            </div>

            {/* Bottom padding */}
            <div className="h-16" />
          </div>
        </div>
      </section>

      <CTASection title="Un projet en tête ? Parlons-en directement." />
    </>
  );
}
