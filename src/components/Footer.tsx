import Image from "next/image";
import Link from "next/link";
import { mainServices, navLinks, servicePages, siteConfig, whatsappHref } from "@/lib/site";

export function Footer() {
  return (
    <footer className="bg-charcoal text-ivory">
      <div className="mx-auto grid max-w-7xl gap-14 px-5 py-24 sm:px-8 lg:grid-cols-[1.3fr_0.8fr_1fr_0.8fr]">
        <div className="lg:pr-10">
          <div className="flex items-center gap-4">
            <Image
              src="/images/ouidesign-profile.png"
              alt="Logo Ouidesign"
              width={58}
              height={58}
              className="rounded-full ring-1 ring-bronze/40"
            />
            <div>
              <p className="font-serif text-3xl">Ouidesign</p>
              <p className="text-xs uppercase tracking-[0.24em] text-sand">Architecture intelligente</p>
            </div>
          </div>
          <p className="mt-8 max-w-md text-base leading-8 text-ivory/70">
            Ouidesign conçoit, rénove et intègre des villas, riads et lieux
            d’hospitalité haut de gamme partout au Maroc, entre architecture, matière,
            technologie et infrastructure.
          </p>
          <Link
            href="https://ouidesign.ma"
            className="mt-7 inline-flex text-sm uppercase tracking-[0.18em] text-bronze transition hover:text-ivory"
          >
            ouidesign.ma
          </Link>
        </div>

        <div>
          <p className="mb-5 text-xs uppercase text-bronze">Navigation</p>
          <nav className="grid gap-3 text-sm text-ivory/75">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href} className="transition hover:text-ivory">
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        <div>
          <p className="mb-5 text-xs uppercase text-bronze">Expertises</p>
          <div className="grid gap-3 text-sm text-ivory/75">
            {mainServices.map((service) => (
              <Link key={service.title} href={service.href} className="transition hover:text-ivory">
                {service.title}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <p className="mb-5 text-xs uppercase text-bronze">SEO & Contact</p>
          <div className="grid gap-3 text-sm text-ivory/75">
            {servicePages.slice(0, 5).map((service) => (
              <Link key={service.slug} href={`/${service.slug}`} className="transition hover:text-ivory">
                {service.title}
              </Link>
            ))}
            <Link href={whatsappHref()} target="_blank" className="pt-3 text-bronze transition hover:text-ivory">
              {siteConfig.phone}
            </Link>
            <Link href="https://www.instagram.com/ouidesign.ma" target="_blank" className="transition hover:text-ivory">
              Instagram
            </Link>
          </div>
        </div>
      </div>
      <div className="border-t border-ivory/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-5 py-6 text-xs text-ivory/55 sm:px-8 md:flex-row md:items-center md:justify-between">
          <p>© 2026 Ouidesign. Maroc.</p>
          <Link href={whatsappHref()} target="_blank" className="text-bronze transition hover:text-ivory">
            {siteConfig.phone}
          </Link>
        </div>
      </div>
    </footer>
  );
}
