"use client";

import { useState } from "react";
import { siteConfig } from "@/lib/site";

const projectTypes = [
  "Rénovation villa / riad",
  "Menuiserie sur mesure",
  "Smart home & domotique",
  "Piscine & local technique",
  "Sécurité & caméras",
  "Climatisation",
  "Solaire & infrastructure",
  "Cuisine premium",
  "Mobilier intelligent",
  "Projet complet (plusieurs expertises)",
];

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    const name = data.get("name") as string;
    const property = data.get("property") as string;
    const projectType = data.get("projectType") as string;
    const location = data.get("location") as string;
    const message = data.get("message") as string;

    const text = [
      `Bonjour Ouidesign,`,
      ``,
      `Je souhaite vous parler de mon projet.`,
      ``,
      `Nom : ${name}`,
      `Type de bien : ${property}`,
      `Projet : ${projectType}`,
      `Localisation : ${location}`,
      message ? `Détails : ${message}` : "",
    ]
      .filter(Boolean)
      .join("\n");

    const url = `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(text)}`;
    window.open(url, "_blank", "noopener,noreferrer");
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="border border-bronze/30 bg-charcoal p-10 text-ivory text-center">
        <p className="font-serif text-3xl">Merci.</p>
        <p className="mt-4 text-sm leading-7 text-ivory/65">
          WhatsApp s'est ouvert avec votre message. L'équipe Ouidesign vous répond
          rapidement et en toute confidentialité.
        </p>
        <button
          onClick={() => setSubmitted(false)}
          className="mt-8 border border-bronze/30 px-5 py-3 text-[0.6rem] uppercase tracking-[0.18em] text-ivory/60 transition hover:border-bronze hover:text-bronze"
        >
          Envoyer un autre message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="grid gap-5">
      {/* Nom */}
      <div className="grid gap-2">
        <label htmlFor="name" className="text-[0.6rem] uppercase tracking-[0.28em] text-bronze">
          Votre nom
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          autoComplete="name"
          placeholder="Prénom et nom"
          className="border border-bronze/25 bg-transparent px-4 py-3 text-sm text-charcoal placeholder:text-charcoal/35 focus:border-bronze focus:outline-none"
        />
      </div>

      {/* Type de bien */}
      <div className="grid gap-2">
        <label htmlFor="property" className="text-[0.6rem] uppercase tracking-[0.28em] text-bronze">
          Type de bien
        </label>
        <div className="relative">
          <select
            id="property"
            name="property"
            required
            defaultValue=""
            className="w-full appearance-none border border-bronze/25 bg-ivory px-4 py-3 pr-10 text-sm text-charcoal focus:border-bronze focus:outline-none transition-colors duration-200"
          >
            <option value="" disabled>Sélectionner…</option>
            <option>Villa</option>
            <option>Riad</option>
            <option>Maison d'hôtes</option>
            <option>Appartement</option>
            <option>Autre</option>
          </select>
          <div className="pointer-events-none absolute inset-y-0 right-3 flex items-center text-bronze/60">
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="2,4 6,8 10,4" />
            </svg>
          </div>
        </div>
      </div>

      {/* Type de projet */}
      <div className="grid gap-2">
        <label htmlFor="projectType" className="text-[0.6rem] uppercase tracking-[0.28em] text-bronze">
          Nature du projet
        </label>
        <div className="relative">
          <select
            id="projectType"
            name="projectType"
            required
            defaultValue=""
            className="w-full appearance-none border border-bronze/25 bg-ivory px-4 py-3 pr-10 text-sm text-charcoal focus:border-bronze focus:outline-none transition-colors duration-200"
          >
            <option value="" disabled>Sélectionner…</option>
            {projectTypes.map((type) => (
              <option key={type}>{type}</option>
            ))}
          </select>
          <div className="pointer-events-none absolute inset-y-0 right-3 flex items-center text-bronze/60">
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="2,4 6,8 10,4" />
            </svg>
          </div>
        </div>
      </div>

      {/* Localisation */}
      <div className="grid gap-2">
        <label htmlFor="location" className="text-[0.6rem] uppercase tracking-[0.28em] text-bronze">
          Localisation du bien
        </label>
        <input
          id="location"
          name="location"
          type="text"
          placeholder="ex : Palmeraie, Route de l'Ourika, Hivernage…"
          className="border border-bronze/25 bg-transparent px-4 py-3 text-sm text-charcoal placeholder:text-charcoal/35 focus:border-bronze focus:outline-none"
        />
      </div>

      {/* Message libre */}
      <div className="grid gap-2">
        <label htmlFor="message" className="text-[0.6rem] uppercase tracking-[0.28em] text-bronze">
          Détails supplémentaires{" "}
          <span className="normal-case tracking-normal text-charcoal/40">(optionnel)</span>
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          placeholder="Surface approximative, état du bien, calendrier souhaité, budget indicatif…"
          className="border border-bronze/25 bg-transparent px-4 py-3 text-sm text-charcoal placeholder:text-charcoal/35 focus:border-bronze focus:outline-none resize-none"
        />
      </div>

      <button
        type="submit"
        className="mt-2 inline-flex items-center justify-center gap-3 bg-bronze px-6 py-4 text-xs uppercase tracking-[0.18em] text-charcoal transition duration-300 hover:bg-charcoal hover:text-ivory"
      >
        <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z" />
        </svg>
        Envoyer via WhatsApp
      </button>

      <p className="text-[0.58rem] uppercase tracking-[0.16em] text-charcoal/40">
        Votre message s'ouvrira dans WhatsApp. Réponse rapide et confidentielle.
      </p>
    </form>
  );
}
