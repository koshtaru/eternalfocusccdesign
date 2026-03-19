import type { Metadata } from 'next';
import { Inter, Cormorant_Garamond } from 'next/font/google';
import Footer from '../components/Footer';
import NavBar from '../components/NavBar';
import GSAPProvider from '../components/GSAPProvider';
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

export const metadata: Metadata = {
  title: SITE.title,
  description: SITE.description,
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
