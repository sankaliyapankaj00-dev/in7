import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PopupModal from "@/components/PopupModal";
import NotificationsWidget from "@/components/NotificationsWidget";
import ChatWidget from "@/components/ChatWidget";
import SpinWheel from "@/components/SpinWheel";
import MobileStickyBar from "@/components/MobileStickyBar";

export const metadata: Metadata = {
  metadataBase: new URL('https://www.in7co.in'),
  title: {
    default: 'IN7 Game – Play Online, Earn & Withdraw Instantly | in7co.in',
    template: '%s | IN7 Game'
  },
  description: "IN7 Game is India's #1 online earning game app. Download IN7 APK free, get ₹777 signup bonus, play games & withdraw instantly via UPI. Trusted by 50L+ players.",
  keywords: ['in7 game', 'in7 apk', 'in7 game online', 'ien7', 'in7 game download', 'in7 online', 'in7 game app', 'in7 game online apk', 'in7 withdrawal'],
  openGraph: {
    siteName: 'IN7 Game',
    locale: 'en_IN',
    type: 'website',
    images: [{ url: '/in7-game-banner.jpeg', width: 1200, height: 630, alt: 'IN7 Game' }],
  },
  twitter: { card: 'summary_large_image' },
  verification: { google: 'H0_1-1ApyMPxCVQQICx51FXmozHXG5YjnmUI3p7mFkY' },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
      </head>
      <body style={{background: '#0a0a0f', color: '#fff', paddingTop: '64px'}}>
        <Navbar />
        <NotificationsWidget />
        <main>{children}</main>
        <Footer />
        <PopupModal />
        <ChatWidget />
        <SpinWheel />
        <MobileStickyBar />
        {/* Global JSON-LD — WebSite + Organization */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify([
          {
            "@context": "https://schema.org",
            "@type": "WebSite",
            "name": "IN7 Game",
            "alternateName": ["in 7", "in7 apps", "ln7", "aaiae", "i am 7 game", "in7 com game", "paise jitne wala game"],
            "url": "https://www.in7co.in",
            "inLanguage": ["en-IN", "hi"],
          },
          {
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "IN7 Game",
            "url": "https://www.in7co.in",
            "logo": {
              "@type": "ImageObject",
              "url": "https://www.in7co.in/in7-game-logo.jpg",
              "width": 512,
              "height": 512,
            },
            "contactPoint": {
              "@type": "ContactPoint",
              "contactType": "customer support",
              "availableLanguage": ["English", "Hindi"],
            },
            "sameAs": ["https://www.in7co.in"],
          },
        ])}} />
      </body>
    </html>
  );
}
