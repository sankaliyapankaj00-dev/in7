import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import DownloadButton from '@/components/DownloadButton';
import FAQSection from '@/components/FAQSection';
import { Trophy, Zap, Gamepad2, Gift, Shield, Users, Clock, Star, TrendingUp, CheckCircle, Smartphone, IndianRupee } from 'lucide-react';

const DL_URL = "https://acc.in7game.org/api/web/share/index.html?ic=AA6YDBPC&ts=1774462560&m=2&lang=hi&id=1";

export const metadata: Metadata = {
  title: 'IN7 Game – Paise Jitne Wala Game | ₹777 APK 2026',
  description: "Download IN7 Game APK free. Best paise jitne wala game. Get ₹777 bonus instantly. UPI withdrawal games. 50L+ players trust IN7 game online.",
  keywords: ['in7', 'in7 game', 'in 7', 'ien7', 'in7 apps', 'in7 app', 'in 7 app', 'in 7 com game', 'in7 online', 'in7 game online', 'i am 7 game', 'ln7', 'aaiae', 'paise jitne wala game', 'upi withdrawal games', 'in7 com game', 'in7 login', 'in 7 all game', 'in7 game download'],
  alternates: { canonical: 'https://www.in7co.in' },
  openGraph: {
    title: 'IN7 Game – Paise Jitne Wala Game | ₹777 APK 2026',
    description: "Download IN7 Game APK free. Best paise jitne wala game. Get ₹777 bonus. Instant UPI withdrawal. 50L+ players.",
    url: 'https://www.in7co.in',
    images: [{ url: '/in7-game-banner.jpeg', width: 1200, height: 630, alt: 'IN7 Game – Paise Jitne Wala Game APK' }],
  },
};

const faqs = [
  { q: "IN7 Game kya hai – aur ien7, in 7, i am 7 game kya hota hai?", a: "IN7 Game ek real cash gaming app hai jo in7co.in par available hai. Games khelke paise jeeto aur seedha UPI me withdraw karo. Log 'ien7', 'in 7', 'i am 7 game' jaise variations likhte hain – sab IN7 ko hi refer karte hain. Register hone par ₹777 bonus milta hai, bina deposit ke." },
  { q: "IN7 APK download kaise kare?", a: "in7co.in pe jao, Download button dabao. File size 25-30MB hai. Install karne ke liye pehle Settings → Security me 'Unknown Sources' ON karna padega – ye Android ka default setting hai. Fir APK install karo. Total 2 minute se kam lagta hai." },
  { q: "IN7 Game real hai ya fake?", a: "Real hai – users rooz UPI me withdraw karte hain. Lekin honest baat: ye real-money entertainment app hai, jeetna guaranteed nahi hota. Sirf woh paise lagao jo afford kar sako. Fake sites se bachne ke liye hamesha sirf in7co.in use karo." },
  { q: "IN7 se minimum kitna withdraw kar sakte hain?", a: "₹100 minimum hai. PhonePe, Google Pay, Paytm, ya direct bank transfer – sab options available hain. Speed almost instant hoti hai, kabhi kabhi 2-3 minute bhi lag sakte hain network pe depend karke." },
  { q: "₹777 signup bonus kaise milta hai?", a: "APK download karo → Mobile number se register karo → OTP verify karo → ₹777 wallet me aa jaata hai. Koi referral code nahi dalna, koi deposit nahi karna. Registration complete hone par automatically credit hota hai." },
  { q: "IN7 referral bonus kya hota hai?", a: "Apna referral link friends ko share karo. Jab wo register karte hain aur play karte hain, tumhe bonus milta hai. Exact amount app ke referral section me dikh jaata hai – yeh time to time change hota rehta hai, app se check karo." },
  { q: "IN7 Play Store par kyun nahi hai?", a: "Real-money earning apps ko Google Play Store India me allow nahi karta – yeh Google ki policy hai, IN7 ka issue nahi. Official aur safe APK sirf in7co.in se milega. Play Store par agar koi IN7 dikhta hai toh wo fake hai, download mat karna." },
  { q: "IN7 me register kaise kare?", a: "App kholo → Register tap karo → Mobile number dalo → OTP aayega SMS me → verify karo → password banao → ho gaya. 90 seconds se bhi kam. ₹777 bonus turant wallet me credit ho jaata hai." },
  { q: "IN7 me kaun se games hain?", a: "Skill games, number prediction, fast-win rounds, casual games – kai categories hain. Entry fees alag alag hoti hain, kuch ₹10 se bhi shuru hote hain. Naye games time time add hote rehte hain." },
  { q: "IN7 game online APK kya hota hai?", a: "IN7 ka Android app file – APK format me. Seedha in7co.in se download karo. File 25-30MB ki hai. Install karo, register karo, aur seedha app se khelo – alag browser ki zaroorat nahi padti." },
];

export default function Home() {
  return (
    <>
      {/* ── HERO ── */}
      <section style={{
        position: 'relative',
        minHeight: '100svh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
        background: '#0a0a0f',
      }}>
        {/* Layered glow orbs */}
        <div style={{position:'absolute',inset:0,pointerEvents:'none'}}>
          <div style={{position:'absolute',top:'-10%',left:'50%',transform:'translateX(-50%)',width:'min(800px,120vw)',height:'500px',background:'radial-gradient(ellipse at center, rgba(239,68,68,0.12) 0%, transparent 70%)',filter:'blur(40px)'}}/>
          <div style={{position:'absolute',bottom:'0',left:'15%',width:'min(400px,60vw)',height:'min(400px,60vw)',background:'radial-gradient(circle, rgba(230,57,70,0.07) 0%, transparent 70%)',filter:'blur(50px)'}}/>
          <div style={{position:'absolute',bottom:'10%',right:'10%',width:'min(320px,50vw)',height:'min(320px,50vw)',background:'radial-gradient(circle, rgba(230,57,70,0.04) 0%, transparent 70%)',filter:'blur(50px)'}}/>
          {/* Decorative grid lines */}
          <div style={{position:'absolute',inset:0,backgroundImage:'linear-gradient(rgba(255,255,255,0.018) 1px, transparent 1px),linear-gradient(90deg, rgba(255,255,255,0.018) 1px, transparent 1px)',backgroundSize:'60px 60px',maskImage:'radial-gradient(ellipse 80% 80% at 50% 50%, black 30%, transparent 100%)'}}/>
        </div>

        {/* Inner container — padding handled by CSS .hero-inner */}
        <div className="hero-inner" style={{position:'relative',zIndex:1,maxWidth:'860px',width:'100%',textAlign:'center'}}>

          {/* Badge */}
          <div style={{display:'inline-flex',alignItems:'center',gap:'6px',padding:'5px 14px',borderRadius:'999px',background:'rgba(239,68,68,0.1)',border:'1px solid rgba(239,68,68,0.3)',marginBottom:'20px'}}>
            <Trophy size={12} color="#ef4444" fill="#ef4444" />
            <span style={{fontSize:'0.7rem',fontWeight:700,color:'#ef4444',letterSpacing:'0.04em',textTransform:'uppercase'}}>India&apos;s #1 Online Gaming App</span>
          </div>

          {/* H1 */}
          <h1 style={{fontSize:'clamp(2rem,8vw,5rem)',fontWeight:900,lineHeight:1.08,marginBottom:'16px',letterSpacing:'-0.03em'}}>
            <span style={{display:'block',color:'#ffffff'}}>Win Real Cash</span>
            <span style={{display:'block',color:'#e63946'}}>with IN7 Game</span>
          </h1>

          {/* Subtext */}
          <p style={{fontSize:'clamp(0.9rem,2.5vw,1.15rem)',color:'rgba(255,255,255,0.6)',maxWidth:'560px',margin:'0 auto 28px',lineHeight:1.65}}>
            Download IN7 APK free. Register, get <strong style={{color:'#e63946'}}>₹777 bonus</strong> straight to your wallet. Play skill games, win and withdraw to UPI in seconds. 18+ entertainment app.
          </p>

          {/* CTAs — stack on mobile, row on wider */}
          <div className="hero-ctas">
            <DownloadButton text="Download IN7 Free" size="lg" />
            <Link
              href="/how-to-register"
              style={{display:'inline-flex',alignItems:'center',gap:'8px',padding:'14px 24px',borderRadius:'12px',background:'rgba(255,255,255,0.06)',border:'1px solid rgba(255,255,255,0.15)',color:'rgba(255,255,255,0.85)',textDecoration:'none',fontWeight:600,fontSize:'0.95rem',transition:'all 0.2s'}}
            >
              <Smartphone size={17} />
              How to Register
            </Link>
          </div>

          {/* Stats row */}
          <div className="stats-row" style={{display:'flex',flexWrap:'wrap',justifyContent:'center',gap:'0',borderRadius:'16px',overflow:'hidden',border:'1px solid rgba(255,255,255,0.08)',background:'rgba(255,255,255,0.03)',backdropFilter:'blur(12px)'}}>
            {[
              { icon: <Users size={17} color="#ef4444" />,       val: '50L+',    label: 'Active Players' },
              { icon: <IndianRupee size={17} color="#e63946" />, val: '₹777',    label: 'Signup Bonus' },
              { icon: <Zap size={17} color="#e63946" />,         val: 'Instant',  label: 'Withdrawal' },
              { icon: <Star size={17} color="#e63946" fill="#e63946" />, val: '4.8/5', label: 'User Rating' },
            ].map(({ icon, val, label }, i, arr) => (
              <div key={label} style={{
                flex:'1 1 130px',
                padding:'16px 10px',
                textAlign:'center',
                borderRight: i < arr.length - 1 ? '1px solid rgba(255,255,255,0.07)' : 'none',
              }}>
                <div style={{display:'flex',justifyContent:'center',marginBottom:'5px'}}>{icon}</div>
                <div style={{fontSize:'clamp(1rem,3vw,1.3rem)',fontWeight:900,color:'#fff',lineHeight:1}}>{val}</div>
                <div style={{fontSize:'0.68rem',color:'rgba(255,255,255,0.4)',marginTop:'3px',fontWeight:500}}>{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Features Grid ── */}
      <section className="py-10 sm:py-16 px-4 max-w-6xl mx-auto">
        <h2 className="section-h2 text-3xl font-black text-center mb-2">Why Choose <span style={{color:'#e63946'}}>IN7 Game?</span></h2>
        <p className="text-white/50 text-center text-sm sm:text-base mb-8 sm:mb-10">What makes IN7 different from other gaming apps</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {[
            { icon: <Zap size={30} style={{color:'#e63946'}} />, title: 'Instant UPI Withdrawal', desc: 'Winnings go straight to PhonePe, GPay, Paytm or your bank in seconds. ₹100 minimum. Works at 2 AM too.' },
            { icon: <Gamepad2 size={30} style={{color:'#e63946'}} />, title: '20+ Games', desc: 'Skill games, number prediction, fast-win rounds, all in one app. Entry from ₹10. New games added regularly.' },
            { icon: <Gift size={30} style={{color:'#e63946'}} />, title: '₹777 Signup Bonus', desc: 'Register, verify OTP and ₹777 lands in your wallet automatically. No deposit, no code needed.' },
            { icon: <Shield size={30} style={{color:'#e63946'}} />, title: 'SSL Encrypted', desc: 'Every transaction and your personal data is encrypted. Nothing shared with third parties.' },
            { icon: <Users size={30} style={{color:'#e63946'}} />, title: 'Referral Bonus', desc: 'Invite friends, they register and play, you earn a bonus. Find your referral link in the profile section.' },
            { icon: <Clock size={30} style={{color:'#e63946'}} />, title: 'Always Online', desc: 'Servers run 24/7. Play at any time: morning, midnight, it doesn\'t matter. Practically zero downtime.' },
          ].map(f => (
            <div key={f.title} className="glass p-4 sm:p-6 rounded-xl hover:border-red-500/30 transition-all" style={{border:'1px solid rgba(255,255,255,0.1)'}}>
              <div className="mb-2 sm:mb-3">{f.icon}</div>
              <h3 className="font-bold text-base sm:text-lg mb-1 sm:mb-2 text-red-500">{f.title}</h3>
              <p className="text-white/60 text-xs sm:text-sm">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── How to Download ── */}
      <section style={{background:'rgba(230,57,70,0.03)', borderTop:'1px solid rgba(230,57,70,0.1)', borderBottom:'1px solid rgba(230,57,70,0.1)'}} className="py-10 sm:py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="section-h2 text-3xl font-black mb-2">How to <span style={{color:'#e63946'}}>Download IN7 Game</span></h2>
          <p className="text-white/50 text-sm sm:text-base mb-8 sm:mb-10">Download in7 apk in just 3 simple steps – takes under 2 minutes!</p>
          <div className="grid sm:grid-cols-3 gap-6 sm:gap-8 mb-8 sm:mb-10">
            {[
              { num: '1', title: 'Click Download', desc: 'Tap the Download button below. The IN7 APK file (25-30MB) will start downloading to your phone.' },
              { num: '2', title: 'Enable Install', desc: 'Go to Settings → Security → Enable "Install from Unknown Sources" to allow APK installation.' },
              { num: '3', title: 'Install & Win', desc: 'Open the downloaded APK, install it, register with your mobile number, and claim your ₹777 bonus!' },
            ].map(step => (
              <div key={step.num} className="relative">
                <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full mx-auto mb-3 sm:mb-4 flex items-center justify-center text-xl sm:text-2xl font-black text-black" style={{background:'linear-gradient(135deg, #e63946, #c1121f)'}}>
                  {step.num}
                </div>
                <h3 className="font-bold text-base sm:text-lg mb-1 sm:mb-2 text-red-500">{step.title}</h3>
                <p className="text-white/60 text-xs sm:text-sm">{step.desc}</p>
              </div>
            ))}
          </div>
          <DownloadButton text="Download IN7 APK Now – Free" size="lg" />
        </div>
      </section>

      {/* ── Game Info Table ── */}
      <section className="py-10 sm:py-16 px-4 max-w-4xl mx-auto">
        <h2 className="section-h2 text-3xl font-black text-center mb-2">IN7 Game <span style={{color:'#e63946'}}>Details</span></h2>
        <p className="text-white/50 text-center text-sm sm:text-base mb-6 sm:mb-8">Complete in7 game app specifications</p>
        <div className="glass rounded-2xl overflow-hidden">
          <table className="w-full info-table">
            <tbody>
              {[
                ['App Name', 'IN7 Game'],
                ['Version', 'Latest 2025 / 2026'],
                ['Size', '25–30 MB (Approx.)'],
                ['Category', 'Real Money Gaming App'],
                ['Platform', 'Android (APK)'],
                ['Signup Bonus', '₹777 (Available)'],
                ['Referral Bonus', 'Yes – Earn per friend'],
                ['Withdrawal Method', 'UPI / Bank Transfer'],
                ['Min Withdrawal', '₹100'],
                ['Payment Speed', 'Instant (Seconds)'],
                ['User Rating', '4.8 / 5'],
                ['Security', '100% Encrypted'],
                ['Support', '24×7 Customer Support'],
                ['Age Requirement', '18+ Only'],
                ['Official Website', 'in7co.in'],
              ].map(([title, detail], i) => (
                <tr key={title} style={{background: i % 2 === 0 ? 'rgba(255,255,255,0.03)' : 'transparent'}}>
                  <td className="font-semibold text-red-500 w-1/2">{title}</td>
                  <td className="text-white/80">{detail}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* ── How to Earn ── */}
      <section style={{background:'rgba(230,57,70,0.03)', borderTop:'1px solid rgba(230,57,70,0.1)', borderBottom:'1px solid rgba(230,57,70,0.1)'}} className="py-10 sm:py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="section-h2 text-3xl font-black text-center mb-2">How to <span style={{color:'#e63946'}}>Earn Money</span> Using IN7 Game</h2>
          <p className="text-white/50 text-center text-sm sm:text-base mb-8 sm:mb-10">Multiple ways to earn on IN7, not just playing games</p>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6">
            {[
              { icon: <TrendingUp size={28} style={{color:'#e63946'}} />, title: 'Play & Win', desc: 'Pick a game, put in entry amount, win and it goes to your wallet. Different entry amounts for different budgets.' },
              { icon: <Users size={28} style={{color:'#e63946'}} />, title: 'Referral Bonus', desc: 'Share your referral link, friends join and play, you earn a bonus each time. Link is in your profile.' },
              { icon: <CheckCircle size={28} style={{color:'#e63946'}} />, title: 'Daily Tasks', desc: 'Small daily tasks give you extra coins and cash rewards. Takes a few minutes each day.' },
              { icon: <Star size={28} style={{color:'#e63946'}} />, title: 'Events & Bonuses', desc: 'Festival events, seasonal tournaments with bigger reward pools. Diwali and New Year events especially.' },
            ].map(e => (
              <div key={e.title} className="glass earn-card rounded-xl text-center">
                <div className="flex justify-center mb-2">{e.icon}</div>
                <h3 className="font-bold text-sm sm:text-base mb-1 sm:mb-2 text-red-500">{e.title}</h3>
                <p className="text-white/60 text-xs sm:text-sm">{e.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Withdrawal Process ── */}
      <section className="py-10 sm:py-16 px-4 max-w-4xl mx-auto">
        <h2 className="section-h2 text-3xl font-black text-center mb-2">IN7 Game <span style={{color:'#e63946'}}>Withdrawal Process</span></h2>
        <p className="text-white/50 text-center text-sm sm:text-base mb-8 sm:mb-10">Withdraw your IN7 winnings in just 5 steps – instant to your bank/UPI!</p>
        <div className="space-y-3 sm:space-y-4">
          {[
            ['Open Wallet Section', 'Open the IN7 Game app and go to the Wallet or Withdraw section from the menu.'],
            ['Click Withdraw', 'Tap on the "Withdraw" button to initiate a new withdrawal request.'],
            ['Enter Amount', 'Enter the amount you wish to withdraw. Minimum withdrawal is ₹100.'],
            ['Select Method', 'Choose your preferred withdrawal method: UPI app (PhonePe, GPay, Paytm) or Bank Transfer.'],
            ['Confirm & Receive', 'Confirm the withdrawal. In most cases, money arrives within seconds!'],
          ].map(([title, desc], i) => (
            <div key={title} className="glass rounded-xl flex items-start" style={{padding:'14px', gap:'14px'}}>
              <div style={{
                width:'38px', height:'38px', minWidth:'38px', borderRadius:'50%',
                display:'flex', alignItems:'center', justifyContent:'center',
                fontWeight:900, color:'#000', fontSize:'1rem', flexShrink:0,
                background:'linear-gradient(135deg, #e63946, #c1121f)',
              }}>
                {i + 1}
              </div>
              <div>
                <h3 className="font-bold text-sm sm:text-base text-red-500 mb-1">{title}</h3>
                <p className="text-white/60 text-xs sm:text-sm">{desc}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-6 sm:mt-8">
          <DownloadButton text="Start Earning – Download IN7" size="lg" />
        </div>
      </section>

      {/* ── Screenshots ── */}
      <section style={{background:'rgba(230,57,70,0.03)', borderTop:'1px solid rgba(230,57,70,0.1)'}} className="py-10 sm:py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="section-h2 text-3xl font-black text-center mb-2">IN7 Game <span style={{color:'#e63946'}}>Screenshots</span></h2>
          <p className="text-white/50 text-center text-sm sm:text-base mb-8 sm:mb-10">See IN7 game online in action</p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 max-w-2xl sm:max-w-none mx-auto">
            {[
              { src: '/in7-game-app-screenshot.jpeg', alt: 'IN7 Game App Screenshot - Game Interface' },
              { src: '/in7-game-spin-wheel.jpeg', alt: 'IN7 Game Online - Earn Real Cash' },
              { src: '/in7-game-bonus-offer.jpeg', alt: 'IN7 APK - Withdrawal Process' },
            ].map(img => (
              <Image
                key={img.src}
                src={img.src}
                alt={img.alt}
                width={300}
                height={400}
                className="screenshot-img"
                style={{border:'1px solid rgba(230,57,70,0.2)'}}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="py-10 sm:py-16 px-4 max-w-3xl mx-auto">
        <h2 className="section-h2 text-3xl font-black text-center mb-2">Frequently Asked <span style={{color:'#e63946'}}>Questions</span></h2>
        <p className="text-white/50 text-center text-sm sm:text-base mb-8 sm:mb-10">Everything you need to know about IN7 game online</p>
        <FAQSection faqs={faqs} />
      </section>

      {/* ── Final CTA ── */}
      <section
        style={{background:'linear-gradient(135deg, #1a0f00, #0a0a0f)', border:'1px solid rgba(230,57,70,0.3)'}}
        className="cta-section px-4 text-center"
      >
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-black mb-3 sm:mb-4">
          Ready to Win? <span style={{color:'#e63946'}}>Download IN7 Now!</span>
        </h2>
        <p className="text-white/60 text-sm sm:text-base mb-5 sm:mb-6 max-w-xl mx-auto">Download the free APK, register in 2 minutes, get ₹777 bonus. No deposit needed. 18+ only. Play responsibly.</p>
        <DownloadButton text="Download IN7 Free + Get ₹777" size="lg" />
        <p className="text-white/40 text-xs mt-3 sm:mt-4">18+ Only | Entertainment Purpose | Responsible Gaming | in7co.in</p>
      </section>

      {/* ── SCHEMAS ── */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify([
        {
          "@context": "https://schema.org",
          "@type": "WebSite",
          "name": "IN7 Game",
          "alternateName": ["in 7", "in7 apps", "ln7", "aaiae", "i am 7 game", "in7 com game"],
          "url": "https://www.in7co.in",
          "description": "India's #1 online earning game app. Download IN7 APK, get ₹777 bonus, play & win real cash.",
        },
        {
          "@context": "https://schema.org",
          "@type": ["SoftwareApplication", "MobileApplication"],
          "name": "IN7 Game",
          "alternateName": ["in7 apps", "in7 app", "in 7 app", "in7 com game", "paise jitne wala game"],
          "operatingSystem": "Android",
          "applicationCategory": "GameApplication",
          "offers": { "@type": "Offer", "price": "0", "priceCurrency": "INR" },
          "aggregateRating": { "@type": "AggregateRating", "ratingValue": "4.8", "ratingCount": "50000", "bestRating": "5" },
          "description": "IN7 Game – India's top paise jitne wala game. Download APK free. ₹777 bonus. UPI withdrawal games. 50L+ players.",
          "url": "https://www.in7co.in",
          "downloadUrl": "https://www.in7co.in/in7-game-download",
          "screenshot": "https://www.in7co.in/in7-game-banner.jpeg",
        },
        {
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "IN7 Game",
          "url": "https://www.in7co.in",
          "logo": "https://www.in7co.in/in7-game-logo.jpg",
          "contactPoint": { "@type": "ContactPoint", "contactType": "customer support", "availableLanguage": ["English", "Hindi"] },
          "sameAs": ["https://www.in7co.in"],
        },
        {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": faqs.map(f => ({
            "@type": "Question",
            "name": f.q,
            "acceptedAnswer": { "@type": "Answer", "text": f.a },
          })),
        },
      ]) }} />
    </>
  );
}
