import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { CTASection } from "@/components/CTASection";
import { PageHero } from "@/components/PageHero";
import { whatsappHref } from "@/lib/site";

export const metadata: Metadata = {
  title: "Réalisations villas et riads à Marrakech",
  description:
    "Découvrez les typologies de projets Ouidesign : villas familiales, riads de réception, propriétés Airbnb premium et maisons d'hôtes à Marrakech.",
  alternates: {
    canonical: "/realisations",
  },
};

const stats = [
  { value: "50+", label: "Projets réalisés" },
  { value: "8", label: "Expertises maîtrisées" },
  { value: "100%", label: "Coordination sur mesure" },
  { value: "5★", label: "Niveau de finition" },
];

const projectTypes = [
  {
    title: "Villa familiale",
    kicker: "Résidence principale",
    text: "Réorganisation des espaces de vie, cuisine premium, menuiserie intégrée, climatisation et scénarios smart home pour une villa qui fonctionne au quotidien avec fluidité.",
    tags: ["Rénovation", "Menuiserie", "Smart Home", "Climatisation"],
  },
  {
    title: "Riad de réception",
    kicker: "Patrimoine & hospitalité",
    text: "Lecture des circulations, traitement des ambiances, éclairage scénarisé, sécurité discrète et confort des suites pour un riad qui impressionne sans perdre son âme.",
    tags: ["Architecture intérieure", "Éclairage", "Sécurité", "Finitions"],
  },
  {
    title: "Villa Airbnb premium",
    kicker: "Exploitation locative",
    text: "Accès simplifiés, caméras adaptées, climatisation fiable, mobilier robuste et expérience d'accueil fluide pour une propriété qui génère des revenus au-dessus du marché.",
    tags: ["Domotique", "Accès connectés", "Smart Home", "Mobilier"],
  },
  {
    title: "Maison d'hôtes",
    kicker: "Infrastructure complète",
    text: "Infrastructure technique, piscine, local technique, réseau, maintenance et espaces conçus pour l'exploitation long terme avec des équipes extérieures.",
    tags: ["Piscine", "Infrastructure", "Solaire", "Sécurité"],
  },
  {
    title: "Villa neuve clé-en-main",
    kicker: "Coordination totale",
    text: "Suivi de chantier, coordination des corps de métier, direction esthétique, équipements et mise en service complète — un seul interlocuteur du gros œuvre aux finitions.",
    tags: ["Gros œuvre", "Menuiserie", "Technique", "Finitions"],
  },
  {
    title: "Rénovation partielle ciblée",
    kicker: "Intervention précise",
    text: "Cuisine, dressing, domotique ou piscine : Ouidesign peut intervenir sur un seul lot avec la même exigence que sur une rénovation complète.",
    tags: ["Cuisine", "Dressing", "Piscine", "Domotique"],
  },
];

const standards = [
  {
    title: "Coordination totale",
    description:
      "Un interlocuteur unique pour tous les corps de métier. Pas de confusion, pas de doublons, pas d'interface manquante.",
  },
  {
    title: "Technique anticipée",
    description:
      "Réseaux, gaines, tableau électrique, domotique : tout est pensé avant que les murs ferment.",
  },
  {
    title: "Finitions visibles et invisibles",
    description:
      "Ce qu'on voit doit être beau. Ce qu'on ne voit pas doit être fiable. Les deux sont aussi importants.",
  },
  {
    title: "Durabilité marrakchie",
    description:
      "Matériaux, équipements et systèmes sélectionnés pour résister au climat de Marrakech sur le long terme.",
  },
  {
    title: "Confidentialité garantie",
    description:
      "Les projets de nos clients sont privés. Nous ne publions aucune photo sans accord explicite et signé.",
  },
  {
    title: "Suivi après livraison",
    description:
      "Notre engagement ne s'arrête pas à la réception des travaux. Maintenance, réglages et conseils inclus.",
  },
];

export default function RealisationsPage() {
  return (
    <>
      <PageHero
        eyebrow="Réalisations"
        title="Des interventions privées, pensées pour la valeur du lieu."
        text="Les projets Ouidesign sont souvent confidentiels. Cette page présente les typologies d'intervention et les standards appliqués à chaque propriété."
      />

      {/* Stats — charcoal */}
      <section className="bg-charcoal text-ivory">
        <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8 sm:py-16 lg:py-20">
          <div className="grid grid-cols-2 gap-px bg-bronze/10 lg:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.label} className="group relative overflow-hidden bg-ivory px-8 py-10 text-center transition-colors duration-500 hover:bg-[#cbb89a]">
                {/* Top pin line drops on hover */}
                <div className="absolute left-1/2 top-0 h-0 w-px -translate-x-1/2 bg-bronze transition-all duration-500 group-hover:h-8" />
                <p className="font-serif text-5xl font-medium text-bronze transition-transform duration-500 group-hover:scale-110 sm:text-6xl">
                  {stat.value}
                </p>
                <p className="mt-3 text-[0.6rem] uppercase tracking-[0.28em] text-charcoal/55 transition-colors duration-300 group-hover:text-charcoal/85">
                  {stat.label}
                </p>
                {/* Bottom pin line drops on hover */}
                <div className="absolute bottom-0 left-1/2 h-0 w-px -translate-x-1/2 bg-bronze transition-all duration-500 group-hover:h-6" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Project types */}
      <section className="bg-ivory">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:py-24">
          <div className="mb-14">
            <p className="text-[0.65rem] uppercase tracking-[0.4em] text-bronze">
              Typologies de projets
            </p>
            <h2 className="mt-4 max-w-2xl font-serif text-3xl font-medium leading-tight text-charcoal sm:text-4xl">
              Chaque propriété a ses exigences propres.
            </h2>
          </div>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {projectTypes.map((project, index) => (
              <article
                key={project.title}
                className="reveal group relative flex flex-col overflow-hidden border border-bronze/20 bg-sand p-8 text-charcoal transition-all duration-500 hover:border-bronze/50 hover:bg-[#c9b598] sm:p-9"
              >
                {/* Top bronze sweep */}
                <div className="absolute left-0 top-0 h-[2px] w-0 bg-bronze transition-all duration-700 group-hover:w-full" />
                <div className="flex items-start justify-between gap-4">
                  <p className="text-[0.58rem] uppercase tracking-[0.26em] text-charcoal/65 transition-colors duration-300 group-hover:text-bronze">
                    {project.kicker}
                  </p>
                  <p className="shrink-0 font-serif text-3xl leading-none text-bronze/25 transition-colors duration-300 group-hover:text-bronze/60">
                    {String(index + 1).padStart(2, "0")}
                  </p>
                </div>
                <h3 className="mt-5 font-serif text-2xl text-charcoal transition-all duration-300 group-hover:-translate-y-0.5">{project.title}</h3>
                <p className="mt-4 flex-1 text-sm leading-7 text-charcoal/65 transition-colors duration-300 group-hover:text-charcoal/80">{project.text}</p>
                <div className="mt-7 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="border border-bronze/20 px-2.5 py-1 text-[0.55rem] uppercase tracking-[0.16em] text-charcoal/55 transition-colors duration-300 group-hover:border-bronze/50 group-hover:text-charcoal/80"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Ambiances visuelles */}
      <section className="bg-charcoal">
        <div className="mx-auto max-w-7xl px-5 pb-4 pt-4 sm:px-8">
          <div className="grid gap-1 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { src: "/images/riad-courtyard.png", alt: "Rénovation riad et villa haut de gamme à Marrakech par Ouidesign", label: "Rénovation", pos: "object-center" },
              { src: "/images/Home-smart.png", alt: "Installation smart home et domotique pour villa à Marrakech", label: "Smart Home", pos: "object-top" },
              { src: "/images/piscine-sunset.png", alt: "Piscine et local technique pour villa à Marrakech", label: "Piscine", pos: "object-bottom" },
              { src: "/images/solaire-infrastruction.jpg", alt: "Infrastructure solaire pour villa à Marrakech", label: "Solaire", pos: "object-center" },
            ].map((img) => (
              <div key={img.src} className="reveal group relative aspect-square overflow-hidden">
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                  className={`${img.pos} object-cover opacity-75 transition duration-700 group-hover:opacity-100 group-hover:scale-108`}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/70 via-transparent to-transparent transition duration-500 group-hover:from-charcoal/30" />
                <p className="absolute bottom-4 left-5 text-[0.55rem] uppercase tracking-[0.28em] text-ivory/60 transition duration-300 group-hover:text-bronze">
                  {img.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Notre standard */}
      <section className="bg-charcoal text-ivory">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:py-28">
          <div className="mb-14 lg:grid lg:grid-cols-[1fr_2fr] lg:gap-16 lg:items-end">
            <div>
              <p className="text-[0.65rem] uppercase tracking-[0.4em] text-bronze">
                Standard Ouidesign
              </p>
              <h2 className="mt-4 font-serif text-3xl font-medium leading-tight text-ivory sm:text-4xl lg:text-5xl">
                La réalisation doit être aussi précise que l'intention.
              </h2>
            </div>
            <p className="mt-4 text-sm leading-7 text-ivory/60 lg:mt-0 lg:max-w-2xl">
              Chaque décision visible renvoie à une décision invisible : alimentation, réseau,
              maintenance, ventilation, accès, sécurité, confort thermique et durabilité. Voici
              ce que nous appliquons à chaque projet, quelle qu'en soit l'échelle.
            </p>
          </div>
          <div className="grid gap-px bg-bronze/10 sm:grid-cols-2 lg:grid-cols-3">
            {standards.map((s) => (
              <article key={s.title} className="reveal group relative overflow-hidden bg-ivory p-8 transition-colors duration-500 hover:bg-[#cbb89a] sm:p-9">
                {/* Top sweep */}
                <div className="absolute left-0 top-0 h-[2px] w-0 bg-bronze transition-all duration-700 group-hover:w-full" />
                <div className="mb-4 h-px w-8 bg-bronze transition-all duration-500 group-hover:w-full group-hover:bg-bronze/60" />
                <h3 className="font-serif text-xl text-charcoal transition-colors duration-300 group-hover:text-charcoal sm:text-2xl">{s.title}</h3>
                <p className="mt-4 text-sm leading-7 text-charcoal/60 transition-colors duration-300 group-hover:text-charcoal/85">{s.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Confidentialité + CTA intermédiaire */}
      <section className="bg-ivory">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:py-24">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-[0.65rem] uppercase tracking-[0.4em] text-bronze">
              Photos & références
            </p>
            <h2 className="mt-4 font-serif text-3xl font-medium leading-tight text-charcoal sm:text-4xl">
              Nos projets vous seront présentés en direct.
            </h2>
            <p className="mt-6 text-sm leading-7 text-charcoal/60 sm:text-base">
              Par respect pour la confidentialité de nos clients, nous ne publions pas de
              photos sans accord explicite. Lors de notre premier échange, nous partageons
              les références adaptées à votre type de projet.
            </p>
            <Link
              href={whatsappHref(
                "Bonjour Ouidesign, je souhaite voir des références de projets similaires au mien."
              )}
              target="_blank"
              className="mt-8 inline-flex items-center gap-3 bg-bronze px-7 py-4 text-xs uppercase tracking-[0.18em] text-charcoal transition duration-300 hover:bg-charcoal hover:text-ivory"
            >
              Demander des références
            </Link>
          </div>
        </div>
      </section>

      <CTASection title="Votre villa mérite une lecture précise dès le premier échange." />
    </>
  );
}
