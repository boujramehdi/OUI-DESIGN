"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { navLinks } from "@/lib/site";

export function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  function isActive(href: string) {
    if (href === "/") return pathname === "/";
    if (href.startsWith("/#")) return pathname === "/";
    return pathname.startsWith(href);
  }

  function closeMenu() {
    setMenuOpen(false);
  }

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-bronze/15 bg-[rgba(13,14,16,0.85)] text-ivory backdrop-blur-[10px]">
      <div className="mx-auto flex h-[90px] max-w-7xl items-center justify-between px-5 sm:px-8">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-3" aria-label="Ouidesign accueil">
          <Image
            src="/images/ouidesign-profile.png"
            alt="Logo Ouidesign"
            width={38}
            height={38}
            loading="eager"
            className="rounded-full ring-1 ring-bronze/30 transition-all duration-300 hover:ring-bronze/70"
          />
          <span className="font-serif text-[1.55rem] font-medium tracking-[-0.01em] text-ivory transition-colors duration-300 hover:text-bronze/90">
            Ouidesign
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-7 lg:flex">
          {navLinks.map((link) => {
            const active = isActive(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`group relative pb-[6px] text-[0.6rem] uppercase tracking-[0.2em] transition-colors duration-300 ${
                  active ? "text-bronze" : "text-ivory/55 hover:text-bronze"
                }`}
              >
                {link.label}

                {/* Active state — full static underline */}
                {active && (
                  <span className="absolute inset-x-0 -bottom-px h-px bg-bronze" />
                )}

                {/* Hover state — line expands from center outward */}
                {!active && (
                  <span className="absolute bottom-0 left-1/2 h-px w-0 -translate-x-1/2 bg-bronze/70 transition-all duration-300 ease-out group-hover:w-full" />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Desktop CTA */}
        <Link
          href="/#contact"
          className="hidden border border-ivory/30 px-5 py-[0.6rem] text-[0.58rem] uppercase tracking-[0.18em] text-ivory transition duration-200 hover:border-bronze hover:bg-bronze hover:text-charcoal lg:inline-flex"
        >
          Demander une orientation
        </Link>

        {/* Mobile burger */}
        <div className="relative lg:hidden">
          <button
            onClick={() => setMenuOpen((v) => !v)}
            aria-expanded={menuOpen}
            aria-label={menuOpen ? "Fermer le menu" : "Ouvrir le menu"}
            className="cursor-pointer border border-ivory/25 px-4 py-[0.6rem] text-[0.6rem] uppercase tracking-[0.16em] text-ivory transition hover:border-bronze hover:text-bronze"
          >
            {menuOpen ? "Fermer" : "Menu"}
          </button>

          {menuOpen && (
            <>
              {/* Backdrop */}
              <div
                className="fixed inset-0 z-[-1]"
                onClick={closeMenu}
                aria-hidden="true"
              />
              <div className="absolute right-0 mt-2 w-[calc(100vw-2.5rem)] max-w-[18rem] origin-top-right border border-bronze/20 bg-[rgba(28,28,26,0.97)] p-4 shadow-lg backdrop-blur-xl">
                <nav className="grid gap-0.5">
                  {navLinks.map((link) => {
                    const active = isActive(link.href);
                    return (
                      <Link
                        key={link.href}
                        href={link.href}
                        onClick={closeMenu}
                        className={`flex items-center gap-3 px-3 py-3 text-xs uppercase tracking-[0.14em] transition hover:text-bronze ${
                          active ? "text-bronze" : "text-ivory/70"
                        }`}
                      >
                        {active && <span className="h-px w-4 shrink-0 bg-bronze" />}
                        {link.label}
                      </Link>
                    );
                  })}
                  <Link
                    href="/#contact"
                    onClick={closeMenu}
                    className="mt-3 bg-bronze px-3 py-3 text-center text-[0.65rem] uppercase tracking-[0.16em] text-charcoal transition hover:bg-ivory"
                  >
                    Demander une orientation
                  </Link>
                </nav>
              </div>
            </>
          )}
        </div>

      </div>
    </header>
  );
}
