import type { Metadata } from 'next';
import Link from 'next/link';
import DownloadButton from '@/components/DownloadButton';
import FAQSection from '@/components/FAQSection';
import { LogIn, Smartphone, Phone, Lock, CheckCircle, AlertCircle, RefreshCw, KeyRound, WifiOff, ShieldAlert } from 'lucide-react';

export const metadata: Metadata = {
  title: 'IN7 Game Login – in7 com login | Get ₹777 2026',
  description:
    'IN7 Game login guide. in7 com login, in7 login registration, in7 com game login step by step. New user? Download IN7 APK, register & get ₹777 bonus instantly.',
  alternates: { canonical: 'https://www.in7co.in/in7-game-login' },
  openGraph: {
    title: 'IN7 Game Login – in7 com login | Get ₹777 2026',
    description:
      'IN7 Game login guide. in7 com login, in7 login registration, in7 com game login step by step. New user? Download IN7 APK, register & get ₹777 bonus instantly.',
    url: 'https://www.in7co.in/in7-game-login',
    images: [{ url: '/in7-game-banner.jpeg' }],
  },
};

const faqs = [
  {
    q: 'IN7 Game login kaise kare?',
    a: "App kholo → mobile number dalo → password dalo → Login dabaao. Bas. Password yaad nahi toh 'Forgot Password' tap karo – OTP se 60 seconds me reset ho jaata hai.",
  },
  {
    q: 'in7 com login kaise kare?',
    a: 'in7co.in website ya IN7 Game app – dono se login ho sakta hai. Registered mobile number aur password enter karo, Login tap karo. Account turant open hoga.',
  },
  {
    q: 'IN7 Game ka official login kahan se hota hai?',
    a: 'Official IN7 app ya in7co.in website se. Kisi aur URL se login mat karo – fake sites exist karti hain jo bilkul asl jaisi lagti hain. Hamesha in7co.in hi use karo.',
  },
  {
    q: 'Password bhool gaya – kya karu?',
    a: "Login screen pe 'Forgot Password' tap karo. Registered number dalo, OTP aayega, verify karo, naya password set karo. Pura process 60 seconds ka hai.",
  },
  {
    q: 'OTP nahi aa raha – kya problem hai?',
    a: 'Pehle 60 seconds wait karo – kabhi kabhi delay hoti hai. Fir Resend OTP tap karo. Number sahi hai na check karo. Dual SIM hai toh correct SIM select karo. Inbox full toh nahi? Network signal bhi dekho.',
  },
  {
    q: 'IN7 Play Store par kyun nahi hai?',
    a: "Nahi hai. Real-money gaming apps Play Store pe nahi hote India me – Google ki policy hai. Official APK sirf in7co.in se milega. Play Store par agar kuch IN7 dikh raha hai – wo fake hai, bilkul download mat karo.",
  },
  {
    q: 'Naya account kaise banaye – IN7 login registration?',
    a: 'in7co.in se APK download karo → install karo → app me Register tap karo → mobile number dalo → OTP verify karo → password set karo. Done – ₹777 bonus automatically wallet me aa jaata hai.',
  },
  {
    q: 'Ek se zyada IN7 account bana sakte hain kya?',
    a: 'Nahi. Ek number pe ek account. Multiple accounts banane pe permanently ban hota hai. Apne ek account se hi khelo.',
  },
];

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.in7co.in' },
    { '@type': 'ListItem', position: 2, name: 'IN7 Game Login', item: 'https://www.in7co.in/in7-game-login' },
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

export default function In7GameLogin() {
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

      {/* Breadcrumb */}
      <nav className="max-w-6xl mx-auto px-4 py-3 text-sm text-white/50">
        <Link href="/" className="hover:text-red-500 transition-colors">Home</Link>
        <span className="mx-2">›</span>
        <span style={{ color: '#e63946' }}>IN7 Game Login</span>
      </nav>

      {/* ── Hero ─────────────────────────────────────────── */}
      <section
        style={{
          background: 'linear-gradient(135deg, #0a0a0f 0%, #0d1117 60%, #0a0a1a 100%)',
          minHeight: '56vh',
        }}
        className="flex items-center justify-center px-4 py-16 text-center relative overflow-hidden"
      >
        <div
          style={{
            position: 'absolute',
            top: '15%',
            left: '5%',
            width: '380px',
            height: '380px',
            background: 'rgba(230,57,70,0.05)',
            borderRadius: '50%',
            filter: 'blur(80px)',
          }}
        />
        <div className="relative z-10 max-w-3xl mx-auto">
          <div
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold mb-4"
            style={{
              background: 'rgba(230,57,70,0.1)',
              border: '1px solid rgba(230,57,70,0.3)',
              color: '#e63946',
            }}
          >
            <LogIn size={14} style={{ color: '#e63946' }} /> Official IN7 Login & Registration Guide 2026
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-5 leading-tight">
            <span style={{ color: '#e63946' }}>IN7 Game Login</span>
            <br />
            – in7 com login Guide 2026
          </h1>

          <p className="text-white/70 text-lg mb-6 max-w-2xl mx-auto">
            Pehli baar aa rahe ho ya purana account open karna hai –{' '}
            <strong style={{ color: '#e63946' }}>IN7 Game login</strong> aur registration
            ka poora step-by-step guide yahan hai. ₹777 bonus bhi yaad rakhna.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <DownloadButton text="Download IN7 & Login Free" size="lg" />
            <Link
              href="/how-to-register"
              className="px-6 py-3 rounded-lg font-semibold text-white/80 hover:text-red-500 transition-all"
              style={{ background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.15)' }}
            >
              Register Guide →
            </Link>
          </div>

          <div className="flex flex-wrap justify-center gap-6">
            {[
              { icon: <CheckCircle size={16} style={{ color: '#e63946' }} />, label: 'Instant Access' },
              { icon: <Smartphone size={16} style={{ color: '#e63946' }} />, label: 'Mobile Login' },
              { icon: <Lock size={16} style={{ color: '#e63946' }} />, label: 'Secure & Encrypted' },
              { icon: <LogIn size={16} style={{ color: '#e63946' }} />, label: '₹777 on Register' },
            ].map(({ icon, label }) => (
              <div key={label} className="flex items-center gap-1 text-sm text-white/60">
                {icon} {label}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Step-by-Step Login ────────────────────────────── */}
      <section className="py-16 px-4 max-w-4xl mx-auto">
        <h2 className="section-h2 font-black text-center mb-2">
          IN7 Game Login –{' '}
          <span style={{ color: '#e63946' }}>Step by Step</span>
        </h2>
        <p className="text-white/50 text-center mb-10">
          Already have an IN7 account? Follow these 5 steps for in7 com game login
        </p>

        <div className="space-y-4">
          {[
            {
              num: '1',
              icon: <Smartphone size={20} style={{ color: '#e63946' }} />,
              title: 'Open IN7 App',
              desc: 'Launch the IN7 Game app on your Android phone. If you do not have the app installed yet, download the official IN7 APK from in7co.in first.',
            },
            {
              num: '2',
              icon: <Phone size={20} style={{ color: '#e63946' }} />,
              title: 'Enter Mobile Number',
              desc: 'On the login screen, enter your registered 10-digit Indian mobile number in the input field. This is the number you used at the time of registration.',
            },
            {
              num: '3',
              icon: <Lock size={20} style={{ color: '#e63946' }} />,
              title: 'Enter Password',
              desc: 'Type your account password carefully. Passwords are case-sensitive. If you have forgotten your password, tap the "Forgot Password" link below the field.',
            },
            {
              num: '4',
              icon: <LogIn size={20} style={{ color: '#e63946' }} />,
              title: 'Tap Login',
              desc: 'Press the Login / Sign In button. IN7 will verify your credentials instantly. A successful login takes less than 2 seconds on any internet connection.',
            },
            {
              num: '5',
              icon: <CheckCircle size={20} style={{ color: '#e63946' }} />,
              title: 'Access Your Account',
              desc: 'You are now logged in! Access your wallet, games, withdrawal history, referral code and all platform features from your IN7 account dashboard.',
            },
          ].map((step) => (
            <div
              key={step.num}
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
          <DownloadButton text="Download IN7 APK & Login" size="lg" />
        </div>
      </section>

      {/* ── New User Registration ─────────────────────────── */}
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
            New User?{' '}
            <span style={{ color: '#e63946' }}>Register on IN7</span>
          </h2>
          <p className="text-white/50 text-center mb-10">
            IN7 login registration takes under 2 minutes. Follow these 6 steps and get ₹777 instantly
          </p>

          <div className="space-y-4">
            {[
              {
                num: '1',
                title: 'Download APK',
                desc: 'Go to in7co.in and download the official IN7 Game APK. Enable "Install from Unknown Sources" in Android Settings → Security, then install the APK.',
              },
              {
                num: '2',
                title: 'Open App',
                desc: 'Launch the installed IN7 Game app. On the welcome screen, tap the &ldquo;Register&rdquo; or &ldquo;Sign Up&rdquo; button, not the Login button.',
              },
              {
                num: '3',
                title: 'Enter Mobile Number',
                desc: 'Enter your valid 10-digit Indian mobile number. This will be your permanent IN7 login ID. Use your personal number, one number per account.',
              },
              {
                num: '4',
                title: 'Verify OTP',
                desc: 'You will receive a 4–6 digit OTP via SMS. Enter it in the verification box within 60 seconds. Tap "Resend OTP" if it does not arrive.',
              },
              {
                num: '5',
                title: 'Set Password & Register',
                desc: 'Create a strong password (minimum 8 characters, mix of letters and numbers). Enter a referral code if you have one for extra bonus. Tap Register to complete.',
              },
              {
                num: '6',
                title: 'Get ₹777 Bonus',
                desc: 'Your IN7 account is created! ₹777 welcome bonus is automatically credited to your wallet. No deposit needed. Start playing and winning immediately!',
              },
            ].map((step) => (
              <div
                key={step.num}
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
                  {step.num}
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-red-500 mb-1">{step.title}</h3>
                  <p className="text-white/60 text-sm">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <DownloadButton text="Download IN7 & Register Now" size="lg" />
            <p className="text-white/40 text-xs mt-3">Free · ₹777 Auto-credit · No deposit required</p>
          </div>
        </div>
      </section>

      {/* ── Login Problems – Solutions ────────────────────── */}
      <section className="py-16 px-4 max-w-4xl mx-auto">
        <h2 className="section-h2 font-black text-center mb-2">
          IN7 Login Problems –{' '}
          <span style={{ color: '#e63946' }}>Solutions</span>
        </h2>
        <p className="text-white/50 text-center mb-10">
          Common in7 game login issues and how to fix them instantly
        </p>

        <div className="grid md:grid-cols-2 gap-5">
          {[
            {
              icon: <KeyRound size={24} style={{ color: '#e63946' }} />,
              problem: 'Forgot Password',
              solution:
                "Tap 'Forgot Password' on the login screen. Enter your registered mobile number, receive OTP, verify it, and set a new password. Process takes under 60 seconds.",
            },
            {
              icon: <Phone size={24} style={{ color: '#e63946' }} />,
              problem: 'OTP Not Received',
              solution:
                'Check your mobile signal. Ensure correct number is entered. Wait 60 seconds then tap Resend OTP. Check if your SMS inbox is full. Try switching mobile data on/off.',
            },
            {
              icon: <ShieldAlert size={24} style={{ color: '#e63946' }} />,
              problem: 'Account Locked',
              solution:
                'After multiple failed login attempts, accounts are temporarily locked for security. Wait 30 minutes and try again. Contact in-app support if the issue persists.',
            },
            {
              icon: <WifiOff size={24} style={{ color: '#e63946' }} />,
              problem: 'App Not Opening',
              solution:
                'Force stop the IN7 app, clear the cache (Settings → Apps → IN7 → Clear Cache), then reopen. If the issue continues, uninstall and reinstall the latest APK from in7co.in.',
            },
          ].map((item) => (
            <div key={item.problem} className="glass p-5 rounded-xl">
              <h3 className="font-bold text-red-400 mb-3 flex items-center gap-2">
                {item.icon}
                <span>{item.problem}</span>
              </h3>
              <div
                className="rounded-lg p-3 text-sm text-white/70"
                style={{ background: 'rgba(230,57,70,0.06)', border: '1px solid rgba(230,57,70,0.15)' }}
              >
                <span className="text-red-400 font-semibold">Fix: </span>
                {item.solution}
              </div>
            </div>
          ))}
        </div>

        <div
          className="glass mt-8 p-5 rounded-xl border text-center"
          style={{ borderColor: 'rgba(230,57,70,0.3)', background: 'rgba(230,57,70,0.04)' }}
        >
          <AlertCircle size={20} style={{ color: '#e63946', display: 'inline', marginRight: '8px' }} />
          <span className="text-white/70 text-sm">
            Still having issues? Use the <strong style={{ color: '#e63946' }}>24×7 In-App Support Chat</strong> in
            the IN7 app. Go to <em>Profile → Help → Chat Support</em> for instant assistance.
          </span>
        </div>
      </section>

      {/* ── Login Details Table ───────────────────────────── */}
      <section
        style={{
          background: 'rgba(230,57,70,0.03)',
          borderTop: '1px solid rgba(230,57,70,0.1)',
          borderBottom: '1px solid rgba(230,57,70,0.1)',
        }}
        className="py-16 px-4"
      >
        <div className="max-w-3xl mx-auto">
          <h2 className="section-h2 font-black text-center mb-8">
            IN7 <span style={{ color: '#e63946' }}>Login Details</span>
          </h2>
          <div className="glass rounded-2xl overflow-hidden">
            <table className="w-full info-table">
              <tbody>
                {[
                  ['Login Method', 'Mobile Number + Password'],
                  ['OTP Validity', '60 Seconds'],
                  ['Account Type', 'One Per Mobile'],
                  ['Signup Bonus', '₹777 (Auto-credit)'],
                  ['Support', '24×7 In-App Chat'],
                  ['Official Site', 'in7co.in'],
                ].map(([label, value], i) => (
                  <tr
                    key={label}
                    style={{ background: i % 2 === 0 ? 'rgba(255,255,255,0.03)' : 'transparent' }}
                  >
                    <td className="font-semibold text-red-500 w-1/2">{label}</td>
                    <td className="text-white/80">{value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ── IN7 APK for Play Store searchers ─────────────── */}
      <section className="py-16 px-4 max-w-4xl mx-auto">
        <h2 className="section-h2 font-black text-center mb-2">
          IN7 Game Download –{' '}
          <span style={{ color: '#e63946' }}>Play Store & APK</span>
        </h2>
        <p className="text-white/50 text-center mb-10">
          Searching for in7 game download play store or in7 com apk? Here is everything you need to know.
        </p>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="glass p-6 rounded-xl">
            <h3 className="font-bold text-red-400 mb-3 flex items-center gap-2">
              <AlertCircle size={18} style={{ color: '#f87171' }} />
              IN7 on Play Store
            </h3>
            <p className="text-white/65 text-sm mb-3">
              IN7 Game is <strong>not available on Google Play Store</strong>. This is common for real-money
              earning apps in India due to Play Store policies. The official method is direct APK download.
            </p>
            <p className="text-white/50 text-xs">
              Any app claiming to be IN7 on Play Store may be a fake or scam. Always use in7co.in.
            </p>
          </div>
          <div className="glass p-6 rounded-xl">
            <h3 className="font-bold text-red-500 mb-3 flex items-center gap-2">
              <CheckCircle size={18} style={{ color: '#e63946' }} />
              Download Official IN7 APK
            </h3>
            <p className="text-white/65 text-sm mb-4">
              Download the <strong style={{ color: '#e63946' }}>official IN7 APK</strong> directly from
              in7co.in. It is safe, verified and malware-free. Trusted by 50 Lakh+ Indian players.
            </p>
            <DownloadButton text="Download IN7 APK Free" size="md" />
          </div>
        </div>
      </section>

      {/* ── FAQ ──────────────────────────────────────────── */}
      <section className="py-16 px-4 max-w-3xl mx-auto">
        <h2 className="section-h2 font-black text-center mb-2">
          IN7 Login <span style={{ color: '#e63946' }}>FAQs</span>
        </h2>
        <p className="text-white/50 text-center mb-10">
          Sabse zyada puche jaane wale in7 game login aur registration ke sawaal
        </p>
        <FAQSection faqs={faqs} />
      </section>

      {/* ── Final CTA ─────────────────────────────────────── */}
      <section
        style={{
          background: 'linear-gradient(135deg, #0a0a1a, #0a0a0f)',
          border: '1px solid rgba(230,57,70,0.3)',
        }}
        className="cta-section px-4 text-center"
      >
        <div
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold mb-4"
          style={{
            background: 'rgba(230,57,70,0.12)',
            border: '1px solid rgba(230,57,70,0.3)',
            color: '#e63946',
          }}
        >
          <RefreshCw size={13} style={{ color: '#e63946' }} /> New User? Register in 2 Minutes
        </div>
        <h2 className="text-3xl font-black mb-4">
          IN7 Game <span style={{ color: '#e63946' }}>Login</span> &amp; Get ₹777 Today!
        </h2>
        <p className="text-white/60 mb-6 max-w-xl mx-auto">
          Download IN7 Game APK, complete in7 login registration in under 2 minutes and
          receive ₹777 free bonus, no deposit required.
        </p>
        <DownloadButton text="Download IN7 & Login Free" size="lg" />
        <p className="text-white/40 text-xs mt-4">
          18+ Only | in7 com login | Official APK from in7co.in
        </p>
      </section>
    </>
  );
}
