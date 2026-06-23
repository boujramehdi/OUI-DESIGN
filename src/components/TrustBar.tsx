const trustItems = [
  { value: "50+",  label: "Projets réalisés",      sub: "Villas & Riads" },
  { value: "8",    label: "Expertises maîtrisées", sub: "Architecture → Solaire" },
  { value: "100%", label: "Niveau de finition",    sub: "Chaque projet" },
  { value: "1",    label: "Interlocuteur unique",  sub: "Conception → Livraison" },
];

export function TrustBar() {
  return (
    <section className="relative overflow-hidden border-y border-bronze/20 bg-sand">
      {/* Subtle diagonal texture */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.018]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(45deg,#b8925f 0,#b8925f 1px,transparent 0,transparent 50%)",
          backgroundSize: "24px 24px",
        }}
      />

      {/* Top gradient line */}
      <div className="absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-bronze/50 to-transparent" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4">
          {trustItems.map((item, i) => (
            <div
              key={item.label}
              className="group relative flex flex-col items-center border-r border-bronze/10 py-10 text-center last:border-r-0 sm:py-14"
            >
              {/* Bottom sweep line — grows from center outward */}
              <div className="absolute bottom-0 left-1/2 h-px w-0 -translate-x-1/2 bg-bronze/60 transition-all duration-700 ease-out group-hover:w-full" />

              {/* Value */}
              <p
                className="anim-slide-up relative font-serif font-medium text-bronze transition-colors duration-700 group-hover:text-charcoal/90 sm:text-6xl lg:text-7xl"
                style={{ fontSize: "clamp(2rem, 8vw, 4.5rem)", animationDelay: `${i * 0.09}s` }}
              >
                {item.value}
              </p>

              {/* Label */}
              <p className="relative mt-3 text-[0.57rem] uppercase tracking-[0.3em] text-charcoal/45 transition-colors duration-500 group-hover:text-charcoal/60">
                {item.label}
              </p>

              {/* Sublabel — fades in */}
              <p className="relative mt-1.5 text-[0.48rem] uppercase tracking-[0.22em] text-bronze/0 opacity-0 transition-all duration-500 group-hover:text-bronze/55 group-hover:opacity-100">
                {item.sub}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom gradient line */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-bronze/50 to-transparent" />
    </section>
  );
}
