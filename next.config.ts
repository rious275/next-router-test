import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",
  images: {
    unoptimized: true,
    domains: ["img.studiomate.kr"],
  },
};

export default nextConfig;
