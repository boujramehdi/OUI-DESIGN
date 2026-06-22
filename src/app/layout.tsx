import type { Metadata, Viewport } from "next";
import "./globals.css";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "Ouidesign | Architecture intelligente pour villas à Marrakech",
    template: "%s | Ouidesign",
  },
  description: siteConfig.description,
  applicationName: "Ouidesign",
  keywords: [
    "Ouidesign",
    "rénovation villa Marrakech",
    "domotique Marrakech",
    "menuiserie sur mesure Marrakech",
    "smart home Marrakech",
    "architecture intérieure Marrakech",
  ],
  icons: {
    icon: "/favicon.png",
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    type: "website",
    locale: "fr_MA",
    siteName: "Ouidesign",
    title: "Ouidesign | Architecture intelligente pour villas à Marrakech",
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
    <html lang="fr" data-scroll-behavior="smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;500;600;700&family=Inter:wght@400;500;600;700&family=Monsieur+La+Doulaise&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
