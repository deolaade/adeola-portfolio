import type { Metadata, Viewport } from "next";
import "./globals.css";
import { siteUrl } from "@/lib/site";

const title = "Adeola Adeyoyin - Product Manager & Product Designer";
const description = "Turning people\u2019s needs into thoughtful products that make life a little easier.";



// Link-preview image. Bump the version whenever og-image.jpg changes so WhatsApp,
// LinkedIn and X fetch the new image instead of their cached copy.
const ogImage = {
  url: "/og-image.jpg?v=2",
  secureUrl: `${siteUrl}/og-image.jpg?v=2`,
  type: "image/jpeg",
  width: 1200,
  height: 630,
  alt: "Adeola Adeyoyin, Product Manager and Product Designer",
};

// Structured data so search engines understand who the site is about.
const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Adeola Adeyoyin",
  url: siteUrl,
  image: `${siteUrl}/og-image.jpg`,
  jobTitle: "Chief Product Officer",
  description,
  worksFor: { "@type": "Organization", name: "Rezidant" },
  address: { "@type": "PostalAddress", addressLocality: "Lagos", addressCountry: "NG" },
  knowsAbout: ["Product management", "Product design", "UX design", "Product strategy"],
  sameAs: ["https://www.linkedin.com/in/adeolaadeyoyin", "https://www.behance.net/adeyoyinadeola"],
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title,
  description,
  applicationName: "Adeola Adeyoyin",
  authors: [{ name: "Adeola Adeyoyin", url: siteUrl }],
  creator: "Adeola Adeyoyin",
  keywords: [
    "Adeola Adeyoyin",
    "Product Manager",
    "Product Designer",
    "Chief Product Officer",
    "UI/UX Designer",
    "Product Design Portfolio",
    "Lagos",
    "Nigeria",
    "Rezidant",
  ],
  category: "portfolio",
  alternates: { canonical: "/" },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
  },
  icons: {
    icon: [{ url: "/images/favicon.png", type: "image/png", sizes: "64x64" }],
    apple: "/images/apple-touch-icon.png",
  },
  openGraph: {
    type: "profile",
    firstName: "Adeola",
    lastName: "Adeyoyin",
    url: "/",
    siteName: "Adeola Adeyoyin",
    locale: "en_NG",
    title,
    description,
    images: [ogImage],
  },
  twitter: { card: "summary_large_image", title, description, images: [ogImage] },
  formatDetection: { telephone: false, email: false, address: false },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f6f4ef" },
    { media: "(prefers-color-scheme: dark)", color: "#0b0b0f" },
  ],
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

// Sets the light/dark theme before first paint so there is no flash.
const themeScript = "(function(){var t;try{t=localStorage.getItem('aa-theme')}catch(e){}\ndocument.documentElement.className='js';\ndocument.documentElement.dataset.theme=t||(matchMedia('(prefers-color-scheme:dark)').matches?'dark':'light')})();";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        {/* eslint-disable-next-line @next/next/no-page-custom-font */}
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Archivo:wght@400..700&family=Bricolage+Grotesque:opsz,wght@12..96,200..800&family=Geist+Mono:wght@400..500&family=Instrument+Serif:ital@1&display=swap"
        />
      </head>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd).replace(/</g, "\\u003c") }}
        />
        {children}
      </body>
    </html>
  );
}
