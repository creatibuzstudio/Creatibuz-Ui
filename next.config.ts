import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  turbopack: {
    root: __dirname,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "i.ibb.co",
      },
      {
        protocol: "https",
        hostname: "**.ibb.co",
      },
      {
        protocol: "https",
        hostname: "api.creatibuzstudio.com",
      },
      {
        protocol: "https",
        hostname: "www.api.jevxo.com",
      },
      {
        protocol: "https",
        hostname: "api.jevxo.com",
      },
      {
        protocol: "https",
        hostname: "randomuser.me",
      },
    ],
  },
};

export default nextConfig;
