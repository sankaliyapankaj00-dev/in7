import Link from 'next/link';
import { Calendar, Clock, ArrowRight } from 'lucide-react';
import type { Article } from '@/content/types';
import { getBrands } from '@/content/brands';
import FAQSection from '@/components/FAQSection';
import Blocks, { tocFrom } from './Blocks';
import BrandCard from './BrandCard';

function formatDate(iso: string): string {
  return new Date(iso).toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric' });
}

export default function ArticleView({ article }: { article: Article }) {
  const toc = tocFrom(article.blocks);
  const featured = getBrands(article.featured);

  return (
    <article style={{ maxWidth: '820px', margin: '0 auto', padding: '0 16px 40px' }}>
      <header style={{ paddingTop: '28px', marginBottom: '28px' }}>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '14px' }}>
          <span className="post-tag">{article.category}</span>
        </div>

        <h1 style={{ fontSize: 'clamp(1.6rem, 6vw, 2.5rem)', fontWeight: 900, lineHeight: 1.16, marginBottom: '14px' }}>
          {article.h1}
        </h1>

        <p style={{ color: 'rgba(255,255,255,0.62)', fontSize: '1.02rem', lineHeight: 1.7, marginBottom: '16px' }}>
          {article.excerpt}
        </p>

        <div className="post-meta">
          <span style={{ display: 'inline-flex', alignItems: 'center', gap: '5px' }}>
            <Calendar size={12} /> {formatDate(article.date)}
          </span>
          <span>·</span>
          <span style={{ display: 'inline-flex', alignItems: 'center', gap: '5px' }}>
            <Clock size={12} /> {article.readTime} read
          </span>
        </div>
      </header>

      {toc.length > 2 && (
        <nav className="toc" aria-label="On this page">
          <h2>On this page</h2>
          <ol>
            {toc.map((t) => (
              <li key={t.id}>
                <a href={`#${t.id}`}>{t.text}</a>
              </li>
            ))}
          </ol>
        </nav>
      )}

      <Blocks blocks={article.blocks} />

      <h2 className="prose-h2" id="faqs">
        Frequently asked questions
      </h2>
      <FAQSection faqs={article.faqs} />

      <h2 className="prose-h2" id="platforms">
        Every platform mentioned in this article
      </h2>
      <p className="prose-p">
        Each card links to our full review and to the platform&apos;s own official site. Full comparison table on the{' '}
        <Link href="/gaming-apps" className="content-link">gaming apps directory</Link>.
      </p>
      <div className="prose-apps-grid" style={{ marginBottom: '28px' }}>
        {featured.map((b) => (
          <BrandCard key={b.key} brand={b} compact />
        ))}
      </div>

      <div className="prose-cta">
        <p>
          More comparisons, install guides and platform reviews are collected on the{' '}
          <Link href="/blog" className="content-link">IN7 blog index</Link>.
        </p>
        <Link href="/blog" className="btn-gold">
          Browse all articles <ArrowRight size={14} strokeWidth={2.5} />
        </Link>
      </div>

      <p style={{ color: 'rgba(255,255,255,0.35)', fontSize: '0.72rem', lineHeight: 1.7, textAlign: 'center', marginTop: '10px' }}>
        18+ only. Real-money gaming is restricted or prohibited in several Indian states and under the Promotion and
        Regulation of Online Gaming Act, 2025. Check what applies where you live before installing anything.
      </p>
    </article>
  );
}
