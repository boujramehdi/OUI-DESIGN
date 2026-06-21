import Image from "next/image";
import Link from "next/link";
import { navLinks, whatsappHref } from "@/lib/site";

export function Header() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-bronze/20 bg-[rgba(28,28,26,0.72)] text-ivory backdrop-blur-xl">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 sm:px-8">
        <Link href="/" className="flex items-center gap-3" aria-label="Ouidesign accueil">
          <Image
            src="/images/ouidesign-profile.png"
            alt="Logo Ouidesign"
            width={44}
            height={44}
            className="rounded-full ring-1 ring-bronze/25"
            preload
            loading="eager"
          />
          <span className="font-serif text-2xl text-ivory">Ouidesign</span>
        </Link>

        <nav className="hidden items-center gap-8 text-xs uppercase tracking-[0.18em] text-ivory/72 md:flex">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className="transition hover:text-bronze">
              {link.label}
            </Link>
          ))}
          <Link href="/#contact" className="transition hover:text-bronze">
            Contact
          </Link>
        </nav>

        <Link
          href={whatsappHref()}
          className="hidden border border-ivory/35 px-5 py-3 text-xs uppercase tracking-[0.16em] text-ivory transition hover:border-bronze hover:bg-bronze hover:text-charcoal md:inline-flex"
          target="_blank"
        >
          Demander une orientation
        </Link>

        <details className="group relative md:hidden">
          <summary className="list-none border border-ivory/30 px-4 py-3 text-xs uppercase tracking-[0.16em] text-ivory transition hover:border-bronze hover:text-bronze">
            Menu
          </summary>
          <div className="absolute right-0 mt-3 w-72 origin-top border border-bronze/25 bg-charcoal p-4 opacity-0 shadow-bronze transition duration-300 group-open:opacity-100">
            <nav className="grid gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="px-3 py-3 text-sm uppercase tracking-[0.12em] text-ivory/75 transition hover:bg-ivory/10 hover:text-bronze"
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href={whatsappHref()}
                target="_blank"
                className="mt-2 bg-bronze px-3 py-3 text-center text-sm uppercase tracking-[0.12em] text-charcoal"
              >
                Orientation
              </Link>
            </nav>
          </div>
        </details>
      </div>
    </header>
  );
}
