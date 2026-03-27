import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import DownloadButton from '@/components/DownloadButton';
import FAQSection from '@/components/FAQSection';
import { Download, CheckCircle, Zap, Shield, Smartphone, Globe, Star, Users, IndianRupee } from 'lucide-react';

export const metadata: Metadata = {
  title: 'IN7 Game Online APK – in7 game online apk Free 2026',
  description: 'Download IN7 game online APK for Android free. in7 game online apk, in7 com game online – install in 2 min, get ₹777 bonus & withdraw via UPI. Official: in7co.in',
  keywords: ['in7 game online apk', 'in7 game online', 'in7 online apk', 'in7 com game online', 'in7 online game apk', 'in7 game online download', 'in7 game apk online'],
  alternates: { canonical: 'https://in7co.in/in7-game-online-apk' },
  openGraph: {
    title: 'IN7 Game Online APK – Download Free 2026 | in7 game online',
    description: 'Download IN7 game online APK free. ₹777 bonus, instant UPI withdrawal. Official in7 online apk from in7co.in.',
    url: 'https://in7co.in/in7-game-online-apk',
    images: [{ url: '/6c6ea394-9f54-4f32-9e79-dc698241cd44.jpeg', width: 1200, height: 630, alt: 'IN7 Game Online APK Download' }],
  },
};

const faqs = [
  {
    q: 'IN7 game online APK kya hai?',
    a: 'IN7 game online APK ka matlab hai IN7 Game ka Android app file jo in7co.in se download hoti hai. Install karo, register karo aur seedha online games khelo, koi browser ki zaroorat nahi.',
  },
  {
    q: 'in7 game online apk download kaise kare?',
    a: 'in7co.in pe jao → Download button dabao → APK download hogi (25-30MB) → Settings me Unknown Sources ON karo → Install karo → Register karo. 2 minute se kam.',
  },
  {
    q: 'IN7 online game me kaun se games hain?',
    a: 'Skill games, number prediction, fast-win rounds, casual games. Sab online real-time mein khelte hain. Entry ₹10 se shuru hoti hai. Jitne wala paisa wallet me jaata hai.',
  },
  {
    q: 'Kya IN7 game online real paise deta hai?',
    a: 'Haan, users UPI me withdraw karte hain: PhonePe, GPay, Paytm ya bank. Minimum ₹100. Entertainment platform hai, jeetna guaranteed nahi hota. Responsible gaming zaroori hai.',
  },
  {
    q: 'IN7 game online APK safe hai?',
    a: 'Official in7co.in se download kiya hua APK safe hai. SSL encrypted, koi malware nahi. Kisi aur source se download mat karo.',
  },
  {
    q: 'IN7 online aur IN7 app me kya fark hai?',
    a: 'Koi fark nahi, ek hi platform hai. "IN7 game online" aur "IN7 app" dono in7co.in ke APK ko refer karte hain. App install karo aur online games seedha app se khelo.',
  },
];

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://in7co.in' },
    { '@type': 'ListItem', position: 2, name: 'IN7 Game Online APK', item: 'https://in7co.in/in7-game-online-apk' },
  ],
};

const softwareSchema = {
  '@context': 'https://schema.org',
  '@type': ['SoftwareApplication', 'MobileApplication'],
  name: 'IN7 Game Online APK',
  alternateName: ['in7 game online', 'in7 online apk', 'in7 com game online'],
  operatingSystem: 'Android',
  applicationCategory: 'GameApplication',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'INR' },
  aggregateRating: { '@type': 'AggregateRating', ratingValue: '4.8', ratingCount: '50000', bestRating: '5' },
  downloadUrl: 'https://in7co.in/in7-game-online-apk',
  url: 'https://in7co.in',
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((f) => ({
    '@type': 'Question',
    name: f.q,
    acceptedAnswer: { '@type': 'Answer', text: f.a },
  })),
};

export default function In7GameOnlineApk() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* Breadcrumb */}
      <nav className="max-w-6xl mx-auto px-4 py-3 text-sm text-white/50">
        <Link href="/" className="hover:text-red-500 transition-colors">Home</Link>
        <span className="mx-2">›</span>
        <span style={{ color: '#e63946' }}>IN7 Game Online APK</span>
      </nav>

      {/* Hero */}
      <section
        style={{ background: 'linear-gradient(135deg, #0a0a0f 0%, #0d1117 60%, #0a0a1a 100%)', minHeight: '60vh' }}
        className="flex items-center justify-center px-4 py-16 text-center relative overflow-hidden"
      >
        <div style={{ position: 'absolute', top: '10%', left: '50%', transform: 'translateX(-50%)', width: 'min(700px,110vw)', height: '420px', background: 'radial-gradient(ellipse at center, rgba(230,57,70,0.12) 0%, transparent 70%)', filter: 'blur(50px)' }} />
        <div style={{ position: 'absolute', inset: 0, backgroundImage: 'linear-gradient(rgba(255,255,255,0.016) 1px, transparent 1px),linear-gradient(90deg, rgba(255,255,255,0.016) 1px, transparent 1px)', backgroundSize: '60px 60px', maskImage: 'radial-gradient(ellipse 80% 80% at 50% 50%, black 20%, transparent 100%)' }} />

        <div className="relative z-10 max-w-3xl mx-auto hero-inner">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold mb-4" style={{ background: 'rgba(230,57,70,0.1)', border: '1px solid rgba(230,57,70,0.3)', color: '#e63946' }}>
            <Globe size={12} color="#e63946" /> Official IN7 Game Online APK 2026
          </div>

          <h1 style={{ fontSize: 'clamp(2rem, 7.5vw, 4.5rem)', fontWeight: 900, lineHeight: 1.08, marginBottom: '16px', letterSpacing: '-0.03em' }}>
            <span style={{ display: 'block', color: '#ffffff' }}>IN7 Game Online APK</span>
            <span style={{ display: 'block', color: '#e63946' }}>Download Free for Android</span>
          </h1>

          <p style={{ fontSize: 'clamp(0.9rem, 2.4vw, 1.12rem)', color: 'rgba(255,255,255,0.62)', maxWidth: '580px', margin: '0 auto 28px', lineHeight: 1.7 }}>
            Download the official <strong style={{ color: '#e63946' }}>IN7 game online APK</strong>. Install on any Android phone, register in 2 minutes and get ₹777 bonus. Play online games and withdraw winnings to UPI instantly. Entertainment app, 18+ only.
          </p>

          <div className="hero-ctas">
            <DownloadButton text="Download IN7 Online APK Free" size="lg" />
            <Link
              href="/in7-game-download"
              style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '14px 24px', borderRadius: '12px', background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.15)', color: 'rgba(255,255,255,0.85)', textDecoration: 'none', fontWeight: 600, fontSize: '0.95rem' }}
            >
              <Download size={17} /> Download Guide
            </Link>
          </div>

          {/* Stats */}
          <div className="stats-row" style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', borderRadius: '16px', overflow: 'hidden', border: '1px solid rgba(255,255,255,0.08)', background: 'rgba(255,255,255,0.03)', backdropFilter: 'blur(12px)', marginTop: '32px' }}>
            {[
              { icon: <Users size={17} color="#e63946" />, val: '50L+', label: 'Online Players' },
              { icon: <IndianRupee size={17} color="#e63946" />, val: '₹777', label: 'Signup Bonus' },
              { icon: <Zap size={17} color="#e63946" />, val: 'Instant', label: 'UPI Withdrawal' },
              { icon: <Star size={17} color="#e63946" fill="#e63946" />, val: '4.8/5', label: 'App Rating' },
            ].map(({ icon, val, label }, i, arr) => (
              <div key={label} style={{ flex: '1 1 130px', padding: '16px 10px', textAlign: 'center', borderRight: i < arr.length - 1 ? '1px solid rgba(255,255,255,0.07)' : 'none' }}>
                <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '5px' }}>{icon}</div>
                <div style={{ fontSize: 'clamp(1rem,3vw,1.3rem)', fontWeight: 900, color: '#fff', lineHeight: 1 }}>{val}</div>
                <div style={{ fontSize: '0.68rem', color: 'rgba(255,255,255,0.4)', marginTop: '3px', fontWeight: 500 }}>{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What is IN7 Game Online APK */}
      <section className="py-10 sm:py-16 px-4 max-w-4xl mx-auto">
        <h2 className="section-h2 font-black text-center mb-2">
          IN7 Game Online APK: <span style={{ color: '#e63946' }}>What It Is</span>
        </h2>
        <p className="text-white/50 text-center text-sm sm:text-base mb-8">
          Everything you need to know about the in7 game online apk before downloading
        </p>
        <div className="glass p-6 sm:p-8 rounded-2xl space-y-4 text-white/70 leading-relaxed">
          <p>
            The <strong style={{ color: '#e63946' }}>IN7 game online APK</strong> is the Android app file for IN7 Game, the gaming platform available at in7co.in. The term &ldquo;online apk&rdquo; simply means you download the APK and then play games online through the app. No browser needed once it&apos;s installed.
          </p>
          <p>
            It&apos;s the same platform as in7co.in, just packaged as a native Android app. You get faster load times, push notifications for your winnings, and a smoother experience than the mobile browser version.
          </p>
          <p>
            File size is 25-30MB. Works on Android 5.0 and above, including older budget phones. The APK installs directly. It&apos;s not on the Play Store because Google&apos;s policies don&apos;t allow real-money earning apps on the store in India.
          </p>
        </div>
      </section>

      {/* Download Steps */}
      <section style={{ background: 'rgba(230,57,70,0.03)', borderTop: '1px solid rgba(230,57,70,0.1)', borderBottom: '1px solid rgba(230,57,70,0.1)' }} className="py-10 sm:py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="section-h2 font-black text-center mb-2">
            How to Download <span style={{ color: '#e63946' }}>IN7 Game Online APK</span>
          </h2>
          <p className="text-white/50 text-center text-sm sm:text-base mb-8">4 steps, done in under 2 minutes</p>
          <div className="space-y-3 sm:space-y-4">
            {[
              { num: '1', title: 'Go to in7co.in', desc: 'Open your Android browser and visit in7co.in, the only official source for the IN7 online APK. Avoid any other site claiming to offer it.' },
              { num: '2', title: 'Tap Download & Save the APK', desc: 'Hit the Download button. The APK file (25-30MB) saves to your Downloads folder. Takes about 30-60 seconds on a 4G connection.' },
              { num: '3', title: 'Enable Unknown Sources & Install', desc: 'Go to Settings → Security → enable "Install Unknown Apps". Then open the downloaded APK and tap Install. Takes about 15 seconds.' },
              { num: '4', title: 'Register & Get ₹777', desc: 'Open the IN7 app, tap Register, enter your mobile number, verify OTP, set password. ₹777 bonus lands in your wallet instantly.' },
            ].map((step) => (
              <div key={step.num} className="glass rounded-xl flex items-start hover:border-red-500/30 transition-all" style={{ padding: '14px', gap: '14px' }}>
                <div style={{ width: '38px', height: '38px', minWidth: '38px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 900, color: '#000', fontSize: '1rem', flexShrink: 0, background: 'linear-gradient(135deg, #e63946, #c1121f)' }}>
                  {step.num}
                </div>
                <div>
                  <h3 className="font-bold text-sm sm:text-base text-red-500 mb-1">{step.title}</h3>
                  <p className="text-white/60 text-xs sm:text-sm">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-6 sm:mt-8">
            <DownloadButton text="Download IN7 Online APK Now" size="lg" />
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-10 sm:py-16 px-4 max-w-5xl mx-auto">
        <h2 className="section-h2 font-black text-center mb-2">
          IN7 Online APK: <span style={{ color: '#e63946' }}>Key Features</span>
        </h2>
        <p className="text-white/50 text-center text-sm sm:text-base mb-8">What you get after installing the IN7 game online APK</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {[
            { icon: <Smartphone size={28} style={{ color: '#e63946' }} />, title: 'Native App Experience', desc: 'Faster than browser. Push notifications for winnings and bonuses. Better performance on all Android devices.' },
            { icon: <Zap size={28} style={{ color: '#e63946' }} />, title: 'Instant UPI Withdrawal', desc: 'Win online, withdraw to PhonePe, GPay or Paytm in seconds. ₹100 minimum. No waiting, no queues.' },
            { icon: <CheckCircle size={28} style={{ color: '#e63946' }} />, title: '20+ Online Games', desc: 'Skill games, number prediction, fast-win rounds, all played online in real time. Entry from ₹10.' },
            { icon: <Shield size={28} style={{ color: '#e63946' }} />, title: 'Encrypted & Safe', desc: 'All game sessions and transactions are SSL encrypted. Official APK from in7co.in only.' },
            { icon: <Star size={28} style={{ color: '#e63946' }} />, title: '₹777 Signup Bonus', desc: 'Register on the online APK and ₹777 hits your wallet automatically. No deposit, no conditions.' },
            { icon: <Globe size={28} style={{ color: '#e63946' }} />, title: 'Play Anywhere Online', desc: 'Works on 4G, 5G or WiFi. Optimized for mobile data, low data usage even during active game sessions.' },
          ].map((f) => (
            <div key={f.title} className="glass p-4 sm:p-6 rounded-xl hover:border-red-500/30 transition-all" style={{ border: '1px solid rgba(255,255,255,0.1)' }}>
              <div className="mb-3">{f.icon}</div>
              <h3 className="font-bold text-base sm:text-lg mb-2 text-red-500">{f.title}</h3>
              <p className="text-white/60 text-xs sm:text-sm">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* APK Details Table */}
      <section style={{ background: 'rgba(230,57,70,0.03)', borderTop: '1px solid rgba(230,57,70,0.1)', borderBottom: '1px solid rgba(230,57,70,0.1)' }} className="py-10 sm:py-16 px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="section-h2 font-black text-center mb-8">
            IN7 Online APK <span style={{ color: '#e63946' }}>Details</span>
          </h2>
          <div className="glass rounded-2xl overflow-hidden">
            <table className="w-full info-table">
              <tbody>
                {[
                  ['App Name', 'IN7 Game Online APK'],
                  ['Also Called', 'in7 game online, in7 online apk, in7 com game online'],
                  ['Platform', 'Android (APK – Direct Download)'],
                  ['Android Version', '5.0 or Higher'],
                  ['File Size', '25–30 MB'],
                  ['Download Source', 'in7co.in (Official Only)'],
                  ['Signup Bonus', '₹777 (Auto-credited on Register)'],
                  ['Min Withdrawal', '₹100'],
                  ['Withdrawal Method', 'UPI, PhonePe, GPay, Paytm, Bank'],
                  ['Withdrawal Speed', 'Instant'],
                  ['Age Requirement', '18+ Only'],
                ].map(([k, v], i) => (
                  <tr key={k} style={{ background: i % 2 === 0 ? 'rgba(255,255,255,0.03)' : 'transparent' }}>
                    <td className="font-semibold text-red-500 w-1/2">{k}</td>
                    <td className="text-white/80">{v}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Screenshots */}
      <section className="py-10 sm:py-16 px-4 max-w-5xl mx-auto">
        <h2 className="section-h2 font-black text-center mb-2">IN7 Game Online <span style={{ color: '#e63946' }}>Screenshots</span></h2>
        <p className="text-white/50 text-center text-sm mb-8">The IN7 online game interface, inside the APK</p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 max-w-2xl sm:max-w-none mx-auto">
          {[
            { src: '/WhatsApp-Image-2025-11-03-at-11.13.25-AM.jpeg', alt: 'IN7 Game Online APK – Game Interface' },
            { src: '/WhatsApp-Image-2025-11-03-at-11.14.16-AM.jpeg', alt: 'IN7 Online APK – Earn Real Cash' },
            { src: '/d383ff1d-74ba-4470-a7ae-fbe5dd44f551.jpeg', alt: 'IN7 Game Online – Withdrawal Screen' },
          ].map((img) => (
            <Image key={img.src} src={img.src} alt={img.alt} width={300} height={400} className="screenshot-img" style={{ border: '1px solid rgba(230,57,70,0.2)' }} />
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="py-10 sm:py-16 px-4 max-w-3xl mx-auto">
        <h2 className="section-h2 font-black text-center mb-2">IN7 Game Online APK <span style={{ color: '#e63946' }}>FAQs</span></h2>
        <p className="text-white/50 text-center text-sm sm:text-base mb-8">Common questions about in7 game online apk download and use</p>
        <FAQSection faqs={faqs} />
      </section>

      {/* Related Links */}
      <section className="py-8 px-4 max-w-3xl mx-auto">
        <h2 className="text-xl font-bold text-center mb-6 text-white/70">Related Pages</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {[
            { href: '/in7-game-download', label: '📥 Download Guide' },
            { href: '/how-to-register', label: '📝 How to Register' },
            { href: '/in7-game-app', label: '📱 IN7 Game App' },
            { href: '/in7-game-login', label: '🔑 Login Guide' },
          ].map((link) => (
            <Link key={link.href} href={link.href} className="glass p-3 rounded-xl text-center text-sm text-white/70 hover:text-red-400 transition-colors" style={{ border: '1px solid rgba(230,57,70,0.15)' }}>
              {link.label}
            </Link>
          ))}
        </div>
      </section>

      {/* Final CTA */}
      <section style={{ background: 'linear-gradient(135deg, #1a0f00, #0a0a0f)', border: '1px solid rgba(230,57,70,0.3)' }} className="cta-section px-4 text-center">
        <h2 className="text-2xl sm:text-3xl font-black mb-4">
          Download <span style={{ color: '#e63946' }}>IN7 Game Online APK</span> Free
        </h2>
        <p className="text-white/60 text-sm sm:text-base mb-5 max-w-xl mx-auto">
          Get the official in7 game online apk from in7co.in. Register in 2 minutes, get ₹777 bonus, play online games and withdraw to UPI instantly. 18+ only.
        </p>
        <DownloadButton text="Download IN7 Online APK – Free" size="lg" />
        <p className="text-white/40 text-xs mt-4">18+ Only | Entertainment Purpose | Responsible Gaming | in7co.in</p>
      </section>
    </>
  );
}
