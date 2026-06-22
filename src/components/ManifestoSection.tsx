export function ManifestoSection() {
  return (
    <section className="bg-[#1C1A17] text-ivory">
      <div className="mx-auto grid max-w-7xl gap-8 px-5 py-14 sm:px-8 sm:py-20 lg:grid-cols-[0.9fr_1fr_0.7fr] lg:items-center lg:gap-14 lg:py-28">
        <div className="reveal">
          <p className="pb-3 text-xs uppercase tracking-[0.34em] text-bronze">
            Notre manifeste
          </p>
          <h2 className="max-w-2xl font-serif text-3xl font-medium leading-[1.04] sm:text-5xl lg:text-6xl">
            Le luxe ne se limite pas à l'apparence.
          </h2>
          <div className="mt-5 h-px w-16 bg-bronze" />
        </div>
        <div className="reveal lg:pl-12">
          <p className="max-w-2xl text-sm leading-[1.85] text-ivory/72">
            Une villa d'exception doit être belle, intelligente, confortable et
            techniquement maîtrisée. Notre rôle est d'orchestrer chaque détail
            pour créer des lieux uniques, durables et inspirants.
          </p>
        </div>
        <div className="reveal hidden justify-end lg:flex">
          <div className="flex flex-col items-end gap-2">
            <p
              className="font-signature leading-none text-bronze"
              style={{ fontSize: "3rem", fontWeight: 300 }}
            >
              Hamza AitDahmed
            </p>
            <span className="h-px w-16 bg-bronze/35" />
          </div>
        </div>
      </div>
    </section>
  );
}
