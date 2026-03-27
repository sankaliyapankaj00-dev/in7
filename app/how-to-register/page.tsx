import type { Metadata } from 'next';
import Link from 'next/link';
import DownloadButton from '@/components/DownloadButton';
import FAQSection from '@/components/FAQSection';
import { Download, Smartphone, FileText, Phone, Lock, CheckCircle, Gift, Gamepad2, Wallet, Link2, Target, BarChart2 } from 'lucide-react';

const DL_URL = "https://acc.in7game.org/api/web/share/index.html?ic=AA6YDBPC&ts=1774462560&m=2&lang=hi&id=1";

export const metadata: Metadata = {
  title: 'IN7 Game Register – in7 login registration | ₹777 2026',
  description: 'IN7 login registration guide. in7 game login, in7 com login, in7 login steps. Create IN7 account in 2 mins. Get ₹777 free signup bonus. OTP verified instantly.',
  keywords: ['in7 login registration', 'in 7 game register', 'in7 game login', 'in7 login', 'in7 com login', 'in7 com game login', 'in 7 game login download', 'how to register in7 game', 'in7 registration', 'in7 signup'],
  alternates: { canonical: 'https://in7co.in/how-to-register' },
  openGraph: {
    title: 'IN7 Game Register – in7 login registration | ₹777',
    description: 'in7 login registration, in7 com login guide. Register on IN7 in 2 minutes. Get ₹777 free bonus instantly.',
    url: 'https://in7co.in/how-to-register',
    images: [{ url: '/in7-game-banner.jpeg', width: 1200, height: 630, alt: 'IN7 Game Login Registration Guide' }],
  },
};

const faqs = [
  { q: "IN7 registration me kitna time lagta hai?", a: "2 minute se kam. Mobile number dalo, OTP verify karo, password set karo – bas. ₹777 bonus turant aa jaata hai." },
  { q: "Kya mobile number zaruri hai IN7 registration ke liye?", a: "Haan, valid Indian mobile number chahiye – OTP usi par aata hai. Ek number pe sirf ek account banta hai." },
  { q: "IN7 register karne ke liye kaunse documents chahiye?", a: "Basic registration ke liye sirf mobile number. Withdrawal limits badhane ya KYC ke liye Aadhaar ya PAN card ki zaroorat pad sakti hai." },
  { q: "Ek se zyada IN7 accounts bana sakte hain kya?", a: "Nahi. Ek mobile number pe ek hi account allowed hai. Multiple accounts banane se permanently ban hota hai." },
  { q: "OTP nahi aaya – kya karu?", a: "Pehle 60 seconds ruko. Nahi aaya toh Resend OTP tap karo. Number sahi check karo. Dual SIM hai toh correct SIM dekho. SMS inbox full toh nahi? Network signal bhi check karo." },
  { q: "₹777 bonus kab milta hai?", a: "Registration complete hote hi – manually kuch nahi karna. Wallet section me turant dikh jaata hai." },
  { q: "Registered mobile number change kar sakte hain?", a: "Seedha in-app support ya email se contact karo. Verification ke baad change possible hai, par process thoda time leta hai." },
  { q: "Strong password kaise banaye IN7 ke liye?", a: "8+ characters, ek uppercase, ek number, ek symbol – jaise Game@2026. Kisi ke saath share mat karna, koi bhi support agent bhi kabhi password nahi maangta." },
];

export default function HowToRegister() {
  return (
    <>
      {/* Breadcrumb */}
      <nav className="max-w-6xl mx-auto px-4 py-3 text-sm text-white/50">
        <Link href="/" className="hover:text-red-500 transition-colors">Home</Link>
        <span className="mx-2">›</span>
        <span className="text-red-500">How to Register</span>
      </nav>

      {/* Hero */}
      <section style={{background:'linear-gradient(135deg, #0a0a0f 0%, #0d1117 60%, #0a1a0f 100%)', minHeight:'50vh'}} className="flex items-center justify-center px-4 py-16 text-center relative overflow-hidden">
        <div style={{position:'absolute', top:'20%', left:'10%', width:'300px', height:'300px', background:'rgba(230,57,70,0.04)', borderRadius:'50%', filter:'blur(60px)'}}></div>
        <div className="max-w-3xl mx-auto relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold mb-4" style={{background:'rgba(230,57,70,0.08)', border:'1px solid rgba(230,57,70,0.3)', color:'#e63946'}}>
            <FileText size={14} style={{color:'#e63946'}} /> New Player Registration Guide
          </div>
          <h1 className="text-4xl md:text-5xl font-black mb-4 leading-tight">
            How to Register on
            <br /><span style={{color:'#e63946'}}>IN7 Game</span> –
            <br />Complete Guide 2026
          </h1>
          <p className="text-white/70 text-lg mb-8">
            Create your IN7 Game account in under 2 minutes. Follow this step-by-step registration guide and claim your ₹777 free signup bonus instantly!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <DownloadButton text="Download IN7 &amp; Register Free" size="lg" />
            <Link href="/in7-game-download" className="px-6 py-3 rounded-lg font-semibold text-white/80 hover:text-red-500 transition-all" style={{background:'rgba(255,255,255,0.08)', border:'1px solid rgba(255,255,255,0.15)'}}>
              Download Guide →
            </Link>
          </div>
        </div>
      </section>

      {/* Before You Register */}
      <section className="py-8 px-4 max-w-4xl mx-auto">
        <div className="glass p-6 rounded-2xl border border-red-500/20" style={{background:'rgba(230,57,70,0.04)'}}>
          <h2 className="text-xl font-bold mb-3 flex items-center gap-2" style={{color:'#e63946'}}>
            <FileText size={20} style={{color:'#e63946'}} /> Before You Register – Requirements
          </h2>
          <div className="grid md:grid-cols-3 gap-4">
            {[
              { icon: <Smartphone size={24} style={{color:'#e63946'}} />, title: 'Android Phone', desc: 'Android 5.0 or higher. IN7 Game APK works on all budget and premium phones.' },
              { icon: <Phone size={24} style={{color:'#e63946'}} />, title: 'Mobile Number', desc: 'A valid Indian mobile number for OTP verification. One number = one account.' },
              { icon: <Download size={24} style={{color:'#e63946'}} />, title: 'IN7 APK Installed', desc: 'Download and install IN7 Game APK from in7co.in before registering.' },
            ].map(r => (
              <div key={r.title} className="flex items-start gap-3">
                {r.icon}
                <div>
                  <h3 className="font-bold text-sm text-white mb-1">{r.title}</h3>
                  <p className="text-white/60 text-xs">{r.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5 Steps Registration */}
      <section className="py-16 px-4 max-w-4xl mx-auto">
        <h2 className="text-3xl font-black text-center mb-2">IN7 Game <span style={{color:'#e63946'}}>Registration – 5 Easy Steps</span></h2>
        <p className="text-white/50 text-center mb-10">Follow these steps carefully to create your IN7 account and claim your bonus</p>
        <div className="space-y-6">
          {[
            {
              num: '1',
              icon: <Download size={18} style={{color:'#e63946'}} />,
              title: 'Step 1: Download IN7 Game APK',
              desc: 'First, download the IN7 Game APK from in7co.in. Enable "Install from Unknown Sources" in your Android Settings → Security, then install the APK. This takes about 1-2 minutes.',
              tip: 'Always download from the official in7co.in website to get the verified, safe APK.'
            },
            {
              num: '2',
              icon: <Smartphone size={18} style={{color:'#e63946'}} />,
              title: 'Step 2: Open IN7 App & Tap Register',
              desc: 'Launch the IN7 Game app on your Android phone. On the welcome screen, tap "Register" or "Sign Up". Do not tap Login if you are a new user.',
              tip: 'If you see a login screen, look for the "Register" or "New User" link below the login button.'
            },
            {
              num: '3',
              icon: <Phone size={18} style={{color:'#e63946'}} />,
              title: 'Step 3: Enter Your Mobile Number',
              desc: 'Enter your valid 10-digit Indian mobile number in the registration form. Make sure it is correct – this will be your primary login method. Tap "Get OTP" or "Send OTP".',
              tip: 'One mobile number can only be used for one IN7 account. Use your personal number.'
            },
            {
              num: '4',
              icon: <Lock size={18} style={{color:'#e63946'}} />,
              title: 'Step 4: Verify OTP',
              desc: 'You will receive a 4-6 digit OTP via SMS on your registered mobile number. Enter this OTP in the verification box. The OTP is valid for 60 seconds. If not received, tap "Resend OTP".',
              tip: 'Check your SMS inbox. If using dual SIM, ensure your correct SIM is selected.'
            },
            {
              num: '5',
              icon: <CheckCircle size={18} style={{color:'#e63946'}} />,
              title: 'Step 5: Set Password & Complete Profile',
              desc: 'Create a strong password (minimum 8 characters, include letters and numbers). Enter any referral code if you have one for extra bonus. Complete your profile details and tap Register. Your ₹777 bonus is instantly credited!',
              tip: 'Use a strong password like Game@2026. Note it down safely – never share with anyone.'
            },
          ].map(step => (
            <div key={step.num} className="glass p-4 sm:p-6 rounded-2xl hover:border-red-500/30 transition-all">
              <div className="flex items-start gap-3 sm:gap-4">
                <div style={{
                  width:'40px', height:'40px', minWidth:'40px', borderRadius:'50%',
                  display:'flex', alignItems:'center', justifyContent:'center',
                  fontWeight:900, color:'#000', fontSize:'1.1rem', flexShrink:0,
                  background:'linear-gradient(135deg, #e63946, #c1121f)',
                }}>
                  {step.num}
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-base sm:text-xl mb-1 sm:mb-2 text-red-500 flex items-center gap-2 flex-wrap">{step.icon} {step.title}</h3>
                  <p className="text-white/70 text-sm sm:text-base mb-2 sm:mb-3">{step.desc}</p>
                  <div className="glass p-3 rounded-lg border border-red-500/30" style={{background:'rgba(230,57,70,0.05)'}}>
                    <p className="text-red-400 text-sm"><strong>Tip:</strong> {step.tip}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-8">
          <DownloadButton text="Download IN7 &amp; Register Now" size="lg" />
        </div>
      </section>

      {/* After Registration */}
      <section style={{background:'rgba(230,57,70,0.03)', borderTop:'1px solid rgba(230,57,70,0.1)', borderBottom:'1px solid rgba(230,57,70,0.1)'}} className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-black text-center mb-2">What Happens <span style={{color:'#e63946'}}>After Registration?</span></h2>
          <p className="text-white/50 text-center mb-10">Here&apos;s what you get immediately after creating your IN7 Game account</p>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { icon: <Gift size={32} style={{color:'#e63946'}} />, title: '₹777 Signup Bonus', desc: 'Your ₹777 welcome bonus is automatically credited to your IN7 wallet. No action needed. Use it to play any game!' },
              { icon: <Gamepad2 size={32} style={{color:'#e63946'}} />, title: 'Full Game Access', desc: 'Instantly access all 20+ games on the IN7 platform. Browse the game lobby and start playing right away.' },
              { icon: <Wallet size={32} style={{color:'#e63946'}} />, title: 'Withdrawal Enabled', desc: 'Your account is ready for withdrawals after registration. Add UPI/bank details in settings to withdraw winnings.' },
              { icon: <Link2 size={32} style={{color:'#e63946'}} />, title: 'Referral Code', desc: 'Receive your unique IN7 referral code. Share it with friends to earn referral bonuses for every new player who joins.' },
              { icon: <Target size={32} style={{color:'#e63946'}} />, title: 'Daily Tasks Available', desc: 'Daily tasks and challenges are unlocked. Complete them every day for extra bonus coins and cash rewards.' },
              { icon: <BarChart2 size={32} style={{color:'#e63946'}} />, title: 'Profile Dashboard', desc: 'View your game history, earnings, withdrawals and statistics from your personal IN7 profile dashboard.' },
            ].map(item => (
              <div key={item.title} className="glass p-5 rounded-xl flex items-start gap-4">
                <div className="flex-shrink-0">{item.icon}</div>
                <div>
                  <h3 className="font-bold text-red-500 mb-1">{item.title}</h3>
                  <p className="text-white/60 text-sm">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Registration Tips */}
      <section className="py-16 px-4 max-w-4xl mx-auto">
        <h2 className="text-3xl font-black text-center mb-2">IN7 Registration <span style={{color:'#e63946'}}>Tips & Tricks</span></h2>
        <p className="text-white/50 text-center mb-10">Pro tips to make the most of your IN7 Game registration</p>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="glass p-6 rounded-xl border border-red-500/20" style={{background:'rgba(230,57,70,0.03)'}}>
            <h3 className="text-lg font-bold text-red-400 mb-4">Do&apos;s</h3>
            <ul className="space-y-3">
              {[
                'Use your real mobile number for OTP verification',
                'Create a strong, unique password and save it',
                'Enter a referral code if you have one for extra bonus',
                'Complete your profile for full feature access',
                'Enable notifications to get bonus alerts',
                'Verify your UPI/bank details early for fast withdrawals',
                'Download from the official in7co.in only',
              ].map(item => (
                <li key={item} className="flex items-start gap-2 text-sm text-white/70">
                  <CheckCircle size={14} style={{color:'#e63946', flexShrink:0, marginTop:'2px'}} /> {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="glass p-6 rounded-xl border border-red-500/20" style={{background:'rgba(255,0,0,0.03)'}}>
            <h3 className="text-lg font-bold text-red-400 mb-4">Don&apos;ts</h3>
            <ul className="space-y-3">
              {[
                "Do not use someone else's mobile number",
                'Do not create multiple accounts (one per person)',
                'Never share your password or OTP with anyone',
                "Don't use VPN during registration",
                "Don't enter fake personal details",
                'Do not download APK from unofficial sources',
                'Never share your referral bonus with strangers',
              ].map(item => (
                <li key={item} className="flex items-start gap-2 text-sm text-white/70">
                  <span className="text-red-400 font-bold flex-shrink-0">✗</span> {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 px-4 max-w-3xl mx-auto">
        <h2 className="text-3xl font-black text-center mb-2">Registration <span style={{color:'#e63946'}}>FAQs</span></h2>
        <p className="text-white/50 text-center mb-10">Common questions about IN7 Game registration</p>
        <FAQSection faqs={faqs} />
      </section>

      {/* CTA */}
      <section style={{background:'linear-gradient(135deg, #0a1a0f, #0a0a0f)', border:'1px solid rgba(230,57,70,0.3)'}} className="cta-section px-4 text-center">
        <h2 className="text-3xl font-black mb-4">
          Register on <span style={{color:'#e63946'}}>IN7 Game</span> &amp; Get ₹777!
        </h2>
        <p className="text-white/60 mb-6">Download IN7 APK, register in 2 minutes, and get ₹777 free bonus. Start winning today!</p>
        <DownloadButton text="Download IN7 &amp; Register Free" size="lg" />
        <p className="text-white/40 text-xs mt-4">18+ Only | Free Registration | ₹777 Bonus on Signup</p>
      </section>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify([
        {
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://in7co.in" },
            { "@type": "ListItem", "position": 2, "name": "How to Register on IN7 Game", "item": "https://in7co.in/how-to-register" },
          ],
        },
        {
          "@context": "https://schema.org",
          "@type": "HowTo",
          "name": "How to Register on IN7 Game",
          "description": "Step-by-step guide to register on IN7 Game (in7 login registration) and claim ₹777 signup bonus",
          "step": [
            { "@type": "HowToStep", "position": 1, "name": "Download IN7 APK", "text": "Download IN7 Game APK free from in7co.in. Enable Unknown Sources in Android Settings." },
            { "@type": "HowToStep", "position": 2, "name": "Open IN7 App & Tap Register", "text": "Launch IN7 Game app and tap Register or Sign Up." },
            { "@type": "HowToStep", "position": 3, "name": "Enter Mobile Number", "text": "Enter your valid 10-digit Indian mobile number and tap Get OTP." },
            { "@type": "HowToStep", "position": 4, "name": "Verify OTP", "text": "Enter the OTP received via SMS within 60 seconds." },
            { "@type": "HowToStep", "position": 5, "name": "Set Password & Get ₹777 Bonus", "text": "Create a strong password, complete profile, tap Register. ₹777 bonus credited instantly!" },
          ],
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
