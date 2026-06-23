import type { Metadata } from "next";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Mentions légales",
  description: "Mentions légales du site Ouidesign — architecture et rénovation de villas à Marrakech.",
  alternates: {
    canonical: "/mentions-legales",
  },
  robots: {
    index: false,
  },
};

export default function MentionsLegalesPage() {
  return (
    <main className="bg-ivory min-h-screen">
      <div className="mx-auto max-w-3xl px-5 pb-24 pt-36 sm:px-8">
        <p className="text-[0.65rem] uppercase tracking-[0.4em] text-bronze">Légal</p>
        <h1 className="mt-4 font-serif text-4xl font-medium text-charcoal sm:text-5xl">
          Mentions légales
        </h1>
        <div className="mt-12 space-y-10 text-sm leading-7 text-charcoal/75">

          <section>
            <h2 className="mb-3 text-[0.65rem] uppercase tracking-[0.3em] text-charcoal">
              Éditeur du site
            </h2>
            <p>
              <strong className="text-charcoal">{siteConfig.name}</strong><br />
              Société à Responsabilité Limitée (SARL)<br />
              Adresse : Marrakech, Maroc<br />
              Téléphone : {siteConfig.phone}<br />
              Email : {siteConfig.email}
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-[0.65rem] uppercase tracking-[0.3em] text-charcoal">
              Directeur de la publication
            </h2>
            <p>
              Le directeur de la publication est le représentant légal de la société Ouidesign.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-[0.65rem] uppercase tracking-[0.3em] text-charcoal">
              Hébergement
            </h2>
            <p>
              Ce site est hébergé par Vercel Inc., 340 Pine Street, Suite 701, San Francisco,
              California 94104, États-Unis — <a href="https://vercel.com" target="_blank" rel="noopener noreferrer" className="text-bronze hover:text-charcoal underline underline-offset-4">vercel.com</a>
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-[0.65rem] uppercase tracking-[0.3em] text-charcoal">
              Propriété intellectuelle
            </h2>
            <p>
              L'ensemble des contenus présents sur ce site (textes, images, graphiques, logos,
              icônes, sons et logiciels) est la propriété exclusive d'Ouidesign ou de ses
              partenaires, et est protégé par les lois marocaines et internationales relatives à
              la propriété intellectuelle.
            </p>
            <p className="mt-3">
              Toute reproduction, distribution, modification, adaptation, retransmission ou
              publication de ces éléments est strictement interdite sans l'accord écrit
              d'Ouidesign.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-[0.65rem] uppercase tracking-[0.3em] text-charcoal">
              Limitation de responsabilité
            </h2>
            <p>
              Ouidesign s'efforce d'assurer l'exactitude et la mise à jour des informations
              diffusées sur ce site. Cependant, Ouidesign ne peut garantir l'exactitude,
              la complétude ou la mise à jour des informations et décline toute responsabilité
              pour toute imprécision, inexactitude ou omission.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-[0.65rem] uppercase tracking-[0.3em] text-charcoal">
              Liens hypertextes
            </h2>
            <p>
              Le site peut contenir des liens vers des sites tiers. Ouidesign n'exerce aucun
              contrôle sur ces sites et n'assume aucune responsabilité quant à leur contenu.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-[0.65rem] uppercase tracking-[0.3em] text-charcoal">
              Droit applicable
            </h2>
            <p>
              Les présentes mentions légales sont soumises au droit marocain. En cas de litige,
              les tribunaux marocains seront seuls compétents.
            </p>
          </section>

          <p className="border-t border-bronze/20 pt-6 text-xs text-charcoal/45">
            Dernière mise à jour : juin 2026
          </p>
        </div>
      </div>
    </main>
  );
}
