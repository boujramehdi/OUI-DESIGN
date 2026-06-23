import type { FaqItem } from "@/lib/site";

type FaqProps = {
  items: FaqItem[];
};

export function Faq({ items }: FaqProps) {
  return (
    <section className="bg-sand text-charcoal">
      <div className="mx-auto max-w-5xl px-5 py-16 sm:px-8 lg:py-24">
        <p className="text-xs uppercase tracking-[0.3em] text-bronze">FAQ</p>
        <h2 className="mt-5 font-serif text-3xl text-charcoal sm:text-5xl">Questions fréquentes</h2>
        <div className="mt-10 divide-y divide-bronze/15 border-y border-bronze/15">
          {items.map((item) => (
            <details key={item.question} className="group py-6">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 font-serif text-xl text-charcoal transition-colors duration-300 hover:text-bronze/90 sm:text-2xl">
                <span className="flex items-center gap-4">
                  <span className="h-0 w-0 shrink-0 bg-bronze transition-all duration-500 group-open:h-4 group-open:w-px" />
                  {item.question}
                </span>
                <span className="shrink-0 text-xl text-bronze transition-transform duration-300 group-open:rotate-45">+</span>
              </summary>
              <p className="mt-5 max-w-3xl pl-4 text-sm leading-7 text-charcoal/70">{item.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
