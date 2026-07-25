import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { allToolSlugs, toolBySlug } from '@/content/tools';
import { getTarget } from '@/content/codaiman';
import ToolView from '@/components/tools/ToolView';

const BASE = 'https://www.in7co.in';

export function generateStaticParams() {
  return allToolSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const tool = toolBySlug[slug];
  if (!tool) return {};
  const url = `${BASE}/tools/${slug}`;
  return {
    title: tool.title,
    description: tool.description,
    keywords: tool.keywords,
    alternates: { canonical: url },
    openGraph: {
      title: tool.title,
      description: tool.description,
      url,
      type: 'article',
      images: [{ url: '/in7-game-banner.jpeg' }],
    },
  };
}

export default async function ToolPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const tool = toolBySlug[slug];
  if (!tool) notFound();

  const url = `${BASE}/tools/${slug}`;
  const toolhub = getTarget('toolhub');

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: BASE },
      { '@type': 'ListItem', position: 2, name: 'Tools', item: `${BASE}/tools` },
      { '@type': 'ListItem', position: 3, name: tool.name, item: url },
    ],
  };

  const howToSchema = {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: tool.h1,
    description: tool.description,
    step: tool.steps.map((s, i) => ({
      '@type': 'HowToStep',
      position: i + 1,
      // strip the inline link markup for the structured data copy
      text: s.replace(/\[([^\]]+)\]\([^)]+\)/g, '$1').replace(/\*\*/g, ''),
    })),
    tool: { '@type': 'HowToTool', name: toolhub.label },
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: tool.problems.map((p) => ({
      '@type': 'Question',
      name: p.q,
      acceptedAnswer: { '@type': 'Answer', text: p.a },
    })),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <nav style={{ maxWidth: '820px', margin: '0 auto', padding: '14px 16px 0', fontSize: '0.8rem', color: 'rgba(255,255,255,0.42)' }}>
        <Link href="/" className="content-link" style={{ borderBottom: 'none' }}>Home</Link>
        <span style={{ margin: '0 8px' }}>›</span>
        <Link href="/tools" className="content-link" style={{ borderBottom: 'none' }}>Tools</Link>
        <span style={{ margin: '0 8px' }}>›</span>
        <span style={{ color: '#e63946' }}>{tool.name}</span>
      </nav>

      <ToolView tool={tool} />
    </>
  );
}
