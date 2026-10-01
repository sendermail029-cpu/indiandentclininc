/** @type {import('next').NextConfig} */
const MEDIA_CACHE = "public, max-age=2592000, stale-while-revalidate=86400"; // 30 days

const nextConfig = {
  // Lets a production test build run alongside `next dev` without clashing
  distDir: process.env.NEXT_DIST_DIR || ".next",
  compress: true,
  poweredByHeader: false,
  images: {
    formats: ["image/avif", "image/webp"],
    minimumCacheTTL: 2592000,
    remotePatterns: [{ protocol: "https", hostname: "**" }],
  },
  experimental: {
    optimizePackageImports: ["lucide-react", "framer-motion"],
  },
  async headers() {
    return [
      {
        source: "/:path*.(webp|jpg|jpeg|png|svg|ico|mp4|woff2)",
        headers: [{ key: "Cache-Control", value: MEDIA_CACHE }],
      },
    ];
  },
};
module.exports = nextConfig;
