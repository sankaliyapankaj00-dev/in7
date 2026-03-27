import type { Metadata } from 'next';
import Link from 'next/link';
import DownloadButton from '@/components/DownloadButton';
import { AlertTriangle, ShieldOff, AlertCircle, Clock, Wallet, Smile, LifeBuoy, Gamepad2, Globe, Scale, FileWarning, CheckCircle } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Disclaimer – IN7 Game | in7co.in',
  description: 'IN7 Game Disclaimer. Important legal information about using IN7 Game. 18+ only. For entertainment purposes. Skill-based gaming disclaimer.',
  alternates: { canonical: 'https://in7co.in/disclaimer' },
};

export default function Disclaimer() {
  return (
    <>
      {/* Breadcrumb */}
      <nav className="max-w-6xl mx-auto px-4 py-3 text-sm text-white/50">
        <Link href="/" className="hover:text-red-500 transition-colors">Home</Link>
        <span className="mx-2">›</span>
        <span className="text-red-500">Disclaimer</span>
      </nav>

      {/* Hero */}
      <section style={{background:'linear-gradient(135deg, #0a0a0f 0%, #0d1117 100%)'}} className="py-16 px-4 text-center">
        <div className="max-w-3xl mx-auto">
          <div className="flex justify-center mb-4">
            <AlertTriangle size={60} style={{color:'#e63946'}} />
          </div>
          <h1 className="text-4xl md:text-5xl font-black mb-4">
            <span style={{color:'#e63946'}}>Disclaimer</span>
          </h1>
          <p className="text-white/60 text-lg">
            IN7 Game – in7co.in | Important Legal Information
          </p>
        </div>
      </section>

      {/* Important Warning Banner */}
      <section className="px-4 max-w-4xl mx-auto py-4">
        <div className="rounded-2xl p-6 border border-red-500/40 text-center" style={{background:'rgba(255,0,0,0.08)'}}>
          <p className="text-red-400 font-black text-xl mb-2 flex items-center justify-center gap-2">
            <AlertTriangle size={24} style={{color:'#f87171'}} /> 18+ ONLY – IMPORTANT WARNING
          </p>
          <p className="text-white/70">IN7 Game is strictly for users aged 18 years and above. This platform is for entertainment purposes only. Please read this disclaimer carefully before using the platform.</p>
        </div>
      </section>

      {/* Content */}
      <section className="py-8 px-4 max-w-4xl mx-auto">
        <div className="space-y-6">

          <div className="glass p-6 rounded-2xl">
            <h2 className="text-xl font-black mb-4 text-red-500">1. Entertainment Purpose</h2>
            <div className="text-white/70 text-sm space-y-3">
              <p>
                IN7 Game is designed and offered purely as an <strong className="text-white">online entertainment platform</strong>. All games, activities, and features on IN7 Game are intended solely for entertainment and recreational purposes.
              </p>
              <p>
                IN7 Game should not be treated as a means of generating primary income, a financial investment strategy, or a method of financial planning. The outcomes of games are based on a combination of skill and entertainment mechanics.
              </p>
              <p>
                We strongly encourage all users to treat IN7 Game as entertainment only and to never depend on gaming results for financial decisions or obligations.
              </p>
            </div>
          </div>

          <div className="glass p-6 rounded-2xl border border-red-500/20" style={{background:'rgba(255,0,0,0.03)'}}>
            <h2 className="text-xl font-black mb-4 text-red-500">2. Age Restriction – 18+ Only</h2>
            <div className="text-white/70 text-sm space-y-3">
              <p className="text-red-400 font-semibold text-base flex items-center gap-2">
                <ShieldOff size={18} style={{color:'#f87171'}} /> IN7 Game is strictly prohibited for persons under 18 years of age.
              </p>
              <p>By accessing or using IN7 Game, you confirm and represent that:</p>
              <ul className="space-y-2 ml-4">
                {[
                  'You are at least 18 years of age',
                  'The laws in your jurisdiction permit participation in online gaming',
                  'You are using the platform voluntarily for personal entertainment',
                  'You are not a resident of any region where such activities are prohibited',
                  'You take full responsibility for your use of the IN7 Game platform',
                ].map(item => (
                  <li key={item} className="flex items-start gap-2 text-white/60">
                    <span className="text-red-400 flex-shrink-0">•</span> {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="glass p-6 rounded-2xl">
            <h2 className="text-xl font-black mb-4 text-red-500">3. Financial Risk Disclaimer</h2>
            <div className="text-white/70 text-sm space-y-3">
              <p>
                Participation in any form of online gaming involves financial risk. IN7 Game expressly states and users acknowledge that:
              </p>
              <ul className="space-y-2 ml-4">
                {[
                  'Winning is not guaranteed – game outcomes can result in financial loss',
                  'IN7 Game is not responsible for any financial losses incurred by users',
                  'Users should only use funds they can afford to lose for entertainment',
                  'Past winnings or game performance do not guarantee future results',
                  'IN7 Game cannot be held liable for any direct, indirect, or consequential financial loss',
                  'Users are solely responsible for their financial decisions while using the platform',
                  'Do not borrow money or use essential funds for gaming activities',
                ].map(item => (
                  <li key={item} className="flex items-start gap-2 text-white/60">
                    <span className="text-red-500 flex-shrink-0">•</span> {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="glass p-6 rounded-2xl">
            <h2 className="text-xl font-black mb-4 text-red-500">4. Responsible Gaming</h2>
            <div className="text-white/70 text-sm space-y-3">
              <p>
                IN7 Game is committed to promoting responsible gaming. We encourage all players to:
              </p>
              <div className="grid md:grid-cols-2 gap-4 mt-3">
                {[
                  { icon: <Clock size={24} style={{color:'#e63946'}} />, title: 'Set Time Limits', desc: 'Limit your daily gaming time and take regular breaks.' },
                  { icon: <Wallet size={24} style={{color:'#e63946'}} />, title: 'Set Budget Limits', desc: 'Decide a maximum amount you can spend on gaming entertainment.' },
                  { icon: <Smile size={24} style={{color:'#e63946'}} />, title: 'Play for Fun', desc: 'Enjoy gaming as entertainment, not as a financial strategy.' },
                  { icon: <LifeBuoy size={24} style={{color:'#e63946'}} />, title: 'Seek Help if Needed', desc: 'If gaming affects your daily life, please seek professional support.' },
                ].map(r => (
                  <div key={r.title} className="glass p-4 rounded-lg">
                    <div className="mb-2">{r.icon}</div>
                    <h3 className="font-bold text-white text-sm mb-1">{r.title}</h3>
                    <p className="text-white/60 text-xs">{r.desc}</p>
                  </div>
                ))}
              </div>
              <p className="text-white/60">
                If you believe you or someone you know may have a problem with gaming, please contact a mental health professional or a responsible gaming helpline in your area.
              </p>
            </div>
          </div>

          <div className="glass p-6 rounded-2xl">
            <h2 className="text-xl font-black mb-4 text-red-500">5. Skill Gaming Disclaimer</h2>
            <div className="text-white/70 text-sm space-y-3">
              <p>
                IN7 Game features skill-based games where player decisions, strategy, and gaming skill can influence outcomes. However:
              </p>
              <ul className="space-y-2 ml-4">
                {[
                  'Game outcomes are influenced by player skill but results can never be fully guaranteed',
                  'All games on IN7 are designed for entertainment with fair algorithms',
                  'No game result is predetermined or manipulated by IN7 Game',
                  'Skill development may improve performance but does not guarantee wins',
                  'Random elements exist in certain games as part of entertainment design',
                ].map(item => (
                  <li key={item} className="flex items-start gap-2 text-white/60">
                    <span className="text-red-500 flex-shrink-0">•</span> {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="glass p-6 rounded-2xl">
            <h2 className="text-xl font-black mb-4 text-red-500">6. Jurisdictional Disclaimer</h2>
            <div className="text-white/70 text-sm space-y-3">
              <p>
                Online gaming laws and regulations vary significantly by location. Users are solely responsible for:
              </p>
              <ul className="space-y-2 ml-4">
                {[
                  'Checking and complying with local laws regarding online gaming in their region',
                  'Ensuring that using IN7 Game is legal in their jurisdiction',
                  'Understanding that IN7 Game is not available where prohibited by law',
                  'Any legal consequences arising from using IN7 Game in restricted areas',
                  'Paying any applicable taxes on winnings as per local tax laws',
                ].map(item => (
                  <li key={item} className="flex items-start gap-2 text-white/60">
                    <span className="text-red-500 flex-shrink-0">•</span> {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="glass p-6 rounded-2xl">
            <h2 className="text-xl font-black mb-4 text-red-500">7. No Warranty</h2>
            <div className="text-white/70 text-sm space-y-3">
              <p>
                IN7 Game is provided &quot;as is&quot; without any warranties. We do not warrant that:
              </p>
              <ul className="space-y-2 ml-4">
                {[
                  'The platform will be available at all times without interruption',
                  'The platform will be free from all errors or technical issues',
                  'Any specific game results will be achieved by any player',
                  'Information on the platform is always complete, accurate, or current',
                ].map(item => (
                  <li key={item} className="flex items-start gap-2 text-white/60">
                    <span className="text-red-500 flex-shrink-0">•</span> {item}
                  </li>
                ))}
              </ul>
              <p>
                IN7 Game shall not be liable for any damages, losses, or harm arising from platform use, game outcomes, technical failures, or any other circumstances beyond our control.
              </p>
            </div>
          </div>

          <div className="glass p-6 rounded-2xl">
            <h2 className="text-xl font-black mb-4 text-red-500">8. Governing Law &amp; Contact</h2>
            <div className="text-white/70 text-sm space-y-3">
              <p>
                This disclaimer is governed by applicable Indian laws. Any disputes arising from use of IN7 Game shall be subject to the exclusive jurisdiction of Indian courts.
              </p>
              <p>
                For any questions, concerns, or clarifications regarding this disclaimer, please contact us:
              </p>
              <div className="glass p-4 rounded-lg mt-3">
                <div className="space-y-2 text-sm">
                  <p><span className="text-red-500 font-bold">Website:</span> <span className="text-white/70">in7co.in</span></p>
                  <p><span className="text-red-500 font-bold">Email:</span> <span className="text-white/70">legal@in7co.in</span></p>
                  <p><span className="text-red-500 font-bold">Support:</span> <span className="text-white/70">24/7 In-App Customer Chat</span></p>
                </div>
              </div>
            </div>
          </div>

          {/* Summary Box */}
          <div className="rounded-2xl p-6 border border-red-500/30" style={{background:'rgba(230,57,70,0.05)'}}>
            <h2 className="text-xl font-black mb-4 text-red-500 flex items-center gap-2">
              <FileWarning size={22} style={{color:'#e63946'}} /> Disclaimer Summary
            </h2>
            <div className="grid md:grid-cols-2 gap-3">
              {[
                { icon: <ShieldOff size={16} style={{color:'#e63946'}} />, text: '18+ Users Only – Strictly Enforced' },
                { icon: <Gamepad2 size={16} style={{color:'#e63946'}} />, text: 'Entertainment Platform Only' },
                { icon: <Wallet size={16} style={{color:'#e63946'}} />, text: 'No Guarantee of Financial Returns' },
                { icon: <Scale size={16} style={{color:'#e63946'}} />, text: 'Skill-Based Games – Fair Play' },
                { icon: <Globe size={16} style={{color:'#e63946'}} />, text: 'Users Must Check Local Laws' },
                { icon: <CheckCircle size={16} style={{color:'#e63946'}} />, text: '100% Secure & Encrypted' },
                { icon: <AlertCircle size={16} style={{color:'#e63946'}} />, text: 'Play Responsibly – Set Limits' },
                { icon: <LifeBuoy size={16} style={{color:'#e63946'}} />, text: '24/7 Support Available' },
              ].map(item => (
                <div key={item.text} className="flex items-center gap-2 text-sm text-white/70">
                  {item.icon} {item.text}
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* Links */}
      <section className="py-8 px-4 max-w-4xl mx-auto">
        <div className="glass p-6 rounded-2xl text-center">
          <p className="text-white/60 mb-4 text-sm">By using IN7 Game, you acknowledge that you have read and agree to this disclaimer.</p>
          <div className="flex flex-wrap gap-4 justify-center">
            <DownloadButton text="Download IN7 Game" size="md" />
            <Link href="/privacy-policy" className="px-6 py-3 rounded-lg font-semibold text-white/80 hover:text-red-500 transition-all text-sm" style={{background:'rgba(255,255,255,0.08)', border:'1px solid rgba(255,255,255,0.15)'}}>
              Privacy Policy →
            </Link>
            <Link href="/about-us" className="px-6 py-3 rounded-lg font-semibold text-white/80 hover:text-red-500 transition-all text-sm" style={{background:'rgba(255,255,255,0.08)', border:'1px solid rgba(255,255,255,0.15)'}}>
              About Us →
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
