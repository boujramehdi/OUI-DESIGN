import Link from "next/link";

export default function NotFound() {
  return (
    <section className="bg-ivory min-h-screen">
      <div className="mx-auto max-w-4xl px-5 pb-28 pt-44 text-center sm:px-8">
        <p className="text-xs uppercase text-bronze">404</p>
        <h1 className="mt-5 font-serif text-5xl text-charcoal sm:text-7xl">Page introuvable</h1>
        <p className="mt-6 text-base leading-8 text-charcoal/70">
          Cette adresse ne correspond pas à une page Ouidesign disponible.
        </p>
        <Link
          href="/"
          className="mt-8 inline-flex bg-bronze px-6 py-4 text-xs uppercase tracking-[0.18em] text-charcoal transition duration-300 hover:bg-charcoal hover:text-ivory"
        >
          Retour accueil
        </Link>
      </div>
    </section>
  );
}
