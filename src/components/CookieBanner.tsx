"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const STORAGE_KEY = "ouidesign_cookie_consent";

type ConsentValue = "accepted" | "declined" | null;

export function CookieBanner() {
  const [consent, setConsent] = useState<ConsentValue | "loading">("loading");

  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY) as ConsentValue;
      setConsent(stored ?? null);
    } catch {
      setConsent(null);
    }
  }, []);

  function accept() {
    try {
      localStorage.setItem(STORAGE_KEY, "accepted");
    } catch {}
    setConsent("accepted");
  }

  function decline() {
    try {
      localStorage.setItem(STORAGE_KEY, "declined");
    } catch {}
    setConsent("declined");
  }

  // Don't render until hydrated, and hide if already chosen
  if (consent !== null) return null;

  return (
    <div
      role="dialog"
      aria-live="polite"
      aria-label="Paramètres des cookies"
      className="fixed inset-x-0 bottom-0 z-50 border-t border-bronze/25 bg-[rgba(13,14,16,0.96)] text-ivory backdrop-blur-md"
    >
      {/* Top bronze rule */}
      <div className="absolute inset-x-0 top-0 h-px bg-bronze/50" />

      <div className="mx-auto flex max-w-[1440px] flex-col gap-5 px-5 py-5 sm:flex-row sm:items-center sm:justify-between sm:gap-8 sm:px-8 xl:px-16">
        {/* Text */}
        <div className="flex-1">
          <p className="text-[0.6rem] uppercase tracking-[0.28em] text-bronze">Cookies</p>
          <p className="mt-1.5 max-w-2xl text-xs leading-6 text-ivory/65">
            Ce site utilise des polices Google Fonts (chargées depuis des serveurs Google) et des
            statistiques anonymes via Vercel Analytics. Aucun cookie publicitaire n'est déposé.{" "}
            <Link
              href="/confidentialite"
              className="text-ivory/50 underline underline-offset-2 transition hover:text-bronze"
            >
              En savoir plus
            </Link>
          </p>
        </div>

        {/* Actions */}
        <div className="flex shrink-0 items-center gap-3">
          <button
            onClick={decline}
            className="border border-ivory/20 px-4 py-2.5 text-[0.58rem] uppercase tracking-[0.18em] text-ivory/55 transition hover:border-ivory/40 hover:text-ivory/80"
          >
            Refuser
          </button>
          <button
            onClick={accept}
            className="bg-bronze px-5 py-2.5 text-[0.58rem] uppercase tracking-[0.18em] text-charcoal transition hover:bg-ivory"
          >
            Accepter
          </button>
        </div>
      </div>
    </div>
  );
}
