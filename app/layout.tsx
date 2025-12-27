import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

// ════════════════════════════════════════════════════════════════════════════════
// 📝 PERSONALIZACIÓN - EDITAR AQUÍ
// ════════════════════════════════════════════════════════════════════════════════

// Fuente de Google Fonts - Opciones populares:
// Inter, Roboto, Open_Sans, Lato, Poppins, Montserrat, Raleway, Nunito
const font = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sans",
});

// Configuración SEO del sitio
const SITE_CONFIG = {
  name: "TuMarca",
  title: "TuMarca | Desarrollo Web Profesional",
  description:
    "Desarrollamos sitios web y aplicaciones que impulsan el crecimiento de tu empresa. Landing pages, e-commerce, sistemas de gestión y más.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://tumarca.com",
  locale: "es_MX",
  keywords: [
    "desarrollo web",
    "landing page",
    "diseño web",
    "aplicaciones web",
    "Next.js",
    "React",
  ],
  author: "TuMarca",
  twitterHandle: "@tumarca",
};
// ════════════════════════════════════════════════════════════════════════════════

export const metadata: Metadata = {
  // Básico
  title: {
    default: SITE_CONFIG.title,
    template: `%s | ${SITE_CONFIG.name}`,
  },
  description: SITE_CONFIG.description,
  keywords: SITE_CONFIG.keywords,
  authors: [{ name: SITE_CONFIG.author }],
  creator: SITE_CONFIG.author,

  // Favicon y iconos
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.svg", type: "image/svg+xml" },
    ],
    apple: "/apple-touch-icon.png",
  },

  // Open Graph (Facebook, LinkedIn, WhatsApp)
  openGraph: {
    type: "website",
    locale: SITE_CONFIG.locale,
    url: SITE_CONFIG.url,
    siteName: SITE_CONFIG.name,
    title: SITE_CONFIG.title,
    description: SITE_CONFIG.description,
    images: [
      {
        url: `${SITE_CONFIG.url}/og-image.png`,
        width: 1200,
        height: 630,
        alt: SITE_CONFIG.name,
      },
    ],
  },

  // Twitter Card
  twitter: {
    card: "summary_large_image",
    title: SITE_CONFIG.title,
    description: SITE_CONFIG.description,
    creator: SITE_CONFIG.twitterHandle,
    images: [`${SITE_CONFIG.url}/og-image.png`],
  },

  // Robots
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  // Verificación (descomenta y añade tus IDs)
  // verification: {
  //   google: "tu-google-site-verification",
  //   yandex: "tu-yandex-verification",
  // },

  // Metadatos adicionales
  metadataBase: new URL(SITE_CONFIG.url),
  alternates: {
    canonical: "/",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`scroll-smooth ${font.variable}`}>
      <body className={font.className}>{children}</body>
    </html>
  );
}
