/**
 * Shared content types for the IN7 blog + partner network directory.
 *
 * Inline text in every `string` field below supports a tiny markup subset that
 * `components/blog/RichText.tsx` renders:
 *   **bold**            → <strong>
 *   [label](https://…)  → external <a> (new tab)
 *   [label](/path)      → internal <Link>
 *   ₹, ·, etc. pass through untouched.
 */

export type Block =
  | { t: 'p'; text: string }
  | { t: 'h2'; text: string; id?: string }
  | { t: 'h3'; text: string }
  | { t: 'ul'; items: string[] }
  | { t: 'ol'; items: string[] }
  | { t: 'table'; head: string[]; rows: string[][] }
  | { t: 'note'; kind: 'info' | 'warn' | 'ok'; text: string }
  | { t: 'quote'; text: string; by?: string }
  | { t: 'apps'; keys: string[]; title?: string }
  | { t: 'cta'; key: string; text: string };

export interface FAQ {
  q: string;
  a: string;
}

export interface Brand {
  /** short stable id used for cross-references */
  key: string;
  /** review page slug → /blog/<slug> */
  slug: string;
  /** display name, e.g. "XX7 Game" */
  name: string;
  /** bare hostname, e.g. "xx7game.com" */
  domain: string;
  /** full https URL with no trailing slash */
  url: string;
  /** whether the site was reachable when this page was last reviewed */
  live: boolean;
  /** one-line positioning used on cards and in listings */
  tagline: string;
  /** short hindi/hinglish blurb for card grids */
  blurbHi: string;
  bonus: string;
  apkSize: string;
  version: string;
  android: string;
  payout: string;
  /** primary game categories carried by the app */
  categories: string[];
  /** the single thing this platform is genuinely known for */
  usp: string;
  /** 3 unique opening paragraphs for the review page */
  intro: string[];
  features: { title: string; desc: string }[];
  steps: string[];
  pros: string[];
  cons: string[];
  faqs: FAQ[];
  /** keys of 4 sibling brands shown as alternatives */
  alternatives: string[];
  /** varied anchor texts used when this brand is linked from articles */
  anchors: string[];
}

export interface Article {
  slug: string;
  title: string;
  h1: string;
  description: string;
  /** short teaser for the blog index card */
  excerpt: string;
  /** ISO date */
  date: string;
  updated?: string;
  category: 'Guide' | 'Roundup' | 'Comparison' | 'Safety' | 'Payments' | 'Hindi';
  readTime: string;
  keywords: string[];
  blocks: Block[];
  faqs: FAQ[];
  /** brand keys featured in this article (used for the related-apps rail) */
  featured: string[];
}
