import type { Metadata } from "next";
import { CTASection } from "@/components/CTASection";
import { PageHero } from "@/components/PageHero";
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
        text="Ouidesign accompagne les propriétaires de villas, riads, Airbnb premium et espaces d'hospitalité avec une vision complète : architecture, mobilier, domotique et infrastructure."
      />

      {/* Service cards — dark cards on ivory bg */}
      <section className="bg-ivory">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:py-24">
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {mainServices.map((service, index) => (
              <ServiceCard key={service.title} service={service} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Architecture section — dark bg */}
      <section id="architecture-interieure" className="bg-charcoal text-ivory">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 py-20 sm:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:py-28">
          <div>
            <p className="text-[0.65rem] uppercase tracking-[0.4em] text-bronze">
              Architecture intérieure
            </p>
            <h2 className="mt-3 max-w-md font-serif text-3xl font-medium leading-[1.04] sm:text-4xl">
              Des intérieurs dessinés pour vivre, recevoir et durer.
            </h2>
            <p className="mt-4 max-w-md text-sm leading-7 text-ivory/65">
              L'architecture intérieure Ouidesign organise la lumière, les circulations, les
              rangements, la matière et les systèmes pour que chaque espace soit à la fois
              élégant et évident.
            </p>
          </div>
          <div className="grid gap-px bg-bronze/15 sm:grid-cols-3 lg:grid-cols-1">
            {authorityPillars.map((pillar) => (
              <article key={pillar.title} className="bg-charcoal p-7">
                <div className="mb-4 h-px w-10 bg-bronze" />
                <h3 className="font-serif text-2xl text-ivory">{pillar.title}</h3>
                <p className="mt-4 text-sm leading-7 text-ivory/60">{pillar.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
