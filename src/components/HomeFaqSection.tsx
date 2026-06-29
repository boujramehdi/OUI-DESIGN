"use client";

import { useState } from "react";
import { Container } from "@/components/Container";

const faqs = [
  {
    question: "Combien coûte une rénovation de villa au Maroc ?",
    answer:
      "Une rénovation haut de gamme au Maroc se situe généralement entre 3 000 et 8 000 DH/m² selon l'état du bien, le niveau de finition et les équipements intégrés (domotique, piscine, climatisation). Une réserve de 15 à 20 % pour les imprévus est recommandée. Ouidesign vous propose un diagnostic initial pour cadrer le budget avec précision.",
  },
  {
    question: "Ouidesign peut-il gérer l'intégralité d'un projet de villa ?",
    answer:
      "Oui. Ouidesign coordonne tous les corps de métier : architecture intérieure, menuiserie, électricité, plomberie, climatisation, domotique, piscine et sécurité. Un seul interlocuteur de la conception à la livraison, avec une responsabilité claire sur l'ensemble du résultat.",
  },
  {
    question: "La domotique est-elle adaptée aux villas du Maroc ?",
    answer:
      "Absolument. La domotique répond à des problèmes concrets au Maroc : gestion de la climatisation à distance, contrôle des accès pour les locations, supervision de la sécurité, scénarios lumière et économies d'énergie. Le meilleur moment pour l'intégrer est pendant la rénovation, quand les murs sont ouverts.",
  },
  {
    question: "Ouidesign intervient-il partout au Maroc ?",
    answer:
      "Oui. Nous intervenons dans tout le Maroc — Palmeraie, Route de l'Ourika, Targa, Agdal, Guéliz, Hivernage, Casablanca, Essaouira, Agadir et d'autres villes pour des projets d'envergure. Contactez-nous pour en discuter.",
  },
  {
    question: "Comment se passe un premier contact avec Ouidesign ?",
    answer:
      "Un message WhatsApp suffit pour démarrer. Décrivez votre projet — type de bien, localisation, nature des travaux envisagés. Ouidesign vous répond rapidement avec une première lecture et, si le projet correspond à notre expertise, propose une visite ou un diagnostic sur place.",
  },
  {
    question: "Le solaire est-il vraiment rentable pour une villa au Maroc ?",
    answer:
      "Oui, avec plus de 3 000 heures d'ensoleillement par an, le Maroc est parmi les meilleurs endroits au monde pour le photovoltaïque. Le retour sur investissement d'une installation correctement dimensionnée est généralement de 5 à 8 ans. L'intégration avec la domotique permet d'optimiser la consommation en temps réel.",
  },
];

export function HomeFaqSection() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="bg-ivory">
      <Container className="py-24 md:py-32">
        <div className="mb-14 lg:grid lg:grid-cols-[1fr_2fr] lg:gap-16 lg:items-start">
          <div className="reveal">
            <p className="text-[0.65rem] uppercase tracking-[0.4em] text-bronze">
              Questions fréquentes
            </p>
            <h2 className="mt-4 font-serif text-3xl font-medium leading-tight text-charcoal sm:text-4xl lg:text-5xl">
              Ce que vous voulez savoir avant de nous contacter.
            </h2>
          </div>
        </div>

        <div className="divide-y divide-bronze/15 border-y border-bronze/15">
          {faqs.map((faq, index) => {
            const isOpen = open === index;
            return (
              <div key={faq.question} className="reveal">
                <button
                  onClick={() => setOpen(isOpen ? null : index)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-6 py-6 text-left"
                >
                  <span className="font-serif text-lg leading-snug text-charcoal sm:text-xl lg:text-2xl">
                    {faq.question}
                  </span>
                  <span
                    className={`shrink-0 text-2xl text-bronze transition-transform duration-300 ${
                      isOpen ? "rotate-45" : ""
                    }`}
                    aria-hidden="true"
                  >
                    +
                  </span>
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    isOpen ? "max-h-96 pb-6" : "max-h-0"
                  }`}
                >
                  <p className="max-w-3xl text-sm leading-7 text-charcoal/65 sm:text-base sm:leading-8">
                    {faq.answer}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
