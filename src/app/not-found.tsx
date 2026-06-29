import Link from "next/link";
import { Container } from "@/components/Container";

export default function NotFound() {
  return (
    <section className="bg-ivory min-h-screen">
      <Container className="pb-28 pt-44 text-center">
        <p className="text-xs uppercase tracking-[0.4em] text-bronze">404</p>
        <h1 className="mt-5 font-serif text-5xl text-charcoal sm:text-7xl">Page introuvable</h1>
        <div className="mx-auto mt-6 h-px w-12 bg-bronze/30" />
        <p className="mx-auto mt-6 max-w-md text-base leading-8 text-charcoal/60">
          Cette adresse ne correspond pas à une page Ouidesign disponible.
        </p>
        <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <Link
            href="/"
            className="inline-flex bg-bronze px-7 py-4 text-xs uppercase tracking-[0.18em] text-charcoal transition duration-300 hover:bg-charcoal hover:text-ivory"
          >
            Retour accueil
          </Link>
          <Link
            href="/contact"
            className="inline-flex border border-bronze/30 px-7 py-4 text-xs uppercase tracking-[0.18em] text-charcoal/60 transition duration-300 hover:border-bronze hover:text-charcoal"
          >
            Nous contacter
          </Link>
        </div>
      </Container>
    </section>
  );
}
