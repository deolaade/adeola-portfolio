import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // The site moved to adeolaadeyoyin.vercel.app; send visitors on the old address there.
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "adeola-portfolio-brown.vercel.app" }],
        destination: "https://adeolaadeyoyin.vercel.app/:path*",
        permanent: true,
      },
    ];
  },
  // Long-lived caching for images and fonts in /public.
  async headers() {
    return [
      {
        source: "/:dir(images|fonts)/:file*",
        headers: [{ key: "Cache-Control", value: "public, max-age=604800, stale-while-revalidate=86400" }],
      },
    ];
  },
};

export default nextConfig;
