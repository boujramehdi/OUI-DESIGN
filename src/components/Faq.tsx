import type { FaqItem } from "@/lib/site";

type FaqProps = {
  items: FaqItem[];
};

export function Faq({ items }: FaqProps) {
  return (
    <section className="bg-smoke">
      <div className="mx-auto max-w-5xl px-5 py-16 sm:px-8 lg:py-24">
        <p className="text-xs uppercase text-bronze">FAQ</p>
        <h2 className="mt-5 font-serif text-4xl text-charcoal sm:text-5xl">Questions fréquentes</h2>
        <div className="mt-10 divide-y divide-charcoal/10 border-y border-charcoal/10">
          {items.map((item) => (
            <details key={item.question} className="group py-6">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 font-serif text-2xl text-charcoal">
                {item.question}
                <span className="text-xl text-bronze transition group-open:rotate-45">+</span>
              </summary>
              <p className="mt-4 max-w-3xl text-sm leading-7 text-charcoal/70">{item.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
