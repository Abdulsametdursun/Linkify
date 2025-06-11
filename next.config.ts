import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        hostname: "hidden-moose-307.convex.cloud",
        protocol: "https",
      },
    ],
  },
};

export default nextConfig;
