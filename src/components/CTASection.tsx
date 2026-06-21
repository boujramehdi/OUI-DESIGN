import Link from "next/link";

type CTASectionProps = {
  title?: string;
  text?: string;
  buttonLabel?: string;
  href?: string;
};

export function CTASection({
  title = "Parlons de votre projet.",
  text = "Discutons de vos idées et découvrons ensemble le potentiel de votre villa.",
  buttonLabel = "Écrire sur WhatsApp",
  href = "https://wa.me/212649055897?text=Bonjour%20Ouidesign%2C%20je%20souhaite%20parler%20d%E2%80%99un%20projet.",
}: CTASectionProps) {
  return (
    <section id="contact" className="relative overflow-hidden bg-charcoal text-ivory">
      <div className="absolute inset-x-0 top-0 h-px bg-bronze/55" />
      <div className="absolute right-0 top-0 h-full w-1/2 bg-[radial-gradient(circle_at_70%_20%,rgba(184,146,95,0.22),transparent_38%)]" />
      <div className="reveal relative mx-auto grid max-w-7xl gap-16 px-5 py-24 sm:px-8 lg:grid-cols-[1.1fr_0.75fr_0.75fr] lg:items-center lg:py-32">
        <div>
          <p className="text-sm text-ivory/78">Prêt à donner vie à votre projet ?</p>
          <h2 className="mt-3 max-w-3xl font-serif text-5xl font-medium leading-[0.95] sm:text-7xl">
            {title}
          </h2>
        </div>
        <div>
          <p className="border-l border-bronze/35 pl-8 text-sm leading-7 text-ivory/72">{text}</p>
        </div>
        <div className="lg:text-right">
          <Link
            href={href}
            target="_blank"
            className="inline-flex bg-bronze px-7 py-4 text-sm uppercase tracking-[0.18em] text-charcoal transition duration-300 hover:bg-ivory"
          >
            {buttonLabel}
          </Link>
          <p className="mt-4 text-xs text-ivory/50">Réponse rapide et confidentielle.</p>
        </div>
      </div>
    </section>
  );
}
