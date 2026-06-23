import Image from "next/image";
import Link from "next/link";
import type { ServiceSummary } from "@/lib/site";

type ServiceCardProps = {
  service: ServiceSummary;
  index?: number;
};

export function ServiceCard({ service, index }: ServiceCardProps) {
  const number = typeof index === "number" ? String(index + 1).padStart(2, "0") : null;

  return (
    <Link
      href={service.href}
      className="reveal group relative flex min-h-72 flex-col justify-between overflow-hidden border border-bronze/20 bg-charcoal p-7 text-ivory transition-all duration-500 hover:border-bronze/60 sm:p-8"
    >
      {/* Background image — cinematic reveal on hover */}
      {service.image && (
        <div className="absolute inset-0 opacity-0 transition-opacity duration-700 group-hover:opacity-100">
          <Image
            src={service.image}
            alt=""
            fill
            sizes="(min-width:1280px) 33vw, (min-width:768px) 50vw, 100vw"
            className="object-cover"
          />
          {/* Dark overlay so text stays readable */}
          <div className="absolute inset-0 bg-charcoal/78" />
        </div>
      )}

      {/* Ghost number — massive background accent */}
      {number && (
        <span
          className="pointer-events-none absolute -right-3 -bottom-6 select-none font-serif font-medium leading-none text-ivory/[0.04] transition-all duration-700 group-hover:text-bronze/[0.12] group-hover:-right-1 group-hover:-bottom-4"
          style={{ fontSize: "clamp(6rem, 10vw, 9rem)" }}
        >
          {number}
        </span>
      )}

      {/* Bottom sweep line — slides from left on hover */}
      <div className="absolute bottom-0 left-0 h-[1.5px] w-0 bg-bronze transition-all duration-700 group-hover:w-full" />

      {/* Content */}
      <div className="relative z-10">
        <div className="flex items-center justify-between gap-4 text-[0.58rem] uppercase tracking-[0.26em] text-bronze/65 transition-colors duration-300 group-hover:text-bronze">
          <span>{service.kicker}</span>
          {number && <span>{number}</span>}
        </div>
        <h3 className="mt-6 font-serif text-2xl leading-tight text-ivory transition-transform duration-500 group-hover:-translate-y-0.5 sm:text-3xl">
          {service.title}
        </h3>
        <p className="mt-4 text-sm leading-7 text-ivory/55 transition-colors duration-300 group-hover:text-ivory/75">
          {service.description}
        </p>
      </div>

      {/* Explorer link */}
      <div className="relative z-10 mt-8 flex items-center gap-4">
        <span className="h-px w-8 bg-bronze/60 transition-all duration-500 group-hover:w-16 group-hover:bg-bronze" />
        <span className="text-[0.62rem] uppercase tracking-[0.22em] text-bronze/70 transition-all duration-300 group-hover:translate-x-1 group-hover:text-ivory">
          Explorer →
        </span>
      </div>
    </Link>
  );
}
