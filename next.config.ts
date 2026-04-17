import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/lunar-site",
  assetPrefix: "/lunar-site",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
