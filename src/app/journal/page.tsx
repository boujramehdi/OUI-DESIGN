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

const topics = [
  { label: "Rénovation villa",        n: "01" },
  { label: "Smart home & domotique",  n: "02" },
  { label: "Menuiserie sur mesure",   n: "03" },
  { label: "Piscine & local technique", n: "04" },
  { label: "Climatisation",           n: "05" },
  { label: "Solaire & infrastructure", n: "06" },
  { label: "Architecture intérieure", n: "07" },
  { label: "Sécurité & caméras",      n: "08" },
];

export default function JournalPage() {
  const a = articles; // all 6

  return (
    <>
      {/* ══════════════════════════════════════════════════
          01 — HERO  full-viewport charcoal opening
      ══════════════════════════════════════════════════ */}
      <section className="relative flex min-h-[100svh] flex-col overflow-hidden bg-charcoal text-ivory">

        {/* Ghost "JOURNAL" watermark */}
        <span
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 top-1/2 -translate-y-1/2 select-none text-center font-serif font-medium uppercase leading-none text-ivory/[0.028]"
          style={{ fontSize: "clamp(5rem, 18vw, 16rem)", letterSpacing: "-0.02em" }}
        >
          Journal
        </span>

        {/* Ambient orb */}
        <div className="pointer-events-none absolute left-1/3 top-1/2 h-[70vh] w-[70vh] -translate-x-1/2 -translate-y-1/2 rounded-full bg-bronze/[0.055] blur-[120px]" />

        {/* Top rule */}
        <div className="absolute inset-x-0 top-[90px] h-px bg-ivory/6" />
        <div className="absolute bottom-0 left-0 top-[90px] w-px bg-ivory/6" />
        <div className="absolute bottom-0 right-0 top-[90px] w-px bg-ivory/6" />

        {/* Content */}
        <div className="relative mx-auto flex w-full max-w-7xl flex-1 flex-col justify-between px-5 pb-12 pt-36 sm:px-8 sm:pt-44 lg:pt-52">

          {/* Top row — eyebrow + count */}
          <div className="flex items-start justify-between">
            <div className="anim-fade-in flex items-center gap-4">
              <span className="hero-line-grow inline-block h-px bg-bronze/65" />
              <p className="text-[0.62rem] uppercase tracking-[0.4em] text-bronze">Journal Ouidesign</p>
            </div>
            <span className="anim-fade-in anim-delay-2 font-serif text-[0.6rem] leading-none text-ivory/20">
              {new Date().getFullYear()}
            </span>
          </div>

          {/* Center — main title */}
          <div className="my-auto py-16">
            <h1 className="anim-slide-up anim-delay-1 max-w-4xl font-serif text-[clamp(2.4rem,6vw,5rem)] font-medium leading-[1.0] text-ivory">
              Guides, conseils<br />
              <span className="text-bronze">et références</span><br />
              pour votre villa.
            </h1>
            <div className="anim-scale-in anim-delay-3 mt-8 h-px w-20 bg-bronze/40" />
            <p className="anim-slide-up anim-delay-4 mt-6 max-w-md text-sm leading-7 text-ivory/45">
              Des articles écrits par l'équipe Ouidesign pour mieux comprendre, décider et investir dans votre propriété au Maroc.
            </p>
          </div>

          {/* Bottom row — scroll hint + article count */}
          <div className="anim-fade-in anim-delay-6 flex items-end justify-between">
            <div className="flex items-center gap-3 text-ivory/25">
              <span className="text-[0.5rem] uppercase tracking-[0.3em]">Défiler</span>
              <div className="flex flex-col gap-1">
                <span className="h-px w-4 bg-ivory/25" />
                <span className="h-px w-7 bg-bronze/40" />
              </div>
            </div>
            <div className="text-right">
              <p className="font-serif text-[4rem] font-medium leading-none text-bronze/20 sm:text-[5rem]">
                {String(articles.length).padStart(2, "0")}
              </p>
              <p className="text-[0.5rem] uppercase tracking-[0.3em] text-ivory/25">articles</p>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          02 — FEATURED  full-bleed magazine spread
      ══════════════════════════════════════════════════ */}
      {a[0] && (
        <Link
          href={`/journal/${a[0].slug}`}
          className="reveal-scale group relative block h-[70vh] min-h-[480px] overflow-hidden bg-charcoal lg:h-[80vh]"
        >
          {a[0].featuredImage && (
            <Image
              src={a[0].featuredImage}
              alt={a[0].featuredImageAlt ?? a[0].title}
              fill
              sizes="100vw"
              priority
              className="object-cover opacity-75 transition duration-1000 group-hover:scale-[1.04] group-hover:opacity-90"
            />
          )}

          {/* Full gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/40 to-charcoal/10" />

          {/* Top-left badge */}
          <div className="absolute left-6 top-6 border border-bronze/50 bg-charcoal/50 px-3 py-1.5 backdrop-blur-md sm:left-10 sm:top-10">
            <span className="text-[0.5rem] uppercase tracking-[0.3em] text-bronze">{a[0].category} · À la une</span>
          </div>

          {/* Top-right issue number */}
          <span className="absolute right-6 top-6 font-serif text-[4rem] font-medium leading-none text-ivory/8 sm:right-10 sm:top-8 sm:text-[6rem]">
            01
          </span>

          {/* Bottom content */}
          <div className="absolute bottom-0 left-0 right-0 px-6 pb-8 sm:px-10 sm:pb-12 lg:px-16 lg:pb-16">
            {/* Bronze separator line — grows on load */}
            <div className="mb-6 h-px w-0 bg-bronze/50 transition-all duration-1000 group-hover:w-24" style={{ width: "3rem" }} />
            <h2 className="max-w-3xl font-serif text-2xl font-medium leading-snug text-ivory transition-transform duration-500 group-hover:-translate-y-1 sm:text-3xl lg:text-[2.6rem] lg:leading-tight">
              {a[0].title}
            </h2>
            <div className="mt-5 flex items-center justify-between gap-6">
              <div className="flex items-center gap-4 text-[0.55rem] uppercase tracking-[0.2em] text-ivory/40">
                <span>{a[0].date}</span>
                <span className="h-px w-3 bg-bronze/40" />
                <span>{a[0].readTime} de lecture</span>
              </div>
              <span className="flex items-center gap-2 text-[0.58rem] uppercase tracking-[0.22em] text-bronze transition-all duration-300 group-hover:gap-4">
                Lire l'article <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
              </span>
            </div>
          </div>
        </Link>
      )}

      {/* ══════════════════════════════════════════════════
          03 — ASYMMETRIC PAIR  articles 2 & 3
      ══════════════════════════════════════════════════ */}
      <section className="bg-ivory">
        <div className="mx-auto max-w-7xl px-5 py-4 sm:px-8">
          <div className="grid gap-4 lg:grid-cols-[1.25fr_0.75fr]">

            {/* Left — tall image card */}
            {a[1] && (
              <Link
                href={`/journal/${a[1].slug}`}
                className="reveal group relative flex flex-col overflow-hidden border border-bronze/15 bg-ivory transition-all duration-500 hover:border-bronze/50"
              >
                <div className="absolute left-0 top-0 z-10 h-[2px] w-0 bg-bronze transition-all duration-700 group-hover:w-full" />

                <div className="relative aspect-[3/2] overflow-hidden bg-charcoal lg:aspect-[4/3]">
                  {a[1].featuredImage && (
                    <Image
                      src={a[1].featuredImage}
                      alt={a[1].featuredImageAlt ?? a[1].title}
                      fill
                      sizes="(min-width:1024px) 55vw, 100vw"
                      className="object-cover opacity-80 transition duration-700 group-hover:scale-[1.04] group-hover:opacity-100"
                    />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal/30 to-transparent" />
                  <div className="absolute left-5 top-5 border border-bronze/40 bg-charcoal/55 px-2.5 py-1 backdrop-blur-sm">
                    <span className="text-[0.48rem] uppercase tracking-[0.28em] text-bronze">{a[1].category}</span>
                  </div>
                  <span className="absolute bottom-5 right-5 font-serif text-5xl font-medium leading-none text-ivory/8">02</span>
                </div>

                <div className="flex flex-1 flex-col p-7 lg:p-8">
                  <h2 className="font-serif text-xl font-medium leading-snug text-charcoal transition-all duration-300 group-hover:-translate-y-0.5 sm:text-2xl">
                    {a[1].title}
                  </h2>
                  <div className="mt-4 h-px w-8 bg-bronze/25 transition-all duration-500 group-hover:w-full group-hover:bg-bronze/40" />
                  <p className="mt-4 flex-1 text-xs leading-6 text-charcoal/55 transition-colors duration-300 group-hover:text-charcoal/75">
                    {a[1].excerpt}
                  </p>
                  <div className="mt-6 flex items-center justify-between border-t border-bronze/10 pt-5">
                    <span className="text-[0.52rem] uppercase tracking-[0.16em] text-charcoal/35">{a[1].date} · {a[1].readTime}</span>
                    <span className="text-[0.55rem] uppercase tracking-[0.2em] text-bronze transition-transform duration-300 group-hover:translate-x-1">Lire →</span>
                  </div>
                </div>
              </Link>
            )}

            {/* Right — text-heavy editorial card */}
            {a[2] && (
              <Link
                href={`/journal/${a[2].slug}`}
                className="reveal group relative flex flex-col overflow-hidden border border-bronze/15 bg-charcoal transition-all duration-500 hover:border-bronze/50"
              >
                <div className="absolute left-0 top-0 z-10 h-[2px] w-0 bg-bronze transition-all duration-700 group-hover:w-full" />

                {/* Image — short strip */}
                <div className="relative h-36 overflow-hidden lg:h-44">
                  {a[2].featuredImage && (
                    <Image
                      src={a[2].featuredImage}
                      alt={a[2].featuredImageAlt ?? a[2].title}
                      fill
                      sizes="(min-width:1024px) 35vw, 100vw"
                      className="object-cover opacity-50 transition duration-700 group-hover:scale-[1.04] group-hover:opacity-70"
                    />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/60 to-transparent" />
                </div>

                <div className="flex flex-1 flex-col p-7 lg:p-8">
                  <span className="text-[0.5rem] uppercase tracking-[0.28em] text-bronze/70 transition-colors duration-300 group-hover:text-bronze">
                    {a[2].category}
                  </span>
                  {/* Big ghost number */}
                  <span className="pointer-events-none mt-2 select-none font-serif text-[5rem] font-medium leading-none text-ivory/[0.05] transition-colors duration-500 group-hover:text-bronze/[0.12]">
                    03
                  </span>
                  <h2 className="mt-2 font-serif text-xl font-medium leading-snug text-ivory transition-all duration-300 group-hover:-translate-y-0.5 sm:text-2xl">
                    {a[2].title}
                  </h2>
                  <p className="mt-4 flex-1 text-xs leading-6 text-ivory/40 transition-colors duration-300 group-hover:text-ivory/65">
                    {a[2].excerpt}
                  </p>
                  <div className="mt-6 flex items-center justify-between border-t border-ivory/8 pt-5">
                    <span className="text-[0.52rem] uppercase tracking-[0.16em] text-ivory/25">{a[2].date} · {a[2].readTime}</span>
                    <span className="text-[0.55rem] uppercase tracking-[0.2em] text-bronze/60 transition-all duration-300 group-hover:translate-x-1 group-hover:text-bronze">Lire →</span>
                  </div>
                </div>
              </Link>
            )}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          04 — HORIZONTAL STRIP  article 4 on charcoal
      ══════════════════════════════════════════════════ */}
      {a[3] && (
        <section className="bg-charcoal">
          <div className="mx-auto max-w-7xl px-5 py-4 sm:px-8">
            <Link
              href={`/journal/${a[3].slug}`}
              className="reveal group relative grid overflow-hidden border border-ivory/8 transition-all duration-500 hover:border-bronze/40 lg:grid-cols-[1fr_0.8fr]"
            >
              <div className="absolute left-0 top-0 z-10 h-[2px] w-0 bg-bronze transition-all duration-700 group-hover:w-full" />

              {/* Text side */}
              <div className="relative flex flex-col justify-center p-8 sm:p-10 lg:p-14">
                {/* Ambient bg glow */}
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-bronze/[0.04] to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                <div className="relative">
                  <div className="flex items-center gap-4">
                    <span className="font-serif text-[3.5rem] font-medium leading-none text-bronze/15 transition-colors duration-300 group-hover:text-bronze/35">04</span>
                    <div>
                      <span className="text-[0.5rem] uppercase tracking-[0.28em] text-bronze/60 transition-colors duration-300 group-hover:text-bronze">
                        {a[3].category}
                      </span>
                    </div>
                  </div>
                  <h2 className="mt-4 font-serif text-2xl font-medium leading-snug text-ivory transition-all duration-300 group-hover:-translate-y-0.5 sm:text-3xl lg:text-[1.9rem]">
                    {a[3].title}
                  </h2>
                  <div className="mt-5 h-px w-10 bg-bronze/30 transition-all duration-700 group-hover:w-full group-hover:bg-bronze/50" />
                  <p className="mt-5 max-w-lg text-sm leading-7 text-ivory/45 transition-colors duration-300 group-hover:text-ivory/65">
                    {a[3].excerpt}
                  </p>
                  <div className="mt-8 flex items-center gap-6">
                    <span className="flex items-center gap-2 text-[0.58rem] uppercase tracking-[0.2em] text-bronze transition-all duration-300 group-hover:gap-4">
                      Lire l'article <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
                    </span>
                    <span className="text-[0.5rem] uppercase tracking-[0.16em] text-ivory/20">{a[3].date} · {a[3].readTime}</span>
                  </div>
                </div>
              </div>

              {/* Image side */}
              <div className="relative h-56 overflow-hidden lg:h-auto">
                {a[3].featuredImage && (
                  <Image
                    src={a[3].featuredImage}
                    alt={a[3].featuredImageAlt ?? a[3].title}
                    fill
                    sizes="(min-width:1024px) 40vw, 100vw"
                    className="object-cover opacity-55 transition duration-700 group-hover:scale-[1.04] group-hover:opacity-75"
                  />
                )}
                <div className="absolute inset-0 bg-gradient-to-r from-charcoal via-transparent to-transparent lg:bg-gradient-to-r" />
              </div>
            </Link>
          </div>
        </section>
      )}

      {/* ══════════════════════════════════════════════════
          05 — THREE-COL GRID  articles 5 & 6 + CTA card
      ══════════════════════════════════════════════════ */}
      <section className="bg-ivory">
        <div className="mx-auto max-w-7xl px-5 py-4 sm:px-8">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">

            {[a[4], a[5]].filter(Boolean).map((article, i) => (
              <Link
                key={article!.slug}
                href={`/journal/${article!.slug}`}
                className="reveal group relative flex flex-col overflow-hidden border border-bronze/15 bg-ivory transition-all duration-500 hover:border-bronze/50"
                style={{ transitionDelay: `${i * 60}ms` }}
              >
                <div className="absolute left-0 top-0 z-10 h-[2px] w-0 bg-bronze transition-all duration-700 group-hover:w-full" />

                <div className="relative aspect-[16/9] overflow-hidden bg-charcoal">
                  {article!.featuredImage && (
                    <Image
                      src={article!.featuredImage}
                      alt={article!.featuredImageAlt ?? article!.title}
                      fill
                      sizes="(min-width:1024px) 33vw, (min-width:640px) 50vw, 100vw"
                      className="object-cover opacity-75 transition duration-700 group-hover:scale-[1.05] group-hover:opacity-100"
                    />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal/35 to-transparent" />
                  <div className="absolute left-4 top-4 border border-bronze/35 bg-charcoal/55 px-2 py-1 backdrop-blur-sm">
                    <span className="text-[0.46rem] uppercase tracking-[0.26em] text-bronze">{article!.category}</span>
                  </div>
                  <span className="absolute bottom-3 right-4 font-serif text-2xl font-medium leading-none text-ivory/10">
                    {String(i + 5).padStart(2, "0")}
                  </span>
                </div>

                <div className="flex flex-1 flex-col p-6">
                  <h2 className="font-serif text-lg font-medium leading-snug text-charcoal transition-all duration-300 group-hover:-translate-y-0.5 sm:text-xl">
                    {article!.title}
                  </h2>
                  <p className="mt-3 flex-1 text-xs leading-6 text-charcoal/50 transition-colors duration-300 group-hover:text-charcoal/75">
                    {article!.excerpt}
                  </p>
                  <div className="mt-5 flex items-center justify-between border-t border-bronze/10 pt-4">
                    <span className="text-[0.5rem] uppercase tracking-[0.14em] text-charcoal/30">{article!.date} · {article!.readTime}</span>
                    <span className="text-[0.52rem] uppercase tracking-[0.2em] text-bronze transition-transform duration-300 group-hover:translate-x-1">Lire →</span>
                  </div>
                </div>
              </Link>
            ))}

            {/* CTA card — third column */}
            <div className="reveal group relative flex flex-col overflow-hidden border border-bronze/20 bg-charcoal p-8 transition-all duration-500 hover:border-bronze/50 sm:col-span-2 lg:col-span-1">
              <div className="absolute left-0 top-0 h-[2px] w-0 bg-bronze transition-all duration-700 group-hover:w-full" />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-bronze/[0.07] to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              <div className="relative flex flex-1 flex-col">
                <p className="text-[0.58rem] uppercase tracking-[0.3em] text-bronze/60">Votre projet</p>
                <h3 className="mt-4 font-serif text-2xl font-medium leading-snug text-ivory sm:text-3xl lg:text-2xl xl:text-3xl">
                  Un projet en tête ?<br />Parlons-en.
                </h3>
                <div className="mt-5 h-px w-10 bg-bronze/30 transition-all duration-700 group-hover:w-full group-hover:bg-bronze/50" />
                <p className="mt-5 flex-1 text-sm leading-7 text-ivory/40">
                  Ouidesign vous répond rapidement et en toute confidentialité.
                </p>
                <Link
                  href="/contact"
                  className="mt-8 inline-flex w-fit items-center gap-3 bg-bronze px-5 py-3.5 text-[0.6rem] uppercase tracking-[0.2em] text-charcoal transition duration-300 hover:bg-ivory"
                >
                  Nous contacter →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          06 — TOPICS  editorial typographic list
      ══════════════════════════════════════════════════ */}
      <section className="bg-charcoal text-ivory overflow-hidden">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:py-28">
          <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20">

            {/* Left — label */}
            <div className="reveal-left">
              <p className="text-[0.62rem] uppercase tracking-[0.4em] text-bronze">Thèmes abordés</p>
              <h2 className="mt-4 font-serif text-4xl font-medium leading-tight text-ivory sm:text-5xl">
                Explorer<br />par sujet.
              </h2>
              <div className="mt-8 h-px w-12 bg-bronze/35" />
              <p className="mt-6 text-sm leading-7 text-ivory/40">
                Chaque article cible un domaine précis de l'art de vivre dans une villa haut de gamme au Maroc.
              </p>
            </div>

            {/* Right — topic list */}
            <div className="divide-y divide-ivory/8 border-t border-ivory/8">
              {topics.map((t, i) => (
                <div
                  key={t.label}
                  className="reveal group flex cursor-default items-center gap-6 py-5 transition-all duration-300 hover:pl-2"
                  style={{ transitionDelay: `${i * 40}ms` }}
                >
                  <span className="shrink-0 font-serif text-sm leading-none text-bronze/30 transition-colors duration-300 group-hover:text-bronze">
                    {t.n}
                  </span>
                  <div className="h-px w-0 bg-bronze/30 transition-all duration-500 group-hover:w-6" />
                  <span className="flex-1 text-[0.7rem] uppercase tracking-[0.2em] text-ivory/50 transition-colors duration-300 group-hover:text-ivory">
                    {t.label}
                  </span>
                  <span className="translate-x-2 text-bronze/0 transition-all duration-300 group-hover:translate-x-0 group-hover:text-bronze">
                    ✦
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CTASection title="Un projet en tête ? Parlons-en directement." />
    </>
  );
}
