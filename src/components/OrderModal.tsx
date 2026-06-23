"use client";

import { useState } from "react";
import { whatsappHref } from "@/lib/site";

type OrderModalProps = {
  productTitle: string;
  price: string;
  priceNote: string;
  onClose: () => void;
};

export function OrderModal({ productTitle, price, priceNote, onClose }: OrderModalProps) {
  const [step, setStep] = useState<"choose" | "transfer">("choose");

  const waLink = whatsappHref(
    `Bonjour Ouidesign, je souhaite commander : ${productTitle} (${price}). Merci de confirmer la disponibilité et les modalités de paiement.`
  );

  return (
    <div
      className="fixed inset-0 z-50 flex items-end justify-center bg-charcoal/80 backdrop-blur-sm sm:items-center"
      onClick={onClose}
    >
      <div
        className="w-full max-w-lg bg-ivory text-charcoal shadow-2xl max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-start justify-between border-b border-charcoal/10 px-5 py-5 sm:px-8 sm:py-6">
          <div>
            <p className="text-[0.58rem] uppercase tracking-[0.3em] text-bronze">Commander</p>
            <h3 className="mt-1 font-serif text-2xl font-medium">{productTitle}</h3>
          </div>
          <button
            onClick={onClose}
            className="text-charcoal/40 transition hover:text-charcoal"
            aria-label="Fermer"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Price */}
        <div className="flex items-end justify-between border-b border-charcoal/10 px-5 py-4 sm:px-8 sm:py-5">
          <div>
            <p className="text-[0.58rem] uppercase tracking-[0.28em] text-charcoal/45">Prix</p>
            <p className="mt-1 font-serif text-3xl font-medium text-charcoal">{price}</p>
          </div>
          <p className="max-w-[200px] text-right text-[0.6rem] leading-5 text-charcoal/45">{priceNote}</p>
        </div>

        {step === "choose" && (
          <div className="px-5 py-5 sm:px-8 sm:py-7">
            <p className="mb-5 text-[0.62rem] uppercase tracking-[0.28em] text-charcoal/50">
              Choisir un mode de paiement
            </p>
            <div className="space-y-3">

              {/* WhatsApp — primary */}
              <a
                href={waLink}
                target="_blank"
                className="flex w-full items-center gap-4 bg-[#25D366] px-6 py-4 text-left text-white transition hover:bg-[#1fba5a]"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z" />
                </svg>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.14em]">Commander via WhatsApp</p>
                  <p className="mt-0.5 text-[0.6rem] opacity-80">Réponse sous 2h — confirmation immédiate</p>
                </div>
              </a>

              {/* Bank transfer */}
              <button
                onClick={() => setStep("transfer")}
                className="flex w-full items-center gap-4 border border-charcoal/20 px-6 py-4 text-left transition hover:border-bronze hover:bg-bronze/5"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                  <polyline points="9 22 9 12 15 12 15 22" />
                </svg>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.14em] text-charcoal">Virement bancaire</p>
                  <p className="mt-0.5 text-[0.6rem] text-charcoal/50">Coordonnées bancaires fournies après confirmation</p>
                </div>
              </button>

              {/* Card — coming soon */}
              <div className="flex w-full items-center gap-4 border border-charcoal/10 bg-charcoal/3 px-6 py-4 opacity-50 cursor-not-allowed">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <rect x="1" y="4" width="22" height="16" rx="2" ry="2" />
                  <line x1="1" y1="10" x2="23" y2="10" />
                </svg>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.14em] text-charcoal">Carte bancaire</p>
                  <p className="mt-0.5 text-[0.6rem] text-charcoal/50">Bientôt disponible — CMI & Visa/Mastercard</p>
                </div>
                <span className="ml-auto shrink-0 border border-bronze/40 px-2 py-0.5 text-[0.48rem] uppercase tracking-[0.18em] text-bronze">
                  Bientôt
                </span>
              </div>

            </div>
          </div>
        )}

        {step === "transfer" && (
          <div className="px-5 py-5 sm:px-8 sm:py-7">
            <button
              onClick={() => setStep("choose")}
              className="mb-5 flex items-center gap-2 text-[0.6rem] uppercase tracking-[0.2em] text-charcoal/50 transition hover:text-charcoal"
            >
              ← Retour
            </button>
            <p className="text-[0.62rem] uppercase tracking-[0.28em] text-bronze">Virement bancaire</p>
            <div className="mt-4 space-y-3 rounded bg-charcoal/4 p-5 text-xs">
              <div className="flex justify-between">
                <span className="text-charcoal/50">Banque</span>
                <span className="font-medium text-charcoal">CIH Bank — Marrakech</span>
              </div>
              <div className="flex justify-between">
                <span className="text-charcoal/50">Bénéficiaire</span>
                <span className="font-medium text-charcoal">Ouidesign SARL</span>
              </div>
              <div className="flex justify-between">
                <span className="text-charcoal/50">RIB</span>
                <span className="font-medium text-charcoal">230 780 4011234567890112</span>
              </div>
              <div className="flex justify-between">
                <span className="text-charcoal/50">Montant</span>
                <span className="font-medium text-bronze">{price}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-charcoal/50">Référence</span>
                <span className="font-medium text-charcoal">{productTitle.slice(0, 12).toUpperCase()}-2026</span>
              </div>
            </div>
            <p className="mt-4 text-[0.58rem] leading-5 text-charcoal/45">
              Envoyez votre preuve de virement sur WhatsApp pour confirmation et lancement de fabrication.
            </p>
            <a
              href={waLink}
              target="_blank"
              className="mt-5 inline-flex w-full items-center justify-center gap-3 bg-bronze px-6 py-3.5 text-xs uppercase tracking-[0.18em] text-charcoal transition hover:bg-charcoal hover:text-ivory"
            >
              Envoyer la preuve de paiement
            </a>
          </div>
        )}

        <p className="border-t border-charcoal/8 px-5 py-4 text-center text-[0.55rem] uppercase tracking-[0.18em] text-charcoal/30 sm:px-8">
          Ouidesign · Design · Innovation · Confort · Marrakech
        </p>
      </div>
    </div>
  );
}
