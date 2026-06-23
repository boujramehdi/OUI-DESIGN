import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { CTASection } from "@/components/CTASection";
import { PageHero } from "@/components/PageHero";
import { articles } from "@/lib/articles";

export const metadata: Metadata = {
  title: "Journal Ouidesign — Conseils villas et architecture au Maroc",
  description:
    "Conseils d'experts, tendances et guides pratiques pour la rénovation, la domotique et l'architecture de villas et riads haut de gamme au Maroc.",
  alternates: {
    canonical: "/journal",
  },
};

export default function JournalPage() {
  return (
    <>
      <PageHero
        eyebrow="Journal"
        title="Guides, conseils et références pour votre villa."
        text="Des articles écrits par l'équipe Ouidesign pour vous aider à mieux comprendre, décider et investir dans votre propriété au Maroc."
      />

      {/* Articles grid */}
      <section className="bg-ivory">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:py-24">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {articles.map((article) => (
              <Link
                key={article.slug}
                href={`/journal/${article.slug}`}
                className="reveal group flex flex-col overflow-hidden border border-bronze/20 bg-ivory text-charcoal transition-all duration-300 hover:border-bronze/40"
              >
                {/* Image */}
                {article.featuredImage && (
                  <div className="relative aspect-[16/9] overflow-hidden">
                    <Image
                      src={article.featuredImage}
                      alt={article.featuredImageAlt ?? article.title}
                      fill
                      sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                      className="object-cover opacity-80 transition duration-700 group-hover:scale-105 group-hover:opacity-95"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-charcoal/30 to-transparent" />
                    <span className="absolute left-5 top-5 text-[0.55rem] uppercase tracking-[0.28em] text-bronze">
                      {article.category}
                    </span>
                  </div>
                )}

                {/* Content */}
                <div className="flex flex-1 flex-col p-7">
                  {!article.featuredImage && (
                    <p className="mb-4 text-[0.6rem] uppercase tracking-[0.28em] text-bronze">
                      {article.category}
                    </p>
                  )}
                  <h2 className="font-serif text-xl font-medium leading-snug text-charcoal sm:text-2xl">
                    {article.title}
                  </h2>
                  <p className="mt-3 flex-1 text-xs leading-6 text-charcoal/60">
                    {article.excerpt}
                  </p>
                  <div className="mt-6 flex items-center justify-between border-t border-bronze/10 pt-5">
                    <div className="flex items-center gap-4 text-[0.55rem] uppercase tracking-[0.18em] text-charcoal/45">
                      <span>{article.date}</span>
                      <span className="h-px w-4 bg-bronze/30" />
                      <span>{article.readTime}</span>
                    </div>
                    <span className="text-[0.6rem] uppercase tracking-[0.2em] text-bronze transition-transform duration-300 group-hover:translate-x-1">
                      Lire →
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <p className="mt-12 text-center text-xs uppercase tracking-[0.28em] text-charcoal/35">
            Nouveaux articles chaque mois — revenez régulièrement.
          </p>
        </div>
      </section>

      {/* Topics */}
      <section className="bg-charcoal text-ivory">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:py-24">
          <p className="text-[0.65rem] uppercase tracking-[0.4em] text-bronze">Thèmes abordés</p>
          <div className="mt-8 flex flex-wrap gap-3">
            {[
              "Rénovation villa",
              "Smart home",
              "Menuiserie sur mesure",
              "Piscine & local technique",
              "Climatisation",
              "Solaire",
              "Sécurité",
              "Architecture intérieure",
              "Mobilier intelligent",
            ].map((tag) => (
              <span
                key={tag}
                className="border border-bronze/25 px-4 py-2 text-[0.6rem] uppercase tracking-[0.18em] text-ivory/60 transition-all duration-300 hover:border-bronze hover:bg-bronze/10 hover:text-ivory cursor-default"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </section>

      <CTASection title="Un projet en tête ? Parlons-en directement." />
    </>
  );
}
