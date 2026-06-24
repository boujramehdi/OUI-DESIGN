"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { navLinks, whatsappHref } from "@/lib/site";

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

  // Lock body scroll when menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  // Close on route change
  useEffect(() => {
    closeMenu();
  }, [pathname]);

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50 border-b border-bronze/15 bg-[rgba(13,14,16,0.88)] text-ivory backdrop-blur-[12px]">

        {/* ── MOBILE bar ── */}
        <div className="relative flex h-[68px] items-center justify-between px-5 lg:hidden">

          {/* Burger — left */}
          <button
            onClick={() => setMenuOpen((v) => !v)}
            aria-expanded={menuOpen}
            aria-label={menuOpen ? "Fermer le menu" : "Ouvrir le menu"}
            className="relative z-[60] flex h-10 w-10 flex-col items-center justify-center gap-[5px] cursor-pointer"
          >
            <span className={`block h-px w-5 origin-center bg-ivory transition-all duration-300 ${menuOpen ? "translate-y-[6px] rotate-45 bg-bronze" : ""}`} />
            <span className={`block h-px origin-center bg-ivory transition-all duration-300 ${menuOpen ? "w-0 opacity-0" : "w-3.5 opacity-100"}`} />
            <span className={`block h-px w-5 origin-center bg-ivory transition-all duration-300 ${menuOpen ? "-translate-y-[6px] -rotate-45 bg-bronze" : ""}`} />
          </button>

          {/* Logo — absolutely centered, independent of side elements */}
          <Link
            href="/"
            aria-label="Ouidesign accueil"
            className="absolute left-1/2 top-1/2 z-[60] flex -translate-x-1/2 -translate-y-1/2 items-center gap-2.5"
          >
            <Image
              src="/images/ouidesign-profile.png"
              alt="Logo Ouidesign"
              width={32}
              height={32}
              loading="eager"
              className="rounded-full ring-1 ring-bronze/35"
            />
            <span className="font-serif text-[1.3rem] font-medium tracking-[-0.01em] text-ivory">
              Ouidesign
            </span>
          </Link>

          {/* Right — contact icon (useful, not dead space) */}
          <Link
            href="/contact"
            aria-label="Contact"
            className="z-[60] flex h-10 w-10 items-center justify-center text-ivory/50 transition hover:text-bronze"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.18 2 2 0 0 1 3.58 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.5a16 16 0 0 0 5.55 5.55l.96-.96a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
            </svg>
          </Link>
        </div>

        {/* ── DESKTOP bar ── */}
        <div className="mx-auto hidden h-[90px] max-w-7xl items-center justify-between px-8 lg:flex">

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

          {/* Nav */}
          <nav className="flex items-center gap-7">
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
                  {active && <span className="absolute inset-x-0 -bottom-px h-px bg-bronze" />}
                  {!active && <span className="absolute bottom-0 left-1/2 h-px w-0 -translate-x-1/2 bg-bronze/70 transition-all duration-300 ease-out group-hover:w-full" />}
                </Link>
              );
            })}
          </nav>

          {/* CTA */}
          <Link
            href="/contact"
            className="border border-ivory/30 px-5 py-[0.6rem] text-[0.58rem] uppercase tracking-[0.18em] text-ivory transition duration-200 hover:border-bronze hover:bg-bronze hover:text-charcoal"
          >
            Demander une orientation
          </Link>
        </div>

      </header>

      {/* ── FULL-SCREEN MOBILE MENU ── */}
      <div
        className={`fixed inset-0 z-[55] lg:hidden transition-all duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] ${
          menuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        {/* Dark background */}
        <div className="absolute inset-0 bg-[#0D0E10]" />

        {/* Bronze top accent */}
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-bronze/60 to-transparent" />

        {/* Content — flex column, never overflows screen */}
        <div className="relative flex h-full flex-col overflow-y-auto px-7 pb-8 pt-[94px]">

          {/* Watermark */}
          <span
            aria-hidden="true"
            className="pointer-events-none absolute right-0 top-1/2 -translate-y-1/2 select-none font-serif font-medium uppercase leading-none text-ivory/[0.025]"
            style={{ fontSize: "clamp(4rem, 20vw, 10rem)", letterSpacing: "-0.03em" }}
          >
            OUI
          </span>

          {/* Nav links */}
          <nav className="flex flex-1 flex-col justify-center">
            {navLinks.map((link, i) => {
              const active = isActive(link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={closeMenu}
                  className={`group relative flex items-center gap-4 border-b border-ivory/[0.06] py-[0.7rem] transition-all duration-300 ${
                    active ? "pl-3" : "pl-0 hover:pl-2"
                  }`}
                  style={{
                    transform: menuOpen ? "translateX(0)" : "translateX(-18px)",
                    opacity: menuOpen ? 1 : 0,
                    transition: `transform 0.42s cubic-bezier(0.76,0,0.24,1) ${i * 40}ms, opacity 0.42s ease ${i * 40}ms, padding 0.3s`,
                  }}
                >
                  {/* Active bar */}
                  {active && (
                    <span className="absolute left-0 top-1/2 h-6 w-[2px] -translate-y-1/2 bg-bronze" />
                  )}
                  <span className={`shrink-0 font-serif text-[0.58rem] leading-none tabular-nums ${active ? "text-bronze" : "text-bronze/22"}`}>
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span
                    className={`font-serif font-medium leading-none transition-colors duration-300 ${
                      active ? "text-bronze" : "text-ivory/72 group-hover:text-ivory"
                    }`}
                    style={{ fontSize: "clamp(1.25rem, 5vw, 1.75rem)" }}
                  >
                    {link.label}
                  </span>
                  <span className={`ml-auto text-[0.8rem] transition-all duration-300 ${active ? "text-bronze" : "translate-x-1 text-ivory/15 group-hover:translate-x-0 group-hover:text-bronze/55"}`}>
                    →
                  </span>
                </Link>
              );
            })}
          </nav>

          {/* Bottom section */}
          <div
            className="mt-5 flex flex-col gap-3"
            style={{
              transform: menuOpen ? "translateY(0)" : "translateY(12px)",
              opacity: menuOpen ? 1 : 0,
              transition: `transform 0.45s cubic-bezier(0.76,0,0.24,1) ${navLinks.length * 40 + 50}ms, opacity 0.45s ease ${navLinks.length * 40 + 50}ms`,
            }}
          >
            {/* CTA row — side by side on wider phones, stacked on narrow */}
            <div className="grid grid-cols-2 gap-2">
              <Link
                href="/contact"
                onClick={closeMenu}
                className="flex items-center justify-center gap-2 border border-bronze/40 py-3 text-[0.55rem] uppercase tracking-[0.18em] text-ivory/75 transition hover:bg-bronze hover:text-charcoal hover:border-bronze"
              >
                Orientation <span>→</span>
              </Link>
              <Link
                href={whatsappHref()}
                target="_blank"
                onClick={closeMenu}
                className="flex items-center justify-center gap-2 bg-bronze/10 py-3 text-[0.55rem] uppercase tracking-[0.18em] text-bronze/80 transition hover:bg-bronze/20"
              >
                <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor" className="shrink-0">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                WhatsApp
              </Link>
            </div>

            {/* Ambient footer */}
            <div className="flex items-center justify-between pt-1">
              <span className="text-[0.4rem] uppercase tracking-[0.28em] text-ivory/18">Maroc · 2026</span>
              <div className="flex items-center gap-4">
                <Link href="https://www.instagram.com/ouidesign.ma" target="_blank" className="text-ivory/22 transition hover:text-bronze">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </Link>
                <Link href="https://www.facebook.com/ouidesign" target="_blank" className="text-ivory/25 transition hover:text-bronze">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
