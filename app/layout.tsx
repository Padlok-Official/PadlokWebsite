import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { SITE_URL, SITE_NAME, SITE_DESCRIPTION } from "@/lib/constants";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Padlok — Secure Escrow Payments for Buying & Selling in Ghana",
    template: "%s | Padlok",
  },
  description: SITE_DESCRIPTION,
  keywords: [
    "Padlok",
    "escrow app Ghana",
    "secure payment app Ghana",
    "buy and sell safely Ghana",
    "P2P escrow",
    "online scam protection Ghana",
    "MTN MoMo escrow",
    "Moolre escrow",
    "escrow service Ghana",
    "safe online payments Ghana",
  ],
  authors: [{ name: "Padlok" }],
  creator: "Padlok",
  publisher: "Padlok",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: SITE_URL,
    siteName: SITE_NAME,
    title: "Padlok — Secure Escrow Payments for Buying & Selling in Ghana",
    description: SITE_DESCRIPTION,
    locale: "en_GH",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Padlok — Secure Escrow Payments",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Padlok — Secure Escrow Payments for Buying & Selling in Ghana",
    description: SITE_DESCRIPTION,
    images: ["/opengraph-image"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  icons: {
    icon: [
      { url: "/icons/icon-32.png", sizes: "32x32", type: "image/png" },
      { url: "/icons/icon-192.png", sizes: "192x192", type: "image/png" },
    ],
    apple: [{ url: "/apple-icon.png", sizes: "180x180", type: "image/png" }],
  },
  manifest: "/manifest.webmanifest",
};

export const viewport: Viewport = {
  themeColor: "#FF6200",
  width: "device-width",
  initialScale: 1,
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Padlok",
  url: SITE_URL,
  logo: `${SITE_URL}/icons/icon-512.png`,
  description: SITE_DESCRIPTION,
  areaServed: {
    "@type": "Country",
    name: "Ghana",
  },
  sameAs: ["https://twitter.com/padlokapp", "https://instagram.com/padlokapp"],
};

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Padlok",
  url: SITE_URL,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
        <a href="#main" className="skip-link">
          Skip to content
        </a>
        <Header />
        <main id="main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
