'use client';
import { useState, useRef, useEffect } from 'react';
import { RotateCw, Download, Trophy, X } from 'lucide-react';

const DL_URL = "https://acc.in7game.org/api/web/share/index.html?ic=AA6YDBPC&ts=1774462560&m=2&lang=hi&id=1";
const segments = ['₹100', '₹777', '₹200', '₹500', '₹300', '₹1000'];
const colors = ['#e63946', '#1a1a2e', '#c1121f', '#0d1117', '#e63946', '#1a1a2e'];

export default function SpinWheel() {
  const [isOpen, setIsOpen] = useState(false);
  const [isSpinning, setIsSpinning] = useState(false);
  const [result, setResult] = useState<string | null>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const rotationRef = useRef(0);
  const animRef = useRef<number>(0);

  useEffect(() => {
    if (isOpen) drawWheel(rotationRef.current);
  }, [isOpen]);

  function drawWheel(rotation: number) {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    const cx = canvas.width / 2, cy = canvas.height / 2, r = cx - 8;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    const arc = (2 * Math.PI) / segments.length;
    segments.forEach((seg, i) => {
      const start = rotation + i * arc;
      ctx.beginPath();
      ctx.moveTo(cx, cy);
      ctx.arc(cx, cy, r, start, start + arc);
      ctx.closePath();
      ctx.fillStyle = colors[i];
      ctx.fill();
      ctx.strokeStyle = 'rgba(230,57,70,0.6)';
      ctx.lineWidth = 2;
      ctx.stroke();
      ctx.save();
      ctx.translate(cx, cy);
      ctx.rotate(start + arc / 2);
      ctx.textAlign = 'right';
      ctx.fillStyle = colors[i] === '#e63946' || colors[i] === '#c1121f' ? '#000' : '#e63946';
      ctx.font = 'bold 13px Inter, sans-serif';
      ctx.fillText(seg, r - 12, 5);
      ctx.restore();
    });
    ctx.beginPath();
    ctx.arc(cx, cy, 18, 0, 2 * Math.PI);
    ctx.fillStyle = '#e63946';
    ctx.fill();
  }

  function spin() {
    if (isSpinning) return;
    setIsSpinning(true);
    setResult(null);
    const targetIdx = 1; // always ₹777
    const arc = (2 * Math.PI) / segments.length;
    const targetAngle = 2 * Math.PI * 5 + (Math.PI / 2) - (targetIdx * arc + arc / 2);
    const startAngle = rotationRef.current;
    const totalAngle = targetAngle - (startAngle % (2 * Math.PI));
    const duration = 4000;
    const start = performance.now();

    function animate(now: number) {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      const ease = 1 - Math.pow(1 - progress, 4);
      rotationRef.current = startAngle + totalAngle * ease;
      drawWheel(rotationRef.current);
      if (progress < 1) {
        animRef.current = requestAnimationFrame(animate);
      } else {
        setIsSpinning(false);
        setResult('₹777');
      }
    }
    animRef.current = requestAnimationFrame(animate);
  }

  return (
    <div className="desk-only" style={{position: 'fixed', bottom: '180px', left: '16px', zIndex: 40}}>
      {isOpen && (
        <div style={{position: 'fixed', inset: 0, zIndex: 50, display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'rgba(0,0,0,0.85)', backdropFilter: 'blur(8px)'}}>
          <div style={{position: 'relative', background: 'rgba(12,12,18,0.98)', border: '1px solid rgba(230,57,70,0.35)', borderRadius: '20px', padding: '32px 28px', textAlign: 'center', maxWidth: '320px', width: '100%', margin: '0 16px', boxShadow: '0 0 60px rgba(230,57,70,0.12)'}}>
            <button
              onClick={() => { setIsOpen(false); setResult(null); cancelAnimationFrame(animRef.current); }}
              style={{position: 'absolute', top: '12px', right: '12px', background: 'rgba(255,255,255,0.07)', border: 'none', borderRadius: '50%', width: '30px', height: '30px', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', color: 'rgba(255,255,255,0.6)'}}
            >
              <X size={14} />
            </button>

            <h3 style={{fontSize: '1.25rem', fontWeight: 800, color: '#e63946', marginBottom: '20px'}}>Spin &amp; Win!</h3>

            {/* Pointer triangle */}
            <div style={{display: 'flex', justifyContent: 'center', marginBottom: '4px'}}>
              <div style={{width: 0, height: 0, borderLeft: '10px solid transparent', borderRight: '10px solid transparent', borderTop: '18px solid #e63946'}}></div>
            </div>

            <canvas ref={canvasRef} width={240} height={240} style={{borderRadius: '50%', margin: '0 auto', display: 'block', border: '3px solid rgba(230,57,70,0.3)'}} />

            {!result ? (
              <button
                onClick={spin}
                disabled={isSpinning}
                className="btn-gold"
                style={{marginTop: '20px', width: '100%', justifyContent: 'center', opacity: isSpinning ? 0.6 : 1}}
              >
                <RotateCw size={16} style={{animation: isSpinning ? 'spinAnim 0.6s linear infinite' : 'none'}} />
                {isSpinning ? 'Spinning...' : 'Spin Now!'}
              </button>
            ) : (
              <div style={{marginTop: '20px'}}>
                <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', marginBottom: '6px'}}>
                  <Trophy size={20} color="#e63946" fill="#e63946" />
                  <p style={{fontSize: '1.2rem', fontWeight: 800, color: '#e63946'}}>You Won {result}!</p>
                </div>
                <p style={{color: 'rgba(255,255,255,0.6)', fontSize: '0.8rem', marginBottom: '14px'}}>Download IN7 to claim your reward!</p>
                <a
                  href={DL_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-gold"
                  style={{width: '100%', justifyContent: 'center'}}
                >
                  <Download size={16} />
                  Claim Now — Download IN7
                </a>
              </div>
            )}
          </div>
        </div>
      )}

      <button
        onClick={() => setIsOpen(true)}
        className="btn-gold pulse-gold"
        style={{flexDirection: 'column', gap: '4px', padding: '10px 16px', borderRadius: '14px', fontSize: '0.8rem'}}
      >
        <RotateCw size={18} strokeWidth={2.5} />
        Spin &amp; Win
      </button>
    </div>
  );
}
