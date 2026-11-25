import type { Metadata, Viewport } from "next";
import "./globals.css";

const title = "Adeola Adeyoyin - Product Manager & Product Designer";
const description = "Turning people\u2019s needs into thoughtful products that make life a little easier.";

// On Vercel this resolves to your production domain automatically.
// Set NEXT_PUBLIC_SITE_URL if you add a custom domain.
const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : "http://localhost:3000");

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title,
  description,
  alternates: { canonical: "/" },
  icons: {
    icon: [{ url: "/images/favicon.png", type: "image/png", sizes: "64x64" }],
    apple: "/images/apple-touch-icon.png",
  },
  openGraph: {
    type: "website",
    url: "/",
    title,
    description,
    images: [{ url: "/preview.jpg", width: 1200, height: 630, alt: "Adeola Adeyoyin, Product Manager and Product Designer" }],
  },
  twitter: { card: "summary_large_image", title, description, images: ["/preview.jpg"] },
};

export const viewport: Viewport = {
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
      <body>{children}</body>
    </html>
  );
}
