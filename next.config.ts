import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      {
        source: "/docs",
        destination: "https://opentracy.mintlify.app",
      },
      {
        source: "/docs/:path*",
        destination: "https://opentracy.mintlify.app/:path*",
      },
      {
        source: "/mintlify-assets/:path*",
        destination: "https://opentracy.mintlify.app/mintlify-assets/:path*",
      },
      {
        source: "/static/:path*",
        destination: "https://opentracy.mintlify.app/static/:path*",
      },
    ];
  },
};

export default nextConfig;
