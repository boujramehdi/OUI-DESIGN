import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { CTASection } from "@/components/CTASection";
import { GalleryStrip } from "@/components/GalleryStrip";
import { whatsappHref } from "@/lib/site";

export const metadata: Metadata = {
  title: "Réalisations villas et riads au Maroc — Ouidesign",
  description:
    "Découvrez les typologies de projets Ouidesign : villas familiales, riads de réception, propriétés Airbnb premium et maisons d'hôtes au Maroc.",
  alternates: { canonical: "/realisations" },
};

const stats = [
  { value: "50+",  label: "Projets réalisés" },
  { value: "8",    label: "Expertises maîtrisées" },
  { value: "100%", label: "Coordination totale" },
  { value: "5★",   label: "Niveau de finition" },
];

const projectTypes = [
  {
    title: "Villa familiale",
    kicker: "Résidence principale",
    text: "Réorganisation des espaces de vie, cuisine premium, menuiserie intégrée, climatisation et scénarios smart home pour une villa qui fonctionne au quotidien avec fluidité.",
    tags: ["Rénovation", "Menuiserie", "Smart Home", "Climatisation"],
    image: "/images/Hero-villa.jpg",
    imagePos: "object-center",
    href: "/renovation-villa-maroc",
  },
  {
    title: "Riad de réception",
    kicker: "Patrimoine & hospitalité",
    text: "Lecture des circulations, traitement des ambiances, éclairage scénarisé, sécurité discrète et confort des suites pour un riad qui impressionne sans perdre son âme.",
    tags: ["Architecture intérieure", "Éclairage", "Sécurité", "Finitions"],
    image: "/images/riad-courtyard.png",
    imagePos: "object-center",
    href: "/expertises",
  },
  {
    title: "Villa Airbnb premium",
    kicker: "Exploitation locative",
    text: "Accès simplifiés, caméras adaptées, climatisation fiable, mobilier robuste et expérience d'accueil fluide pour une propriété qui génère des revenus au-dessus du marché.",
    tags: ["Domotique", "Accès connectés", "Smart Home", "Mobilier"],
    image: "/images/villa-sunset.png",
    imagePos: "object-center",
    href: "/smart-home-maroc",
  },
  {
    title: "Maison d'hôtes",
    kicker: "Infrastructure complète",
    text: "Infrastructure technique, piscine, local technique, réseau, maintenance et espaces conçus pour l'exploitation long terme avec des équipes extérieures.",
    tags: ["Piscine", "Infrastructure", "Solaire", "Sécurité"],
    image: "/images/piscine-sunset.png",
    imagePos: "object-bottom",
    href: "/piscine-local-technique-maroc",
  },
  {
    title: "Villa neuve clé-en-main",
    kicker: "Coordination totale",
    text: "Suivi de chantier, coordination des corps de métier, direction esthétique, équipements et mise en service complète — un seul interlocuteur du gros œuvre aux finitions.",
    tags: ["Gros œuvre", "Menuiserie", "Technique", "Finitions"],
    image: "/images/riad&villa.jpg",
    imagePos: "object-center",
    href: "/renovation-villa-maroc",
  },
  {
    title: "Rénovation partielle ciblée",
    kicker: "Intervention précise",
    text: "Cuisine, dressing, domotique ou piscine : Ouidesign peut intervenir sur un seul lot avec la même exigence que sur une rénovation complète.",
    tags: ["Cuisine", "Dressing", "Piscine", "Domotique"],
    image: "/images/menuiserie-dressing.png",
    imagePos: "object-center",
    href: "/expertises",
  },
];

const standards = [
  {
    title: "Coordination totale",
    ghost: "Coord.",
    description: "Un interlocuteur unique pour tous les corps de métier. Pas de confusion, pas de doublons, pas d'interface manquante.",
  },
  {
    title: "Technique anticipée",
    ghost: "Technique",
    description: "Réseaux, gaines, tableau électrique, domotique : tout est pensé avant que les murs ferment.",
  },
  {
    title: "Finitions",
    ghost: "Finitions",
    description: "Ce qu'on voit doit être beau. Ce qu'on ne voit pas doit être fiable. Les deux sont aussi importants.",
  },
  {
    title: "Durabilité marocaine",
    ghost: "Durable",
    description: "Matériaux, équipements et systèmes sélectionnés pour résister au climat du Maroc sur le long terme.",
  },
  {
    title: "Confidentialité garantie",
    ghost: "Privé",
    description: "Les projets de nos clients sont privés. Nous ne publions aucune photo sans accord explicite et signé.",
  },
  {
    title: "Suivi après livraison",
    ghost: "Suivi",
    description: "Notre engagement ne s'arrête pas à la réception des travaux. Maintenance, réglages et conseils inclus.",
  },
];

export default function RealisationsPage() {
  return (
    <>

      {/* ══════════════════════════════════════════════════
          01 — HERO · full-bleed cover
      ══════════════════════════════════════════════════ */}
      <section className="lg-dark-panel group/hero relative min-h-[100svh] bg-charcoal text-ivory overflow-hidden">

        {/* Background image — Ken Burns slow zoom-out + subtle hover scale */}
        <div className="absolute inset-0 overflow-hidden">
          <Image
            src="/images/villa-sunset.png"
            alt="Villa haut de gamme réalisée par Ouidesign au Maroc"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center [animation:heroKenBurns_12s_ease-out_forwards] transition-transform duration-[2000ms] group-hover/hero:scale-[1.03]"
          />
        </div>

        {/* Layered overlays */}
        <div className="absolute inset-0 bg-charcoal/60" />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/30 to-charcoal/75" />
        {/* Bronze atmospheric glow — bottom */}
        <div className="absolute inset-0 opacity-0 transition-opacity duration-[1500ms] group-hover/hero:opacity-100"
          style={{ background: "radial-gradient(ellipse 80% 45% at 50% 100%, rgba(188,143,85,0.12) 0%, transparent 70%)" }} />

        {/* Eyebrow — pinned at top below nav */}
        <div className="absolute inset-x-0 top-[90px]">
          <div className="h-px bg-ivory/[0.07]" />
          <div className="flex items-center justify-center gap-4 px-5 py-5 sm:justify-start sm:px-14">
            <span className="hero-line-grow inline-block h-px bg-bronze/65 sm:hidden" />
            <span className="hero-line-grow inline-block h-px bg-bronze/65" />
            <p className="text-[0.58rem] uppercase tracking-[0.42em] text-bronze">Réalisations · Ouidesign</p>
            <span className="hero-line-grow inline-block h-px bg-bronze/65 sm:hidden" />
          </div>
        </div>

        {/* Main content — pushed to bottom */}
        <div className="relative flex min-h-[100svh] flex-col justify-end">

          {/* Title + text block */}
          <div className="flex flex-col items-center px-5 pb-8 text-center sm:items-start sm:px-14 sm:text-left lg:max-w-[60%]">
            <p className="mb-5 text-[0.48rem] uppercase tracking-[0.5em] text-ivory/22">
              50+ projets · Maroc
            </p>

            <h1
              className="font-serif font-medium leading-[0.95] text-ivory"
              style={{ fontSize: "clamp(2.4rem, 7.5vw, 5.2rem)", letterSpacing: "-0.025em" }}
            >
              Des projets<br />pensés pour<br />durer.
            </h1>

            <div className="mt-6 h-px w-12 bg-bronze/40" />

            <p className="mt-5 max-w-[26ch] text-[0.78rem] leading-[1.9] text-ivory/40 sm:max-w-[38ch]">
              Les projets Ouidesign sont souvent confidentiels. Cette page présente les
              typologies d&apos;intervention et les standards appliqués à chaque propriété.
            </p>
          </div>

          {/* Stats bar */}
          <div className="border-t border-ivory/[0.08] pb-10">
            <div className="grid grid-cols-2 divide-x divide-y divide-ivory/[0.07] sm:grid-cols-4 sm:divide-y-0 sm:divide-ivory/[0.08]">
              {stats.map((s) => (
                <div key={s.label} className="px-5 pt-6 sm:px-6 sm:pt-7 sm:first:pl-0">
                  <p
                    className="font-serif font-medium leading-none text-bronze"
                    style={{ fontSize: "clamp(1.4rem, 2.8vw, 2.4rem)" }}
                  >
                    {s.value}
                  </p>
                  <p className="mt-2 text-[0.41rem] uppercase tracking-[0.28em] text-ivory/22">
                    {s.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          02 — PROJECT TYPES · alternating cinematic rows
      ══════════════════════════════════════════════════ */}
      <section className="bg-charcoal text-ivory">
        <div className="h-px bg-ivory/[0.06]" />

        {/* Section label */}
        <div className="flex items-center gap-6 px-5 py-10 sm:px-14">
          <p className="text-[0.48rem] uppercase tracking-[0.48em] text-bronze/60">Typologies de projets</p>
          <div className="h-px flex-1 bg-ivory/[0.05]" />
          <div className="flex shrink-0 items-center gap-2 sm:hidden">
            <span className="text-[0.42rem] uppercase tracking-[0.32em] text-ivory/20">Glisser</span>
          </div>
          <p className="hidden text-[0.44rem] uppercase tracking-[0.35em] text-ivory/18 sm:block">
            {String(projectTypes.length).padStart(2, "0")} catégories
          </p>
        </div>

        {/* ── MOBILE: horizontal snap carousel ── */}
        <div className="relative sm:hidden">
          <div className="flex snap-x snap-mandatory overflow-x-auto overflow-y-hidden scrollbar-hide gap-px">
            {projectTypes.map((p, i) => (
              <Link
                key={p.title}
                href={p.href}
                className="group/img snap-start shrink-0 w-[88vw] relative overflow-hidden"
              >
                {/* Image */}
                <div className="relative h-[62vw]">
                  <Image
                    src={p.image}
                    alt={p.title}
                    fill
                    sizes="88vw"
                    className={`${p.imagePos} object-cover transition-all duration-700 group-active:scale-[1.04]`}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal/90 via-charcoal/20 to-transparent" />
                  {/* Shimmer */}
                  <div className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-ivory/[0.10] to-transparent transition-transform duration-[850ms] group-active:translate-x-full" />
                  {/* Bronze bottom border */}
                  <div className="absolute inset-x-0 bottom-0 h-[2px] origin-left scale-x-0 bg-bronze/70 transition-transform duration-500 group-active:scale-x-100" />
                  {/* Number */}
                  <span className="absolute right-4 top-4 font-serif text-[2.5rem] font-medium leading-none text-ivory/[0.08]">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>

                {/* Text */}
                <div className="bg-charcoal px-5 py-5">
                  <p className="text-[0.44rem] uppercase tracking-[0.42em] text-bronze/65">{p.kicker}</p>
                  <h2 className="mt-2 font-serif text-[1.35rem] font-medium leading-tight text-ivory">{p.title}</h2>
                  <div className="mt-3 h-px w-8 bg-bronze/30" />
                  <p className="mt-3 text-[0.75rem] leading-[1.85] text-ivory/38">{p.text}</p>
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {p.tags.map((tag) => (
                      <span key={tag} className="border border-ivory/[0.09] px-2.5 py-1 text-[0.4rem] uppercase tracking-[0.18em] text-ivory/30">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </Link>
            ))}
            <div className="shrink-0 w-5" aria-hidden="true" />
          </div>
          <div className="pointer-events-none absolute inset-y-0 right-0 w-14 bg-gradient-to-l from-charcoal to-transparent" />
        </div>

        {/* ── DESKTOP: alternating rows ── */}
        {projectTypes.map((p, i) => {
          const imageLeft = i % 2 === 0;
          return (
            <div
              key={p.title}
              className={`group relative hidden min-h-[60svh] border-t border-ivory/[0.05] sm:flex ${
                imageLeft ? "flex-col lg:flex-row" : "flex-col lg:flex-row-reverse"
              }`}
            >
              {/* Image panel — 58%, wrapped in Link */}
              <Link
                href={p.href}
                className="lg-dark-panel group/img relative block h-64 overflow-hidden sm:h-80 lg:h-auto lg:w-[58%]"
                aria-label={`Découvrir : ${p.title}`}
              >
                <Image
                  src={p.image}
                  alt={p.title}
                  fill
                  sizes="(min-width:1024px) 58vw, 100vw"
                  className={`${p.imagePos} object-cover opacity-80 transition-all duration-700 group-hover:scale-[1.06] group-hover:opacity-100 group-hover:brightness-105 group-hover:saturate-[1.08]`}
                />

                {/* Gradient toward text side */}
                <div
                  className={`pointer-events-none absolute inset-0 transition-opacity duration-500 group-hover:opacity-60 ${
                    imageLeft
                      ? "bg-gradient-to-r from-transparent to-charcoal/75 lg:to-charcoal/88"
                      : "bg-gradient-to-l from-transparent to-charcoal/75 lg:to-charcoal/88"
                  }`}
                />

                {/* Bottom base vignette */}
                <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-charcoal/80 to-transparent" />

                {/* Bottom fade on mobile */}
                <div className="pointer-events-none absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-charcoal to-transparent lg:hidden" />

                {/* ── SHIMMER SWEEP ── */}
                <div className="pointer-events-none absolute inset-0 z-10 -translate-x-full bg-gradient-to-r from-transparent via-ivory/[0.13] to-transparent transition-transform duration-[850ms] ease-in-out group-hover/img:translate-x-full" />

                {/* ── BRONZE ATMOSPHERIC GLOW ── */}
                <div
                  className="pointer-events-none absolute inset-0 z-10 opacity-0 transition-opacity duration-600 group-hover/img:opacity-100"
                  style={{
                    background: `radial-gradient(ellipse 80% 55% at 50% 100%,
                      rgba(188,143,85,0.18) 0%,
                      transparent 70%)`,
                  }}
                />

                {/* ── SLIDE-UP CTA LABEL ── */}
                <div className="absolute inset-x-0 bottom-0 z-20 flex items-end justify-between px-5 pb-5 pt-16 transition-transform duration-500 ease-out translate-y-0 sm:translate-y-full sm:px-7 sm:pb-7 sm:group-hover/img:translate-y-0"
                  style={{ background: "linear-gradient(to top, rgba(18,17,15,0.75) 0%, transparent 100%)" }}
                >
                  <div>
                    <p className="text-[0.44rem] uppercase tracking-[0.45em] text-bronze/80">
                      {p.kicker}
                    </p>
                    <p className="mt-1 font-serif text-base font-medium text-ivory sm:text-lg">
                      {p.title}
                    </p>
                  </div>
                  <span className="mb-1 flex h-9 w-9 shrink-0 items-center justify-center border border-ivory/20 text-sm text-ivory/70 transition-all duration-300 group-hover/img:border-bronze group-hover/img:text-bronze">
                    →
                  </span>
                </div>

                {/* ── THIN BRONZE BOTTOM BORDER — scales in on hover ── */}
                <div className="absolute inset-x-0 bottom-0 z-30 h-[2px] origin-left scale-x-0 bg-bronze/70 transition-transform duration-600 ease-out group-hover/img:scale-x-100" />
              </Link>

              {/* Text panel — 42% */}
              <div className="relative flex flex-col justify-center px-5 py-10 sm:px-12 sm:py-14 lg:w-[42%] lg:px-14 lg:py-16">

                {/* Large ghost number */}
                <span
                  aria-hidden="true"
                  className={`pointer-events-none absolute top-6 select-none font-serif font-medium leading-none text-ivory/[0.035] transition-all duration-700 group-hover:text-ivory/[0.06] ${
                    imageLeft ? "right-8" : "left-8"
                  }`}
                  style={{ fontSize: "clamp(5rem, 10vw, 9rem)", letterSpacing: "-0.03em" }}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>

                <p className="text-[0.46rem] uppercase tracking-[0.42em] text-bronze/65">{p.kicker}</p>

                <h2
                  className="mt-5 font-serif font-medium leading-[1.04] text-ivory"
                  style={{ fontSize: "clamp(1.8rem, 3.2vw, 2.8rem)", letterSpacing: "-0.02em" }}
                >
                  {p.title}
                </h2>

                {/* Bronze rule — animates */}
                <div className="mt-6 h-px w-8 bg-bronze/30 transition-all duration-500 group-hover:w-16 group-hover:bg-bronze/60" />

                <p className="mt-6 max-w-[40ch] text-[0.8rem] leading-[1.95] text-ivory/35 transition-colors duration-300 group-hover:text-ivory/55">
                  {p.text}
                </p>

                <div className="mt-8 flex flex-wrap gap-2">
                  {p.tags.map((tag) => (
                    <span
                      key={tag}
                      className="border border-ivory/[0.09] px-3 py-1.5 text-[0.43rem] uppercase tracking-[0.2em] text-ivory/30 transition-colors duration-300 group-hover:border-bronze/30 group-hover:text-ivory/55"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </section>

      {/* ══════════════════════════════════════════════════
          03 — GALLERY · interactive filmstrip
      ══════════════════════════════════════════════════ */}
      <section className="bg-charcoal">
        <div className="h-px bg-ivory/[0.06]" />

        {/* Section label */}
        <div className="flex items-center gap-5 px-8 py-8 sm:px-14">
          <div className="h-px w-6 bg-bronze/35" />
          <p className="text-[0.46rem] uppercase tracking-[0.45em] text-ivory/20">Ambiances · Maroc</p>
        </div>

        <GalleryStrip />

        <div className="px-8 pb-10 pt-2 sm:px-14">
          <p className="text-[0.42rem] uppercase tracking-[0.35em] text-ivory/15">
            Les visuels sont présentés à titre d&apos;illustration de nos catégories d&apos;intervention.
          </p>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          04 — STANDARDS · 3×2 visual card grid
      ══════════════════════════════════════════════════ */}
      <section className="lg-dark-panel bg-charcoal text-ivory">
        <div className="h-px bg-ivory/[0.06]" />

        {/* Section header */}
        <div className="px-8 py-14 sm:px-14">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="text-[0.5rem] uppercase tracking-[0.48em] text-bronze">Standard Ouidesign</p>
              <h2
                className="mt-4 font-serif font-medium leading-[1.02] text-ivory"
                style={{ fontSize: "clamp(1.9rem, 3.8vw, 3.2rem)", letterSpacing: "-0.02em" }}
              >
                Ce que nous appliquons<br />à chaque projet.
              </h2>
            </div>
            <p className="max-w-[30ch] text-[0.78rem] leading-[1.9] text-ivory/30 lg:text-right">
              Chaque décision visible renvoie à une décision invisible — réseau,
              maintenance, ventilation, accès, durabilité.
            </p>
          </div>
        </div>

        {/* ── MOBILE: snap carousel ── */}
        <div className="relative sm:hidden">
          <div className="flex snap-x snap-mandatory overflow-x-auto overflow-y-hidden scrollbar-hide gap-px">
            {standards.map((s) => (
              <article
                key={s.title}
                className="group snap-start shrink-0 w-[78vw] relative overflow-hidden bg-charcoal px-7 py-10 transition-colors duration-300 active:bg-[#141412]"
              >
                {/* Left accent bar */}
                <div className="absolute left-0 top-0 h-0 w-[2px] bg-bronze/70 transition-all duration-500 group-active:h-full" />
                {/* Bronze glow */}
                <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-active:opacity-100"
                  style={{ background: "radial-gradient(ellipse 90% 50% at 50% 100%, rgba(188,143,85,0.10) 0%, transparent 70%)" }} />
                {/* Ghost word */}
                <span aria-hidden="true" className="pointer-events-none absolute inset-x-0 bottom-0 select-none translate-y-4 font-serif font-medium leading-none text-bronze/0 transition-all duration-500 group-active:translate-y-0 group-active:text-bronze/[0.20]"
                  style={{ fontSize: "clamp(3rem, 10vw, 5rem)", letterSpacing: "-0.02em" }}>{s.ghost}</span>
                <div className="relative mb-6 h-px w-8 bg-bronze/25 transition-all duration-500 group-active:w-14 group-active:bg-bronze/80" />
                <h3 className="relative font-serif text-lg font-medium leading-tight text-ivory transition-colors duration-300 group-active:text-bronze">{s.title}</h3>
                <p className="relative mt-3 text-[0.75rem] leading-[1.9] text-ivory/32 transition-colors duration-300 group-active:text-ivory/60">{s.description}</p>
              </article>
            ))}
            <div className="shrink-0 w-5" aria-hidden="true" />
          </div>
          <div className="pointer-events-none absolute inset-y-0 right-0 w-14 bg-gradient-to-l from-charcoal to-transparent" />
        </div>

        {/* ── DESKTOP: 3×2 card grid ── */}
        <div className="hidden gap-px bg-ivory/[0.04] sm:grid sm:grid-cols-2 lg:grid-cols-3">
          {standards.map((s) => (
            <article
              key={s.title}
              className="group relative overflow-hidden bg-charcoal px-10 py-12 transition-colors duration-500 hover:bg-[#141412] cursor-default"
            >
              {/* Left accent bar — grows full height on hover */}
              <div className="absolute left-0 top-0 h-0 w-[2px] bg-bronze/70 transition-all duration-700 ease-out group-hover:h-full" />

              {/* Bronze atmospheric glow at bottom */}
              <div
                className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-700 group-hover:opacity-100"
                style={{ background: "radial-gradient(ellipse 90% 50% at 50% 100%, rgba(188,143,85,0.12) 0%, transparent 70%)" }}
              />

              {/* Ghost word — bronze tinted, slides up */}
              <span
                aria-hidden="true"
                className="pointer-events-none absolute inset-x-0 bottom-0 select-none translate-y-6 font-serif font-medium leading-none text-bronze/0 transition-all duration-700 group-hover:translate-y-0 group-hover:text-bronze/[0.20]"
                style={{ fontSize: "clamp(3.5rem, 6vw, 5.5rem)", letterSpacing: "-0.02em" }}
              >
                {s.ghost}
              </span>

              {/* Shimmer sweep */}
              <div className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-ivory/[0.04] to-transparent transition-transform duration-[1100ms] ease-in-out group-hover:translate-x-full" />

              {/* Bronze top rule — extends dramatically */}
              <div className="relative mb-7 h-px w-8 bg-bronze/25 transition-all duration-500 group-hover:w-16 group-hover:bg-bronze/80" />

              <h3
                className="relative font-serif font-medium leading-[1.1] text-ivory transition-colors duration-300 group-hover:text-bronze"
                style={{ fontSize: "clamp(1rem, 1.6vw, 1.3rem)" }}
              >
                {s.title}
              </h3>

              <p className="relative mt-4 text-[0.78rem] leading-[1.95] text-ivory/30 transition-colors duration-500 group-hover:text-ivory/65">
                {s.description}
              </p>
            </article>
          ))}
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          05 — CONFIDENTIALITÉ · clean horizontal split
      ══════════════════════════════════════════════════ */}
      <section className="bg-charcoal text-ivory">
        <div className="h-px bg-ivory/[0.06]" />

        <div className="mx-auto max-w-7xl px-8 py-20 sm:px-14 lg:py-28">
          <div className="grid items-center gap-12 lg:grid-cols-[1fr_auto] lg:gap-20">

            <div>
              <div className="reveal-left mb-8 flex items-center gap-4">
                <div className="h-px w-8 bg-bronze/35" />
                <p className="text-[0.5rem] uppercase tracking-[0.48em] text-bronze">Photos &amp; références</p>
              </div>

              <h2
                className="reveal-left font-serif font-medium leading-[1.04] text-ivory"
                style={{ fontSize: "clamp(1.9rem, 3.5vw, 2.8rem)", letterSpacing: "-0.02em" }}
              >
                Nos projets vous seront<br />présentés en direct.
              </h2>

              <div className="reveal mt-7 h-px w-10 bg-bronze/30" />

              <p className="reveal mt-6 max-w-[46ch] text-[0.82rem] leading-[1.95] text-ivory/38">
                Par respect pour la confidentialité de nos clients, nous ne publions pas de
                photos sans accord explicite. Lors de notre premier échange, nous partageons
                les références adaptées à votre type de projet.
              </p>
            </div>

            <div className="reveal shrink-0">
              <Link
                href={whatsappHref(
                  "Bonjour Ouidesign, je souhaite voir des références de projets similaires au mien."
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-5 border border-ivory/[0.12] px-8 py-5 text-[0.52rem] uppercase tracking-[0.3em] text-ivory/55 transition-all duration-300 hover:border-bronze hover:text-bronze"
              >
                Demander des références
                <span className="transition-transform duration-300 group-hover:translate-x-1.5">→</span>
              </Link>
            </div>

          </div>
        </div>
      </section>

      <CTASection title="Votre villa mérite une lecture précise dès le premier échange." />
    </>
  );
}
