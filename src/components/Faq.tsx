import type { FaqItem } from "@/lib/site";

type FaqProps = {
  items: FaqItem[];
};

export function Faq({ items }: FaqProps) {
  return (
    <section className="bg-charcoal text-ivory overflow-hidden">
      <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:py-28">

        {/* Header */}
        <div className="mb-14 lg:grid lg:grid-cols-[1fr_2fr] lg:gap-20 lg:items-end">
          <div>
            <p className="text-[0.62rem] uppercase tracking-[0.4em] text-bronze">FAQ</p>
            <h2 className="mt-4 font-serif text-4xl font-medium leading-tight text-ivory sm:text-5xl">
              Questions fréquentes
            </h2>
          </div>
          <p className="mt-4 text-sm leading-7 text-ivory/45 lg:mt-0 lg:max-w-xl">
            Toutes les réponses aux questions les plus courantes sur nos services, notre processus et notre cadre d'intervention.
          </p>
        </div>

        {/* Items */}
        <div className="divide-y divide-ivory/8 border-t border-ivory/8">
          {items.map((item, index) => (
            <details key={item.question} className="group">
              <summary className="flex cursor-pointer list-none items-start gap-6 py-7 sm:gap-8 lg:py-8">
                {/* Number */}
                <span className="shrink-0 font-serif text-sm leading-none text-bronze/40 transition-colors duration-300 group-open:text-bronze pt-1">
                  {String(index + 1).padStart(2, "0")}
                </span>

                {/* Question */}
                <span className="flex-1 font-serif text-xl leading-snug text-ivory/80 transition-colors duration-300 group-hover:text-ivory group-open:text-ivory sm:text-2xl">
                  {item.question}
                </span>

                {/* Toggle icon */}
                <span className="mt-1 shrink-0 flex h-7 w-7 items-center justify-center rounded-full border border-ivory/12 text-bronze/50 transition-all duration-300 group-hover:border-bronze/40 group-hover:text-bronze group-open:rotate-45 group-open:border-bronze/50 group-open:bg-bronze/10 group-open:text-bronze">
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
                    <line x1="6" y1="1" x2="6" y2="11" />
                    <line x1="1" y1="6" x2="11" y2="6" />
                  </svg>
                </span>
              </summary>

              {/* Answer */}
              <div className="pb-8 pl-[calc(theme(spacing.6)+0.875rem)] pr-14 sm:pl-[calc(theme(spacing.8)+0.875rem)]">
                {/* Bronze accent line */}
                <div className="mb-5 h-px w-12 bg-bronze/40" />
                <p className="text-sm leading-7 text-ivory/55">{item.answer}</p>
              </div>
            </details>
          ))}
        </div>

      </div>
    </section>
  );
}
