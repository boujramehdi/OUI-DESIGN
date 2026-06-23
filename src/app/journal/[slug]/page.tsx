import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CTASection } from "@/components/CTASection";
import { articles, getArticle, getRelatedArticles } from "@/lib/articles";
import { siteConfig } from "@/lib/site";

type ArticleRouteProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return articles.map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({ params }: ArticleRouteProps): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticle(slug);

  if (!article) return {};

  return {
    title: article.metaTitle,
    description: article.metaDescription,
    alternates: { canonical: `/journal/${slug}` },
    openGraph: {
      type: "article",
      locale: "fr_MA",
      siteName: siteConfig.name,
      title: article.metaTitle,
      description: article.metaDescription,
    },
  };
}

export default async function ArticlePage({ params }: ArticleRouteProps) {
  const { slug } = await params;
  const article = getArticle(slug);

  if (!article) notFound();

  const related = getRelatedArticles(article.relatedSlugs);

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Accueil", item: siteConfig.url },
      { "@type": "ListItem", position: 2, name: "Journal", item: `${siteConfig.url}/journal` },
      { "@type": "ListItem", position: 3, name: article.title, item: `${siteConfig.url}/journal/${slug}` },
    ],
  };

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.metaDescription,
    author: {
      "@type": "Organization",
      name: siteConfig.name,
      url: siteConfig.url,
    },
    publisher: {
      "@type": "Organization",
      name: siteConfig.name,
      url: siteConfig.url,
    },
    datePublished: "2026-06-01",
    dateModified: "2026-06-01",
    inLanguage: "fr",
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />

      {/* Hero — full-viewport image with overlaid title */}
      <section className="relative min-h-[100svh] overflow-hidden bg-charcoal text-ivory">
        {/* Background image */}
        {article.featuredImage ? (
          <>
            <Image
              src={article.featuredImage}
              alt={article.featuredImageAlt ?? article.title}
              fill
              priority
              sizes="100vw"
              className="object-cover opacity-50"
            />
            {/* Gradient: dark top for nav, dark bottom for text */}
            <div className="absolute inset-0 bg-gradient-to-b from-charcoal/80 via-charcoal/20 to-charcoal/90" />
          </>
        ) : (
          /* No image fallback — solid charcoal with ambient glow */
          <div className="pointer-events-none absolute right-0 top-1/2 h-[500px] w-[500px] -translate-y-1/2 rounded-full bg-bronze/[0.07] blur-3xl" />
        )}

        {/* Content pinned to bottom */}
        <div className="relative flex min-h-[100svh] flex-col justify-end">
          <div className="mx-auto w-full max-w-5xl px-5 pb-16 pt-36 sm:px-8 sm:pb-20 lg:pb-24">
            {/* Breadcrumb */}
            <div className="anim-fade-in flex items-center gap-4">
              <Link
                href="/journal"
                className="text-[0.58rem] uppercase tracking-[0.22em] text-ivory/45 transition hover:text-bronze"
              >
                Journal
              </Link>
              <span className="h-px w-5 bg-bronze/40" />
              <span className="text-[0.58rem] uppercase tracking-[0.22em] text-bronze">
                {article.category}
              </span>
            </div>

            {/* Title */}
            <h1 className="anim-slide-up anim-delay-1 mt-6 max-w-3xl font-serif text-3xl font-medium leading-[1.06] sm:text-4xl lg:text-[3.2rem]">
              {article.title}
            </h1>

            {/* Meta */}
            <div className="anim-fade-in anim-delay-3 mt-8 flex items-center gap-6 text-[0.6rem] uppercase tracking-[0.22em] text-ivory/40">
              <span>{article.date}</span>
              <span className="h-px w-4 bg-bronze/30" />
              <span>{article.readTime} de lecture</span>
            </div>

            {/* Scroll hint */}
            <div className="anim-fade-in anim-delay-4 mt-12 flex items-center gap-3 text-ivory/25">
              <div className="flex h-8 w-5 items-start justify-center rounded-full border border-ivory/20 pt-1.5">
                <div className="h-1.5 w-px animate-bounce bg-ivory/40" />
              </div>
              <span className="text-[0.5rem] uppercase tracking-[0.3em]">Défiler</span>
            </div>
          </div>
        </div>
      </section>

      {/* Article body */}
      <section className="bg-ivory">
        <div className="mx-auto max-w-3xl px-5 py-16 sm:px-8 lg:py-24">
          {/* Intro */}
          <p className="border-l-2 border-bronze pl-6 font-serif text-lg leading-8 text-charcoal/80 sm:text-xl sm:leading-9">
            {article.intro}
          </p>

          {/* Sections */}
          <div className="mt-12 space-y-12">
            {article.sections.map((section) => (
              <div key={section.heading}>
                <h2 className="font-serif text-2xl font-medium text-charcoal sm:text-3xl">
                  {section.heading}
                </h2>
                <div className="mt-4 space-y-4">
                  {section.paragraphs.map((p, i) => (
                    <p key={i} className="text-sm leading-8 text-charcoal/70 sm:text-base">
                      {p}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Conclusion */}
          <div className="mt-12 border-t border-bronze/20 pt-10">
            <p className="text-sm leading-8 text-charcoal/70 sm:text-base">{article.conclusion}</p>
          </div>

          {/* Author / brand signature */}
          <div className="mt-10 flex items-center gap-5 border-t border-bronze/15 pt-8">
            <div className="h-px w-8 bg-bronze/40" />
            <p className="text-[0.6rem] uppercase tracking-[0.28em] text-bronze">
              Par l'équipe Ouidesign · Maroc
            </p>
          </div>
        </div>
      </section>

      {/* Related services — internal links block */}
      {article.relatedServices.length > 0 && (
        <section className="bg-ivory">
          <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:py-20">
            <p className="text-[0.65rem] uppercase tracking-[0.4em] text-bronze">
              Nos expertises liées
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              {article.relatedServices.map((service) => (
                <Link
                  key={service.href}
                  href={service.href}
                  className="group border border-bronze/20 bg-charcoal p-7 text-ivory transition hover:border-bronze"
                >
                  <div className="mb-4 h-px w-8 bg-bronze transition-all duration-300 group-hover:w-14" />
                  <h3 className="font-serif text-xl text-ivory">{service.title}</h3>
                  <p className="mt-3 text-xs leading-6 text-ivory/55">{service.description}</p>
                  <span className="mt-5 block text-[0.58rem] uppercase tracking-[0.2em] text-bronze transition group-hover:translate-x-1">
                    Découvrir →
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Related articles */}
      {related.length > 0 && (
        <section className="bg-charcoal text-ivory">
          <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:py-24">
            <p className="text-[0.65rem] uppercase tracking-[0.4em] text-bronze">À lire aussi</p>
            <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((rel) => (
                <Link
                  key={rel.slug}
                  href={`/journal/${rel.slug}`}
                  className="group border border-bronze/15 p-7 transition hover:border-bronze/40"
                >
                  <p className="text-[0.58rem] uppercase tracking-[0.22em] text-bronze">
                    {rel.category}
                  </p>
                  <h3 className="mt-3 font-serif text-lg leading-snug text-ivory group-hover:text-bronze/90 sm:text-xl">
                    {rel.title}
                  </h3>
                  <p className="mt-3 text-xs leading-6 text-ivory/50">{rel.excerpt}</p>
                  <span className="mt-5 block text-[0.58rem] uppercase tracking-[0.2em] text-bronze transition group-hover:translate-x-1">
                    Lire l'article →
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <CTASection title="Un projet au Maroc ? Parlons-en." />
    </>
  );
}
