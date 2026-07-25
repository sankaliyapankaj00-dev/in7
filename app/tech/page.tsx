import type { Metadata } from 'next';
import Link from 'next/link';
import { Calendar, Clock, ArrowRight, ExternalLink } from 'lucide-react';
import { techArticles, techCats } from '@/content/tech';
import { getTargets, productKeys, targets as allTargets, link } from '@/content/codaiman';
import RichText from '@/components/blog/RichText';

const BASE = 'https://www.in7co.in';

export const metadata: Metadata = {
  title: 'Tech Blog – SEO, Performance, AI, Cloud & Learning Guides (2026)',
  description:
    'Practical guides on website audits, Core Web Vitals, technical SEO, security, AI chatbots, cloud hosting and learning to code. Written for people who ship.',
  keywords: [
    'website audit guide',
    'core web vitals',
    'technical seo',
    'ai chatbot business',
    'learn to code roadmap',
    'cloud hosting india',
  ],
  alternates: { canonical: `${BASE}/tech` },
  openGraph: {
    title: 'Tech Blog – SEO, Performance, AI, Cloud & Learning Guides',
    description:
      'Guides on website audits, Core Web Vitals, technical SEO, security, AI chatbots, cloud hosting and learning to code.',
    url: `${BASE}/tech`,
    images: [{ url: '/in7-game-banner.jpeg' }],
  },
};

function formatDate(iso: string): string {
  return new Date(iso).toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' });
}

export default function TechIndex() {
  const products = getTargets(productKeys);
  const serviceTargets = getTargets(['web', 'mobile', 'cloud', 'uiux', 'seo', 'builder']);

  const blogSchema = {
    '@context': 'https://schema.org',
    '@type': 'Blog',
    name: 'IN7 Tech Blog',
    url: `${BASE}/tech`,
    description:
      'Guides on website auditing, performance, technical SEO, security, AI implementation, cloud infrastructure and learning to code.',
    blogPost: techArticles.map((a) => ({
      '@type': 'BlogPosting',
      headline: a.h1,
      url: `${BASE}/tech/${a.slug}`,
      datePublished: a.date,
    })),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(blogSchema) }} />

      <section style={{ background: 'linear-gradient(135deg, #0a0a0f 0%, #12060a 60%, #0a0a0f 100%)', borderBottom: '1px solid rgba(230,57,70,0.12)' }}>
        <div style={{ maxWidth: '1080px', margin: '0 auto', padding: '48px 16px 40px' }}>
          <nav style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.42)', marginBottom: '18px' }}>
            <Link href="/" className="content-link" style={{ borderBottom: 'none' }}>Home</Link>
            <span style={{ margin: '0 8px' }}>›</span>
            <span style={{ color: '#e63946' }}>Tech</span>
          </nav>

          <h1 style={{ fontSize: 'clamp(1.8rem, 6vw, 2.9rem)', fontWeight: 900, lineHeight: 1.14, marginBottom: '16px' }}>
            Guides for people who <span style={{ color: '#e63946' }}>actually ship things</span>
          </h1>

          <p style={{ color: 'rgba(255,255,255,0.62)', fontSize: '1.05rem', lineHeight: 1.72, maxWidth: '680px' }}>
            {techArticles.length} articles on website auditing, Core Web Vitals, technical SEO, security, accessibility,
            AI implementation, cloud infrastructure and learning to code. Specific fixes and honest limits, not listicles.
          </p>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', marginTop: '24px' }}>
            <Link href="/tools" className="btn-gold">
              Free online tools <ArrowRight size={14} strokeWidth={2.5} />
            </Link>
          </div>
        </div>
      </section>

      {/* Articles by category */}
      {techCats.map((cat) => {
        const list = techArticles.filter((a) => a.cat === cat);
        if (list.length === 0) return null;
        return (
          <section key={cat} style={{ maxWidth: '1080px', margin: '0 auto', padding: '40px 16px 0' }}>
            <h2 className="section-h2" style={{ fontWeight: 900, marginBottom: '20px' }}>
              <span style={{ color: '#e63946' }}>{cat}</span>
            </h2>
            <div className="dir-grid">
              {list.map((a) => (
                <Link key={a.slug} href={`/tech/${a.slug}`} className="post-card">
                  <div className="post-meta">
                    <span className="post-tag">{a.cat}</span>
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
                    Read <ArrowRight size={12} />
                  </span>
                </Link>
              ))}
            </div>
          </section>
        );
      })}

      {/* Tools referenced across these guides */}
      <section style={{ maxWidth: '1080px', margin: '0 auto', padding: '48px 16px 0' }}>
        <h2 className="section-h2" style={{ fontWeight: 900, marginBottom: '6px' }}>
          Products referenced <span style={{ color: '#e63946' }}>across these guides</span>
        </h2>
        <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.92rem', marginBottom: '20px' }}>
          Four products from <RichText text={link('home', 3)} />, the AI-first development company in Ahmedabad that
          builds and maintains this site.
        </p>
        <div className="dir-grid">
          {products.map((p) => (
            <div key={p.key} className="glass rounded-xl" style={{ padding: '18px', border: '1px solid rgba(230,57,70,0.16)', display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <h3 style={{ fontWeight: 800, color: '#fff', fontSize: '1.05rem' }}>{p.label}</h3>
              <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.83rem', lineHeight: 1.6, flex: 1 }}>{p.blurb}</p>
              <a href={p.url} target="_blank" rel="noopener" className="brand-btn-solid" style={{ alignSelf: 'flex-start' }}>
                Open {p.label.split(' ')[0]} <ExternalLink size={12} />
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* Services index */}
      <section style={{ maxWidth: '1080px', margin: '0 auto', padding: '44px 16px 0' }}>
        <h2 className="section-h2" style={{ fontWeight: 900, marginBottom: '6px' }}>
          Services <span style={{ color: '#e63946' }}>behind these guides</span>
        </h2>
        <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.92rem', marginBottom: '20px' }}>
          Everything covered here is something the team does as client work. Useful if you would rather hand it over
          than own it.
        </p>
        <div className="prose-table-wrap" style={{ margin: 0 }}>
          <table className="prose-table">
            <thead>
              <tr>
                <th>Service</th>
                <th>What it covers</th>
                <th>Link</th>
              </tr>
            </thead>
            <tbody>
              {serviceTargets.map((t) => (
                <tr key={t.key}>
                  <td style={{ fontWeight: 700, color: 'rgba(255,255,255,0.9)', whiteSpace: 'nowrap' }}>{t.label}</td>
                  <td>{t.blurb}</td>
                  <td>
                    <a href={t.url} target="_blank" rel="noopener" className="content-link content-link-ext" style={{ whiteSpace: 'nowrap' }}>
                      Open <ExternalLink size={10} style={{ display: 'inline', verticalAlign: 'baseline' }} />
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Full target index */}
      <section style={{ maxWidth: '1080px', margin: '0 auto', padding: '44px 16px 48px' }}>
        <h2 className="section-h2" style={{ fontWeight: 900, marginBottom: '20px' }}>
          Full <span style={{ color: '#e63946' }}>reference index</span>
        </h2>
        <ul style={{ listStyle: 'none', display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))', gap: '10px', padding: 0 }}>
          {allTargets.map((t) => (
            <li
              key={t.key}
              className="glass rounded-xl"
              style={{ padding: '11px 14px', border: '1px solid rgba(255,255,255,0.08)' }}
            >
              <a href={t.url} target="_blank" rel="noopener" className="content-link content-link-ext" style={{ fontWeight: 700, fontSize: '0.86rem' }}>
                {t.label}
              </a>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
