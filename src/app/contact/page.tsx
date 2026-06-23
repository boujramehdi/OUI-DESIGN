"use client";

import { useState } from "react";
import Link from "next/link";
import { siteConfig, whatsappHref } from "@/lib/site";
import { CustomSelect } from "@/components/CustomSelect";

const services = [
  "Rénovation villa / riad",
  "Architecture intérieure",
  "Menuiserie sur mesure",
  "Cuisine premium",
  "Smart home & domotique",
  "Piscine & local technique",
  "Sécurité & caméras",
  "Climatisation",
  "Solaire & infrastructure",
  "Projet complet",
  "Autre demande",
];

/* ─── Contact form ─── */
function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const name = data.get("name") as string;
    const service = data.get("service") as string;
    const property = data.get("property") as string;
    const location = data.get("location") as string;
    const message = data.get("message") as string;

    const text = [
      `Bonjour Ouidesign,`,
      ``,
      `Je vous contacte depuis le site web.`,
      ``,
      `Nom : ${name}`,
      `Service souhaité : ${service}`,
      `Type de bien : ${property}`,
      location ? `Localisation : ${location}` : "",
      message ? `Message : ${message}` : "",
    ]
      .filter(Boolean)
      .join("\n");

    window.open(
      `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(text)}`,
      "_blank",
      "noopener,noreferrer"
    );
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center border border-bronze/30 bg-sand p-12 text-center">
        <div className="mb-6 h-px w-12 bg-bronze" />
        <p className="font-serif text-3xl text-charcoal">Message envoyé.</p>
        <p className="mt-4 max-w-xs text-sm leading-7 text-charcoal/60">
          WhatsApp s'est ouvert avec votre message. L'équipe Ouidesign vous répond rapidement et en toute confidentialité.
        </p>
        <button
          onClick={() => setSubmitted(false)}
          className="mt-8 border border-bronze/40 px-5 py-3 text-[0.6rem] uppercase tracking-[0.18em] text-charcoal/60 transition hover:border-bronze hover:text-charcoal"
        >
          Nouveau message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="grid gap-5">
      <div className="grid gap-5 sm:grid-cols-2">
        {/* Nom */}
        <div className="grid gap-2">
          <label htmlFor="c-name" className="text-[0.6rem] uppercase tracking-[0.28em] text-bronze">
            Votre nom *
          </label>
          <input
            id="c-name"
            name="name"
            type="text"
            required
            autoComplete="name"
            placeholder="Prénom et nom"
            className="border border-bronze/25 bg-transparent px-4 py-3 text-sm text-charcoal placeholder:text-charcoal/35 focus:border-bronze focus:outline-none transition-colors duration-200"
          />
        </div>

        {/* Type de bien */}
        <div className="grid gap-2">
          <label htmlFor="c-property" className="text-[0.6rem] uppercase tracking-[0.28em] text-bronze">
            Type de bien *
          </label>
          <CustomSelect
            id="c-property"
            name="property"
            required
            placeholder="Sélectionner…"
            options={["Villa", "Riad", "Maison d'hôtes", "Appartement", "Espace commercial", "Autre"]}
          />
        </div>
      </div>

      {/* Service */}
      <div className="grid gap-2">
        <label htmlFor="c-service" className="text-[0.6rem] uppercase tracking-[0.28em] text-bronze">
          Service souhaité *
        </label>
        <CustomSelect
          id="c-service"
          name="service"
          required
          placeholder="Sélectionner un service…"
          options={services}
        />
      </div>

      {/* Localisation */}
      <div className="grid gap-2">
        <label htmlFor="c-location" className="text-[0.6rem] uppercase tracking-[0.28em] text-bronze">
          Localisation du bien
        </label>
        <input
          id="c-location"
          name="location"
          type="text"
          placeholder="ex : Palmeraie, Hivernage, Route de l'Ourika…"
          className="border border-bronze/25 bg-transparent px-4 py-3 text-sm text-charcoal placeholder:text-charcoal/35 focus:border-bronze focus:outline-none transition-colors duration-200"
        />
      </div>

      {/* Message */}
      <div className="grid gap-2">
        <label htmlFor="c-message" className="text-[0.6rem] uppercase tracking-[0.28em] text-bronze">
          Votre message{" "}
          <span className="normal-case tracking-normal text-charcoal/40">(optionnel)</span>
        </label>
        <textarea
          id="c-message"
          name="message"
          rows={5}
          placeholder="Décrivez votre projet, vos priorités ou posez vos questions…"
          className="resize-none border border-bronze/25 bg-transparent px-4 py-3 text-sm text-charcoal placeholder:text-charcoal/35 focus:border-bronze focus:outline-none transition-colors duration-200"
        />
      </div>

      <button
        type="submit"
        className="group mt-2 inline-flex items-center justify-center gap-3 bg-bronze px-6 py-4 text-xs uppercase tracking-[0.18em] text-charcoal transition duration-300 hover:bg-charcoal hover:text-ivory"
      >
        <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z" />
        </svg>
        Envoyer via WhatsApp
      </button>

      <p className="text-[0.58rem] uppercase tracking-[0.16em] text-charcoal/40">
        Réponse rapide et confidentielle — votre message s'ouvre directement dans WhatsApp.
      </p>
    </form>
  );
}

/* ─── Page ─── */
export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-ivory text-charcoal">
        <div className="absolute left-0 right-0 top-[90px] h-px bg-bronze/12" />
        <div className="absolute bottom-0 left-0 top-[90px] w-px bg-bronze/15" />
        <div className="relative mx-auto max-w-7xl px-5 pb-16 pt-36 sm:px-8 sm:pb-20 sm:pt-44 lg:pb-24 lg:pt-52">
          <div className="flex items-center gap-5">
            <span className="hero-line-grow inline-block h-px bg-bronze/65" />
            <p className="text-[0.62rem] uppercase tracking-[0.4em] text-bronze">Contact</p>
          </div>
          <h1 className="mt-5 max-w-3xl font-serif text-4xl font-medium leading-[1.02] text-charcoal sm:text-5xl lg:text-[3.5rem]">
            Parlons de votre projet.
          </h1>
          <div className="mt-8 h-px w-20 bg-bronze/40" />
          <p className="mt-6 max-w-xl text-sm leading-7 text-charcoal/55">
            Ouidesign vous répond rapidement — par WhatsApp, par téléphone ou par email.
            Choisissez le canal qui vous convient le mieux.
          </p>
        </div>
      </section>

      {/* Contact method cards — dark background, full bleed */}
      <section className="bg-charcoal text-ivory">
        <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8 sm:py-16">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                icon: (
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z" />
                  </svg>
                ),
                label: "WhatsApp",
                value: siteConfig.phone,
                sub: "Réponse rapide, 7j/7",
                cta: "Contacter",
                href: whatsappHref(),
                external: true,
              },
              {
                icon: (
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.18 2 2 0 0 1 3.58 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.5a16 16 0 0 0 5.55 5.55l.96-.96a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                ),
                label: "Téléphone",
                value: siteConfig.phone,
                sub: "Lun–Sam · 9h–19h",
                cta: "Appeler",
                href: `tel:${siteConfig.phone}`,
                external: false,
              },
              {
                icon: (
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                    <polyline points="22,6 12,13 2,6" />
                  </svg>
                ),
                label: "Email",
                value: siteConfig.email,
                sub: "Réponse sous 24h",
                cta: "Écrire",
                href: `mailto:${siteConfig.email}`,
                external: false,
              },
              {
                icon: (
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                ),
                label: "Localisation",
                value: "Maroc",
                sub: "Palmeraie · Hivernage · Targa",
                cta: "Voir les zones",
                href: "#zones" as string | undefined,
                external: false,
              },
            ].map((method) => {
              const inner = (
                <div className="group relative flex flex-col overflow-hidden border border-ivory/8 p-7 transition-all duration-500 hover:border-bronze/50 hover:bg-[rgba(184,146,95,0.07)]">
                  {/* Top bronze sweep */}
                  <div className="absolute left-0 top-0 h-[2px] w-0 bg-bronze transition-all duration-700 group-hover:w-full" />
                  {/* Bottom line */}
                  <div className="absolute bottom-0 left-0 h-px w-full bg-ivory/5" />

                  {/* Icon with glow on hover */}
                  <div className="mb-6 w-fit rounded-full border border-bronze/20 p-3 text-bronze transition-all duration-500 group-hover:border-bronze/60 group-hover:bg-bronze/10 group-hover:shadow-[0_0_20px_rgba(184,146,95,0.15)]">
                    {method.icon}
                  </div>

                  <p className="text-[0.58rem] uppercase tracking-[0.3em] text-ivory/40 transition-colors duration-300 group-hover:text-bronze">
                    {method.label}
                  </p>
                  <p className="mt-2 font-serif text-xl leading-tight text-ivory transition-colors duration-300 group-hover:text-ivory sm:text-2xl">
                    {method.value}
                  </p>
                  <p className="mt-1.5 text-xs text-ivory/45">{method.sub}</p>

                  <span className="mt-6 flex items-center gap-2 text-[0.58rem] uppercase tracking-[0.22em] text-bronze/50 transition-all duration-300 group-hover:gap-3 group-hover:text-bronze">
                    {method.cta}
                    <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
                  </span>
                </div>
              );

              return method.href ? (
                <a
                  key={method.label}
                  href={method.href}
                  target={method.external ? "_blank" : undefined}
                  rel={method.external ? "noopener noreferrer" : undefined}
                >
                  {inner}
                </a>
              ) : (
                <div key={method.label}>{inner}</div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Main content — form + side info */}
      <section className="bg-ivory text-charcoal">
        <div className="mx-auto grid max-w-7xl gap-16 px-5 py-20 sm:px-8 lg:grid-cols-[1fr_1.4fr] lg:gap-24 lg:py-28">

          {/* Left — info column */}
          <div>
            <p className="text-[0.65rem] uppercase tracking-[0.4em] text-bronze">Avant de nous écrire</p>
            <h2 className="mt-4 font-serif text-3xl font-medium leading-tight text-charcoal sm:text-4xl">
              Ce qu'il est utile de préparer.
            </h2>
            <p className="mt-5 text-sm leading-7 text-charcoal/60">
              Un premier échange WhatsApp suffit souvent. Si vous avez ces éléments sous la main,
              notre réponse sera plus précise et rapide.
            </p>

            <div className="mt-8 divide-y divide-bronze/15 border-y border-bronze/15">
              {[
                { n: "01", text: "Type et localisation de votre bien (villa, riad, palmeraie, hivernage…)" },
                { n: "02", text: "Nature du projet : rénovation, menuiserie, smart home, piscine, solaire…" },
                { n: "03", text: "Niveau d'urgence ou période souhaitée pour commencer" },
                { n: "04", text: "Photos, plans ou vidéo courte si disponibles — très utile pour le diagnostic" },
              ].map((item) => (
                <div key={item.n} className="group flex gap-5 py-4 transition-colors duration-300 hover:bg-bronze/[0.03] hover:pl-1">
                  <span className="shrink-0 text-[0.58rem] uppercase tracking-[0.2em] text-bronze">{item.n}</span>
                  <p className="text-sm leading-6 text-charcoal/65 transition-colors duration-300 group-hover:text-charcoal">{item.text}</p>
                </div>
              ))}
            </div>

            {/* Direct contact buttons */}
            <div className="mt-10">
              <p className="text-[0.6rem] uppercase tracking-[0.28em] text-bronze">Contact direct</p>
              <a
                href={whatsappHref()}
                target="_blank"
                rel="noopener noreferrer"
                className="group mt-4 flex items-center gap-4 border border-bronze/25 px-6 py-4 transition-all duration-300 hover:border-bronze hover:bg-bronze/5"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" className="shrink-0 text-bronze">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z" />
                </svg>
                <div>
                  <p className="text-sm font-medium text-charcoal transition-colors duration-300 group-hover:text-bronze">
                    {siteConfig.phone}
                  </p>
                  <p className="text-[0.58rem] uppercase tracking-[0.16em] text-charcoal/45">
                    Ouvrir WhatsApp maintenant
                  </p>
                </div>
                <span className="ml-auto text-bronze/40 transition-all duration-300 group-hover:translate-x-1 group-hover:text-bronze">→</span>
              </a>

              <a
                href={`tel:${siteConfig.phone}`}
                className="group mt-3 flex items-center gap-4 border border-bronze/25 px-6 py-4 transition-all duration-300 hover:border-bronze hover:bg-bronze/5"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="shrink-0 text-bronze">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.18 2 2 0 0 1 3.58 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.5a16 16 0 0 0 5.55 5.55l.96-.96a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
                <div>
                  <p className="text-sm font-medium text-charcoal transition-colors duration-300 group-hover:text-bronze">
                    Appel direct
                  </p>
                  <p className="text-[0.58rem] uppercase tracking-[0.16em] text-charcoal/45">
                    Lun–Sam · 9h–19h
                  </p>
                </div>
                <span className="ml-auto text-bronze/40 transition-all duration-300 group-hover:translate-x-1 group-hover:text-bronze">→</span>
              </a>
            </div>

            {/* Links */}
            <div className="mt-10 border-t border-bronze/15 pt-8">
              <p className="text-[0.6rem] uppercase tracking-[0.28em] text-bronze">Aller plus loin</p>
              <div className="mt-4 grid gap-2">
                {[
                  { href: "/devis", label: "Demander un devis détaillé", num: "01" },
                  { href: "/contrat", label: "Comprendre notre cadre contractuel", num: "02" },
                  { href: "/realisations", label: "Voir nos typologies de projets", num: "03" },
                ].map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="group relative flex items-center justify-between overflow-hidden bg-charcoal px-5 py-4 text-xs text-ivory/70 transition-all duration-300 hover:text-ivory"
                  >
                    {/* Bronze sweep from left on hover */}
                    <div className="absolute inset-y-0 left-0 w-0 bg-bronze/20 transition-all duration-500 group-hover:w-full" />
                    <div className="relative flex items-center gap-4">
                      <span className="font-serif text-sm text-bronze/40 transition-colors duration-300 group-hover:text-bronze">
                        {link.num}
                      </span>
                      <span className="uppercase tracking-[0.14em]">{link.label}</span>
                    </div>
                    <span className="relative text-bronze/50 transition-all duration-300 group-hover:translate-x-1 group-hover:text-bronze">→</span>
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Right — form */}
          <div>
            <p className="text-[0.65rem] uppercase tracking-[0.4em] text-bronze">Formulaire de contact</p>
            <h2 className="mt-4 font-serif text-3xl font-medium leading-tight text-charcoal sm:text-4xl">
              Décrivez votre projet en 2 minutes.
            </h2>
            <p className="mt-4 mb-8 text-sm leading-7 text-charcoal/55">
              Votre message s'ouvrira dans WhatsApp, prêt à être envoyé. Pas de formulaire perdu, pas de délai.
            </p>
            <ContactForm />
          </div>
        </div>
      </section>

      {/* Zone d'intervention */}
      <section id="zones" className="bg-charcoal text-ivory">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:py-20">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <p className="text-[0.65rem] uppercase tracking-[0.4em] text-bronze">Zone d'intervention</p>
              <h2 className="mt-3 font-serif text-2xl font-medium text-ivory sm:text-3xl">
                Nous intervenons au Maroc et ses environs.
              </h2>
            </div>
            <div className="flex flex-wrap gap-2">
              {["Palmeraie", "Hivernage", "Guéliz", "Agdal", "Targa", "Route de l'Ourika", "Amelkis", "Route de Fès"].map((zone) => (
                <span
                  key={zone}
                  className="border border-bronze/25 px-4 py-2 text-[0.6rem] uppercase tracking-[0.18em] text-ivory/60 transition-all duration-300 hover:border-bronze hover:bg-bronze/10 hover:text-ivory cursor-default"
                >
                  {zone}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="relative overflow-hidden bg-[#2C2018] text-ivory">
        <div className="pointer-events-none absolute -left-40 -top-40 h-[600px] w-[600px] rounded-full bg-bronze/[0.12] blur-3xl" />
        <div className="pointer-events-none absolute -bottom-32 -right-32 h-[500px] w-[500px] rounded-full bg-bronze/[0.09] blur-3xl" />
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-bronze/60 to-transparent" />
        <div className="relative mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20 lg:py-24">
          <div className="flex flex-col items-center text-center">
            <p className="text-xs text-ivory/55">Réponse rapide et confidentielle</p>
            <h2 className="mt-4 font-serif text-3xl font-medium leading-tight sm:text-4xl lg:text-5xl">
              Votre projet mérite une lecture précise.
            </h2>
            <p className="mt-5 max-w-xl text-sm leading-7 text-ivory/65">
              Décrivez-nous votre villa, riad ou espace d'hospitalité. Ouidesign vous revient avec une première orientation claire et sans engagement.
            </p>
            <a
              href={whatsappHref("Bonjour Ouidesign, je souhaite vous parler de mon projet.")}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center gap-3 bg-bronze px-8 py-4 text-xs uppercase tracking-[0.18em] text-charcoal transition duration-300 hover:bg-ivory"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z" />
              </svg>
              Écrire sur WhatsApp
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
