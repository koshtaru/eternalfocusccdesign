import Image from 'next/image';
import Link from 'next/link';
import { CONTACT, COPYRIGHT, EXTERNAL_LINKS, FOOTER_LINKS } from '../lib/constants';
import LeafDecoration from './LeafDecoration';

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-[rgba(43,43,43,0.10)] bg-[#F2EBE5]">
      <div className="absolute inset-x-0 top-0 h-24 bg-[radial-gradient(circle_at_top,_rgba(242,235,229,0.6),_transparent_60%)]" aria-hidden="true" />
      <div className="container-shell grid gap-10 py-11 md:grid-cols-3">
        <div className="relative">
          <div className="mb-3 flex items-center gap-3">
            <Image
              src="/logo.png"
              alt="Eternal Focus Christian Counseling logo"
              width={32}
              height={33}
              className="h-8 w-auto shrink-0"
              sizes="32px"
            />
            <h2 className="font-serif text-lg font-semibold text-[var(--color-charcoal)]">
              Eternal Focus Christian Counseling
            </h2>
          </div>
          <p className="max-w-xs text-sm leading-7 text-[var(--color-charcoal-light)]">
            Rooted in Faith, Professionalism, and Hope.
          </p>
          <div className="mt-4 space-y-0.5">
            <p className="text-sm leading-7 text-[var(--color-charcoal-light)]">{CONTACT.address}</p>
            <p className="text-sm leading-7 text-[var(--color-charcoal-light)]">{CONTACT.phone}</p>
            <p className="text-sm leading-7 text-[var(--color-charcoal-light)]">{CONTACT.email}</p>
          </div>
        </div>

        <div className="relative">
          <h2 className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-[var(--color-charcoal-light)]">Navigation</h2>
          <nav aria-label="Footer">
            <ul className="space-y-2">
              {FOOTER_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-[var(--color-charcoal-light)] transition-colors hover:text-[var(--color-sage)]"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="relative">
          <h2 className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-[var(--color-charcoal-light)]">Quick Links</h2>
          <div className="space-y-2">
            <Link
              href="/contact"
              className="block text-sm text-[var(--color-charcoal-light)] transition-colors hover:text-[var(--color-sage)]"
            >
              Contact Us
            </Link>
            <a
              href={EXTERNAL_LINKS.clientPortal}
              target="_blank"
              rel="noopener noreferrer"
              className="block text-sm text-[var(--color-charcoal-light)] transition-colors hover:text-[var(--color-sage)]"
            >
              Client Portal
            </a>
            <Link
              href="/privacy"
              className="block text-sm text-[var(--color-charcoal-light)] transition-colors hover:text-[var(--color-sage)]"
            >
              Privacy
            </Link>
          </div>
        </div>
      </div>

      <div className="border-t border-[rgba(43,43,43,0.10)] py-4">
        <p className="container-shell text-xs text-[var(--color-charcoal-light)]">
          Copyright {COPYRIGHT.year} {COPYRIGHT.owner}. All rights reserved.
        </p>
      </div>

      {/* Decorative leaf — bottom right */}
      <div className="absolute bottom-0 right-0 w-48 opacity-20 pointer-events-none" aria-hidden="true">
        <LeafDecoration variant="bottom-right" />
      </div>
    </footer>
  );
}
