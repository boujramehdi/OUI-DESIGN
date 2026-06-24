import Image from "next/image";

const testimonials = [
  {
    quote:
      "Ouidesign a transformé notre villa de la Palmeraie en un lieu que nous ne reconnaissons plus — dans le bon sens du terme. Chaque détail, de la menuiserie à la domotique, est parfaitement intégré.",
    author: "S. & M. B.",
    context: "Villa familiale, Palmeraie",
    rating: 5,
  },
  {
    quote:
      "Un interlocuteur unique pour la rénovation complète, la piscine, le smart home et la sécurité. On ne réalise pas à quel point c'est précieux avant de l'avoir vécu.",
    author: "F. L.",
    context: "Riad de réception, Médina",
    rating: 5,
  },
  {
    quote:
      "Notre villa Airbnb génère des revenus bien au-dessus du marché depuis la transformation. Les guests mentionnent systématiquement la qualité de l'espace et la fluidité des équipements.",
    author: "K. A.",
    context: "Villa premium Airbnb, Route de l'Ourika",
    rating: 5,
  },
];

const reviewsJsonLd = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  itemListElement: testimonials.map((t, i) => ({
    "@type": "ListItem",
    position: i + 1,
    item: {
      "@type": "Review",
      reviewBody: t.quote,
      author: { "@type": "Person", name: t.author },
      reviewRating: { "@type": "Rating", ratingValue: t.rating, bestRating: 5 },
      itemReviewed: { "@type": "LocalBusiness", name: "Ouidesign", url: "https://ouidesign.ma" },
    },
  })),
};

function TestimonialCard({ t, index, mobile }: { t: typeof testimonials[number]; index: number; mobile?: boolean }) {
  return (
    <blockquote
      className={`group relative flex flex-col overflow-hidden bg-ivory text-charcoal transition-all duration-500 hover:shadow-[0_28px_64px_rgba(0,0,0,0.25)] ${
        mobile
          ? "snap-start shrink-0 w-[84vw]"
          : "hover:-translate-y-2"
      }`}
    >
      {/* Left bronze accent */}
      <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-bronze/25 transition-all duration-500 group-hover:bg-bronze" />

      {/* Decorative quote mark */}
      <span
        className="pointer-events-none absolute right-4 top-2 select-none font-serif font-bold leading-none text-charcoal/[0.04] transition-colors duration-500 group-hover:text-bronze/[0.07]"
        style={{ fontSize: "7rem" }}
        aria-hidden="true"
      >
        "
      </span>

      <div className="relative flex flex-1 flex-col p-7 sm:p-9">
        {/* Stars */}
        <div className="flex gap-1.5" aria-label={`${t.rating} étoiles sur 5`}>
          {Array.from({ length: t.rating }).map((_, i) => (
            <svg key={i} width="11" height="11" viewBox="0 0 24 24" fill="currentColor"
              className="text-bronze transition-transform duration-300 group-hover:scale-110"
              style={{ transitionDelay: `${i * 40}ms` }}>
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
            </svg>
          ))}
        </div>

        <div className="mt-5 h-px w-8 bg-bronze/40 transition-all duration-500 group-hover:w-16 group-hover:bg-bronze/70" />

        <p className="mt-5 flex-1 font-serif text-base leading-8 text-charcoal/75 transition-colors duration-300 group-hover:text-charcoal/90 sm:text-[1.05rem]">
          {t.quote}
        </p>

        <footer className="mt-8 flex items-center justify-between border-t border-charcoal/8 pt-5">
          <div>
            <p className="text-[0.62rem] font-medium uppercase tracking-[0.22em] text-charcoal">{t.author}</p>
            <p className="mt-1 text-[0.55rem] uppercase tracking-[0.18em] text-bronze/80 transition-colors duration-300 group-hover:text-bronze">
              {t.context}
            </p>
          </div>
          <div className="relative h-9 w-9 shrink-0 overflow-hidden rounded-full border border-bronze/30 transition-all duration-300 group-hover:border-bronze/70 group-hover:shadow-[0_0_12px_rgba(184,146,95,0.25)]">
            <Image src="/images/ouidesign-profile.png" alt="Ouidesign" fill sizes="36px" className="object-cover" />
          </div>
        </footer>
      </div>
    </blockquote>
  );
}

export function TestimonialsSection() {
  return (
    <section className="relative overflow-hidden bg-charcoal text-ivory">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewsJsonLd) }} />

      <div className="absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-bronze/35 to-transparent" />

      <div className="relative mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20 lg:py-28">

        {/* Header */}
        <div className="reveal mb-10 lg:mb-16">
          <div className="flex items-center justify-between gap-6">
            <div className="flex items-center gap-5">
              <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-full border-2 border-bronze/50 shadow-[0_0_24px_rgba(184,146,95,0.18)] sm:h-20 sm:w-20">
                <Image src="/images/ouidesign-profile.png" alt="Ouidesign" fill sizes="80px" className="object-cover" />
              </div>
              <div>
                <p className="text-[0.62rem] uppercase tracking-[0.42em] text-bronze">Témoignages clients</p>
                <h2 className="mt-1.5 font-serif text-2xl font-medium leading-tight sm:text-3xl lg:text-5xl">
                  Ce que disent<br className="sm:hidden" /> nos clients.
                </h2>
                <div className="mt-2 h-px w-10 bg-bronze/40" />
              </div>
            </div>
            {/* Swipe hint — mobile only */}
            <div className="flex shrink-0 flex-col items-end gap-1 sm:hidden">
              <span className="text-[0.42rem] uppercase tracking-[0.38em] text-ivory/25">Glisser</span>
              <div className="flex gap-1">
                {testimonials.map((_, i) => <div key={i} className="h-px w-4 bg-bronze/30" />)}
              </div>
            </div>
          </div>
        </div>

        {/* ── MOBILE: horizontal snap scroll ── */}
        <div className="relative -mx-5 sm:hidden">
          <div className="flex gap-4 overflow-x-auto snap-x snap-mandatory scrollbar-hide pl-5 pb-5">
            {testimonials.map((t, index) => (
              <TestimonialCard key={index} t={t} index={index} mobile />
            ))}
            <div className="shrink-0 w-5" aria-hidden="true" />
          </div>
          {/* Right-edge fade */}
          <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-charcoal to-transparent" />
        </div>

        {/* ── TABLET+DESKTOP: grid ── */}
        <div className="hidden sm:grid sm:grid-cols-3 sm:gap-5">
          {testimonials.map((t, index) => (
            <TestimonialCard key={index} t={t} index={index} />
          ))}
        </div>

        <div className="reveal mt-10 flex items-center justify-center gap-6 text-charcoal/25 lg:mt-14">
          <span className="h-px w-12 bg-current opacity-40" />
          <span className="text-[0.55rem] uppercase tracking-[0.3em]">Confidentialité garantie</span>
          <span className="h-px w-12 bg-current opacity-40" />
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-bronze/30 to-transparent" />
    </section>
  );
}
