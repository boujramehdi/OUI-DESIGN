"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { collectionItems } from "@/lib/site";

const collectionImages: { src: string; fit: string }[] = [
  { src: "/images/liftbar.png",           fit: "object-cover" },
  { src: "/images/mini-liftbar.png",      fit: "object-cover" },
  { src: "/images/bar-vintage-side.jpg",  fit: "object-cover object-center" },
  { src: "/images/bureau-marrakech.png",  fit: "object-cover" },
  { src: "/images/cuisine-premium.png",   fit: "object-cover" },
];

export function CollectionShowcase() {
  const [selected, setSelected] = useState(0);
  const activeItem = collectionItems[selected];

  return (
    <section className="bg-ivory text-charcoal">
      <div className="mx-auto max-w-7xl px-5 py-10 sm:px-8 sm:py-16 lg:py-28">

        {/* Header row */}
        <div className="reveal mb-12 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between lg:mb-16">
          <div>
            <p className="text-[0.62rem] uppercase tracking-[0.4em] text-bronze">
              Collection Oui Design
            </p>
            <h2 className="mt-3 font-serif text-3xl font-medium leading-[1.04] sm:text-4xl lg:text-5xl">
              Des créations pensées pour<br className="hidden sm:block" /> sublimer votre quotidien.
            </h2>
          </div>
          <Link
            href="/collection"
            className="group inline-flex shrink-0 items-center gap-3 text-[0.6rem] uppercase tracking-[0.22em] text-charcoal/50 transition-colors duration-300 hover:text-charcoal"
          >
            Voir toute la collection
            <span className="h-px w-8 bg-bronze/50 transition-all duration-300 group-hover:w-14 group-hover:bg-bronze" />
          </Link>
        </div>

        {/* Main grid */}
        <div className="grid gap-6 lg:grid-cols-[1.7fr_1fr] lg:gap-10 lg:items-stretch">

          {/* Center — swappable image */}
          <div className="reveal relative aspect-[3/2] overflow-hidden bg-charcoal sm:aspect-[16/10]">
            {collectionImages.map((item, i) => (
              <div
                key={i}
                className={`absolute inset-0 transition-all duration-700 ${
                  i === selected
                    ? "opacity-100 scale-100"
                    : "opacity-0 scale-[1.04]"
                }`}
              >
                <Image
                  src={item.src}
                  alt={collectionItems[i].title}
                  fill
                  sizes="(min-width: 1024px) 60vw, 100vw"
                  className={item.fit}
                />
              </div>
            ))}

            {/* Active item overlay — bottom info strip */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-charcoal/60 via-charcoal/20 to-transparent px-6 pb-6 pt-16">
              <p className="text-[0.55rem] uppercase tracking-[0.3em] text-bronze/80">
                {activeItem.price}
              </p>
              <p className="mt-1 font-serif text-lg text-ivory leading-tight">
                {activeItem.title}
              </p>
              <Link
                href={`/collection/${activeItem.slug}`}
                className="group mt-3 inline-flex items-center gap-2 text-[0.55rem] uppercase tracking-[0.22em] text-ivory/60 transition-colors duration-300 hover:text-ivory"
              >
                Voir le produit
                <span className="translate-x-0 transition-transform duration-300 group-hover:translate-x-1">→</span>
              </Link>
            </div>

            {/* Corner decoration */}
            <div className="absolute right-0 top-0 h-12 w-px bg-bronze/30" />
            <div className="absolute right-0 top-0 h-px w-12 bg-bronze/30" />
          </div>

          {/* Right — numbered list */}
          <div className="reveal flex flex-col justify-center">
            {collectionItems.map((item, index) => (
              <Link
                key={item.title}
                href={`/collection/${item.slug}`}
                onMouseEnter={() => setSelected(index)}
                onClick={() => setSelected(index)}
                className={`group relative flex flex-col overflow-hidden border-b border-charcoal/8 py-5 text-left transition-all duration-300 first:border-t first:border-charcoal/8 ${
                  selected === index
                    ? "pl-4 text-charcoal"
                    : "pl-0 text-charcoal/40 hover:pl-2 hover:text-charcoal"
                }`}
              >
                {/* Active left accent */}
                <div
                  className={`absolute left-0 top-0 bottom-0 w-[2px] bg-bronze transition-all duration-500 ${
                    selected === index ? "opacity-100" : "opacity-0"
                  }`}
                />

                <div className="flex items-center justify-between">
                  <span
                    className={`mr-3 shrink-0 font-serif text-lg leading-none transition-colors duration-300 ${
                      selected === index ? "text-bronze" : "text-bronze/30 group-hover:text-bronze/60"
                    }`}
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="flex-1 text-[0.58rem] font-medium uppercase tracking-[0.22em]">
                    {item.title}
                  </span>
                  <span
                    className={`ml-3 shrink-0 transition-all duration-300 ${
                      selected === index
                        ? "translate-x-0 text-bronze"
                        : "translate-x-1 text-charcoal/20 group-hover:translate-x-0 group-hover:text-bronze/60"
                    }`}
                  >
                    →
                  </span>
                </div>

                {/* Expanded description — only for active */}
                <div
                  className={`overflow-hidden transition-all duration-500 ${
                    selected === index ? "mt-3 max-h-24 opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <p className="pl-7 text-[0.58rem] leading-5 text-charcoal/55">
                    {item.description.slice(0, 100)}…
                  </p>
                  <p className="mt-2 pl-7 text-[0.52rem] font-medium uppercase tracking-[0.2em] text-bronze/70">
                    {item.price}
                  </p>
                </div>
              </Link>
            ))}

            {/* Bottom CTA */}
            <Link
              href="/collection"
              className="group mt-6 flex items-center gap-3 text-[0.58rem] uppercase tracking-[0.22em] text-charcoal/40 transition-colors duration-300 hover:text-charcoal"
            >
              <span className="h-px w-5 bg-bronze/40 transition-all duration-300 group-hover:w-10 group-hover:bg-bronze" />
              Collection complète
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
