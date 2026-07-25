import type { Metadata } from 'next';
import Link from 'next/link';
import { ExternalLink, ArrowRight, Wrench } from 'lucide-react';
import { tools, toolCats, toolsByCat } from '@/content/tools';
import { getTarget, getTargets, productKeys, link } from '@/content/codaiman';
import RichText from '@/components/blog/RichText';

const BASE = 'https://www.in7co.in';

export const metadata: Metadata = {
  title: 'Free Online Tools Guide – PDF, Image, Video, Text & Dev (2026)',
  description:
    'Practical guides for free browser-based tools: PDF merge and compress, image resize and WebP, video trim, OCR, JSON formatting and more. No install needed.',
  keywords: [
    'free online tools',
    'browser based tools',
    'pdf tools online',
    'image tools free',
    'online tools without signup',
  ],
  alternates: { canonical: `${BASE}/tools` },
  openGraph: {
    title: 'Free Online Tools Guide – PDF, Image, Video, Text & Dev',
    description:
      'Practical guides for free browser-based tools: PDF, image, video, audio, text and developer utilities.',
    url: `${BASE}/tools`,
    images: [{ url: '/in7-game-banner.jpeg' }],
  },
};

export default function ToolsIndex() {
  const toolhub = getTarget('toolhub');
  const products = getTargets(productKeys);

  const listSchema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Free online tool guides',
    url: `${BASE}/tools`,
    numberOfItems: tools.length,
    itemListElement: tools.map((t, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: t.name,
      url: `${BASE}/tools/${t.slug}`,
    })),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(listSchema) }} />

      <section style={{ background: 'linear-gradient(135deg, #0a0a0f 0%, #12060a 60%, #0a0a0f 100%)', borderBottom: '1px solid rgba(230,57,70,0.12)' }}>
        <div style={{ maxWidth: '1080px', margin: '0 auto', padding: '48px 16px 40px' }}>
          <nav style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.42)', marginBottom: '18px' }}>
            <Link href="/" className="content-link" style={{ borderBottom: 'none' }}>Home</Link>
            <span style={{ margin: '0 8px' }}>›</span>
            <span style={{ color: '#e63946' }}>Tools</span>
          </nav>

          <h1 style={{ fontSize: 'clamp(1.8rem, 6vw, 2.9rem)', fontWeight: 900, lineHeight: 1.14, marginBottom: '16px' }}>
            Free online tools, <span style={{ color: '#e63946' }}>explained properly</span>
          </h1>

          <p style={{ color: 'rgba(255,255,255,0.62)', fontSize: '1.05rem', lineHeight: 1.72, maxWidth: '660px' }}>
            Guides for the browser-based tools people actually need: merging a PDF, getting a photo under an upload
            limit, pulling text out of a scan, formatting JSON. Each page covers the settings that matter, the mistakes
            that waste your time, and what the tool cannot do.
          </p>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', marginTop: '24px' }}>
            <a href={toolhub.url} target="_blank" rel="noopener" className="btn-gold">
              <Wrench size={14} strokeWidth={2.5} />
              Open ToolHub
            </a>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section style={{ maxWidth: '820px', margin: '0 auto', padding: '36px 16px 0' }}>
        <p className="prose-p">
          Every tool covered here runs in <RichText text={link('toolhub', 0)} />, a library of over 1,000
          browser-based utilities across PDF, image, video, audio, text and developer categories. Nothing needs an
          install and nothing needs an account.
        </p>
        <p className="prose-p">
          These pages are guides, not the tools themselves. They exist because most tool sites give you a button and no
          explanation, so people compress the same file four times or convert in the wrong direction and blame the
          software. ToolHub is built by <RichText text={link('home', 0)} />, an AI-first software company based in
          Ahmedabad.
        </p>
      </section>

      {/* Categories */}
      {toolCats.map((c) => {
        const list = toolsByCat(c.cat);
        if (list.length === 0) return null;
        return (
          <section key={c.cat} style={{ maxWidth: '1080px', margin: '0 auto', padding: '40px 16px 0' }}>
            <h2 className="section-h2" style={{ fontWeight: 900, marginBottom: '6px' }}>
              <span style={{ color: '#e63946' }}>{c.cat}</span> tools
            </h2>
            <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.92rem', marginBottom: '20px' }}>{c.blurb}</p>
            <div className="dir-grid">
              {list.map((t) => (
                <Link key={t.slug} href={`/tools/${t.slug}`} className="post-card">
                  <div className="post-meta">
                    <span className="post-tag">{t.cat}</span>
                  </div>
                  <h3>{t.name}</h3>
                  <p>{t.excerpt}</p>
                  <span style={{ display: 'inline-flex', alignItems: 'center', gap: '5px', fontSize: '0.78rem', fontWeight: 700, color: '#ff6b74' }}>
                    Read guide <ArrowRight size={12} />
                  </span>
                </Link>
              ))}
            </div>
          </section>
        );
      })}

      {/* Products behind the tools */}
      <section style={{ maxWidth: '1080px', margin: '0 auto', padding: '48px 16px 0' }}>
        <h2 className="section-h2" style={{ fontWeight: 900, marginBottom: '6px' }}>
          The <span style={{ color: '#e63946' }}>CodeAiMan</span> product family
        </h2>
        <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.92rem', marginBottom: '20px' }}>
          ToolHub is one of four products from the same team. Each one is free to try in the browser.
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

    </>
  );
}
