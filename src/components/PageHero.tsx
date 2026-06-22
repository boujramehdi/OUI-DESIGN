import Image from "next/image";

type PageHeroProps = {
  eyebrow: string;
  title: string;
  text: string;
  dark?: boolean;
};

export function PageHero({ eyebrow, title, text, dark = false }: PageHeroProps) {
  return (
    <section
      className={
        dark
          ? "relative overflow-hidden bg-charcoal text-ivory"
          : "relative overflow-hidden bg-ivory text-charcoal"
      }
    >
      <Image
        src="/images/ouidesign-profile.png"
        alt=""
        width={680}
        height={680}
        loading="eager"
        className="absolute -right-24 top-1/2 hidden -translate-y-1/2 opacity-[0.04] saturate-0 lg:block"
      />
      <div className="relative mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-24 lg:py-32">
        <p className="text-[0.65rem] uppercase tracking-[0.4em] text-bronze">{eyebrow}</p>
        <h1 className="mt-4 max-w-4xl font-serif text-3xl font-medium leading-[1.04] sm:text-4xl lg:text-5xl">
          {title}
        </h1>
        <p
          className={
            dark
              ? "mt-4 max-w-2xl text-sm leading-7 text-ivory/65"
              : "mt-4 max-w-2xl text-sm leading-7 text-charcoal/65"
          }
        >
          {text}
        </p>
      </div>
    </section>
  );
}
