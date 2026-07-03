import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  output: process.env.DOCKER_BUILD ? "standalone" : undefined,
  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      // Vercel Blob / S3-compatible object storage for admin uploads
      { protocol: "https", hostname: "*.public.blob.vercel-storage.com" },
      { protocol: "https", hostname: "*.blob.vercel-storage.com" },
    ],
  },
  experimental: {
    // Inline critical CSS to improve LCP
    optimizePackageImports: ["lucide-react", "framer-motion"],
  },
  async redirects() {
    return [
      // Legacy deep-link from the previous (Vite) site
      {
        source: "/sparkathon/problemstatements",
        destination: "/sparkathon#problem-statements",
        permanent: true,
      },
      // Alternate spelling used in early promo material
      { source: "/sparkthon", destination: "/sparkathon", permanent: true },
      { source: "/sparkthon/:path*", destination: "/sparkathon", permanent: true },
    ];
  },
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=()",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
