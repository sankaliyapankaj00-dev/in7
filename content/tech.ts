import type { TechArticle } from './tech-types';
import { tech1 } from './tech-1';
import { tech2 } from './tech-2';
import { tech3 } from './tech-3';

/** Newest first. Drives the /tech index and the sitemap. */
export const techArticles: TechArticle[] = [...tech1, ...tech2, ...tech3].sort((a, b) =>
  b.date.localeCompare(a.date),
);

export const techBySlug: Record<string, TechArticle> = Object.fromEntries(
  techArticles.map((a) => [a.slug, a]),
);

export const allTechSlugs: string[] = techArticles.map((a) => a.slug);

export const techCats = ['SEO', 'Performance', 'Security', 'AI', 'Learning', 'Engineering', 'Cloud'] as const;
