import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true,
    qualities: [75, 90, 100],
  },
  turbopack: {
    root: process.cwd(),
  },
};

export default nextConfig;
