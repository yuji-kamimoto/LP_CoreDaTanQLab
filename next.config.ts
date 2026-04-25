import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/courses/hirogeru",
        destination: "/courses#course-0-1",
        permanent: true,
      },
      {
        source: "/courses/fukameru",
        destination: "/courses#course-inquiry",
        permanent: true,
      },
    ];
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.microcms-assets.io",
        pathname: "/assets/**",
      },
    ],
  },
};

export default nextConfig;
