"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import type { Article } from "@/lib/articles";

export function JournalCarousel({ articles }: { articles: Article[] }) {
  const [active, setActive] = useState(0);
  const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);

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
          <div className="pointer-events-none absolute inset-y-0 right-0 hidden w-px bg-stone/25 lg:block" />

          {/* ── PAGE HEADER — compact, not full-viewport ── */}
          <div className="lg-dark-panel relative overflow-hidden px-6 pb-10 pt-[108px] sm:px-8 sm:pb-12 lg:px-12 lg:pt-[124px] lg:pb-14">

            {/* Mobile: subtle image tint behind */}
            <div className="pointer-events-none absolute inset-0 lg:hidden">
              <Image src="/images/villa-sunset.png" alt="" fill priority sizes="100vw"
                className="object-cover object-center opacity-30" />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal to-charcoal/50" />
            </div>

            <div className="relative">
              {/* Eyebrow row */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <span className="h-px w-6 bg-bronze/55" />
                  <span className="text-[0.5rem] uppercase tracking-[0.42em] text-bronze">
                    Journal Ouidesign
                  </span>
                </div>
                <span className="text-[0.42rem] uppercase tracking-[0.32em] text-sand/40">
                  {String(articles.length).padStart(2, "0")} articles
                </span>
              </div>

              {/* Headline — fixed, never depends on article content */}
              <h1
                className="mt-5 font-serif font-medium leading-[1.08] text-ivory"
                style={{ fontSize: "clamp(1.75rem, 3.5vw, 2.8rem)", letterSpacing: "-0.02em" }}
              >
                Perspectives &amp; guides<br />
                <span className="text-ivory/40">pour la villa de luxe.</span>
              </h1>

              {/* Thin divider + description */}
              <div className="mt-6 flex items-start gap-6 border-t border-ivory/[0.07] pt-5">
                <p className="max-w-[34ch] text-[0.72rem] leading-[1.85] text-sand/50">
                  Conseils d&apos;experts, tendances et retours de chantier pour propriétaires exigeants.
                </p>
                <div className="ml-auto flex items-center gap-3 shrink-0 text-sand/30 self-end">
                  <div className="relative flex h-7 w-[17px] items-start justify-center overflow-hidden rounded-full border border-sand/[0.18] pt-1.5">
                    <div className="h-1.5 w-px animate-[scrollHint_1.6s_ease-in-out_infinite] rounded-full bg-bronze/55" />
                  </div>
                  <span className="text-[0.38rem] uppercase tracking-[0.38em]">Défiler</span>
                </div>
              </div>
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
                  <div className="lg-dark-panel relative h-[58vw] overflow-hidden">
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
                    <div className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/[0.10] to-transparent transition-transform duration-[850ms] group-hover/card:translate-x-full group-active:translate-x-full" />
                    {/* Bronze border */}
                    <div className="absolute inset-x-0 bottom-0 h-[2px] origin-left scale-x-0 bg-bronze/70 transition-transform duration-500 group-hover/card:scale-x-100 group-active:scale-x-100" />
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
              className={`group relative hidden sm:flex flex-col justify-center px-6 sm:px-8 lg:px-12 py-20 lg:py-28 ${
                i === articles.length - 1 ? "" : "border-b border-ivory/[0.06]"
              }`}
            >

              {/* Mobile image */}
              {a.featuredImage && (
                <div className="lg-dark-panel relative mb-10 h-52 w-full overflow-hidden sm:h-64 lg:hidden">
                  <Image src={a.featuredImage} alt={a.title} fill sizes="100vw" className="object-cover" />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-charcoal/80 via-charcoal/10 to-transparent" />
                </div>
              )}


              {/* Category + date */}
              <div className="flex items-center gap-5 mb-6">
                <span className="text-[0.46rem] uppercase tracking-[0.4em] text-bronze/70">{a.category}</span>
                <div className="h-px w-4 bg-ivory/[0.12]" />
                <span className="text-[0.43rem] uppercase tracking-[0.22em] text-ivory/18">{a.date} · {a.readTime}</span>
              </div>

              {/* Title */}
              <Link href={`/journal/${a.slug}`} className="group/link block">
                <h2
                  className="font-serif font-medium leading-[1.04] text-ivory transition-colors duration-300 group-hover/link:text-ivory/75"
                  style={{ fontSize: "clamp(1.5rem, 3.8vw, 3.2rem)", letterSpacing: "-0.02em" }}
                >
                  {a.title}
                </h2>
              </Link>

              {/* Bronze rule */}
              <div className="mt-7 h-px w-10 bg-bronze/25 transition-all duration-500 ease-out group-hover:w-20 group-hover:bg-bronze/60" />

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
            RIGHT — sticky pure image panel
        ════════════════════════════════════ */}
        <div className="lg-dark-panel sticky top-0 hidden h-screen w-[54%] overflow-hidden lg:block">

          {/* Crossfading images */}
          {articles.map((art, i) => (
            <div
              key={art.slug}
              className="absolute inset-0"
              style={{
                opacity: i === active ? 1 : 0,
                transition: "opacity 0.9s cubic-bezier(0.4,0,0.2,1)",
              }}
            >
              {art.featuredImage && (
                <Image
                  src={art.featuredImage}
                  alt={art.title}
                  fill
                  sizes="54vw"
                  priority={i === 0}
                  className="object-cover"
                  style={{
                    transform: i === active ? "scale(1)" : "scale(1.04)",
                    transition: "transform 0.9s cubic-bezier(0.4,0,0.2,1)",
                  }}
                />
              )}
            </div>
          ))}

          {/* Subtle left edge fade — visual continuity with left panel */}
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-charcoal/20 to-transparent" />
          {/* Top vignette — so navbar reads clearly */}
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-charcoal/40 via-transparent to-transparent" />

          {/* Category badge — top right */}
          <div className="pointer-events-none absolute right-8 top-8">
            <span className="inline-block bg-charcoal/55 px-3 py-1.5 text-[0.4rem] uppercase tracking-[0.35em] text-bronze/80 backdrop-blur-sm">
              {articles[active]?.category}
            </span>
          </div>

          {/* Entire panel is a link to the active article */}
          <Link
            href={`/journal/${articles[active]?.slug}`}
            className="group absolute inset-0"
            aria-label={`Lire : ${articles[active]?.title}`}
          >
            {/* Shimmer on hover */}
            <div className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/[0.06] to-transparent transition-transform duration-[1200ms] group-hover:translate-x-full" />
            {/* Bronze border sweep on hover */}
            <div className="absolute inset-x-0 bottom-0 h-[2px] origin-left scale-x-0 bg-bronze/65 transition-transform duration-700 group-hover:scale-x-100" />
          </Link>

          {/* Progress indicators — outside Link so they don't trigger nav */}
          <div className="pointer-events-none absolute bottom-10 left-0 right-0 flex items-center justify-center gap-2">
            {articles.map((_, i) => (
              <div
                key={i}
                className="transition-all duration-500"
                style={{
                  height: "1.5px",
                  width: i === active ? "32px" : "10px",
                  backgroundColor: i === active ? "#B8925F" : "rgba(216,198,173,0.35)",
                }}
              />
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
