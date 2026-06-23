"use client";

import { useState, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import type { Article } from "@/lib/articles";

export function JournalCarousel({ articles }: { articles: Article[] }) {
  const [current, setCurrent] = useState(0);
  const [prev, setPrev] = useState<number | null>(null);

  const goTo = useCallback(
    (i: number) => {
      if (i === current) return;
      setPrev(current);
      setCurrent(i);
      setTimeout(() => setPrev(null), 800);
    },
    [current]
  );

  const next = () => goTo((current + 1) % articles.length);
  const back = () => goTo((current - 1 + articles.length) % articles.length);

  const a = articles[current];

  return (
    <div className="relative flex h-[85vh] w-full flex-col lg:h-screen lg:w-[54%]">

      {/* ── Images — crossfade + scale ─────────────────────── */}
      {articles.map((art, i) => (
        <div
          key={art.slug}
          className={`absolute inset-0 transition-all duration-700 ease-in-out ${
            i === current
              ? "opacity-100 scale-100"
              : i === prev
              ? "opacity-0 scale-[1.03]"
              : "opacity-0 scale-100"
          }`}
          style={{ willChange: "opacity, transform" }}
        >
          {art.featuredImage && (
            <Image
              src={art.featuredImage}
              alt={art.title}
              fill
              sizes="(min-width:1024px) 54vw, 100vw"
              priority={i === 0}
              className="object-cover"
            />
          )}
        </div>
      ))}

      {/* ── Gradient layers ────────────────────────────────── */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/30 to-charcoal/50" />
      {/* Left bleed — merges with hero panel on desktop */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-charcoal/60 to-transparent lg:w-32" />

      {/* ── Full-slide clickable link (behind controls) ────── */}
      <Link
        href={`/journal/${a.slug}`}
        className="absolute inset-0 z-[1]"
        aria-label={`Lire : ${a.title}`}
      />

      {/* ── Top bar ────────────────────────────────────────── */}
      <div className="absolute left-0 right-0 top-0 z-[2] flex items-center justify-between px-8 pt-8 sm:px-10">
        {/* Category badge */}
        <div className="border border-bronze/40 bg-charcoal/50 px-3 py-1.5 backdrop-blur-md">
          <span className="text-[0.48rem] uppercase tracking-[0.34em] text-bronze">
            {a.category}
          </span>
        </div>

        {/* Counter */}
        <div className="flex items-center gap-2">
          <span className="font-serif text-xs font-medium text-bronze/60">
            {String(current + 1).padStart(2, "0")}
          </span>
          <span className="h-px w-5 bg-ivory/15" />
          <span className="text-[0.5rem] text-ivory/20">
            {String(articles.length).padStart(2, "0")}
          </span>
        </div>
      </div>

      {/* ── Article content (bottom) ───────────────────────── */}
      <Link
        href={`/journal/${a.slug}`}
        className="group absolute bottom-0 left-0 right-0 z-[2] px-8 pb-24 sm:px-10 lg:pb-20"
      >
        {/* Bronze rule */}
        <div className="mb-5 h-px w-10 bg-bronze/50 transition-all duration-500 group-hover:w-20" />

        {/* Title */}
        <h2
          key={a.slug}
          className="anim-slide-up max-w-lg font-serif text-2xl font-medium leading-snug text-ivory sm:text-3xl lg:text-[1.9rem]"
        >
          {a.title}
        </h2>

        {/* Excerpt */}
        <p className="mt-3 max-w-md text-xs leading-6 text-ivory/40 transition-colors duration-300 group-hover:text-ivory/65">
          {a.excerpt}
        </p>

        {/* Meta + CTA */}
        <div className="mt-6 flex items-center justify-between gap-6">
          <span className="text-[0.5rem] uppercase tracking-[0.18em] text-ivory/20">
            {a.date} · {a.readTime} de lecture
          </span>
          <span className="flex items-center gap-2 text-[0.58rem] uppercase tracking-[0.22em] text-bronze transition-all duration-300 group-hover:gap-4">
            Lire l'article <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
          </span>
        </div>
      </Link>

      {/* ── Navigation — numbered lines ─────────────────────── */}
      <div className="absolute bottom-7 left-0 right-0 z-[3] flex items-end justify-center gap-5">
        {articles.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            aria-label={`Article ${i + 1}`}
            className="group flex flex-col items-center gap-1.5"
          >
            {/* Line */}
            <div
              className={`h-px transition-all duration-400 ${
                i === current
                  ? "w-10 bg-bronze"
                  : "w-4 bg-ivory/20 group-hover:w-6 group-hover:bg-ivory/40"
              }`}
            />
            {/* Number */}
            <span
              className={`text-[0.42rem] font-medium uppercase tracking-[0.2em] transition-colors duration-300 ${
                i === current ? "text-bronze" : "text-ivory/20 group-hover:text-ivory/45"
              }`}
            >
              {String(i + 1).padStart(2, "0")}
            </span>
          </button>
        ))}
      </div>

      {/* ── Arrow controls ──────────────────────────────────── */}
      <div className="absolute right-6 top-1/2 z-[3] flex -translate-y-1/2 flex-col gap-2 sm:right-8">
        <button
          onClick={back}
          aria-label="Article précédent"
          className="flex h-10 w-10 items-center justify-center border border-ivory/12 bg-charcoal/30 text-ivory/30 backdrop-blur-sm transition-all duration-200 hover:border-bronze/50 hover:bg-charcoal/60 hover:text-bronze"
        >
          <svg width="11" height="11" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="2,9 6,5 10,9" />
          </svg>
        </button>
        <button
          onClick={next}
          aria-label="Article suivant"
          className="flex h-10 w-10 items-center justify-center border border-ivory/12 bg-charcoal/30 text-ivory/30 backdrop-blur-sm transition-all duration-200 hover:border-bronze/50 hover:bg-charcoal/60 hover:text-bronze"
        >
          <svg width="11" height="11" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="2,5 6,9 10,5" />
          </svg>
        </button>
      </div>
    </div>
  );
}
