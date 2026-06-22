import type { Metadata } from "next";
import Link from "next/link";
import { CTASection } from "@/components/CTASection";
import { PageHero } from "@/components/PageHero";
import { collectionItems, whatsappHref } from "@/lib/site";

export const metadata: Metadata = {
  title: "Collection mobilier intelligent et cuisines premium",
  description:
    "Collection Ouidesign : Lift Bar, Mini Lift Bar, bureaux assis-debout, cuisines premium et mobilier intelligent pour villas et riads à Marrakech.",
  alternates: {
    canonical: "/collection",
  },
};

export default function CollectionPage() {
  return (
    <>
      <PageHero
        eyebrow="Collection"
        title="Mobilier intelligent et pièces signature pour villas premium."
        text="Une collection pensée pour faire apparaître la fonction seulement quand elle est utile : recevoir, travailler, ranger, cuisiner et vivre avec plus de fluidité."
        dark
      />

      {/* Collection items — ivory bg, dark cards */}
      <section className="bg-ivory">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:py-24">
          <div className="grid gap-4 md:grid-cols-2">
            {collectionItems.map((item, index) => (
              <article
                key={item.title}
                className="border border-bronze/20 bg-charcoal p-8 text-ivory sm:p-10"
              >
                <p className="text-[0.6rem] uppercase tracking-[0.3em] text-bronze">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <h2 className="mt-7 font-serif text-3xl text-ivory sm:text-4xl">{item.title}</h2>
                <p className="mt-5 text-sm leading-7 text-ivory/62">{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Cuisines premium — dark section */}
      <section id="cuisines-premium" className="bg-charcoal text-ivory">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 py-20 sm:px-8 lg:grid-cols-[1fr_1fr] lg:gap-16 lg:py-28">
          <div>
            <p className="text-[0.65rem] uppercase tracking-[0.4em] text-bronze">
              Cuisines premium
            </p>
            <h2 className="mt-3 font-serif text-3xl font-medium leading-tight text-ivory sm:text-4xl lg:text-5xl">
              Une cuisine comme pièce de réception.
            </h2>
          </div>
          <div>
            <p className="text-sm leading-8 text-ivory/65 sm:text-base">
              Ouidesign conçoit des cuisines sur mesure pour villas et riads : volumes clairs,
              rangements invisibles, plans de travail élégants, électroménager intégré et détails
              de menuiserie alignés avec l'architecture intérieure.
            </p>
            <Link
              href={whatsappHref("Bonjour Ouidesign, je souhaite parler d'une cuisine premium.")}
              target="_blank"
              className="mt-8 inline-flex items-center gap-3 bg-bronze px-6 py-4 text-xs uppercase tracking-[0.18em] text-charcoal transition duration-300 hover:bg-ivory"
            >
              Parler cuisine
            </Link>
          </div>
        </div>
      </section>

      <CTASection title="Créons une pièce qui disparaît et se révèle au bon moment." />
    </>
  );
}
