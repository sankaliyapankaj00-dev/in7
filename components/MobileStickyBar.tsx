import { Download } from 'lucide-react';

const DL_URL = "https://acc.in7game.org/api/web/share/index.html?ic=AA6YDBPC&ts=1774462560&m=2&lang=hi&id=1";

export default function MobileStickyBar() {
  return (
    <div
      className="mobile-only"
      style={{
        position: 'fixed', bottom: 0, left: 0, right: 0, zIndex: 40,
        padding: '10px 16px 16px',
        background: 'rgba(10,10,15,0.97)',
        backdropFilter: 'blur(12px)',
        WebkitBackdropFilter: 'blur(12px)',
        borderTop: '1px solid rgba(230,57,70,0.25)',
      }}
    >
      <a
        href={DL_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="btn-gold-lg pulse-gold"
        style={{width: '100%', justifyContent: 'center'}}
      >
        <Download size={20} strokeWidth={2.5} />
        Download IN7 Free — ₹777 Bonus
      </a>
    </div>
  );
}
