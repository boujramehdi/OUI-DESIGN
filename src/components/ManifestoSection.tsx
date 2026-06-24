export function ManifestoSection() {
  return (
    <section className="relative overflow-hidden bg-charcoal text-ivory">
      {/* Top gradient line */}
      <div className="absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-bronze/50 to-transparent" />

      {/* Decorative opening quote */}
      <span
        className="pointer-events-none absolute -left-2 -top-4 select-none font-serif font-bold leading-none text-bronze/[0.08]"
        style={{ fontSize: "clamp(7rem, 13vw, 11rem)" }}
        aria-hidden="true"
      >
        "
      </span>

      <div className="relative mx-auto max-w-7xl px-6 py-12 sm:px-8 sm:py-16 lg:py-24">

        {/* ── MOBILE: centred editorial layout ── */}
        <div className="flex flex-col items-center text-center lg:hidden">

          {/* Eyebrow */}
          <div className="reveal flex items-center gap-4">
            <span className="h-px w-8 bg-bronze/50" />
            <p className="text-[0.58rem] uppercase tracking-[0.42em] text-bronze">Notre manifeste</p>
            <span className="h-px w-8 bg-bronze/50" />
          </div>

          {/* Heading */}
          <div className="reveal mt-8">
            <h2
              className="font-serif font-medium italic leading-[1.1] text-ivory"
              style={{ fontSize: "clamp(1.55rem, 5.5vw, 2.2rem)" }}
            >
              Le luxe ne se limite pas<br />à l&apos;apparence.
            </h2>
            <div className="mx-auto mt-5 h-px w-10 bg-bronze/50" />
          </div>

          {/* Body */}
          <div className="reveal mt-7">
            <p className="max-w-[34ch] text-sm leading-[1.95] text-ivory/55">
              Une villa d&apos;exception doit être belle, intelligente, confortable et
              techniquement maîtrisée. Notre rôle est d&apos;orchestrer chaque détail
              pour créer des lieux uniques, durables et inspirants.
            </p>
          </div>

          {/* Signature */}
          <div className="reveal mt-9 flex flex-col items-center gap-2">
            <p
              className="font-serif italic leading-tight text-bronze/85"
              style={{ fontSize: "clamp(1.5rem, 5vw, 2rem)", fontWeight: 400 }}
            >
              Hamza<br />Ait Dahmed
            </p>
            <span className="h-px w-8 bg-bronze/40" />
            <span className="text-[0.48rem] uppercase tracking-[0.26em] text-ivory/25">
              Fondateur, Ouidesign
            </span>
          </div>

          {/* Bottom ambient strip */}
          <div className="reveal mt-10 flex items-center gap-4 text-ivory/20">
            <span className="h-px w-8 bg-current opacity-40" />
            <span className="text-[0.48rem] uppercase tracking-[0.26em]">Architecture · Technique · Esthétique</span>
            <span className="h-px w-8 bg-current opacity-40" />
          </div>
        </div>

        {/* ── DESKTOP: original 3-col grid layout ── */}
        <div className="hidden lg:block">

          {/* Eyebrow */}
          <div className="reveal flex items-center gap-5">
            <span className="inline-block h-px w-10 bg-bronze/50" />
            <p className="text-[0.62rem] uppercase tracking-[0.42em] text-bronze">Notre manifeste</p>
          </div>

          <div className="mt-8 grid gap-10 lg:grid-cols-[1.1fr_1fr_0.55fr] lg:items-end lg:gap-14">

            <div className="reveal">
              <h2
                className="font-serif font-medium italic leading-[1.04] text-ivory"
                style={{ fontSize: "clamp(1.75rem, 3.2vw, 2.75rem)" }}
              >
                Le luxe ne se limite pas à l&apos;apparence.
              </h2>
              <div className="mt-5 h-px w-12 bg-bronze/50" />
            </div>

            <div className="reveal lg:border-l lg:border-bronze/15 lg:pl-12">
              <p className="text-sm leading-[1.9] text-ivory/60">
                Une villa d&apos;exception doit être belle, intelligente, confortable et
                techniquement maîtrisée. Notre rôle est d&apos;orchestrer chaque détail
                pour créer des lieux uniques, durables et inspirants.
              </p>
            </div>

            <div className="reveal flex flex-col items-end gap-3 pb-1">
              <p
                className="font-serif italic leading-tight text-bronze/85"
                style={{ fontSize: "clamp(1.6rem, 2.5vw, 2.2rem)", fontWeight: 400 }}
              >
                Hamza<br />Ait Dahmed
              </p>
              <div className="flex flex-col items-end gap-1">
                <span className="h-px w-8 bg-bronze/40" />
                <span className="text-[0.52rem] uppercase tracking-[0.26em] text-ivory/30">
                  Fondateur, Ouidesign
                </span>
              </div>
            </div>
          </div>

          <div className="reveal mt-12 flex items-center gap-5 text-ivory/25">
            <span className="text-[0.52rem] uppercase tracking-[0.28em]">Maroc</span>
            <span className="h-px w-5 bg-current opacity-40" />
            <span className="text-[0.52rem] uppercase tracking-[0.28em]">Architecture · Technique · Esthétique</span>
          </div>
        </div>

      </div>

      {/* Bottom gradient line */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-bronze/40 to-transparent" />
    </section>
  );
}
