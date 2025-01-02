import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
    domains: ["img.studiomate.kr"],
  },
};

export default nextConfig;
