import type { Block, FAQ } from './types';

export type TechCat = 'SEO' | 'Performance' | 'Security' | 'AI' | 'Learning' | 'Engineering' | 'Cloud';

/**
 * Same block model as the gaming articles, but `targets` holds CodeAiMan target
 * keys instead of gaming brand keys, so the closing rail links out to the right
 * places.
 */
export interface TechArticle {
  slug: string;
  title: string;
  h1: string;
  description: string;
  excerpt: string;
  date: string;
  cat: TechCat;
  readTime: string;
  keywords: string[];
  blocks: Block[];
  faqs: FAQ[];
  /** CodeAiMan target keys featured in this article. */
  targets: string[];
}
