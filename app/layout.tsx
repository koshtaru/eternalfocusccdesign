import type { Metadata, Viewport } from 'next';
import { Inter, Cormorant_Garamond } from 'next/font/google';
import Footer from '../components/Footer';
import NavBar from '../components/NavBar';
import GSAPProvider from '../components/GSAPProvider';
import StructuredData from '../components/StructuredData';
import { SITE } from '../lib/constants';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  variable: '--font-cormorant',
  weight: ['400', '600', '700'],
  style: ['normal', 'italic'],
  display: 'swap',
});

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: SITE.title,
    template: `%s | Eternal Focus Christian Counseling`,
  },
  description: SITE.description,
  alternates: { canonical: '/' },
  robots: { index: true, follow: true },
  openGraph: {
    type: 'website',
    siteName: SITE.name,
    title: SITE.title,
    description: SITE.description,
    url: SITE.url,
    images: [{ url: '/og-image.jpg', width: 1200, height: 628, alt: 'Eternal Focus Christian Counseling — Telehealth Therapy in Wisconsin' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: SITE.title,
    description: SITE.description,
    images: ['/og-image.jpg'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${cormorant.variable}`}>
      <body>
        <div className="grain-overlay" aria-hidden="true" />
        <a href="#main-content" className="skip-link">
          Skip to content
        </a>
        <NavBar />
        <StructuredData />
        <main id="main-content" className="relative z-0">
          <GSAPProvider>
            {children}
          </GSAPProvider>
        </main>
        <Footer />
      </body>
    </html>
  );
}
