import type { Metadata } from "next";
import Link from "next/link";
import { CinematicImage } from "@/components/CinematicImage";
import { CTASection } from "@/components/CTASection";
import { Hero } from "@/components/Hero";
import { ManifestoSection } from "@/components/ManifestoSection";
import { ProcessSection } from "@/components/ProcessSection";
import { authorityPillars, collectionItems, siteConfig } from "@/lib/site";

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
    addressLocality: "Marrakech",
    addressCountry: "MA",
  },
  areaServed: [
    "Maroc",
    "Marrakech",
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
  sameAs: [siteConfig.url],
};

const expertiseTiles = [
  {
    title: "Rénovation Villas & Riads",
    text: "Transformer un lieu existant en propriété d’exception, de la structure aux derniers détails.",
    href: "/renovation-villa-marrakech",
    image: "/images/renovation-villa.jpg",
    className: "aspect-[4/5] sm:aspect-[16/11] lg:aspect-auto lg:col-span-5 lg:row-span-2",
  },
  {
    title: "Menuiserie Sur Mesure",
    text: "Dressings, portes, panneaux et rangements dessinés pour l’architecture du lieu.",
    href: "/menuiserie-sur-mesure-marrakech",
    image: "/images/menuiserie.jpg",
    className: "aspect-[4/5] sm:aspect-[16/10] lg:aspect-auto lg:col-span-3",
  },
  {
    title: "Cuisines Premium",
    text: "L’élégance fonctionnelle au cœur de la maison.",
    href: "/collection#cuisines-premium",
    image: "/images/cuisine.jpg",
    className: "aspect-[4/5] sm:aspect-[16/10] lg:aspect-auto lg:col-span-4",
  },
  {
    title: "Piscines & Locaux Techniques",
    text: "L’eau, la filtration et la maintenance intégrées dès la conception.",
    href: "/piscine-local-technique-marrakech",
    image: "/images/piscine.jpg",
    className: "aspect-[4/5] sm:aspect-[16/10] lg:aspect-auto lg:col-span-3",
  },
  {
    title: "Smart Home & Domotique",
    text: "Des scénarios simples pour lumière, accès, climat et confort.",
    href: "/smart-home-marrakech",
    image: "/images/smart-home.jpg",
    className: "aspect-[4/5] sm:aspect-[16/10] lg:aspect-auto lg:col-span-4",
  },
  {
    title: "Sécurité & Caméras",
    text: "Protection discrète, réseau fiable et supervision claire.",
    href: "/camera-surveillance-marrakech",
    image: "/images/securite.jpg",
    className: "aspect-[4/5] sm:aspect-[16/10] lg:aspect-auto lg:col-span-3",
  },
  {
    title: "Climatisation",
    text: "Confort thermique dimensionné pour les villas et riads du Maroc.",
    href: "/climatisation-marrakech",
    image: "/images/climatisation.jpg",
    className: "aspect-[4/5] sm:aspect-[16/10] lg:aspect-auto lg:col-span-3",
  },
  {
    title: "Solaire & Infrastructure",
    text: "Énergie, réseau, protections et réservations pour une villa prête pour demain.",
    href: "/solaire-villa-marrakech",
    image: "/images/solaire.jpg",
    className: "aspect-[4/5] sm:aspect-[16/10] lg:aspect-auto lg:col-span-3",
  },
  {
    title: "Mobilier Intelligent",
    text: "Des fonctions motorisées et élégantes qui disparaissent quand l’espace respire.",
    href: "/collection",
    image: "/images/liftbar.jpg",
    className: "aspect-[4/5] sm:aspect-[16/10] lg:aspect-auto lg:col-span-3",
  },
];

const serviceAreas = [
  "Tout le Maroc",
  "Marrakech",
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
  "Riads",
  "Villas",
  "Maisons d’hôtes",
  "Airbnb premium",
  "Hospitality",
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
      className={`reveal group relative isolate flex min-w-0 overflow-hidden bg-charcoal text-ivory ${tile.className}`}
    >
      <CinematicImage
        src={tile.image}
        alt=""
        sizes="(min-width: 1024px) 33vw, 100vw"
        imageClassName="object-cover opacity-[0.88] transition duration-700 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/35 to-transparent" />
      <div className="relative mt-auto w-full p-8 sm:p-12">
        <div className="mb-7 h-px w-20 bg-bronze transition-all duration-500 group-hover:w-32" />
        <p className="text-xs uppercase tracking-[0.28em] text-bronze">
          {String(index + 1).padStart(2, "0")}
        </p>
        <h3 className="mt-5 max-w-xl font-serif text-3xl font-medium leading-tight sm:text-4xl">
          {tile.title}
        </h3>
        <p className="mt-6 max-w-xl text-sm leading-7 text-ivory/72">{tile.text}</p>
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
      <Hero />
      <ManifestoSection />

      <section className="bg-ivory">
        <div className="mx-auto grid max-w-7xl gap-20 px-5 py-28 sm:px-8 lg:grid-cols-[1fr_2fr] lg:items-start lg:py-40">
          <div className="reveal border-r-0 border-bronze/45 lg:border-r lg:pr-12">
            <p className="text-xs uppercase tracking-[0.34em] text-bronze">Notre vision</p>
            <h2 className="mt-6 max-w-md font-serif text-4xl font-medium leading-[1.02] text-charcoal sm:text-6xl">
              Une vision complète de la villa moderne.
            </h2>
          </div>
          <div className="grid gap-12 sm:grid-cols-3">
            {authorityPillars.map((pillar, index) => (
              <article key={pillar.title} className="reveal border-t border-bronze/45 pt-6">
                <p className="font-serif text-6xl leading-none text-bronze/75">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <h3 className="mt-5 text-sm uppercase tracking-[0.2em] text-charcoal">
                  {pillar.title}
                </h3>
                <p className="mt-5 text-sm leading-7 text-charcoal/66">{pillar.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-charcoal px-4 py-10 sm:px-6 sm:py-12 lg:px-10 lg:py-16">
        <div className="mx-auto grid max-w-[1500px] gap-5 lg:grid-cols-12 lg:auto-rows-[320px]">
          {expertiseTiles.map((tile, index) => (
            <ExpertiseTile key={tile.title} tile={tile} index={index} />
          ))}
        </div>
      </section>

      <section className="bg-ivory text-charcoal">
        <div className="mx-auto grid max-w-7xl gap-16 px-5 py-28 sm:px-8 lg:grid-cols-[0.85fr_1.45fr_0.8fr] lg:items-center lg:py-40">
          <div className="reveal">
            <p className="text-xs uppercase tracking-[0.34em] text-bronze">
              Collection Oui Design
            </p>
            <h2 className="mt-6 font-serif text-4xl font-medium leading-[1.02] sm:text-6xl">
              Des créations pensées pour sublimer votre quotidien.
            </h2>
            <Link
              href="/collection"
              className="mt-8 inline-flex items-center gap-5 text-sm uppercase tracking-[0.18em] text-charcoal transition hover:text-bronze"
            >
              Découvrez notre collection <span className="h-px w-12 bg-bronze" />
            </Link>
          </div>
          <div className="reveal relative h-64 overflow-hidden bg-charcoal lg:h-auto lg:aspect-[16/7]">
            <CinematicImage
              src="/images/liftbar.jpg"
              alt=""
              sizes="(min-width: 1024px) 45vw, 100vw"
              imageClassName="object-cover transition duration-700 hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-charcoal/55 to-transparent" />
          </div>
          <div className="reveal divide-y divide-charcoal/12 border-y border-charcoal/12">
            {collectionItems.map((item, index) => (
              <Link
                key={item.title}
                href="/collection"
                className="group flex items-center justify-between gap-5 py-5"
              >
                <span className="font-serif text-2xl text-bronze/85">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="flex-1 text-xs uppercase tracking-[0.18em] text-charcoal">
                  {item.title}
                </span>
                <span className="text-bronze transition group-hover:translate-x-1">→</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <ProcessSection />

      <section className="grid overflow-hidden bg-charcoal text-ivory lg:grid-cols-[1fr_1.65fr]">
        <div className="reveal px-5 py-28 sm:px-8 lg:py-40 lg:pl-[max(2rem,calc((100vw-80rem)/2+2rem))] lg:pr-20">
          <p className="text-xs uppercase tracking-[0.34em] text-bronze">Notre ancrage</p>
          <h2 className="mt-6 max-w-md font-serif text-4xl font-medium leading-[1.02] sm:text-6xl">
            Nous intervenons partout au Maroc.
          </h2>
          <p className="mt-7 max-w-md text-sm leading-7 text-ivory/72">
            De Marrakech à Casablanca, Rabat, Tanger, Agadir, Essaouira et Fès,
            chaque projet est une rencontre avec un lieu, une architecture et un
            niveau d’exigence unique.
          </p>
          <div className="mt-12 grid max-w-2xl grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-2">
            {serviceAreas.map((area) => (
              <span
                key={area}
                className="border border-bronze/30 px-4 py-3 text-[0.62rem] uppercase tracking-[0.18em] text-ivory/70"
              >
                {area}
              </span>
            ))}
          </div>
        </div>
        <div className="reveal relative min-h-[460px] overflow-hidden lg:min-h-[680px]">
          <CinematicImage
            src="/images/marrakech.jpg"
            alt=""
            sizes="(min-width: 1024px) 66vw, 100vw"
            imageClassName="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-charcoal/45 via-transparent to-charcoal/15" />
        </div>
      </section>

      <CTASection />
    </>
  );
}
