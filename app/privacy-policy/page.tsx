import type { Metadata } from 'next';
import Link from 'next/link';
import DownloadButton from '@/components/DownloadButton';
import { FileText, Shield, Eye, Cookie, Link2, Lock, Baby, RefreshCw, Mail, Globe, MessageCircle } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Privacy Policy – IN7 Game | in7co.in',
  description: 'IN7 Game Privacy Policy. Learn how we collect, use and protect your personal information. Your privacy and data security are our top priority.',
  alternates: { canonical: 'https://www.in7co.in/privacy-policy' },
};

export default function PrivacyPolicy() {
  return (
    <>
      {/* Breadcrumb */}
      <nav className="max-w-6xl mx-auto px-4 py-3 text-sm text-white/50">
        <Link href="/" className="hover:text-red-500 transition-colors">Home</Link>
        <span className="mx-2">›</span>
        <span className="text-red-500">Privacy Policy</span>
      </nav>

      {/* Hero */}
      <section style={{background:'linear-gradient(135deg, #0a0a0f 0%, #0d1117 100%)'}} className="py-16 px-4 text-center">
        <div className="max-w-3xl mx-auto">
          <div className="flex justify-center mb-4">
            <Lock size={60} style={{color:'#e63946'}} />
          </div>
          <h1 className="text-4xl md:text-5xl font-black mb-4">
            <span style={{color:'#e63946'}}>Privacy Policy</span>
          </h1>
          <p className="text-white/60 text-lg">
            IN7 Game – in7co.in | Last Updated: March 2026
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-8 px-4 max-w-4xl mx-auto">
        <div className="glass p-6 rounded-xl mb-6 border border-red-500/20" style={{background:'rgba(230,57,70,0.03)'}}>
          <p className="text-white/70">
            This Privacy Policy explains how IN7 Game (&quot;we&quot;, &quot;our&quot;, or &quot;us&quot;) at <strong className="text-red-500">in7co.in</strong> collects, uses, and protects your information when you use our application and website. By using IN7 Game, you agree to the collection and use of information as described in this policy.
          </p>
        </div>

        <div className="space-y-6">

          {/* Section 1 */}
          <div className="glass p-6 rounded-2xl">
            <h2 className="text-xl font-black mb-4 text-red-500 flex items-center gap-2">
              <FileText size={22} style={{color:'#e63946'}} /> 1. Information We Collect
            </h2>
            <div className="space-y-4 text-white/70">
              <div>
                <h3 className="font-bold text-white mb-2">1.1 Personal Information</h3>
                <p className="text-sm mb-2">When you register and use IN7 Game, we may collect the following personal information:</p>
                <ul className="list-disc list-inside space-y-1 text-sm text-white/60 ml-4">
                  <li>Mobile phone number (used for registration and OTP verification)</li>
                  <li>Name and profile information you provide</li>
                  <li>Bank account or UPI ID details for withdrawal processing</li>
                  <li>KYC documents (Aadhaar, PAN) when required for compliance</li>
                  <li>Email address (if provided)</li>
                </ul>
              </div>
              <div>
                <h3 className="font-bold text-white mb-2">1.2 Device Information</h3>
                <p className="text-sm mb-2">We automatically collect certain device information including:</p>
                <ul className="list-disc list-inside space-y-1 text-sm text-white/60 ml-4">
                  <li>Device model, brand, and operating system version</li>
                  <li>Unique device identifiers (Device ID, Android ID)</li>
                  <li>IP address and network connection type</li>
                  <li>App version and installed IN7 APK version</li>
                  <li>Screen resolution and display settings</li>
                </ul>
              </div>
              <div>
                <h3 className="font-bold text-white mb-2">1.3 Usage Information</h3>
                <p className="text-sm mb-2">We collect information about how you interact with IN7 Game:</p>
                <ul className="list-disc list-inside space-y-1 text-sm text-white/60 ml-4">
                  <li>Games played, game session duration and frequency</li>
                  <li>Transactions – deposits, withdrawals, bonus claims</li>
                  <li>Features accessed and in-app navigation patterns</li>
                  <li>Customer support interactions and queries</li>
                  <li>Referral activities and referral code usage</li>
                </ul>
              </div>
              <div>
                <h3 className="font-bold text-white mb-2">1.4 Cookies &amp; Tracking</h3>
                <p className="text-sm text-white/60">Our website (in7co.in) uses cookies and similar technologies to improve your experience, remember preferences, analyze traffic patterns, and serve relevant content. You can control cookie settings through your browser.</p>
              </div>
            </div>
          </div>

          {/* Section 2 */}
          <div className="glass p-6 rounded-2xl">
            <h2 className="text-xl font-black mb-4 text-red-500 flex items-center gap-2">
              <Eye size={22} style={{color:'#e63946'}} /> 2. How We Use Your Information
            </h2>
            <div className="text-white/70 text-sm space-y-3">
              <p>IN7 Game uses the information collected for the following purposes:</p>
              <ul className="space-y-2 ml-4">
                {[
                  'Account creation, verification, and ongoing account management',
                  'Processing game transactions, deposits, and withdrawal requests',
                  'Sending OTP verification messages and account security alerts',
                  'Providing 24/7 customer support and responding to inquiries',
                  'Personalizing your gaming experience and game recommendations',
                  'Preventing fraud, cheating, and maintaining platform security',
                  'Sending important updates, bonus notifications, and promotional offers',
                  'Analyzing platform performance and improving our services',
                  'Compliance with applicable laws and regulatory requirements',
                  'Calculating and distributing referral bonuses and rewards',
                ].map(item => (
                  <li key={item} className="flex items-start gap-2 text-white/60">
                    <span className="text-red-500 font-bold flex-shrink-0">•</span> {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Section 3 */}
          <div className="glass p-6 rounded-2xl">
            <h2 className="text-xl font-black mb-4 text-red-500 flex items-center gap-2">
              <Cookie size={22} style={{color:'#e63946'}} /> 3. Cookies Policy
            </h2>
            <div className="text-white/70 text-sm space-y-3">
              <p>Our website in7co.in uses the following types of cookies:</p>
              <div className="space-y-3">
                {[
                  { type: 'Essential Cookies', desc: 'Required for the website to function. These cannot be disabled. They manage user sessions and basic site functionality.' },
                  { type: 'Analytics Cookies', desc: 'Help us understand how visitors use our site. We use this data to improve website performance and user experience.' },
                  { type: 'Preference Cookies', desc: 'Remember your language and display preferences for a better, personalized experience on return visits.' },
                  { type: 'Marketing Cookies', desc: 'Used to deliver relevant advertisements and track the effectiveness of our promotional campaigns.' },
                ].map(c => (
                  <div key={c.type} className="glass p-3 rounded-lg">
                    <h3 className="font-bold text-white text-xs mb-1">{c.type}</h3>
                    <p className="text-white/60 text-xs">{c.desc}</p>
                  </div>
                ))}
              </div>
              <p className="text-white/60">You can manage or disable cookies through your browser settings. Note that disabling certain cookies may affect website functionality.</p>
            </div>
          </div>

          {/* Section 4 */}
          <div className="glass p-6 rounded-2xl">
            <h2 className="text-xl font-black mb-4 text-red-500 flex items-center gap-2">
              <Link2 size={22} style={{color:'#e63946'}} /> 4. Third-Party Links
            </h2>
            <div className="text-white/70 text-sm space-y-3">
              <p>IN7 Game may contain links to third-party websites, payment gateways, or services. Please be aware that:</p>
              <ul className="space-y-2 ml-4">
                {[
                  'We have no control over the content or privacy practices of third-party websites',
                  'Our Privacy Policy does not apply to external sites or services',
                  'We recommend reviewing the privacy policy of any third-party service you use',
                  'Payment processors (UPI, bank networks) have their own privacy and security standards',
                  'Third-party analytics tools we use are governed by their respective policies',
                ].map(item => (
                  <li key={item} className="flex items-start gap-2 text-white/60">
                    <span className="text-red-500 flex-shrink-0">•</span> {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Section 5 */}
          <div className="glass p-6 rounded-2xl">
            <h2 className="text-xl font-black mb-4 text-red-500 flex items-center gap-2">
              <Shield size={22} style={{color:'#e63946'}} /> 5. Data Security
            </h2>
            <div className="text-white/70 text-sm space-y-3">
              <p>We take data security seriously and implement industry-standard measures to protect your information:</p>
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  { icon: <Lock size={20} style={{color:'#e63946'}} />, title: '256-bit SSL Encryption', desc: 'All data transmitted between your device and our servers is encrypted using bank-grade SSL technology.' },
                  { icon: <Shield size={20} style={{color:'#e63946'}} />, title: 'Secure Storage', desc: 'Personal and financial data is stored on encrypted servers with restricted access controls.' },
                  { icon: <Eye size={20} style={{color:'#e63946'}} />, title: 'Fraud Monitoring', desc: 'Real-time monitoring systems detect and prevent fraudulent activities 24/7.' },
                  { icon: <Lock size={20} style={{color:'#e63946'}} />, title: 'Password Protection', desc: 'Passwords are hashed and never stored in plain text. Multi-factor authentication available.' },
                ].map(s => (
                  <div key={s.title} className="glass p-3 rounded-lg">
                    <div className="mb-1">{s.icon}</div>
                    <h3 className="font-bold text-xs text-white mb-1">{s.title}</h3>
                    <p className="text-white/60 text-xs">{s.desc}</p>
                  </div>
                ))}
              </div>
              <p className="text-white/60">While we strive to protect your information, no method of internet transmission is 100% secure. We continuously work to improve our security measures.</p>
            </div>
          </div>

          {/* Section 6 */}
          <div className="glass p-6 rounded-2xl border border-red-500/20" style={{background:'rgba(255,0,0,0.03)'}}>
            <h2 className="text-xl font-black mb-4 text-red-500 flex items-center gap-2">
              <Baby size={22} style={{color:'#e63946'}} /> 6. Children&apos;s Privacy (18+ Only)
            </h2>
            <div className="text-white/70 text-sm space-y-3">
              <p className="text-red-400 font-semibold">IN7 Game is strictly for users aged 18 years and above.</p>
              <p>We do not knowingly collect, use, or disclose personal information from individuals under the age of 18. IN7 Game strictly enforces this age requirement:</p>
              <ul className="space-y-2 ml-4">
                {[
                  'Users must confirm they are 18+ during registration',
                  'If we discover a user is under 18, their account will be immediately suspended',
                  'Any funds in underage accounts will be frozen pending legal resolution',
                  'Parents/guardians who believe their child has created an account should contact us immediately',
                  'We comply with all applicable regulations regarding minors and online platforms',
                ].map(item => (
                  <li key={item} className="flex items-start gap-2 text-white/60">
                    <span className="text-red-400 flex-shrink-0">•</span> {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Section 7 */}
          <div className="glass p-6 rounded-2xl">
            <h2 className="text-xl font-black mb-4 text-red-500 flex items-center gap-2">
              <RefreshCw size={22} style={{color:'#e63946'}} /> 7. Changes to This Policy
            </h2>
            <div className="text-white/70 text-sm space-y-3">
              <p>IN7 Game reserves the right to update this Privacy Policy at any time. When changes are made:</p>
              <ul className="space-y-2 ml-4">
                {[
                  'The updated policy will be posted on in7co.in/privacy-policy',
                  'The "Last Updated" date at the top will be revised',
                  'Significant changes may be communicated via in-app notification',
                  'Continued use of IN7 Game after policy updates constitutes acceptance',
                  'We recommend reviewing this page periodically for any changes',
                ].map(item => (
                  <li key={item} className="flex items-start gap-2 text-white/60">
                    <span className="text-red-500 flex-shrink-0">•</span> {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Section 8 */}
          <div className="glass p-6 rounded-2xl">
            <h2 className="text-xl font-black mb-4 text-red-500 flex items-center gap-2">
              <Mail size={22} style={{color:'#e63946'}} /> 8. Contact Us
            </h2>
            <div className="text-white/70 text-sm space-y-3">
              <p>If you have questions, concerns, or requests regarding this Privacy Policy or your personal data, please contact us:</p>
              <div className="grid md:grid-cols-3 gap-4 mt-4">
                {[
                  { icon: <Globe size={24} style={{color:'#e63946'}} />, label: 'Website', value: 'in7co.in' },
                  { icon: <Mail size={24} style={{color:'#e63946'}} />, label: 'Email', value: 'privacy@in7co.in' },
                  { icon: <MessageCircle size={24} style={{color:'#e63946'}} />, label: 'In-App Support', value: '24/7 Live Chat' },
                ].map(c => (
                  <div key={c.label} className="glass p-4 rounded-lg text-center">
                    <div className="flex justify-center mb-2">{c.icon}</div>
                    <div className="text-xs text-white/50 mb-1">{c.label}</div>
                    <div className="font-bold text-red-500 text-sm">{c.value}</div>
                  </div>
                ))}
              </div>
              <p className="text-white/60 mt-4">
                Data retention: We retain your personal data for as long as your account is active or as required by law. You may request deletion of your account and personal data by contacting our support team.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="py-8 px-4 max-w-4xl mx-auto">
        <div className="glass p-6 rounded-2xl text-center border border-red-500/20">
          <p className="text-white/60 mb-4">Have questions about our privacy practices? Contact our support team.</p>
          <div className="flex flex-wrap gap-4 justify-center">
            <DownloadButton text="Download IN7 Game" size="md" />
            <Link href="/about-us" className="px-6 py-3 rounded-lg font-semibold text-white/80 hover:text-red-500 transition-all" style={{background:'rgba(255,255,255,0.08)', border:'1px solid rgba(255,255,255,0.15)'}}>
              About Us →
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
