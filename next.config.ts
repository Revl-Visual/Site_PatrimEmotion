import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    formats: ['image/avif', 'image/webp'],
  },
  async redirects() {
    const contact = "https://www.am-courtage-et-patrimoine.fr/contact";
    return [
      { source: "/contact", destination: contact, permanent: true },
      { source: "/demande-demo", destination: contact, permanent: true },
    ];
  },
};

export default nextConfig;
