import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */

  reactStrictMode: true,

  output: "export",
  trailingSlash: true,

  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "growbyteeglobal.com",
        pathname: "/**",
      },
    ],
  },

  experimental: {
    optimizePackageImports: ["gsap"],
  },

  compiler: {
    removeConsole: process.env.NODE_ENV === "production",
  },
};

export default nextConfig;
