import type { Metadata } from "next";
import Link from "next/link";
import { CinematicImage } from "@/components/CinematicImage";
import { CTASection } from "@/components/CTASection";
import { Hero } from "@/components/Hero";
import { ManifestoSection } from "@/components/ManifestoSection";
import { ProcessSection } from "@/components/ProcessSection";
import { CollectionShowcase } from "@/components/CollectionShowcase";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { HomeFaqSection } from "@/components/HomeFaqSection";
import { EmailCapture } from "@/components/EmailCapture";
import { TrustBar } from "@/components/TrustBar";
import { authorityPillars, siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Architecture intelligente pour villas au Maroc",
  description:
    "Ouidesign conçoit, rénove et intègre des villas, riads et espaces haut de gamme au Maroc : architecture intérieure, domotique, menuiserie, piscine, solaire et sécurité.",
  alternates: {
    canonical: "/",
  },
};

const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Ouidesign",
  image: `${siteConfig.url}/images/ouidesign-profile.png`,
  url: siteConfig.url,
  telephone: siteConfig.phone,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Maroc",
    addressCountry: "MA",
  },
  areaServed: [
    "Maroc",
    "Casablanca",
    "Rabat",
    "Tanger",
    "Agadir",
    "Essaouira",
    "Fès",
    "Palmeraie",
    "Route de l’Ourika",
    "Targa",
    "Agdal",
    "Guéliz",
    "Hivernage",
  ],
  description: siteConfig.description,
  priceRange: "$$$",
  sameAs: [
    siteConfig.url,
    "https://www.instagram.com/ouidesign.ma",
    "https://www.facebook.com/ouidesign",
    "https://www.linkedin.com/company/ouidesign",
  ],
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "5",
    reviewCount: "47",
    bestRating: "5",
    worstRating: "1",
  },
};

const homeFaqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Combien coûte une rénovation de villa au Maroc ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Une rénovation haut de gamme au Maroc se situe généralement entre 3 000 et 8 000 DH/m² selon l’état du bien, le niveau de finition et les équipements intégrés. Ouidesign propose un diagnostic initial pour cadrer le budget avec précision.",
      },
    },
    {
      "@type": "Question",
      name: "Ouidesign peut-il gérer l’intégralité d’un projet de villa ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Oui. Ouidesign coordonne tous les corps de métier : architecture intérieure, menuiserie, électricité, climatisation, domotique, piscine et sécurité. Un seul interlocuteur de la conception à la livraison.",
      },
    },
    {
      "@type": "Question",
      name: "La domotique est-elle adaptée aux villas du Maroc ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Absolument. La domotique répond à des problèmes concrets : gestion de la climatisation à distance, contrôle des accès, scénarios lumière et économies d’énergie. Le meilleur moment pour l’intégrer est pendant la rénovation.",
      },
    },
    {
      "@type": "Question",
      name: "Comment se passe un premier contact avec Ouidesign ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Un message WhatsApp suffit pour démarrer. Décrivez votre projet — type de bien, localisation, nature des travaux. Ouidesign vous répond rapidement et propose une visite ou un diagnostic sur place.",
      },
    },
  ],
};

// PRD grid: Row 1 → 50% large | 25% stacked pair | 25% stacked pair
//           Row 2 → 4 × 25% equal
// 12-col grid: col-span-6 | col-span-3 × 4 | col-span-3 × 4
const expertiseTiles = [
  {
    title: "Rénovation Villas & Riads",
    text: "Redonner vie à l’existant avec exigence et respect de l’âme du lieu.",
    href: "/renovation-villa-maroc",
    image: "/images/riad-courtyard.png",
    className: "aspect-[4/5] sm:aspect-[16/11] lg:aspect-auto lg:col-span-6 lg:row-span-2",
  },
  {
    title: "Menuiserie Sur Mesure",
    text: "Des créations uniques, nobles et intemporelles.",
    href: "/menuiserie-sur-mesure-maroc",
    image: "/images/menuiserie-dressing.png",
    className: "aspect-[4/5] sm:aspect-[16/10] lg:aspect-auto lg:col-span-3",
  },
  {
    title: "Cuisines Premium",
    text: "L’élégance fonctionnelle, au cœur de la maison.",
    href: "/collection#cuisines-premium",
    image: "/images/cuisine-premium.png",
    className: "aspect-[4/5] sm:aspect-[16/10] lg:aspect-auto lg:col-span-3",
  },
  {
    title: "Piscines & Locaux Techniques",
    text: "Design, confort et maîtrise technique totale.",
    href: "/piscine-local-technique-maroc",
    image: "/images/piscine.ipg.png",
    className: "aspect-[4/5] sm:aspect-[16/10] lg:aspect-auto lg:col-span-3",
  },
  {
    title: "Smart Home & Domotique",
    text: "La maison intelligente, simplement.",
    href: "/smart-home-maroc",
    image: "/images/smart-home-2.png",
    className: "aspect-[4/5] sm:aspect-[16/10] lg:aspect-auto lg:col-span-3",
  },
  {
    title: "Sécurité & Caméras",
    text: "Protéger ce qui compte, avec discrétion.",
    href: "/camera-surveillance-maroc",
    image: "/images/securiter.jpg",
    className: "aspect-[4/5] sm:aspect-[16/10] lg:aspect-auto lg:col-span-3",
  },
  {
    title: "Climatisation",
    text: "Confort absolu, en toute saison.",
    href: "/climatisation-maroc",
    image: "/images/climatisation.jpg",
    className: "aspect-[4/5] sm:aspect-[16/10] lg:aspect-auto lg:col-span-3",
  },
  {
    title: "Solaire & Infrastructure",
    text: "Des solutions durables pour un avenir responsable.",
    href: "/solaire-villa-maroc",
    image: "/images/solaire-infrastruction.jpg",
    className: "aspect-[4/5] sm:aspect-[16/10] lg:aspect-auto lg:col-span-3",
  },
  {
    title: "Mobilier Intelligent",
    text: "Design et technologie au service du quotidien.",
    href: "/collection",
    image: "/images/liftbar.png",
    className: "aspect-[4/5] sm:aspect-[16/10] lg:aspect-auto lg:col-span-3",
  },
];

const serviceAreas = [
  "Palmeraie",
  "Route de l’Ourika",
  "Targa",
  "Agdal",
  "Guéliz",
  "Hivernage",
];

function ExpertiseTile({
  tile,
  index,
}: {
  tile: (typeof expertiseTiles)[number];
  index: number;
}) {
  return (
    <Link
      href={tile.href}
      className={`lg-dark-panel reveal group relative isolate flex min-w-0 overflow-hidden bg-charcoal text-ivory ${tile.className}`}
    >
      <CinematicImage
        src={tile.image}
        alt={tile.title}
        sizes="(min-width: 1024px) 33vw, 100vw"
        imageClassName="object-cover object-center opacity-[0.88] transition duration-700 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/35 to-transparent" />
      <div className="relative mt-auto w-full p-4 sm:p-6 lg:p-10">
        <div className="mb-3 h-px w-10 bg-bronze transition-all duration-500 group-hover:w-20 sm:mb-5 sm:w-14" />
        <p className="text-[0.58rem] uppercase tracking-[0.24em] text-bronze sm:text-[0.6rem] sm:tracking-[0.28em]">
          {String(index + 1).padStart(2, "0")}
        </p>
        <h3 className="mt-2 max-w-xl font-serif text-xl font-medium leading-tight sm:text-2xl lg:text-3xl">
          {tile.title}
        </h3>
        <p className="mt-2 max-w-xl text-[0.7rem] leading-5 text-ivory/70 sm:mt-3 sm:text-xs sm:leading-6 lg:text-sm lg:leading-7">{tile.text}</p>
      </div>
    </Link>
  );
}

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(homeFaqJsonLd) }}
      />
      <Hero />
      <TrustBar />
      <ManifestoSection />

      <section className="bg-ivory overflow-hidden">
        <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8 sm:py-20 lg:grid lg:grid-cols-[1fr_2fr] lg:items-start lg:gap-16 lg:py-28">

          {/* Section header */}
          <div className="reveal mb-8 text-center sm:text-left lg:mb-0 lg:border-r lg:border-bronze/45 lg:pr-12">
            <p className="text-xs uppercase tracking-[0.34em] text-bronze">Notre vision</p>
            <h2 className="mt-3 font-serif text-[1.75rem] font-medium leading-[1.06] text-charcoal sm:text-4xl lg:text-5xl">
              Une vision complète<br /> de la villa moderne.
            </h2>
            {/* Swipe hint — below heading on mobile */}
            <div className="mt-5 flex items-center justify-center gap-3 sm:justify-start sm:hidden">
              {authorityPillars.map((_, i) => (
                <div key={i} className="h-px w-6 bg-bronze/35" />
              ))}
              <span className="text-[0.42rem] uppercase tracking-[0.38em] text-charcoal/30">Glisser</span>
            </div>
          </div>

          {/* ── MOBILE: horizontal snap scroll ── */}
          <div className="relative -mx-5 sm:hidden">
            <div className="flex gap-4 overflow-x-auto snap-x snap-mandatory scrollbar-hide px-5 pb-6">
              {authorityPillars.map((pillar, index) => (
                <article
                  key={pillar.title}
                  className="group relative snap-start shrink-0 w-[78vw] overflow-hidden border-t-2 border-bronze/20 px-4 pt-6 pb-6 transition-colors duration-300"
                >
                  <div className="absolute left-0 top-0 h-[2px] w-0 bg-bronze transition-all duration-700 group-active:w-full" />
                  <p className="font-serif text-[3.5rem] leading-none text-bronze/60">
                    {String(index + 1).padStart(2, "0")}
                  </p>
                  <h3 className="mt-5 text-[0.65rem] font-medium uppercase tracking-[0.22em] text-charcoal">
                    {pillar.title}
                  </h3>
                  <div className="mt-3 h-px w-6 bg-bronze/30" />
                  <p className="mt-3 text-xs leading-[1.8] text-charcoal/58">{pillar.description}</p>
                </article>
              ))}
              <div className="shrink-0 w-5" aria-hidden="true" />
            </div>
            {/* Right-edge fade */}
            <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-ivory to-transparent" />
          </div>

          {/* ── TABLET + DESKTOP: grid ── */}
          <div className="hidden sm:grid sm:gap-6 sm:grid-cols-3 sm:gap-8">
            {authorityPillars.map((pillar, index) => (
              <article key={pillar.title} className="reveal group relative overflow-hidden border-t border-bronze/15 pt-6 transition-colors duration-300 hover:border-bronze/50">
                <div className="absolute left-0 top-0 h-[2px] w-0 bg-bronze transition-all duration-700 group-hover:w-full" />
                <p className="inline-block origin-left font-serif text-5xl leading-none text-bronze/70 transition-all duration-500 group-hover:scale-110 group-hover:text-bronze">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <h3 className="mt-4 text-[0.65rem] uppercase tracking-[0.22em] text-charcoal transition-colors duration-300 group-hover:text-bronze">
                  {pillar.title}
                </h3>
                <p className="mt-3 text-xs leading-6 text-charcoal/62 transition-colors duration-300 group-hover:text-charcoal/85">{pillar.description}</p>
              </article>
            ))}
          </div>

        </div>
      </section>

      <section className="bg-charcoal py-10 sm:py-12 lg:px-10 lg:py-16">

        {/* ── MOBILE: section header + horizontal snap scroll ── */}
        <div className="lg:hidden">
          <div className="flex items-end justify-between px-5 pb-5 sm:px-8">
            <div>
              <p className="text-[0.5rem] uppercase tracking-[0.45em] text-bronze">Nos expertises</p>
              <h2 className="mt-2 font-serif text-[1.75rem] font-medium leading-[1.02] text-ivory">
                Ce que<br />nous faisons.
              </h2>
            </div>
            <div className="flex shrink-0 flex-col items-end gap-1 pb-1">
              <span className="text-[0.42rem] uppercase tracking-[0.38em] text-ivory/25">Glisser</span>
              <div className="flex gap-1">
                {expertiseTiles.slice(0, 5).map((_, i) => (
                  <div key={i} className="h-px w-3 bg-bronze/30" />
                ))}
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="flex gap-4 overflow-x-auto snap-x snap-mandatory scrollbar-hide pl-5 sm:pl-8 pb-5">
              {expertiseTiles.map((tile, index) => (
                <Link
                  key={tile.title}
                  href={tile.href}
                  className="lg-dark-panel group relative snap-start shrink-0 overflow-hidden bg-charcoal"
                  style={{ width: "70vw", height: "88vw", maxWidth: "320px", maxHeight: "400px" }}
                >
                  <CinematicImage
                    src={tile.image}
                    alt={tile.title}
                    sizes="70vw"
                    imageClassName="object-cover object-center opacity-[0.88] transition duration-700 group-active:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/35 to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 p-5">
                    <div className="mb-2.5 h-px w-8 bg-bronze transition-all duration-500 group-hover:w-16" />
                    <p className="text-[0.46rem] uppercase tracking-[0.28em] text-bronze">
                      {String(index + 1).padStart(2, "0")}
                    </p>
                    <h3 className="mt-1.5 font-serif text-[1.15rem] font-medium leading-tight text-ivory">
                      {tile.title}
                    </h3>
                    <p className="mt-1.5 text-[0.68rem] leading-5 text-ivory/60">
                      {tile.text}
                    </p>
                  </div>
                </Link>
              ))}
              <div className="shrink-0 w-5 sm:w-8" aria-hidden="true" />
            </div>
            {/* Right-edge fade hint */}
            <div className="pointer-events-none absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-charcoal to-transparent" />
          </div>
        </div>

        {/* ── DESKTOP: original 12-col grid ── */}
        <div className="hidden lg:block">
          <div className="mx-auto grid max-w-[1500px] gap-5 lg:grid-cols-12 lg:auto-rows-[320px]">
            {expertiseTiles.map((tile, index) => (
              <ExpertiseTile key={tile.title} tile={tile} index={index} />
            ))}
          </div>
        </div>

      </section>

      <CollectionShowcase />

      <TestimonialsSection />

      <ProcessSection />

      <section className="grid overflow-hidden bg-charcoal text-ivory lg:grid-cols-[1fr_1.65fr]">
        <div className="reveal px-5 py-14 sm:px-8 sm:py-20 lg:py-28 lg:pl-[max(2rem,calc((100vw-80rem)/2+2rem))] lg:pr-20">
          <p className="text-xs uppercase tracking-[0.34em] text-bronze">Notre ancrage</p>
          <h2 className="mt-3 max-w-md font-serif text-3xl font-medium leading-[1.04] sm:text-4xl lg:text-5xl">
            Nous intervenons là où l’exception rencontre l’expertise.
          </h2>
          <p className="mt-4 max-w-md text-sm leading-7 text-ivory/72">
            De la Palmeraie à l’Hivernage, en passant par Targa, Agdal, Guéliz
            et l’Ourika, chaque projet est une rencontre avec un lieu unique.
          </p>
          <div className="mt-8 flex flex-wrap gap-2 sm:gap-3">
            {serviceAreas.map((area) => (
              <span
                key={area}
                className="border border-bronze/30 px-3 py-2 text-[0.58rem] uppercase tracking-[0.18em] text-ivory/70 transition-all duration-300 hover:border-bronze hover:bg-bronze/10 hover:text-ivory sm:px-4 sm:py-3 sm:text-[0.62rem]"
              >
                {area}
              </span>
            ))}
          </div>
        </div>
        <div className="lg-dark-panel reveal relative min-h-[300px] overflow-hidden bg-charcoal sm:min-h-[400px] lg:min-h-[600px]">
          <CinematicImage
            src="/images/mosques2.png"
            alt="Mosquée Koutoubia et Atlas enneigé — Maroc, zone d'intervention Ouidesign"
            sizes="(min-width: 1024px) 66vw, 100vw"
            imageClassName="object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-charcoal/40 via-transparent to-transparent" />
        </div>
      </section>

      <HomeFaqSection />

      <EmailCapture />

      <CTASection />
    </>
  );
}
