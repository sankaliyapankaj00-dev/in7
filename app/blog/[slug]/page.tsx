import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { allBlogSlugs, getEntry } from '@/content/routes';
import ArticleView from '@/components/blog/ArticleView';
import ReviewView from '@/components/blog/ReviewView';

const BASE = 'https://www.in7co.in';

export function generateStaticParams() {
  return allBlogSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const entry = getEntry(slug);
  if (!entry) return {};

  const url = `${BASE}/blog/${slug}`;

  if (entry.kind === 'article') {
    const a = entry.article;
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

  const b = entry.brand;
  const title = `${b.name} Review 2026 – ${b.bonus}, ${b.apkSize} APK | ${b.domain}`;
  const description = `${b.name} review: ${b.tagline} Welcome offer ${b.bonus}, ${b.apkSize} download, payouts via ${b.payout}. Official site ${b.domain}.`;
  return {
    title,
    description,
    keywords: [
      b.name.toLowerCase(),
      `${b.name.toLowerCase()} review`,
      `${b.name.toLowerCase()} apk`,
      `${b.name.toLowerCase()} download`,
      b.domain,
      ...b.categories.map((c) => c.toLowerCase()),
    ],
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      type: 'article',
      images: [{ url: '/in7-game-banner.jpeg' }],
    },
  };
}

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const entry = getEntry(slug);
  if (!entry) notFound();

  const url = `${BASE}/blog/${slug}`;
  const heading = entry.kind === 'article' ? entry.article.h1 : `${entry.brand.name} review 2026`;
  const faqs = entry.kind === 'article' ? entry.article.faqs : entry.brand.faqs;
  const description =
    entry.kind === 'article' ? entry.article.description : entry.brand.tagline;

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: BASE },
      { '@type': 'ListItem', position: 2, name: 'Blog', item: `${BASE}/blog` },
      { '@type': 'ListItem', position: 3, name: heading, item: url },
    ],
  };

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': entry.kind === 'review' ? 'Review' : 'Article',
    headline: heading,
    description,
    datePublished: entry.date,
    dateModified: entry.date,
    mainEntityOfPage: { '@type': 'WebPage', '@id': url },
    author: { '@type': 'Organization', name: 'IN7 Game', url: BASE },
    publisher: {
      '@type': 'Organization',
      name: 'IN7 Game',
      url: BASE,
      logo: { '@type': 'ImageObject', url: `${BASE}/in7-game-logo.jpg` },
    },
    ...(entry.kind === 'review'
      ? {
          itemReviewed: {
            '@type': 'SoftwareApplication',
            name: entry.brand.name,
            applicationCategory: 'GameApplication',
            operatingSystem: entry.brand.android,
            url: entry.brand.url,
          },
        }
      : {}),
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((f) => ({
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

      <nav
        style={{ maxWidth: '820px', margin: '0 auto', padding: '14px 16px 0', fontSize: '0.8rem', color: 'rgba(255,255,255,0.42)' }}
      >
        <Link href="/" className="content-link" style={{ borderBottom: 'none' }}>Home</Link>
        <span style={{ margin: '0 8px' }}>›</span>
        <Link href="/blog" className="content-link" style={{ borderBottom: 'none' }}>Blog</Link>
      </nav>

      {entry.kind === 'article' ? (
        <ArticleView article={entry.article} />
      ) : (
        <ReviewView brand={entry.brand} />
      )}
    </>
  );
}
