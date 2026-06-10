import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/suplementos",
        destination: "/catalogo",
        permanent: true,
      },
      {
        source: "/suplementos/:slug",
        destination: "/catalogo/:slug",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
