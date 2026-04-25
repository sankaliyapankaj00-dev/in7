import type { Metadata } from 'next';
import Link from 'next/link';
import DownloadButton from '@/components/DownloadButton';
import FAQSection from '@/components/FAQSection';
import {
  IndianRupee,
  Zap,
  Users,
  CheckCircle,
  TrendingUp,
  Star,
  Shield,
  Smartphone,
  Trophy,
  Gift,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Paise Jitne Wala Game 2026 – IN7 | UPI Games APK',
  description:
    'Best paise jitne wala game – IN7 Game APK download free. Game khel ke paise kaise kamaye? Earn real cash, UPI withdrawal games free download. ₹777 bonus!',
  alternates: { canonical: 'https://www.in7co.in/paise-kamane-wala-game' },
  openGraph: {
    title: 'Paise Jitne Wala Game 2026 – IN7 | UPI Games APK',
    description:
      'Best paise jitne wala game – IN7 Game APK download free. Game khel ke paise kaise kamaye? Earn real cash, UPI withdrawal games free download. ₹777 bonus!',
    url: 'https://www.in7co.in/paise-kamane-wala-game',
    images: [{ url: '/in7-game-banner.jpeg' }],
  },
};

const faqs = [
  {
    q: 'Paise jitne wala game kaun sa hai?',
    a: 'IN7 Game ek popular real cash gaming app hai – in7co.in se free download hota hai. Register karo, ₹777 bonus milega, games khelke UPI me withdraw karo. Sirf entertainment ke liye, jeetna guaranteed nahi hota.',
  },
  {
    q: 'Game khel ke paise kaise kamaye?',
    a: 'IN7 APK download karo → register karo → ₹777 bonus lo → game chuno → entry fee lagao → khelo → jito toh UPI me withdraw karo. Simple process hai. Lekin yaad raho – responsible gaming zaroori hai, sirf afford karne wala paisa lagao.',
  },
  {
    q: 'UPI withdrawal games free download kaise kare?',
    a: 'in7co.in par jao, Download tap karo. File ~25MB ki hai. Install karo, register karo. Withdrawal minimum ₹100 se, PhonePe/GPay/Paytm/bank me instant aata hai.',
  },
  {
    q: 'Paise kamane wala game download kaise kare?',
    a: 'in7co.in → Download → APK file download hogi (25-30MB) → Settings me Unknown Sources allow karo → Install → Register. Kisi bhi Android phone me kaam karta hai, purane phones me bhi.',
  },
  {
    q: 'Konse games me paise milte hain?',
    a: 'IN7 me skill games, number prediction, fast-win rounds, casual games hain. Sab me real cash earn hota hai jo UPI ya bank me jaata hai. Entry fee ₹10 se shuru hoti hai kuch games me.',
  },
  {
    q: '2026 ka best paise kamane wala game?',
    a: 'IN7 Game abhi kaafi popular hai – ₹777 signup bonus, instant UPI withdrawal, 20+ games. Lekin koi bhi real-money game me winning ki guarantee nahi hoti. Entertainment ke liye khelo, budget ke andar raho.',
  },
  {
    q: 'Kya IN7 real paise deta hai?',
    a: 'Haan, users UPI me withdraw karte hain. Payments instant hoti hain. Par honest baat – gaming me hamesha jeetna nahi hota. Smart aur responsible gaming karo.',
  },
  {
    q: 'Minimum kitna withdraw kar sakte hain IN7 se?',
    a: '₹100 minimum. PhonePe, Google Pay, Paytm ya direct bank – sab available hain. Speed almost instant rehti hai.',
  },
  {
    q: 'Kya IN7 safe hai?',
    a: 'App SSL encrypted hai, official site in7co.in hai. Par safe khelo – real money lagta hai, responsible gaming hamesha zaroori hai. Kabhi bhi limit se zyada invest mat karo.',
  },
  {
    q: 'IN7 vs Rupee Rush – kaun better hai?',
    a: 'Dono alag platforms hain. IN7 me ₹777 free signup bonus milta hai, ₹100 minimum withdrawal hai, 20+ games hain. Compare karte waqt withdrawal speed aur minimum amount sabse zaroori factors hain.',
  },
];

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((f) => ({
    '@type': 'Question',
    name: f.q,
    acceptedAnswer: { '@type': 'Answer', text: f.a },
  })),
};

const breadcrumbJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.in7co.in' },
    {
      '@type': 'ListItem',
      position: 2,
      name: 'Paise Kamane Wala Game',
      item: 'https://www.in7co.in/paise-kamane-wala-game',
    },
  ],
};

export default function PaiseKamaneWalaGame() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      {/* ── Breadcrumb ── */}
      <nav className="max-w-6xl mx-auto px-4 py-3 text-sm text-white/50">
        <Link href="/" className="hover:text-red-500 transition-colors">
          Home
        </Link>
        <span className="mx-2">›</span>
        <span className="text-red-500">Paise Kamane Wala Game</span>
      </nav>

      {/* ── Hero ── */}
      <section
        style={{
          background: '#0a0a0f',
          minHeight: '62vh',
          position: 'relative',
          overflow: 'hidden',
        }}
        className="flex items-center justify-center px-4 py-16 text-center"
      >
        {/* Glow orbs */}
        <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }}>
          <div
            style={{
              position: 'absolute',
              top: '-5%',
              left: '50%',
              transform: 'translateX(-50%)',
              width: 'min(700px, 110vw)',
              height: '420px',
              background:
                'radial-gradient(ellipse at center, rgba(230,57,70,0.13) 0%, transparent 70%)',
              filter: 'blur(50px)',
            }}
          />
          <div
            style={{
              position: 'absolute',
              bottom: '0',
              left: '10%',
              width: 'min(350px, 55vw)',
              height: 'min(350px, 55vw)',
              background:
                'radial-gradient(circle, rgba(230,57,70,0.06) 0%, transparent 70%)',
              filter: 'blur(60px)',
            }}
          />
          <div
            style={{
              position: 'absolute',
              inset: 0,
              backgroundImage:
                'linear-gradient(rgba(255,255,255,0.016) 1px, transparent 1px),linear-gradient(90deg, rgba(255,255,255,0.016) 1px, transparent 1px)',
              backgroundSize: '60px 60px',
              maskImage:
                'radial-gradient(ellipse 80% 80% at 50% 50%, black 20%, transparent 100%)',
            }}
          />
        </div>

        <div
          className="hero-inner"
          style={{
            position: 'relative',
            zIndex: 1,
            maxWidth: '860px',
            width: '100%',
          }}
        >
          {/* Badge */}
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              padding: '5px 14px',
              borderRadius: '999px',
              background: 'rgba(230,57,70,0.1)',
              border: '1px solid rgba(230,57,70,0.3)',
              marginBottom: '20px',
            }}
          >
            <Trophy size={12} color="#e63946" fill="#e63946" />
            <span
              style={{
                fontSize: '0.7rem',
                fontWeight: 700,
                color: '#e63946',
                letterSpacing: '0.04em',
                textTransform: 'uppercase',
              }}
            >
              India&apos;s Best Paise Jitne Wala Game
            </span>
          </div>

          {/* H1 */}
          <h1
            style={{
              fontSize: 'clamp(1.9rem, 7.5vw, 4.5rem)',
              fontWeight: 900,
              lineHeight: 1.1,
              marginBottom: '16px',
              letterSpacing: '-0.02em',
            }}
          >
            <span style={{ display: 'block', color: '#ffffff' }}>
              Paise Jitne Wala Game
            </span>
            <span style={{ display: 'block', color: '#e63946' }}>
              IN7 – Real Cash, Instant UPI
            </span>
          </h1>

          {/* Subtext */}
          <p
            style={{
              fontSize: 'clamp(0.9rem, 2.4vw, 1.12rem)',
              color: 'rgba(255,255,255,0.62)',
              maxWidth: '580px',
              margin: '0 auto 28px',
              lineHeight: 1.7,
            }}
          >
            IN7 Game – India ka number 1{' '}
            <strong style={{ color: '#e63946' }}>paise kamane wala game</strong>. Download karo free, register karo aur{' '}
            <strong style={{ color: '#e63946' }}>₹777 instant bonus</strong> pao. Game khel ke paise kaise kamaye? Sirf IN7 ke saath – UPI withdrawal games app jo seconds me payment deta hai.
          </p>

          {/* CTA */}
          <div className="hero-ctas">
            <DownloadButton text="Download IN7 Free – Paise Kamao" size="lg" />
            <Link
              href="/how-to-register"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '14px 24px',
                borderRadius: '12px',
                background: 'rgba(255,255,255,0.06)',
                border: '1px solid rgba(255,255,255,0.15)',
                color: 'rgba(255,255,255,0.85)',
                textDecoration: 'none',
                fontWeight: 600,
                fontSize: '0.95rem',
              }}
            >
              <Smartphone size={17} />
              Register Karo
            </Link>
          </div>

          {/* Stats */}
          <div
            className="stats-row"
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'center',
              gap: '0',
              borderRadius: '16px',
              overflow: 'hidden',
              border: '1px solid rgba(255,255,255,0.08)',
              background: 'rgba(255,255,255,0.03)',
              backdropFilter: 'blur(12px)',
            }}
          >
            {[
              { icon: <Users size={17} color="#e63946" />, val: '50L+', label: 'Active Players' },
              { icon: <IndianRupee size={17} color="#e63946" />, val: '₹777', label: 'Signup Bonus' },
              { icon: <Zap size={17} color="#e63946" />, val: 'Instant', label: 'UPI Withdrawal' },
              { icon: <Star size={17} color="#e63946" fill="#e63946" />, val: '₹100', label: 'Min Withdraw' },
            ].map(({ icon, val, label }, i, arr) => (
              <div
                key={label}
                style={{
                  flex: '1 1 130px',
                  padding: '16px 10px',
                  textAlign: 'center',
                  borderRight:
                    i < arr.length - 1
                      ? '1px solid rgba(255,255,255,0.07)'
                      : 'none',
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '5px' }}>
                  {icon}
                </div>
                <div
                  style={{
                    fontSize: 'clamp(1rem, 3vw, 1.3rem)',
                    fontWeight: 900,
                    color: '#fff',
                    lineHeight: 1,
                  }}
                >
                  {val}
                </div>
                <div
                  style={{
                    fontSize: '0.68rem',
                    color: 'rgba(255,255,255,0.4)',
                    marginTop: '3px',
                    fontWeight: 500,
                  }}
                >
                  {label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Paise Kaise Kamaye IN7 Se ── */}
      <section className="py-10 sm:py-16 px-4 max-w-6xl mx-auto">
        <h2 className="section-h2 text-3xl font-black text-center mb-2">
          Paise Kaise Kamaye{' '}
          <span style={{ color: '#e63946' }}>IN7 Se</span>
        </h2>
        <p className="text-white/50 text-center text-sm sm:text-base mb-8 sm:mb-10">
          IN7 – best paise wala game real – se 4 tarike se kamaai karo
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
          {[
            {
              icon: <TrendingUp size={28} style={{ color: '#e63946' }} />,
              title: 'Play &amp; Win: Jitne Wala Game',
              desc: 'Apna favourite game chuno, entry fee lagao aur jito real cash. IN7 me 20+ skill games hain – har skill level ke liye. Jitna zyada khelo, utna zyada paisa jitne wala game online khelo.',
            },
            {
              icon: <Users size={28} style={{ color: '#e63946' }} />,
              title: 'Referral Bonus: Dosto Ko Invite Karo',
              desc: 'Apne referral link se dosto ko IN7 me bulao. Har friend ke register hone par bonus milega. Jitne zyada dost, utna zyada earning – bina kuch kiye paise kamao.',
            },
            {
              icon: <CheckCircle size={28} style={{ color: '#e63946' }} />,
              title: 'Daily Tasks: Roz Kamao',
              desc: 'Har roz complete karo daily tasks aur challenges. Extra coins aur cash rewards milte hain jo directly wallet me credit hote hain. New game paise kamane wala daily tasks bhi deta hai.',
            },
            {
              icon: <Zap size={28} style={{ color: '#e63946' }} />,
              title: 'UPI Withdrawal: Seconds Me Paise',
              desc: 'Jeet gaye? Toh UPI me withdraw karo – PhonePe, Google Pay, Paytm ya bank me sirf seconds me. Minimum sirf ₹100. Yahi banata hai IN7 ko India ka best UPI withdrawal games app.',
            },
          ].map((item) => (
            <div
              key={item.title}
              className="glass p-5 sm:p-6 rounded-xl hover:border-red-500/30 transition-all"
              style={{ border: '1px solid rgba(255,255,255,0.1)' }}
            >
              <div className="mb-3">{item.icon}</div>
              <h3 className="font-bold text-base sm:text-lg mb-2 text-red-500">
                {item.title}
              </h3>
              <p className="text-white/60 text-xs sm:text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── UPI Withdrawal Games ── */}
      <section
        style={{
          background: 'rgba(230,57,70,0.03)',
          borderTop: '1px solid rgba(230,57,70,0.1)',
          borderBottom: '1px solid rgba(230,57,70,0.1)',
        }}
        className="py-10 sm:py-16 px-4"
      >
        <div className="max-w-4xl mx-auto">
          <h2 className="section-h2 text-3xl font-black text-center mb-2">
            UPI Withdrawal Games –{' '}
            <span style={{ color: '#e63946' }}>IN7 Kyun Best Hai?</span>
          </h2>
          <p className="text-white/50 text-center text-sm sm:text-base mb-8 sm:mb-10">
            Paisa jitne wala game online me IN7 sabse aage hai – yeh dekho kyun
          </p>

          <div className="glass rounded-2xl overflow-hidden mb-8">
            <table className="w-full info-table">
              <tbody>
                {[
                  ['Min Withdrawal', '₹100'],
                  ['Withdrawal Speed', 'Instant (Seconds)'],
                  ['Payment Methods', 'UPI / PhonePe / GPay / Paytm / Bank'],
                  ['Signup Bonus', '₹777 Free'],
                  ['UPI Withdrawal Games APK', 'Free Download – in7co.in'],
                  ['Real Cash Games APK Withdrawal', 'Available – All Games'],
                  ['Security', '100% SSL Encrypted'],
                  ['Active Players', '50 Lakh+'],
                ].map(([title, detail], i) => (
                  <tr
                    key={title}
                    style={{
                      background:
                        i % 2 === 0 ? 'rgba(255,255,255,0.03)' : 'transparent',
                    }}
                  >
                    <td className="font-semibold text-red-500 w-1/2">{title}</td>
                    <td className="text-white/80">{detail}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="grid sm:grid-cols-3 gap-4 sm:gap-6">
            {[
              {
                icon: <Zap size={28} style={{ color: '#e63946' }} />,
                title: 'Instant Withdrawal',
                desc: 'Dusre UPI withdrawal games apk me ghante lagte hain – IN7 me sirf seconds. Real cash games apk withdrawal fastest hai IN7 pe.',
              },
              {
                icon: <Shield size={28} style={{ color: '#e63946' }} />,
                title: '100% Safe & Encrypted',
                desc: 'Sabhi transactions bank-grade SSL se protected hain. Paise wala game real security ke saath – koi fraud nahin, koi risk nahin.',
              },
              {
                icon: <Gift size={28} style={{ color: '#e63946' }} />,
                title: '₹777 Free Bonus',
                desc: 'Sirf register karo aur pao ₹777 bonus – koi deposit zaruri nahin! India ka sabse generous upi withdrawal games app.',
              },
            ].map((item) => (
              <div
                key={item.title}
                className="glass p-4 sm:p-5 rounded-xl text-center"
                style={{ border: '1px solid rgba(255,255,255,0.1)' }}
              >
                <div className="flex justify-center mb-3">{item.icon}</div>
                <h3 className="font-bold text-sm sm:text-base mb-2 text-red-500">
                  {item.title}
                </h3>
                <p className="text-white/60 text-xs sm:text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Step by Step: Game Khel Ke Paise Kaise Kamaye ── */}
      <section className="py-10 sm:py-16 px-4 max-w-4xl mx-auto">
        <h2 className="section-h2 text-3xl font-black text-center mb-2">
          Game Khel Ke Paise Kaise Kamaye:{' '}
          <span style={{ color: '#e63946' }}>Step by Step</span>
        </h2>
        <p className="text-white/50 text-center text-sm sm:text-base mb-8 sm:mb-10">
          Paise kamane wala game downloading se lekar UPI withdrawal tak – poora guide
        </p>
        <div className="space-y-3 sm:space-y-4">
          {[
            {
              title: 'Step 1 – IN7 APK Download Karo',
              desc: 'in7co.in pe jao aur Download button dabao. IN7 – best UPI withdrawal games free download – sirf 25-30MB ka hai. Paise kamane wala game downloading aasani se hogi kisi bhi Android phone me.',
            },
            {
              title: 'Step 2 – Register Karo',
              desc: 'IN7 app kholo → Mobile number enter karo → OTP verify karo → Password set karo → Profile complete karo. Poora process sirf 2 minute me!',
            },
            {
              title: 'Step 3 – ₹777 Bonus Pao',
              desc: 'Register karne ke turant baad ₹777 bonus automatically wallet me credit ho jaata hai. Koi deposit zaruri nahin – yeh India ka best new game paise kamane wala 2026 hai!',
            },
            {
              title: 'Step 4 – Game Khelo aur Jito',
              desc: 'Apna favourite game chuno – skill games, number prediction, fast-win games – aur real cash jeeto. Jitna zyada jito, utna zyada rupee rush earning app experience milega.',
            },
            {
              title: 'Step 5 – UPI Me Withdraw Karo',
              desc: 'Wallet section me jao → Withdraw tap karo → Amount enter karo (min ₹100) → PhonePe / GPay / Paytm / Bank chuno → Confirm karo. Paise seconds me aate hain – yahi hai India ka best upi withdrawal games apk.',
            },
          ].map((step, i) => (
            <div
              key={step.title}
              className="glass rounded-xl flex items-start hover:border-red-500/30 transition-all"
              style={{ padding: '14px', gap: '14px' }}
            >
              <div
                style={{
                  width: '38px',
                  height: '38px',
                  minWidth: '38px',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontWeight: 900,
                  color: '#000',
                  fontSize: '1rem',
                  flexShrink: 0,
                  background: 'linear-gradient(135deg, #e63946, #c1121f)',
                }}
              >
                {i + 1}
              </div>
              <div>
                <h3 className="font-bold text-sm sm:text-base text-red-500 mb-1">
                  {step.title}
                </h3>
                <p className="text-white/60 text-xs sm:text-sm">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-6 sm:mt-8">
          <DownloadButton text="Download IN7 – Paise Kamana Start Karo" size="lg" />
        </div>
      </section>

      {/* ── Comparison Table ── */}
      <section
        style={{
          background: 'rgba(230,57,70,0.03)',
          borderTop: '1px solid rgba(230,57,70,0.1)',
          borderBottom: '1px solid rgba(230,57,70,0.1)',
        }}
        className="py-10 sm:py-16 px-4"
      >
        <div className="max-w-4xl mx-auto">
          <h2 className="section-h2 text-3xl font-black text-center mb-2">
            IN7 vs Other{' '}
            <span style={{ color: '#e63946' }}>Paise Kamane Wala Games</span>
          </h2>
          <p className="text-white/50 text-center text-sm sm:text-base mb-8 sm:mb-10">
            Dekho kyun IN7 sabse best paisa kamane wala game downloading option hai
          </p>
          <div
            className="glass rounded-2xl overflow-hidden"
            style={{ border: '1px solid rgba(255,255,255,0.1)' }}
          >
            <table className="w-full info-table">
              <thead>
                <tr
                  style={{
                    background: 'rgba(230,57,70,0.12)',
                    borderBottom: '1px solid rgba(230,57,70,0.2)',
                  }}
                >
                  <th
                    className="text-left font-bold text-white/90"
                    style={{ padding: '12px 16px' }}
                  >
                    Feature
                  </th>
                  <th
                    className="text-center font-bold text-red-500"
                    style={{ padding: '12px 16px' }}
                  >
                    IN7 Game
                  </th>
                  <th
                    className="text-center font-bold text-white/50"
                    style={{ padding: '12px 16px' }}
                  >
                    Others
                  </th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['Signup Bonus', '₹777 Free', 'None / Low'],
                  ['Withdrawal Speed', 'Instant', '1–3 Days'],
                  ['Min Withdrawal', '₹100', '₹500+'],
                  ['Games Available', '20+', 'Limited'],
                  ['Security', '100% Encrypted', 'Varies'],
                ].map(([feature, in7, others], i) => (
                  <tr
                    key={feature}
                    style={{
                      background:
                        i % 2 === 0 ? 'rgba(255,255,255,0.03)' : 'transparent',
                    }}
                  >
                    <td className="font-semibold text-white/80">{feature}</td>
                    <td className="text-center">
                      <span
                        style={{
                          color: '#e63946',
                          fontWeight: 700,
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: '4px',
                          justifyContent: 'center',
                        }}
                      >
                        <CheckCircle size={14} style={{ color: '#e63946' }} />
                        {in7}
                      </span>
                    </td>
                    <td className="text-center text-white/40">{others}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="py-10 sm:py-16 px-4 max-w-3xl mx-auto">
        <h2 className="section-h2 text-3xl font-black text-center mb-2">
          Paise Kamane Wala Game –{' '}
          <span style={{ color: '#e63946' }}>FAQs</span>
        </h2>
        <p className="text-white/50 text-center text-sm sm:text-base mb-8 sm:mb-10">
          Game khel ke paise kaise kamaye – sabse common sawalon ke jawaab
        </p>
        <FAQSection faqs={faqs} />
      </section>

      {/* ── Final CTA ── */}
      <section
        style={{
          background: 'linear-gradient(135deg, #1a0500, #0a0a0f)',
          border: '1px solid rgba(230,57,70,0.3)',
        }}
        className="cta-section px-4 text-center"
      >
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-black mb-3 sm:mb-4">
          Ab Bas Karo Intezaar!{' '}
          <span style={{ color: '#e63946' }}>Paise Kamana Shuru Karo!</span>
        </h2>
        <p className="text-white/60 text-sm sm:text-base mb-5 sm:mb-6 max-w-xl mx-auto">
          India ka best paise jitne wala game download karo – IN7. ₹777 signup bonus ke saath shuru karo, real cash games apk withdrawal seconds me. 50 Lakh+ players ka bharosa.
        </p>
        <DownloadButton text="Download IN7 Free – ₹777 Pao" size="lg" />
        <p className="text-white/40 text-xs mt-3 sm:mt-4">
          18+ Only | Entertainment Purpose | Responsible Gaming
        </p>
      </section>
    </>
  );
}
