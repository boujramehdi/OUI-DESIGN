import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CTASection } from "@/components/CTASection";
import { Faq } from "@/components/Faq";
import { PageHero } from "@/components/PageHero";
import { mainServices, getServicePage, servicePages, whatsappHref } from "@/lib/site";

type ServiceRouteProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return servicePages.map((service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata({ params }: ServiceRouteProps): Promise<Metadata> {
  const { slug } = await params;
  const service = getServicePage(slug);

  if (!service) return {};

  return {
    title: service.metaTitle,
    description: service.metaDescription,
    alternates: { canonical: `/${service.slug}` },
  };
}

export default async function ServiceRoutePage({ params }: ServiceRouteProps) {
  const { slug } = await params;
  const service = getServicePage(slug);

  if (!service) notFound();

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: service.faq.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer },
    })),
  };

  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.title,
    description: service.metaDescription,
    provider: {
      "@type": "LocalBusiness",
      name: "Ouidesign",
      url: "https://ouidesign.ma",
      telephone: "+212 649 055 897",
      address: { "@type": "PostalAddress", addressLocality: "Maroc", addressCountry: "MA" },
    },
    areaServed: { "@type": "Country", name: "Maroc" },
    serviceType: service.title,
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Accueil", item: "https://ouidesign.ma" },
      { "@type": "ListItem", position: 2, name: "Expertises", item: "https://ouidesign.ma/expertises" },
      { "@type": "ListItem", position: 3, name: service.title, item: `https://ouidesign.ma/${service.slug}` },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />

      <PageHero
        eyebrow={service.eyebrow}
        title={service.h1}
        text={service.intro}
        image={service.heroImage}
        imageAlt={service.heroImageAlt}
        imagePosition={service.heroImagePosition}
        imageOverlay={service.heroImageOverlay}
      />

      {/* ── HIGHLIGHTS ── */}
      <section className="bg-ivory">
        <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8 sm:py-20 lg:py-28">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-12">

            {/* Left — intro text */}
            <div className="text-center sm:text-left">
              <p className="text-[0.65rem] uppercase tracking-[0.4em] text-bronze">
                {service.title}
              </p>
              <h2 className="mt-3 font-serif text-3xl font-medium leading-tight text-charcoal sm:text-4xl">
                Une intervention premium, pensée avant d&apos;être exécutée.
              </h2>
              <div className="mx-auto mt-5 h-px w-12 bg-bronze/30 sm:mx-0" />
              <p className="mt-5 text-sm leading-7 text-charcoal/65">
                Ouidesign privilégie les décisions cohérentes : esthétique, technique, confort,
                maintenance et valeur long terme du bien.
              </p>
            </div>

            {/* Right — highlights */}
            <div>
              {/* Mobile: snap carousel */}
              <div className="relative -mx-5 sm:hidden">
                <div className="flex items-start snap-x snap-mandatory overflow-x-auto scrollbar-hide gap-3 px-5 pb-4">
                  {service.highlights.map((highlight, index) => (
                    <article
                      key={highlight}
                      className="group snap-start shrink-0 w-[78vw] relative overflow-hidden border border-bronze/20 bg-sand p-6 text-charcoal transition-all duration-500 active:border-bronze/60 active:bg-[#cbb89a]"
                    >
                      <div className="absolute left-0 top-0 h-[2px] w-0 bg-bronze transition-all duration-500 group-active:w-full" />
                      <p className="text-[0.6rem] uppercase tracking-[0.28em] text-bronze">
                        {String(index + 1).padStart(2, "0")}
                      </p>
                      <h3 className="mt-4 font-serif text-xl text-charcoal">{highlight}</h3>
                    </article>
                  ))}
                  <div className="shrink-0 w-5" aria-hidden="true" />
                </div>
                <div className="pointer-events-none absolute inset-y-0 right-0 w-12 bg-gradient-to-l from-ivory to-transparent" />
              </div>

              {/* Desktop: grid */}
              <div className="hidden gap-4 sm:grid">
                {service.highlights.map((highlight, index) => (
                  <article
                    key={highlight}
                    className="group relative overflow-hidden border border-bronze/20 bg-sand p-6 text-charcoal transition-all duration-500 hover:border-bronze/50 hover:bg-[#cbb89a]"
                  >
                    <div className="absolute left-0 top-0 h-[2px] w-0 bg-bronze transition-all duration-700 group-hover:w-full" />
                    <p className="text-[0.6rem] uppercase tracking-[0.28em] text-bronze">
                      {String(index + 1).padStart(2, "0")}
                    </p>
                    <h3 className="mt-4 font-serif text-2xl text-charcoal transition-all duration-300 group-hover:-translate-y-0.5">
                      {highlight}
                    </h3>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── DELIVERABLES ── */}
      <section className="bg-charcoal text-ivory">
        <div className="mx-auto max-w-7xl px-5 py-12 sm:px-8 sm:py-16 lg:py-24">

          {/* Header */}
          <div className="mb-8 flex items-center gap-6 sm:mb-12">
            <p className="shrink-0 text-[0.65rem] uppercase tracking-[0.4em] text-bronze">Livrables</p>
            <span className="h-px flex-1 bg-bronze/15" />
            <p className="shrink-0 font-serif text-2xl text-ivory/20">
              {String(service.deliverables.length).padStart(2, "0")}
            </p>
          </div>

          {/* Mobile: snap carousel */}
          <div className="relative -mx-5 sm:hidden">
            <div className="flex items-start snap-x snap-mandatory overflow-x-auto scrollbar-hide gap-px pb-4 px-5">
              {service.deliverables.map((deliverable, index) => (
                <article
                  key={deliverable}
                  className="group snap-start shrink-0 w-[72vw] relative overflow-hidden bg-[rgba(255,255,255,0.04)] p-7 transition-all duration-300 active:bg-[rgba(184,146,95,0.12)] border border-ivory/[0.05] active:border-bronze/30"
                >
                  <span className="pointer-events-none absolute -right-2 -top-3 select-none font-serif text-[5rem] font-medium leading-none text-ivory/[0.03]">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <div className="absolute left-0 top-0 h-[2px] w-0 bg-bronze transition-all duration-500 group-active:w-full" />
                  <div className="mb-5 h-px w-6 bg-bronze/40 transition-all duration-500 group-active:w-12 group-active:bg-bronze" />
                  <h3 className="relative font-serif text-lg leading-tight text-ivory">
                    {deliverable}
                  </h3>
                </article>
              ))}
              <div className="shrink-0 w-5" aria-hidden="true" />
            </div>
            <div className="pointer-events-none absolute inset-y-0 right-0 w-14 bg-gradient-to-l from-charcoal to-transparent" />
          </div>

          {/* Desktop: grid */}
          <div className="hidden gap-px bg-bronze/10 sm:grid sm:grid-cols-2 lg:grid-cols-4">
            {service.deliverables.map((deliverable, index) => (
              <article
                key={deliverable}
                className="group relative overflow-hidden bg-[rgba(255,255,255,0.04)] p-8 transition-all duration-300 hover:bg-[rgba(184,146,95,0.12)] border border-ivory/[0.05] hover:border-bronze/30"
              >
                <span className="absolute -right-2 -top-3 select-none font-serif text-[5rem] font-medium leading-none text-ivory/[0.03] transition-colors duration-300 group-hover:text-bronze/[0.08]">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div className="absolute left-0 top-0 h-[2px] w-0 bg-bronze transition-all duration-700 group-hover:w-full" />
                <div className="mb-6 h-px w-6 bg-bronze/40 transition-all duration-500 group-hover:w-12 group-hover:bg-bronze" />
                <h3 className="relative font-serif text-xl leading-tight text-ivory transition-all duration-300 group-hover:-translate-y-0.5 sm:text-2xl">
                  {deliverable}
                </h3>
              </article>
            ))}
          </div>
        </div>
      </section>

      <Faq items={service.faq} />

      {/* ── OTHER EXPERTISES ── */}
      <section className="bg-ivory">
        <div className="mx-auto max-w-7xl px-5 py-12 sm:px-8 sm:py-16 lg:py-24">

          <div className="mb-8 flex flex-col items-center gap-4 text-center sm:flex-row sm:items-end sm:justify-between sm:text-left sm:mb-10">
            <div>
              <p className="text-[0.65rem] uppercase tracking-[0.4em] text-bronze">Autres expertises</p>
              <h2 className="mt-3 font-serif text-2xl font-medium text-charcoal sm:text-3xl">
                Ouidesign va plus loin.
              </h2>
            </div>
            <Link
              href={whatsappHref(`Bonjour Ouidesign, je souhaite parler de ${service.title}.`)}
              target="_blank"
              className="hidden shrink-0 items-center gap-3 bg-bronze px-6 py-3.5 text-xs uppercase tracking-[0.18em] text-charcoal transition duration-300 hover:bg-charcoal hover:text-ivory sm:inline-flex"
            >
              Demander une orientation
            </Link>
          </div>

          {/* Mobile: snap carousel */}
          <div className="relative -mx-5 sm:hidden">
            <div className="flex items-start snap-x snap-mandatory overflow-x-auto scrollbar-hide gap-px pb-4 px-5">
              {mainServices
                .filter((item) => item.href !== `/${service.slug}`)
                .slice(0, 6)
                .map((item, index) => (
                  <Link
                    key={item.title}
                    href={item.href}
                    className="group snap-start shrink-0 w-[64vw] relative flex items-center gap-4 overflow-hidden bg-ivory border border-bronze/15 px-5 py-5 transition-all duration-300 active:bg-sand active:border-bronze/40"
                  >
                    <div className="absolute left-0 top-0 h-[2px] w-0 bg-bronze transition-all duration-500 group-active:w-full" />
                    <span className="shrink-0 font-serif text-sm text-bronze/30 transition-colors duration-300 group-active:text-bronze/70">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span className="text-[0.6rem] uppercase tracking-[0.14em] text-charcoal/65 leading-tight transition-colors duration-300 group-active:text-charcoal">
                      {item.title}
                    </span>
                    <span className="ml-auto shrink-0 text-bronze/30 transition-all duration-300 group-active:translate-x-0.5 group-active:text-bronze">→</span>
                  </Link>
                ))}
              <div className="shrink-0 w-5" aria-hidden="true" />
            </div>
            <div className="pointer-events-none absolute inset-y-0 right-0 w-12 bg-gradient-to-l from-ivory to-transparent" />
          </div>

          {/* Desktop: grid */}
          <div className="hidden gap-px bg-bronze/10 sm:grid sm:grid-cols-2 lg:grid-cols-3">
            {mainServices
              .filter((item) => item.href !== `/${service.slug}`)
              .slice(0, 6)
              .map((item, index) => (
                <Link
                  key={item.title}
                  href={item.href}
                  className="group relative flex items-center justify-between overflow-hidden bg-ivory px-7 py-6 transition-all duration-300 hover:bg-sand"
                >
                  <div className="absolute left-0 top-0 h-[2px] w-0 bg-bronze transition-all duration-500 group-hover:w-full" />
                  <div className="flex items-center gap-5">
                    <span className="font-serif text-sm text-bronze/30 transition-colors duration-300 group-hover:text-bronze/70">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span className="text-xs uppercase tracking-[0.16em] text-charcoal/70 transition-colors duration-300 group-hover:text-charcoal">
                      {item.title}
                    </span>
                  </div>
                  <span className="text-bronze/30 transition-all duration-300 group-hover:translate-x-1 group-hover:text-bronze">→</span>
                </Link>
              ))}
          </div>

          <Link
            href={whatsappHref(`Bonjour Ouidesign, je souhaite parler de ${service.title}.`)}
            target="_blank"
            className="mt-6 inline-flex items-center gap-3 bg-bronze px-6 py-4 text-xs uppercase tracking-[0.18em] text-charcoal transition duration-300 hover:bg-charcoal hover:text-ivory sm:hidden"
          >
            Demander une orientation
          </Link>
        </div>
      </section>

      <CTASection title="Parlons de votre propriété au Maroc." />
    </>
  );
}
