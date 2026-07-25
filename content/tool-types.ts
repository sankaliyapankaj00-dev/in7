/** Category buckets, matching how ToolHub groups its library. */
export type ToolCat = 'PDF' | 'Image' | 'Video' | 'Audio' | 'Text' | 'Developer';

export interface Tool {
  slug: string;
  name: string;
  cat: ToolCat;
  /** Page <title>. */
  title: string;
  h1: string;
  description: string;
  /** Card teaser on the index. */
  excerpt: string;
  /** 2 paragraphs of genuinely useful explanation. Supports inline markup. */
  what: string[];
  /** Numbered how-to. Supports inline markup. */
  steps: string[];
  /** Format, limit and compatibility facts as label/value pairs. */
  specs: [string, string][];
  /** Real problems people hit, answered. */
  problems: { q: string; a: string }[];
  tips: string[];
  /** Slugs of 3 related tool pages. */
  related: string[];
  /**
   * A secondary CodeAiMan target key for this page's contextual link, on top of
   * the ToolHub links every page carries. Spreads links across the whole site
   * instead of pointing everything at one URL.
   */
  target: string;
  keywords: string[];
}
