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
      {/* Bottom-weighted dark gradient — PRD spec */}
      <div className="absolute inset-0 bg-[linear-gradient(to_top,#0D0E10_0%,rgba(13,14,16,0.75)_38%,rgba(13,14,16,0.25)_65%,transparent_100%)]" />
      {/* Left text-legibility overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(95deg,rgba(13,14,16,0.88)_0%,rgba(13,14,16,0.42)_52%,transparent_80%)]" />
      {/* Warm gold glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_72%_24%,rgba(197,168,128,0.14),transparent_32%)]" />

      {/* Expertise ticker */}
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

      <div className="relative mx-auto flex w-full max-w-7xl items-center px-5 pb-28 pt-32 sm:px-8 md:pb-44 lg:pb-52 lg:pt-44">
        <div className="max-w-4xl">
          <p className="mb-8 text-[0.65rem] uppercase tracking-[0.42em] text-bronze">
            OUIDESIGN · MAROC
          </p>
          <h1 className="max-w-2xl font-serif text-[2.2rem] font-medium leading-[1.02] text-ivory sm:text-4xl lg:text-[4.5rem] lg:leading-[1.0]">
            Architecture <br />intelligente pour villas<br />d'exception.
          </h1>
          <p className="mt-2 max-w-2xl text-sm leading-7 text-ivory/72">
            Rénovation, menuiserie sur mesure, smart home, piscines, sécurité,
            climatisation et solaire au Maroc.
          </p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
            <Link
              href="https://wa.me/212649055897?text=Bonjour%20Ouidesign%2C%20je%20souhaite%20parler%20d%E2%80%99un%20projet."
              target="_blank"
              className="inline-flex items-center gap-3 bg-bronze px-7 py-4 text-xs uppercase tracking-[0.2em] text-charcoal transition duration-300 hover:bg-ivory"
            >
              Démarrer mon projet
              <span className="text-base leading-none">→</span>
            </Link>
            <Link
              href="/realisations"
              className="inline-flex items-center gap-3 px-2 py-4 text-xs uppercase tracking-[0.2em] text-ivory/80 underline underline-offset-4 decoration-ivory/30 transition duration-300 hover:text-bronze hover:decoration-bronze"
            >
              Découvrir nos réalisations
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
