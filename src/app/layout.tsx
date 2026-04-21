import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "CBD Goblin — Bem-estar Natural",
    template: "%s | CBD Goblin",
  },
  description:
    "Descubra o poder terapêutico do CBD. Óleos, cosméticos e suplementos de qualidade premium em Vila Nova de Gaia.",
  keywords: ["CBD", "canabidiol", "bem-estar", "terapêutico", "natural", "Portugal"],
  openGraph: {
    type: "website",
    locale: "pt_PT",
    siteName: "CBD Goblin",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-PT" className={`${inter.variable} ${playfair.variable}`}>
      <body className="flex min-h-screen flex-col bg-cream-100 text-charcoal-900 antialiased">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

