"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { OrderModal } from "@/components/OrderModal";
import { whatsappHref } from "@/lib/site";

type CollectionProduct = {
  slug: string;
  title: string;
  description: string;
  price: string;
  priceNote: string;
  image: string;
  images?: string[];
  imageAlt: string;
  fit: string;
  tagline?: string;
  details: string[];
};

type ModalState = {
  productTitle: string;
  price: string;
  priceNote: string;
} | null;

function ProductImage({ item }: { item: CollectionProduct }) {
  const [active, setActive] = useState(0);
  const imgs = item.images ?? [item.image];

  return (
    <div className="lg-dark-panel relative h-full w-full overflow-hidden">
      {imgs.map((src, i) => (
        <div
          key={src}
          className={`absolute inset-0 transition-opacity duration-700 ${i === active ? "opacity-100" : "opacity-0"}`}
        >
          <Image
            src={src}
            alt={`${item.imageAlt}${imgs.length > 1 ? ` — vue ${i + 1}` : ""}`}
            fill
            sizes="(min-width: 1024px) 50vw, 100vw"
            className={`${item.fit} opacity-90 transition-transform duration-700 group-hover/card:scale-[1.04]`}
          />
        </div>
      ))}

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-charcoal/55 via-charcoal/10 to-transparent" />

      {/* Shimmer sweep */}
      <div className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-ivory/[0.08] to-transparent transition-transform duration-[900ms] group-hover/card:translate-x-full" />

      {/* Bronze bottom border sweep */}
      <div className="absolute inset-x-0 bottom-0 h-[2px] origin-left scale-x-0 bg-bronze/70 transition-transform duration-700 group-hover/card:scale-x-100" />

      {/* "Voir le produit" slide-up CTA */}
      <div className="absolute inset-x-0 bottom-0 flex items-center justify-between bg-gradient-to-t from-charcoal via-charcoal/75 to-transparent px-6 py-5 translate-y-0 lg:translate-y-full lg:transition-transform lg:duration-500 lg:group-hover/card:translate-y-0">
        <span className="text-[0.58rem] uppercase tracking-[0.3em] text-ivory/80">
          Voir le produit
        </span>
        <span className="text-bronze transition-transform duration-300 group-hover/card:translate-x-1">→</span>
      </div>

      {/* Thumbnail switcher */}
      {imgs.length > 1 && (
        <div className="absolute bottom-14 right-3 z-10 flex gap-1.5 sm:bottom-16 sm:right-4 sm:gap-2">
          {imgs.map((src, i) => (
            <button
              key={src}
              onClick={(e) => { e.preventDefault(); e.stopPropagation(); setActive(i); }}
              className={`relative h-10 w-10 overflow-hidden border-2 transition-all duration-300 sm:h-14 sm:w-14 ${
                i === active ? "border-bronze" : "border-ivory/20 opacity-50 hover:opacity-90"
              }`}
              aria-label={`Vue ${i + 1}`}
            >
              <Image src={src} alt="" fill sizes="56px" className="object-cover" />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

export function CollectionGrid({ items }: { items: CollectionProduct[] }) {
  const [modal, setModal] = useState<ModalState>(null);

  return (
    <>
      <div className="space-y-px bg-bronze/10">
        {items.map((item, index) => (
          <Link
            key={item.title}
            href={`/collection/${item.slug}`}
            className="block"
          >
            <article
              className={`reveal group/card relative grid overflow-hidden bg-charcoal text-ivory transition-all duration-700 hover:bg-[#141210] lg:grid-cols-2 ${
                index % 2 === 1 ? "lg:[direction:rtl]" : ""
              }`}
            >
              {/* Top sweep bar */}
              <div className="absolute left-0 top-0 z-20 h-[2px] w-0 bg-bronze transition-all duration-700 group-hover/card:w-full" />

              {/* Image panel */}
              <div
                className={`relative aspect-[3/2] overflow-hidden sm:aspect-[4/3] lg:aspect-auto lg:min-h-[500px] ${
                  index % 2 === 1 ? "lg:[direction:ltr]" : ""
                }`}
              >
                <ProductImage item={item} />
              </div>

              {/* Content panel */}
              <div
                className={`relative flex flex-col justify-center overflow-hidden p-6 sm:p-10 lg:p-16 ${
                  index % 2 === 1 ? "lg:[direction:ltr]" : ""
                }`}
              >
                {/* Left accent bar */}
                <div className="absolute left-0 top-0 h-0 w-[2px] bg-bronze/70 transition-all duration-700 group-hover/card:h-full" />

                {/* Bronze ambient glow */}
                <div
                  className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-700 group-hover/card:opacity-100"
                  style={{ background: "radial-gradient(ellipse 80% 60% at 0% 50%, rgba(188,143,85,0.08) 0%, transparent 70%)" }}
                />

                {/* Ghost number watermark */}
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute -bottom-6 -right-4 select-none font-serif font-medium leading-none text-ivory/[0.025] transition-colors duration-700 group-hover/card:text-bronze/[0.10]"
                  style={{ fontSize: "clamp(8rem, 14vw, 12rem)" }}
                >
                  {String(index + 1).padStart(2, "0")}
                </span>

                {/* Eyebrow */}
                <p className="relative text-center text-[0.58rem] uppercase tracking-[0.32em] text-bronze/60 transition-colors duration-300 group-hover/card:text-bronze sm:text-left">
                  {String(index + 1).padStart(2, "0")} — Collection 2026
                </p>

                {/* Title */}
                <h2 className="relative mt-3 text-center font-serif text-2xl font-medium leading-tight text-ivory transition-colors duration-300 group-hover/card:text-bronze/90 sm:text-left sm:text-3xl lg:text-[2.6rem] lg:leading-[1.05]">
                  {item.title}
                </h2>

                {/* Tagline */}
                {item.tagline && (
                  <p className="relative mt-2 text-center font-serif text-base italic text-bronze/55 transition-colors duration-300 group-hover/card:text-bronze/80 sm:text-left sm:text-lg lg:text-xl">
                    {item.tagline}
                  </p>
                )}

                {/* Animated rule */}
                <div className="relative mx-auto mt-5 h-px w-8 bg-bronze/35 transition-all duration-700 group-hover/card:w-24 group-hover/card:bg-bronze/70 sm:mx-0" />

                {/* Description */}
                <p className="relative mt-5 text-center text-xs leading-7 text-ivory/58 transition-colors duration-300 group-hover/card:text-ivory/80 sm:text-left sm:text-sm sm:leading-7 lg:text-[0.9rem] lg:leading-8">
                  {item.description}
                </p>

                {/* Specs */}
                <ul className="relative mt-6 space-y-2.5 sm:mt-7">
                  {item.details.map((detail) => (
                    <li key={detail} className="flex items-start gap-3 text-[0.7rem] text-ivory/45 transition-colors duration-300 group-hover/card:text-ivory/65 sm:text-xs">
                      <span className="mt-1.5 h-px w-4 shrink-0 bg-bronze/40 transition-all duration-500 group-hover/card:w-6 group-hover/card:bg-bronze/65 sm:w-5" />
                      {detail}
                    </li>
                  ))}
                </ul>

                {/* Price + CTA */}
                <div className="relative mt-8 flex flex-wrap items-center justify-center gap-3 sm:mt-10 sm:justify-start sm:gap-5">
                  {item.price !== "Sur devis" && (
                    <div>
                      <p className="text-[0.5rem] uppercase tracking-[0.18em] text-ivory/30">Prix</p>
                      <p className="mt-0.5 font-serif text-xl font-medium text-bronze transition-colors duration-300 group-hover/card:text-bronze">
                        {item.price}
                      </p>
                    </div>
                  )}

                  {item.price !== "Sur devis" ? (
                    <button
                      onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        setModal({
                          productTitle: item.title,
                          price: item.price,
                          priceNote: item.priceNote,
                        });
                      }}
                      className="inline-flex items-center gap-2 bg-bronze px-5 py-3 text-[0.62rem] uppercase tracking-[0.16em] text-charcoal transition-all duration-300 hover:bg-ivory sm:px-6 sm:py-3.5 sm:text-xs sm:tracking-[0.18em]"
                    >
                      Commander
                    </button>
                  ) : (
                    <button
                      type="button"
                      onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        window.open(whatsappHref(`Bonjour Ouidesign, je souhaite un devis pour : ${item.title}.`), "_blank");
                      }}
                      className="inline-flex items-center gap-2 bg-bronze px-5 py-3 text-[0.62rem] uppercase tracking-[0.14em] text-charcoal transition-all duration-300 hover:bg-ivory sm:px-6 sm:py-3.5 sm:text-xs sm:tracking-[0.18em]"
                    >
                      Sur mesure — Devis
                    </button>
                  )}

                  <span className="ml-auto hidden text-[0.58rem] uppercase tracking-[0.2em] text-bronze/0 transition-all duration-500 group-hover/card:translate-x-1 group-hover/card:text-bronze/70 sm:block">
                    Voir →
                  </span>
                </div>
              </div>
            </article>
          </Link>
        ))}
      </div>

      {modal && (
        <OrderModal
          productTitle={modal.productTitle}
          price={modal.price}
          priceNote={modal.priceNote}
          onClose={() => setModal(null)}
        />
      )}
    </>
  );
}
