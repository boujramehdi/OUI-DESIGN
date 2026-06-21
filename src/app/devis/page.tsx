import type { Metadata } from "next";
import Link from "next/link";
import { CTASection } from "@/components/CTASection";
import { PageHero } from "@/components/PageHero";
import { siteConfig, whatsappHref } from "@/lib/site";

export const metadata: Metadata = {
  title: "Demander un devis ou une orientation",
  description:
    "Demandez une orientation Ouidesign pour votre projet de rénovation, architecture intérieure, domotique, menuiserie, piscine ou solaire à Marrakech.",
  alternates: {
    canonical: "/devis",
  },
};

const briefItems = [
  "Localisation de la propriété à Marrakech",
  "Type de bien : villa, riad, maison d’hôtes ou espace hospitality",
  "Nature du projet : rénovation, menuiserie, smart home, piscine, climatisation ou solaire",
  "Niveau d’urgence et période souhaitée",
  "Photos, plans ou vidéo courte si disponibles",
];

export default function DevisPage() {
  return (
    <>
      <PageHero
        eyebrow="Devis"
        title="Une première orientation pour cadrer votre projet."
        text="Partagez les informations essentielles sur votre villa, riad ou espace d’hospitalité. Ouidesign vous répond avec une lecture claire des prochaines étapes."
        dark
      />

      <section className="bg-ivory">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 py-20 sm:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:py-28">
          <div>
            <p className="text-xs uppercase text-bronze">Préparer l’échange</p>
            <h2 className="mt-5 font-serif text-4xl leading-tight text-charcoal sm:text-6xl">
              Ce qui aide à comprendre le lieu rapidement.
            </h2>
            <p className="mt-7 text-base leading-8 text-charcoal/70">
              Un échange WhatsApp suffit souvent pour qualifier le projet, identifier les
              expertises nécessaires et proposer une visite ou une étape de diagnostic.
            </p>
          </div>
          <div className="border-y border-charcoal/10">
            {briefItems.map((item, index) => (
              <div key={item} className="grid grid-cols-[3rem_1fr] gap-4 border-t border-charcoal/10 py-5 first:border-t-0">
                <span className="text-xs uppercase text-bronze">{String(index + 1).padStart(2, "0")}</span>
                <p className="text-base text-charcoal/75">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-smoke">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:py-24">
          <div className="border border-charcoal/10 bg-ivory p-8 sm:p-10 lg:flex lg:items-center lg:justify-between lg:gap-10">
            <div>
              <p className="text-xs uppercase text-bronze">Contact direct</p>
              <h2 className="mt-4 font-serif text-4xl text-charcoal">{siteConfig.phone}</h2>
              <p className="mt-4 max-w-2xl text-sm leading-7 text-charcoal/68">
                Le bouton ouvre WhatsApp avec un message prérempli pour lancer la conversation.
              </p>
            </div>
            <Link
              href={whatsappHref("Bonjour Ouidesign, je souhaite demander un devis pour mon projet à Marrakech.")}
              target="_blank"
              className="mt-8 inline-flex bg-charcoal px-6 py-4 text-sm uppercase text-ivory transition hover:bg-bronze hover:text-charcoal lg:mt-0"
            >
              Ouvrir WhatsApp
            </Link>
          </div>
        </div>
      </section>

      <CTASection title="Votre villa mérite une orientation précise dès le premier échange." />
    </>
  );
}
