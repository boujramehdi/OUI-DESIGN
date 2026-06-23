import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { CTASection } from "@/components/CTASection";
import { PageHero } from "@/components/PageHero";

export const metadata: Metadata = {
  title: "À propos de Ouidesign — Architecture intelligente à Marrakech",
  description:
    "Ouidesign est une entreprise spécialisée dans la rénovation, l'architecture intérieure, la domotique et l'infrastructure pour villas et riads haut de gamme à Marrakech.",
  alternates: {
    canonical: "/a-propos",
  },
};

const values = [
  {
    title: "Exigence",
    description:
      "Chaque décision visible renvoie à une décision invisible. Nous refusons les raccourcis qui coûtent cher plus tard.",
  },
  {
    title: "Cohérence",
    description:
      "Architecture, technique et esthétique forment un seul langage. Rien n'est ajouté après coup.",
  },
  {
    title: "Discrétion",
    description:
      "Nos clients nous font confiance sur des projets privés et sensibles. Nous respectons cela à chaque étape.",
  },
  {
    title: "Durabilité",
    description:
      "Une villa bien pensée dure, s'apprécie et se maintient. Nous concevons pour le long terme, pas pour l'inauguration.",
  },
];

const expertise = [
  { label: "Rénovation complète de villas et riads", href: "/renovation-villa-marrakech", image: "/images/riad-courtyard.png" },
  { label: "Architecture intérieure et direction esthétique", href: "/renovation-villa-marrakech#architecture", image: "/images/menuiserie-dressing.png" },
  { label: "Menuiserie sur mesure et mobilier intégré", href: "/menuiserie-sur-mesure-marrakech", image: "/images/bureau-marrakech.png" },
  { label: "Smart home, domotique et réseau", href: "/smart-home-marrakech", image: "/images/smart-home-2.png" },
  { label: "Piscines et locaux techniques", href: "/piscine-local-technique-marrakech", image: "/images/piscine-sunset.png" },
  { label: "Sécurité, caméras et contrôle d'accès", href: "/camera-surveillance-marrakech", image: "/images/securiter.jpg" },
  { label: "Climatisation et confort thermique", href: "/climatisation-marrakech", image: "/images/Home-smart.png" },
  { label: "Solaire et infrastructure durable", href: "/solaire-villa-marrakech", image: "/images/solaire-infrastruction.jpg" },
];

export default function AProposPage() {
  return (
    <>
      <PageHero
        eyebrow="À propos"
        title="Une vision complète de la villa moderne au Maroc."
        text="Ouidesign accompagne les propriétaires exigeants dans la transformation, la conception et l'équipement de leurs villas et riads à Marrakech."
      />

      {/* Histoire */}
      <section className="bg-ivory">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:py-28">
          {/* Top: text + image */}
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            <div>
              <p className="text-[0.65rem] uppercase tracking-[0.4em] text-bronze">Notre histoire</p>
              <h2 className="mt-4 font-serif text-3xl font-medium leading-tight text-charcoal sm:text-4xl lg:text-5xl">
                Né de l'exigence du terrain.
              </h2>
              <p className="mt-6 text-sm leading-7 text-charcoal/65 sm:text-base sm:leading-8">
                Ouidesign est né d'un constat simple : les villas de Marrakech méritent un interlocuteur
                unique capable de penser architecture, technique et confort dans un seul projet cohérent.
              </p>
              <p className="mt-4 text-sm leading-7 text-charcoal/65 sm:text-base sm:leading-8">
                Trop de chantiers souffrent de la fragmentation — un architecte, un électricien, un
                plombier, un menuisier, sans personne pour lire le tout. Ouidesign coordonne, conçoit
                et réalise de bout en bout, avec une responsabilité claire sur le résultat.
              </p>
              <p className="mt-4 text-sm leading-7 text-charcoal/65 sm:text-base sm:leading-8">
                Basés à Marrakech, nous intervenons dans la Palmeraie, l'Hivernage, Targa, Agdal,
                Guéliz, la Route de l'Ourika et sur toutes les propriétés qui méritent une attention
                sans compromis.
              </p>
            </div>
            <div className="relative aspect-[4/3] overflow-hidden lg:aspect-auto lg:min-h-[400px]">
              <Image
                src="/images/villa-sunset.png"
                alt="Villa haut de gamme au coucher du soleil — projet Ouidesign Marrakech"
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover opacity-90 transition duration-700 hover:scale-[1.03]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/30 to-transparent" />
              <div className="absolute bottom-5 left-6">
                <p className="text-[0.5rem] uppercase tracking-[0.3em] text-ivory/50">Marrakech</p>
                <p className="mt-1 font-serif text-lg text-ivory/80">Villa de la Palmeraie</p>
              </div>
            </div>
          </div>

          {/* Domaines d'expertise */}
          <div className="mt-16 lg:mt-20">
            <p className="text-[0.65rem] uppercase tracking-[0.4em] text-bronze">Nos domaines</p>
            <div className="mt-6 border-y border-bronze/15">
              {expertise.map((item, index) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="group relative flex items-center gap-5 overflow-hidden border-b border-bronze/10 py-5 transition-colors duration-300 last:border-b-0 hover:pl-2"
                >
                  {/* Background image on hover */}
                  <div className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                    <Image
                      src={item.image}
                      alt=""
                      fill
                      sizes="100vw"
                      className="object-cover opacity-10"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-ivory via-ivory/95 to-ivory/80" />
                  </div>

                  {/* Number */}
                  <span className="relative shrink-0 font-serif text-2xl leading-none text-bronze/20 transition-colors duration-300 group-hover:text-bronze/60">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  {/* Label */}
                  <p className="relative flex-1 text-sm font-medium text-charcoal/70 transition-colors duration-300 group-hover:text-charcoal">
                    {item.label}
                  </p>

                  {/* Arrow */}
                  <span className="relative ml-auto shrink-0 translate-x-2 text-bronze/0 transition-all duration-300 group-hover:translate-x-0 group-hover:text-bronze">
                    →
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Valeurs */}
      <section className="bg-sand text-charcoal overflow-hidden">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:py-28">
          <div className="mb-16 flex flex-col gap-2">
            <p className="reveal text-[0.65rem] uppercase tracking-[0.4em] text-bronze">Nos valeurs</p>
            <h2 className="reveal mt-2 font-serif text-4xl font-medium leading-[1.02] sm:text-5xl lg:text-6xl">
              Ce qui guide<br className="hidden sm:block" /> chaque décision.
            </h2>
          </div>

          <div className="grid gap-px bg-bronze/10 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value, index) => (
              <article
                key={value.title}
                className="reveal group relative overflow-hidden bg-ivory px-8 py-10 transition-colors duration-500 hover:bg-[#cbb89a] sm:px-9 sm:py-12"
              >
                {/* Bronze left sweep — slides in on hover */}
                <div className="absolute left-0 top-0 h-full w-0 bg-bronze/8 transition-all duration-700 group-hover:w-full" />

                {/* Bronze top accent bar */}
                <div className="absolute left-0 top-0 h-[2px] w-0 bg-bronze transition-all duration-700 group-hover:w-full" />

                {/* Ghost number — huge background */}
                <span className="pointer-events-none absolute -right-2 -bottom-4 select-none font-serif font-medium leading-none text-charcoal/[0.03] transition-all duration-700 group-hover:text-bronze/[0.1]"
                  style={{ fontSize: "clamp(7rem, 12vw, 10rem)" }}>
                  {String(index + 1).padStart(2, "0")}
                </span>

                {/* Content */}
                <div className="relative z-10">
                  <p className="font-serif text-[3.5rem] font-medium leading-none text-bronze/30 transition-colors duration-500 group-hover:text-bronze/60">
                    {String(index + 1).padStart(2, "0")}
                  </p>
                  <div className="mt-6 h-px w-8 bg-bronze/30 transition-all duration-500 group-hover:w-full group-hover:bg-bronze/50" />
                  <h3 className="mt-5 text-[0.65rem] font-bold uppercase tracking-[0.26em] text-charcoal transition-colors duration-300 group-hover:text-bronze">
                    {value.title}
                  </h3>
                  <p className="mt-3 text-xs leading-6 text-charcoal/60 transition-colors duration-300 group-hover:text-charcoal/85">
                    {value.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Zone d'intervention */}
      <section className="bg-ivory">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:py-28">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-[0.65rem] uppercase tracking-[0.4em] text-bronze">Ancrage local</p>
            <h2 className="mt-4 font-serif text-3xl font-medium leading-tight text-charcoal sm:text-4xl">
              Marrakech et ses environs, sans exception.
            </h2>
            <p className="mt-6 text-sm leading-7 text-charcoal/60 sm:text-base">
              De la Palmeraie à l'Hivernage, de Targa à la Route de l'Ourika, chaque projet est
              une rencontre avec un lieu unique. Nous intervenons là où l'exception rencontre
              l'expertise.
            </p>
            <div className="mt-10 flex flex-wrap justify-center gap-2">
              {["Palmeraie", "Hivernage", "Targa", "Agdal", "Guéliz", "Route de l'Ourika", "Médina"].map((zone) => (
                <span
                  key={zone}
                  className="border border-bronze/25 px-4 py-2 text-[0.58rem] uppercase tracking-[0.18em] text-charcoal/60 transition-all duration-300 hover:border-bronze hover:bg-bronze/8 hover:text-charcoal cursor-default"
                >
                  {zone}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CTASection title="Parlons de votre villa." />
    </>
  );
}
