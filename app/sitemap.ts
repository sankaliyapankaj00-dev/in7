import { MetadataRoute } from 'next';
import { blogFeed } from '@/content/routes';
import { tools } from '@/content/tools';
import { techArticles } from '@/content/tech';

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://www.in7co.in';
  const now = new Date();

  const techPages: MetadataRoute.Sitemap = techArticles.map((a) => ({
    url: `${base}/tech/${a.slug}`,
    lastModified: new Date(a.date),
    changeFrequency: 'monthly',
    priority: 0.65,
  }));

  const toolPages: MetadataRoute.Sitemap = tools.map((t) => ({
    url: `${base}/tools/${t.slug}`,
    lastModified: now,
    changeFrequency: 'monthly',
    priority: 0.6,
  }));

  const blogPages: MetadataRoute.Sitemap = blogFeed.map((entry) => ({
    url: `${base}/blog/${entry.slug}`,
    lastModified: new Date(entry.date),
    changeFrequency: 'monthly',
    // Reviews sit slightly above general guides: they carry the commercial intent.
    priority: entry.kind === 'review' ? 0.7 : 0.65,
  }));

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

    // Tier 4 — Content hubs
    { url: `${base}/gaming-apps`, lastModified: now, changeFrequency: 'weekly', priority: 0.80 },
    { url: `${base}/blog`,        lastModified: now, changeFrequency: 'weekly', priority: 0.75 },
    { url: `${base}/tools`,       lastModified: now, changeFrequency: 'weekly', priority: 0.75 },
    { url: `${base}/tech`,        lastModified: now, changeFrequency: 'weekly', priority: 0.75 },

    // Tier 5 — Individual reviews, guides, tool pages and tech articles
    ...blogPages,
    ...toolPages,
    ...techPages,

    // Tier 6 — Brand / trust pages
    { url: `${base}/about-us`,        lastModified: now, changeFrequency: 'monthly', priority: 0.60 },
    { url: `${base}/privacy-policy`,  lastModified: now, changeFrequency: 'yearly',  priority: 0.30 },
    { url: `${base}/disclaimer`,      lastModified: now, changeFrequency: 'yearly',  priority: 0.30 },
  ];
}
