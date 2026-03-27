import Link from 'next/link';
import DownloadButton from '@/components/DownloadButton';
import { Gamepad2 } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 text-center" style={{background:'#0a0a0f'}}>
      <div>
        <div className="text-8xl font-black mb-4" style={{color:'#e63946'}}>404</div>
        <h1 className="text-3xl font-bold mb-2 text-white">Page Not Found</h1>
        <p className="text-white/60 mb-8 flex items-center justify-center gap-2">
          Lost? Let&apos;s get you back to winning! <Gamepad2 size={18} style={{color:'#e63946'}} />
        </p>
        <div className="flex flex-wrap gap-4 justify-center mb-8">
          {[['/', 'Home'], ['/in7-game-download', 'Download'], ['/how-to-register', 'Register'], ['/in7-game-app', 'App']].map(([href, label]) => (
            <Link key={href} href={href} className="glass px-4 py-2 rounded-lg text-white/80 hover:text-red-500 transition-colors text-sm">
              {label}
            </Link>
          ))}
        </div>
        <DownloadButton text="Download IN7 Game Now" size="lg" />
      </div>
    </div>
  );
}
