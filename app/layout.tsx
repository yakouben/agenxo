import type { Metadata } from "next";
import { Figtree, Libre_Baskerville } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Motion from "@/components/Motion";
import OnePageRail from "@/components/OnePageRail";
import { brand, siteUrl } from "@/lib/content";

const sans = Figtree({
  variable: "--font-sans-face",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const serif = Libre_Baskerville({
  variable: "--font-serif-face",
  subsets: ["latin"],
  weight: ["400"],
  style: ["italic", "normal"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Agenxo — Agence Shopify experte en France | Création, refonte, conversion",
  description:
    "Agence Shopify experte : création de boutique, refonte, applications sur-mesure et optimisation de la conversion. 100+ projets livrés, 5.0 sur 52+ avis Malt, 6+ ans d'expérience.",
  openGraph: { type: "website", siteName: brand.name, locale: "fr_FR", url: "/" },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="fr" className={`${sans.variable} ${serif.variable}`}>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
        <Motion />
        <OnePageRail />
      </body>
    </html>
  );
}
