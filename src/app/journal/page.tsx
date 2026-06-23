import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { CTASection } from "@/components/CTASection";
import { articles } from "@/lib/articles";

export const metadata: Metadata = {
  title: "Journal Ouidesign — Conseils villas et architecture au Maroc",
  description:
    "Conseils d'experts, tendances et guides pratiques pour la rénovation, la domotique et l'architecture de villas et riads haut de gamme au Maroc.",
  alternates: {
    canonical: "/journal",
  },
};

const topics = [
  "Rénovation villa",
  "Smart home",
  "Menuiserie sur mesure",
  "Piscine & local technique",
  "Climatisation",
  "Solaire",
  "Sécurité",
  "Architecture intérieure",
  "Mobilier intelligent",
];

export default function JournalPage() {
  const [featured, ...rest] = articles;
  const secondary = rest.slice(0, 2);
  const tertiary = rest.slice(2);

  return (
    <>
      {/* ── Hero ──────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-charcoal text-ivory">
        <div className="absolute inset-x-0 top-[90px] h-px bg-ivory/6" />
        <div className="absolute bottom-0 left-0 top-[90px] w-px bg-ivory/6" />

        {/* Ambient glow */}
        <div className="pointer-events-none absolute right-0 top-1/2 h-[500px] w-[500px] -translate-y-1/2 rounded-full bg-bronze/[0.07] blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-5 pb-20 pt-36 sm:px-8 sm:pb-24 sm:pt-44 lg:pb-28 lg:pt-52">
          <div className="anim-fade-in flex items-center gap-5">
            <span className="hero-line-grow inline-block h-px bg-bronze/65" />
            <p className="text-[0.62rem] uppercase tracking-[0.4em] text-bronze">Journal</p>
          </div>
          <div className="mt-5 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between lg:gap-16">
            <h1 className="anim-slide-up anim-delay-1 max-w-2xl font-serif text-4xl font-medium leading-[1.02] text-ivory sm:text-5xl lg:text-[3.5rem]">
              Guides, conseils et références pour votre villa.
            </h1>
            <p className="anim-slide-up anim-delay-2 max-w-sm shrink-0 text-sm leading-7 text-ivory/45 lg:text-right">
              Des articles écrits par l'équipe Ouidesign pour mieux comprendre, décider et investir dans votre propriété au Maroc.
            </p>
          </div>
          <div className="anim-scale-in anim-delay-3 mt-8 h-px w-20 bg-bronze/40" />

          {/* Article count */}
          <div className="anim-fade-in anim-delay-6 mt-12 flex items-center gap-6 text-ivory/25">
            <span className="font-serif text-[2.5rem] font-medium leading-none text-bronze/30">
              {String(articles.length).padStart(2, "0")}
            </span>
            <span className="text-[0.55rem] uppercase tracking-[0.3em]">articles disponibles</span>
          </div>
        </div>
      </section>

      {/* ── Featured article ──────────────────────────────── */}
      {featured && (
        <section className="bg-ivory">
          <div className="mx-auto max-w-7xl px-5 pt-16 sm:px-8 sm:pt-20 lg:pt-24">
            <div className="flex items-center gap-4 mb-8">
              <span className="h-px w-8 bg-bronze/40" />
              <p className="text-[0.6rem] uppercase tracking-[0.4em] text-bronze">À la une</p>
            </div>

            <Link
              href={`/journal/${featured.slug}`}
              className="reveal group relative grid overflow-hidden border border-bronze/15 bg-ivory transition-all duration-500 hover:border-bronze/40 lg:grid-cols-[1.1fr_0.9fr]"
            >
              {/* Top sweep */}
              <div className="absolute left-0 top-0 h-[2px] w-0 bg-bronze transition-all duration-700 group-hover:w-full z-10" />

              {/* Image */}
              <div className="relative aspect-[16/10] overflow-hidden bg-charcoal lg:aspect-auto lg:min-h-[480px]">
                {featured.featuredImage && (
                  <Image
                    src={featured.featuredImage}
                    alt={featured.featuredImageAlt ?? featured.title}
                    fill
                    sizes="(min-width: 1024px) 55vw, 100vw"
                    className="object-cover opacity-85 transition duration-700 group-hover:scale-[1.04] group-hover:opacity-100"
                  />
                )}
                <div className="absolute inset-0 bg-gradient-to-r from-charcoal/20 to-transparent lg:bg-gradient-to-r" />
                {/* Category badge */}
                <div className="absolute left-5 top-5 border border-bronze/40 bg-charcoal/60 px-3 py-1.5 backdrop-blur-sm">
                  <span className="text-[0.52rem] uppercase tracking-[0.28em] text-bronze">
                    {featured.category}
                  </span>
                </div>
              </div>

              {/* Text */}
              <div className="flex flex-col justify-center p-8 sm:p-10 lg:p-12">
                <p className="font-serif text-[3rem] font-medium leading-none text-bronze/15 transition-colors duration-300 group-hover:text-bronze/30">
                  01
                </p>
                <h2 className="mt-4 font-serif text-2xl font-medium leading-snug text-charcoal transition-all duration-300 group-hover:-translate-y-0.5 sm:text-3xl lg:text-[1.8rem]">
                  {featured.title}
                </h2>
                <div className="mt-5 h-px w-12 bg-bronze/30 transition-all duration-500 group-hover:w-full group-hover:bg-bronze/50" />
                <p className="mt-5 text-sm leading-7 text-charcoal/55 transition-colors duration-300 group-hover:text-charcoal/75">
                  {featured.excerpt}
                </p>
                <div className="mt-8 flex items-center justify-between">
                  <div className="flex items-center gap-4 text-[0.55rem] uppercase tracking-[0.18em] text-charcoal/40">
                    <span>{featured.date}</span>
                    <span className="h-px w-3 bg-bronze/30" />
                    <span>{featured.readTime}</span>
                  </div>
                  <span className="flex items-center gap-2 text-[0.58rem] uppercase tracking-[0.2em] text-bronze transition-all duration-300 group-hover:gap-3">
                    Lire l'article
                    <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
                  </span>
                </div>
              </div>
            </Link>
          </div>
        </section>
      )}

      {/* ── Secondary articles (2-col) ────────────────────── */}
      {secondary.length > 0 && (
        <section className="bg-ivory">
          <div className="mx-auto max-w-7xl px-5 pt-4 sm:px-8">
            <div className="grid gap-4 sm:grid-cols-2">
              {secondary.map((article, i) => (
                <Link
                  key={article.slug}
                  href={`/journal/${article.slug}`}
                  className="reveal group relative flex flex-col overflow-hidden border border-bronze/15 bg-ivory transition-all duration-500 hover:border-bronze/40"
                  style={{ animationDelay: `${i * 120}ms` }}
                >
                  <div className="absolute left-0 top-0 h-[2px] w-0 bg-bronze transition-all duration-700 group-hover:w-full z-10" />

                  {/* Image */}
                  <div className="relative aspect-[16/9] overflow-hidden bg-charcoal">
                    {article.featuredImage && (
                      <Image
                        src={article.featuredImage}
                        alt={article.featuredImageAlt ?? article.title}
                        fill
                        sizes="(min-width: 1024px) 50vw, 100vw"
                        className="object-cover opacity-80 transition duration-700 group-hover:scale-[1.04] group-hover:opacity-100"
                      />
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-charcoal/40 to-transparent" />
                    <div className="absolute left-4 top-4 border border-bronze/40 bg-charcoal/60 px-2.5 py-1 backdrop-blur-sm">
                      <span className="text-[0.5rem] uppercase tracking-[0.26em] text-bronze">
                        {article.category}
                      </span>
                    </div>
                    {/* Article number */}
                    <span className="absolute bottom-4 right-5 font-serif text-2xl font-medium leading-none text-ivory/10">
                      {String(i + 2).padStart(2, "0")}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="flex flex-1 flex-col p-7">
                    <h2 className="font-serif text-xl font-medium leading-snug text-charcoal transition-all duration-300 group-hover:-translate-y-0.5 sm:text-2xl">
                      {article.title}
                    </h2>
                    <p className="mt-3 flex-1 text-xs leading-6 text-charcoal/55 transition-colors duration-300 group-hover:text-charcoal/75">
                      {article.excerpt}
                    </p>
                    <div className="mt-6 flex items-center justify-between border-t border-bronze/10 pt-4">
                      <div className="flex items-center gap-3 text-[0.52rem] uppercase tracking-[0.18em] text-charcoal/35">
                        <span>{article.date}</span>
                        <span className="h-px w-3 bg-bronze/25" />
                        <span>{article.readTime}</span>
                      </div>
                      <span className="text-[0.55rem] uppercase tracking-[0.2em] text-bronze transition-transform duration-300 group-hover:translate-x-1">
                        Lire →
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── Tertiary articles (3-col) on charcoal ─────────── */}
      {tertiary.length > 0 && (
        <section className="bg-charcoal text-ivory">
          <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:py-20">
            <div className="mb-10 flex items-center justify-between">
              <p className="text-[0.6rem] uppercase tracking-[0.4em] text-bronze">Autres articles</p>
              <span className="font-serif text-2xl font-medium leading-none text-ivory/10">
                {String(tertiary.length).padStart(2, "0")}
              </span>
            </div>

            <div className="grid gap-px bg-bronze/10 sm:grid-cols-2 lg:grid-cols-3">
              {tertiary.map((article, i) => (
                <Link
                  key={article.slug}
                  href={`/journal/${article.slug}`}
                  className="reveal group relative flex flex-col overflow-hidden bg-charcoal transition-colors duration-500 hover:bg-[rgba(184,146,95,0.08)]"
                  style={{ animationDelay: `${i * 80}ms` }}
                >
                  <div className="absolute left-0 top-0 h-[2px] w-0 bg-bronze transition-all duration-700 group-hover:w-full" />

                  {/* Image */}
                  <div className="relative aspect-[16/10] overflow-hidden">
                    {article.featuredImage && (
                      <Image
                        src={article.featuredImage}
                        alt={article.featuredImageAlt ?? article.title}
                        fill
                        sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                        className="object-cover opacity-60 transition duration-700 group-hover:scale-[1.04] group-hover:opacity-80"
                      />
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-charcoal/70 via-charcoal/20 to-transparent" />
                    <span className="absolute left-4 top-4 text-[0.5rem] uppercase tracking-[0.24em] text-bronze/70 transition-colors duration-300 group-hover:text-bronze">
                      {article.category}
                    </span>
                    <span className="absolute bottom-4 right-4 font-serif text-3xl font-medium leading-none text-ivory/8 transition-colors duration-300 group-hover:text-bronze/15">
                      {String(i + secondary.length + 2).padStart(2, "0")}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="flex flex-1 flex-col p-6 sm:p-7">
                    <h2 className="font-serif text-lg font-medium leading-snug text-ivory/80 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:text-ivory sm:text-xl">
                      {article.title}
                    </h2>
                    <p className="mt-3 flex-1 text-xs leading-6 text-ivory/35 transition-colors duration-300 group-hover:text-ivory/60">
                      {article.excerpt}
                    </p>
                    <div className="mt-5 flex items-center justify-between border-t border-ivory/6 pt-4">
                      <div className="flex items-center gap-3 text-[0.5rem] uppercase tracking-[0.16em] text-ivory/25">
                        <span>{article.date}</span>
                        <span className="h-px w-2 bg-bronze/30" />
                        <span>{article.readTime}</span>
                      </div>
                      <span className="text-[0.52rem] uppercase tracking-[0.2em] text-bronze/50 transition-all duration-300 group-hover:translate-x-1 group-hover:text-bronze">
                        Lire →
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>

            <p className="mt-10 text-center text-[0.55rem] uppercase tracking-[0.3em] text-ivory/20">
              Nouveaux articles chaque mois
            </p>
          </div>
        </section>
      )}

      {/* ── Topics ────────────────────────────────────────── */}
      <section className="bg-ivory overflow-hidden">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:py-20">
          <div className="reveal flex flex-col gap-8 lg:flex-row lg:items-start lg:gap-20">
            <div className="shrink-0">
              <p className="text-[0.65rem] uppercase tracking-[0.4em] text-bronze">Thèmes abordés</p>
              <h2 className="mt-3 font-serif text-3xl font-medium text-charcoal sm:text-4xl">
                Explorez<br />par sujet.
              </h2>
            </div>
            <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 lg:flex lg:flex-wrap">
              {topics.map((tag, i) => (
                <div
                  key={tag}
                  className="reveal group relative overflow-hidden border border-bronze/20 px-4 py-3 transition-all duration-300 hover:border-bronze/60 hover:bg-charcoal cursor-default"
                  style={{ animationDelay: `${i * 50}ms` }}
                >
                  <div className="absolute left-0 top-0 h-[2px] w-0 bg-bronze transition-all duration-500 group-hover:w-full" />
                  <span className="text-[0.58rem] uppercase tracking-[0.2em] text-charcoal/60 transition-colors duration-300 group-hover:text-ivory/80">
                    {tag}
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
