import type { Metadata, Viewport } from "next";
import { fontVariables } from "@/lib/fonts";
import { Providers } from "@/components/providers";
import { site } from "@/content/site";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "ELSOC — Electrical Engineering Society | NIT Hamirpur",
    template: "%s | ELSOC NITH",
  },
  description: site.description,
  keywords: [
    "ELSOC",
    "NIT Hamirpur",
    "Electrical Engineering",
    "technical society",
    "Sparkathon",
    "workshops",
    "student projects",
  ],
  authors: [{ name: "ELSOC, NIT Hamirpur" }],
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: site.url,
    siteName: "ELSOC NITH",
    title: "ELSOC — Electrical Engineering Society | NIT Hamirpur",
    description: site.description,
    images: [{ url: "/img/brand/elsoc-logo.png", width: 822, height: 822, alt: "ELSOC logo" }],
  },
  twitter: {
    card: "summary",
    title: "ELSOC — Electrical Engineering Society | NIT Hamirpur",
    description: site.description,
  },
  icons: {
    icon: [
      { url: "/icons/icon-32.png", sizes: "32x32", type: "image/png" },
      { url: "/icons/icon-192.png", sizes: "192x192", type: "image/png" },
    ],
    apple: "/icons/apple-touch-icon.png",
  },
  manifest: "/manifest.webmanifest",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#04070f" },
    { media: "(prefers-color-scheme: light)", color: "#f4f7fd" },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${fontVariables} font-sans`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
