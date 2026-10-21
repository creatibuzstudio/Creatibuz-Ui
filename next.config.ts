import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  turbopack: {
    root: __dirname,
  },
  async redirects() {
    return [
      {
        source: "/blog",
        destination: "/blogs",
        permanent: true,
      },
      {
        source: "/blog/:slug*",
        destination: "/blogs/:slug*",
        permanent: true,
      },
    ];
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "i.ibb.co",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "**.ibb.co",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "api.creatibuzstudio.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "www.api.jevxo.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "api.jevxo.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "randomuser.me",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
