import Link from 'next/link';
import { ExternalLink, ArrowRight, Smartphone, Gift } from 'lucide-react';
import type { Brand } from '@/content/types';

/**
 * Card used in the /gaming-apps directory, the article rails and the
 * "alternatives" block on every review page. Carries both the internal link to
 * our own review and the outbound link to the platform's official domain.
 */
export default function BrandCard({ brand, compact = false }: { brand: Brand; compact?: boolean }) {
  return (
    <div
      className="glass rounded-xl"
      style={{
        border: '1px solid rgba(230,57,70,0.16)',
        padding: compact ? '14px' : '18px',
        display: 'flex',
        flexDirection: 'column',
        gap: '10px',
      }}
    >
      <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', gap: '8px' }}>
        <h3 style={{ fontWeight: 800, color: '#fff', fontSize: compact ? '0.95rem' : '1.05rem', lineHeight: 1.25 }}>
          {brand.name}
        </h3>
        <span
          style={{
            fontSize: '0.62rem',
            fontWeight: 700,
            textTransform: 'uppercase',
            letterSpacing: '0.06em',
            whiteSpace: 'nowrap',
            padding: '3px 7px',
            borderRadius: '999px',
            color: brand.live ? '#22c55e' : 'rgba(255,255,255,0.45)',
            background: brand.live ? 'rgba(34,197,94,0.1)' : 'rgba(255,255,255,0.05)',
            border: `1px solid ${brand.live ? 'rgba(34,197,94,0.28)' : 'rgba(255,255,255,0.12)'}`,
          }}
        >
          {brand.live ? 'Live' : 'Rolling out'}
        </span>
      </div>

      <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.8rem', lineHeight: 1.55, flex: 1 }}>
        {compact ? brand.blurbHi : brand.tagline}
      </p>

      {!compact && (
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
          <span className="brand-chip">
            <Gift size={11} /> {brand.bonus}
          </span>
          <span className="brand-chip">
            <Smartphone size={11} /> {brand.apkSize}
          </span>
        </div>
      )}

      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginTop: '2px' }}>
        <Link href={`/blog/${brand.slug}`} className="brand-btn-ghost">
          Read review <ArrowRight size={12} />
        </Link>
        <a href={brand.url} target="_blank" rel="noopener" className="brand-btn-solid">
          {brand.domain} <ExternalLink size={12} />
        </a>
      </div>
    </div>
  );
}
