import type { Metadata } from "next";
import { CTASection } from "@/components/CTASection";
import { PageHero } from "@/components/PageHero";
import { SectionHeading } from "@/components/SectionHeading";
import { ServiceCard } from "@/components/ServiceCard";
import { authorityPillars, mainServices } from "@/lib/site";

export const metadata: Metadata = {
  title: "Expertises villa, riad et smart living à Marrakech",
  description:
    "Découvrez les expertises Ouidesign : rénovation de villas, architecture intérieure, menuiserie sur mesure, cuisines premium, domotique, sécurité, piscine, climatisation et solaire à Marrakech.",
  alternates: {
    canonical: "/expertises",
  },
};

export default function ExpertisesPage() {
  return (
    <>
      <PageHero
        eyebrow="Expertises"
        title="Tout ce qui rend une villa belle, confortable et techniquement sûre."
        text="Ouidesign accompagne les propriétaires de villas, riads, Airbnb premium et espaces d’hospitalité avec une vision complète : architecture, mobilier, domotique et infrastructure."
      />

      <section className="bg-smoke">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:py-24">
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {mainServices.map((service, index) => (
              <ServiceCard key={service.title} service={service} index={index} />
            ))}
          </div>
        </div>
      </section>

      <section id="architecture-interieure" className="bg-ivory">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 py-20 sm:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:py-28">
          <SectionHeading
            eyebrow="Architecture intérieure"
            title="Des intérieurs dessinés pour vivre, recevoir et durer."
            text="L’architecture intérieure Ouidesign organise la lumière, les circulations, les rangements, la matière et les systèmes pour que chaque espace soit à la fois élégant et évident."
          />
          <div className="grid gap-px bg-charcoal/12 sm:grid-cols-3 lg:grid-cols-1">
            {authorityPillars.map((pillar) => (
              <article key={pillar.title} className="bg-ivory p-7">
                <h2 className="font-serif text-3xl text-charcoal">{pillar.title}</h2>
                <p className="mt-4 text-sm leading-7 text-charcoal/68">{pillar.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
