import type { Metadata } from "next";
import { CTASection } from "@/components/CTASection";
import { PageHero } from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Réalisations villas et riads à Marrakech",
  description:
    "Découvrez l'approche Ouidesign pour des villas, riads, maisons d'hôtes et espaces d'hospitalité premium à Marrakech.",
  alternates: {
    canonical: "/realisations",
  },
};

const projectTypes = [
  {
    title: "Villa familiale",
    text: "Réorganisation des espaces de vie, cuisine premium, menuiserie intégrée, climatisation et scénarios smart home.",
  },
  {
    title: "Riad de réception",
    text: "Lecture des circulations, traitement des ambiances, éclairage, sécurité discrète et confort des suites.",
  },
  {
    title: "Villa Airbnb premium",
    text: "Accès simplifiés, caméras adaptées, climatisation fiable, mobilier robuste et expérience d'accueil fluide.",
  },
  {
    title: "Maison d'hôtes",
    text: "Infrastructure technique, piscine, local technique, réseau, maintenance et espaces conçus pour l'exploitation.",
  },
];

export default function RealisationsPage() {
  return (
    <>
      <PageHero
        eyebrow="Réalisations"
        title="Des interventions privées, pensées pour la valeur du lieu."
        text="Les projets Ouidesign sont souvent confidentiels. Cette page présente les typologies d'intervention et les standards de travail appliqués aux villas, riads et propriétés d'hospitalité à Marrakech."
      />

      {/* Project types — dark cards on ivory */}
      <section className="bg-ivory">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:py-24">
          <div className="grid gap-4 md:grid-cols-2">
            {projectTypes.map((project, index) => (
              <article
                key={project.title}
                className="border border-bronze/20 bg-charcoal p-8 text-ivory sm:p-10"
              >
                <p className="text-[0.6rem] uppercase tracking-[0.3em] text-bronze">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <h2 className="mt-7 font-serif text-3xl text-ivory">{project.title}</h2>
                <p className="mt-5 text-sm leading-7 text-ivory/60">{project.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Standard Ouidesign — dark */}
      <section className="bg-charcoal text-ivory">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:py-28">
          <p className="text-[0.65rem] uppercase tracking-[0.4em] text-bronze">
            Standard Ouidesign
          </p>
          <h2 className="mt-4 max-w-4xl font-serif text-3xl font-medium leading-tight sm:text-4xl lg:text-5xl">
            La réalisation doit être aussi précise que l'intention.
          </h2>
          <p className="mt-4 max-w-3xl text-sm leading-7 text-ivory/65">
            Chaque décision visible renvoie à une décision invisible : alimentation, réseau,
            maintenance, ventilation, accès, sécurité, confort thermique et durabilité.
          </p>
        </div>
      </section>

      <CTASection />
    </>
  );
}
