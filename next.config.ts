import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/privacy",
        destination: "/policy-and-privacy",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
