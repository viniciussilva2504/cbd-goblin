import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const BASE_URL =
  process.env.NEXT_PUBLIC_BASE_URL ?? "https://cbd-goblin.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "CBD Goblin — Bem-estar Natural em Vila Nova de Gaia",
    template: "%s | CBD Goblin",
  },
  description:
    "Loja especializada em produtos CBD em Vila d'Este, Vila Nova de Gaia. Óleos, cosméticos, pomadas e suplementos de qualidade premium. Entrega em Portugal continental.",
  keywords: [
    "CBD",
    "canabidiol",
    "óleo CBD",
    "bem-estar natural",
    "Vila Nova de Gaia",
    "Portugal",
    "comprar CBD Portugal",
    "CBD legal Portugal",
  ],
  authors: [{ name: "CBD Goblin" }],
  openGraph: {
    type: "website",
    locale: "pt_PT",
    url: BASE_URL,
    siteName: "CBD Goblin",
    title: "CBD Goblin — Bem-estar Natural em Vila Nova de Gaia",
    description:
      "Loja especializada em produtos CBD. Óleos, cosméticos, pomadas e suplementos premium. Entrega em Portugal continental.",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "CBD Goblin — Bem-estar Natural",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "CBD Goblin — Bem-estar Natural em Vila Nova de Gaia",
    description:
      "Descubra o poder terapêutico do CBD. Óleos, cosméticos e suplementos de qualidade premium.",
    images: ["/opengraph-image"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  alternates: {
    canonical: BASE_URL,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-PT" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <body className="flex min-h-screen flex-col bg-cream-100 text-charcoal-900 antialiased">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

