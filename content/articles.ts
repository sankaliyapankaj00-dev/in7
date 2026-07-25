import type { Article } from './types';
import { articles1 } from './articles-1';
import { articles2 } from './articles-2';
import { articles3 } from './articles-3';

/** Newest first. The blog index and sitemap both rely on this order. */
export const articles: Article[] = [...articles1, ...articles2, ...articles3].sort(
  (a, b) => b.date.localeCompare(a.date),
);

export const articleBySlug: Record<string, Article> = Object.fromEntries(
  articles.map((a) => [a.slug, a]),
);

export const categories = [
  'Guide',
  'Roundup',
  'Comparison',
  'Safety',
  'Payments',
  'Hindi',
] as const;
