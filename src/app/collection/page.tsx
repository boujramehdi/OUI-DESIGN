import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { CTASection } from "@/components/CTASection";
import { PageHero } from "@/components/PageHero";
import { CollectionGrid } from "@/components/CollectionGrid";
import { collectionItems, whatsappHref } from "@/lib/site";

export const metadata: Metadata = {
  title: "Collection mobilier intelligent et cuisines premium",
  description:
    "Collection Ouidesign : Lift Bar, Mini Lift Bar, bureaux assis-debout, cuisines premium et mobilier intelligent pour villas et riads au Maroc.",
  alternates: {
    canonical: "/collection",
  },
};

const collectionWithImages = [
  {
    ...collectionItems[0],
    image: "/images/liftbar.png",
    images: ["/images/liftbar.png", "/images/liftbar-catalog.jpg"],
    imageAlt: "Lift Bar Ouidesign — bar motorisé laque noir pour villa Maroc",
    fit: "object-cover",
    tagline: "Le silence est le nouveau luxe.",
    details: [
      "Laque Piano Noir Intense — 7 couches polissage main",
      "Intérieur Miroir Fumé & éclairage LED 3000K",
      "Vérin électrique silencieux — ouverture < 30 dB",
      "Accueil bouteilles, verrerie & espace de réception",
    ],
  },
  {
    ...collectionItems[1],
    image: "/images/mini-liftbar.png",
    images: ["/images/mini-liftbar.png", "/images/mini-liftbar-catalog.jpg"],
    imageAlt: "Mini Lift Bar Vert Sarcelle Ouidesign — version compacte pour suite ou riad",
    fit: "object-cover",
    tagline: "Le silence devient une signature.",
    details: [
      "Laque Vert Sarcelle intense — finition haute brillance",
      "Plateaux en verre et miroir — LED ambiance 3000K",
      "Vérin électrique ultra-silencieux — ouverture < 30 dB",
      "Format compact — idéal suites, riads & Airbnb",
    ],
  },
  {
    ...collectionItems[2],
    image: "/images/bar-vintage.png",
    images: ["/images/bar-vintage-side.jpg", "/images/bar-vintage.png", "/images/bar-vintage-closed.jpg"],
    imageAlt: "Bar Vintage Ouidesign — fût de chêne avec mécanisme lift pour villa",
    fit: "object-cover",
    tagline: "L'effet de surprise.",
    details: [
      "Fût de chêne authentique — finition naturelle",
      "Mécanisme lift électrique — élévation fluide",
      "Éclairage LED rouge intégré — ambiance speakeasy",
      "Sur commande — personnalisable",
    ],
  },
  {
    ...collectionItems[3],
    image: "/images/bureau-marrakech.png",
    imageAlt: "Bureau assis-debout Ouidesign — poste de travail motorisé dans villa au Maroc",
    fit: "object-cover",
    tagline: "L'invitation à la performance.",
    details: [
      "Plateau anthracite mat & bois naturel",
      "Hauteur réglable électrique — mémorisation positions",
      "Silencieux & connectiques discrètes intégrées",
      "Sur mesure — plateau personnalisable",
    ],
  },
  {
    ...collectionItems[4],
    image: "/images/cuisine-premium.png",
    imageAlt: "Cuisine premium Ouidesign — sur mesure pour villas au Maroc",
    fit: "object-cover",
    tagline: "Une continuité parfaite.",
    details: [
      "Dessin sur mesure — volumes clairs & rangements invisibles",
      "Matériaux nobles : travertin, laque mate, bois",
      "Électroménager intégré & éclairage LED 3000K",
      "Finitions minérales texturées — quincaillerie premium",
    ],
  },
];
// collectionWithImages already gets slug via spread from collectionItems

export default function CollectionPage() {
  return (
    <>
      <PageHero
        eyebrow="Collection"
        title="Mobilier intelligent et pièces signature pour villas premium."
        text="Une collection pensée pour faire apparaître la fonction seulement quand elle est utile : recevoir, travailler, ranger, cuisiner et vivre avec plus de fluidité."
        dark
      />

      {/* Collection items — alternating layout */}
      <section className="bg-ivory">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:py-24">
          <CollectionGrid items={collectionWithImages} />
        </div>
      </section>

      {/* Cuisines premium — dark section */}
      <section id="cuisines-premium" className="bg-charcoal text-ivory">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 py-20 sm:px-8 lg:grid-cols-2 lg:gap-20 lg:py-28">
          <div>
            <p className="text-[0.65rem] uppercase tracking-[0.4em] text-bronze">
              Cuisines premium
            </p>
            <h2 className="mt-3 font-serif text-3xl font-medium leading-tight sm:text-4xl lg:text-5xl">
              Une cuisine comme pièce de réception.
            </h2>
            <p className="mt-6 text-sm leading-7 text-ivory/65 sm:text-base sm:leading-8">
              Ouidesign conçoit des cuisines sur mesure pour villas et riads : volumes clairs,
              rangements invisibles, plans de travail élégants, électroménager intégré et détails
              de menuiserie alignés avec l'architecture intérieure.
            </p>
            <Link
              href={whatsappHref("Bonjour Ouidesign, je souhaite parler d'une cuisine premium.")}
              target="_blank"
              className="mt-8 inline-flex items-center gap-3 bg-bronze px-6 py-4 text-xs uppercase tracking-[0.18em] text-charcoal transition duration-300 hover:bg-ivory"
            >
              Parler de ma cuisine
            </Link>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden lg:aspect-auto">
            <Image
              src="/images/cuisine-premium.png"
              alt="Cuisine premium sur mesure Ouidesign pour villa au Maroc"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      <CTASection title="Créons une pièce qui disparaît et se révèle au bon moment." />
    </>
  );
}
