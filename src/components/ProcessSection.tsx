import { processSteps } from "@/lib/site";

const stepIcons = [
  <svg key="diagnostic" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 5H7a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2" />
    <rect x="9" y="3" width="6" height="4" rx="1" />
    <path d="M9 12h6M9 16h4" />
  </svg>,
  <svg key="conception" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
    <circle cx="12" cy="12" r="3" />
  </svg>,
  <svg key="realisation" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
    <polygon points="12 2 2 7 12 12 22 7 12 2" />
    <polyline points="2 17 12 22 22 17" />
    <polyline points="2 12 12 17 22 12" />
  </svg>,
  <svg key="finition" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
    <path d="M2.7 10.3a2.41 2.41 0 0 0 0 3.41l7.59 7.59a2.41 2.41 0 0 0 3.41 0l7.59-7.59a2.41 2.41 0 0 0 0-3.41L13.7 2.71a2.41 2.41 0 0 0-3.41 0z" />
  </svg>,
  <svg key="suivi" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="23 4 23 10 17 10" />
    <polyline points="1 20 1 14 7 14" />
    <path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15" />
  </svg>,
];

function StepCard({ step, index, mobile }: { step: typeof processSteps[number]; index: number; mobile?: boolean }) {
  return (
    <article
      className={`group relative flex flex-col bg-ivory transition-colors duration-300 hover:bg-[#cbb89a] active:bg-[#cbb89a] ${
        mobile
          ? "snap-start shrink-0 w-[80vw] px-6 py-8 min-h-[260px]"
          : "px-6 py-8 md:px-7 md:py-10"
      }`}
    >
      {/* Top: number + icon */}
      <div className="flex items-start justify-between">
        <span className="font-serif text-5xl font-medium leading-none text-bronze/30 transition-colors duration-300 group-hover:text-bronze/60">
          {String(index + 1).padStart(2, "0")}
        </span>
        <div className="mt-1 text-bronze/50 transition-colors duration-300 group-hover:text-bronze">
          {stepIcons[index]}
        </div>
      </div>

      {/* Bronze line */}
      <div className="mt-6 h-px w-8 bg-bronze/30 transition-all duration-500 group-hover:w-full group-hover:bg-bronze/50" />

      {/* Text */}
      <h3 className="mt-5 text-[0.65rem] font-bold uppercase tracking-[0.2em] text-charcoal/90">
        {step.title}
      </h3>
      <p className="mt-3 flex-1 text-xs leading-6 text-charcoal/60 transition-colors duration-300 group-hover:text-charcoal/80">
        {step.description}
      </p>
    </article>
  );
}

export function ProcessSection() {
  return (
    <section className="bg-charcoal text-ivory overflow-hidden">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">

        {/* ── Header — tightly coupled to cards below ── */}
        <div className="reveal pt-16 pb-10 sm:pt-20 sm:pb-12 lg:pt-28 lg:pb-14">
          <div className="flex items-end justify-between gap-6">
            <div>
              <p className="text-[0.62rem] uppercase tracking-[0.34em] text-bronze">Notre processus</p>
              <h2 className="mt-3 font-serif text-3xl font-medium leading-[1.02] text-ivory sm:text-4xl lg:text-5xl">
                Une approche<br /> claire et maîtrisée.
              </h2>
            </div>

            {/* Subtitle — desktop right column */}
            <p className="hidden max-w-[26ch] shrink-0 text-sm leading-[1.8] text-ivory/45 md:block lg:text-right">
              Chaque projet suit la même rigueur — du premier diagnostic à la livraison finale.
            </p>

            {/* Swipe hint — mobile only */}
            <div className="flex shrink-0 flex-col items-end gap-1 md:hidden">
              <span className="text-[0.42rem] uppercase tracking-[0.38em] text-ivory/25">Glisser</span>
              <div className="flex gap-1">
                {processSteps.map((_, i) => (
                  <div key={i} className="h-px w-3 bg-bronze/30" />
                ))}
              </div>
            </div>
          </div>

          {/* Subtitle — mobile (below heading) */}
          <p className="mt-5 max-w-[34ch] text-sm leading-[1.8] text-ivory/45 md:hidden">
            Chaque projet suit la même rigueur — du premier diagnostic à la livraison finale.
          </p>
        </div>

      </div>

      {/* ── MOBILE: horizontal snap scroll (outside padded container for edge-to-edge) ── */}
      <div className="relative md:hidden">
        <div className="flex gap-px overflow-x-auto snap-x snap-mandatory scrollbar-hide pl-5 sm:pl-8 pb-16 sm:pb-20">
          {processSteps.map((step, index) => (
            <StepCard key={step.title} step={step} index={index} mobile />
          ))}
          <div className="shrink-0 w-5 sm:w-8" aria-hidden="true" />
        </div>
        <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-charcoal to-transparent" />
      </div>

      {/* ── DESKTOP: 5-col grid (inside padded container) ── */}
      <div className="mx-auto hidden max-w-7xl px-5 pb-16 sm:px-8 lg:pb-24 md:block">
        <div className="reveal grid grid-cols-5 gap-px bg-bronze/10">
          {processSteps.map((step, index) => (
            <StepCard key={step.title} step={step} index={index} />
          ))}
        </div>
      </div>

    </section>
  );
}
