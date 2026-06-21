import Link from "next/link";
import type { ServiceSummary } from "@/lib/site";

type ServiceCardProps = {
  service: ServiceSummary;
  index?: number;
};

export function ServiceCard({ service, index }: ServiceCardProps) {
  const number = typeof index === "number" ? String(index + 1).padStart(2, "0") : null;

  return (
    <article className="group flex min-h-72 flex-col justify-between border border-charcoal/10 bg-ivory p-6 transition hover:border-bronze hover:bg-smoke sm:p-7">
      <div>
        <div className="flex items-center justify-between gap-6 text-xs uppercase text-stone">
          <span>{service.kicker}</span>
          {number ? <span>{number}</span> : null}
        </div>
        <h3 className="mt-8 font-serif text-3xl leading-tight text-charcoal">{service.title}</h3>
        <p className="mt-5 text-sm leading-7 text-charcoal/68">{service.description}</p>
      </div>
      <Link
        href={service.href}
        className="mt-8 inline-flex text-sm uppercase text-charcoal transition group-hover:text-bronze"
      >
        Explorer
      </Link>
    </article>
  );
}
