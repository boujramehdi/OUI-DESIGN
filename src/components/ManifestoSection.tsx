export function ManifestoSection() {
  return (
    <section className="bg-charcoal text-ivory">
      <div className="mx-auto grid max-w-7xl gap-16 px-5 py-28 sm:px-8 lg:grid-cols-[0.9fr_1fr_0.7fr] lg:items-center lg:py-36">
        <div className="reveal">
          <p className="pb-5 text-xs uppercase tracking-[0.34em] text-bronze">
            Notre manifeste
          </p>
          <h2 className="max-w-2xl font-serif text-4xl font-medium leading-[1.02] sm:text-6xl">
            Le luxe ne se limite pas à l’apparence.
          </h2>
          <div className="mt-7 h-px w-16 bg-bronze" />
        </div>
        <div className="reveal border-t border-bronze/35 pt-8 lg:border-l lg:border-t-0 lg:pl-12 lg:pt-0">
          <p className="max-w-2xl text-base leading-8 text-ivory/76">
            Une villa d’exception doit être belle, mais aussi fluide, intelligente,
            confortable et techniquement maîtrisée. Ouidesign réunit espace, matière,
            technologie et infrastructure dans une seule vision.
          </p>
        </div>
        <div className="reveal hidden justify-end lg:flex">
          <p className="font-serif text-4xl italic leading-none text-bronze/80">
            Hamza AitDahmed
          </p>
        </div>
      </div>
    </section>
  );
}
