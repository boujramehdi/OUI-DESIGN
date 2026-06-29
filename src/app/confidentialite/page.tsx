import type { Metadata } from "next";
import { siteConfig } from "@/lib/site";
import { Container } from "@/components/Container";

export const metadata: Metadata = {
  title: "Politique de confidentialité",
  description: "Politique de confidentialité du site Ouidesign — comment nous traitons vos données personnelles.",
  alternates: {
    canonical: "/confidentialite",
  },
  robots: {
    index: false,
  },
};

export default function ConfidentialitePage() {
  return (
    <main className="bg-ivory min-h-screen">
      <Container className="pb-24 pt-36"><div className="max-w-3xl">
        <p className="text-[0.65rem] uppercase tracking-[0.4em] text-bronze">Légal</p>
        <h1 className="mt-4 font-serif text-4xl font-medium text-charcoal sm:text-5xl">
          Politique de confidentialité
        </h1>
        <div className="mt-12 space-y-10 text-sm leading-7 text-charcoal/75">

          <section>
            <h2 className="mb-3 text-[0.65rem] uppercase tracking-[0.3em] text-charcoal">
              Responsable du traitement
            </h2>
            <p>
              <strong className="text-charcoal">{siteConfig.name}</strong><br />
              Maroc<br />
              Email : {siteConfig.email}<br />
              Téléphone : {siteConfig.phone}
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-[0.65rem] uppercase tracking-[0.3em] text-charcoal">
              Données collectées
            </h2>
            <p>
              Ce site ne collecte pas de données personnelles via des formulaires. Les seuls
              échanges de données personnelles interviennent lorsque vous nous contactez
              directement par :
            </p>
            <ul className="mt-3 list-disc pl-5 space-y-1">
              <li>WhatsApp : via l'application WhatsApp, soumise aux conditions de Meta Platforms.</li>
              <li>Téléphone : appel direct au {siteConfig.phone}.</li>
              <li>Email : message envoyé à {siteConfig.email}.</li>
            </ul>
            <p className="mt-3">
              Dans ce cadre, les informations partagées (nom, coordonnées, description du projet)
              sont utilisées uniquement pour traiter votre demande et ne sont pas transmises à des
              tiers.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-[0.65rem] uppercase tracking-[0.3em] text-charcoal">
              Cookies et traceurs
            </h2>
            <p>
              Ce site utilise des technologies minimales pour son bon fonctionnement (Next.js).
              Aucun cookie publicitaire ou de tracking n'est déposé sans votre consentement
              explicite.
            </p>
            <p className="mt-3">
              Les polices de caractères sont chargées depuis Google Fonts, ce qui peut impliquer
              la transmission de votre adresse IP aux serveurs de Google. Vous pouvez désactiver
              ce chargement via les paramètres de votre navigateur.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-[0.65rem] uppercase tracking-[0.3em] text-charcoal">
              Durée de conservation
            </h2>
            <p>
              Les échanges initiés via WhatsApp ou email sont conservés uniquement le temps
              nécessaire au traitement de votre demande et au suivi du projet éventuel. Ils
              sont supprimés sur simple demande de votre part.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-[0.65rem] uppercase tracking-[0.3em] text-charcoal">
              Vos droits
            </h2>
            <p>
              Conformément à la loi marocaine n° 09-08 relative à la protection des personnes
              physiques à l'égard du traitement des données à caractère personnel, vous disposez
              des droits suivants :
            </p>
            <ul className="mt-3 list-disc pl-5 space-y-1">
              <li>Droit d'accès à vos données</li>
              <li>Droit de rectification</li>
              <li>Droit de suppression</li>
              <li>Droit d'opposition au traitement</li>
            </ul>
            <p className="mt-3">
              Pour exercer ces droits, contactez-nous à :{" "}
              <a href={`mailto:${siteConfig.email}`} className="text-bronze hover:text-charcoal underline underline-offset-4">
                {siteConfig.email}
              </a>
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-[0.65rem] uppercase tracking-[0.3em] text-charcoal">
              Sécurité
            </h2>
            <p>
              Ouidesign met en œuvre les mesures techniques et organisationnelles appropriées
              pour protéger vos données contre tout accès non autorisé, modification, divulgation
              ou destruction.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-[0.65rem] uppercase tracking-[0.3em] text-charcoal">
              Modifications
            </h2>
            <p>
              Cette politique peut être mise à jour à tout moment. La date de dernière mise à jour
              est indiquée ci-dessous.
            </p>
          </section>

          <p className="border-t border-bronze/20 pt-6 text-xs text-charcoal/45">
            Dernière mise à jour : juin 2026
          </p>
        </div>
      </div></Container>
    </main>
  );
}
