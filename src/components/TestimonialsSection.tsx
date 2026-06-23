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
      reviewRating: {
        "@type": "Rating",
        ratingValue: t.rating,
        bestRating: 5,
      },
      itemReviewed: {
        "@type": "LocalBusiness",
        name: "Ouidesign",
        url: "https://ouidesign.ma",
      },
    },
  })),
};

export function TestimonialsSection() {
  return (
    <section className="relative overflow-hidden bg-charcoal text-ivory">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewsJsonLd) }}
      />

      {/* Top gradient line */}
      <div className="absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-bronze/35 to-transparent" />

      <div className="relative mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:py-28">

        {/* Header — profile + title + subtitle */}
        <div className="reveal mb-16 grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
          <div className="flex items-center gap-6">
            <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-full border-2 border-bronze/50 shadow-[0_0_32px_rgba(184,146,95,0.18)] transition-transform duration-500 hover:scale-105">
              <Image
                src="/images/ouidesign-profile.png"
                alt="Ouidesign — architecture intelligente à Marrakech"
                fill
                sizes="80px"
                className="object-cover"
              />
            </div>
            <div>
              <p className="text-[0.62rem] uppercase tracking-[0.42em] text-bronze">
                Témoignages clients
              </p>
              <h2 className="mt-2 font-serif text-3xl font-medium leading-tight sm:text-4xl lg:text-5xl">
                Ce que disent nos clients.
              </h2>
              <div className="mt-3 h-px w-12 bg-bronze/40" />
            </div>
          </div>
          <p className="max-w-xs text-[0.6rem] leading-6 text-ivory/35 lg:text-right lg:pb-1">
            Nos projets sont souvent confidentiels. Ces témoignages sont partagés
            avec l'accord explicite de nos clients.
          </p>
        </div>

        {/* Cards */}
        <div className="grid gap-5 sm:grid-cols-3">
          {testimonials.map((t, index) => (
            <blockquote
              key={index}
              className="reveal group relative flex flex-col overflow-hidden bg-ivory text-charcoal transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_28px_64px_rgba(0,0,0,0.25)]"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Left bronze accent — brightens on hover */}
              <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-bronze/25 transition-all duration-500 group-hover:bg-bronze" />

              {/* Giant decorative quote mark */}
              <span
                className="pointer-events-none absolute right-4 top-2 select-none font-serif font-bold leading-none text-charcoal/[0.04] transition-colors duration-500 group-hover:text-bronze/[0.07]"
                style={{ fontSize: "7rem" }}
                aria-hidden="true"
              >
                "
              </span>

              <div className="relative flex flex-col flex-1 p-8 sm:p-9">
                {/* Stars — staggered fade in */}
                <div className="flex gap-1.5" aria-label={`${t.rating} étoiles sur 5`}>
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <svg
                      key={i}
                      width="11"
                      height="11"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="text-bronze transition-transform duration-300 group-hover:scale-110"
                      style={{ transitionDelay: `${i * 40}ms` }}
                    >
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                  ))}
                </div>

                {/* Bronze rule — extends on hover */}
                <div className="mt-5 h-px w-8 bg-bronze/40 transition-all duration-500 group-hover:w-16 group-hover:bg-bronze/70" />

                {/* Quote */}
                <p className="mt-5 flex-1 font-serif text-base leading-8 text-charcoal/75 transition-colors duration-300 group-hover:text-charcoal/90 sm:text-[1.05rem]">
                  {t.quote}
                </p>

                {/* Footer */}
                <footer className="mt-8 flex items-center justify-between border-t border-charcoal/8 pt-5">
                  <div>
                    <p className="text-[0.62rem] font-medium uppercase tracking-[0.22em] text-charcoal">
                      {t.author}
                    </p>
                    <p className="mt-1 text-[0.55rem] uppercase tracking-[0.18em] text-bronze/80 transition-colors duration-300 group-hover:text-bronze">
                      {t.context}
                    </p>
                  </div>
                  <div className="relative h-9 w-9 shrink-0 overflow-hidden rounded-full border border-bronze/30 transition-all duration-300 group-hover:border-bronze/70 group-hover:shadow-[0_0_12px_rgba(184,146,95,0.25)]">
                    <Image
                      src="/images/ouidesign-profile.png"
                      alt="Ouidesign"
                      fill
                      sizes="36px"
                      className="object-cover"
                    />
                  </div>
                </footer>
              </div>
            </blockquote>
          ))}
        </div>

        {/* Bottom ambient strip */}
        <div className="reveal mt-14 flex items-center justify-center gap-6 text-ivory/20">
          <span className="h-px w-12 bg-current opacity-40" />
          <span className="text-[0.55rem] uppercase tracking-[0.3em]">Confidentialité garantie</span>
          <span className="h-px w-12 bg-current opacity-40" />
        </div>
      </div>

      {/* Bottom gradient line */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-bronze/30 to-transparent" />
    </section>
  );
}
