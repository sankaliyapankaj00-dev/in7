import type { Metadata } from 'next';
import Link from 'next/link';
import DownloadButton from '@/components/DownloadButton';
import FAQSection from '@/components/FAQSection';
import {
  CheckCircle,
  XCircle,
  ShieldCheck,
  Users,
  Zap,
  Star,
  Clock,
  MessageCircle,
  AlertTriangle,
  BadgeCheck,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'IN7 Game Real or Fake? Honest Review 2026 | Is IN7 Safe?',
  description:
    "Is IN7 Game real or fake? in7 game real or fake hai? Honest review – IN7 is India's legitimate platform. Customer care & safety facts.",
  alternates: { canonical: 'https://www.in7co.in/in7-game-real-or-fake' },
  openGraph: {
    title: 'IN7 Game Real or Fake? Honest Review 2026 | Is IN7 Safe?',
    description:
      "Is IN7 Game real or fake? in7 game real or fake hai? Honest review – IN7 is India's legitimate platform. Customer care & safety facts.",
    url: 'https://www.in7co.in/in7-game-real-or-fake',
    images: [{ url: '/in7-game-banner.jpeg' }],
  },
};

const faqs = [
  {
    q: 'IN7 Game real hai ya fake?',
    a: 'IN7 Game REAL hai. 50 Lakh se zyada Indian users ne IN7 se real paise kamaye hain aur UPI me withdraw kiye hain. IN7 SSL encrypted platform hai jo in7co.in par operate karta hai.',
  },
  {
    q: 'in7 game real or fake hai kya?',
    a: 'IN7 Game bilkul REAL hai – fake nahi. Millions of verified user withdrawals, instant UPI payment proof, aur years of consistent operation se yeh prove hota hai ki IN7 ek legitimate earning game app hai.',
  },
  {
    q: 'IN7 Game ka customer care number kya hai?',
    a: 'IN7 Game 24×7 in-app customer support provide karta hai. App open karo → Support/Help section me jao → Live chat se help lo. Official site sirf in7co.in hai.',
  },
  {
    q: "I am 7 game kya hai? Kya yeh IN7 hai?",
    a: "'I am 7 game' aur 'is 7 game' – yeh dono IN7 Game ke hi popular search terms hain. IN7 Game (in7co.in) India ka #1 online earning game app hai jisme real cash milta hai.",
  },
  {
    q: 'Kya IN7 Game safe hai?',
    a: 'Haan, IN7 Game 100% safe hai. Platform 256-bit SSL encryption use karta hai, koi personal data leak nahi hota, aur sabhi transactions encrypted hote hain. in7co.in hi official site hai.',
  },
  {
    q: 'IN7 Game se paise withdraw hote hain ya nahi?',
    a: 'Haan! IN7 Game se paise 100% withdraw hote hain aur instantly. UPI apps jaise PhonePe, Google Pay, Paytm ya direct bank transfer me seconds me paise aa jaate hain. Minimum ₹100 withdraw kar sakte hain.',
  },
  {
    q: 'Fake IN7 apps se kaise bache?',
    a: 'Sirf in7co.in se hi IN7 APK download karo. Fake sites alag URLs use karti hain. Official IN7 Game ka ek hi website hai: in7co.in. Koi bhi unofficial source se download mat karo.',
  },
  {
    q: 'Yono game real or fake – aur IN7 kaisa hai?',
    a: 'IN7 Game ek proven legitimate platform hai jiska track record transparent hai. IN7 me ₹777 bonus milta hai, instant withdrawal hota hai aur 50L+ verified users hain – yeh sab legitimacy ka proof hai.',
  },
];

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.in7co.in' },
    {
      '@type': 'ListItem',
      position: 2,
      name: 'IN7 Game Real or Fake',
      item: 'https://www.in7co.in/in7-game-real-or-fake',
    },
  ],
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

const productSchema = {
  '@context': 'https://schema.org',
  '@type': 'Product',
  name: 'IN7 Game',
  description:
    'IN7 Game is India\'s #1 real-money earning game app. Download APK from in7co.in, register and get ₹777 bonus. Instant UPI withdrawals. 50 Lakh+ users.',
  url: 'https://www.in7co.in',
  brand: { '@type': 'Brand', name: 'IN7 Game' },
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.8',
    bestRating: '5',
    worstRating: '1',
    ratingCount: '50000',
  },
};

export default function In7GameRealOrFake() {
  return (
    <>
      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
      />

      {/* Breadcrumb */}
      <nav className="max-w-6xl mx-auto px-4 py-3 text-sm text-white/50">
        <Link href="/" className="hover:text-red-500 transition-colors">Home</Link>
        <span className="mx-2">›</span>
        <span style={{ color: '#e63946' }}>IN7 Game Real or Fake</span>
      </nav>

      {/* ── Hero ─────────────────────────────────────────── */}
      <section
        style={{
          background: 'linear-gradient(135deg, #0a0a0f 0%, #0d1117 55%, #001a0a 100%)',
          minHeight: '60vh',
        }}
        className="flex items-center justify-center px-4 py-16 text-center relative overflow-hidden"
      >
        <div
          style={{
            position: 'absolute',
            top: '10%',
            right: '8%',
            width: '350px',
            height: '350px',
            background: 'rgba(34,197,94,0.04)',
            borderRadius: '50%',
            filter: 'blur(80px)',
          }}
        />
        <div
          style={{
            position: 'absolute',
            bottom: '15%',
            left: '5%',
            width: '280px',
            height: '280px',
            background: 'rgba(230,57,70,0.04)',
            borderRadius: '50%',
            filter: 'blur(70px)',
          }}
        />

        <div className="relative z-10 max-w-3xl mx-auto">
          <div
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold mb-4"
            style={{
              background: 'rgba(34,197,94,0.1)',
              border: '1px solid rgba(34,197,94,0.3)',
              color: '#22c55e',
            }}
          >
            <BadgeCheck size={14} style={{ color: '#22c55e' }} /> Verified Honest Review 2026
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-5 leading-tight">
            <span style={{ color: '#e63946' }}>IN7 Game Real or Fake?</span>
            <br />
            – Complete Honest Review 2026
          </h1>

          {/* Verdict badge */}
          <div
            className="inline-flex items-center gap-3 px-6 py-3 rounded-2xl mb-6 text-2xl font-black"
            style={{
              background: 'rgba(34,197,94,0.12)',
              border: '2px solid rgba(34,197,94,0.4)',
            }}
          >
            <CheckCircle size={28} style={{ color: '#22c55e' }} />
            <span style={{ color: '#22c55e' }}>VERDICT: REAL ✓</span>
          </div>

          <p className="text-white/70 text-lg mb-8 max-w-2xl mx-auto">
            IN7 Game is a <strong style={{ color: '#22c55e' }}>100% legitimate</strong> real-money earning
            platform operated at in7co.in. With 50 Lakh+ verified users, instant UPI withdrawals and years of
            consistent operation, IN7 is one of India&apos;s most trusted gaming apps.
            <strong style={{ color: '#e63946' }}> It is not fake.</strong>
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <DownloadButton text="Download IN7 – 100% Real" size="lg" />
            <div className="flex items-center gap-1 text-yellow-400 font-bold text-lg">
              <Star size={20} fill="#facc15" stroke="none" />
              <Star size={20} fill="#facc15" stroke="none" />
              <Star size={20} fill="#facc15" stroke="none" />
              <Star size={20} fill="#facc15" stroke="none" />
              <Star size={20} fill="#facc15" stroke="none" />
              <span className="text-white/70 text-sm font-normal ml-1">4.8/5 · 50,000+ Reviews</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── 5 Proofs IN7 is Real ──────────────────────────── */}
      <section className="py-16 px-4 max-w-4xl mx-auto">
        <h2 className="section-h2 font-black text-center mb-2">
          IN7 Game Real Hai –{' '}
          <span style={{ color: '#e63946' }}>5 Proofs</span>
        </h2>
        <p className="text-white/50 text-center mb-10">
          Here is irrefutable evidence proving IN7 Game is genuine and not a scam
        </p>

        <div className="space-y-4">
          {[
            {
              num: '1',
              icon: <Users size={20} style={{ color: '#e63946' }} />,
              title: '50 Lakh+ Active Users',
              desc: 'Over 50 lakh Indian users have registered, played, and withdrawn real money from IN7 Game. This scale of verified activity is impossible for a fake platform to sustain.',
              proof: 'Real withdrawal proofs shared daily by users on social media.',
            },
            {
              num: '2',
              icon: <Zap size={20} style={{ color: '#e63946' }} />,
              title: 'Instant UPI Withdrawals',
              desc: 'IN7 processes withdrawals to UPI apps (PhonePe, Google Pay, Paytm) and bank accounts within seconds. Minimum withdrawal is ₹100. Fake apps never actually pay users.',
              proof: 'Money lands in your account before you close the app.',
            },
            {
              num: '3',
              icon: <ShieldCheck size={20} style={{ color: '#e63946' }} />,
              title: 'SSL Encrypted Platform',
              desc: 'IN7 uses 256-bit SSL encryption, the same bank-grade security used by financial institutions. All personal data and transactions are fully protected at all times.',
              proof: 'Verifiable SSL certificate on in7co.in.',
            },
            {
              num: '4',
              icon: <Clock size={20} style={{ color: '#e63946' }} />,
              title: 'Years of Consistent Operation',
              desc: 'IN7 Game has been operating consistently for years without disappearing or freezing user funds. Scam apps vanish quickly after taking user money. IN7 has a long, stable track record.',
              proof: 'Consistent operational history available at in7co.in.',
            },
            {
              num: '5',
              icon: <Star size={20} style={{ color: '#e63946' }} />,
              title: '4.8/5 User Rating',
              desc: 'Thousands of real Indian users have rated IN7 Game 4.8 out of 5. These ratings come from verified players who have successfully withdrawn money from the platform.',
              proof: 'Tens of thousands of genuine reviews from real users.',
            },
          ].map((proof) => (
            <div
              key={proof.num}
              className="glass rounded-xl flex items-start hover:border-red-500/30 transition-all"
              style={{ padding: '16px', gap: '14px' }}
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
                {proof.num}
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-red-500 mb-1 flex items-center gap-2">
                  {proof.icon} {proof.title}
                </h3>
                <p className="text-white/65 text-sm mb-2">{proof.desc}</p>
                <div
                  className="text-xs rounded-lg px-3 py-2 inline-flex items-center gap-1"
                  style={{ background: 'rgba(34,197,94,0.08)', color: '#22c55e', border: '1px solid rgba(34,197,94,0.2)' }}
                >
                  <CheckCircle size={12} /> {proof.proof}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Comparison Table ──────────────────────────────── */}
      <section
        style={{
          background: 'rgba(230,57,70,0.03)',
          borderTop: '1px solid rgba(230,57,70,0.1)',
          borderBottom: '1px solid rgba(230,57,70,0.1)',
        }}
        className="py-16 px-4"
      >
        <div className="max-w-4xl mx-auto">
          <h2 className="section-h2 font-black text-center mb-2">
            IN7 Game Real or Fake –{' '}
            <span style={{ color: '#e63946' }}>Comparison</span>
          </h2>
          <p className="text-white/50 text-center mb-10">
            See how IN7 Game compares to fake apps across every key factor
          </p>

          <div className="glass rounded-2xl overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr style={{ background: 'rgba(230,57,70,0.12)', borderBottom: '1px solid rgba(230,57,70,0.2)' }}>
                    <th className="text-left px-5 py-4 font-bold text-white/80 text-sm">Feature</th>
                    <th className="text-left px-5 py-4 font-bold text-sm" style={{ color: '#22c55e' }}>
                      ✓ IN7 Real
                    </th>
                    <th className="text-left px-5 py-4 font-bold text-sm" style={{ color: '#f87171' }}>
                      ✗ Fake Apps
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ['Withdrawal', 'Instant to UPI', 'Never pays'],
                    ['Bonus Credit', '₹777 Auto-credited', 'Fake promises'],
                    ['Customer Support', '24/7 Active', 'No support'],
                    ['Security', 'SSL Encrypted', 'No encryption'],
                    ['Official Site', 'in7co.in', 'Fake URLs'],
                  ].map(([feature, real, fake], i) => (
                    <tr
                      key={feature}
                      style={{ background: i % 2 === 0 ? 'rgba(255,255,255,0.02)' : 'transparent' }}
                    >
                      <td className="px-5 py-3 text-sm font-semibold text-white/80">{feature}</td>
                      <td className="px-5 py-3 text-sm">
                        <span className="flex items-center gap-1" style={{ color: '#22c55e' }}>
                          <CheckCircle size={14} /> {real}
                        </span>
                      </td>
                      <td className="px-5 py-3 text-sm">
                        <span className="flex items-center gap-1" style={{ color: '#f87171' }}>
                          <XCircle size={14} /> {fake}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* ── Customer Care ─────────────────────────────────── */}
      <section className="py-16 px-4 max-w-4xl mx-auto">
        <h2 className="section-h2 font-black text-center mb-2">
          IN7 Game <span style={{ color: '#e63946' }}>Customer Care</span>
        </h2>
        <p className="text-white/50 text-center mb-10">
          IN7 game customer care number India 24/7 – Here is how to reach the support team
        </p>

        <div className="glass p-6 rounded-2xl" style={{ border: '1px solid rgba(230,57,70,0.25)', background: 'rgba(230,57,70,0.04)' }}>
          <div className="flex items-start gap-4 mb-6">
            <MessageCircle size={40} style={{ color: '#e63946', flexShrink: 0 }} />
            <div>
              <h3 className="font-bold text-xl text-white mb-1">24×7 In-App Customer Support</h3>
              <p className="text-white/60 text-sm">
                IN7 Game does not publish a direct phone number for security and privacy reasons.
                Instead, the platform offers a <strong style={{ color: '#e63946' }}>24×7 live chat support</strong> system
                accessible directly inside the app, available round the clock, every day of the year.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-4 mb-6">
            {[
              {
                title: 'How to Reach Support',
                desc: 'Open IN7 App → Go to Profile / Account → Tap Help or Support → Start Live Chat. Average response time is under 5 minutes.',
              },
              {
                title: 'What Support Covers',
                desc: 'Withdrawal issues, login problems, bonus queries, account verification, OTP issues, game disputes, referral problems and technical bugs.',
              },
              {
                title: 'Response Time',
                desc: 'Support agents are available 24 hours a day, 7 days a week including weekends and public holidays. No waiting queue during business hours.',
              },
            ].map((item) => (
              <div
                key={item.title}
                className="glass p-4 rounded-xl"
                style={{ border: '1px solid rgba(230,57,70,0.15)' }}
              >
                <h4 className="font-bold text-red-500 mb-2 text-sm">{item.title}</h4>
                <p className="text-white/60 text-xs">{item.desc}</p>
              </div>
            ))}
          </div>

          <div
            className="rounded-xl p-4 flex items-start gap-3"
            style={{ background: 'rgba(34,197,94,0.07)', border: '1px solid rgba(34,197,94,0.2)' }}
          >
            <CheckCircle size={18} style={{ color: '#22c55e', flexShrink: 0, marginTop: '2px' }} />
            <p className="text-white/70 text-sm">
              <strong style={{ color: '#22c55e' }}>Official support is only through the IN7 app.</strong>{' '}
              Beware of fake WhatsApp numbers or Telegram groups claiming to be IN7 support.
              The official website is <strong style={{ color: '#e63946' }}>in7co.in</strong> only.
            </p>
          </div>
        </div>
      </section>

      {/* ── Red Flags of Fake Games ───────────────────────── */}
      <section
        style={{
          background: 'rgba(230,57,70,0.03)',
          borderTop: '1px solid rgba(230,57,70,0.1)',
          borderBottom: '1px solid rgba(230,57,70,0.1)',
        }}
        className="py-16 px-4"
      >
        <div className="max-w-4xl mx-auto">
          <h2 className="section-h2 font-black text-center mb-2">
            Red Flags of Fake Games –{' '}
            <span style={{ color: '#22c55e' }}>IN7 Has None</span>
          </h2>
          <p className="text-white/50 text-center mb-10">
            Know what fake gaming apps do. Confirm that IN7 does none of these
          </p>

          <div className="grid md:grid-cols-2 gap-4">
            {[
              {
                flag: 'Withdrawal requests ignored or cancelled forever',
                in7: 'IN7 processes withdrawals instantly: seconds, not days.',
              },
              {
                flag: 'No working customer support or contact',
                in7: 'IN7 provides 24×7 live in-app customer support.',
              },
              {
                flag: 'Bonus promised but never credited',
                in7: 'IN7 auto-credits ₹777 immediately after registration.',
              },
              {
                flag: 'Constant demand for "tax" or "fee" before withdrawal',
                in7: 'IN7 charges no hidden fees. Withdraw your earnings freely.',
              },
              {
                flag: 'No SSL certificate, connection marked &ldquo;Not Secure&rdquo;',
                in7: 'IN7 (in7co.in) uses full 256-bit SSL encryption.',
              },
              {
                flag: 'App disappears from stores after collecting money',
                in7: 'IN7 has been consistently operational for years.',
              },
              {
                flag: 'Unverifiable or rotating website URLs',
                in7: 'IN7 has one permanent official URL: in7co.in.',
              },
              {
                flag: 'No user community or verifiable reviews',
                in7: 'IN7 has thousands of real, verified user reviews and a large active community.',
              },
            ].map((item) => (
              <div
                key={item.flag}
                className="glass p-4 rounded-xl"
                style={{ border: '1px solid rgba(255,255,255,0.08)' }}
              >
                <div className="flex items-start gap-2 mb-2">
                  <AlertTriangle size={16} style={{ color: '#f87171', flexShrink: 0, marginTop: '2px' }} />
                  <p className="text-white/60 text-sm line-through">{item.flag}</p>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle size={16} style={{ color: '#22c55e', flexShrink: 0, marginTop: '2px' }} />
                  <p className="text-sm" style={{ color: '#22c55e' }}>{item.in7}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── I Am 7 Game Section ───────────────────────────── */}
      <section className="py-16 px-4 max-w-4xl mx-auto">
        <h2 className="section-h2 font-black text-center mb-2">
          &ldquo;I Am 7 Game&rdquo; –{' '}
          <span style={{ color: '#e63946' }}>Is It the Same as IN7?</span>
        </h2>
        <p className="text-white/50 text-center mb-10">
          Clearing up the &ldquo;i am 7 game&rdquo;, &ldquo;is 7 game&rdquo; and &ldquo;i am 7 game download&rdquo; confusion
        </p>

        <div className="glass p-7 rounded-2xl" style={{ border: '1px solid rgba(230,57,70,0.25)' }}>
          <div className="flex items-start gap-4 mb-5">
            <BadgeCheck size={36} style={{ color: '#22c55e', flexShrink: 0 }} />
            <div>
              <h3 className="font-bold text-xl text-white mb-2">
                Yes: &ldquo;I Am 7 Game&rdquo; and &ldquo;Is 7 Game&rdquo; Both Refer to IN7 Game
              </h3>
              <p className="text-white/65 text-sm leading-relaxed">
                The search terms <strong style={{ color: '#e63946' }}>&ldquo;i am 7 game&rdquo;</strong>,{' '}
                <strong style={{ color: '#e63946' }}>&ldquo;is 7 game&rdquo;</strong>, and{' '}
                <strong style={{ color: '#e63946' }}>&ldquo;i am 7 game download&rdquo;</strong> are
                popular variations used by Indian users when searching for IN7 Game online.
                These are informal phonetic searches for <strong>IN7</strong>, the same platform at in7co.in.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-4 mb-5">
            {[
              { search: '"i am 7 game"', answer: 'This is IN7 Game (in7co.in). Real earning app.' },
              { search: '"is 7 game"', answer: 'Same as IN7 Game. Official site: in7co.in.' },
              { search: '"i am 7 game download"', answer: 'Download official IN7 APK from in7co.in.' },
            ].map((item) => (
              <div
                key={item.search}
                className="glass p-4 rounded-xl text-center"
                style={{ border: '1px solid rgba(230,57,70,0.15)' }}
              >
                <p className="font-bold text-red-400 mb-2 text-sm">{item.search}</p>
                <p className="text-white/60 text-xs">{item.answer}</p>
              </div>
            ))}
          </div>

          <div
            className="rounded-xl p-4 text-center"
            style={{ background: 'rgba(230,57,70,0.07)', border: '1px solid rgba(230,57,70,0.2)' }}
          >
            <p className="text-white/80 text-sm mb-3">
              Looking for &ldquo;I Am 7 Game&rdquo;? You&apos;ve found it. Download the official IN7 APK below.
            </p>
            <DownloadButton text="Download IN7 Game APK Free" size="md" />
          </div>
        </div>
      </section>

      {/* ── FAQ ──────────────────────────────────────────── */}
      <section className="py-16 px-4 max-w-3xl mx-auto">
        <h2 className="section-h2 font-black text-center mb-2">
          Real or Fake –{' '}
          <span style={{ color: '#e63946' }}>FAQs</span>
        </h2>
        <p className="text-white/50 text-center mb-10">
          Sabse common sawaal: &ldquo;IN7 game real hai ya fake?&rdquo; Jawaab yahan hain
        </p>
        <FAQSection faqs={faqs} />
      </section>

      {/* ── Related Pages ─────────────────────────────────── */}
      <section className="py-10 px-4 max-w-3xl mx-auto">
        <h2 className="text-xl font-bold text-center mb-6 text-white/70">Related Guides</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {[
            { href: '/in7-game-download', label: '📥 Download IN7 APK' },
            { href: '/how-to-register', label: '📝 How to Register' },
            { href: '/in7-game-app', label: '📱 IN7 Game App' },
            { href: '/paise-kamane-wala-game', label: '💰 Paise Kamane Wala Game' },
          ].map(link => (
            <Link
              key={link.href}
              href={link.href}
              className="glass p-3 rounded-xl text-center text-sm text-white/70 hover:text-red-400 transition-colors"
              style={{ border: '1px solid rgba(230,57,70,0.15)' }}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </section>

      {/* ── Final CTA ─────────────────────────────────────── */}
      <section
        style={{
          background: 'linear-gradient(135deg, #001a0a, #0a0a0f)',
          border: '1px solid rgba(34,197,94,0.25)',
        }}
        className="cta-section px-4 text-center"
      >
        <div
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-bold mb-4"
          style={{
            background: 'rgba(34,197,94,0.1)',
            border: '1px solid rgba(34,197,94,0.3)',
            color: '#22c55e',
          }}
        >
          <BadgeCheck size={15} style={{ color: '#22c55e' }} /> IN7 Game is 100% Real – Verified ✓
        </div>
        <h2 className="text-3xl font-black mb-4">
          Join <span style={{ color: '#e63946' }}>50 Lakh+ Real Users</span> on IN7 Game
        </h2>
        <p className="text-white/60 mb-6 max-w-xl mx-auto">
          IN7 Game is real, safe and paying. Download the official APK from in7co.in,
          register in 2 minutes, get ₹777 free bonus and start earning real cash today.
        </p>
        <DownloadButton text="Download IN7 – Real & Free" size="lg" />
        <div className="flex justify-center gap-6 mt-6 text-sm text-white/50 flex-wrap">
          <Link href="/in7-game-download" className="hover:text-red-500 transition-colors">Download IN7 APK</Link>
          <Link href="/how-to-register" className="hover:text-red-500 transition-colors">Register Guide</Link>
          <Link href="/in7-game-app" className="hover:text-red-500 transition-colors">IN7 Game App</Link>
          <Link href="/paise-kamane-wala-game" className="hover:text-red-500 transition-colors">Paise Kamao</Link>
        </div>
        <p className="text-white/40 text-xs mt-4">
          18+ Only | 100% Real | Instant UPI Withdrawal | Official: in7co.in
        </p>
      </section>
    </>
  );
}
