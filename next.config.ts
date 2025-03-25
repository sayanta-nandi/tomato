import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  webpack: (config) => {
    config.externals = [
      ...config.externals,
      { "@prisma/client": "@prisma/client" },
    ];
    return config;
  },
  images: {
    domains: ["lh3.googleusercontent.com", "res.cloudinary.com"], // add other domains if needed
  },
};

export default nextConfig;
