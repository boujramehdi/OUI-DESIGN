import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { CTASection } from "@/components/CTASection";
import { PageHero } from "@/components/PageHero";
import { whatsappHref } from "@/lib/site";

export const metadata: Metadata = {
  title: "À propos de Ouidesign — Architecture intelligente au Maroc",
  description:
    "Ouidesign est une entreprise spécialisée dans la rénovation, l'architecture intérieure, la domotique et l'infrastructure pour villas et riads haut de gamme au Maroc.",
  alternates: {
    canonical: "/a-propos",
  },
};

const stats = [
  { value: "50+", label: "Projets réalisés", sub: "villas, riads & espaces" },
  { value: "8", label: "Expertises maîtrisées", sub: "en un seul interlocuteur" },
  { value: "100%", label: "Sur mesure", sub: "aucune solution générique" },
  { value: "5★", label: "Niveau de finition", sub: "visible & invisible" },
];

const values = [
  {
    title: "Exigence",
    description:
      "Chaque décision visible renvoie à une décision invisible. Nous refusons les raccourcis qui coûtent cher plus tard.",
  },
  {
    title: "Cohérence",
    description:
      "Architecture, technique et esthétique forment un seul langage. Rien n'est ajouté après coup.",
  },
  {
    title: "Discrétion",
    description:
      "Nos clients nous font confiance sur des projets privés et sensibles. Nous respectons cela à chaque étape.",
  },
  {
    title: "Durabilité",
    description:
      "Une villa bien pensée dure, s'apprécie et se maintient. Nous concevons pour le long terme, pas pour l'inauguration.",
  },
];

const expertise = [
  { label: "Rénovation complète de villas et riads", href: "/renovation-villa-maroc", image: "/images/riad-courtyard.png" },
  { label: "Architecture intérieure et direction esthétique", href: "/renovation-villa-maroc#architecture", image: "/images/menuiserie-dressing.png" },
  { label: "Menuiserie sur mesure et mobilier intégré", href: "/menuiserie-sur-mesure-maroc", image: "/images/bureau-marrakech.png" },
  { label: "Smart home, domotique et réseau", href: "/smart-home-maroc", image: "/images/smart-home-2.png" },
  { label: "Piscines et locaux techniques", href: "/piscine-local-technique-maroc", image: "/images/piscine-sunset.png" },
  { label: "Sécurité, caméras et contrôle d'accès", href: "/camera-surveillance-maroc", image: "/images/securiter.jpg" },
  { label: "Climatisation et confort thermique", href: "/climatisation-maroc", image: "/images/Home-smart.png" },
  { label: "Solaire et infrastructure durable", href: "/solaire-villa-maroc", image: "/images/solaire-infrastruction.jpg" },
];

export default function AProposPage() {
  return (
    <>
      <PageHero
        eyebrow="À propos"
        title="Une vision complète de la villa moderne au Maroc."
        text="Ouidesign accompagne les propriétaires exigeants dans la transformation, la conception et l'équipement de leurs villas et riads au Maroc."
        image="/images/villa-sunset.png"
        imageAlt="Villa haut de gamme au Maroc — projet Ouidesign"
        imagePosition="object-center"
      />

      {/* ── Stats strip ─────────────────────────────────────── */}
      <section className="bg-charcoal text-ivory">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="grid grid-cols-2 gap-px bg-bronze/10 lg:grid-cols-4">
            {stats.map((s) => (
              <div
                key={s.label}
                className="reveal group relative overflow-hidden bg-charcoal px-8 py-10 transition-colors duration-500 hover:bg-[rgba(184,146,95,0.08)]"
              >
                <div className="absolute left-0 top-0 h-[2px] w-0 bg-bronze transition-all duration-700 group-hover:w-full" />
                <p className="font-serif text-5xl font-medium text-bronze transition-transform duration-500 group-hover:scale-110 sm:text-6xl">
                  {s.value}
                </p>
                <p className="mt-3 text-[0.6rem] uppercase tracking-[0.28em] text-ivory/60 transition-colors duration-300 group-hover:text-ivory/90">
                  {s.label}
                </p>
                <p className="mt-1 text-[0.52rem] uppercase tracking-[0.16em] text-bronze/40 transition-colors duration-300 group-hover:text-bronze/70">
                  {s.sub}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Histoire ────────────────────────────────────────── */}
      <section className="bg-ivory overflow-hidden">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:py-28">
          <div className="grid gap-16 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20 lg:items-center">

            {/* Left — text */}
            <div>
              <div className="reveal flex items-center gap-4">
                <span className="h-px w-10 bg-bronze/50" />
                <p className="text-[0.62rem] uppercase tracking-[0.4em] text-bronze">Notre histoire</p>
              </div>
              <h2 className="reveal anim-delay-1 mt-5 font-serif text-4xl font-medium leading-[1.02] text-charcoal sm:text-5xl lg:text-[3.5rem]">
                Né de l'exigence<br className="hidden sm:block" /> du terrain.
              </h2>

              {/* Pull quote */}
              <blockquote className="reveal anim-delay-2 relative mt-10 border-l-2 border-bronze pl-6">
                <p className="font-serif text-xl leading-relaxed text-charcoal/75 italic sm:text-2xl">
                  "Les villas du Maroc méritent un interlocuteur unique capable de penser architecture, technique et confort dans un seul projet cohérent."
                </p>
              </blockquote>

              <div className="reveal anim-delay-3 mt-10 space-y-5">
                <p className="text-sm leading-7 text-charcoal/60 sm:text-base sm:leading-8">
                  Trop de chantiers souffrent de la fragmentation — un architecte, un électricien,
                  un plombier, un menuisier, sans personne pour lire le tout. Ouidesign coordonne,
                  conçoit et réalise de bout en bout, avec une responsabilité claire sur le résultat.
                </p>
                <p className="text-sm leading-7 text-charcoal/60 sm:text-base sm:leading-8">
                  Basés au Maroc, nous intervenons dans la Palmeraie, l'Hivernage, Targa, Agdal,
                  Guéliz, la Route de l'Ourika et sur toutes les propriétés qui méritent une
                  attention sans compromis.
                </p>
              </div>

              <div className="reveal anim-delay-4 mt-10">
                <a
                  href={whatsappHref("Bonjour Ouidesign, je souhaite en savoir plus sur votre approche.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 bg-bronze px-6 py-4 text-xs uppercase tracking-[0.18em] text-charcoal transition duration-300 hover:bg-charcoal hover:text-ivory"
                >
                  Parler à l'équipe
                  <span>→</span>
                </a>
              </div>
            </div>

            {/* Right — image */}
            <div className="reveal relative aspect-[3/4] overflow-hidden lg:aspect-auto lg:min-h-[560px]">
              {/* Corner decoration */}
              <div className="absolute right-0 top-0 z-10 h-16 w-px bg-bronze/40" />
              <div className="absolute right-0 top-0 z-10 h-px w-16 bg-bronze/40" />
              <div className="absolute bottom-0 left-0 z-10 h-16 w-px bg-bronze/40" />
              <div className="absolute bottom-0 left-0 z-10 h-px w-16 bg-bronze/40" />

              <Image
                src="/images/riad-courtyard.png"
                alt="Riad réaménagé par Ouidesign au Maroc"
                fill
                sizes="(min-width: 1024px) 45vw, 100vw"
                className="object-cover transition duration-700 hover:scale-[1.03]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/50 via-transparent to-transparent" />

              {/* Caption */}
              <div className="absolute bottom-6 left-6 right-6">
                <div className="h-px w-10 bg-bronze/60 mb-3" />
                <p className="text-[0.5rem] uppercase tracking-[0.28em] text-ivory/50">Réalisation Ouidesign</p>
                <p className="mt-1 font-serif text-base text-ivory/85">Riad réaménagé — Médina</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Approche — full-width dark statement ────────────── */}
      <section className="relative overflow-hidden bg-charcoal text-ivory">
        {/* Ambient glow */}
        <div className="pointer-events-none absolute -left-40 top-1/2 h-[600px] w-[600px] -translate-y-1/2 rounded-full bg-bronze/[0.06] blur-3xl" />
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-bronze/40 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-bronze/20 to-transparent" />

        <div className="relative mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:py-28">
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20 lg:items-center">
            <div className="reveal">
              <p className="text-[0.62rem] uppercase tracking-[0.4em] text-bronze">Notre approche</p>
              <h2 className="mt-5 font-serif text-4xl font-medium leading-[1.02] text-ivory sm:text-5xl lg:text-6xl">
                Un seul regard.<br />Tout le projet.
              </h2>
              <div className="mt-8 h-px w-16 bg-bronze/40" />
            </div>
            <div className="reveal grid gap-6 sm:grid-cols-2">
              {[
                { n: "01", title: "Diagnostic", text: "Lecture de l'existant, cartographie des problèmes techniques et des opportunités esthétiques." },
                { n: "02", title: "Conception", text: "Plans, matériaux, systèmes et chronologie — tout est pensé avant que le chantier commence." },
                { n: "03", title: "Réalisation", text: "Coordination de tous les corps de métier avec un chef de projet Ouidesign sur le terrain." },
                { n: "04", title: "Suivi", text: "Livraison contradictoire, réserves levées, maintenance et accompagnement après livraison." },
              ].map((step) => (
                <div
                  key={step.n}
                  className="group relative overflow-hidden border border-ivory/8 p-6 transition-all duration-500 hover:border-bronze/40 hover:bg-[rgba(184,146,95,0.06)]"
                >
                  <div className="absolute left-0 top-0 h-[2px] w-0 bg-bronze transition-all duration-700 group-hover:w-full" />
                  <p className="font-serif text-3xl font-medium leading-none text-bronze/25 transition-colors duration-300 group-hover:text-bronze/60">
                    {step.n}
                  </p>
                  <h3 className="mt-4 text-[0.62rem] uppercase tracking-[0.24em] text-ivory/70 transition-colors duration-300 group-hover:text-ivory">
                    {step.title}
                  </h3>
                  <p className="mt-3 text-xs leading-6 text-ivory/40 transition-colors duration-300 group-hover:text-ivory/65">
                    {step.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Valeurs ─────────────────────────────────────────── */}
      <section className="bg-ivory overflow-hidden">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:py-28">
          <div className="reveal mb-14 lg:grid lg:grid-cols-[1fr_2fr] lg:gap-16 lg:items-end">
            <div>
              <p className="text-[0.65rem] uppercase tracking-[0.4em] text-bronze">Nos valeurs</p>
              <h2 className="mt-4 font-serif text-4xl font-medium leading-[1.02] text-charcoal sm:text-5xl lg:text-6xl">
                Ce qui guide<br /> chaque décision.
              </h2>
            </div>
            <p className="mt-4 text-sm leading-7 text-charcoal/55 lg:mt-0 lg:max-w-xl">
              Ces quatre principes ne sont pas des slogans. Ce sont les critères que nous appliquons
              à chaque choix technique, esthétique et contractuel — sur chaque projet, sans exception.
            </p>
          </div>

          <div className="grid gap-px bg-bronze/10 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value, index) => (
              <article
                key={value.title}
                className="reveal group relative flex flex-col overflow-hidden bg-charcoal px-8 py-10 transition-colors duration-500 hover:bg-[rgba(184,146,95,0.14)] sm:px-9 sm:py-12"
              >
                <div className="absolute left-0 top-0 h-[2px] w-0 bg-bronze transition-all duration-700 group-hover:w-full" />

                {/* Ghost number */}
                <span
                  className="pointer-events-none absolute -bottom-4 -right-2 select-none font-serif font-medium leading-none text-ivory/[0.03] transition-all duration-700 group-hover:text-bronze/[0.08]"
                  style={{ fontSize: "clamp(6rem, 10vw, 9rem)" }}
                >
                  {String(index + 1).padStart(2, "0")}
                </span>

                <p className="relative font-serif text-5xl font-medium leading-none text-bronze/35 transition-colors duration-500 group-hover:text-bronze/80">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <div className="mt-7 h-px w-8 bg-bronze/30 transition-all duration-500 group-hover:w-full group-hover:bg-bronze/50" />
                <h3 className="relative mt-5 font-serif text-2xl text-ivory transition-all duration-300 group-hover:-translate-y-0.5">
                  {value.title}
                </h3>
                <p className="relative mt-4 flex-1 text-sm leading-7 text-ivory/45 transition-colors duration-300 group-hover:text-ivory/75">
                  {value.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── Domaines d'expertise ────────────────────────────── */}
      <section className="bg-charcoal text-ivory overflow-hidden">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:py-28">
          <div className="reveal mb-14 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-[0.65rem] uppercase tracking-[0.4em] text-bronze">Nos domaines</p>
              <h2 className="mt-4 font-serif text-4xl font-medium leading-tight text-ivory sm:text-5xl">
                8 expertises, 1 vision.
              </h2>
            </div>
            <Link
              href="/expertises"
              className="group inline-flex shrink-0 items-center gap-3 text-[0.6rem] uppercase tracking-[0.22em] text-ivory/40 transition-colors duration-300 hover:text-bronze"
            >
              Voir toutes les expertises
              <span className="h-px w-6 bg-bronze/30 transition-all duration-300 group-hover:w-12 group-hover:bg-bronze" />
            </Link>
          </div>

          <div className="grid gap-px bg-bronze/10 sm:grid-cols-2">
            {expertise.map((item, index) => (
              <Link
                key={item.label}
                href={item.href}
                className="group relative flex items-center gap-5 overflow-hidden border-b border-ivory/5 px-6 py-5 transition-all duration-300 last:border-b-0 hover:bg-[rgba(184,146,95,0.07)] sm:border-b-0"
              >
                {/* Hover image reveal */}
                <div className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                  <Image src={item.image} alt="" fill sizes="50vw" className="object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-r from-charcoal via-charcoal/92 to-charcoal/70" />
                </div>

                {/* Top sweep */}
                <div className="absolute left-0 top-0 h-[1px] w-0 bg-bronze/60 transition-all duration-500 group-hover:w-full" />

                {/* Number */}
                <span className="relative shrink-0 font-serif text-2xl leading-none text-bronze/25 transition-colors duration-300 group-hover:text-bronze/70">
                  {String(index + 1).padStart(2, "0")}
                </span>

                {/* Label */}
                <p className="relative flex-1 text-sm text-ivory/50 transition-colors duration-300 group-hover:text-ivory">
                  {item.label}
                </p>

                {/* Arrow */}
                <span className="relative ml-auto shrink-0 translate-x-2 text-bronze/0 transition-all duration-300 group-hover:translate-x-0 group-hover:text-bronze">
                  →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── Zone d'intervention ─────────────────────────────── */}
      <section className="bg-ivory overflow-hidden">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:py-28">
          <div className="reveal grid gap-12 lg:grid-cols-[1fr_1.4fr] lg:gap-20 lg:items-center">

            <div>
              <p className="text-[0.65rem] uppercase tracking-[0.4em] text-bronze">Ancrage local</p>
              <h2 className="mt-4 font-serif text-4xl font-medium leading-tight text-charcoal sm:text-5xl">
                Le Maroc et ses propriétés d'exception.
              </h2>
              <p className="mt-6 text-sm leading-7 text-charcoal/60 sm:text-base">
                De la Palmeraie à l'Hivernage, de Targa à la Route de l'Ourika, chaque projet
                est une rencontre avec un lieu unique. Nous intervenons là où l'exception
                rencontre l'expertise.
              </p>
              <Link
                href="/contact"
                className="mt-8 inline-flex items-center gap-3 border border-bronze/30 px-6 py-3.5 text-xs uppercase tracking-[0.18em] text-charcoal/70 transition duration-300 hover:border-bronze hover:text-charcoal"
              >
                Nous contacter
                <span>→</span>
              </Link>
            </div>

            <div className="reveal grid grid-cols-2 gap-2 sm:grid-cols-3 lg:grid-cols-2 xl:grid-cols-3">
              {["Palmeraie", "Hivernage", "Targa", "Agdal", "Guéliz", "Route de l'Ourika", "Médina", "Amelkis", "Route de Fès"].map((zone, i) => (
                <div
                  key={zone}
                  className="group relative overflow-hidden border border-bronze/15 px-4 py-3.5 transition-all duration-300 hover:border-bronze/50 hover:bg-bronze/5 cursor-default"
                  style={{ animationDelay: `${i * 60}ms` }}
                >
                  <div className="absolute left-0 top-0 h-[2px] w-0 bg-bronze transition-all duration-500 group-hover:w-full" />
                  <p className="text-[0.58rem] uppercase tracking-[0.2em] text-charcoal/55 transition-colors duration-300 group-hover:text-charcoal">
                    {zone}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CTASection title="Parlons de votre villa au Maroc." />
    </>
  );
}
