import Link from 'next/link';
import {
  ExternalLink,
  CheckCircle,
  XCircle,
  Download,
  Gift,
  Smartphone,
  Wallet,
  Gamepad2,
  Cpu,
  Star,
} from 'lucide-react';
import type { Brand } from '@/content/types';
import { getBrands } from '@/content/brands';
import FAQSection from '@/components/FAQSection';
import RichText from './RichText';
import BrandCard from './BrandCard';

function SpecRow({ icon, label, value }: { icon: React.ReactNode; label: string; value: string }) {
  return (
    <tr>
      <td style={{ whiteSpace: 'nowrap', color: 'rgba(255,255,255,0.5)' }}>
        <span style={{ display: 'inline-flex', alignItems: 'center', gap: '7px' }}>
          {icon} {label}
        </span>
      </td>
      <td style={{ color: 'rgba(255,255,255,0.85)', fontWeight: 600 }}>{value}</td>
    </tr>
  );
}

export default function ReviewView({ brand }: { brand: Brand }) {
  const alts = getBrands(brand.alternatives);
  const isHost = brand.domain === 'in7co.in';

  return (
    <article style={{ maxWidth: '820px', margin: '0 auto', padding: '0 16px 40px' }}>
      {/* Hero */}
      <header style={{ paddingTop: '28px', marginBottom: '32px' }}>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '14px' }}>
          <span className="post-tag">Platform review</span>
          <span className="post-tag" style={{ color: brand.live ? '#22c55e' : 'rgba(255,255,255,0.5)', background: brand.live ? 'rgba(34,197,94,0.1)' : 'rgba(255,255,255,0.05)', borderColor: brand.live ? 'rgba(34,197,94,0.28)' : 'rgba(255,255,255,0.12)' }}>
            {brand.live ? 'Site live' : 'Rolling out'}
          </span>
        </div>

        <h1 style={{ fontSize: 'clamp(1.6rem, 6vw, 2.5rem)', fontWeight: 900, lineHeight: 1.15, marginBottom: '14px' }}>
          {brand.name} review <span style={{ color: '#e63946' }}>2026</span>
        </h1>

        <p style={{ color: 'rgba(255,255,255,0.62)', fontSize: '1.02rem', lineHeight: 1.7, marginBottom: '20px' }}>
          {brand.tagline}
        </p>

        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
          <a href={brand.url} target="_blank" rel="noopener" className="btn-gold">
            <ExternalLink size={14} strokeWidth={2.5} />
            Visit {brand.domain}
          </a>
          <Link href="/gaming-apps" className="btn-outline" style={{ fontSize: '0.85rem', padding: '10px 18px' }}>
            Compare all platforms
          </Link>
        </div>
      </header>

      {/* Spec table */}
      <div className="prose-table-wrap" style={{ marginTop: 0 }}>
        <table className="prose-table" style={{ minWidth: '340px' }}>
          <thead>
            <tr>
              <th colSpan={2}>{brand.name} at a glance</th>
            </tr>
          </thead>
          <tbody>
            <SpecRow icon={<Gift size={12} />} label="Welcome offer" value={brand.bonus} />
            <SpecRow icon={<Smartphone size={12} />} label="Download size" value={brand.apkSize} />
            <SpecRow icon={<Cpu size={12} />} label="Requires" value={brand.android} />
            <SpecRow icon={<Star size={12} />} label="Version" value={brand.version} />
            <SpecRow icon={<Wallet size={12} />} label="Payouts" value={brand.payout} />
            <SpecRow icon={<Gamepad2 size={12} />} label="Categories" value={brand.categories.join(', ')} />
            <tr>
              <td style={{ whiteSpace: 'nowrap', color: 'rgba(255,255,255,0.5)' }}>
                <span style={{ display: 'inline-flex', alignItems: 'center', gap: '7px' }}>
                  <ExternalLink size={12} /> Official site
                </span>
              </td>
              <td>
                {isHost ? (
                  <Link href="/" className="content-link">{brand.domain}</Link>
                ) : (
                  <a href={brand.url} target="_blank" rel="noopener" className="content-link content-link-ext">
                    {brand.domain}
                  </a>
                )}
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* The one-line verdict */}
      <div className="prose-note" style={{ background: 'rgba(34,197,94,0.06)', border: '1px solid rgba(34,197,94,0.22)' }}>
        <CheckCircle size={16} style={{ color: '#22c55e', flexShrink: 0, marginTop: '3px' }} />
        <p>
          <strong style={{ color: 'rgba(255,255,255,0.95)' }}>What it is actually good at: </strong>
          {brand.usp}
        </p>
      </div>

      {/* Intro prose */}
      {brand.intro.map((para, i) => (
        <p key={i} className="prose-p">
          <RichText text={para} prefix={`in${i}`} />
        </p>
      ))}

      {/* Features */}
      <h2 className="prose-h2" id="features">
        {brand.name} features worth knowing about
      </h2>
      <div className="dir-grid" style={{ marginBottom: '30px' }}>
        {brand.features.map((f) => (
          <div key={f.title} className="glass rounded-xl" style={{ padding: '16px', border: '1px solid rgba(230,57,70,0.14)' }}>
            <h3 style={{ fontSize: '0.9rem', fontWeight: 700, color: '#ff8a91', marginBottom: '7px' }}>{f.title}</h3>
            <p style={{ fontSize: '0.82rem', lineHeight: 1.6, color: 'rgba(255,255,255,0.62)' }}>{f.desc}</p>
          </div>
        ))}
      </div>

      {/* Download steps */}
      <h2 className="prose-h2" id="download">
        How to download {brand.name} on Android
      </h2>
      <ol className="prose-list prose-list-ordered">
        {brand.steps.map((s, i) => (
          <li key={i}>
            <span className="prose-num">{i + 1}</span>
            <span>
              <RichText text={s} prefix={`st${i}`} />
            </span>
          </li>
        ))}
      </ol>

      <div className="prose-note" style={{ background: 'rgba(230,57,70,0.07)', border: '1px solid rgba(230,57,70,0.28)' }}>
        <Download size={16} style={{ color: '#f87171', flexShrink: 0, marginTop: '3px' }} />
        <p>
          Only download from{' '}
          {isHost ? (
            <Link href="/in7-game-download" className="content-link">the official download page</Link>
          ) : (
            <a href={brand.url} target="_blank" rel="noopener" className="content-link content-link-ext">
              {brand.domain}
            </a>
          )}
          . Lookalike domains are the single biggest risk in this category, and a repackaged APK from a mirror site is
          the one thing a small file size will not protect you from. Full walkthrough in our{' '}
          <Link href="/blog/apk-install-guide-android" className="content-link">Android APK install guide</Link>.
        </p>
      </div>

      {/* Pros and cons */}
      <h2 className="prose-h2" id="pros-cons">
        {brand.name}: pros and cons
      </h2>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '14px', marginBottom: '30px' }}>
        <div className="glass rounded-xl" style={{ padding: '16px', border: '1px solid rgba(34,197,94,0.2)', background: 'rgba(34,197,94,0.04)' }}>
          <h3 style={{ fontSize: '0.82rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.06em', color: '#22c55e', marginBottom: '12px' }}>
            What works
          </h3>
          <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '9px' }}>
            {brand.pros.map((p) => (
              <li key={p} style={{ display: 'flex', gap: '8px', fontSize: '0.84rem', lineHeight: 1.6, color: 'rgba(255,255,255,0.72)' }}>
                <CheckCircle size={14} style={{ color: '#22c55e', flexShrink: 0, marginTop: '3px' }} />
                {p}
              </li>
            ))}
          </ul>
        </div>
        <div className="glass rounded-xl" style={{ padding: '16px', border: '1px solid rgba(230,57,70,0.2)', background: 'rgba(230,57,70,0.04)' }}>
          <h3 style={{ fontSize: '0.82rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.06em', color: '#f87171', marginBottom: '12px' }}>
            What does not
          </h3>
          <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '9px' }}>
            {brand.cons.map((c) => (
              <li key={c} style={{ display: 'flex', gap: '8px', fontSize: '0.84rem', lineHeight: 1.6, color: 'rgba(255,255,255,0.72)' }}>
                <XCircle size={14} style={{ color: '#f87171', flexShrink: 0, marginTop: '3px' }} />
                {c}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* FAQ */}
      <h2 className="prose-h2" id="faq">
        {brand.name} FAQs
      </h2>
      <FAQSection faqs={brand.faqs} />

      {/* Alternatives */}
      <h2 className="prose-h2" id="alternatives">
        Alternatives to {brand.name}
      </h2>
      <p className="prose-p">
        If {brand.name} is not the right fit, these four are the closest comparisons in the same category. Each links
        straight through to its official site.
      </p>
      <div className="prose-apps-grid" style={{ marginBottom: '28px' }}>
        {alts.map((b) => (
          <BrandCard key={b.key} brand={b} compact />
        ))}
      </div>

      {/* Closing CTA */}
      <div className="prose-cta">
        <p>
          <strong style={{ color: 'rgba(255,255,255,0.95)' }}>Bottom line: </strong>
          {brand.usp} Read the withdrawal terms and the playthrough condition before you deposit anything, and complete
          KYC on day one rather than at cash-out. Our{' '}
          <Link href="/blog/upi-withdrawal-gaming-apps-guide" className="content-link">UPI withdrawal guide</Link> covers
          why that ordering matters.
        </p>
        {isHost ? (
          <Link href="/in7-game-download" className="btn-gold">
            <Download size={14} strokeWidth={2.5} />
            Go to the download page
          </Link>
        ) : (
          <a href={brand.url} target="_blank" rel="noopener" className="btn-gold">
            <ExternalLink size={14} strokeWidth={2.5} />
            Open {brand.domain}
          </a>
        )}
      </div>

      <p style={{ color: 'rgba(255,255,255,0.35)', fontSize: '0.72rem', lineHeight: 1.7, textAlign: 'center', marginTop: '10px' }}>
        18+ only. Real-money gaming is restricted or prohibited in several Indian states and under the Promotion and
        Regulation of Online Gaming Act, 2025. Check what applies where you live. Play responsibly and treat deposits as
        an entertainment cost, never as income.
      </p>
    </article>
  );
}
