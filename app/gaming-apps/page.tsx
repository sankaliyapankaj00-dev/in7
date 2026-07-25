import type { Metadata } from 'next';
import Link from 'next/link';
import { ExternalLink, ArrowRight, Layers } from 'lucide-react';
import { brands, partnerBrands, brandGroups, getBrands } from '@/content/brands';
import BrandCard from '@/components/blog/BrandCard';

const BASE = 'https://www.in7co.in';

export const metadata: Metadata = {
  title: 'Gaming Apps Directory 2026 – 19 Indian Platforms Compared',
  description:
    'A directory of 19 Indian gaming apps compared on bonus, APK size, payout rails and game categories, grouped by what each platform actually specialises in.',
  keywords: [
    'gaming apps list india',
    'game apk directory',
    'best gaming apps 2026',
    'indian gaming app comparison',
    'paise kamane wale game list',
  ],
  alternates: { canonical: `${BASE}/gaming-apps` },
  openGraph: {
    title: 'Gaming Apps Directory 2026 – 19 Indian Platforms Compared',
    description:
      'Nineteen Indian gaming apps compared on bonus, APK size, payout rails and game categories, grouped by specialisation.',
    url: `${BASE}/gaming-apps`,
    images: [{ url: '/in7-game-banner.jpeg' }],
  },
};

export default function GamingAppsDirectory() {
  const itemListSchema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Indian gaming apps directory 2026',
    url: `${BASE}/gaming-apps`,
    numberOfItems: brands.length,
    itemListElement: brands.map((b, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: b.name,
      url: `${BASE}/blog/${b.slug}`,
    })),
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: BASE },
      { '@type': 'ListItem', position: 2, name: 'Gaming Apps Directory', item: `${BASE}/gaming-apps` },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      {/* Hero */}
      <section style={{ background: 'linear-gradient(135deg, #0a0a0f 0%, #12060a 60%, #0a0a0f 100%)', borderBottom: '1px solid rgba(230,57,70,0.12)' }}>
        <div style={{ maxWidth: '1080px', margin: '0 auto', padding: '48px 16px 40px' }}>
          <nav style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.42)', marginBottom: '18px' }}>
            <Link href="/" className="content-link" style={{ borderBottom: 'none' }}>Home</Link>
            <span style={{ margin: '0 8px' }}>›</span>
            <span style={{ color: '#e63946' }}>Gaming Apps Directory</span>
          </nav>

          <h1 style={{ fontSize: 'clamp(1.8rem, 6vw, 2.9rem)', fontWeight: 900, lineHeight: 1.14, marginBottom: '16px' }}>
            {brands.length} Indian gaming platforms, <span style={{ color: '#e63946' }}>grouped by what they do</span>
          </h1>

          <p style={{ color: 'rgba(255,255,255,0.62)', fontSize: '1.05rem', lineHeight: 1.72, maxWidth: '680px' }}>
            Most app lists rank by bonus size, which tells you almost nothing. This directory groups platforms by what
            they actually specialise in, and states each one&apos;s real numbers: welcome offer, download size, payout
            rails and game categories. Every entry links to its official domain and to our full review.
          </p>
        </div>
      </section>

      {/* Full comparison table */}
      <section style={{ maxWidth: '1080px', margin: '0 auto', padding: '40px 16px 0' }}>
        <h2 className="section-h2" style={{ fontWeight: 900, marginBottom: '6px' }}>
          Full <span style={{ color: '#e63946' }}>comparison table</span>
        </h2>
        <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.92rem', marginBottom: '20px' }}>
          Sorted by download size, because storage is the constraint most lists ignore. Scroll sideways on mobile.
        </p>

        <div className="prose-table-wrap" style={{ margin: 0 }}>
          <table className="prose-table">
            <thead>
              <tr>
                <th>Platform</th>
                <th>Official site</th>
                <th>Welcome offer</th>
                <th>Size</th>
                <th>Payout rails</th>
                <th>Review</th>
              </tr>
            </thead>
            <tbody>
              {brands.map((b) => (
                <tr key={b.key}>
                  <td style={{ fontWeight: 700, color: 'rgba(255,255,255,0.9)', whiteSpace: 'nowrap' }}>{b.name}</td>
                  <td>
                    {b.domain === 'in7co.in' ? (
                      <Link href="/" className="content-link" style={{ whiteSpace: 'nowrap' }}>
                        {b.domain}
                      </Link>
                    ) : (
                      <a href={b.url} target="_blank" rel="noopener" className="content-link content-link-ext" style={{ whiteSpace: 'nowrap' }}>
                        {b.domain} <ExternalLink size={10} style={{ display: 'inline', verticalAlign: 'baseline' }} />
                      </a>
                    )}
                  </td>
                  <td>{b.bonus}</td>
                  <td style={{ whiteSpace: 'nowrap' }}>{b.apkSize}</td>
                  <td>{b.payout}</td>
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

      {/* Grouped sections */}
      {brandGroups.map((group) => (
        <section key={group.title} style={{ maxWidth: '1080px', margin: '0 auto', padding: '44px 16px 0' }}>
          <h2 className="section-h2" style={{ fontWeight: 900, marginBottom: '6px', display: 'flex', alignItems: 'center', gap: '9px' }}>
            <Layers size={20} style={{ color: '#e63946', flexShrink: 0 }} />
            {group.title}
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.92rem', marginBottom: '20px' }}>{group.blurb}</p>
          <div className="dir-grid">
            {getBrands(group.keys).map((b) => (
              <BrandCard key={b.key} brand={b} />
            ))}
          </div>
        </section>
      ))}

      {/* Plain link list — the fastest way to check a domain */}
      <section style={{ maxWidth: '1080px', margin: '0 auto', padding: '48px 16px 0' }}>
        <h2 className="section-h2" style={{ fontWeight: 900, marginBottom: '6px' }}>
          Official <span style={{ color: '#e63946' }}>domain checklist</span>
        </h2>
        <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.92rem', marginBottom: '20px' }}>
          Lookalike domains are the biggest practical risk in this category. Several of these brand names have a dozen
          unofficial sites competing for the same searches. Check an address here before you download from it.
        </p>
        <ul style={{ listStyle: 'none', display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: '10px', padding: 0 }}>
          {partnerBrands.map((b) => (
            <li
              key={b.key}
              className="glass rounded-xl"
              style={{ padding: '12px 14px', border: '1px solid rgba(255,255,255,0.08)', display: 'flex', flexDirection: 'column', gap: '3px' }}
            >
              <a href={b.url} target="_blank" rel="noopener" className="content-link content-link-ext" style={{ fontWeight: 700, fontSize: '0.9rem' }}>
                {b.domain}
              </a>
              <span style={{ fontSize: '0.74rem', color: 'rgba(255,255,255,0.45)' }}>
                {b.name} · <Link href={`/blog/${b.slug}`} className="content-link" style={{ borderBottom: 'none' }}>review</Link>
              </span>
            </li>
          ))}
        </ul>
      </section>

      {/* Closing */}
      <section style={{ maxWidth: '1080px', margin: '0 auto', padding: '40px 16px 48px' }}>
        <div className="prose-cta">
          <p>
            <strong style={{ color: 'rgba(255,255,255,0.95)' }}>Before you install anything from this list: </strong>
            check the minimum withdrawal and the bonus playthrough condition first, then complete KYC on day one rather
            than at cash-out. Those three steps prevent almost every problem people have with these platforms. Full
            detail in our <Link href="/blog/upi-withdrawal-gaming-apps-guide" className="content-link">UPI withdrawal guide</Link>,{' '}
            <Link href="/blog/signup-bonus-comparison-2026" className="content-link">bonus comparison</Link> and{' '}
            <Link href="/blog/apk-install-guide-android" className="content-link">APK install guide</Link>.
          </p>
          <Link href="/blog" className="btn-gold">
            Read the guides <ArrowRight size={14} strokeWidth={2.5} />
          </Link>
        </div>
        <p style={{ color: 'rgba(255,255,255,0.35)', fontSize: '0.72rem', lineHeight: 1.7, textAlign: 'center' }}>
          18+ only. Real-money gaming is restricted or prohibited in several Indian states and under the Promotion and
          Regulation of Online Gaming Act, 2025. Check what applies where you live. Listings here are informational and
          are not an endorsement or a guarantee of any platform&apos;s availability, terms or payouts.
        </p>
      </section>
    </>
  );
}
