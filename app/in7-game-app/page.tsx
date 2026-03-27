import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import DownloadButton from '@/components/DownloadButton';
import FAQSection from '@/components/FAQSection';
import { Gamepad2, Zap, Gift, Users, BarChart2, Bell, Shield, Clock, MessageCircle, Download, Smartphone, FileText, Wallet, Trophy } from 'lucide-react';

const DL_URL = "https://acc.in7game.org/api/web/share/index.html?ic=AA6YDBPC&ts=1774462560&m=2&lang=hi&id=1";

export const metadata: Metadata = {
  title: 'IN7 Game App – Download in7 apps APK Free for Android',
  description: 'IN7 Game App (in7 apps, in7 com app) – Download APK free. 20+ games, ₹777 bonus, instant UPI withdrawal. 18+ only. Official: in7co.in',
  keywords: ['in7 apps', 'in 7 apps', 'in7 com app', 'in7 app download', 'in 7 app', 'in7 game app', 'in7 com game online', 'in7 game online apk', 'in 7 game app', 'in7 com game', 'in7 online game'],
  alternates: { canonical: 'https://in7co.in/in7-game-app' },
  openGraph: {
    title: 'IN7 Game App – in7 apps | in7 com app | Android APK 2026',
    description: 'IN7 Game App – in7 apps, in7 com app. Download APK 2026. ₹777 bonus. 20+ games. Instant UPI withdrawal.',
    url: 'https://in7co.in/in7-game-app',
    images: [{ url: '/6c6ea394-9f54-4f32-9e79-dc698241cd44.jpeg', width: 1200, height: 630, alt: 'IN7 Game App – in7 apps' }],
  },
};

const faqs = [
  { q: "IN7 Game App kya hai?", a: "IN7 Game ek Android gaming app hai jo in7co.in se download hota hai. Multiple games hain, jeeto toh UPI me withdraw karo. Registration pe ₹777 bonus milta hai. Entertainment purpose ke liye hai, 18+ only." },
  { q: "IN7 Game app kaise use kare?", a: "APK download karo → register karo → ₹777 bonus lo → game lobby me game chuno → entry fee ke saath join karo → khelo. Winnings wallet me jaate hain, wahan se UPI me withdraw karo." },
  { q: "IN7 App me kaun kaun se features hain?", a: "20+ game categories, instant UPI withdrawal (PhonePe/GPay/Paytm/bank), referral program, daily tasks, push notifications, in-app chat support. Sab ek hi app me." },
  { q: "IN7 me paise kaise add kare?", a: "Wallet → Add Money → amount choose karo → payment method select karo (UPI/card/netbanking) → payment karo. Instantly wallet me credit hota hai." },
  { q: "IN7 App se withdrawal kaise kare?", a: "Wallet → Withdraw → amount enter karo (min ₹100) → UPI ya bank select karo → confirm karo. Normally seconds me aa jaata hai." },
  { q: "IN7 Game App India me legal hai?", a: "IN7 skill-based games ka entertainment platform hai. Sab users apne local state ke niyam check karein – kuch states me online real-money gaming restricted hai. 18+ compulsory hai." },
];

export default function In7GameApp() {
  return (
    <>
      {/* Breadcrumb */}
      <nav className="max-w-6xl mx-auto px-4 py-3 text-sm text-white/50">
        <Link href="/" className="hover:text-red-500 transition-colors">Home</Link>
        <span className="mx-2">›</span>
        <span className="text-red-500">IN7 Game App</span>
      </nav>

      {/* Hero */}
      <section style={{background:'linear-gradient(135deg, #0a0a0f 0%, #0d1117 60%, #0a0a1a 100%)', minHeight:'60vh'}} className="flex items-center px-4 py-16 relative overflow-hidden">
        <div style={{position:'absolute', top:'10%', right:'5%', width:'400px', height:'400px', background:'rgba(230,57,70,0.04)', borderRadius:'50%', filter:'blur(80px)'}}></div>
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center w-full">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold mb-4" style={{background:'rgba(230,57,70,0.1)', border:'1px solid rgba(230,57,70,0.3)', color:'#e63946'}}>
              <Smartphone size={14} style={{color:'#e63946'}} /> IN7 Game App – Android APK
            </div>
            <h1 className="text-4xl md:text-5xl font-black mb-4 leading-tight">
              <span style={{color:'#e63946'}}>IN7 Game App</span>
              <br />India&apos;s Best Online
              <br /><span style={{color:'#e63946'}}>Gaming Platform</span>
            </h1>
            <p className="text-white/70 text-lg mb-6">
              The IN7 Game app for Android. 20+ games, instant UPI withdrawal, and ₹777 on signup. Free download from in7co.in. Entertainment app, 18+ only.
            </p>
            <div className="flex flex-wrap gap-4 mb-6">
              <DownloadButton text="Download IN7 App Free" size="lg" />
              <Link href="/in7-game-download" className="px-6 py-3 rounded-lg font-semibold text-white/80 transition-all hover:text-red-500" style={{background:'rgba(255,255,255,0.08)', border:'1px solid rgba(255,255,255,0.15)'}}>
                Download Guide →
              </Link>
            </div>
            <div className="flex flex-wrap gap-6">
              {[['4.8★', 'App Rating'], ['50L+', 'Users'], ['20+', 'Games'], ['₹777', 'Bonus']].map(([v, l]) => (
                <div key={l} className="text-center">
                  <div className="font-bold text-lg text-red-500">{v}</div>
                  <div className="text-xs text-white/50">{l}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <Image
              src="/6c6ea394-9f54-4f32-9e79-dc698241cd44.jpeg"
              alt="IN7 Game App – Online Gaming Platform India"
              width={500} height={500}
              className="rounded-2xl w-full"
              style={{border:'2px solid rgba(230,57,70,0.3)'}}
              priority
            />
          </div>
        </div>
      </section>

      {/* App Stats Bar */}
      <section style={{background:'linear-gradient(90deg, #e63946, #c1121f)'}} className="py-4">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-8 text-center">
            {[['50 Lakh+', 'Active Users'], ['20+', 'Games Available'], ['₹777', 'Welcome Bonus'], ['Instant', 'Withdrawal'], ['100%', 'Secure'], ['24/7', 'Support']].map(([v, l]) => (
              <div key={l} className="text-black">
                <div className="font-black text-xl">{v}</div>
                <div className="text-xs font-medium opacity-70">{l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* App Features */}
      <section className="py-16 px-4 max-w-6xl mx-auto">
        <h2 className="text-3xl font-black text-center mb-2">IN7 Game App <span style={{color:'#e63946'}}>Features</span></h2>
        <p className="text-white/50 text-center mb-10">What&apos;s inside the IN7 Game app, feature by feature</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { icon: <Gamepad2 size={36} style={{color:'#e63946'}} />, title: '20+ Games', desc: 'Skill games, number prediction, fast-win rounds, casual games. Entry from ₹10. New games get added every month.' },
            { icon: <Zap size={36} style={{color:'#e63946'}} />, title: 'Instant UPI Withdrawal', desc: 'PhonePe, Google Pay, Paytm or bank. Transfer whenever you want in seconds. ₹100 minimum.' },
            { icon: <Gift size={36} style={{color:'#e63946'}} />, title: '₹777 Signup Bonus', desc: 'Register and ₹777 is auto-credited. No deposit, no code. Use it on any game right away.' },
            { icon: <Users size={36} style={{color:'#e63946'}} />, title: 'Referral System', desc: 'Share your referral link. Friend registers and plays, you get a bonus. Link is in the profile section.' },
            { icon: <BarChart2 size={36} style={{color:'#e63946'}} />, title: 'Live Leaderboards', desc: 'Compete with players across India. Top performers get extra daily and weekly reward bonuses.' },
            { icon: <Bell size={36} style={{color:'#e63946'}} />, title: 'Push Notifications', desc: 'Withdrawal done, bonus credited, new game launched. Instant push alerts for everything important.' },
            { icon: <Shield size={36} style={{color:'#e63946'}} />, title: 'SSL Encryption', desc: 'All transactions and personal data encrypted with 256-bit SSL. Nothing shared with third parties.' },
            { icon: <Clock size={36} style={{color:'#e63946'}} />, title: '24/7 Available', desc: 'Servers run round the clock. Play at any hour: morning, afternoon, midnight. Practically zero downtime.' },
            { icon: <MessageCircle size={36} style={{color:'#e63946'}} />, title: 'In-App Support', desc: 'Got a problem? Support chat is right inside the app. Responses usually come within minutes.' },
          ].map(f => (
            <div key={f.title} className="glass p-6 rounded-xl hover:border-red-500/30 transition-all">
              <div className="mb-3">{f.icon}</div>
              <h3 className="font-bold text-lg mb-2 text-red-500">{f.title}</h3>
              <p className="text-white/60 text-sm">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* How to Use */}
      <section style={{background:'rgba(230,57,70,0.03)', borderTop:'1px solid rgba(230,57,70,0.1)', borderBottom:'1px solid rgba(230,57,70,0.1)'}} className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-black text-center mb-2">How to Use <span style={{color:'#e63946'}}>IN7 Game App</span></h2>
          <p className="text-white/50 text-center mb-10">Complete guide to using all IN7 app features</p>
          <div className="space-y-4">
            {[
              { step: '1', icon: <Download size={20} style={{color:'#e63946'}} />, title: 'Download IN7 APK', desc: 'Click the download button on in7co.in to get the official IN7 Game APK. The file is ~25MB and downloads in seconds.' },
              { step: '2', icon: <Smartphone size={20} style={{color:'#e63946'}} />, title: 'Install the App', desc: 'Enable "Install from Unknown Sources" in Settings → Security, then open and install the downloaded APK file.' },
              { step: '3', icon: <FileText size={20} style={{color:'#e63946'}} />, title: 'Create Your Account', desc: 'Enter your mobile number, verify OTP, set a strong password and complete your profile. Your ₹777 bonus is credited instantly!' },
              { step: '4', icon: <Wallet size={20} style={{color:'#e63946'}} />, title: 'Add Money (Optional)', desc: 'Use your signup bonus to start, or add more funds via UPI, PhonePe, GPay, Paytm or net banking from the Wallet section.' },
              { step: '5', icon: <Gamepad2 size={20} style={{color:'#e63946'}} />, title: 'Choose & Play Games', desc: 'Browse the game lobby, pick a game category, select your entry amount, join a match and play to win!' },
              { step: '6', icon: <Trophy size={20} style={{color:'#e63946'}} />, title: 'Withdraw Winnings', desc: 'Go to Wallet → Withdraw → Enter amount → Select UPI or bank → Confirm. Your money arrives in seconds!' },
            ].map(item => (
              <div key={item.step} className="glass p-5 rounded-xl flex items-start gap-4">
                <div className="w-12 h-12 rounded-full flex-shrink-0 flex items-center justify-center font-black text-black text-lg" style={{background:'linear-gradient(135deg, #e63946, #c1121f)'}}>
                  {item.step}
                </div>
                <div>
                  <h3 className="font-bold text-red-500 mb-1 flex items-center gap-2">{item.icon} {item.title}</h3>
                  <p className="text-white/60 text-sm">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <DownloadButton text="Download IN7 Game App Now" size="lg" />
          </div>
        </div>
      </section>

      {/* Screenshots Gallery */}
      <section className="py-16 px-4 max-w-5xl mx-auto">
        <h2 className="text-3xl font-black text-center mb-2">IN7 App <span style={{color:'#e63946'}}>Screenshots</span></h2>
        <p className="text-white/50 text-center mb-10">See the IN7 Game App interface and features</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { src: '/WhatsApp-Image-2025-11-03-at-11.13.25-AM.jpeg', alt: 'IN7 Game App – Main Interface', caption: 'IN7 Game Lobby – Browse & Play' },
            { src: '/WhatsApp-Image-2025-11-03-at-11.14.16-AM.jpeg', alt: 'IN7 Game App – Earn Real Cash', caption: 'IN7 Earnings Dashboard' },
            { src: '/d383ff1d-74ba-4470-a7ae-fbe5dd44f551.jpeg', alt: 'IN7 Game App – Withdrawal Screen', caption: 'IN7 Instant Withdrawal' },
          ].map(img => (
            <div key={img.src} className="glass rounded-xl overflow-hidden">
              <Image src={img.src} alt={img.alt} width={300} height={400} className="w-full" style={{border:'none'}} />
              <p className="text-center text-sm text-red-500 font-medium p-3">{img.caption}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Full App Details Table */}
      <section style={{background:'rgba(230,57,70,0.03)', borderTop:'1px solid rgba(230,57,70,0.1)'}} className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-black text-center mb-8">IN7 Game App <span style={{color:'#e63946'}}>Full Specifications</span></h2>
          <div className="glass rounded-2xl overflow-hidden">
            <table className="w-full info-table">
              <tbody>
                {[
                  ['App Name', 'IN7 Game App'],
                  ['Also Known As', 'in7 apk, ien7, in7 online, in7 game online'],
                  ['Platform', 'Android (APK – Direct Download)'],
                  ['Android Version Required', '5.0 (Lollipop) or Higher'],
                  ['App Size', 'Approximately 25–30 MB'],
                  ['Latest Version', '2026 Updated Version'],
                  ['Number of Games', '20+ Game Categories'],
                  ['Languages Supported', 'Hindi, English, and Regional Languages'],
                  ['Signup Bonus', '₹777 (Instant on Registration)'],
                  ['Referral Program', 'Yes – Earn Per Referral'],
                  ['Min Deposit', 'Available – Multiple Payment Options'],
                  ['Max Withdrawal', 'No Limit (Standard KYC Required)'],
                  ['Min Withdrawal', '₹100'],
                  ['Withdrawal Methods', 'UPI, PhonePe, Google Pay, Paytm, Bank Transfer'],
                  ['Withdrawal Time', 'Instant (Within Seconds)'],
                  ['Security Protocol', '256-bit SSL Encryption'],
                  ['Customer Support', '24/7 In-App Chat & Email'],
                  ['Age Requirement', '18+ Years Only'],
                  ['Official Website', 'in7co.in'],
                ].map(([k, v], i) => (
                  <tr key={k} style={{background: i % 2 === 0 ? 'rgba(255,255,255,0.03)' : 'transparent'}}>
                    <td className="font-semibold text-red-500 w-1/2">{k}</td>
                    <td className="text-white/80">{v}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="text-center mt-8">
            <DownloadButton text="Download IN7 Game App Free" size="lg" />
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 px-4 max-w-3xl mx-auto">
        <h2 className="text-3xl font-black text-center mb-2">IN7 App <span style={{color:'#e63946'}}>FAQs</span></h2>
        <p className="text-white/50 text-center mb-10">Frequently asked questions about IN7 Game App</p>
        <FAQSection faqs={faqs} />
      </section>

      {/* CTA */}
      <section style={{background:'linear-gradient(135deg, #1a0f00, #0a0a0f)', border:'1px solid rgba(230,57,70,0.3)'}} className="cta-section px-4 text-center">
        <h2 className="text-3xl font-black mb-4">
          Download <span style={{color:'#e63946'}}>IN7 Game App</span> Today!
        </h2>
        <p className="text-white/60 mb-6">Get the #1 rated gaming app in India. ₹777 free bonus. Instant withdrawal. 100% free download.</p>
        <DownloadButton text="Download IN7 App – Get ₹777 Bonus" size="lg" />
        <p className="text-white/40 text-xs mt-4">18+ Only | For Entertainment | Safe APK Download</p>
      </section>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify([
        {
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://in7co.in" },
            { "@type": "ListItem", "position": 2, "name": "IN7 Game App", "item": "https://in7co.in/in7-game-app" },
          ],
        },
        {
          "@context": "https://schema.org",
          "@type": ["SoftwareApplication", "MobileApplication"],
          "name": "IN7 Game App",
          "alternateName": ["in7 apps", "in7 com app", "in 7 app", "in7 com game online"],
          "operatingSystem": "Android",
          "applicationCategory": "GameApplication",
          "offers": { "@type": "Offer", "price": "0", "priceCurrency": "INR" },
          "aggregateRating": { "@type": "AggregateRating", "ratingValue": "4.8", "ratingCount": "50000", "bestRating": "5" },
          "url": "https://in7co.in/in7-game-app",
          "downloadUrl": "https://in7co.in/in7-game-download",
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
