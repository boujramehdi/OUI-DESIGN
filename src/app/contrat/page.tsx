import type { Metadata } from "next";
import Link from "next/link";
import { CTASection } from "@/components/CTASection";
import { PageHero } from "@/components/PageHero";
import { whatsappHref } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contrat de prestation Ouidesign — Cadre et engagements",
  description:
    "Découvrez le cadre contractuel Ouidesign : devis détaillé, bon de commande, jalons de paiement et engagements qualité pour votre projet de villa au Maroc.",
  alternates: {
    canonical: "/contrat",
  },
};

const contractSteps = [
  {
    number: "01",
    title: "Premier échange & diagnostic",
    description:
      "Une discussion WhatsApp ou une visite sur site pour comprendre votre projet, vos priorités et le périmètre d'intervention. Aucun engagement à cette étape.",
    note: "Gratuit — sans engagement",
  },
  {
    number: "02",
    title: "Devis détaillé",
    description:
      "Ouidesign vous remet un devis complet : lots, matériaux, équipements, main d'œuvre et délais. Chaque poste est lisible et justifié.",
    note: "Remis sous 48–72h après visite",
  },
  {
    number: "03",
    title: "Bon de commande & acompte",
    description:
      "Validation du devis par bon de commande signé. Un acompte de 30% lance officiellement le chantier et la réservation des équipes.",
    note: "30% à la signature",
  },
  {
    number: "04",
    title: "Suivi de chantier",
    description:
      "Points d'avancement réguliers, photos et comptes-rendus partagés. Paiements intermédiaires liés aux jalons validés ensemble.",
    note: "Jalons définis au contrat",
  },
  {
    number: "05",
    title: "Réception & solde",
    description:
      "Visite de réception contradictoire avec liste de réserves. Le solde est versé après levée des réserves et votre validation finale.",
    note: "Solde à la réception",
  },
  {
    number: "06",
    title: "Suivi post-livraison",
    description:
      "Ouidesign reste disponible après la livraison : réglages, garanties fabricants, maintenance et conseils pour l'exploitation de votre villa.",
    note: "Accompagnement inclus",
  },
];

const paymentSchedule = [
  { phase: "Signature du contrat", amount: "30%", description: "Acompte de démarrage — réservation des équipes et commandes matériaux" },
  { phase: "Démarrage des travaux", amount: "30%", description: "Jalons structurels validés — gros œuvre, réseaux, gaines" },
  { phase: "Mi-chantier", amount: "30%", description: "Second œuvre validé — menuiseries, équipements techniques, finitions en cours" },
  { phase: "Réception des travaux", amount: "10%", description: "Solde final après réception contradictoire et levée des réserves" },
];

const guarantees = [
  {
    title: "Devis transparent",
    description: "Chaque ligne du devis est détaillée : fournitures, pose, marques proposées. Pas de montant global opaque.",
  },
  {
    title: "Jalons contractuels",
    description: "Les paiements sont liés à des étapes vérifiables, pas à un calendrier unilatéral. Vous payez ce qui est fait.",
  },
  {
    title: "Garantie décennale",
    description: "Les travaux structurels sont couverts. Les équipements bénéficient des garanties fabricants transmises à la livraison.",
  },
  {
    title: "Confidentialité totale",
    description: "Votre projet, vos plans et vos données restent strictement privés. Aucune photo publiée sans accord écrit.",
  },
  {
    title: "Interlocuteur unique",
    description: "Un chef de projet Ouidesign coordonne tous les corps de métier. Vous n'avez qu'un seul contact tout au long du chantier.",
  },
  {
    title: "Délais négociés",
    description: "Les délais sont inscrits au contrat et discutés en amont. En cas d'aléas, Ouidesign vous prévient et propose des solutions.",
  },
];

export default function ContratPage() {
  return (
    <>
      <PageHero
        eyebrow="Contrat"
        title="Un cadre clair, des engagements précis, dès le premier devis."
        text="Ouidesign fonctionne sur une base contractuelle transparente : devis détaillé, jalons de paiement, réception contradictoire et suivi après livraison."
      />

      {/* Processus contractuel */}
      <section className="bg-ivory text-charcoal">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:py-24">
          <div className="mb-14">
            <p className="text-[0.65rem] uppercase tracking-[0.4em] text-bronze">
              De la demande à la livraison
            </p>
            <h2 className="mt-4 max-w-2xl font-serif text-3xl font-medium leading-tight text-charcoal sm:text-4xl">
              Les 6 étapes de votre projet avec Ouidesign.
            </h2>
          </div>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {contractSteps.map((step) => (
              <article
                key={step.number}
                className="reveal group relative flex flex-col overflow-hidden border border-bronze/20 bg-[rgba(255,255,255,0.04)] p-8 text-charcoal transition-all duration-500 hover:border-bronze/50 hover:bg-[#c9b598]"
              >
                {/* Top bronze sweep */}
                <div className="absolute left-0 top-0 h-[2px] w-0 bg-bronze transition-all duration-700 group-hover:w-full" />

                <div className="flex items-start justify-between gap-4">
                  <p className="font-serif text-4xl leading-none text-bronze/20 transition-colors duration-300 group-hover:text-bronze/50">
                    {step.number}
                  </p>
                  <span className="border border-bronze/25 px-2.5 py-1 text-[0.5rem] uppercase tracking-[0.18em] text-bronze/70 transition-colors duration-300 group-hover:border-bronze/60 group-hover:text-bronze">
                    {step.note}
                  </span>
                </div>

                <h3 className="mt-5 font-serif text-xl text-charcoal transition-all duration-300 group-hover:-translate-y-0.5">
                  {step.title}
                </h3>
                <p className="mt-3 flex-1 text-sm leading-7 text-charcoal/65 transition-colors duration-300 group-hover:text-charcoal/85">
                  {step.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Échéancier de paiement */}
      <section className="bg-charcoal text-ivory">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:py-24">
          <div className="mb-12">
            <p className="text-[0.65rem] uppercase tracking-[0.4em] text-bronze">
              Échéancier type
            </p>
            <h2 className="mt-4 max-w-2xl font-serif text-3xl font-medium leading-tight text-ivory sm:text-4xl">
              Paiements liés aux jalons, pas au calendrier.
            </h2>
            <p className="mt-4 max-w-2xl text-sm leading-7 text-ivory/55">
              L'échéancier ci-dessous est indicatif et adapté à chaque projet. Il est formalisé
              dans le contrat avant tout démarrage.
            </p>
          </div>

          <div className="grid gap-px bg-bronze/10 border border-bronze/10 sm:grid-cols-2">
            {paymentSchedule.map((item, index) => (
              <div
                key={item.phase}
                className="reveal group relative overflow-hidden bg-[rgba(255,255,255,0.06)] px-8 py-8 transition-colors duration-300 hover:bg-[rgba(255,255,255,0.10)]"
              >
                <div className="absolute left-0 top-0 bottom-0 w-0 bg-bronze/15 transition-all duration-500 group-hover:w-1" />
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-[0.58rem] uppercase tracking-[0.24em] text-bronze/70 transition-colors duration-300 group-hover:text-bronze">
                      Étape {String(index + 1).padStart(2, "0")} — {item.phase}
                    </p>
                    <p className="mt-3 font-serif text-3xl font-medium text-ivory sm:text-4xl">
                      {item.amount}
                    </p>
                  </div>
                </div>
                <p className="mt-4 text-sm leading-6 text-ivory/55 transition-colors duration-300 group-hover:text-ivory/75">
                  {item.description}
                </p>
              </div>
            ))}
          </div>

          <p className="mt-6 text-xs text-ivory/40">
            * Échéancier indicatif. Le contrat final peut prévoir des jalons intermédiaires
            supplémentaires selon la nature et la durée du projet.
          </p>
        </div>
      </section>

      {/* Garanties */}
      <section className="bg-ivory text-charcoal">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:py-24">
          <div className="mb-14 lg:grid lg:grid-cols-[1fr_2fr] lg:gap-16 lg:items-end">
            <div>
              <p className="text-[0.65rem] uppercase tracking-[0.4em] text-bronze">
                Engagements Ouidesign
              </p>
              <h2 className="mt-4 font-serif text-3xl font-medium leading-tight sm:text-4xl lg:text-5xl">
                Ce que vous pouvez exiger à chaque étape.
              </h2>
            </div>
            <p className="mt-4 text-sm leading-7 text-charcoal/60 lg:mt-0 lg:max-w-2xl">
              Un contrat n'a de valeur que s'il est respecté. Ces engagements sont inscrits
              dans nos documents et s'appliquent à chaque projet, quelle que soit son échelle.
            </p>
          </div>

          <div className="grid gap-px bg-bronze/10 sm:grid-cols-2 lg:grid-cols-3">
            {guarantees.map((g) => (
              <article
                key={g.title}
                className="reveal group relative overflow-hidden bg-sand p-8 transition-colors duration-500 hover:bg-[#cbb89a] sm:p-9"
              >
                <div className="absolute left-0 top-0 h-[2px] w-0 bg-bronze transition-all duration-700 group-hover:w-full" />
                <div className="mb-4 h-px w-8 bg-bronze transition-all duration-500 group-hover:w-full group-hover:bg-bronze/60" />
                <h3 className="font-serif text-xl text-charcoal sm:text-2xl">{g.title}</h3>
                <p className="mt-4 text-sm leading-7 text-charcoal/60 transition-colors duration-300 group-hover:text-charcoal/85">
                  {g.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA — Demander un devis */}
      <section className="bg-charcoal text-ivory">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:py-24">
          <div className="group border border-bronze/20 p-8 transition-colors duration-500 hover:border-bronze/50 hover:bg-[rgba(255,255,255,0.04)] sm:p-10 lg:flex lg:items-center lg:justify-between lg:gap-10">
            <div>
              <p className="text-[0.65rem] uppercase tracking-[0.4em] text-bronze">
                Prêt à formaliser votre projet ?
              </p>
              <h2 className="mt-4 font-serif text-3xl text-ivory sm:text-4xl">
                Demandez votre devis contractuel.
              </h2>
              <p className="mt-4 max-w-2xl text-sm leading-7 text-ivory/60">
                Envoyez-nous les grandes lignes de votre projet. Ouidesign vous revient
                avec un premier devis détaillé sous 48 à 72 heures.
              </p>
            </div>
            <div className="mt-8 flex shrink-0 flex-col gap-3 lg:mt-0">
              <Link
                href={whatsappHref(
                  "Bonjour Ouidesign, je souhaite recevoir un devis contractuel pour mon projet au Maroc."
                )}
                target="_blank"
                className="inline-flex items-center gap-3 bg-bronze px-6 py-4 text-xs uppercase tracking-[0.18em] text-charcoal transition duration-300 hover:bg-ivory"
              >
                <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z" />
                </svg>
                Demander un devis sur WhatsApp
              </Link>
              <Link
                href="/devis"
                className="inline-flex items-center justify-center gap-2 border border-bronze/30 px-6 py-4 text-xs uppercase tracking-[0.18em] text-ivory/70 transition duration-300 hover:border-bronze hover:text-ivory"
              >
                Formulaire de devis détaillé →
              </Link>
            </div>
          </div>
        </div>
      </section>

      <CTASection title="Un projet clair commence par un contrat clair." />
    </>
  );
}
