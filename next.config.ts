import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/index",
        destination: "/docs",
        permanent: false,
      },
      {
        source: "/quickstart",
        destination: "/docs/quickstart",
        permanent: false,
      },
      {
        source: "/concepts/:path*",
        destination: "/docs/concepts/:path*",
        permanent: false,
      },
      {
        source: "/guides/:path*",
        destination: "/docs/guides/:path*",
        permanent: false,
      },
      {
        source: "/api-reference/:path*",
        destination: "/docs/api-reference/:path*",
        permanent: false,
      },
    ];
  },
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
