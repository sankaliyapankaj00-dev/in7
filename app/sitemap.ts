import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://in7co.in';
  const now = new Date();

  return [
    // Tier 1 — Homepage (highest authority)
    { url: base, lastModified: now, changeFrequency: 'daily', priority: 1.0 },

    // Tier 2 — Core product pages (high commercial intent)
    { url: `${base}/in7-game-download`, lastModified: now, changeFrequency: 'weekly', priority: 0.95 },
    { url: `${base}/in7-game-app`,      lastModified: now, changeFrequency: 'weekly', priority: 0.90 },
    { url: `${base}/how-to-register`,   lastModified: now, changeFrequency: 'monthly', priority: 0.85 },

    // Tier 3 — High-volume keyword landing pages
    { url: `${base}/paise-kamane-wala-game`,  lastModified: now, changeFrequency: 'weekly',  priority: 0.90 },
    { url: `${base}/in7-game-online-apk`,     lastModified: now, changeFrequency: 'weekly',  priority: 0.88 },
    { url: `${base}/in7-game-login`,          lastModified: now, changeFrequency: 'monthly', priority: 0.85 },
    { url: `${base}/in7-game-real-or-fake`,   lastModified: now, changeFrequency: 'monthly', priority: 0.80 },

    // Tier 4 — Brand / trust pages
    { url: `${base}/about-us`,        lastModified: now, changeFrequency: 'monthly', priority: 0.60 },
    { url: `${base}/privacy-policy`,  lastModified: now, changeFrequency: 'yearly',  priority: 0.30 },
    { url: `${base}/disclaimer`,      lastModified: now, changeFrequency: 'yearly',  priority: 0.30 },
  ];
}
