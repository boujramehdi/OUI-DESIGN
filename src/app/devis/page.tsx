import type { Metadata } from "next";
import Link from "next/link";
import { ContactForm } from "@/components/ContactForm";
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
  "Type de bien : villa, riad, maison d'hôtes ou espace hospitality",
  "Nature du projet : rénovation, menuiserie, smart home, piscine, climatisation ou solaire",
  "Niveau d'urgence et période souhaitée",
  "Photos, plans ou vidéo courte si disponibles",
];

export default function DevisPage() {
  return (
    <>
      <PageHero
        eyebrow="Devis"
        title="Une première orientation pour cadrer votre projet."
        text="Partagez les informations essentielles sur votre villa, riad ou espace d'hospitalité. Ouidesign vous répond avec une lecture claire des prochaines étapes."
        dark
      />

      {/* Budget ranges — ivory */}
      <section className="bg-ivory text-charcoal">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:py-24">
          <div className="mb-12">
            <p className="text-[0.65rem] uppercase tracking-[0.4em] text-bronze">Fourchettes indicatives</p>
            <h2 className="mt-4 max-w-2xl font-serif text-3xl font-medium leading-tight text-charcoal sm:text-4xl">
              Pour vous aider à cadrer votre projet.
            </h2>
            <p className="mt-4 max-w-2xl text-sm leading-7 text-charcoal/55">
              Ces fourchettes sont indicatives et dépendent de l'état du bien, du niveau de
              finition et des équipements choisis. Un diagnostic précis affine ces chiffres.
            </p>
          </div>
          <div className="grid gap-px bg-bronze/10 border border-bronze/10 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { service: "Rénovation complète villa", range: "3 000 – 8 000 DH/m²", note: "Selon état du bien et finitions" },
              { service: "Menuiserie sur mesure", range: "800 – 2 500 DH/m²", note: "Dressings, portes, bibliothèques" },
              { service: "Cuisine premium", range: "60 000 – 250 000 DH", note: "Sur mesure avec équipement intégré" },
              { service: "Smart Home & Domotique", range: "30 000 – 150 000 DH", note: "Selon superficie et équipements" },
              { service: "Piscine & local technique", range: "150 000 – 500 000 DH", note: "Création ou rénovation complète" },
              { service: "Solaire & Infrastructure", range: "40 000 – 180 000 DH", note: "Selon puissance et stockage" },
            ].map((item) => (
              <div key={item.service} className="reveal group relative overflow-hidden bg-ivory px-8 py-7 transition-colors duration-300 hover:bg-[#f3ede4]">
                {/* Left accent */}
                <div className="absolute left-0 top-0 bottom-0 w-0 bg-bronze/15 transition-all duration-500 group-hover:w-1" />
                <p className="text-[0.6rem] uppercase tracking-[0.24em] text-bronze/70 transition-colors duration-300 group-hover:text-bronze">{item.service}</p>
                <p className="mt-3 font-serif text-2xl font-medium text-charcoal transition-transform duration-300 group-hover:-translate-y-0.5 sm:text-3xl">{item.range}</p>
                <p className="mt-2 text-xs text-charcoal/45 transition-colors duration-300 group-hover:text-charcoal/65">{item.note}</p>
              </div>
            ))}
          </div>
          <p className="mt-6 text-xs text-charcoal/40">
            * Prix en dirhams marocains (DH), hors mobilier et décoration. Hors taxes le cas
            échéant. Valables pour des projets à Marrakech en 2026.
          </p>
        </div>
      </section>

      {/* Brief section — ivory */}
      <section className="bg-ivory text-charcoal">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 py-20 sm:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:py-28">
          <div>
            <p className="text-[0.65rem] uppercase tracking-[0.4em] text-bronze">
              Préparer l'échange
            </p>
            <h2 className="mt-5 font-serif text-3xl font-medium leading-tight text-charcoal sm:text-5xl">
              Ce qui aide à comprendre le lieu rapidement.
            </h2>
            <p className="mt-6 text-sm leading-7 text-charcoal/65 sm:text-base sm:leading-8">
              Un échange WhatsApp suffit souvent pour qualifier le projet, identifier les
              expertises nécessaires et proposer une visite ou une étape de diagnostic.
            </p>
          </div>
          <div className="divide-y divide-bronze/20 border-y border-bronze/20">
            {briefItems.map((item, index) => (
              <div
                key={item}
                className="group grid grid-cols-[2.5rem_1fr] gap-4 py-5 transition-colors duration-300 hover:bg-bronze/[0.03] hover:pl-2"
              >
                <span className="text-[0.6rem] uppercase tracking-[0.2em] text-bronze transition-all duration-300 group-hover:text-bronze">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <p className="text-sm leading-7 text-charcoal/75 transition-colors duration-300 group-hover:text-charcoal">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact form — ivory */}
      <section className="bg-ivory text-charcoal">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 py-20 sm:px-8 lg:grid-cols-[1fr_1.2fr] lg:gap-20 lg:py-28">
          <div>
            <p className="text-[0.65rem] uppercase tracking-[0.4em] text-bronze">
              Formulaire
            </p>
            <h2 className="mt-5 font-serif text-3xl font-medium leading-tight text-charcoal sm:text-4xl">
              Décrivez votre projet en 2 minutes.
            </h2>
            <p className="mt-6 text-sm leading-7 text-charcoal/60">
              Remplissez les champs ci-contre. Votre message s'ouvrira dans WhatsApp,
              prêt à être envoyé. Pas de formulaire perdu, pas de délai de réponse.
            </p>
            {/* Direct contact fallback */}
            <div className="mt-10 border-t border-bronze/15 pt-8">
              <p className="text-[0.6rem] uppercase tracking-[0.28em] text-bronze">Contact direct</p>
              <a
                href={`tel:${siteConfig.phone}`}
                className="mt-3 block font-serif text-2xl text-charcoal transition hover:text-bronze"
              >
                {siteConfig.phone}
              </a>
              <a
                href={`mailto:${siteConfig.email}`}
                className="mt-2 block text-sm text-charcoal/60 transition hover:text-bronze"
              >
                {siteConfig.email}
              </a>
            </div>
          </div>

          <ContactForm />
        </div>
      </section>

      {/* Direct WhatsApp — dark */}
      <section className="bg-charcoal text-ivory">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:py-24">
          <div className="group border border-bronze/20 p-8 transition-colors duration-500 hover:border-bronze/50 hover:bg-[#1c1915] sm:p-10 lg:flex lg:items-center lg:justify-between lg:gap-10">
            <div>
              <p className="text-[0.65rem] uppercase tracking-[0.4em] text-bronze">
                Vous préférez appeler ?
              </p>
              <h2 className="mt-4 font-serif text-3xl text-ivory sm:text-4xl">
                {siteConfig.phone}
              </h2>
              <p className="mt-4 max-w-2xl text-sm leading-7 text-ivory/60">
                Disponible pour répondre à vos questions et cadrer votre projet rapidement.
              </p>
            </div>
            <Link
              href={whatsappHref(
                "Bonjour Ouidesign, je souhaite demander un devis pour mon projet à Marrakech."
              )}
              target="_blank"
              className="mt-8 inline-flex items-center gap-3 bg-bronze px-6 py-4 text-xs uppercase tracking-[0.18em] text-charcoal transition duration-300 hover:bg-ivory lg:mt-0"
            >
              <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z" />
              </svg>
              Ouvrir WhatsApp directement
            </Link>
          </div>
        </div>
      </section>

      <CTASection title="Votre villa mérite une orientation précise dès le premier échange." />
    </>
  );
}
