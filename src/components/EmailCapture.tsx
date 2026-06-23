"use client";

import { useState } from "react";
import { siteConfig } from "@/lib/site";

export function EmailCapture() {
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email) return;

    const subject = encodeURIComponent("Guide rénovation villa Marrakech — Ouidesign");
    const body = encodeURIComponent(
      `Bonjour,\n\nJe souhaite recevoir le guide Ouidesign sur la rénovation de villa à Marrakech.\n\nMon email : ${email}\n\nMerci.`
    );
    window.location.href = `mailto:${siteConfig.email}?subject=${subject}&body=${body}`;
    setSent(true);
  }

  return (
    <section className="bg-charcoal text-ivory">
      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:py-20">
        <div className="mx-auto max-w-3xl text-center">
          {sent ? (
            <>
              <p className="font-serif text-3xl text-ivory">Merci.</p>
              <p className="mt-4 text-sm leading-7 text-ivory/60">
                Votre client mail s'est ouvert. Envoyez le message et nous vous ferons parvenir
                le guide rapidement.
              </p>
            </>
          ) : (
            <>
              <p className="text-[0.65rem] uppercase tracking-[0.4em] text-bronze">Guide gratuit</p>
              <h2 className="mt-4 font-serif text-3xl font-medium leading-tight sm:text-4xl">
                Recevez notre guide :<br />
                <span className="text-bronze">Rénover sa villa à Marrakech.</span>
              </h2>
              <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-ivory/60">
                Budget, étapes, erreurs à éviter, équipements techniques et checklist complète.
                Envoyé directement par email. Sans publicité.
              </p>
              <form
                onSubmit={handleSubmit}
                className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center"
              >
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Votre adresse email"
                  autoComplete="email"
                  className="w-full border border-bronze/30 bg-transparent px-5 py-3.5 text-sm text-ivory placeholder:text-ivory/35 focus:border-bronze focus:outline-none sm:w-80"
                />
                <button
                  type="submit"
                  className="shrink-0 bg-bronze px-6 py-3.5 text-xs uppercase tracking-[0.18em] text-charcoal transition hover:bg-ivory"
                >
                  Recevoir le guide
                </button>
              </form>
              <p className="mt-4 text-[0.58rem] uppercase tracking-[0.16em] text-ivory/30">
                Aucun spam. Désabonnement immédiat.
              </p>
            </>
          )}
        </div>
      </div>
    </section>
  );
}
