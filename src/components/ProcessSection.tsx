import { processSteps } from "@/lib/site";

export function ProcessSection() {
  return (
    <section className="bg-ivory text-charcoal">
      <div className="mx-auto grid max-w-7xl gap-16 px-5 py-28 sm:px-8 lg:grid-cols-[0.75fr_1.8fr] lg:items-start lg:py-36">
        <div className="reveal">
          <p className="text-xs uppercase tracking-[0.3em] text-bronze">Notre processus</p>
          <h2 className="mt-6 max-w-sm font-serif text-4xl font-medium leading-[1.02] sm:text-6xl">
            Une approche claire et maîtrisée.
          </h2>
        </div>
        <div className="reveal grid gap-10 border-l border-bronze/45 pl-8 md:grid-cols-5 md:gap-0 md:border-l-0 md:border-t md:pl-0 md:pt-10">
          {processSteps.map((step, index) => (
            <article key={step.title} className="relative md:pr-8">
              <span className="absolute -left-[2.55rem] top-1 h-4 w-4 rounded-full border border-bronze bg-ivory md:-top-[3.05rem] md:left-0" />
              <p className="text-xs uppercase tracking-[0.22em] text-bronze">
                {String(index + 1).padStart(2, "0")}
              </p>
              <h3 className="mt-4 text-xs font-semibold uppercase tracking-[0.16em]">
                {step.title}
              </h3>
              <p className="mt-3 text-xs leading-6 text-charcoal/64">{step.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
