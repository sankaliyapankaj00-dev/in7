'use client';
import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { Menu, X, Download } from 'lucide-react';

const DL_URL = "https://acc.in7game.org/api/web/share/index.html?ic=AA6YDBPC&ts=1774462560&m=2&lang=hi&id=1";

const links = [
  { href: '/in7-game-download', label: 'Download' },
  { href: '/in7-game-app', label: 'App' },
  { href: '/how-to-register', label: 'Register' },
  { href: '/about-us', label: 'About' },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled]   = useState(false);
  const [isDesktop, setIsDesktop]  = useState(false);

  useEffect(() => {
    const checkWidth = () => setIsDesktop(window.innerWidth >= 768);
    checkWidth();
    window.addEventListener('resize', checkWidth);
    return () => window.removeEventListener('resize', checkWidth);
  }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => { if (isDesktop) setMenuOpen(false); }, [isDesktop]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = (!isDesktop && menuOpen) ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen, isDesktop]);

  return (
    // NOTE: no backdropFilter on the <nav> wrapper itself — only on the bar inside.
    // This avoids the browser bug where position:fixed children get contained.
    <nav style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 50,
    }}>
      {/* Main bar — has its own blur */}
      <div style={{
        background: scrolled ? 'rgba(10,10,15,0.98)' : 'rgba(10,10,15,0.90)',
        backdropFilter: 'blur(16px)',
        WebkitBackdropFilter: 'blur(16px)',
        borderBottom: '1px solid rgba(230,57,70,0.13)',
        transition: 'background 0.3s, box-shadow 0.3s',
        boxShadow: scrolled ? '0 4px 24px rgba(0,0,0,0.5)' : 'none',
      }}>
        <div style={{
          maxWidth: '1280px', margin: '0 auto',
          padding: '0 16px', height: '64px',
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        }}>
          {/* Logo */}
          <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: '9px', textDecoration: 'none', flexShrink: 0 }}>
            <Image
              src="/in7-game-logo.jpg"
              alt="IN7 Game Logo"
              width={34} height={34}
              style={{ borderRadius: '8px', border: '1px solid rgba(230,57,70,0.35)' }}
            />
            <span style={{ fontWeight: 800, fontSize: '1.05rem', color: '#e63946', letterSpacing: '-0.02em' }}>IN7 Game</span>
          </Link>

          {/* Desktop nav */}
          {isDesktop && (
            <div style={{ display: 'flex', alignItems: 'center', gap: '24px' }}>
              {links.map(l => (
                <Link
                  key={l.href}
                  href={l.href}
                  style={{ color: 'rgba(255,255,255,0.75)', textDecoration: 'none', fontSize: '0.875rem', fontWeight: 500, transition: 'color 0.2s', whiteSpace: 'nowrap' }}
                  onMouseEnter={e => (e.currentTarget.style.color = '#e63946')}
                  onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.75)')}
                >
                  {l.label}
                </Link>
              ))}
              <a href={DL_URL} target="_blank" rel="noopener noreferrer" className="btn-gold" style={{ whiteSpace: 'nowrap', flexShrink: 0 }}>
                <Download size={14} strokeWidth={2.5} />
                Download Now
              </a>
            </div>
          )}

          {/* Mobile: compact Download + Hamburger */}
          {!isDesktop && (
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <a href={DL_URL} target="_blank" rel="noopener noreferrer" className="btn-gold" style={{ padding: '9px 14px', fontSize: '0.8rem', gap: '5px' }}>
                <Download size={13} strokeWidth={2.5} />
                Download
              </a>
              <button
                onClick={() => setMenuOpen(o => !o)}
                aria-label="Toggle menu"
                style={{
                  background: menuOpen ? 'rgba(230,57,70,0.15)' : 'rgba(255,255,255,0.07)',
                  border: '1px solid rgba(255,255,255,0.12)',
                  borderRadius: '8px', color: '#fff', cursor: 'pointer',
                  padding: '9px', display: 'flex', alignItems: 'center', justifyContent: 'center',
                  transition: 'background 0.2s',
                }}
              >
                {menuOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Mobile full-screen menu overlay
          Uses position:fixed (NOT inside a backdrop-filter element)
          so it correctly covers the full viewport */}
      {!isDesktop && menuOpen && (
        <div style={{
          position: 'fixed',
          top: '64px',
          left: 0,
          right: 0,
          bottom: 0,
          // Dark background — no backdrop-filter here to avoid containment issue
          background: 'rgba(6,6,10,0.99)',
          borderTop: '1px solid rgba(230,57,70,0.18)',
          display: 'flex',
          flexDirection: 'column',
          overflowY: 'auto',
          zIndex: 49,
        }}>
          {/* Nav links */}
          <div style={{ padding: '4px 20px' }}>
            {links.map((l, i) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setMenuOpen(false)}
                style={{
                  display: 'flex', alignItems: 'center',
                  padding: '18px 4px',
                  color: 'rgba(255,255,255,0.88)',
                  textDecoration: 'none',
                  fontSize: '1.1rem', fontWeight: 600,
                  borderBottom: i < links.length - 1 ? '1px solid rgba(255,255,255,0.07)' : 'none',
                  letterSpacing: '-0.01em',
                }}
              >
                {l.label}
              </Link>
            ))}
          </div>

          {/* CTA area at bottom */}
          <div style={{ padding: '24px 20px 32px', marginTop: 'auto' }}>
            <a
              href={DL_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold-lg pulse-gold"
              style={{ width: '100%', justifyContent: 'center', boxSizing: 'border-box' }}
              onClick={() => setMenuOpen(false)}
            >
              <Download size={18} strokeWidth={2.5} />
              Download IN7 Free — ₹777 Bonus
            </a>
            <p style={{ color: 'rgba(255,255,255,0.28)', fontSize: '0.68rem', textAlign: 'center', marginTop: '12px' }}>
              18+ Only · For Entertainment · Responsible Gaming
            </p>
          </div>
        </div>
      )}
    </nav>
  );
}
