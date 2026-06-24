import Link from "next/link";
import { CinematicImage } from "@/components/CinematicImage";

const tickerItems = [
  "Architecture",
  "Intelligence",
  "Infrastructure",
  "Piscines & Locaux Techniques",
  "Menuiserie Sur Mesure",
  "Smart Home",
  "Sécurité & Caméras",
  "Climatisation",
  "Solaire & Infrastructure",
];

export function Hero() {
  return (
    <section className="relative isolate flex min-h-svh overflow-hidden bg-charcoal text-ivory">
      <CinematicImage
        src="/images/villa-sunset.png"
        alt=""
        sizes="100vw"
        preload
        loading="eager"
        imageClassName="object-cover"
      />

      {/* Gradients */}
      <div className="absolute inset-0 bg-[linear-gradient(to_top,#0D0E10_0%,rgba(13,14,16,0.75)_38%,rgba(13,14,16,0.25)_65%,transparent_100%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(95deg,rgba(13,14,16,0.88)_0%,rgba(13,14,16,0.42)_52%,transparent_80%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_72%_24%,rgba(197,168,128,0.14),transparent_32%)]" />

      {/* Expertise ticker — desktop only */}
      <div className="absolute inset-x-0 bottom-0 hidden overflow-hidden border-t border-bronze/15 bg-[rgba(13,14,16,0.90)] backdrop-blur-sm md:block">
        <div className="flex items-center overflow-hidden py-5">
          <div className="flex shrink-0 animate-[ticker_30s_linear_infinite] items-center gap-8 pr-8">
            <span className="shrink-0 text-[0.65rem] font-semibold uppercase tracking-[0.3em] text-bronze">
              Nos Expertises
            </span>
            <span className="h-px w-8 shrink-0 bg-bronze/50" />
            {[...tickerItems, ...tickerItems].map((item, i) => (
              <span
                key={i}
                className="shrink-0 text-[0.65rem] uppercase tracking-[0.22em] text-ivory/55"
              >
                {item}
                {i < tickerItems.length * 2 - 1 && (
                  <span className="ml-8 text-bronze/40">—</span>
                )}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* ── CONTENT ── */}
      <div className="relative mx-auto flex w-full max-w-7xl flex-col justify-center px-6 pb-10 pt-[80px] sm:px-8 sm:pb-32 md:pb-44 lg:justify-center lg:pb-52 lg:pt-44">

        {/* Eyebrow — centered mobile, left desktop */}
        <div className="mb-6 flex items-center justify-center gap-4 sm:mb-8 sm:justify-start">
          <span className="h-px w-8 bg-bronze/50" />
          <p className="text-[0.58rem] uppercase tracking-[0.42em] text-bronze">
            Ouidesign · Maroc
          </p>
          <span className="h-px w-8 bg-bronze/50 sm:hidden" />
        </div>

        {/* Heading — centered mobile, left desktop */}
        <h1
          className="text-center font-serif font-medium leading-[1.04] text-ivory sm:text-left sm:max-w-2xl"
          style={{ fontSize: "clamp(2.1rem, 8.5vw, 4.5rem)" }}
        >
          Architecture<br />
          intelligente pour<br />
          villas d&apos;exception.
        </h1>

        {/* Divider — centered mobile */}
        <div className="mx-auto mt-6 h-px w-10 bg-bronze/40 sm:mx-0 sm:mt-8" />

        {/* Subtitle — centered mobile */}
        <p className="mt-5 text-center text-[0.82rem] leading-[1.9] text-ivory/55 sm:text-left sm:max-w-lg sm:text-sm sm:leading-7">
          Rénovation, menuiserie sur mesure, smart home,
          piscines, sécurité, climatisation et solaire au Maroc.
        </p>

        {/* CTAs — stacked centered on mobile, row on desktop */}
        <div className="mt-8 flex flex-col items-center gap-3 sm:mt-10 sm:flex-row sm:items-center sm:gap-6">
          <Link
            href="https://wa.me/212649055897?text=Bonjour%20Ouidesign%2C%20je%20souhaite%20parler%20d%E2%80%99un%20projet."
            target="_blank"
            className="inline-flex w-full max-w-xs items-center justify-center gap-3 bg-bronze px-8 py-4 text-[0.65rem] uppercase tracking-[0.22em] text-charcoal transition duration-300 hover:bg-ivory sm:w-auto sm:max-w-none"
          >
            Démarrer mon projet
            <span className="text-base leading-none">→</span>
          </Link>
          <Link
            href="/realisations"
            className="group inline-flex items-center gap-3 text-[0.6rem] uppercase tracking-[0.22em] text-ivory/45 transition duration-300 hover:text-ivory sm:text-ivory/80 sm:underline sm:underline-offset-4 sm:decoration-ivory/30 sm:hover:decoration-bronze"
          >
            <span className="h-px w-5 bg-ivory/25 transition-all duration-300 group-hover:w-8 group-hover:bg-bronze/60" />
            Nos réalisations
          </Link>
        </div>

        {/* Scroll hint — mobile only */}
        <div className="mt-10 flex items-center justify-center gap-3 sm:hidden">
          <div className="relative flex h-8 w-[20px] items-start justify-center overflow-hidden rounded-full border border-ivory/[0.15] pt-1.5">
            <div className="h-1.5 w-px animate-[scrollHint_1.6s_ease-in-out_infinite] rounded-full bg-bronze/70" />
          </div>
          <span className="text-[0.42rem] uppercase tracking-[0.35em] text-ivory/20">Défiler</span>
        </div>

      </div>
    </section>
  );
}
