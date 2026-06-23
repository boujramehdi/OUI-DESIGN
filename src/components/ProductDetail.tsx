"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { OrderModal } from "@/components/OrderModal";
import { whatsappHref } from "@/lib/site";
import type { Review } from "@/lib/products";

type RelatedProduct = {
  slug: string;
  title: string;
  description: string;
  price: string;
  priceNote: string;
  images: string[];
  imageAlt: string;
  fit: string;
  tagline: string;
  details: string[];
  reviews: Review[];
};

type ProductDetailProps = {
  slug: string;
  title: string;
  tagline: string;
  description: string;
  price: string;
  priceNote: string;
  images: string[];
  imageAlt: string;
  fit: string;
  details: string[];
  reviews: Review[];
  related: RelatedProduct[];
};

function StarIcon({ filled, small }: { filled: boolean; small?: boolean }) {
  const size = small ? 12 : 16;
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill={filled ? "#b8925f" : "none"}
      stroke="#b8925f"
      strokeWidth="1.5"
    >
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  );
}

export function ProductDetail({
  title,
  tagline,
  description,
  price,
  priceNote,
  images,
  imageAlt,
  fit,
  details,
  reviews,
  related,
}: ProductDetailProps) {
  const [activeImg, setActiveImg] = useState(0);
  const [modalOpen, setModalOpen] = useState(false);

  const avgRating = Math.round(
    reviews.reduce((s, r) => s + r.rating, 0) / reviews.length
  );
  const waLink = whatsappHref(
    `Bonjour Ouidesign, je voudrais en savoir plus sur ${title}.`
  );

  return (
    <main>
      {/* Breadcrumb */}
      <div className="bg-ivory border-b border-bronze/10 px-5 py-3 sm:px-8">
        <div className="mx-auto max-w-7xl text-[0.58rem] uppercase tracking-[0.2em] text-charcoal/40">
          <Link href="/collection" className="transition-colors hover:text-bronze">
            Collection
          </Link>{" "}
          /{" "}
          <span className="text-bronze">{title}</span>
        </div>
      </div>

      {/* Main product area */}
      <section className="bg-ivory">
        <div className="mx-auto max-w-7xl px-5 py-10 sm:px-8 lg:py-16 lg:grid lg:grid-cols-[1.1fr_0.9fr] lg:gap-20 lg:items-start">

          {/* LEFT: Image gallery */}
          <div className="lg:sticky lg:top-[110px]">
            {/* Main image */}
            <div className="relative aspect-[4/3] overflow-hidden bg-charcoal/5 anim-scale-in">
              {images.map((src, i) => (
                <div
                  key={src}
                  className={`absolute inset-0 transition-opacity duration-700 ${i === activeImg ? "opacity-100" : "opacity-0"}`}
                >
                  <Image
                    src={src}
                    alt={imageAlt}
                    fill
                    sizes="(min-width:1024px) 55vw,100vw"
                    className={`${fit} transition-transform duration-700 ${i === activeImg ? "scale-100" : "scale-105"}`}
                  />
                </div>
              ))}
              {/* Image counter badge */}
              {images.length > 1 && (
                <div className="absolute top-4 right-4 bg-charcoal/70 px-2 py-1 text-[0.5rem] uppercase tracking-[0.2em] text-ivory">
                  {activeImg + 1} / {images.length}
                </div>
              )}
            </div>

            {/* Thumbnails */}
            {images.length > 1 && (
              <div
                className="mt-3 grid gap-2"
                style={{ gridTemplateColumns: `repeat(${images.length}, 1fr)` }}
              >
                {images.map((src, i) => (
                  <button
                    key={src}
                    onClick={() => setActiveImg(i)}
                    className={`relative aspect-[4/3] overflow-hidden border-2 transition-all duration-300 ${
                      i === activeImg
                        ? "border-bronze"
                        : "border-transparent opacity-50 hover:opacity-80"
                    }`}
                  >
                    <Image src={src} alt="" fill sizes="150px" className="object-cover" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* RIGHT: Product info */}
          <div className="mt-8 lg:mt-0">
            {/* Eyebrow */}
            <p className="anim-fade-in text-[0.58rem] uppercase tracking-[0.34em] text-bronze">
              Collection 2026
            </p>

            {/* Title */}
            <h1 className="anim-slide-up anim-delay-1 mt-3 font-serif text-4xl font-medium leading-tight text-charcoal sm:text-5xl lg:text-6xl">
              {title}
            </h1>

            {/* Tagline */}
            <p className="anim-slide-up anim-delay-2 mt-2 font-serif text-xl italic text-bronze/70">
              {tagline}
            </p>

            {/* Star rating summary */}
            <div className="anim-fade-in anim-delay-2 mt-4 flex items-center gap-3">
              <div className="flex gap-0.5">
                {[1, 2, 3, 4, 5].map((s) => (
                  <StarIcon key={s} filled={s <= avgRating} />
                ))}
              </div>
              <span className="text-xs text-charcoal/50">{reviews.length} avis clients</span>
            </div>

            {/* Divider */}
            <div className="anim-fade-in anim-delay-3 my-6 h-px bg-bronze/15" />

            {/* Price */}
            <div className="anim-slide-up anim-delay-3">
              <p className="text-[0.58rem] uppercase tracking-[0.2em] text-charcoal/40">Prix</p>
              <p className="mt-1 font-serif text-3xl font-medium text-charcoal">{price}</p>
              <p className="mt-1 text-xs text-charcoal/45">{priceNote}</p>
            </div>

            {/* Description */}
            <p className="anim-slide-up anim-delay-4 mt-6 text-sm leading-7 text-charcoal/65 sm:text-base sm:leading-8">
              {description}
            </p>

            {/* Specs */}
            <ul className="anim-slide-up anim-delay-5 mt-6 space-y-2.5">
              {details.map((d) => (
                <li key={d} className="flex items-start gap-3 text-xs text-charcoal/60">
                  <span className="mt-1.5 h-px w-4 shrink-0 bg-bronze/50" />
                  {d}
                </li>
              ))}
            </ul>

            {/* CTAs */}
            <div className="anim-slide-up anim-delay-6 mt-8 flex flex-col gap-3 sm:flex-row">
              {price !== "Sur devis" ? (
                <button
                  onClick={() => setModalOpen(true)}
                  className="flex-1 bg-bronze py-4 text-xs uppercase tracking-[0.18em] text-charcoal transition-all duration-300 hover:bg-charcoal hover:text-ivory"
                >
                  Commander maintenant
                </button>
              ) : null}
              <a
                href={waLink}
                target="_blank"
                className="flex-1 border border-charcoal/25 py-4 text-center text-xs uppercase tracking-[0.18em] text-charcoal/70 transition-all duration-300 hover:border-bronze hover:text-bronze"
              >
                Parler à un expert →
              </a>
            </div>

            {/* Trust signals */}
            <div className="anim-fade-in anim-delay-6 mt-6 grid grid-cols-3 gap-2 border-t border-bronze/10 pt-6 sm:gap-4">
              {[
                {
                  label: "Garantie qualité",
                  icon: (
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                      <polyline points="9,12 11,14 15,10" />
                    </svg>
                  ),
                },
                {
                  label: "Livraison Maroc",
                  icon: (
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="1" y="3" width="15" height="13" />
                      <polygon points="16,8 20,8 23,11 23,16 16,16 16,8" />
                      <circle cx="5.5" cy="18.5" r="2.5" />
                      <circle cx="18.5" cy="18.5" r="2.5" />
                    </svg>
                  ),
                },
                {
                  label: "Sur mesure",
                  icon: (
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 2l2.4 7.4H22l-6.2 4.5 2.4 7.4L12 17l-6.2 4.3 2.4-7.4L2 9.4h7.6z" />
                    </svg>
                  ),
                },
              ].map((t) => (
                <div key={t.label} className="group flex flex-col items-center gap-2 text-center">
                  <div className="text-bronze/50 transition-colors duration-300 group-hover:text-bronze">
                    {t.icon}
                  </div>
                  <p className="text-[0.5rem] uppercase tracking-[0.18em] text-charcoal/40 transition-colors duration-300 group-hover:text-charcoal/70">
                    {t.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Reviews section */}
      <section className="bg-charcoal text-ivory">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:py-20">
          <div className="mb-10 flex items-end justify-between">
            <div>
              <p className="text-[0.62rem] uppercase tracking-[0.34em] text-bronze">Avis clients</p>
              <h2 className="mt-2 font-serif text-3xl font-medium">
                {reviews.length} avis vérifiés
              </h2>
            </div>
            <div className="flex items-center gap-2">
              <div className="flex gap-1">
                {[1, 2, 3, 4, 5].map((s) => (
                  <StarIcon key={s} filled={s <= avgRating} small />
                ))}
              </div>
              <span className="font-serif text-2xl text-bronze">{avgRating.toFixed(1)}</span>
            </div>
          </div>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {reviews.map((review, i) => (
              <article
                key={review.author}
                className="reveal border border-bronze/15 bg-[#1a1714] p-7"
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                <div className="flex gap-0.5 mb-4">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <StarIcon key={s} filled={s <= review.rating} small />
                  ))}
                </div>
                <p className="text-sm leading-7 text-ivory/70">&ldquo;{review.text}&rdquo;</p>
                <div className="mt-5 flex items-center justify-between border-t border-ivory/[0.08] pt-4">
                  <div>
                    <p className="text-[0.6rem] font-semibold uppercase tracking-[0.16em] text-ivory">
                      {review.author}
                    </p>
                    <p className="text-[0.55rem] text-ivory/40">{review.location}</p>
                  </div>
                  <p className="text-[0.55rem] text-ivory/30">{review.date}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Related products */}
      <section className="bg-ivory">
        <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8 lg:py-20">
          <p className="text-[0.62rem] uppercase tracking-[0.34em] text-bronze">
            Vous aimerez aussi
          </p>
          <div className="mt-8 grid gap-5 sm:grid-cols-3">
            {related.map((rp) => (
              <Link
                key={rp.slug}
                href={`/collection/${rp.slug}`}
                className="group relative overflow-hidden border border-bronze/15 bg-charcoal"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={rp.images[0]}
                    alt={rp.title}
                    fill
                    sizes="33vw"
                    className="object-cover opacity-80 transition-all duration-700 group-hover:opacity-100 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 to-transparent" />
                </div>
                <div className="p-6">
                  <h3 className="font-serif text-xl text-ivory">{rp.title}</h3>
                  <p className="mt-1 font-serif text-lg text-bronze">{rp.price}</p>
                  <p className="mt-3 text-[0.6rem] uppercase tracking-[0.2em] text-ivory/40 transition-colors duration-300 group-hover:text-bronze">
                    Voir le produit →
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Order modal */}
      {modalOpen && price !== "Sur devis" && (
        <OrderModal
          productTitle={title}
          price={price}
          priceNote={priceNote}
          onClose={() => setModalOpen(false)}
        />
      )}
    </main>
  );
}
