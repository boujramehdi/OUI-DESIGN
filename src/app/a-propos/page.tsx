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

const steps = [
  { n: "01", title: "Diagnostic", text: "Lecture de l'existant, cartographie des problèmes techniques et des opportunités esthétiques." },
  { n: "02", title: "Conception", text: "Plans, matériaux, systèmes et chronologie — tout est pensé avant que le chantier commence." },
  { n: "03", title: "Réalisation", text: "Coordination de tous les corps de métier avec un chef de projet Ouidesign sur le terrain." },
  { n: "04", title: "Suivi", text: "Livraison contradictoire, réserves levées, maintenance et accompagnement après livraison." },
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

const zones = ["Palmeraie", "Hivernage", "Targa", "Agdal", "Guéliz", "Route de l'Ourika", "Médina", "Amelkis", "Route de Fès"];

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

      {/* ══════════════════════════════════════════════════
          STATS STRIP
      ══════════════════════════════════════════════════ */}
      <section className="bg-charcoal text-ivory">
        <div className="h-px bg-ivory/[0.06]" />
        <div className="grid grid-cols-2 gap-px bg-bronze/10 lg:grid-cols-4">
          {stats.map((s) => (
            <div
              key={s.label}
              className="reveal group relative overflow-hidden bg-charcoal px-7 py-10 transition-colors duration-500 hover:bg-[rgba(184,146,95,0.08)] sm:px-10 sm:py-12"
            >
              {/* Top accent bar */}
              <div className="absolute left-0 top-0 h-[2px] w-0 bg-bronze transition-all duration-700 group-hover:w-full" />
              {/* Bronze glow */}
              <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-700 group-hover:opacity-100"
                style={{ background: "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(188,143,85,0.10) 0%, transparent 70%)" }} />

              <p
                className="relative font-serif font-medium leading-none text-bronze transition-transform duration-500 group-hover:scale-105"
                style={{ fontSize: "clamp(2.4rem, 6vw, 3.5rem)" }}
              >
                {s.value}
              </p>
              <p className="relative mt-3 text-[0.58rem] uppercase tracking-[0.28em] text-ivory/60 transition-colors duration-300 group-hover:text-ivory/90">
                {s.label}
              </p>
              <p className="relative mt-1 text-[0.5rem] uppercase tracking-[0.16em] text-bronze/40 transition-colors duration-300 group-hover:text-bronze/70">
                {s.sub}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          HISTOIRE
      ══════════════════════════════════════════════════ */}
      <section className="overflow-hidden bg-ivory">
        <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8 sm:py-20 lg:py-28">
          <div className="grid gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:gap-20">

            {/* Left — text */}
            <div>
              <div className="reveal flex items-center justify-center gap-4 sm:justify-start">
                <span className="h-px w-10 bg-bronze/50" />
                <p className="text-[0.62rem] uppercase tracking-[0.4em] text-bronze">Notre histoire</p>
                <span className="h-px w-10 bg-bronze/50 sm:hidden" />
              </div>
              <h2 className="reveal anim-delay-1 mt-5 text-center font-serif text-4xl font-medium leading-[1.02] text-charcoal sm:text-left sm:text-5xl lg:text-[3.5rem]">
                Né de l&apos;exigence<br className="hidden sm:block" /> du terrain.
              </h2>

              {/* Pull quote */}
              <blockquote className="reveal anim-delay-2 relative mt-10 border-l-2 border-bronze pl-6">
                <p className="font-serif text-xl leading-relaxed text-charcoal/75 italic sm:text-2xl">
                  &ldquo;Les villas du Maroc méritent un interlocuteur unique capable de penser architecture, technique et confort dans un seul projet cohérent.&rdquo;
                </p>
              </blockquote>

              <div className="reveal anim-delay-3 mt-10 space-y-5">
                <p className="text-sm leading-7 text-charcoal/60 sm:text-base sm:leading-8">
                  Trop de chantiers souffrent de la fragmentation — un architecte, un électricien,
                  un plombier, un menuisier, sans personne pour lire le tout. Ouidesign coordonne,
                  conçoit et réalise de bout en bout, avec une responsabilité claire sur le résultat.
                </p>
                <p className="text-sm leading-7 text-charcoal/60 sm:text-base sm:leading-8">
                  Basés au Maroc, nous intervenons dans la Palmeraie, l&apos;Hivernage, Targa, Agdal,
                  Guéliz, la Route de l&apos;Ourika et sur toutes les propriétés qui méritent une
                  attention sans compromis.
                </p>
              </div>

              <div className="reveal anim-delay-4 mt-10 flex justify-center sm:justify-start">
                <a
                  href={whatsappHref("Bonjour Ouidesign, je souhaite en savoir plus sur votre approche.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 bg-bronze px-7 py-4 text-xs uppercase tracking-[0.18em] text-charcoal transition duration-300 hover:bg-charcoal hover:text-ivory"
                >
                  Parler à l&apos;équipe
                  <span>→</span>
                </a>
              </div>
            </div>

            {/* Right — image */}
            <div className="lg-dark-panel reveal relative aspect-[3/4] overflow-hidden lg:aspect-auto lg:min-h-[560px]">
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
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/55 via-transparent to-transparent" />

              <div className="absolute bottom-6 left-6 right-6">
                <div className="mb-3 h-px w-10 bg-bronze/60" />
                <p className="text-[0.5rem] uppercase tracking-[0.28em] text-ivory/50">Réalisation Ouidesign</p>
                <p className="mt-1 font-serif text-base text-ivory/85">Riad réaménagé — Médina</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          APPROCHE — dark cinematic section
      ══════════════════════════════════════════════════ */}
      <section className="relative overflow-hidden bg-charcoal text-ivory">
        <div className="pointer-events-none absolute -left-40 top-1/2 h-[600px] w-[600px] -translate-y-1/2 rounded-full bg-bronze/[0.06] blur-3xl" />
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-bronze/40 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-bronze/20 to-transparent" />

        {/* ── MOBILE layout ── */}
        <div className="sm:hidden">
          {/* Heading */}
          <div className="relative px-5 pb-8 pt-12 text-center">
            <p className="text-[0.62rem] uppercase tracking-[0.4em] text-bronze">Notre approche</p>
            <h2 className="mt-5 font-serif text-4xl font-medium leading-[1.02] text-ivory">
              Un seul regard.<br />Tout le projet.
            </h2>
            <div className="mx-auto mt-6 h-px w-16 bg-bronze/40" />
          </div>

          {/* Mobile snap carousel */}
          <div className="relative">
            <div className="flex items-start snap-x snap-mandatory overflow-x-auto scrollbar-hide gap-px">
              {steps.map((step) => (
                <div
                  key={step.n}
                  className="group snap-start shrink-0 w-[82vw] relative overflow-hidden border border-ivory/[0.08] bg-charcoal p-7 transition-colors duration-300 active:bg-[#141412] active:border-bronze/30"
                >
                  <div className="absolute left-0 top-0 h-[2px] w-0 bg-bronze transition-all duration-500 group-active:w-full" />
                  <span aria-hidden="true"
                    className="pointer-events-none absolute -bottom-2 -right-1 select-none font-serif font-medium leading-none text-ivory/[0.04]"
                    style={{ fontSize: "clamp(5rem, 14vw, 8rem)", letterSpacing: "-0.03em" }}>
                    {step.n}
                  </span>
                  <p className="relative font-serif text-4xl font-medium leading-none text-bronze/30 transition-colors duration-300 group-active:text-bronze/70">
                    {step.n}
                  </p>
                  <h3 className="relative mt-5 text-[0.65rem] uppercase tracking-[0.28em] text-ivory/70 transition-colors duration-300 group-active:text-ivory">
                    {step.title}
                  </h3>
                  <div className="relative mt-3 h-px w-6 bg-bronze/30 transition-all duration-500 group-active:w-12 group-active:bg-bronze/70" />
                  <p className="relative mt-4 text-[0.78rem] leading-[1.85] text-ivory/65 transition-colors duration-300 group-active:text-ivory/85">
                    {step.text}
                  </p>
                </div>
              ))}
              <div className="shrink-0 w-5" aria-hidden="true" />
            </div>
            <div className="pointer-events-none absolute inset-y-0 right-0 w-14 bg-gradient-to-l from-charcoal to-transparent" />
          </div>
          <div className="pb-10" />
        </div>

        {/* ── DESKTOP layout ── */}
        <div className="relative hidden sm:block">
          <div className="mx-auto max-w-7xl px-8 py-20 lg:py-28">
            <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-center lg:gap-20">
              {/* Heading */}
              <div className="text-left">
                <p className="text-[0.62rem] uppercase tracking-[0.4em] text-bronze">Notre approche</p>
                <h2 className="mt-5 font-serif text-5xl font-medium leading-[1.02] text-ivory lg:text-6xl">
                  Un seul regard.<br />Tout le projet.
                </h2>
                <div className="mt-8 h-px w-16 bg-bronze/40" />
              </div>

              {/* Desktop 2×2 grid */}
              <div className="reveal grid grid-cols-2 gap-px bg-ivory/[0.05]">
                {steps.map((step) => (
                  <div
                    key={step.n}
                    className="group relative overflow-hidden bg-charcoal p-8 transition-all duration-500 hover:bg-[#141412]"
                  >
                    <div className="absolute left-0 top-0 h-0 w-[2px] bg-bronze/70 transition-all duration-700 group-hover:h-full" />
                    <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-700 group-hover:opacity-100"
                      style={{ background: "radial-gradient(ellipse 90% 50% at 0% 50%, rgba(188,143,85,0.08) 0%, transparent 70%)" }} />
                    <span aria-hidden="true"
                      className="pointer-events-none absolute -bottom-2 -right-1 select-none font-serif font-medium leading-none text-bronze/0 transition-all duration-700 group-hover:text-bronze/[0.15]"
                      style={{ fontSize: "clamp(5rem, 8vw, 7rem)", letterSpacing: "-0.03em" }}>
                      {step.n}
                    </span>
                    <p className="relative font-serif text-4xl font-medium leading-none text-bronze/25 transition-colors duration-300 group-hover:text-bronze/70">
                      {step.n}
                    </p>
                    <h3 className="relative mt-5 text-[0.62rem] uppercase tracking-[0.28em] text-ivory/70 transition-colors duration-300 group-hover:text-ivory">
                      {step.title}
                    </h3>
                    <div className="relative mt-3 h-px w-6 bg-bronze/30 transition-all duration-500 group-hover:w-14 group-hover:bg-bronze/70" />
                    <p className="relative mt-4 text-[0.8rem] leading-[1.9] text-ivory/65 transition-colors duration-300 group-hover:text-ivory/85">
                      {step.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          VALEURS
      ══════════════════════════════════════════════════ */}
      <section className="overflow-hidden bg-ivory">
        <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8 sm:py-20 lg:py-28">

          {/* Header */}
          <div className="reveal mb-6 text-center sm:mb-10 sm:text-left lg:mb-14 lg:grid lg:grid-cols-[1fr_2fr] lg:items-end lg:gap-16">
            <div>
              <p className="text-[0.65rem] uppercase tracking-[0.4em] text-bronze">Nos valeurs</p>
              <h2 className="mt-4 font-serif text-4xl font-medium leading-[1.02] text-charcoal sm:text-5xl lg:text-6xl">
                Ce qui guide<br /> chaque décision.
              </h2>
            </div>
            <p className="mx-auto mt-5 max-w-[30ch] text-sm leading-7 text-charcoal/55 sm:mx-0 sm:mt-6 sm:max-w-none lg:text-left">
              Ces quatre principes ne sont pas des slogans. Ce sont les critères que nous appliquons
              à chaque choix technique, esthétique et contractuel — sur chaque projet, sans exception.
            </p>
          </div>

          {/* ── MOBILE: snap carousel ── */}
          <div className="relative -mx-5 sm:hidden">
            <div className="flex items-start snap-x snap-mandatory overflow-x-auto overflow-y-hidden scrollbar-hide gap-px px-5 pb-2">
              {values.map((value, index) => (
                <article
                  key={value.title}
                  className="lg-dark-panel group snap-start shrink-0 w-[82vw] h-[310px] relative flex flex-col overflow-hidden bg-charcoal px-7 py-8 transition-colors duration-300 active:bg-[#141412]"
                >
                  {/* Left accent */}
                  <div className="absolute left-0 top-0 h-0 w-[2px] bg-bronze/70 transition-all duration-500 group-active:h-full" />
                  {/* Bronze glow */}
                  <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-active:opacity-100"
                    style={{ background: "radial-gradient(ellipse 90% 50% at 50% 100%, rgba(188,143,85,0.10) 0%, transparent 70%)" }} />
                  {/* Ghost number */}
                  <span aria-hidden="true"
                    className="pointer-events-none absolute -bottom-3 -right-1 select-none font-serif font-medium leading-none text-ivory/[0.04] transition-colors duration-500 group-active:text-bronze/[0.12]"
                    style={{ fontSize: "clamp(5.5rem, 18vw, 8rem)" }}>
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <p className="relative font-serif text-4xl font-medium leading-none text-bronze/30 transition-colors duration-500 group-active:text-bronze/75">
                    {String(index + 1).padStart(2, "0")}
                  </p>
                  <div className="relative mt-5 h-px w-8 bg-bronze/30 transition-all duration-500 group-active:w-14 group-active:bg-bronze/65" />
                  <h3 className="relative mt-4 font-serif text-2xl text-ivory transition-colors duration-300 group-active:text-bronze/90">
                    {value.title}
                  </h3>
                  <p className="relative mt-3 text-[0.8rem] leading-[1.9] text-ivory/65 transition-colors duration-300 group-active:text-ivory/85">
                    {value.description}
                  </p>
                  <p className="relative mt-6 translate-y-1 text-[0.5rem] uppercase tracking-[0.3em] text-bronze/0 opacity-0 transition-all duration-500 group-active:translate-y-0 group-active:text-bronze/70 group-active:opacity-100">
                    ✦ Principe Ouidesign
                  </p>
                </article>
              ))}
              <div className="shrink-0 w-5" aria-hidden="true" />
            </div>
            <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-ivory to-transparent" />
          </div>

          {/* ── DESKTOP: 4-col grid ── */}
          <div className="hidden gap-px bg-bronze/10 sm:grid sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value, index) => (
              <article
                key={value.title}
                className="lg-dark-panel reveal group relative flex flex-col overflow-hidden bg-charcoal px-8 py-10 transition-colors duration-500 hover:bg-[#141412] sm:px-9 sm:py-12"
              >
                {/* Left accent bar */}
                <div className="absolute left-0 top-0 h-0 w-[2px] bg-bronze/70 transition-all duration-700 group-hover:h-full" />
                {/* Bronze glow */}
                <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-700 group-hover:opacity-100"
                  style={{ background: "radial-gradient(ellipse 90% 60% at 50% 100%, rgba(188,143,85,0.10) 0%, transparent 70%)" }} />
                {/* Ghost number */}
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute -bottom-4 -right-2 select-none font-serif font-medium leading-none text-bronze/0 transition-all duration-700 group-hover:text-bronze/[0.18]"
                  style={{ fontSize: "clamp(6rem, 10vw, 9rem)" }}
                >
                  {String(index + 1).padStart(2, "0")}
                </span>

                <p className="relative font-serif text-5xl font-medium leading-none text-bronze/30 transition-colors duration-500 group-hover:text-bronze/75">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <div className="relative mt-6 h-px w-8 bg-bronze/30 transition-all duration-500 group-hover:w-16 group-hover:bg-bronze/65" />
                <h3 className="relative mt-5 font-serif text-2xl text-ivory transition-colors duration-300 group-hover:text-bronze/90">
                  {value.title}
                </h3>
                <p className="relative mt-4 flex-1 text-[0.8rem] leading-[1.9] text-ivory/65 transition-colors duration-300 group-hover:text-ivory/85">
                  {value.description}
                </p>
                <p className="relative mt-6 translate-y-1 text-[0.5rem] uppercase tracking-[0.3em] text-bronze/0 opacity-0 transition-all duration-700 group-hover:translate-y-0 group-hover:text-bronze/70 group-hover:opacity-100">
                  ✦ Principe Ouidesign
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          DOMAINES D'EXPERTISE
      ══════════════════════════════════════════════════ */}
      <section className="overflow-hidden bg-charcoal text-ivory">
        <div className="h-px bg-ivory/[0.06]" />

        <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8 sm:py-20 lg:py-28">

          {/* Header */}
          <div className="reveal mb-10 flex flex-col items-center gap-4 text-center sm:flex-row sm:items-end sm:justify-between sm:text-left">
            <div>
              <p className="text-[0.65rem] uppercase tracking-[0.4em] text-bronze">Nos domaines</p>
              <h2 className="mt-4 font-serif text-4xl font-medium leading-tight text-ivory sm:text-5xl">
                8 expertises,<br className="sm:hidden" /> 1 vision.
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

          {/* ── MOBILE: image snap carousel ── */}
          <div className="relative -mx-5 sm:hidden">
            <div className="flex snap-x snap-mandatory overflow-x-auto overflow-y-hidden scrollbar-hide gap-px">
              {expertise.map((item, index) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="group/exp snap-start shrink-0 w-[72vw] relative overflow-hidden"
                >
                  {/* Image */}
                  <div className="lg-dark-panel relative h-[58vw] overflow-hidden">
                    <Image
                      src={item.image}
                      alt={item.label}
                      fill
                      sizes="72vw"
                      className="object-cover transition-all duration-700 group-hover/exp:scale-[1.06] group-hover/exp:brightness-105 group-hover/exp:saturate-[1.08] group-active:scale-[1.04]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-charcoal/90 via-charcoal/20 to-transparent transition-opacity duration-500 group-hover/exp:opacity-70" />
                    {/* Bronze atmospheric glow */}
                    <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover/exp:opacity-100 group-active:opacity-100"
                      style={{ background: "radial-gradient(ellipse 80% 50% at 50% 100%, rgba(188,143,85,0.22) 0%, transparent 70%)" }} />
                    {/* Shimmer */}
                    <div className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-ivory/[0.10] to-transparent transition-transform duration-[850ms] group-hover/exp:translate-x-full group-active:translate-x-full" />
                    {/* Bronze bottom border */}
                    <div className="absolute inset-x-0 bottom-0 h-[2px] origin-left scale-x-0 bg-bronze/70 transition-transform duration-500 group-hover/exp:scale-x-100 group-active:scale-x-100" />
                    {/* Number */}
                    <span className="absolute right-3 top-3 font-serif text-[2rem] font-medium leading-none text-ivory/[0.08] transition-all duration-500 group-hover/exp:text-ivory/[0.18]">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    {/* Slide-up CTA */}
                    <div className="absolute inset-x-0 bottom-0 flex translate-y-full items-center justify-between px-4 pb-3 pt-8 transition-transform duration-500 group-hover/exp:translate-y-0"
                      style={{ background: "linear-gradient(to top, rgba(13,14,16,0.90) 0%, transparent 100%)" }}>
                      <p className="font-serif text-sm font-medium leading-tight text-ivory">{item.label}</p>
                      <span className="flex h-7 w-7 shrink-0 items-center justify-center border border-ivory/20 text-xs text-ivory/70 transition-colors duration-300 group-hover/exp:border-bronze group-hover/exp:text-bronze">→</span>
                    </div>
                  </div>

                  {/* Text panel */}
                  <div className="bg-charcoal px-4 py-4 transition-colors duration-300 group-hover/exp:bg-[#141412] group-active:bg-[#141412]">
                    <p className="text-[0.7rem] leading-snug text-ivory/55 transition-colors duration-300 group-hover/exp:text-bronze/80 group-active:text-ivory/85">
                      {item.label}
                    </p>
                    <div className="mt-3 h-px w-6 bg-bronze/30 transition-all duration-500 group-hover/exp:w-12 group-hover/exp:bg-bronze/60" />
                    <div className="mt-2.5 flex items-center gap-2 text-[0.44rem] uppercase tracking-[0.28em] text-bronze/50 transition-colors duration-300 group-hover/exp:text-bronze group-active:text-bronze">
                      <span>Découvrir</span>
                      <span className="transition-transform duration-300 group-hover/exp:translate-x-1 group-active:translate-x-1">→</span>
                    </div>
                  </div>
                </Link>
              ))}
              <div className="shrink-0 w-5" aria-hidden="true" />
            </div>
            <div className="pointer-events-none absolute inset-y-0 right-0 w-14 bg-gradient-to-l from-charcoal to-transparent" />
          </div>

          {/* ── DESKTOP: list with hover image reveal ── */}
          <div className="hidden gap-px bg-bronze/10 sm:grid sm:grid-cols-2">
            {expertise.map((item, index) => (
              <Link
                key={item.label}
                href={item.href}
                className="group relative flex items-center gap-5 overflow-hidden border-b border-ivory/[0.05] px-6 py-5 transition-all duration-300 last:border-b-0 hover:bg-[rgba(184,146,95,0.07)] sm:border-b-0"
              >
                {/* Hover image reveal */}
                <div className="lg-dark-panel absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                  <Image src={item.image} alt="" fill sizes="50vw" className="object-cover object-center brightness-[0.85]" />
                  <div className="absolute inset-0 bg-gradient-to-r from-charcoal/90 via-charcoal/55 to-transparent" />
                </div>
                {/* Top sweep */}
                <div className="absolute left-0 top-0 h-[1px] w-0 bg-bronze/60 transition-all duration-500 group-hover:w-full" />

                <span className="relative shrink-0 font-serif text-2xl leading-none text-bronze/25 transition-colors duration-300 group-hover:text-bronze/70">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <p className="relative flex-1 text-sm text-ivory/50 transition-colors duration-300 group-hover:text-ivory">
                  {item.label}
                </p>
                <span className="relative ml-auto shrink-0 translate-x-2 text-bronze/0 transition-all duration-300 group-hover:translate-x-0 group-hover:text-bronze">
                  →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          ZONE D'INTERVENTION
      ══════════════════════════════════════════════════ */}
      <section className="overflow-hidden bg-ivory">
        <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8 sm:py-20 lg:py-28">
          <div className="reveal grid gap-12 lg:grid-cols-[1fr_1.4fr] lg:items-center lg:gap-20">

            {/* Left */}
            <div className="text-center sm:text-left">
              <p className="text-[0.65rem] uppercase tracking-[0.4em] text-bronze">Ancrage local</p>
              <h2 className="mt-4 font-serif text-4xl font-medium leading-tight text-charcoal sm:text-5xl">
                Le Maroc et ses propriétés d&apos;exception.
              </h2>
              <div className="mx-auto mt-6 h-px w-12 bg-bronze/30 sm:mx-0" />
              <p className="mt-6 text-sm leading-7 text-charcoal/60 sm:text-base">
                De la Palmeraie à l&apos;Hivernage, de Targa à la Route de l&apos;Ourika, chaque projet
                est une rencontre avec un lieu unique. Nous intervenons là où l&apos;exception
                rencontre l&apos;expertise.
              </p>
              <div className="mt-8 flex justify-center sm:justify-start">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-3 border border-bronze/30 px-6 py-3.5 text-xs uppercase tracking-[0.18em] text-charcoal/70 transition duration-300 hover:border-bronze hover:text-charcoal"
                >
                  Nous contacter
                  <span>→</span>
                </Link>
              </div>
            </div>

            {/* Right — zones grid */}
            <div className="reveal grid grid-cols-2 gap-2 sm:grid-cols-3 lg:grid-cols-2 xl:grid-cols-3">
              {zones.map((zone, i) => (
                <div
                  key={zone}
                  className="group relative overflow-hidden border border-bronze/15 px-4 py-4 transition-all duration-300 hover:border-bronze/50 hover:bg-bronze/5 cursor-default"
                  style={{ animationDelay: `${i * 60}ms` }}
                >
                  <div className="absolute left-0 top-0 h-[2px] w-0 bg-bronze transition-all duration-500 group-hover:w-full" />
                  <p className="text-[0.6rem] uppercase tracking-[0.2em] text-charcoal/55 transition-colors duration-300 group-hover:text-charcoal">
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
