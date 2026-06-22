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

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <PageHero eyebrow={service.eyebrow} title={service.h1} text={service.intro} dark />

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
                className="border border-bronze/20 bg-charcoal p-6 text-ivory"
              >
                <p className="text-[0.6rem] uppercase tracking-[0.28em] text-bronze">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <h3 className="mt-4 font-serif text-2xl text-ivory">{highlight}</h3>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Deliverables — dark bg */}
      <section className="bg-charcoal text-ivory">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:py-24">
          <p className="mb-8 text-[0.65rem] uppercase tracking-[0.4em] text-bronze">
            Livrables
          </p>
          <div className="grid gap-px bg-bronze/15 md:grid-cols-2 lg:grid-cols-4">
            {service.deliverables.map((deliverable) => (
              <article key={deliverable} className="bg-charcoal p-7">
                <div className="mb-4 h-px w-8 bg-bronze" />
                <h2 className="font-serif text-xl text-ivory">{deliverable}</h2>
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

      <CTASection title="Parlons de votre propriété à Marrakech." />
    </>
  );
}
