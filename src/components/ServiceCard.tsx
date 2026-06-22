import Link from "next/link";
import type { ServiceSummary } from "@/lib/site";

type ServiceCardProps = {
  service: ServiceSummary;
  index?: number;
};

export function ServiceCard({ service, index }: ServiceCardProps) {
  const number = typeof index === "number" ? String(index + 1).padStart(2, "0") : null;

  return (
    <article className="group relative flex min-h-64 flex-col justify-between border border-bronze/20 bg-charcoal p-6 text-ivory transition duration-300 hover:border-bronze sm:p-7">
      <div>
        <div className="flex items-center justify-between gap-6 text-[0.6rem] uppercase tracking-[0.22em] text-bronze/70">
          <span>{service.kicker}</span>
          {number ? <span>{number}</span> : null}
        </div>
        <h3 className="mt-7 font-serif text-2xl leading-tight text-ivory sm:text-3xl">{service.title}</h3>
        <p className="mt-4 text-sm leading-7 text-ivory/60">{service.description}</p>
      </div>
      <div className="mt-7 flex items-center gap-4">
        <span className="h-px w-8 bg-bronze transition-all duration-300 group-hover:w-14" />
        <Link
          href={service.href}
          className="text-[0.65rem] uppercase tracking-[0.2em] text-bronze transition group-hover:text-ivory"
        >
          Explorer
        </Link>
      </div>
    </article>
  );
}
