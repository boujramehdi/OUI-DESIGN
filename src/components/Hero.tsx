import Link from "next/link";
import { CinematicImage } from "@/components/CinematicImage";

export function Hero() {
  return (
    <section className="relative isolate flex min-h-svh overflow-hidden bg-charcoal text-ivory">
      <CinematicImage
        src="/images/hero-villa.jpg"
        alt=""
        sizes="100vw"
        preload
        loading="eager"
        imageClassName="object-cover"
      />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(28,28,26,0.90),rgba(28,28,26,0.58),rgba(28,28,26,0.20))]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_72%_24%,rgba(184,146,95,0.20),transparent_32%)]" />
      <div className="absolute inset-x-0 bottom-0 hidden overflow-hidden border-y border-bronze/25 bg-charcoal/78 backdrop-blur md:block">
        <div className="mx-auto flex max-w-7xl min-w-0 items-center gap-7 overflow-hidden px-5 py-6 pr-40 text-[0.68rem] uppercase tracking-[0.2em] text-ivory/60 sm:px-8 sm:pr-44 lg:pr-48">
          <span className="shrink-0 text-bronze">Nos expertises</span>
          <span className="h-px w-10 shrink-0 bg-bronze/50" />
          <span className="whitespace-nowrap">Architecture</span>
          <span>·</span>
          <span className="whitespace-nowrap">Intelligence</span>
          <span>·</span>
          <span className="whitespace-nowrap">Infrastructure</span>
          <span>·</span>
          <span className="whitespace-nowrap">Villas premium au Maroc</span>
        </div>
      </div>

      <div className="relative mx-auto flex w-full max-w-7xl items-center px-5 pb-24 pt-32 sm:px-8 md:pb-40 lg:pb-48 lg:pt-40">
        <div className="max-w-5xl">
          <p className="mb-8 text-xs uppercase tracking-[0.34em] text-bronze sm:text-sm">
            OUIDESIGN · MAROC
          </p>
          <h1 className="max-w-5xl font-serif text-6xl font-medium leading-[0.9] text-ivory sm:text-7xl lg:text-[8.5rem]">
            Architecture intelligente pour villas d’exception.
          </h1>
          <p className="mt-8 max-w-3xl text-lg leading-8 text-ivory/78 sm:text-xl">
            Rénovation, menuiserie sur mesure, smart home, piscines, sécurité,
            climatisation et solaire pour villas premium au Maroc.
          </p>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <Link
              href="https://wa.me/212649055897?text=Bonjour%20Ouidesign%2C%20je%20souhaite%20parler%20d%E2%80%99un%20projet."
              target="_blank"
              className="inline-flex justify-center bg-bronze px-7 py-4 text-sm uppercase tracking-[0.18em] text-charcoal transition duration-300 hover:bg-ivory"
            >
              Démarrer mon projet
            </Link>
            <Link
              href="/realisations"
              className="inline-flex justify-center border border-ivory/35 px-7 py-4 text-sm uppercase tracking-[0.18em] text-ivory transition duration-300 hover:border-bronze hover:text-bronze"
            >
              Découvrir nos réalisations
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
