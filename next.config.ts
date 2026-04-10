import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      // ── Fix: old wrong redirect removed ──
      // /in7-game-app/ should NOT redirect to /about-us (it has its own page now)

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

      // ── Old WordPress URLs → Redirect to relevant new pages ──

      // Old WordPress post URLs (404 errors in GSC)
      {
        source: '/privacy-policy-how-to-earn-money-from-in7-game',
        destination: '/paise-kamane-wala-game',
        permanent: true,
      },
      {
        source: '/privacy-policy-how-to-earn-money-from-in7-game/',
        destination: '/paise-kamane-wala-game',
        permanent: true,
      },
      {
        source: '/in7-apk-about-us-secure-platfrom-for-omline-gaming',
        destination: '/about-us',
        permanent: true,
      },
      {
        source: '/in7-apk-about-us-secure-platfrom-for-omline-gaming/',
        destination: '/about-us',
        permanent: true,
      },
      {
        source: '/in7-apk-about-us-secure-platfrom-for-omline-gaminginfo',
        destination: '/about-us',
        permanent: true,
      },

      // WordPress hello-world & feeds → Homepage
      {
        source: '/hello-world',
        destination: '/',
        permanent: true,
      },
      {
        source: '/hello-world/',
        destination: '/',
        permanent: true,
      },
      {
        source: '/hello-world/feed',
        destination: '/',
        permanent: true,
      },
      {
        source: '/hello-world/feed/',
        destination: '/',
        permanent: true,
      },
      {
        source: '/feed',
        destination: '/',
        permanent: true,
      },
      {
        source: '/feed/',
        destination: '/',
        permanent: true,
      },
      {
        source: '/comments/feed',
        destination: '/',
        permanent: true,
      },
      {
        source: '/comments/feed/',
        destination: '/',
        permanent: true,
      },

      // WordPress author pages → About Us
      {
        source: '/author/:slug',
        destination: '/about-us',
        permanent: true,
      },
      {
        source: '/author/:slug/',
        destination: '/about-us',
        permanent: true,
      },
      {
        source: '/author/:slug/feed',
        destination: '/about-us',
        permanent: true,
      },
      {
        source: '/author/:slug/feed/',
        destination: '/about-us',
        permanent: true,
      },

      // WordPress API/system URLs → Homepage
      {
        source: '/wp-json/:path*',
        destination: '/',
        permanent: true,
      },
      {
        source: '/wp-includes/:path*',
        destination: '/',
        permanent: true,
      },
      {
        source: '/wp-content/:path*',
        destination: '/',
        permanent: true,
      },
      {
        source: '/wp-admin/:path*',
        destination: '/',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
