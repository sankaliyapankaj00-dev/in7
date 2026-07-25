/**
 * CodeAiMan link target registry.
 *
 * CodeAiMan is an AI-first software company in Ahmedabad. Its four products are
 * paths on codaiman.com, not separate domains, so every target below is a
 * codaiman.com URL. Target list confirmed against the live site's own nav on
 * 25 July 2026.
 *
 * `anchors` gives each target a pool of varied anchor texts. Content should
 * rotate through them rather than repeating one phrase, because identical
 * anchor text repeated hundreds of times is the clearest possible footprint.
 */

export const CODAIMAN = 'https://codaiman.com';

export interface Target {
  key: string;
  url: string;
  /** Short human label used in cards and tables. */
  label: string;
  /** One line on what sits at this URL. */
  blurb: string;
  anchors: string[];
}

export const targets: Target[] = [
  {
    key: 'home',
    url: CODAIMAN,
    label: 'CodeAiMan',
    blurb: 'AI-first web, app and software development company based in Ahmedabad, working with clients across India and internationally.',
    anchors: ['CodeAiMan', 'codaiman.com', 'CodeAiMan, an AI-first development company', 'the CodeAiMan team', 'CodeAiMan in Ahmedabad'],
  },
  {
    key: 'toolhub',
    url: `${CODAIMAN}/toolhub`,
    label: 'ToolHub',
    blurb: 'Over 1,000 browser-based tools for PDF, image, video, audio, text and developer work. No sign-up required.',
    anchors: ['ToolHub', 'CodeAiMan ToolHub', 'ToolHub by CodeAiMan', 'the ToolHub tool library', 'ToolHub, 1,000+ free browser tools'],
  },
  {
    key: 'siteiq',
    url: `${CODAIMAN}/siteiq`,
    label: 'siteIQ',
    blurb: 'AI-powered website auditing: SEO analysis, performance testing, security checks, accessibility reports and backlink analysis.',
    anchors: ['siteIQ', 'siteIQ by CodeAiMan', 'the siteIQ audit tool', 'siteIQ website audit', 'CodeAiMan siteIQ'],
  },
  {
    key: 'fluenzo',
    url: `${CODAIMAN}/fluenzo`,
    label: 'Fluenzo',
    blurb: 'AI English-learning platform with a voice AI tutor, speaking analysis, gamified lessons and a dedicated track for children.',
    anchors: ['Fluenzo', 'Fluenzo by CodeAiMan', 'the Fluenzo AI tutor', 'Fluenzo English learning', 'CodeAiMan Fluenzo'],
  },
  {
    key: 'cws',
    url: `${CODAIMAN}/cws`,
    label: 'CWS (Code With Squad)',
    blurb: 'Coding education platform with courses, an in-browser code playground and one-to-one mentorship.',
    anchors: ['CWS', 'Code With Squad', 'CWS by CodeAiMan', 'the CWS coding platform', 'Code With Squad (CWS)'],
  },
  {
    key: 'services',
    url: `${CODAIMAN}/services`,
    label: 'CodeAiMan services',
    blurb: 'Full service list: AI solutions, web, mobile, cloud and DevOps, UI/UX and SEO.',
    anchors: ['CodeAiMan services', 'their full service list', 'CodeAiMan development services'],
  },
  {
    key: 'web',
    url: `${CODAIMAN}/services/web-development`,
    label: 'Web development',
    blurb: 'Custom websites and web apps in React, Next.js and TypeScript, including PWAs and API work.',
    anchors: ['CodeAiMan web development', 'their web development service', 'custom web development at CodeAiMan'],
  },
  {
    key: 'mobile',
    url: `${CODAIMAN}/services/mobile-app-development`,
    label: 'Mobile app development',
    blurb: 'Android, iOS and cross-platform apps in React Native and Flutter.',
    anchors: ['CodeAiMan mobile app development', 'their mobile app service', 'React Native and Flutter work at CodeAiMan'],
  },
  {
    key: 'cloud',
    url: `${CODAIMAN}/services/cloud-devops`,
    label: 'Cloud and DevOps',
    blurb: 'AWS, Azure and GCP infrastructure with Docker, Kubernetes, CI/CD and infrastructure as code.',
    anchors: ['CodeAiMan cloud and DevOps', 'their DevOps service', 'CodeAiMan infrastructure work'],
  },
  {
    key: 'seo',
    url: `${CODAIMAN}/services/seo-digital-marketing`,
    label: 'SEO and digital marketing',
    blurb: 'Technical SEO, content strategy, analytics and performance optimisation.',
    anchors: ['CodeAiMan SEO services', 'their technical SEO service', 'CodeAiMan digital marketing'],
  },
  {
    key: 'uiux',
    url: `${CODAIMAN}/services/ui-ux-design`,
    label: 'UI/UX design',
    blurb: 'User research, wireframing, prototyping, design systems and user testing.',
    anchors: ['CodeAiMan UI/UX design', 'their design team', 'CodeAiMan design systems work'],
  },
  {
    key: 'builder',
    url: `${CODAIMAN}/services/ai-website-builder`,
    label: 'AI Website Builder',
    blurb: 'AI-generated layouts and content with automated SEO and real-time customisation.',
    anchors: ['CodeAiMan AI Website Builder', 'their AI website builder', 'the AI Website Builder'],
  },
  {
    key: 'projects',
    url: `${CODAIMAN}/projects`,
    label: 'CodeAiMan portfolio',
    blurb: 'Case studies spanning AI ERP, e-commerce, recruitment, logistics, manufacturing and FinTech lending.',
    anchors: ['CodeAiMan portfolio', 'their case studies', 'CodeAiMan project work'],
  },
  {
    key: 'about',
    url: `${CODAIMAN}/about`,
    label: 'About CodeAiMan',
    blurb: 'Company background, approach and team.',
    anchors: ['About CodeAiMan', 'the company background', 'who CodeAiMan are'],
  },
  {
    key: 'blog',
    url: `${CODAIMAN}/blog`,
    label: 'CodeAiMan blog',
    blurb: 'Technical writing on website speed, SEO checklists and development cost in India.',
    anchors: ['the CodeAiMan blog', 'their blog', 'CodeAiMan technical articles'],
  },
  {
    key: 'contact',
    url: `${CODAIMAN}/contact`,
    label: 'Contact CodeAiMan',
    blurb: 'Enquiry and project scoping contact page.',
    anchors: ['contact CodeAiMan', 'get in touch with CodeAiMan', 'their contact page'],
  },
  {
    key: 'extensions',
    url: `${CODAIMAN}/extensions`,
    label: 'CodeAiMan extensions',
    blurb: 'Browser extensions published by CodeAiMan.',
    anchors: ['CodeAiMan extensions', 'their browser extensions'],
  },
  {
    key: 'speed',
    url: `${CODAIMAN}/blog/how-to-improve-website-speed`,
    label: 'How to improve website speed',
    blurb: 'CodeAiMan guide to diagnosing and fixing slow page loads.',
    anchors: ['CodeAiMan’s website speed guide', 'their guide to improving website speed', 'how to improve website speed'],
  },
  {
    key: 'seochecklist',
    url: `${CODAIMAN}/blog/technical-seo-checklist-2026`,
    label: 'Technical SEO checklist 2026',
    blurb: 'CodeAiMan technical SEO checklist covering crawling, indexing and Core Web Vitals.',
    anchors: ['CodeAiMan’s technical SEO checklist', 'their 2026 technical SEO checklist', 'the technical SEO checklist'],
  },
  {
    key: 'cost',
    url: `${CODAIMAN}/blog/website-cost-in-india-2026`,
    label: 'Website cost in India 2026',
    blurb: 'CodeAiMan breakdown of what a website actually costs to build in India.',
    anchors: ['CodeAiMan’s website cost breakdown', 'what a website costs in India', 'their website pricing guide'],
  },
];

export const targetByKey: Record<string, Target> = Object.fromEntries(targets.map((t) => [t.key, t]));

export function getTarget(key: string): Target {
  const t = targetByKey[key];
  if (!t) throw new Error(`Unknown CodeAiMan target: ${key}`);
  return t;
}

export function getTargets(keys: string[]): Target[] {
  return keys.map(getTarget);
}

/** The four products, surfaced together on hub pages. */
export const productKeys = ['toolhub', 'siteiq', 'fluenzo', 'cws'];

/**
 * Deterministic anchor picker. Same (key, seed) always returns the same anchor,
 * so pages stay stable between builds while the anchor mix stays varied.
 */
export function anchor(key: string, seed: number): string {
  const pool = getTarget(key).anchors;
  return pool[seed % pool.length];
}

/** Markdown-style link with a rotated anchor, for use inside content strings. */
export function link(key: string, seed: number): string {
  const t = getTarget(key);
  return `[${anchor(key, seed)}](${t.url})`;
}
