'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { EXTERNAL_LINKS, NAV_LINKS, SITE } from '../lib/constants';
import MobileDrawer from './MobileDrawer';

export default function NavBar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[rgba(246,244,242,0.88)] backdrop-blur-md py-4 border-b border-[rgba(43,43,43,0.08)] shadow-[0_4px_16px_rgba(43,43,43,0.06)]'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="container-shell flex min-h-[72px] items-center justify-between gap-4">
        <Link
          href="/#"
          className="flex max-w-[18rem] items-center gap-2.5 text-[var(--color-charcoal)] md:max-w-none"
        >
          <Image
            src="/logo.png"
            alt="Eternal Focus Christian Counseling logo"
            width={46}
            height={48}
            className="h-10 w-auto shrink-0 md:h-11"
            sizes="(max-width: 768px) 40px, 44px"
          />
          <span className="font-serif text-xl font-semibold leading-tight tracking-[0.005em]">
            {SITE.name}
          </span>
        </Link>

        <nav aria-label="Primary" className="hidden items-center gap-6 md:flex">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="nav-link-editorial text-sm font-medium focus-visible:outline-none"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <a
            href={EXTERNAL_LINKS.bookAppointment}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            Book Appointment
          </a>
          <a
            href={EXTERNAL_LINKS.clientPortal}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary"
          >
            Client Portal
          </a>
        </div>

        <MobileDrawer className="md:hidden" />
      </div>
    </header>
  );
}
