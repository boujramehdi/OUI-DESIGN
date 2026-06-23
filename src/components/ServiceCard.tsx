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

      {/* Ghost number — fades out when image appears */}
      {number && (
        <span
          className="pointer-events-none absolute -right-3 -bottom-6 select-none font-serif font-medium leading-none text-ivory/[0.04] transition-all duration-500 group-hover:opacity-0"
          style={{ fontSize: "clamp(6rem, 10vw, 9rem)" }}
        >
          {number}
        </span>
      )}

      {/* Bottom sweep line */}
      <div className="absolute bottom-0 left-0 h-[1.5px] w-0 bg-bronze transition-all duration-700 group-hover:w-full" />

      {/* Content — fades out on hover */}
      <div className="relative z-10 transition-all duration-500 group-hover:opacity-0 group-hover:-translate-y-2">
        <div className="flex items-center justify-between gap-4 text-[0.58rem] uppercase tracking-[0.26em] text-bronze/65">
          <span>{service.kicker}</span>
          {number && <span>{number}</span>}
        </div>
        <h3 className="mt-6 font-serif text-2xl leading-tight text-ivory sm:text-3xl">
          {service.title}
        </h3>
        <p className="mt-4 text-sm leading-7 text-ivory/55">
          {service.description}
        </p>
      </div>

      {/* Explorer link — fades out on hover */}
      <div className="relative z-10 mt-8 flex items-center gap-4 transition-all duration-500 group-hover:opacity-0 group-hover:translate-y-2">
        <span className="h-px w-8 bg-bronze/60" />
        <span className="text-[0.62rem] uppercase tracking-[0.22em] text-bronze/70">
          Explorer →
        </span>
      </div>
    </Link>
  );
}
