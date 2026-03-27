import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import DownloadButton from '@/components/DownloadButton';
import { Target, Lightbulb, Trophy, Scale, Shield, Zap, MessageCircle, Leaf, RefreshCw, Gift, Smartphone, Lock, Gamepad2, Globe, Mail } from 'lucide-react';

export const metadata: Metadata = {
  title: 'About IN7 Game | Customer Care | Is IN7 Real? 2026',
  description: "About IN7 Game – India's #1 gaming platform. 24/7 customer care. Is IN7 real? YES – 50L+ users, instant UPI withdrawal. Official: in7co.in.",
  keywords: ['about in7 game', 'in7 game customer care number', 'in7 game customer care number india 24 7', 'in7 game real or fake', 'is in7 game safe', 'in7co.in', 'in7 game company', 'i am 7 game'],
  alternates: { canonical: 'https://in7co.in/about-us' },
  openGraph: {
    title: 'About IN7 Game | in7 game customer care | Is IN7 Real?',
    description: 'About IN7 Game. 24/7 customer care. IN7 game is REAL – 50L+ verified users. in7co.in official.',
    url: 'https://in7co.in/about-us',
    images: [{ url: '/6c6ea394-9f54-4f32-9e79-dc698241cd44.jpeg', width: 1200, height: 630, alt: 'About IN7 Game' }],
  },
};

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'IN7 Game',
  alternateName: ['in7 apps', 'in7co.in', 'i am 7 game', 'ien7'],
  url: 'https://in7co.in',
  logo: {
    '@type': 'ImageObject',
    url: 'https://in7co.in/a10fd83d-99dc-459d-83cf-acd3bf3f70b7.jpg',
    width: 512,
    height: 512,
  },
  contactPoint: {
    '@type': 'ContactPoint',
    contactType: 'customer support',
    availableLanguage: ['English', 'Hindi'],
    contactOption: 'TollFree',
    areaServed: 'IN',
  },
  sameAs: ['https://in7co.in'],
  description: "IN7 Game is India's #1 online gaming and earning platform. 50 Lakh+ users. Instant UPI withdrawals. ₹777 signup bonus.",
  foundingLocation: { '@type': 'Country', name: 'India' },
  areaServed: 'IN',
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://in7co.in' },
    { '@type': 'ListItem', position: 2, name: 'About IN7 Game', item: 'https://in7co.in/about-us' },
  ],
};

export default function AboutUs() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      {/* Breadcrumb */}
      <nav className="max-w-6xl mx-auto px-4 py-3 text-sm text-white/50">
        <Link href="/" className="hover:text-red-500 transition-colors">Home</Link>
        <span className="mx-2">›</span>
        <span className="text-red-500">About Us</span>
      </nav>

      {/* Hero */}
      <section style={{background:'linear-gradient(135deg, #0a0a0f 0%, #0d1117 100%)', minHeight:'40vh'}} className="flex items-center justify-center px-4 py-16 text-center">
        <div className="max-w-3xl mx-auto">
          <div className="flex justify-center mb-6">
            <Image
              src="/a10fd83d-99dc-459d-83cf-acd3bf3f70b7.jpg"
              alt="IN7 Game Logo"
              width={100} height={100}
              className="rounded-2xl"
              style={{border:'2px solid rgba(230,57,70,0.4)'}}
            />
          </div>
          <h1 className="text-4xl md:text-5xl font-black mb-4">
            About <span style={{color:'#e63946'}}>IN7 Game</span> –<br className="hidden sm:block" /> India&apos;s #1 Real Earning Gaming Platform
          </h1>
          <p className="text-white/60 text-lg">
            India&apos;s most trusted online gaming and entertainment platform
          </p>
        </div>
      </section>

      {/* Stats */}
      <section style={{background:'linear-gradient(90deg, #e63946, #c1121f)'}} className="py-6">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              ['50L+', 'Happy Users'],
              ['4.8/5', 'App Rating'],
              ['100%', 'Secure'],
              ['24/7', 'Support'],
            ].map(([v, l]) => (
              <div key={l} className="text-black">
                <div className="text-3xl font-black">{v}</div>
                <div className="text-sm font-medium opacity-70">{l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Content */}
      <section className="py-16 px-4 max-w-4xl mx-auto">
        <div className="space-y-8">
          <div className="glass p-8 rounded-2xl">
            <h2 className="text-2xl font-black mb-4 text-red-500 flex items-center gap-2">
              <Target size={28} style={{color:'#e63946'}} /> Who We Are
            </h2>
            <div className="space-y-4 text-white/70 leading-relaxed">
              <p>
                IN7 Game is an Android-based gaming platform that operates at in7co.in. The platform has 20+ game categories: skill games, fast-win rounds, number prediction and more. Whatever you win can be withdrawn directly to UPI or your bank account.
              </p>
              <p>
                New users get a ₹777 bonus on registration, no deposit required. Withdrawals start at ₹100 and go to PhonePe, GPay, Paytm, or bank transfer. All transactions are SSL encrypted.
              </p>
              <p>
                This is an entertainment platform. Responsible gaming matters. Only play with money you can afford. Strictly 18+ only. Users should also check their local state regulations regarding online gaming.
              </p>
            </div>
          </div>

          <div className="glass p-8 rounded-2xl">
            <h2 className="text-2xl font-black mb-4 text-red-500 flex items-center gap-2">
              <Lightbulb size={28} style={{color:'#e63946'}} /> Our Mission
            </h2>
            <div className="space-y-4 text-white/70 leading-relaxed">
              <p>
                Our focus is straightforward: no surprises for users. If a withdrawal is promised in seconds, it happens in seconds. Bonus credited on registration means it's there the moment you finish signing up. Support exists to actually solve problems, not just acknowledge them.
              </p>
              <p>
                We push updates regularly. New games get added, performance improves, and features are built based on what users actually ask for. Whether you're on a budget Android or a flagship phone, the IN7 app runs smooth.
              </p>
              <p>
                We genuinely believe in responsible gaming. Play for entertainment, not under pressure or to chase losses. If it stops being fun, take a break. That's a real policy, not just a disclaimer.
              </p>
            </div>
          </div>

          <div className="glass p-8 rounded-2xl">
            <h2 className="text-2xl font-black mb-4 text-red-500 flex items-center gap-2">
              <Trophy size={28} style={{color:'#e63946'}} /> Our Platform
            </h2>
            <div className="space-y-4 text-white/70 leading-relaxed">
              <p>
                The platform is technically reliable. Servers are available 24/7. Thousands of withdrawals are processed every day, and the vast majority complete in seconds.
              </p>
              <p>
                Security runs on 256-bit SSL. Every transaction is encrypted end to end. We don't sell or share personal data with third parties.
              </p>
              <p>
                Support is right inside the app: Profile, then Help, then Chat. Whether it's a withdrawal issue, a login problem or a bonus query, that's the fastest way to get a resolution.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section style={{background:'rgba(230,57,70,0.03)', borderTop:'1px solid rgba(230,57,70,0.1)', borderBottom:'1px solid rgba(230,57,70,0.1)'}} className="py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-black text-center mb-2">Our <span style={{color:'#e63946'}}>Core Values</span></h2>
          <p className="text-white/50 text-center mb-10">The principles that guide everything we do at IN7 Game</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: <Scale size={36} style={{color:'#e63946'}} />, title: 'Fair Play', desc: 'All games on IN7 are designed for fair outcomes. We believe every player deserves an equal chance to win.' },
              { icon: <Shield size={36} style={{color:'#e63946'}} />, title: 'Security First', desc: 'We use 256-bit SSL encryption to protect all transactions and personal data. Your safety is our top priority.' },
              { icon: <Zap size={36} style={{color:'#e63946'}} />, title: 'Speed & Reliability', desc: 'Fast withdrawals, smooth gameplay, and 24/7 server availability. We never compromise on performance.' },
              { icon: <MessageCircle size={36} style={{color:'#e63946'}} />, title: 'Player Support', desc: '24/7 customer support team ready to help with any issue. We respond quickly and resolve problems efficiently.' },
              { icon: <Leaf size={36} style={{color:'#e63946'}} />, title: 'Responsible Gaming', desc: 'We promote responsible gaming and provide tools to help players manage their gaming habits healthily.' },
              { icon: <RefreshCw size={36} style={{color:'#e63946'}} />, title: 'Continuous Improvement', desc: 'We regularly update the app with new games, features, and improvements based on player feedback.' },
            ].map(v => (
              <div key={v.title} className="glass p-6 rounded-xl text-center">
                <div className="flex justify-center mb-3">{v.icon}</div>
                <h3 className="font-bold text-red-500 mb-2">{v.title}</h3>
                <p className="text-white/60 text-sm">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Trust IN7 */}
      <section className="py-16 px-4 max-w-4xl mx-auto">
        <h2 className="text-3xl font-black text-center mb-2">Why <span style={{color:'#e63946'}}>50 Lakh+ Players</span> Trust IN7</h2>
        <p className="text-white/50 text-center mb-10">The reasons behind IN7 Game&apos;s massive popularity in India</p>
        <div className="space-y-4">
          {[
            { icon: <Zap size={32} style={{color:'#e63946'}} />, title: 'Fastest Withdrawal in India', desc: 'IN7 Game processes withdrawals in seconds – faster than any other gaming platform. Money hits your UPI account before you close the app.' },
            { icon: <Gift size={32} style={{color:'#e63946'}} />, title: 'Generous ₹777 Welcome Bonus', desc: 'No other platform gives ₹777 free on signup without requiring any deposit. IN7 rewards new players just for joining.' },
            { icon: <Smartphone size={32} style={{color:'#e63946'}} />, title: 'Works on All Android Devices', desc: 'IN7 APK is only 25MB and works smoothly on any Android 5.0+ device, including budget phones with limited RAM and storage.' },
            { icon: <Lock size={32} style={{color:'#e63946'}} />, title: 'Rock-Solid Security', desc: 'Bank-grade encryption on every transaction. Millions of successful withdrawals with zero security incidents reported.' },
            { icon: <Gamepad2 size={32} style={{color:'#e63946'}} />, title: '20+ Game Variety', desc: 'From casual games to skill challenges, IN7 has something for everyone. New games added regularly to keep things fresh.' },
            { icon: <MessageCircle size={32} style={{color:'#e63946'}} />, title: 'Responsive Customer Support', desc: '24/7 in-app support that actually helps. Real humans respond to your issues, not just automated bots.' },
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
      </section>

      {/* Contact */}
      <section style={{background:'rgba(230,57,70,0.03)', borderTop:'1px solid rgba(230,57,70,0.1)'}} className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-black text-center mb-8">Contact <span style={{color:'#e63946'}}>IN7 Game</span></h2>
          <div className="grid md:grid-cols-3 gap-6 text-center">
            {[
              { icon: <Globe size={36} style={{color:'#e63946'}} />, title: 'Website', detail: 'in7co.in' },
              { icon: <Mail size={36} style={{color:'#e63946'}} />, title: 'Email Support', detail: 'support@in7co.in' },
              { icon: <MessageCircle size={36} style={{color:'#e63946'}} />, title: 'In-App Chat', detail: '24/7 Live Support' },
            ].map(c => (
              <div key={c.title} className="glass p-6 rounded-xl">
                <div className="flex justify-center mb-3">{c.icon}</div>
                <h3 className="font-bold text-red-500 mb-1">{c.title}</h3>
                <p className="text-white/60 text-sm">{c.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{background:'linear-gradient(135deg, #1a0f00, #0a0a0f)', border:'1px solid rgba(230,57,70,0.3)'}} className="cta-section px-4 text-center">
        <h2 className="text-3xl font-black mb-4">
          Join the <span style={{color:'#e63946'}}>IN7 Game Family!</span>
        </h2>
        <p className="text-white/60 mb-6">50 Lakh+ players trust us. Download IN7 Game free and get ₹777 signup bonus today!</p>
        <DownloadButton text="Download IN7 Game Free" size="lg" />
        <div className="flex justify-center gap-6 mt-6 text-sm text-white/50">
          <Link href="/privacy-policy" className="hover:text-red-500 transition-colors">Privacy Policy</Link>
          <Link href="/disclaimer" className="hover:text-red-500 transition-colors">Disclaimer</Link>
          <Link href="/how-to-register" className="hover:text-red-500 transition-colors">Register Guide</Link>
        </div>
      </section>
    </>
  );
}
