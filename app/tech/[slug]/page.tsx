import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { allTechSlugs, techBySlug } from '@/content/tech';
import TechView from '@/components/tech/TechView';

const BASE = 'https://www.in7co.in';

export function generateStaticParams() {
  return allTechSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const a = techBySlug[slug];
  if (!a) return {};
  const url = `${BASE}/tech/${slug}`;
  return {
    title: a.title,
    description: a.description,
    keywords: a.keywords,
    alternates: { canonical: url },
    openGraph: {
      title: a.title,
      description: a.description,
      url,
      type: 'article',
      publishedTime: a.date,
      images: [{ url: '/in7-game-banner.jpeg' }],
    },
  };
}

export default async function TechPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const a = techBySlug[slug];
  if (!a) notFound();

  const url = `${BASE}/tech/${slug}`;

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: BASE },
      { '@type': 'ListItem', position: 2, name: 'Tech', item: `${BASE}/tech` },
      { '@type': 'ListItem', position: 3, name: a.h1, item: url },
    ],
  };

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: a.h1,
    description: a.description,
    datePublished: a.date,
    dateModified: a.date,
    articleSection: a.cat,
    mainEntityOfPage: { '@type': 'WebPage', '@id': url },
    author: { '@type': 'Organization', name: 'IN7', url: BASE },
    publisher: {
      '@type': 'Organization',
      name: 'IN7',
      url: BASE,
      logo: { '@type': 'ImageObject', url: `${BASE}/in7-game-logo.jpg` },
    },
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: a.faqs.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <nav style={{ maxWidth: '820px', margin: '0 auto', padding: '14px 16px 0', fontSize: '0.8rem', color: 'rgba(255,255,255,0.42)' }}>
        <Link href="/" className="content-link" style={{ borderBottom: 'none' }}>Home</Link>
        <span style={{ margin: '0 8px' }}>›</span>
        <Link href="/tech" className="content-link" style={{ borderBottom: 'none' }}>Tech</Link>
      </nav>

      <TechView article={a} />
    </>
  );
}
