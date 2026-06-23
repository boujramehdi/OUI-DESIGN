import { processSteps } from "@/lib/site";

const stepIcons = [
  // Diagnostic — clipboard
  <svg key="diagnostic" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 5H7a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2" />
    <rect x="9" y="3" width="6" height="4" rx="1" />
    <path d="M9 12h6M9 16h4" />
  </svg>,
  // Conception — eye
  <svg key="conception" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
    <circle cx="12" cy="12" r="3" />
  </svg>,
  // Réalisation — layers
  <svg key="realisation" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
    <polygon points="12 2 2 7 12 12 22 7 12 2" />
    <polyline points="2 17 12 22 22 17" />
    <polyline points="2 12 12 17 22 12" />
  </svg>,
  // Finition — diamond
  <svg key="finition" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
    <path d="M2.7 10.3a2.41 2.41 0 0 0 0 3.41l7.59 7.59a2.41 2.41 0 0 0 3.41 0l7.59-7.59a2.41 2.41 0 0 0 0-3.41L13.7 2.71a2.41 2.41 0 0 0-3.41 0z" />
  </svg>,
  // Suivi — refresh
  <svg key="suivi" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="23 4 23 10 17 10" />
    <polyline points="1 20 1 14 7 14" />
    <path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15" />
  </svg>,
];

export function ProcessSection() {
  return (
    <section className="bg-charcoal text-ivory overflow-hidden">
      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20 lg:py-28">

        {/* Header */}
        <div className="reveal mb-16 flex flex-col gap-3 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="text-[0.62rem] uppercase tracking-[0.34em] text-bronze">Notre processus</p>
            <h2 className="mt-3 font-serif text-4xl font-medium leading-[1.02] text-ivory sm:text-5xl lg:text-6xl">
              Une approche claire<br className="hidden sm:block" /> et maîtrisée.
            </h2>
          </div>
          <p className="max-w-xs text-sm leading-7 text-ivory/50 lg:text-right">
            Chaque projet suit la même rigueur — du premier diagnostic à la livraison finale.
          </p>
        </div>

        {/* Steps */}
        <div className="reveal grid gap-px bg-bronze/10 md:grid-cols-5">
          {processSteps.map((step, index) => (
            <article
              key={step.title}
              className="group relative flex flex-col bg-ivory px-5 py-6 transition-colors duration-300 hover:bg-[#cbb89a] sm:px-6 sm:py-8 md:px-7 md:py-10"
            >
              {/* Top: number + icon */}
              <div className="flex items-start justify-between">
                <span className="font-serif text-5xl font-medium leading-none text-bronze/30 transition-colors duration-300 group-hover:text-bronze/60 sm:text-6xl">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div className="mt-1 text-bronze/50 transition-colors duration-300 group-hover:text-bronze">
                  {stepIcons[index]}
                </div>
              </div>

              {/* Bronze line — grows on hover */}
              <div className="mt-6 h-px w-8 bg-bronze/30 transition-all duration-500 group-hover:w-full group-hover:bg-bronze/50" />

              {/* Text */}
              <h3 className="mt-5 text-[0.65rem] font-bold uppercase tracking-[0.2em] text-charcoal/90">
                {step.title}
              </h3>
              <p className="mt-3 flex-1 text-xs leading-6 text-charcoal/60 transition-colors duration-300 group-hover:text-charcoal/80">
                {step.description}
              </p>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}
