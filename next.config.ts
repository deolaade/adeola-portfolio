import type { NextConfig } from "next";

const nextConfig: NextConfig = {
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
