"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { collectionItems } from "@/lib/site";

const collectionImages: { src: string; fit: string }[] = [
  { src: "/images/liftbar.png",      fit: "object-cover" },
  { src: "/images/mini-liftbar.png", fit: "object-cover" },
  { src: "/images/bureau.png",       fit: "object-contain" },
  { src: "/images/cuisine.png",      fit: "object-cover" },
];

export function CollectionShowcase() {
  const [selected, setSelected] = useState(0);

  return (
    <section className="bg-ivory text-charcoal">
      <div className="mx-auto grid max-w-7xl gap-8 px-5 py-12 sm:px-8 sm:py-16 lg:grid-cols-[0.65fr_1.6fr_0.85fr] lg:items-center lg:gap-10 lg:py-20">

        {/* Left — heading */}
        <div className="reveal">
          <p className="text-[0.62rem] uppercase tracking-[0.34em] text-bronze">
            Collection Oui Design
          </p>
          <h2 className="mt-4 font-serif text-3xl font-medium leading-[1.04] sm:text-4xl">
            Des créations pensées pour sublimer votre quotidien.
          </h2>
          <Link
            href="/collection"
            className="mt-6 inline-flex items-center gap-4 text-xs uppercase tracking-[0.18em] text-charcoal/60 transition hover:text-charcoal"
          >
            Découvrez notre collection
            <span className="h-px w-10 bg-bronze/60" />
          </Link>
        </div>

        {/* Center — swappable image */}
        <div className="reveal relative aspect-[4/3] overflow-hidden bg-charcoal sm:aspect-[3/2] lg:aspect-[16/10]">
          {collectionImages.map((item, i) => (
            <div
              key={i}
              className={`absolute inset-0 transition-opacity duration-700 ${
                i === selected ? "opacity-100" : "opacity-0"
              }`}
            >
              <Image
                src={item.src}
                alt={collectionItems[i].title}
                fill
                sizes="(min-width: 1024px) 55vw, 100vw"
                className={item.fit}
              />
            </div>
          ))}
        </div>

        {/* Right — numbered list */}
        <div className="reveal flex flex-col">
          {collectionItems.map((item, index) => (
            <button
              key={item.title}
              onClick={() => setSelected(index)}
              className={`group flex items-center justify-between border-b border-sand py-5 text-left transition-colors duration-200 first:border-t first:border-t-sand ${
                selected === index ? "text-charcoal" : "text-charcoal/40 hover:text-charcoal"
              }`}
            >
              <span
                className={`mr-4 shrink-0 font-serif text-lg leading-none transition-colors duration-200 ${
                  selected === index ? "text-bronze" : "text-bronze/35"
                }`}
              >
                {String(index + 1).padStart(2, "0")}
              </span>
              <span className="flex-1 text-[0.6rem] font-medium uppercase tracking-[0.22em]">
                {item.title}
              </span>
              <span
                className={`ml-3 shrink-0 transition-transform duration-200 group-hover:translate-x-1 ${
                  selected === index ? "text-bronze" : "text-charcoal/25"
                }`}
              >
                →
              </span>
            </button>
          ))}
        </div>

      </div>
    </section>
  );
}
