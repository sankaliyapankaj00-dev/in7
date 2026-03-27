import Link from 'next/link';
import Image from 'next/image';
import { Download, Shield, AlertTriangle } from 'lucide-react';

const DL_URL = "https://acc.in7game.org/api/web/share/index.html?ic=AA6YDBPC&ts=1774462560&m=2&lang=hi&id=1";

const pageLinks     = [['/', 'Home'], ['/in7-game-app', 'IN7 App'], ['/in7-game-download', 'Download'], ['/how-to-register', 'Register']] as const;
const downloadLinks = [['/in7-game-download', 'IN7 Game Download'], ['/in7-game-app', 'IN7 Game App'], ['/how-to-register', 'How to Register']] as const;
const legalLinks    = [['/about-us', 'About Us'], ['/privacy-policy', 'Privacy Policy'], ['/disclaimer', 'Disclaimer']] as const;

function FooterCol({ title, items }: { title: string; items: readonly (readonly [string, string])[] }) {
  return (
    <div>
      <h4 style={{ color: '#e63946', fontWeight: 700, fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '14px' }}>
        {title}
      </h4>
      <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px' }}>
        {items.map(([href, label]) => (
          <li key={href}>
            <Link href={href} className="footer-link">{label}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Footer() {
  return (
    <footer style={{ background: '#06060a', borderTop: '1px solid rgba(230,57,70,0.15)' }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '56px 16px 0' }}>

        {/* Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '40px', marginBottom: '48px' }}>

          {/* Brand */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '12px' }}>
              <Image
                src="/in7-game-logo.jpg"
                alt="IN7 Game"
                width={34} height={34}
                style={{ borderRadius: '8px', border: '1px solid rgba(230,57,70,0.25)' }}
              />
              <span style={{ fontWeight: 800, color: '#e63946', fontSize: '1rem' }}>IN7 Game</span>
            </div>
            <p style={{ color: 'rgba(255,255,255,0.45)', fontSize: '0.82rem', lineHeight: 1.6 }}>
              India&apos;s #1 Online Gaming App. Play, Earn &amp; Withdraw Instantly.
            </p>
          </div>

          <FooterCol title="Pages"    items={pageLinks} />
          <FooterCol title="Download" items={downloadLinks} />
          <FooterCol title="Legal"    items={legalLinks} />
        </div>

        {/* Download CTA */}
        <div style={{ textAlign: 'center', padding: '28px 0', borderTop: '1px solid rgba(255,255,255,0.07)' }}>
          <a href={DL_URL} target="_blank" rel="noopener noreferrer" className="btn-gold-lg pulse-gold" style={{maxWidth: '100%', boxSizing: 'border-box'}}>
            <Download size={18} strokeWidth={2.5} />
            Download IN7 Game Free — Get ₹777 Bonus
          </a>
        </div>

        {/* Bottom bar */}
        <div style={{ borderTop: '1px solid rgba(255,255,255,0.07)', padding: '20px 0', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
          <div className="footer-disclaimer" style={{ display: 'flex', alignItems: 'center', gap: '6px', color: 'rgba(255,255,255,0.35)', fontSize: '0.72rem', textAlign: 'center' }}>
            <AlertTriangle size={11} style={{flexShrink: 0}} />
            <span>18+ Only &nbsp;|&nbsp; For Entertainment Purposes &nbsp;|&nbsp; Please Play Responsibly</span>
          </div>
          <div className="footer-disclaimer" style={{ display: 'flex', alignItems: 'center', gap: '6px', color: 'rgba(255,255,255,0.25)', fontSize: '0.7rem', textAlign: 'center' }}>
            <Shield size={10} style={{flexShrink: 0}} />
            <span>Copyright &copy; 2026 in7co.in &nbsp;|&nbsp; IN7 Game — India&apos;s #1 Online Gaming Platform</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
