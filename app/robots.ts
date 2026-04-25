import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: [
        '/wp-json/',
        '/wp-includes/',
        '/wp-content/',
        '/wp-admin/',
        '/author/',
        '/comments/',
        '/hello-world/',
        '/feed/',
      ],
    },
    sitemap: 'https://www.in7co.in/sitemap.xml',
  };
}
