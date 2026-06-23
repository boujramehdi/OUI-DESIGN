export function ManifestoSection() {
  return (
    <section className="relative overflow-hidden bg-charcoal text-ivory">
      {/* Top gradient line */}
      <div className="absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-bronze/50 to-transparent" />

      {/* Decorative opening quote — reduced size */}
      <span
        className="pointer-events-none absolute -left-2 -top-4 select-none font-serif font-bold leading-none text-bronze/[0.08]"
        style={{ fontSize: "clamp(7rem, 13vw, 11rem)" }}
        aria-hidden="true"
      >
        "
      </span>

      <div className="relative mx-auto max-w-7xl px-5 py-10 sm:px-8 sm:py-16 lg:py-24">

        {/* Eyebrow */}
        <div className="reveal flex items-center gap-5">
          <span className="inline-block h-px w-10 bg-bronze/50" />
          <p className="text-[0.62rem] uppercase tracking-[0.42em] text-bronze">Notre manifeste</p>
        </div>

        {/* Main layout: title + body + signature */}
        <div className="mt-8 grid gap-10 lg:grid-cols-[1.1fr_1fr_0.55fr] lg:items-end lg:gap-14">

          {/* Heading */}
          <div className="reveal">
            <h2
              className="font-serif font-medium italic leading-[1.04] text-ivory"
              style={{ fontSize: "clamp(1.75rem, 3.2vw, 2.75rem)" }}
            >
              Le luxe ne se limite pas à l'apparence.
            </h2>
            <div className="mt-5 h-px w-12 bg-bronze/50" />
          </div>

          {/* Body text */}
          <div className="reveal lg:border-l lg:border-bronze/15 lg:pl-12">
            <p className="text-sm leading-[1.9] text-ivory/60">
              Une villa d'exception doit être belle, intelligente, confortable et
              techniquement maîtrisée. Notre rôle est d'orchestrer chaque détail
              pour créer des lieux uniques, durables et inspirants.
            </p>
          </div>

          {/* Signature block */}
          <div className="reveal flex flex-col items-start gap-3 lg:items-end lg:pb-1">
            <p
              className="font-signature leading-tight text-bronze/85"
              style={{ fontSize: "1.65rem" }}
            >
              Hamza
              <br />
              Ait Dahmed
            </p>
            <div className="flex flex-col items-start gap-1 lg:items-end">
              <span className="h-px w-8 bg-bronze/40" />
              <span className="text-[0.52rem] uppercase tracking-[0.26em] text-charcoal/35">
                Fondateur, Ouidesign
              </span>
            </div>
          </div>
        </div>

        {/* Bottom ambient strip */}
        <div className="reveal mt-10 flex items-center gap-5 text-ivory/25 lg:mt-12">
          <span className="text-[0.52rem] uppercase tracking-[0.28em]">Marrakech, Maroc</span>
          <span className="h-px w-5 bg-current opacity-40" />
          <span className="text-[0.52rem] uppercase tracking-[0.28em]">Architecture · Technique · Esthétique</span>
        </div>
      </div>

      {/* Bottom gradient line */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-bronze/40 to-transparent" />
    </section>
  );
}
