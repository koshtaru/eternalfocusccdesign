'use client';

import { List, X } from 'phosphor-react';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { EXTERNAL_LINKS, NAV_LINKS } from '../lib/constants';

type MobileDrawerProps = {
  className?: string;
};

export default function MobileDrawer({ className }: MobileDrawerProps) {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  return (
    <div className={className}>
      <button
        type="button"
        onClick={() => setIsOpen(true)}
        className="inline-flex items-center justify-center rounded-full border border-[rgba(82,183,136,0.16)] bg-white/80 p-2.5 text-[var(--color-body)] shadow-[0_8px_18px_rgba(27,67,50,0.06)] backdrop-blur"
        aria-label="Open menu"
        aria-expanded={isOpen}
      >
        <List size={22} weight="bold" />
      </button>

      {isOpen ? (
        <>
          <button
            type="button"
            className="fixed inset-0 z-40 bg-black/40"
            onClick={() => setIsOpen(false)}
            aria-label="Close menu overlay"
          />
          <aside className="fixed right-0 top-0 z-50 h-full w-72 border-l border-[rgba(82,183,136,0.16)] bg-[linear-gradient(180deg,rgba(255,255,255,0.96),rgba(248,250,248,0.98))] p-6 shadow-[0_18px_40px_rgba(27,67,50,0.12)]">
            <div className="mb-8 flex items-center justify-between">
              <p className="font-semibold text-[var(--color-primary)]" style={{ fontFamily: 'var(--font-display)' }}>Menu</p>
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="rounded-full p-1.5"
                aria-label="Close menu"
              >
                <X size={22} weight="bold" />
              </button>
            </div>

            <nav aria-label="Mobile">
              <ul className="space-y-4">
                {NAV_LINKS.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className="block text-base text-[var(--color-body)] transition-colors hover:text-[var(--color-primary)]"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            <div className="mt-8 space-y-3 border-t border-[var(--color-light-tint)] pt-6">
              <a
                href={EXTERNAL_LINKS.bookAppointment}
                target="_blank"
                rel="noopener noreferrer"
                className="button-base button-primary flex w-full px-4 py-2.5"
              >
                Book Appointment
              </a>
              <a
                href={EXTERNAL_LINKS.clientPortal}
                target="_blank"
                rel="noopener noreferrer"
                className="button-base button-secondary flex w-full px-4 py-2.5"
              >
                Client Portal
              </a>
            </div>
          </aside>
        </>
      ) : null}
    </div>
  );
}
