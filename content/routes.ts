import type { Article, Brand } from './types';
import { articles, articleBySlug } from './articles';
import { brands } from './brands';

export type BlogEntry =
  | { kind: 'article'; slug: string; date: string; article: Article }
  | { kind: 'review'; slug: string; date: string; brand: Brand };

const brandBySlug: Record<string, Brand> = Object.fromEntries(brands.map((b) => [b.slug, b]));

/** Review pages carry a stable published date so the sitemap and JSON-LD agree. */
const REVIEW_DATE = '2026-07-24';

export const blogEntries: BlogEntry[] = [
  ...articles.map((a): BlogEntry => ({ kind: 'article', slug: a.slug, date: a.date, article: a })),
  ...brands.map((b): BlogEntry => ({ kind: 'review', slug: b.slug, date: REVIEW_DATE, brand: b })),
];

export function getEntry(slug: string): BlogEntry | null {
  const a = articleBySlug[slug];
  if (a) return { kind: 'article', slug, date: a.date, article: a };
  const b = brandBySlug[slug];
  if (b) return { kind: 'review', slug, date: REVIEW_DATE, brand: b };
  return null;
}

export const allBlogSlugs: string[] = blogEntries.map((e) => e.slug);

/** Newest first, articles and reviews interleaved by date. */
export const blogFeed: BlogEntry[] = [...blogEntries].sort((a, b) => b.date.localeCompare(a.date));
