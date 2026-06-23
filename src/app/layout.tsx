import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Inter, Monsieur_La_Doulaise } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";
import { CookieBanner } from "@/components/CookieBanner";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { RevealObserver } from "@/components/RevealObserver";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { siteConfig } from "@/lib/site";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  display: "swap",
  preload: true,
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-inter",
  display: "swap",
  preload: true,
});

const signature = Monsieur_La_Doulaise({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-signature",
  display: "swap",
  preload: false,
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "Ouidesign | Architecture intelligente pour villas au Maroc",
    template: "%s | Ouidesign",
  },
  description: siteConfig.description,
  applicationName: "Ouidesign",
  keywords: [
    "Ouidesign",
    "rénovation villa Maroc",
    "domotique Maroc",
    "menuiserie sur mesure Maroc",
    "smart home Maroc",
    "architecture intérieure Maroc",
  ],
  icons: {
    icon: "/favicon.png",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/manifest.json",
  verification: {
    // Ajouter ici votre code Google Search Console après vérification :
    // google: "VOTRE_CODE_ICI",
  },
  openGraph: {
    type: "website",
    locale: "fr_MA",
    siteName: "Ouidesign",
    title: "Ouidesign | Architecture intelligente pour villas au Maroc",
    description: siteConfig.description,
    images: [
      {
        url: "/images/ouidesign-profile.png",
        width: 1254,
        height: 1254,
        alt: "Ouidesign",
      },
    ],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#F4EFE7",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="fr"
      className={`${cormorant.variable} ${inter.variable} ${signature.variable}`}
    >
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
        <WhatsAppButton />
        <CookieBanner />
        <RevealObserver />
        <Analytics />
      </body>
    </html>
  );
}
