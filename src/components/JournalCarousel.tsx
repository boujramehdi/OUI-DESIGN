"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import type { Article } from "@/lib/articles";

export function JournalCarousel({ articles }: { articles: Article[] }) {
  const [current, setCurrent] = useState(0);
  const article = articles[current];

  return (
    <div className="relative flex h-[70vh] w-full flex-col lg:h-screen lg:w-[54%]">

      {/* Slides */}
      <div className="relative flex-1 overflow-hidden">
        {articles.map((a, i) => (
          <Link
            key={a.slug}
            href={`/journal/${a.slug}`}
            className={`absolute inset-0 transition-opacity duration-700 ${
              i === current ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
            }`}
          >
            {/* Background image */}
            {a.featuredImage && (
              <Image
                src={a.featuredImage}
                alt={a.title}
                fill
                sizes="(min-width:1024px) 54vw, 100vw"
                priority={i === 0}
                className="object-cover"
              />
            )}

            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/30 to-charcoal/20" />

            {/* Top badge */}
            <div className="absolute left-8 top-8 border border-bronze/50 bg-charcoal/50 px-3 py-1.5 backdrop-blur-md sm:left-10 sm:top-10">
              <span className="text-[0.48rem] uppercase tracking-[0.32em] text-bronze">
                {a.category}
              </span>
            </div>

            {/* Article number */}
            <span className="absolute right-8 top-8 font-serif text-[5rem] font-medium leading-none text-ivory/[0.06] sm:right-10">
              {String(i + 1).padStart(2, "0")}
            </span>

            {/* Bottom content */}
            <div className="absolute bottom-0 left-0 right-0 px-8 pb-28 sm:px-10 lg:pb-24">
              <div className="mb-4 h-px w-10 bg-bronze/50" />
              <h2 className="max-w-md font-serif text-2xl font-medium leading-snug text-ivory sm:text-3xl">
                {a.title}
              </h2>
              <p className="mt-3 max-w-sm text-xs leading-6 text-ivory/45">
                {a.excerpt}
              </p>
              <div className="mt-6 flex items-center gap-6">
                <span className="flex items-center gap-2 text-[0.58rem] uppercase tracking-[0.22em] text-bronze">
                  Lire l'article →
                </span>
                <span className="text-[0.5rem] uppercase tracking-[0.16em] text-ivory/25">
                  {a.date} · {a.readTime}
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* Dot navigation */}
      <div className="absolute bottom-8 left-0 right-0 flex items-center justify-center gap-3">
        {articles.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            aria-label={`Article ${i + 1}`}
            className="group flex h-6 w-6 items-center justify-center"
          >
            <span
              className={`block rounded-full transition-all duration-300 ${
                i === current
                  ? "h-2 w-2 bg-bronze"
                  : "h-1.5 w-1.5 bg-ivory/25 group-hover:bg-ivory/50"
              }`}
            />
          </button>
        ))}
      </div>

      {/* Prev / Next arrows */}
      <div className="absolute bottom-6 right-8 flex items-center gap-3 sm:right-10">
        <button
          onClick={() => setCurrent((c) => (c - 1 + articles.length) % articles.length)}
          className="flex h-9 w-9 items-center justify-center border border-ivory/15 text-ivory/40 transition-all duration-200 hover:border-bronze/60 hover:text-bronze"
          aria-label="Article précédent"
        >
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="8,2 4,6 8,10" />
          </svg>
        </button>
        <button
          onClick={() => setCurrent((c) => (c + 1) % articles.length)}
          className="flex h-9 w-9 items-center justify-center border border-ivory/15 text-ivory/40 transition-all duration-200 hover:border-bronze/60 hover:text-bronze"
          aria-label="Article suivant"
        >
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="4,2 8,6 4,10" />
          </svg>
        </button>
      </div>
    </div>
  );
}
