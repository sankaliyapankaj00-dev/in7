'use client';
import { useState, useEffect } from 'react';
import { X, Download, Gift, Clock, Zap } from 'lucide-react';

const DL_URL = "https://acc.in7game.org/api/web/share/index.html?ic=AA6YDBPC&ts=1774462560&m=2&lang=hi&id=1";

export default function PopupModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [countdown, setCountdown] = useState(59);

  useEffect(() => {
    // Only show once per browser tab session
    if (sessionStorage.getItem('popup_closed')) return;
    const timer = setTimeout(() => setIsOpen(true), 10000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!isOpen || countdown <= 0) return;
    const interval = setInterval(() => setCountdown(c => c - 1), 1000);
    return () => clearInterval(interval);
  }, [isOpen, countdown]);

  if (!isOpen) return null;

  return (
    <div style={{position: 'fixed', inset: 0, zIndex: 100, display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'rgba(0,0,0,0.85)', backdropFilter: 'blur(8px)'}}>
      <div style={{position: 'relative', width: '100%', maxWidth: '420px', margin: '0 16px', background: 'rgba(15,15,22,0.98)', border: '1px solid rgba(230,57,70,0.35)', borderRadius: '20px', padding: '40px 32px', textAlign: 'center', boxShadow: '0 0 60px rgba(230,57,70,0.15)'}}>

        {/* Close */}
        <button
          onClick={() => { sessionStorage.setItem('popup_closed', '1'); setIsOpen(false); }}
          style={{position: 'absolute', top: '16px', right: '16px', background: 'rgba(255,255,255,0.08)', border: 'none', borderRadius: '50%', width: '32px', height: '32px', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', color: 'rgba(255,255,255,0.7)'}}
        >
          <X size={16} />
        </button>

        {/* Icon */}
        <div style={{width: '72px', height: '72px', borderRadius: '50%', background: 'linear-gradient(135deg, #e63946, #c1121f)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 20px', animation: 'spinAnim 4s linear infinite'}}>
          <Gift size={36} color="#fff" strokeWidth={2} />
        </div>

        <h2 style={{fontSize: '1.5rem', fontWeight: 800, color: '#e63946', marginBottom: '8px', lineHeight: 1.2}}>
          Welcome Bonus ₹777 Waiting!
        </h2>
        <p style={{color: 'rgba(255,255,255,0.7)', fontSize: '0.9rem', marginBottom: '24px', lineHeight: 1.5}}>
          New users get instant ₹777 signup bonus on IN7 Game. Download now and claim it free!
        </p>

        <a
          href={DL_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-gold-lg pulse-gold"
          style={{width: '100%', justifyContent: 'center', marginBottom: '16px'}}
        >
          <Download size={20} strokeWidth={2.5} />
          Download IN7 Now
        </a>

        <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '6px', color: 'rgba(255,255,255,0.5)', fontSize: '0.8rem', marginBottom: '8px'}}>
          <Clock size={13} />
          <span>Offer expires in: 00:{countdown.toString().padStart(2, '0')}</span>
        </div>

        <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '5px', color: '#e63946', fontSize: '0.75rem'}}>
          <Zap size={12} fill="#e63946" />
          <span>Limited time offer for new users</span>
        </div>
      </div>
    </div>
  );
}
