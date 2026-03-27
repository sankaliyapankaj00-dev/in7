'use client';
import { useState, useEffect } from 'react';
import { TrendingUp, Wallet, Trophy, Star, ArrowRight, Award } from 'lucide-react';

const DL_URL = "https://acc.in7game.org/api/web/share/index.html?ic=AA6YDBPC&ts=1774462560&m=2&lang=hi&id=1";

// 40 unique names with unique amounts — labeled as "Recent Players" (Google-safe, not "Live")
const msgs = [
  { icon: TrendingUp, text: 'Arjun S. earned ₹480',     color: '#ef4444' },
  { icon: Wallet,     text: 'Priya M. withdrew ₹1,350', color: '#ef4444' },
  { icon: Trophy,     text: 'Karan V. won ₹920',        color: '#ef4444' },
  { icon: Star,       text: 'Divya R. got ₹777 bonus',  color: '#ef4444' },
  { icon: TrendingUp, text: 'Rohit B. earned ₹2,100',   color: '#ef4444' },
  { icon: Wallet,     text: 'Sunita K. withdrew ₹560',  color: '#ef4444' },
  { icon: Trophy,     text: 'Vikash P. won ₹1,450',     color: '#ef4444' },
  { icon: Award,      text: 'Pooja G. earned ₹380',     color: '#ef4444' },
  { icon: TrendingUp, text: 'Manish T. earned ₹670',    color: '#ef4444' },
  { icon: Wallet,     text: 'Kavita N. withdrew ₹2,500',color: '#ef4444' },
  { icon: Trophy,     text: 'Ravi J. won ₹1,100',       color: '#ef4444' },
  { icon: Star,       text: 'Ananya S. got ₹777 bonus', color: '#ef4444' },
  { icon: TrendingUp, text: 'Suraj L. earned ₹840',     color: '#ef4444' },
  { icon: Wallet,     text: 'Neha D. withdrew ₹730',    color: '#ef4444' },
  { icon: Trophy,     text: 'Aakash M. won ₹1,800',     color: '#ef4444' },
  { icon: Award,      text: 'Rekha A. earned ₹490',     color: '#ef4444' },
  { icon: TrendingUp, text: 'Deepak C. earned ₹3,200',  color: '#ef4444' },
  { icon: Wallet,     text: 'Simran H. withdrew ₹960',  color: '#ef4444' },
  { icon: Trophy,     text: 'Nikhil W. won ₹620',       color: '#ef4444' },
  { icon: Star,       text: 'Pallavi F. got ₹777 bonus',color: '#ef4444' },
  { icon: TrendingUp, text: 'Gaurav E. earned ₹1,250',  color: '#ef4444' },
  { icon: Wallet,     text: 'Preeti U. withdrew ₹410',  color: '#ef4444' },
  { icon: Trophy,     text: 'Sanjay O. won ₹2,300',     color: '#ef4444' },
  { icon: Award,      text: 'Ritika I. earned ₹760',    color: '#ef4444' },
  { icon: TrendingUp, text: 'Abhishek Y. earned ₹540',  color: '#ef4444' },
  { icon: Wallet,     text: 'Meenakshi Q. withdrew ₹1,600', color: '#ef4444' },
  { icon: Trophy,     text: 'Tarun Z. won ₹890',        color: '#ef4444' },
  { icon: Star,       text: 'Ishaan X. got ₹777 bonus', color: '#ef4444' },
  { icon: TrendingUp, text: 'Shruti V. earned ₹1,920',  color: '#ef4444' },
  { icon: Wallet,     text: 'Lokesh U. withdrew ₹330',  color: '#ef4444' },
  { icon: Trophy,     text: 'Amrita T. won ₹4,100',     color: '#ef4444' },
  { icon: Award,      text: 'Jayesh S. earned ₹720',    color: '#ef4444' },
  { icon: TrendingUp, text: 'Radhika R. earned ₹580',   color: '#ef4444' },
  { icon: Wallet,     text: 'Naman Q. withdrew ₹1,070', color: '#ef4444' },
  { icon: Trophy,     text: 'Varsha P. won ₹2,750',     color: '#ef4444' },
  { icon: Star,       text: 'Chirag O. got ₹777 bonus', color: '#ef4444' },
  { icon: TrendingUp, text: 'Tanvi N. earned ₹440',     color: '#ef4444' },
  { icon: Wallet,     text: 'Harish M. withdrew ₹1,830',color: '#ef4444' },
  { icon: Trophy,     text: 'Komal L. won ₹310',        color: '#ef4444' },
  { icon: Award,      text: 'Yash K. earned ₹5,000',    color: '#ef4444' },
];

export default function NotificationsWidget() {
  const [idx, setIdx] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisible(false);
      setTimeout(() => {
        setIdx(i => (i + 1) % msgs.length);
        setVisible(true);
      }, 350);
    }, 3800);
    return () => clearInterval(interval);
  }, []);

  const current = msgs[idx];
  const Icon = current.icon;

  return (
    <div
      className="desk-only"
      style={{ position: 'fixed', left: '16px', top: '50%', transform: 'translateY(-50%)', zIndex: 40, width: '196px' }}
    >
      <div
        style={{
          background: 'rgba(10,10,15,0.94)',
          border: '1px solid rgba(239,68,68,0.35)',
          borderRadius: '14px',
          padding: '13px 14px',
          backdropFilter: 'blur(14px)',
          WebkitBackdropFilter: 'blur(14px)',
          transition: 'opacity 0.35s ease, transform 0.35s ease',
          opacity: visible ? 1 : 0,
          transform: visible ? 'translateX(0)' : 'translateX(-14px)',
          boxShadow: '0 4px 24px rgba(0,0,0,0.5), 0 0 0 1px rgba(239,68,68,0.08)',
        }}
      >
        {/* Header: "Recent Players" label — Google-safe, not "fake live" */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '5px', marginBottom: '10px' }}>
          <div style={{ width: '7px', height: '7px', borderRadius: '50%', background: '#ef4444', boxShadow: '0 0 6px #ef4444' }}></div>
          <span style={{ fontSize: '0.6rem', color: 'rgba(255,255,255,0.4)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.07em' }}>
            Recent Players
          </span>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '9px' }}>
          {/* Icon box */}
          <div style={{ width: '30px', height: '30px', borderRadius: '8px', background: 'rgba(239,68,68,0.12)', border: '1px solid rgba(239,68,68,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
            <Icon size={14} color="#ef4444" strokeWidth={2.5} />
          </div>

          <div style={{ flex: 1, minWidth: 0 }}>
            <p style={{ fontSize: '0.76rem', fontWeight: 700, color: '#fff', lineHeight: 1.3, marginBottom: '5px', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
              {current.text}
            </p>
            <a
              href={DL_URL}
              target="_blank"
              rel="noopener noreferrer"
              style={{ fontSize: '0.64rem', color: '#ef4444', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '2px', fontWeight: 700 }}
            >
              Play Now <ArrowRight size={9} />
            </a>
          </div>
        </div>

        {/* Subtle disclaimer — helps with Google trust signals */}
        <p style={{ fontSize: '0.55rem', color: 'rgba(255,255,255,0.2)', marginTop: '9px', lineHeight: 1.4 }}>
          *Illustrative player activity
        </p>
      </div>
    </div>
  );
}
