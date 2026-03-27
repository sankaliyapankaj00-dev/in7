'use client';
import { useState } from 'react';
import { MessageSquare, X, Download, ChevronRight, Headphones } from 'lucide-react';

const DL_URL = "https://acc.in7game.org/api/web/share/index.html?ic=AA6YDBPC&ts=1774462560&m=2&lang=hi&id=1";

const replies: Record<string, string> = {
  download: "Download IN7 APK in just 2 minutes — only 25MB. Tap below to get it instantly!",
  withdraw: "Withdraw to UPI or Bank in seconds. Minimum withdrawal is just ₹100.",
  bonus:    "Get ₹777 FREE on signup — no deposit needed. Just download and register!",
};

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [reply, setReply] = useState<string | null>(null);

  return (
    <div className="chat-widget-root" style={{ position: 'fixed', bottom: '80px', right: '14px', zIndex: 50, display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '12px' }}>

      {/* Chat Panel */}
      {isOpen && (
        <div style={{
          width: '300px',
          borderRadius: '20px',
          overflow: 'hidden',
          background: 'rgba(10,10,14,0.97)',
          border: '1px solid rgba(230,57,70,0.25)',
          boxShadow: '0 20px 60px rgba(0,0,0,0.7), 0 0 0 1px rgba(230,57,70,0.08)',
          backdropFilter: 'blur(20px)',
        }}>

          {/* Header */}
          <div style={{
            background: 'linear-gradient(135deg, #e63946, #c1121f)',
            padding: '16px 18px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <div style={{ width: '36px', height: '36px', borderRadius: '10px', background: 'rgba(255,255,255,0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Headphones size={18} color="#fff" strokeWidth={2} />
              </div>
              <div>
                <p style={{ fontWeight: 700, color: '#fff', fontSize: '0.875rem', lineHeight: 1.2 }}>IN7 Support</p>
                <div style={{ display: 'flex', alignItems: 'center', gap: '4px', marginTop: '2px' }}>
                  <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#86efac' }}></div>
                  <span style={{ fontSize: '0.65rem', color: 'rgba(255,255,255,0.75)' }}>Online now</span>
                </div>
              </div>
            </div>
            <button
              onClick={() => { setIsOpen(false); setReply(null); }}
              style={{ background: 'rgba(255,255,255,0.15)', border: 'none', borderRadius: '8px', width: '28px', height: '28px', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', color: '#fff' }}
            >
              <X size={14} strokeWidth={2.5} />
            </button>
          </div>

          {/* Messages */}
          <div style={{ padding: '16px', display: 'flex', flexDirection: 'column', gap: '10px', minHeight: '130px', background: 'rgba(255,255,255,0.02)' }}>
            <div style={{ display: 'flex', gap: '8px', alignItems: 'flex-end' }}>
              <div style={{ width: '26px', height: '26px', borderRadius: '50%', background: 'linear-gradient(135deg,#e63946,#c1121f)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <Headphones size={12} color="#fff" />
              </div>
              <div style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '12px 12px 12px 2px', padding: '9px 13px', fontSize: '0.8rem', color: 'rgba(255,255,255,0.85)', maxWidth: '78%', lineHeight: 1.45 }}>
                Hi! Welcome to IN7 Game. How can I help you?
              </div>
            </div>
            <div style={{ display: 'flex', gap: '8px', alignItems: 'flex-end' }}>
              <div style={{ width: '26px', height: '26px', borderRadius: '50%', background: 'linear-gradient(135deg,#e63946,#c1121f)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <Headphones size={12} color="#fff" />
              </div>
              <div style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '12px 12px 12px 2px', padding: '9px 13px', fontSize: '0.8rem', color: 'rgba(255,255,255,0.85)', maxWidth: '78%', lineHeight: 1.45 }}>
                Download now &amp; get <strong style={{ color: '#e63946' }}>₹777 free</strong> bonus!
              </div>
            </div>

            {reply && (
              <div style={{ display: 'flex', gap: '8px', alignItems: 'flex-end' }}>
                <div style={{ width: '26px', height: '26px', borderRadius: '50%', background: 'linear-gradient(135deg,#e63946,#c1121f)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <Headphones size={12} color="#fff" />
                </div>
                <div style={{ background: 'rgba(230,57,70,0.08)', border: '1px solid rgba(230,57,70,0.2)', borderRadius: '12px 12px 12px 2px', padding: '10px 13px', fontSize: '0.8rem', color: 'rgba(255,255,255,0.85)', maxWidth: '85%', lineHeight: 1.45 }}>
                  <p style={{ marginBottom: '10px' }}>{reply}</p>
                  <a href={DL_URL} target="_blank" rel="noopener noreferrer" className="btn-gold" style={{ fontSize: '0.75rem', padding: '8px 14px', width: '100%', justifyContent: 'center' }}>
                    <Download size={13} /> Download IN7
                  </a>
                </div>
              </div>
            )}
          </div>

          {/* Quick Replies */}
          <div style={{ padding: '12px 14px', borderTop: '1px solid rgba(255,255,255,0.05)', display: 'flex', flexDirection: 'column', gap: '7px', background: 'rgba(0,0,0,0.2)' }}>
            <p style={{ fontSize: '0.65rem', color: 'rgba(255,255,255,0.3)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '2px' }}>Quick Help</p>
            {[
              { label: 'How to Download IN7?', key: 'download' },
              { label: 'How to Withdraw?',     key: 'withdraw' },
              { label: 'Signup Bonus Info',     key: 'bonus'    },
            ].map(btn => (
              <button
                key={btn.key}
                onClick={() => setReply(replies[btn.key])}
                style={{
                  background: 'rgba(255,255,255,0.04)',
                  border: '1px solid rgba(255,255,255,0.08)',
                  borderRadius: '10px',
                  padding: '9px 12px',
                  fontSize: '0.78rem',
                  color: 'rgba(255,255,255,0.75)',
                  cursor: 'pointer',
                  textAlign: 'left',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  transition: 'all 0.18s',
                  width: '100%',
                }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(230,57,70,0.4)'; e.currentTarget.style.color = '#fff'; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)'; e.currentTarget.style.color = 'rgba(255,255,255,0.75)'; }}
              >
                {btn.label}
                <ChevronRight size={13} style={{ color: '#e63946', flexShrink: 0 }} />
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Trigger Button — premium pill style */}
      <button
        onClick={() => setIsOpen(o => !o)}
        aria-label="Open support chat"
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          padding: '12px 18px',
          borderRadius: '50px',
          background: 'linear-gradient(135deg, #e63946, #c1121f)',
          border: 'none',
          cursor: 'pointer',
          boxShadow: '0 4px 24px rgba(230,57,70,0.45)',
          transition: 'all 0.2s',
          position: 'relative',
        }}
        onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 8px 32px rgba(230,57,70,0.55)'; }}
        onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 4px 24px rgba(230,57,70,0.45)'; }}
      >
        <MessageSquare size={18} color="#fff" strokeWidth={2} />
        <span className="chat-label" style={{ fontSize: '0.8rem', fontWeight: 700, color: '#fff', whiteSpace: 'nowrap' }}>Support</span>
        {/* Notification dot */}
        <span style={{ position: 'absolute', top: '-4px', right: '-4px', width: '16px', height: '16px', borderRadius: '50%', background: '#fff', fontSize: '0.6rem', color: '#e63946', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 800, border: '2px solid #c1121f' }}>1</span>
      </button>
    </div>
  );
}
