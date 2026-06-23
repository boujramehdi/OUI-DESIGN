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
    <section
      id="contact"
      className="relative overflow-hidden bg-charcoal text-ivory"
    >
      {/* Radial bronze glow — top-left accent */}
      <div className="pointer-events-none absolute -left-40 -top-40 h-[600px] w-[600px] rounded-full bg-bronze/[0.07] blur-3xl" />
      {/* Radial glow — bottom-right */}
      <div className="pointer-events-none absolute -bottom-32 -right-32 h-[500px] w-[500px] rounded-full bg-bronze/[0.05] blur-3xl" />

      {/* Subtle diagonal texture lines */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(135deg, #C5A880 0px, #C5A880 1px, transparent 1px, transparent 60px)",
        }}
      />

      {/* Top bronze rule */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-bronze/60 to-transparent" />
      {/* Bottom bronze rule */}
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-bronze/25 to-transparent" />

      <div className="reveal relative mx-auto grid max-w-7xl gap-5 px-5 py-10 sm:gap-8 sm:px-8 sm:py-14 lg:grid-cols-[1.2fr_0.9fr_0.8fr] lg:items-center lg:gap-12 lg:py-20">
        <div>
          <p className="text-xs text-ivory/55">Prêt à donner vie à votre projet ?</p>
          <h2 className="mt-2 max-w-3xl font-serif text-3xl font-medium leading-[1.02] sm:text-4xl lg:text-5xl">
            {title}
          </h2>
        </div>
        <div className="group">
          <p className="border-l border-bronze/35 pl-8 text-sm leading-7 text-ivory/72 transition-colors duration-500 group-hover:border-bronze group-hover:text-ivory/90">{text}</p>
        </div>
        <div className="lg:text-right">
          <Link
            href={href}
            target="_blank"
            className="group inline-flex items-center gap-3 bg-bronze px-7 py-4 text-xs uppercase tracking-[0.18em] text-charcoal transition duration-300 hover:bg-ivory"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z" />
            </svg>
            {buttonLabel}
          </Link>
          <p className="mt-4 text-xs text-ivory/45">Réponse rapide et confidentielle.</p>
        </div>
      </div>
    </section>
  );
}
