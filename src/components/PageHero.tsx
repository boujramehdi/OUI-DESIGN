import Image from "next/image";

type PageHeroProps = {
  eyebrow: string;
  title: string;
  text: string;
  dark?: boolean;
};

export function PageHero({ eyebrow, title, text, dark = false }: PageHeroProps) {
  return (
    <section className={dark ? "relative overflow-hidden bg-charcoal text-ivory" : "relative overflow-hidden bg-ivory text-charcoal"}>
      <Image
        src="/images/ouidesign-profile.png"
        alt=""
        width={760}
        height={760}
        loading="eager"
        className="absolute -right-32 top-1/2 hidden -translate-y-1/2 opacity-[0.055] saturate-0 lg:block"
      />
      <div className="relative mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:py-28">
        <p className={dark ? "text-xs uppercase text-bronze" : "text-xs uppercase text-bronze"}>
          {eyebrow}
        </p>
        <h1 className="mt-6 max-w-5xl font-serif text-5xl leading-tight sm:text-7xl">{title}</h1>
        <p className={dark ? "mt-8 max-w-3xl text-lg leading-8 text-ivory/72" : "mt-8 max-w-3xl text-lg leading-8 text-charcoal/72"}>
          {text}
        </p>
      </div>
    </section>
  );
}
