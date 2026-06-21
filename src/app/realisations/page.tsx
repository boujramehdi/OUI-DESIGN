import type { Metadata } from "next";
import { CTASection } from "@/components/CTASection";
import { PageHero } from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Réalisations villas et riads à Marrakech",
  description:
    "Découvrez l’approche Ouidesign pour des villas, riads, maisons d’hôtes et espaces d’hospitalité premium à Marrakech.",
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
    text: "Accès simplifiés, caméras adaptées, climatisation fiable, mobilier robuste et expérience d’accueil fluide.",
  },
  {
    title: "Maison d’hôtes",
    text: "Infrastructure technique, piscine, local technique, réseau, maintenance et espaces conçus pour l’exploitation.",
  },
];

export default function RealisationsPage() {
  return (
    <>
      <PageHero
        eyebrow="Réalisations"
        title="Des interventions privées, pensées pour la valeur du lieu."
        text="Les projets Ouidesign sont souvent confidentiels. Cette page présente les typologies d’intervention et les standards de travail appliqués aux villas, riads et propriétés d’hospitalité à Marrakech."
      />

      <section className="bg-smoke">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:py-24">
          <div className="grid gap-4 md:grid-cols-2">
            {projectTypes.map((project, index) => (
              <article key={project.title} className="border border-charcoal/10 bg-ivory p-8 sm:p-10">
                <p className="text-xs uppercase text-bronze">{String(index + 1).padStart(2, "0")}</p>
                <h2 className="mt-8 font-serif text-4xl text-charcoal">{project.title}</h2>
                <p className="mt-6 text-base leading-8 text-charcoal/70">{project.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-charcoal text-ivory">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:py-28">
          <p className="text-xs uppercase text-bronze">Standard Ouidesign</p>
          <h2 className="mt-5 max-w-4xl font-serif text-5xl leading-tight sm:text-7xl">
            La réalisation doit être aussi précise que l’intention.
          </h2>
          <p className="mt-8 max-w-3xl text-lg leading-8 text-ivory/70">
            Chaque décision visible renvoie à une décision invisible : alimentation, réseau,
            maintenance, ventilation, accès, sécurité, confort thermique et durabilité.
          </p>
        </div>
      </section>

      <CTASection />
    </>
  );
}
