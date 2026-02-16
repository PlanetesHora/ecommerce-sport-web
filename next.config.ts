import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "sporton-backend-production-b563.up.railway.app",
        pathname: "/uploads/**",
      },
      {
        protocol: "https",
        hostname: "res.cloudinary.com", 
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;