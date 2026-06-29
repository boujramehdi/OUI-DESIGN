import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { CTASection } from "@/components/CTASection";
import { PageHero } from "@/components/PageHero";
import { CollectionGrid } from "@/components/CollectionGrid";
import { collectionItems, whatsappHref } from "@/lib/site";
import { Container } from "@/components/Container";

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

const pillars = [
  { n: "05", label: "Pièces signature", sub: "dans la collection" },
  { n: "7+", label: "Couches de finition", sub: "polissage à la main" },
  { n: "<30", label: "Décibels max", sub: "mécanisme silencieux" },
  { n: "100%", label: "Sur mesure", sub: "configuré pour vous" },
];

export default function CollectionPage() {
  return (
    <>
      <PageHero
        eyebrow="Collection"
        title="Mobilier intelligent et pièces signature pour villas premium."
        text="Une collection pensée pour faire apparaître la fonction seulement quand elle est utile : recevoir, travailler, ranger, cuisiner et vivre avec plus de fluidité."
        dark
      />

      {/* ── PILLARS STRIP ── */}
      <section className="bg-charcoal text-ivory">
        <div className="h-px bg-ivory/[0.06]" />
        <Container>
        <div className="grid grid-cols-2 gap-px bg-bronze/10 lg:grid-cols-4">
          {pillars.map((s) => (
            <div
              key={s.label}
              className="reveal group relative overflow-hidden bg-charcoal px-6 py-10 transition-colors duration-500 hover:bg-[rgba(184,146,95,0.08)] sm:px-10 sm:py-12"
            >
              <div className="absolute left-0 top-0 h-[2px] w-0 bg-bronze transition-all duration-700 group-hover:w-full" />
              <div
                className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-700 group-hover:opacity-100"
                style={{ background: "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(188,143,85,0.10) 0%, transparent 70%)" }}
              />
              <p
                className="relative font-serif font-medium leading-none text-bronze transition-transform duration-500 group-hover:scale-105"
                style={{ fontSize: "clamp(2.2rem, 5vw, 3.2rem)" }}
              >
                {s.n}
              </p>
              <p className="relative mt-3 text-[0.56rem] uppercase tracking-[0.28em] text-ivory/58 transition-colors duration-300 group-hover:text-ivory/90">
                {s.label}
              </p>
              <p className="relative mt-1 text-[0.48rem] uppercase tracking-[0.16em] text-bronze/40 transition-colors duration-300 group-hover:text-bronze/70">
                {s.sub}
              </p>
            </div>
          ))}
        </div>
        </Container>
      </section>

      {/* ── COLLECTION HEADER ── */}
      <section className="bg-charcoal text-ivory">
        <Container className="py-20 md:py-28">
          <div className="flex flex-col items-center gap-6 text-center sm:flex-row sm:items-end sm:justify-between sm:text-left">
            <div>
              <div className="flex items-center justify-center gap-4 sm:justify-start">
                <span className="h-px w-8 bg-bronze/50" />
                <p className="text-[0.6rem] uppercase tracking-[0.4em] text-bronze">Nos pièces</p>
                <span className="h-px w-8 bg-bronze/50 sm:hidden" />
              </div>
              <h2 className="mt-4 font-serif text-3xl font-medium leading-tight text-ivory sm:text-4xl lg:text-5xl">
                Chaque objet cache<br className="hidden sm:block" /> un mécanisme.
              </h2>
            </div>
            <p className="max-w-[28ch] text-[0.78rem] leading-7 text-ivory/40 sm:max-w-[26ch] sm:text-right">
              Conçus pour vivre dans les plus belles propriétés du Maroc, chaque pièce est produite sur commande.
            </p>
          </div>
        </Container>
        <div className="h-px bg-ivory/[0.06]" />
      </section>

      {/* ── COLLECTION GRID ── */}
      <section className="bg-charcoal">
        <Container>
          <CollectionGrid items={collectionWithImages} />
        </Container>
      </section>

      {/* ── CUISINES PREMIUM ── */}
      <section id="cuisines-premium" className="overflow-hidden bg-charcoal text-ivory">
        <div className="h-px bg-ivory/[0.06]" />
        <Container className="py-24 md:py-32">
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-20 lg:items-center">

            {/* Text */}
            <div className="text-center sm:text-left">
              <div className="flex items-center justify-center gap-4 sm:justify-start">
                <span className="h-px w-8 bg-bronze/50" />
                <p className="text-[0.6rem] uppercase tracking-[0.4em] text-bronze">Cuisines premium</p>
                <span className="h-px w-8 bg-bronze/50 sm:hidden" />
              </div>
              <h2 className="mt-5 font-serif text-3xl font-medium leading-tight text-ivory sm:text-4xl lg:text-5xl">
                Une cuisine comme<br className="hidden sm:block" /> pièce de réception.
              </h2>
              <div className="mx-auto mt-6 h-px w-12 bg-bronze/30 sm:mx-0" />
              <p className="mx-auto mt-6 max-w-[30ch] text-sm leading-7 text-ivory/60 sm:mx-0 sm:max-w-none sm:text-base sm:leading-8">
                Ouidesign conçoit des cuisines sur mesure pour villas et riads : volumes clairs,
                rangements invisibles, plans de travail élégants, électroménager intégré et détails
                de menuiserie alignés avec l&apos;architecture intérieure.
              </p>

              {/* Feature list */}
              <ul className="mt-8 space-y-3">
                {[
                  "Conception sur plan avec architecte d'intérieur",
                  "Matériaux nobles : travertin, laque mate, bois massif",
                  "Électroménager intégré & éclairage LED 3000K",
                ].map((f) => (
                  <li key={f} className="flex items-start gap-3 text-xs leading-6 text-ivory/55 sm:text-sm">
                    <span className="mt-2 h-px w-5 shrink-0 bg-bronze/50" />
                    {f}
                  </li>
                ))}
              </ul>

              <div className="mt-10 flex justify-center sm:justify-start">
                <Link
                  href={whatsappHref("Bonjour Ouidesign, je souhaite parler d'une cuisine premium.")}
                  target="_blank"
                  className="inline-flex items-center gap-3 bg-bronze px-7 py-4 text-xs uppercase tracking-[0.18em] text-charcoal transition duration-300 hover:bg-ivory"
                >
                  Parler de ma cuisine
                  <span>→</span>
                </Link>
              </div>
            </div>

            {/* Image with Ken Burns */}
            <div className="lg-dark-panel group relative aspect-[4/3] overflow-hidden lg:aspect-auto lg:min-h-[520px]">
              {/* Corner brackets */}
              <div className="absolute right-0 top-0 z-10 h-14 w-px bg-bronze/40" />
              <div className="absolute right-0 top-0 z-10 h-px w-14 bg-bronze/40" />
              <div className="absolute bottom-0 left-0 z-10 h-14 w-px bg-bronze/40" />
              <div className="absolute bottom-0 left-0 z-10 h-px w-14 bg-bronze/40" />

              <Image
                src="/images/cuisine-premium.png"
                alt="Cuisine premium sur mesure Ouidesign pour villa au Maroc"
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover opacity-90 transition-transform duration-[10s] ease-out [animation:heroKenBurns_12s_ease-out_forwards] group-hover:scale-[1.04]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 via-transparent to-transparent" />

              {/* Caption */}
              <div className="absolute bottom-6 left-6 right-6">
                <div className="mb-2 h-px w-8 bg-bronze/60" />
                <p className="text-[0.48rem] uppercase tracking-[0.28em] text-ivory/50">Réalisation Ouidesign</p>
                <p className="mt-1 font-serif text-sm text-ivory/80">Cuisine sur mesure — Villa Marrakech</p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <CTASection title="Créons une pièce qui disparaît et se révèle au bon moment." />
    </>
  );
}
