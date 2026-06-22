import { processSteps } from "@/lib/site";

const stepIcons = [
  // Diagnostic — clipboard
  <svg key="diagnostic" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 5H7a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2" />
    <rect x="9" y="3" width="6" height="4" rx="1" />
    <path d="M9 12h6M9 16h4" />
  </svg>,
  // Conception — eye
  <svg key="conception" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
    <circle cx="12" cy="12" r="3" />
  </svg>,
  // Réalisation — hexagon
  <svg key="realisation" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 2l8.66 5v10L12 22l-8.66-5V7L12 2z" />
  </svg>,
  // Finition — check
  <svg key="finition" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
    <polyline points="22 4 12 14.01 9 11.01" />
  </svg>,
  // Suivi — settings
  <svg key="suivi" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="3" />
    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
  </svg>,
];

export function ProcessSection() {
  return (
    <section className="bg-[#EDE8DC] text-charcoal">
      <div className="mx-auto max-w-7xl px-5 py-12 sm:px-8 sm:py-16 lg:py-20">
        <div className="lg:grid lg:grid-cols-[0.48fr_1fr] lg:gap-16 lg:items-start">

          {/* Left — heading */}
          <div className="reveal mb-12 lg:mb-0 lg:pt-1">
            <p className="text-[0.62rem] uppercase tracking-[0.3em] text-bronze">Notre processus</p>
            <h2 className="mt-3 font-serif text-3xl font-medium leading-[1.04] sm:text-4xl">
              Une approche claire<br className="hidden sm:block" /> et maîtrisée.
            </h2>
          </div>

          {/* Right — 5 steps */}
          <div className="reveal relative">
            {/* Horizontal connecting line */}
            <div className="absolute left-0 right-0 top-[2.4rem] hidden h-px bg-bronze/25 md:block" />

            <div className="grid gap-0 md:grid-cols-5 md:gap-0">
              {processSteps.map((step, index) => (
                <article
                  key={step.title}
                  className="relative border-l border-bronze/25 pb-8 pl-5 last:pb-0 md:border-l-0 md:pb-0 md:pl-0 md:pr-6"
                >
                  {/* Mobile dot */}
                  <span className="absolute -left-[4px] top-[0.3rem] h-2 w-2 rounded-full border border-bronze/50 bg-ivory md:hidden" />

                  {/* Desktop icon */}
                  <div className="mb-4 hidden md:flex">
                    <div className="flex h-[3rem] w-[3rem] items-center justify-center border border-bronze/35 bg-ivory text-bronze/70">
                      {stepIcons[index]}
                    </div>
                  </div>

                  {/* Mobile icon inline */}
                  <div className="mb-3 flex items-center gap-3 md:hidden">
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center border border-bronze/35 bg-ivory text-bronze/70">
                      {stepIcons[index]}
                    </div>
                    <p className="text-[0.58rem] uppercase tracking-[0.26em] text-bronze">
                      {String(index + 1).padStart(2, "0")}
                    </p>
                  </div>

                  <p className="hidden text-[0.58rem] uppercase tracking-[0.26em] text-bronze md:block">
                    {String(index + 1).padStart(2, "0")}
                  </p>
                  <h3 className="mt-2 text-[0.62rem] font-bold uppercase tracking-[0.16em] text-charcoal">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-[0.7rem] leading-[1.65] text-charcoal/55">
                    {step.description}
                  </p>
                </article>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
