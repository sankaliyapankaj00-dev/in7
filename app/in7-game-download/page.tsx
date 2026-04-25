import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import DownloadButton from '@/components/DownloadButton';
import FAQSection from '@/components/FAQSection';
import { Download, CheckCircle, Shield, Smartphone, Zap, AlertCircle, Globe, Settings, FolderDown, PackageOpen } from 'lucide-react';

const DL_URL = "https://acc.in7game.org/api/web/share/index.html?ic=AA6YDBPC&ts=1774462560&m=2&lang=hi&id=1";

export const metadata: Metadata = {
  title: 'IN7 Game Download APK Free 2026 – Official App | ₹777',
  description: 'Download IN7 Game APK free for Android (in7 apk download, in7 com download). 25MB only. Get ₹777 bonus. Instant UPI withdrawal. Official: in7co.in',
  keywords: ['in7 download', 'in7 apk download', 'in7 game download apk', 'in 7 download', 'in7 com download', 'in7.com download', 'in7 com game download', 'in7 download apk', 'in 7 apk download', 'in 7 game download apk', 'upi withdrawal games free download', 'in7 app download', 'in7 game download for android', 'in7 game download play store', 'in7 com apk'],
  alternates: { canonical: 'https://www.in7co.in/in7-game-download' },
  openGraph: {
    title: 'IN7 Game Download APK Free 2026 – Official Android App',
    description: 'Download IN7 APK free. in7 com download, in7 apk download. ₹777 bonus. Instant UPI withdrawal. Official: in7co.in',
    url: 'https://www.in7co.in/in7-game-download',
    images: [{ url: '/in7-game-banner.jpeg', width: 1200, height: 630, alt: 'IN7 Game Download APK Free' }],
  },
};

const faqs = [
  { q: "IN7 APK Android me kaise download kare?", a: "in7co.in pe jao, Download button dabaao. File download hogi (~25MB). Settings → Security me 'Unknown Sources' ON karo. APK open karo aur install karo. Total 2 minute se kam." },
  { q: "IN7 APK safe hai ya nahi?", a: "Official in7co.in se download kiya hua APK safe hai. SSL encrypted hai, koi malware nahi. Dhyan raho – sirf official site se download karo, kisi aur source se nahi." },
  { q: "IN7 APK ki size kitni hai?", a: "25 se 30MB ke beech. Normal 4G pe 30-45 seconds me download ho jaata hai. Budget phones me bhi aasani se install hota hai." },
  { q: "IN7 iPhone (iOS) me download ho sakta hai?", a: "Abhi Android ke liye hi APK available hai. iOS users in7co.in website browser se access kar sakte hain." },
  { q: "Unknown Sources kaise enable kare IN7 ke liye?", a: "Settings → Security → 'Unknown Sources' ya 'Install Unknown Apps' ON karo. Newer Android me download notification se seedha enable kar sakte ho. Install ke baad isko off kar dena better rehta hai." },
  { q: "IN7 automatically update hoga kya?", a: "Nahi, APK apps auto-update nahi hote Play Store se bahar. Jab update aata hai, in7co.in pe notification aata hai – wahan se latest version download karo." },
];

export default function In7GameDownload() {
  return (
    <>
      {/* Breadcrumb */}
      <nav className="max-w-6xl mx-auto px-4 py-3 text-sm text-white/50">
        <Link href="/" className="hover:text-red-500 transition-colors">Home</Link>
        <span className="mx-2">›</span>
        <span className="text-red-500">IN7 Game Download</span>
      </nav>

      {/* Hero */}
      <section style={{background:'linear-gradient(135deg, #0a0a0f 0%, #0d1117 60%, #0a1a0a 100%)', minHeight:'60vh'}} className="flex items-center justify-center px-4 py-16 text-center relative overflow-hidden">
        <div style={{position:'absolute', top:'10%', left:'5%', width:'400px', height:'400px', background:'rgba(230,57,70,0.04)', borderRadius:'50%', filter:'blur(80px)'}}></div>
        <div className="relative z-10 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold mb-4" style={{background:'rgba(230,57,70,0.1)', border:'1px solid rgba(230,57,70,0.3)', color:'#e63946'}}>
            <CheckCircle size={14} style={{color:'#e63946'}} /> Official IN7 APK – Safe &amp; Verified
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-4 leading-tight">
            <span style={{color:'#e63946'}}>IN7 Game Download</span>
            <br />Free APK for Android 2026
          </h1>
          <p className="text-white/70 text-lg mb-8">
            Download the official IN7 APK for Android. Completely free. Install, register and your ₹777 bonus hits your wallet right away. Entertainment app, 18+ only.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <DownloadButton text="Download IN7 APK – 100% Free" size="lg" />
            <div className="text-white/50 text-sm">
              <span className="text-red-500 font-bold">25–30 MB</span> · Android 5.0+ · Latest 2026
            </div>
          </div>
          <div className="flex flex-wrap justify-center gap-6">
            {[
              { icon: <CheckCircle size={16} style={{color:'#e63946'}} />, label: 'Safe & Verified' },
              { icon: <Zap size={16} style={{color:'#e63946'}} />, label: 'Instant Install' },
              { icon: <Download size={16} style={{color:'#e63946'}} />, label: '₹777 Bonus' },
              { icon: <Smartphone size={16} style={{color:'#e63946'}} />, label: 'Android APK' },
            ].map(({ icon, label }) => (
              <div key={label} className="flex items-center gap-1 text-sm text-white/60">
                {icon} {label}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Download Box */}
      <section className="py-8 px-4 max-w-4xl mx-auto">
        <div className="glass p-6 rounded-2xl border border-red-500/30 text-center" style={{background:'rgba(230,57,70,0.05)'}}>
          <h2 className="text-2xl font-black mb-2 text-red-500 flex items-center justify-center gap-2">
            <Download size={24} style={{color:'#e63946'}} /> IN7 APK Quick Download
          </h2>
          <p className="text-white/60 mb-4">Latest version · Android · 25-30MB · Free</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6 text-sm">
            {[['App Name', 'IN7 Game'], ['Version', '2026 Latest'], ['Size', '~25-30 MB'], ['OS', 'Android 5.0+']].map(([k, v]) => (
              <div key={k} className="glass p-3 rounded-lg">
                <div className="text-white/50 text-xs">{k}</div>
                <div className="font-bold text-red-500">{v}</div>
              </div>
            ))}
          </div>
          <DownloadButton text="Download IN7 Game APK Now" size="lg" />
        </div>
      </section>

      {/* 6-Step Download Guide */}
      <section className="py-16 px-4 max-w-4xl mx-auto">
        <h2 className="text-3xl font-black text-center mb-2">How to <span style={{color:'#e63946'}}>Download &amp; Install IN7 APK</span></h2>
        <p className="text-white/50 text-center mb-10">Follow these 6 simple steps to download in7 game apk and start playing</p>
        <div className="space-y-4">
          {[
            { num: '1', icon: <Globe size={20} style={{color:'#e63946'}} />, title: 'Visit Official Website', desc: 'Open your Android browser and go to in7co.in – the official IN7 Game website. Make sure you are on the correct site to avoid fake APKs.' },
            { num: '2', icon: <Download size={20} style={{color:'#e63946'}} />, title: 'Click the Download Button', desc: 'Tap the yellow "Download IN7 APK" button on the homepage or this page. Your browser will ask where to save the file – choose your Downloads folder.' },
            { num: '3', icon: <FolderDown size={20} style={{color:'#e63946'}} />, title: 'APK File Downloads', desc: 'The IN7 APK file (25-30 MB) will download to your device. Wait for the download to complete – it takes about 30-60 seconds on a normal 4G connection.' },
            { num: '4', icon: <Settings size={20} style={{color:'#e63946'}} />, title: 'Enable Unknown Sources', desc: 'When prompted, go to Settings → Security → Unknown Sources (or "Install Unknown Apps"). Enable this for your browser app. This is required for APK installation.' },
            { num: '5', icon: <Smartphone size={20} style={{color:'#e63946'}} />, title: 'Install the APK', desc: 'Open the downloaded IN7 APK file from your Downloads folder or notification bar. Tap "Install" and wait 10-15 seconds for the installation to complete.' },
            { num: '6', icon: <PackageOpen size={20} style={{color:'#e63946'}} />, title: 'Register & Claim ₹777 Bonus', desc: 'Open IN7 Game, tap Register, enter your mobile number, verify OTP, set a password. Your ₹777 signup bonus is instantly credited to your wallet!' },
          ].map(step => (
            <div key={step.num} className="glass rounded-xl flex items-start hover:border-red-500/30 transition-all" style={{padding:'14px', gap:'14px'}}>
              <div style={{
                width:'38px', height:'38px', minWidth:'38px', borderRadius:'50%',
                display:'flex', alignItems:'center', justifyContent:'center',
                fontWeight:900, color:'#000', fontSize:'1rem', flexShrink:0,
                background:'linear-gradient(135deg, #e63946, #c1121f)',
              }}>
                {step.num}
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-red-500 mb-1 flex items-center gap-2">
                  {step.icon} {step.title}
                </h3>
                <p className="text-white/60 text-sm">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-8">
          <DownloadButton text="Download IN7 APK Free Now" size="lg" />
        </div>
      </section>

      {/* Screenshots */}
      <section style={{background:'rgba(230,57,70,0.03)', borderTop:'1px solid rgba(230,57,70,0.1)', borderBottom:'1px solid rgba(230,57,70,0.1)'}} className="py-12 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-black text-center mb-8">IN7 Game App <span style={{color:'#e63946'}}>Screenshots</span></h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {[
              { src: '/in7-game-app-screenshot.jpeg', alt: 'IN7 Game Download – App Interface' },
              { src: '/in7-game-spin-wheel.jpeg', alt: 'IN7 APK – Game Lobby' },
              { src: '/in7-game-bonus-offer.jpeg', alt: 'IN7 Game – Withdrawal Screen' },
            ].map(img => (
              <Image key={img.src} src={img.src} alt={img.alt} width={300} height={400} className="rounded-xl w-full" style={{border:'1px solid rgba(230,57,70,0.2)'}} />
            ))}
          </div>
        </div>
      </section>

      {/* Troubleshooting */}
      <section className="py-16 px-4 max-w-4xl mx-auto">
        <h2 className="text-3xl font-black text-center mb-2">IN7 APK <span style={{color:'#e63946'}}>Troubleshooting</span></h2>
        <p className="text-white/50 text-center mb-10">Common issues and solutions when downloading or installing IN7 Game APK</p>
        <div className="space-y-4">
          {[
            {
              problem: 'APK Not Installing',
              solution: 'Make sure "Install from Unknown Sources" is enabled in Settings → Security. Also check that you have enough storage space (at least 50MB free).'
            },
            {
              problem: 'Download Keeps Failing',
              solution: 'Check your internet connection. Try switching from WiFi to mobile data or vice versa. Clear your browser cache and try downloading again from in7co.in.'
            },
            {
              problem: 'App Crashes After Install',
              solution: 'Restart your phone after installation. Make sure your Android version is 5.0 or above. Uninstall any older version of IN7 first, then reinstall the latest APK.'
            },
            {
              problem: '"Parse Error" or "App Not Installed"',
              solution: 'The APK file may be corrupted. Delete the downloaded file and download IN7 APK again from the official link. Make sure the download completes fully before installing.'
            },
            {
              problem: 'Cannot Receive OTP',
              solution: 'Check that your mobile number is entered correctly. Check your SMS inbox. Wait 60 seconds and request a new OTP. Check if spam filters are blocking the message.'
            },
          ].map(item => (
            <div key={item.problem} className="glass p-5 rounded-xl">
              <h3 className="font-bold text-red-400 mb-2 flex items-center gap-2">
                <AlertCircle size={18} style={{color:'#f87171'}} /> {item.problem}
              </h3>
              <p className="text-white/70 text-sm"><span className="text-red-400 font-semibold flex items-center gap-1 inline-flex"><CheckCircle size={14} style={{color:'#e63946'}} /> Solution: </span>{item.solution}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Why Download IN7 */}
      <section style={{background:'rgba(230,57,70,0.03)', borderTop:'1px solid rgba(230,57,70,0.1)'}} className="py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-black text-center mb-2">5 Reasons to <span style={{color:'#e63946'}}>Download IN7 Game</span></h2>
          <p className="text-white/50 text-center mb-10">Why millions of Indians choose IN7 game download over other apps</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { num: '01', title: '₹777 Signup Bonus', desc: 'Register, verify OTP. ₹777 drops into your wallet. No deposit required. Simple as that.' },
              { num: '02', title: 'Instant UPI Withdrawal', desc: 'Money in your wallet? Send it to UPI in seconds. ₹100 minimum. Works at midnight too.' },
              { num: '03', title: 'Only 25MB. Runs on Any Phone', desc: 'Tiny file size. Installs and runs smoothly on old budget Android phones too. No lag.' },
              { num: '04', title: '20+ Games in One App', desc: 'Skill games, number prediction, fast-win rounds, all with different entry amounts. One app.' },
              { num: '05', title: 'SSL Encrypted & Safe', desc: 'Official in7co.in APK is safe to install. All transactions inside the app are also encrypted.' },
            ].map(r => (
              <div key={r.num} className="glass p-5 rounded-xl">
                <div className="text-3xl font-black mb-3" style={{color:'rgba(230,57,70,0.3)'}}>{r.num}</div>
                <h3 className="font-bold text-red-500 mb-2">{r.title}</h3>
                <p className="text-white/60 text-sm">{r.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <DownloadButton text="Download IN7 Game Free" size="lg" />
          </div>
        </div>
      </section>

      {/* Game Details Table */}
      <section className="py-16 px-4 max-w-4xl mx-auto">
        <h2 className="text-3xl font-black text-center mb-8">IN7 APK <span style={{color:'#e63946'}}>Full Details</span></h2>
        <div className="glass rounded-2xl overflow-hidden">
          <table className="w-full info-table">
            <tbody>
              {[
                ['App Name', 'IN7 Game (in7 apk)'],
                ['Developer', 'IN7 Gaming Platform'],
                ['Version', 'Latest 2026 Version'],
                ['File Size', '25–30 MB'],
                ['Android Required', 'Android 5.0 (Lollipop) or Higher'],
                ['Download Type', 'APK (Direct Download)'],
                ['Category', 'Gaming / Entertainment'],
                ['Signup Bonus', '₹777 Free on Registration'],
                ['Referral Bonus', 'Available – Earn Per Friend'],
                ['Min Deposit', 'Available (Optional)'],
                ['Min Withdrawal', '₹100'],
                ['Withdrawal Method', 'UPI, PhonePe, GPay, Paytm, Bank'],
                ['Withdrawal Speed', 'Instant – Within Seconds'],
                ['Security', 'SSL Encrypted / 100% Safe'],
                ['Customer Support', '24×7 In-App Support'],
                ['Age Restriction', '18+ Only'],
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

      {/* Link to Register */}
      <section className="py-8 px-4 max-w-4xl mx-auto">
        <div className="glass p-6 rounded-2xl border border-red-500/30 text-center" style={{background:'rgba(230,57,70,0.04)'}}>
          <h3 className="text-xl font-bold mb-2" style={{color:'#e63946'}}>New to IN7? Learn How to Register</h3>
          <p className="text-white/60 mb-4">After downloading, follow our step-by-step registration guide to claim your ₹777 bonus.</p>
          <Link href="/how-to-register" className="inline-block px-6 py-3 rounded-lg font-semibold transition-all" style={{background:'rgba(230,57,70,0.1)', border:'1px solid rgba(230,57,70,0.35)', color:'#e63946'}}>
            How to Register on IN7 →
          </Link>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 px-4 max-w-3xl mx-auto">
        <h2 className="text-3xl font-black text-center mb-2">Download <span style={{color:'#e63946'}}>FAQs</span></h2>
        <p className="text-white/50 text-center mb-10">Common questions about IN7 APK download and installation</p>
        <FAQSection faqs={faqs} />
      </section>

      {/* Final CTA */}
      <section style={{background:'linear-gradient(135deg, #1a0f00, #0a0a0f)', border:'1px solid rgba(230,57,70,0.3)'}} className="cta-section px-4 text-center">
        <h2 className="text-3xl font-black mb-4">
          Download <span style={{color:'#e63946'}}>IN7 Game APK Free</span> Now!
        </h2>
        <p className="text-white/60 mb-6">Join 50 Lakh+ players. Get ₹777 bonus. Withdraw instantly. 100% free download.</p>
        <DownloadButton text="Download IN7 APK – 100% Free" size="lg" />
        <p className="text-white/40 text-xs mt-4">18+ Only | Safe &amp; Verified APK | Official Download</p>
      </section>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify([
        {
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.in7co.in" },
            { "@type": "ListItem", "position": 2, "name": "IN7 Game Download", "item": "https://www.in7co.in/in7-game-download" },
          ],
        },
        {
          "@context": "https://schema.org",
          "@type": ["SoftwareApplication", "MobileApplication"],
          "name": "IN7 Game",
          "alternateName": ["in7 apk", "in7 com download", "in7 game download apk", "in7 download"],
          "operatingSystem": "Android",
          "applicationCategory": "GameApplication",
          "offers": { "@type": "Offer", "price": "0", "priceCurrency": "INR" },
          "aggregateRating": { "@type": "AggregateRating", "ratingValue": "4.8", "ratingCount": "50000", "bestRating": "5" },
          "fileSize": "30MB",
          "downloadUrl": "https://www.in7co.in/in7-game-download",
          "url": "https://www.in7co.in",
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
