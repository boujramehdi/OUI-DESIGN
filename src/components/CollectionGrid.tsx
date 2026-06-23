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
    <div className="relative h-full w-full overflow-hidden">
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
            className={`${item.fit} opacity-90 transition-transform duration-700 group-hover:scale-[1.03]`}
          />
        </div>
      ))}
      <div className="absolute inset-0 bg-gradient-to-t from-charcoal/40 to-transparent" />

      {/* "Voir le produit" — always visible on mobile, hover on desktop */}
      <div className="absolute inset-x-0 bottom-0 flex items-center justify-center bg-gradient-to-t from-charcoal via-charcoal/60 to-transparent py-5 lg:translate-y-full lg:transition-transform lg:duration-500 lg:group-hover:translate-y-0">
        <span className="text-[0.6rem] uppercase tracking-[0.3em] text-ivory">
          Voir le produit →
        </span>
      </div>

      {/* Thumbnail switcher */}
      {imgs.length > 1 && (
        <div className="absolute bottom-12 right-3 flex gap-1.5 z-10 sm:bottom-14 sm:right-4 sm:gap-2">
          {imgs.map((src, i) => (
            <button
              key={src}
              onClick={(e) => { e.preventDefault(); e.stopPropagation(); setActive(i); }}
              className={`relative h-10 w-10 overflow-hidden border-2 transition-all duration-300 sm:h-14 sm:w-14 ${
                i === active ? "border-bronze" : "border-ivory/20 opacity-60 hover:opacity-100"
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
      <div className="space-y-4 sm:space-y-6">
        {items.map((item, index) => (
          <Link
            key={item.title}
            href={`/collection/${item.slug}`}
            className="block"
          >
            <article
              className={`reveal group grid overflow-hidden border border-bronze/15 bg-charcoal text-ivory transition-all duration-500 hover:border-bronze/40 lg:grid-cols-2 ${
                index % 2 === 1 ? "lg:[direction:rtl]" : ""
              }`}
            >
              {/* Image */}
              <div
                className={`relative aspect-[3/2] overflow-hidden bg-charcoal/50 sm:aspect-[4/3] lg:aspect-auto lg:min-h-[420px] ${
                  index % 2 === 1 ? "lg:[direction:ltr]" : ""
                }`}
              >
                <ProductImage item={item} />
              </div>

              {/* Content */}
              <div
                className={`flex flex-col justify-center p-5 sm:p-10 lg:p-16 ${
                  index % 2 === 1 ? "lg:[direction:ltr]" : ""
                }`}
              >
                <p className="text-[0.58rem] uppercase tracking-[0.28em] text-bronze sm:text-[0.6rem] sm:tracking-[0.32em]">
                  {String(index + 1).padStart(2, "0")} — Collection 2026
                </p>
                <h2 className="mt-3 font-serif text-2xl font-medium leading-tight sm:mt-4 sm:text-3xl lg:text-4xl">
                  {item.title}
                </h2>
                {item.tagline && (
                  <p className="mt-1.5 font-serif text-base italic text-bronze/70 sm:text-lg lg:text-xl">
                    {item.tagline}
                  </p>
                )}
                <div className="mt-3 h-px w-8 bg-bronze/40 transition-all duration-500 group-hover:w-16 group-hover:bg-bronze/70 sm:mt-4 sm:w-10" />
                <p className="mt-3 text-xs leading-6 text-ivory/65 sm:mt-5 sm:text-sm sm:leading-7 lg:text-base lg:leading-8">
                  {item.description}
                </p>

                {/* Specs */}
                <ul className="mt-5 space-y-2 sm:mt-7 sm:space-y-2.5">
                  {item.details.map((detail) => (
                    <li key={detail} className="flex items-start gap-2.5 text-[0.7rem] text-ivory/55 sm:text-xs">
                      <span className="mt-1.5 h-px w-4 shrink-0 bg-bronze/50 sm:w-5" />
                      {detail}
                    </li>
                  ))}
                </ul>

                {/* Price + CTA */}
                <div className="mt-6 flex flex-wrap items-center gap-3 sm:mt-10 sm:gap-4">
                  {item.price !== "Sur devis" && (
                    <div>
                      <p className="text-[0.52rem] uppercase tracking-[0.18em] text-ivory/35 sm:text-[0.55rem] sm:tracking-[0.2em]">Prix</p>
                      <p className="mt-0.5 font-serif text-lg font-medium text-bronze sm:text-xl">{item.price}</p>
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
                      className="inline-flex items-center gap-2 bg-bronze px-5 py-3 text-[0.65rem] uppercase tracking-[0.16em] text-charcoal transition duration-300 hover:bg-ivory sm:gap-3 sm:px-6 sm:py-3.5 sm:text-xs sm:tracking-[0.18em]"
                    >
                      Commander
                    </button>
                  ) : (
                    <a
                      href={whatsappHref(
                        `Bonjour Ouidesign, je souhaite un devis pour : ${item.title}.`
                      )}
                      target="_blank"
                      onClick={(e) => { e.preventDefault(); e.stopPropagation(); window.open(whatsappHref(`Bonjour Ouidesign, je souhaite un devis pour : ${item.title}.`), "_blank"); }}
                      className="inline-flex items-center gap-2 bg-bronze px-5 py-3 text-[0.62rem] uppercase tracking-[0.14em] text-charcoal transition duration-300 hover:bg-ivory sm:gap-3 sm:px-6 sm:py-3.5 sm:text-xs sm:tracking-[0.18em]"
                    >
                      Sur mesure — Devis
                    </a>
                  )}
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
