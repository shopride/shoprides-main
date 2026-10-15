import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Serve resized WebP/AVIF copies instead of the original full-size photos.
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      { protocol: "https", hostname: "images.pexels.com", pathname: "/photos/**" },
      { protocol: "https", hostname: "assets.cdn.filesafe.space", pathname: "/H3ivbExf1vNWxvYLjQZ0/**" },
    ],
  },
};

export default nextConfig;
