import type { Tool, ToolCat } from './tool-types';
import { tools1 } from './tools-1';
import { tools2 } from './tools-2';

export const tools: Tool[] = [...tools1, ...tools2];

export const toolBySlug: Record<string, Tool> = Object.fromEntries(tools.map((t) => [t.slug, t]));

export function getTool(slug: string): Tool {
  const t = toolBySlug[slug];
  if (!t) throw new Error(`Unknown tool: ${slug}`);
  return t;
}

/** Related-tool lookups skip anything not yet written, so batches can land independently. */
export function getTools(slugs: string[]): Tool[] {
  return slugs.map((s) => toolBySlug[s]).filter((t): t is Tool => Boolean(t));
}

export const toolCats: { cat: ToolCat; blurb: string }[] = [
  { cat: 'PDF', blurb: 'Merge, split, compress and convert documents without installing anything.' },
  { cat: 'Image', blurb: 'Compress, resize, crop and convert. The highest-leverage tools on this list.' },
  { cat: 'Video', blurb: 'Compress, trim and convert clips, plus pulling audio out of them.' },
  { cat: 'Audio', blurb: 'Convert, trim and join audio files.' },
  { cat: 'Text', blurb: 'Counting, case conversion and cleanup for text you are about to paste somewhere.' },
  { cat: 'Developer', blurb: 'Formatters, encoders, hashes and generators for everyday development work.' },
];

export function toolsByCat(cat: ToolCat): Tool[] {
  return tools.filter((t) => t.cat === cat);
}

export const allToolSlugs: string[] = tools.map((t) => t.slug);
