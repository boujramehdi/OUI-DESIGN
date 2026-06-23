import Image from "next/image";

type PageHeroProps = {
  eyebrow: string;
  title: string;
  text: string;
  dark?: boolean;
  image?: string;
  imageAlt?: string;
  imagePosition?: string;
  imageOverlay?: string;
};

export function PageHero({ eyebrow, title, text, dark = false, image, imageAlt = "", imagePosition = "object-center", imageOverlay }: PageHeroProps) {
  const bg = dark ? "bg-charcoal text-ivory" : "bg-ivory text-charcoal";
  const textMuted = dark ? "text-ivory/55" : "text-charcoal/55";

  /* ── Split-screen variant (when a hero image is passed) ── */
  if (image) {
    return (
      <section className={`relative overflow-hidden ${bg}`}>
        <div className="grid lg:min-h-[600px] lg:grid-cols-2">
          {/* Text side */}
          <div className="flex flex-col justify-end px-5 pb-10 pt-28 sm:px-8 sm:pb-20 sm:pt-44 lg:pb-24 lg:pl-[max(1.25rem,calc(50vw-40rem+1.25rem))] lg:pr-14 lg:pt-52">
            {/* Eyebrow + animated line */}
            <div className="anim-fade-in flex items-center gap-4">
              <span className="hero-line-grow inline-block h-px bg-bronze/70" />
              <p className="text-[0.62rem] uppercase tracking-[0.4em] text-bronze">{eyebrow}</p>
            </div>
            <h1 className="anim-slide-up anim-delay-1 mt-5 max-w-2xl font-serif text-4xl font-medium leading-[1.02] sm:text-5xl lg:text-6xl">
              {title}
            </h1>
            <div className="anim-scale-in anim-delay-3 mt-7 h-px w-16 bg-bronze/35" />
            <p className={`anim-slide-up anim-delay-3 mt-5 max-w-lg text-sm leading-7 ${textMuted}`}>
              {text}
            </p>
          </div>

          {/* Image side */}
          <div className="relative h-52 overflow-hidden sm:h-72 lg:h-auto">
            <Image
              src={image}
              alt={imageAlt}
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              priority
              className={`${imagePosition} object-cover transition duration-700 hover:scale-[1.03]`}
            />
            <div
              className={`absolute inset-0 ${dark ? "bg-gradient-to-r from-charcoal/30 to-transparent" : "bg-gradient-to-r from-ivory/20 to-transparent"}`}
            />
            {imageOverlay && (
              <div className={`absolute inset-0 ${imageOverlay}`} />
            )}
          </div>
        </div>
      </section>
    );
  }

  /* ── Centred text-only variant ── */
  return (
    <section className={`relative overflow-hidden ${bg}`}>

      {/* Thin top separator at nav-bottom */}
      <div className={`absolute left-0 right-0 top-[90px] h-px ${dark ? "bg-ivory/6" : "bg-bronze/12"}`} />

      {/* Left vertical accent */}
      <div className={`absolute bottom-0 left-0 top-[90px] w-px ${dark ? "bg-ivory/6" : "bg-bronze/15"}`} />

      {/* Ghost logo — floats slowly */}
      <div
        className="hero-logo-float pointer-events-none absolute right-[-6%] top-1/2 hidden w-[40vw] max-w-[520px] select-none opacity-[0.048] saturate-0 lg:block"
      >
        <Image
          src="/images/ouidesign-profile.png"
          alt=""
          width={520}
          height={520}
          loading="eager"
        />
      </div>

      {/* Corner decorations */}
      <div className={`absolute right-5 top-[100px] hidden h-24 w-px sm:right-8 lg:block ${dark ? "bg-ivory/8" : "bg-bronze/18"}`} />
      <div className={`absolute right-5 top-[100px] hidden h-px w-24 sm:right-8 lg:block ${dark ? "bg-ivory/8" : "bg-bronze/18"}`} />

      {/* Content */}
      <div className="relative mx-auto max-w-7xl px-5 pb-20 pt-36 sm:px-8 sm:pb-24 sm:pt-44 lg:pb-32 lg:pt-52">

        {/* Eyebrow with animated leading line */}
        <div className="anim-fade-in flex items-center gap-5">
          <span className="hero-line-grow inline-block h-px bg-bronze/65" />
          <p className="text-[0.62rem] uppercase tracking-[0.4em] text-bronze">{eyebrow}</p>
        </div>

        {/* Title — large and bold */}
        <h1 className="anim-slide-up anim-delay-1 mt-5 max-w-5xl font-serif text-4xl font-medium leading-[1.02] sm:text-5xl lg:text-[3.75rem]">
          {title}
        </h1>

        {/* Bronze separator line */}
        <div className="anim-scale-in anim-delay-3 mt-8 h-px w-20 bg-bronze/40" />

        {/* Description */}
        <p className={`anim-slide-up anim-delay-4 mt-6 max-w-2xl text-sm leading-7 ${textMuted}`}>
          {text}
        </p>

        {/* Bottom ambient label */}
        <div className={`anim-fade-in anim-delay-6 mt-14 flex items-center gap-6 ${dark ? "text-ivory/25" : "text-charcoal/28"}`}>
          <span className="text-[0.55rem] uppercase tracking-[0.3em]">Marrakech, Maroc</span>
          <span className="h-px w-6 bg-current opacity-40" />
          <span className="text-[0.55rem] uppercase tracking-[0.3em]">Ouidesign · 2026</span>
        </div>
      </div>
    </section>
  );
}
