"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import type { Article } from "@/lib/articles";

export function JournalCarousel({ articles }: { articles: Article[] }) {
  const [active, setActive] = useState(0);
  const [mouse, setMouse] = useState({ x: 0.5, y: 0.5 });
  const [isHovering, setIsHovering] = useState(false);
  const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);
  const panelRef = useRef<HTMLDivElement>(null);

  function handlePanelMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    const rect = panelRef.current?.getBoundingClientRect();
    if (!rect) return;
    setMouse({
      x: (e.clientX - rect.left) / rect.width,
      y: (e.clientY - rect.top) / rect.height,
    });
  }

  useEffect(() => {
    const observers: IntersectionObserver[] = [];
    sectionRefs.current.forEach((ref, i) => {
      if (!ref) return;
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActive(i); },
        { threshold: 0.45, rootMargin: "-8% 0px -8% 0px" }
      );
      obs.observe(ref);
      observers.push(obs);
    });
    return () => observers.forEach((o) => o.disconnect());
  }, []);

  return (
    <section className="bg-charcoal text-ivory">
      <div className="relative flex flex-col lg:flex-row">

        {/* ════════════════════════════════════
            LEFT — scrollable column
        ════════════════════════════════════ */}
        <div className="relative z-10 lg:w-[46%]">

          {/* Vertical divider */}
          <div className="pointer-events-none absolute inset-y-0 right-0 hidden w-px bg-ivory/[0.06] lg:block" />

          {/* ── MASTHEAD ── */}
          <div className="relative flex h-[100svh] flex-col justify-end overflow-hidden px-6 pb-12 pt-[90px] sm:px-14 sm:pb-16 lg:pb-24">

            {/* Background image — Ken Burns (mobile only; desktop uses right sticky panel) */}
            <div className="absolute inset-0 lg:hidden">
              <Image
                src="/images/villa-sunset.png"
                alt=""
                fill
                priority
                sizes="100vw"
                className="object-cover object-center [animation:heroKenBurns_14s_ease-out_forwards]"
              />
              <div className="absolute inset-0 bg-charcoal/65" />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/25 to-charcoal/70" />
            </div>

            <div className="absolute inset-x-0 top-[90px] h-px bg-ivory/[0.07]" />

            {/* Eyebrow — centered on mobile, left on desktop */}
            <div className="absolute left-1/2 top-[45px] flex -translate-x-1/2 -translate-y-1/2 items-center gap-4 sm:left-14 sm:translate-x-0">
              <span className="hero-line-grow inline-block h-px bg-bronze/65 sm:hidden" />
              <span className="hero-line-grow inline-block h-px bg-bronze/65" />
              <p className="whitespace-nowrap text-[0.58rem] uppercase tracking-[0.42em] text-bronze">Journal Ouidesign</p>
              <span className="hero-line-grow inline-block h-px bg-bronze/65 sm:hidden" />
            </div>

            {/* Ghost watermark */}
            <span
              aria-hidden="true"
              className="pointer-events-none absolute inset-x-0 bottom-0 select-none font-serif font-medium uppercase leading-none text-ivory/[0.03]"
              style={{ fontSize: "clamp(3.5rem, 16vw, 13rem)", letterSpacing: "-0.02em" }}
            >
              JOURNAL
            </span>

            {/* Count — centered mobile */}
            <div className="relative mb-10 flex items-center justify-center gap-3 sm:justify-start">
              <div className="h-px w-8 bg-bronze/35" />
              <span className="text-[0.48rem] uppercase tracking-[0.42em] text-bronze/55">
                Perspectives · {String(articles.length).padStart(2, "0")} articles
              </span>
              <div className="h-px w-8 bg-bronze/35 sm:hidden" />
            </div>

            {/* Headline — centered mobile */}
            <h1
              className="relative text-center font-serif font-medium leading-[0.9] text-ivory sm:text-left"
              style={{ fontSize: "clamp(2.4rem, 9.5vw, 7.5rem)", letterSpacing: "-0.03em" }}
            >
              L&apos;art de<br />concevoir<br />autrement.
            </h1>

            <div className="relative mx-auto mt-8 h-px w-12 bg-bronze/35 sm:mx-0" />

            <p className="relative mx-auto mt-6 max-w-[22ch] text-center text-[0.82rem] leading-[1.9] text-ivory/30 sm:mx-0 sm:max-w-[26ch] sm:text-left">
              Conseils d&apos;experts, tendances et guides pour la villa haut de gamme au Maroc.
            </p>

            {/* Mobile article count dots */}
            <div className="relative mt-8 flex items-center justify-center gap-3 sm:justify-start lg:hidden">
              {articles.map((_, i) => (
                <div key={i} className="h-px flex-1 max-w-[40px] bg-bronze/20" />
              ))}
              <span className="shrink-0 text-[0.42rem] uppercase tracking-[0.32em] text-ivory/25">
                {articles.length} articles
              </span>
            </div>

            {/* Scroll hint — centered mobile */}
            <div className="relative mt-8 flex items-center justify-center gap-4 sm:justify-start lg:mt-12">
              <div className="relative flex h-9 w-[22px] items-start justify-center overflow-hidden rounded-full border border-ivory/[0.12] pt-2">
                <div className="h-2 w-px animate-[scrollHint_1.6s_ease-in-out_infinite] rounded-full bg-bronze/70" />
              </div>
              <span className="text-[0.45rem] uppercase tracking-[0.35em] text-ivory/18">
                Défiler pour explorer
              </span>
            </div>
          </div>

          {/* ── MOBILE: horizontal snap carousel ── */}
          <div className="relative sm:hidden">
            <div className="flex snap-x snap-mandatory overflow-x-auto overflow-y-hidden scrollbar-hide gap-px">
              {articles.map((a, i) => (
                <Link
                  key={a.slug}
                  href={`/journal/${a.slug}`}
                  className="group/card snap-start shrink-0 w-[84vw] relative overflow-hidden"
                >
                  {/* Image */}
                  <div className="relative h-[58vw] overflow-hidden">
                    {a.featuredImage && (
                      <Image
                        src={a.featuredImage}
                        alt={a.title}
                        fill
                        sizes="84vw"
                        className="object-cover transition-all duration-700 group-hover/card:scale-[1.06] group-hover/card:brightness-105 group-hover/card:saturate-[1.08] group-active:scale-[1.04]"
                      />
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-charcoal/90 via-charcoal/20 to-transparent transition-opacity duration-500 group-hover/card:opacity-70" />
                    {/* Bronze atmospheric glow */}
                    <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover/card:opacity-100"
                      style={{ background: "radial-gradient(ellipse 80% 50% at 50% 100%, rgba(188,143,85,0.20) 0%, transparent 70%)" }} />
                    {/* Shimmer */}
                    <div className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-ivory/[0.10] to-transparent transition-transform duration-[850ms] group-hover/card:translate-x-full group-active:translate-x-full" />
                    {/* Bronze border */}
                    <div className="absolute inset-x-0 bottom-0 h-[2px] origin-left scale-x-0 bg-bronze/70 transition-transform duration-500 group-hover/card:scale-x-100 group-active:scale-x-100" />
                    {/* Number */}
                    <span className="absolute right-4 top-4 font-serif text-[2.5rem] font-medium leading-none text-ivory/[0.08] transition-all duration-500 group-hover/card:text-ivory/[0.16]">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    {/* Category */}
                    <p className="absolute bottom-4 left-5 text-[0.44rem] uppercase tracking-[0.42em] text-bronze/75">
                      {a.category}
                    </p>
                    {/* Slide-up CTA on hover */}
                    <div className="absolute inset-x-0 bottom-0 flex translate-y-full items-center justify-between px-5 pb-4 pt-10 transition-transform duration-500 group-hover/card:translate-y-0"
                      style={{ background: "linear-gradient(to top, rgba(13,14,16,0.85) 0%, transparent 100%)" }}>
                      <p className="font-serif text-base font-medium text-ivory">{a.title}</p>
                      <span className="flex h-8 w-8 shrink-0 items-center justify-center border border-ivory/20 text-sm text-ivory/70 transition-colors duration-300 group-hover/card:border-bronze group-hover/card:text-bronze">→</span>
                    </div>
                  </div>

                  {/* Text panel */}
                  <div className="bg-charcoal px-5 py-5 transition-colors duration-300 group-hover/card:bg-[#141412]">
                    <p className="text-[0.42rem] uppercase tracking-[0.32em] text-ivory/25">{a.date} · {a.readTime}</p>
                    <h2 className="mt-2 font-serif text-[1.25rem] font-medium leading-tight text-ivory transition-colors duration-300 group-hover/card:text-bronze/90">{a.title}</h2>
                    <div className="mt-3 h-px w-8 bg-bronze/30 transition-all duration-500 group-hover/card:w-14 group-hover/card:bg-bronze/70" />
                    <p className="mt-3 line-clamp-2 text-[0.75rem] leading-[1.85] text-ivory/35 transition-colors duration-300 group-hover/card:text-ivory/60">{a.excerpt}</p>
                    <div className="mt-4 flex items-center gap-3 text-[0.44rem] uppercase tracking-[0.28em] text-bronze/60 transition-colors duration-300 group-hover/card:text-bronze">
                      <span>Lire l&apos;article</span>
                      <span className="transition-transform duration-300 group-hover/card:translate-x-1">→</span>
                    </div>
                  </div>
                </Link>
              ))}
              <div className="shrink-0 w-5" aria-hidden="true" />
            </div>
            <div className="pointer-events-none absolute inset-y-0 right-0 w-14 bg-gradient-to-l from-charcoal to-transparent" />
          </div>

          {/* ── ARTICLE SECTIONS (desktop) ── */}
          {articles.map((a, i) => (
            <div
              key={a.slug}
              ref={(el) => { sectionRefs.current[i] = el; }}
              className={`group relative hidden sm:flex min-h-[85svh] flex-col justify-center px-6 sm:px-14 lg:h-[100svh] lg:min-h-0 ${
                i === articles.length - 1 ? "pb-0" : ""
              }`}
            >
              {/* Top hairline */}
              <div className="absolute inset-x-0 top-0 h-px bg-ivory/[0.06]" />

              {/* Mobile image */}
              {a.featuredImage && (
                <div className="relative mb-10 h-52 w-full overflow-hidden sm:h-64 lg:hidden">
                  <Image src={a.featuredImage} alt={a.title} fill sizes="100vw" className="object-cover" />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-charcoal/80 via-charcoal/10 to-transparent" />
                </div>
              )}

              {/* Large ghost number */}
              <span
                aria-hidden="true"
                className="pointer-events-none absolute right-6 top-1/2 -translate-y-1/2 select-none font-serif font-medium leading-none text-ivory/[0.03] transition-all duration-700 group-hover:text-ivory/[0.055]"
                style={{ fontSize: "clamp(8rem, 16vw, 14rem)", letterSpacing: "-0.03em" }}
              >
                {String(i + 1).padStart(2, "0")}
              </span>

              {/* Category + date */}
              <div className="flex items-center gap-5 mb-6">
                <span className="text-[0.46rem] uppercase tracking-[0.4em] text-bronze/70">{a.category}</span>
                <div className="h-px w-4 bg-ivory/[0.12]" />
                <span className="text-[0.43rem] uppercase tracking-[0.22em] text-ivory/18">{a.date} · {a.readTime}</span>
              </div>

              {/* Title — large */}
              <Link href={`/journal/${a.slug}`} className="group/link block">
                <h2
                  className="font-serif font-medium leading-[1.04] text-ivory transition-colors duration-300 group-hover/link:text-ivory/75"
                  style={{ fontSize: "clamp(1.5rem, 3.8vw, 3.2rem)", letterSpacing: "-0.02em" }}
                >
                  {a.title}
                </h2>
              </Link>

              {/* Bronze rule — animates wide */}
              <div className="mt-7 h-px w-10 bg-bronze/25 transition-all duration-600 ease-out group-hover:w-20 group-hover:bg-bronze/60" />

              {/* Excerpt */}
              <p className="mt-6 max-w-[38ch] text-[0.82rem] leading-[1.95] text-ivory/28 transition-colors duration-300 group-hover:text-ivory/45">
                {a.excerpt}
              </p>

              {/* CTA */}
              <Link
                href={`/journal/${a.slug}`}
                className="group/btn mt-10 inline-flex w-fit items-center gap-5 border border-ivory/[0.08] px-7 py-4 text-[0.5rem] uppercase tracking-[0.28em] text-ivory/40 transition-all duration-300 hover:border-bronze/60 hover:text-bronze"
              >
                Lire l&apos;article
                <span className="transition-transform duration-300 group-hover/btn:translate-x-2">→</span>
              </Link>
            </div>
          ))}
        </div>

        {/* ════════════════════════════════════
            RIGHT — sticky image panel
        ════════════════════════════════════ */}
        <div
          ref={panelRef}
          onMouseMove={handlePanelMouseMove}
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
          className="sticky top-0 hidden h-screen w-[54%] overflow-hidden lg:block"
        >

          {/* Progress bar — left edge */}
          <div className="absolute left-0 top-0 z-20 h-full w-[1.5px] bg-ivory/[0.04]">
            <div
              className="w-full bg-bronze/55 transition-all duration-700 ease-out"
              style={{ height: `${((active + 1) / articles.length) * 100}%` }}
            />
          </div>

          {/* Crossfading images */}
          {articles.map((art, i) => (
            <div
              key={art.slug}
              className="absolute inset-0"
              style={{
                opacity: i === active ? 1 : 0,
                transform: i === active ? "scale(1)" : "scale(1.06)",
                transition: "opacity 0.9s cubic-bezier(0.4,0,0.2,1), transform 0.9s cubic-bezier(0.4,0,0.2,1)",
                willChange: "opacity, transform",
              }}
            >
              {art.featuredImage && (
                <Image
                  src={art.featuredImage}
                  alt={art.title}
                  fill
                  sizes="54vw"
                  priority={i === 0}
                  className="object-cover transition-all duration-700"
                  style={
                    i === active && isHovering
                      ? { filter: "brightness(1.08) saturate(1.1)" }
                      : {}
                  }
                />
              )}
            </div>
          ))}

          {/* Base gradients — lighten on hover */}
          <div
            className="pointer-events-none absolute inset-0 transition-opacity duration-500"
            style={{ opacity: isHovering ? 0.55 : 1 }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-charcoal/60 via-charcoal/5 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-t from-charcoal/55 via-transparent to-charcoal/20" />
          </div>

          {/* ── HOVER FX 1: wide bronze atmospheric glow ── */}
          <div
            className="pointer-events-none absolute inset-0 z-[2] transition-opacity duration-300"
            style={{
              opacity: isHovering ? 1 : 0,
              background: `radial-gradient(ellipse 55% 65% at ${mouse.x * 100}% ${mouse.y * 100}%,
                rgba(188,143,85,0.22) 0%,
                rgba(188,143,85,0.07) 45%,
                transparent 70%)`,
            }}
          />

          {/* ── HOVER FX 2: tight cursor warm glow ── */}
          <div
            className="pointer-events-none absolute inset-0 z-[2]"
            style={{
              opacity: isHovering ? 1 : 0,
              background: `radial-gradient(circle 90px at ${mouse.x * 100}% ${mouse.y * 100}%,
                rgba(255,235,190,0.11) 0%,
                transparent 100%)`,
              transition: "opacity 0.25s",
            }}
          />

          {/* ── HOVER FX 3: dark vignette pulls away from cursor ── */}
          <div
            className="pointer-events-none absolute inset-0 z-[2]"
            style={{
              opacity: isHovering ? 0.6 : 0,
              background: `radial-gradient(ellipse 80% 80% at ${mouse.x * 100}% ${mouse.y * 100}%,
                transparent 30%,
                rgba(18,17,15,0.35) 100%)`,
              transition: "opacity 0.4s",
            }}
          />

          {/* Full-panel link */}
          <Link
            href={`/journal/${articles[active]?.slug}`}
            className="absolute inset-0 z-[1]"
            aria-label={`Lire : ${articles[active]?.title}`}
          />

          {/* Dot indicators — right edge */}
          <div className="absolute right-8 top-1/2 z-[2] flex -translate-y-1/2 flex-col items-center gap-3">
            {articles.map((_, i) => (
              <div
                key={i}
                className="rounded-full transition-all duration-500"
                style={{
                  width: "1.5px",
                  height: i === active ? "28px" : "6px",
                  background: i === active ? "rgba(188,143,85,1)" : "rgba(255,255,255,0.12)",
                }}
              />
            ))}
          </div>

          {/* Category + large watermark — bottom left */}
          <div className="pointer-events-none absolute bottom-8 left-10 z-[2]">
            <p className="text-[0.42rem] uppercase tracking-[0.45em] text-bronze/50">
              {articles[active]?.category}
            </p>
            <span className="font-serif text-[7rem] font-medium leading-none text-ivory/[0.05]">
              {String(active + 1).padStart(2, "0")}
            </span>
          </div>

          {/* Counter — top right */}
          <div className="pointer-events-none absolute right-16 top-9 z-[2]">
            <span className="text-[0.42rem] uppercase tracking-[0.35em] text-ivory/18">
              {String(active + 1).padStart(2, "0")} / {String(articles.length).padStart(2, "0")}
            </span>
          </div>
        </div>

      </div>
    </section>
  );
}
