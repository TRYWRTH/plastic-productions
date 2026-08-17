import type { Metadata } from "next";
import { Archivo, IBM_Plex_Mono } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Intro from "@/components/Intro";
import "./globals.css";

const archivo = Archivo({
  subsets: ["latin"],
  weight: ["400", "500", "800", "900"],
  variable: "--font-archivo",
  display: "swap",
});

const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Plastic Productions — Art & Performance, Berlin",
    template: "%s — Plastic Productions",
  },
  description:
    "Plastic Productions is a Berlin art-and-performance collective: nights for the community, and artists for hire for brand and agency events.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${archivo.variable} ${plexMono.variable}`}>
      <body>
        <Intro />
        <Header />
        <main className="pp-main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
