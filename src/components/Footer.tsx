import Image from "next/image";
import Link from "next/link";
import { mainServices, navLinks, siteConfig, whatsappHref } from "@/lib/site";

export function Footer() {
  const expertiseLinks = mainServices.slice(0, 8);

  return (
    <footer className="border-t border-bronze/40 bg-charcoal text-ivory">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 py-16 sm:grid-cols-2 sm:px-8 sm:py-20 lg:grid-cols-[1.4fr_1fr_0.8fr_0.9fr] lg:gap-14 lg:py-24">
        {/* Brand */}
        <div className="lg:pr-8">
          <div className="flex items-center gap-3">
            <Image
              src="/images/ouidesign-profile.png"
              alt="Logo Ouidesign"
              width={40}
              height={40}
              className="rounded-full ring-1 ring-bronze/35 transition-all duration-300 hover:ring-bronze/70 hover:shadow-[0_0_16px_rgba(184,146,95,0.2)]"
            />
            <span className="font-serif text-[1.5rem] font-medium tracking-[-0.01em] text-ivory">
              Ouidesign
            </span>
          </div>
          <p className="mt-7 max-w-xs text-sm leading-7 text-ivory/62">
            Architecture, intelligence et confort. Nous créons des villas d'exception
            à Marrakech et ses environs.
          </p>
          <Link
            href="/realisations"
            className="group mt-6 inline-flex items-center gap-3 text-xs uppercase tracking-[0.2em] text-bronze transition hover:text-ivory"
          >
            Découvrir nos réalisations
            <span className="h-px w-8 bg-bronze/50 transition-all duration-300 group-hover:w-14 group-hover:bg-ivory/60" />
          </Link>
          {/* Social */}
          <div className="mt-8 flex items-center gap-5">
            <Link
              href="https://www.instagram.com/ouidesign.ma"
              target="_blank"
              aria-label="Instagram"
              className="text-ivory/50 transition hover:text-bronze"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
            </Link>
            <Link
              href="https://www.facebook.com/ouidesign"
              target="_blank"
              aria-label="Facebook"
              className="text-ivory/50 transition hover:text-bronze"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
            </Link>
            <Link
              href="https://www.linkedin.com/company/ouidesign"
              target="_blank"
              aria-label="LinkedIn"
              className="text-ivory/50 transition hover:text-bronze"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </Link>
          </div>
        </div>

        {/* Expertises */}
        <div>
          <p className="mb-6 text-[0.65rem] uppercase tracking-[0.28em] text-bronze">Expertises</p>
          <nav className="grid gap-3 text-xs text-ivory/65">
            {expertiseLinks.map((service) => (
              <Link key={service.title} href={service.href} className="transition hover:text-ivory">
                {service.title}
              </Link>
            ))}
          </nav>
        </div>

        {/* Navigation */}
        <div>
          <p className="mb-6 text-[0.65rem] uppercase tracking-[0.28em] text-bronze">Navigation</p>
          <nav className="grid gap-3 text-xs text-ivory/65">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href} className="transition hover:text-ivory">
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        {/* Contact */}
        <div>
          <p className="mb-6 text-[0.65rem] uppercase tracking-[0.28em] text-bronze">Contact</p>
          <div className="grid gap-4 text-xs text-ivory/65">
            <a
              href={`tel:${siteConfig.phone}`}
              className="flex items-center gap-3 transition hover:text-ivory"
            >
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="shrink-0 text-bronze">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.18 2 2 0 0 1 3.58 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.5a16 16 0 0 0 5.55 5.55l.96-.96a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
              {siteConfig.phone}
            </a>
            <a
              href={`mailto:${siteConfig.email}`}
              className="flex items-center gap-3 transition hover:text-ivory"
            >
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="shrink-0 text-bronze">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                <polyline points="22,6 12,13 2,6" />
              </svg>
              {siteConfig.email}
            </a>
            <span className="flex items-center gap-3">
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="shrink-0 text-bronze">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
              Marrakech, Maroc
            </span>
          </div>
          <Link
            href={whatsappHref()}
            target="_blank"
            className="mt-8 inline-flex w-full items-center justify-center border border-bronze/40 px-5 py-3 text-[0.65rem] uppercase tracking-[0.18em] text-ivory/80 transition hover:border-bronze hover:bg-bronze hover:text-charcoal"
          >
            Demander une orientation
          </Link>
        </div>
      </div>

      <div className="border-t border-ivory/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-5 py-6 text-[0.6rem] uppercase tracking-[0.18em] text-ivory/40 sm:px-8 md:flex-row md:items-center md:justify-between">
          <p>© Ouidesign 2026 — Tous droits réservés</p>
          <div className="flex gap-6">
            <Link href="/mentions-legales" className="transition hover:text-ivory/70">
              Mentions légales
            </Link>
            <Link href="/confidentialite" className="transition hover:text-ivory/70">
              Confidentialité
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
