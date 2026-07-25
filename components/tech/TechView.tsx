import Link from 'next/link';
import { Calendar, Clock, ArrowRight } from 'lucide-react';
import type { TechArticle } from '@/content/tech-types';
import FAQSection from '@/components/FAQSection';
import Blocks, { tocFrom } from '@/components/blog/Blocks';

function formatDate(iso: string): string {
  return new Date(iso).toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric' });
}

export default function TechView({ article }: { article: TechArticle }) {
  const toc = tocFrom(article.blocks);

  return (
    <article style={{ maxWidth: '820px', margin: '0 auto', padding: '0 16px 40px' }}>
      <header style={{ paddingTop: '26px', marginBottom: '26px' }}>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '14px' }}>
          <span className="post-tag">{article.cat}</span>
        </div>

        <h1 style={{ fontSize: 'clamp(1.55rem, 5.6vw, 2.4rem)', fontWeight: 900, lineHeight: 1.16, marginBottom: '14px' }}>
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

      <div className="prose-cta">
        <p>
          More guides on performance, SEO, AI and engineering are on the{' '}
          <Link href="/tech" className="content-link">tech blog index</Link>, and the{' '}
          <Link href="/tools" className="content-link">free tools section</Link> covers the browser utilities that come
          up in this work.
        </p>
        <Link href="/tech" className="btn-gold">
          All tech articles <ArrowRight size={14} strokeWidth={2.5} />
        </Link>
      </div>
    </article>
  );
}
