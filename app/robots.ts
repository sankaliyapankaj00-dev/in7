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
        // Planning documents and handouts. Also served with an X-Robots-Tag
        // noindex header, since robots.txt alone only blocks crawling.
        '/docs/',
        '/*.pdf$',
      ],
    },
    sitemap: 'https://www.in7co.in/sitemap.xml',
  };
}
