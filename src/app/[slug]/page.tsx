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

  if (!service) {
    return {};
  }

  return {
    title: service.metaTitle,
    description: service.metaDescription,
    alternates: {
      canonical: `/${service.slug}`,
    },
  };
}

export default async function ServiceRoutePage({ params }: ServiceRouteProps) {
  const { slug } = await params;
  const service = getServicePage(slug);

  if (!service) {
    notFound();
  }

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: service.faq.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
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
      address: {
        "@type": "PostalAddress",
        addressLocality: "Maroc",
        addressCountry: "MA",
      },
    },
    areaServed: {
      "@type": "Country",
      name: "Maroc",
    },
    serviceType: service.title,
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Accueil",
        item: "https://ouidesign.ma",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Expertises",
        item: "https://ouidesign.ma/expertises",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: service.title,
        item: `https://ouidesign.ma/${service.slug}`,
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <PageHero
        eyebrow={service.eyebrow}
        title={service.h1}
        text={service.intro}
        image={service.heroImage}
        imageAlt={service.heroImageAlt}
        imagePosition={service.heroImagePosition}
        imageOverlay={service.heroImageOverlay}
      />

      {/* Highlights — ivory bg, dark cards */}
      <section className="bg-ivory">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 py-20 sm:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:py-28">
          <div>
            <p className="text-[0.65rem] uppercase tracking-[0.4em] text-bronze">
              {service.title}
            </p>
            <h2 className="mt-3 font-serif text-3xl font-medium leading-tight text-charcoal sm:text-4xl">
              Une intervention premium, pensée avant d'être exécutée.
            </h2>
            <p className="mt-4 text-sm leading-7 text-charcoal/65">
              Ouidesign privilégie les décisions cohérentes : esthétique, technique, confort,
              maintenance et valeur long terme du bien.
            </p>
          </div>
          <div className="grid gap-4">
            {service.highlights.map((highlight, index) => (
              <article
                key={highlight}
                className="group relative overflow-hidden border border-bronze/20 bg-sand p-6 text-charcoal transition-all duration-500 hover:border-bronze/50 hover:bg-[#cbb89a]"
              >
                {/* Top sweep */}
                <div className="absolute left-0 top-0 h-[2px] w-0 bg-bronze transition-all duration-700 group-hover:w-full" />
                <p className="text-[0.6rem] uppercase tracking-[0.28em] text-bronze transition-colors duration-300 group-hover:text-bronze">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <h3 className="mt-4 font-serif text-2xl text-charcoal transition-all duration-300 group-hover:-translate-y-0.5 group-hover:text-charcoal">{highlight}</h3>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Deliverables — dark bg */}
      <section className="bg-charcoal text-ivory">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:py-24">
          <div className="mb-12 flex items-end justify-between">
            <p className="text-[0.65rem] uppercase tracking-[0.4em] text-bronze">Livrables</p>
            <span className="h-px flex-1 mx-8 bg-bronze/15" />
            <p className="font-serif text-2xl text-ivory/20">{String(service.deliverables.length).padStart(2, "0")}</p>
          </div>
          <div className="grid gap-px bg-bronze/10 md:grid-cols-2 lg:grid-cols-4">
            {service.deliverables.map((deliverable, index) => (
              <article key={deliverable} className="group relative overflow-hidden bg-[rgba(255,255,255,0.04)] p-8 transition-all duration-300 hover:bg-[rgba(184,146,95,0.12)] border border-ivory/5 hover:border-bronze/30">
                {/* Background number */}
                <span className="absolute -right-2 -top-3 font-serif text-[5rem] font-medium leading-none text-ivory/[0.03] transition-colors duration-300 group-hover:text-bronze/[0.08] select-none">
                  {String(index + 1).padStart(2, "0")}
                </span>
                {/* Top sweep */}
                <div className="absolute left-0 top-0 h-[2px] w-0 bg-bronze transition-all duration-700 group-hover:w-full" />
                {/* Bronze line — grows on hover */}
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

      {/* Other expertises — ivory */}
      <section className="bg-ivory">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:py-24">
          <p className="text-[0.65rem] uppercase tracking-[0.4em] text-bronze">
            Autres expertises
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            {mainServices
              .filter((item) => item.href !== `/${service.slug}`)
              .slice(0, 6)
              .map((item) => (
                <Link
                  key={item.title}
                  href={item.href}
                  className="border border-bronze/25 px-4 py-3 text-xs uppercase tracking-[0.14em] text-charcoal/70 transition hover:border-bronze hover:text-bronze"
                >
                  {item.title}
                </Link>
              ))}
          </div>
          <Link
            href={whatsappHref(`Bonjour Ouidesign, je souhaite parler de ${service.title}.`)}
            target="_blank"
            className="mt-10 inline-flex items-center gap-3 bg-bronze px-6 py-4 text-xs uppercase tracking-[0.18em] text-charcoal transition duration-300 hover:bg-charcoal hover:text-ivory"
          >
            Demander une orientation
          </Link>
        </div>
      </section>

      <CTASection title="Parlons de votre propriété au Maroc." />
    </>
  );
}
