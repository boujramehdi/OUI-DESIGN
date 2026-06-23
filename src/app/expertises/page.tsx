import type { Metadata } from "next";
import { CTASection } from "@/components/CTASection";
import { PageHero } from "@/components/PageHero";
import { ServiceCard } from "@/components/ServiceCard";
import { authorityPillars, mainServices } from "@/lib/site";

export const metadata: Metadata = {
  title: "Expertises villa, riad et smart living au Maroc",
  description:
    "Découvrez les expertises Ouidesign : rénovation de villas, architecture intérieure, menuiserie sur mesure, cuisines premium, domotique, sécurité, piscine, climatisation et solaire au Maroc.",
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
      <section id="architecture-interieure" className="overflow-hidden bg-charcoal text-ivory">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:py-28">

          {/* Header row */}
          <div className="reveal mb-16 grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-end lg:gap-20">
            <div>
              <p className="text-[0.65rem] uppercase tracking-[0.4em] text-bronze">
                Architecture intérieure
              </p>
              <h2 className="mt-3 font-serif text-4xl font-medium leading-[1.02] text-ivory sm:text-5xl lg:text-6xl">
                Des intérieurs dessinés pour vivre, recevoir et durer.
              </h2>
            </div>
            <p className="max-w-lg text-sm leading-7 text-ivory/55 lg:pb-1">
              L'architecture intérieure Ouidesign organise la lumière, les circulations, les
              rangements, la matière et les systèmes pour que chaque espace soit à la fois
              élégant et évident.
            </p>
          </div>

          {/* Pillar cards — horizontal on desktop */}
          <div className="grid gap-px bg-bronze/10 sm:grid-cols-3">
            {authorityPillars.map((pillar, index) => (
              <article
                key={pillar.title}
                className="reveal group relative overflow-hidden bg-[rgba(255,255,255,0.06)] px-8 py-10 transition-colors duration-500 hover:bg-[rgba(184,146,95,0.18)] sm:px-9 sm:py-12"
              >
                {/* Top sweep bar */}
                <div className="absolute left-0 top-0 h-[2px] w-0 bg-bronze transition-all duration-700 group-hover:w-full" />

                {/* Ghost huge number */}
                <span
                  className="pointer-events-none absolute -right-3 -top-2 select-none font-serif font-medium leading-none text-ivory/[0.03] transition-all duration-700 group-hover:text-bronze/[0.10]"
                  style={{ fontSize: "clamp(7rem, 10vw, 9rem)" }}
                >
                  {String(index + 1).padStart(2, "0")}
                </span>

                {/* Visible small number */}
                <p className="relative font-serif text-5xl font-medium leading-none text-bronze/40 transition-colors duration-500 group-hover:text-bronze/80">
                  {String(index + 1).padStart(2, "0")}
                </p>

                {/* Bronze rule — extends on hover */}
                <div className="mt-7 h-px w-8 bg-bronze/40 transition-all duration-500 group-hover:w-full group-hover:bg-bronze/60" />

                {/* Title */}
                <h3 className="mt-6 font-serif text-2xl text-ivory transition-all duration-300 group-hover:-translate-y-0.5 sm:text-3xl">
                  {pillar.title}
                </h3>

                {/* Description — slides slightly up on hover */}
                <p className="mt-4 text-sm leading-7 text-ivory/55 transition-colors duration-300 group-hover:text-ivory/80">
                  {pillar.description}
                </p>

                {/* Bottom fade-in arrow */}
                <p className="mt-8 translate-y-2 text-[0.58rem] uppercase tracking-[0.28em] text-bronze/0 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:text-bronze group-hover:opacity-100">
                  ✦ Vision Ouidesign
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
