import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      // /in7-game-app/ (trailing slash) → /about-us
      {
        source: '/in7-game-app/',
        destination: '/about-us',
        permanent: true,
      },
      // /in7-game-app-2 → /in7-game-app
      {
        source: '/in7-game-app-2',
        destination: '/in7-game-app',
        permanent: true,
      },
      {
        source: '/in7-game-app-2/',
        destination: '/in7-game-app',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
