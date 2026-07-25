import type { Metadata } from 'next';
import Link from 'next/link';
import { Calendar, Clock, ArrowRight, ExternalLink } from 'lucide-react';
import { blogFeed } from '@/content/routes';
import { articles } from '@/content/articles';
import { brands, partnerBrands } from '@/content/brands';

const BASE = 'https://www.in7co.in';

export const metadata: Metadata = {
  title: 'IN7 Blog – Gaming App Reviews, Guides & Comparisons (2026)',
  description:
    'Honest reviews and guides for Indian gaming apps: signup bonuses, APK install help, UPI withdrawals, KYC problems and platform comparisons. Updated 2026.',
  keywords: [
    'gaming app reviews india',
    'game apk guide',
    'paise kamane wala game',
    'signup bonus comparison',
    'upi withdrawal gaming app',
  ],
  alternates: { canonical: `${BASE}/blog` },
  openGraph: {
    title: 'IN7 Blog – Gaming App Reviews, Guides & Comparisons',
    description:
      'Honest reviews and guides for Indian gaming apps: bonuses, APK installs, UPI withdrawals and platform comparisons.',
    url: `${BASE}/blog`,
    images: [{ url: '/in7-game-banner.jpeg' }],
  },
};

function formatDate(iso: string): string {
  return new Date(iso).toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' });
}

export default function BlogIndex() {
  const guides = articles;
  const reviews = brands;

  const listSchema = {
    '@context': 'https://schema.org',
    '@type': 'Blog',
    name: 'IN7 Blog',
    url: `${BASE}/blog`,
    description:
      'Reviews, comparisons and install guides for Indian gaming apps, covering bonuses, withdrawals, KYC and app safety.',
    blogPost: blogFeed.slice(0, 20).map((e) => ({
      '@type': 'BlogPosting',
      headline: e.kind === 'article' ? e.article.h1 : `${e.brand.name} review 2026`,
      url: `${BASE}/blog/${e.slug}`,
      datePublished: e.date,
    })),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(listSchema) }} />

      {/* Hero */}
      <section style={{ background: 'linear-gradient(135deg, #0a0a0f 0%, #12060a 60%, #0a0a0f 100%)', borderBottom: '1px solid rgba(230,57,70,0.12)' }}>
        <div style={{ maxWidth: '1080px', margin: '0 auto', padding: '48px 16px 40px' }}>
          <nav style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.42)', marginBottom: '18px' }}>
            <Link href="/" className="content-link" style={{ borderBottom: 'none' }}>Home</Link>
            <span style={{ margin: '0 8px' }}>›</span>
            <span style={{ color: '#e63946' }}>Blog</span>
          </nav>

          <h1 style={{ fontSize: 'clamp(1.8rem, 6vw, 2.9rem)', fontWeight: 900, lineHeight: 1.14, marginBottom: '16px' }}>
            Reviews and guides for <span style={{ color: '#e63946' }}>Indian gaming apps</span>
          </h1>

          <p style={{ color: 'rgba(255,255,255,0.62)', fontSize: '1.05rem', lineHeight: 1.72, maxWidth: '640px' }}>
            {guides.length} guides and {reviews.length} platform reviews, written from actual use rather than press
            copy. Bonus comparisons with the playthrough conditions attached, APK install help that covers the failure
            states, and a straight look at how withdrawals really work.
          </p>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', marginTop: '24px' }}>
            <Link href="/gaming-apps" className="btn-gold">
              Browse all {reviews.length} platforms <ArrowRight size={14} strokeWidth={2.5} />
            </Link>
            <Link href="/blog/paise-kamane-wale-game-list-2026" className="btn-outline" style={{ fontSize: '0.85rem', padding: '10px 18px' }}>
              Paise kamane wale game list
            </Link>
          </div>
        </div>
      </section>

      {/* Guides */}
      <section style={{ maxWidth: '1080px', margin: '0 auto', padding: '44px 16px 0' }}>
        <h2 className="section-h2" style={{ fontWeight: 900, marginBottom: '6px' }}>
          Guides and <span style={{ color: '#e63946' }}>comparisons</span>
        </h2>
        <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.92rem', marginBottom: '24px' }}>
          The stuff that applies across every platform: bonuses, installs, payments, safety and limits.
        </p>

        <div className="dir-grid">
          {guides.map((a) => (
            <Link key={a.slug} href={`/blog/${a.slug}`} className="post-card">
              <div className="post-meta">
                <span className="post-tag">{a.category}</span>
                <span style={{ display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
                  <Calendar size={11} /> {formatDate(a.date)}
                </span>
                <span style={{ display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
                  <Clock size={11} /> {a.readTime}
                </span>
              </div>
              <h3>{a.h1}</h3>
              <p>{a.excerpt}</p>
              <span style={{ display: 'inline-flex', alignItems: 'center', gap: '5px', fontSize: '0.78rem', fontWeight: 700, color: '#ff6b74' }}>
                Read guide <ArrowRight size={12} />
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* Reviews */}
      <section style={{ maxWidth: '1080px', margin: '0 auto', padding: '48px 16px 0' }}>
        <h2 className="section-h2" style={{ fontWeight: 900, marginBottom: '6px' }}>
          Platform <span style={{ color: '#e63946' }}>reviews</span>
        </h2>
        <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.92rem', marginBottom: '24px' }}>
          One review per platform, each with the spec table, the download steps and an honest pros and cons list.
        </p>

        <div className="dir-grid">
          {reviews.map((b) => (
            <Link key={b.key} href={`/blog/${b.slug}`} className="post-card">
              <div className="post-meta">
                <span className="post-tag">Review</span>
                <span style={{ color: b.live ? '#22c55e' : 'rgba(255,255,255,0.4)' }}>
                  {b.live ? 'Site live' : 'Rolling out'}
                </span>
              </div>
              <h3>{b.name} review 2026</h3>
              <p>{b.tagline}</p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                <span className="brand-chip">{b.bonus}</span>
                <span className="brand-chip">{b.apkSize}</span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Official domain index — plain, scannable, one row per platform */}
      <section style={{ maxWidth: '1080px', margin: '0 auto', padding: '48px 16px 0' }}>
        <h2 className="section-h2" style={{ fontWeight: 900, marginBottom: '6px' }}>
          Official <span style={{ color: '#e63946' }}>sites index</span>
        </h2>
        <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.92rem', marginBottom: '20px' }}>
          Every platform reviewed above, with its official domain. Lookalike sites are the biggest risk in this
          category, so this list exists to let you check an address against the real one before you download anything.
        </p>

        <div className="prose-table-wrap" style={{ margin: 0 }}>
          <table className="prose-table">
            <thead>
              <tr>
                <th>Platform</th>
                <th>Official site</th>
                <th>Focus</th>
                <th>Our review</th>
              </tr>
            </thead>
            <tbody>
              {partnerBrands.map((b) => (
                <tr key={b.key}>
                  <td style={{ fontWeight: 700, color: 'rgba(255,255,255,0.9)', whiteSpace: 'nowrap' }}>{b.name}</td>
                  <td>
                    <a href={b.url} target="_blank" rel="noopener" className="content-link content-link-ext" style={{ whiteSpace: 'nowrap' }}>
                      {b.domain} <ExternalLink size={10} style={{ display: 'inline', verticalAlign: 'baseline' }} />
                    </a>
                  </td>
                  <td>{b.categories.slice(0, 3).join(', ')}</td>
                  <td>
                    <Link href={`/blog/${b.slug}`} className="content-link" style={{ whiteSpace: 'nowrap' }}>
                      Read
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section style={{ maxWidth: '1080px', margin: '0 auto', padding: '36px 16px 48px' }}>
        <div className="prose-cta">
          <p>
            Looking for a side-by-side comparison instead of individual reviews? The{' '}
            <Link href="/gaming-apps" className="content-link">gaming apps directory</Link> puts every platform in one
            table, grouped by what they actually do: card games, slots and arcade, prediction formats, multi-category
            wallets, and install references.
          </p>
          <Link href="/gaming-apps" className="btn-gold">
            Open the directory <ArrowRight size={14} strokeWidth={2.5} />
          </Link>
        </div>
        <p style={{ color: 'rgba(255,255,255,0.35)', fontSize: '0.72rem', lineHeight: 1.7, textAlign: 'center' }}>
          18+ only. Real-money gaming is restricted or prohibited in several Indian states and under the Promotion and
          Regulation of Online Gaming Act, 2025. Check what applies where you live before installing anything.
        </p>
      </section>
    </>
  );
}
