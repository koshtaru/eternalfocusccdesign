'use client';

import { useState } from 'react';
import { CONTACT_PAGE_CONTENT } from '../../lib/content';
import LeafDecoration from '../../components/LeafDecoration';

export default function ContactPage() {
  const { hero, waysToStart } = CONTACT_PAGE_CONTENT;
  const [formState, setFormState] = useState<'idle' | 'loading' | 'sent' | 'error'>('idle');

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setFormState('loading');
    const form = e.currentTarget;
    const data = new FormData(form);
    const body = new URLSearchParams(data as unknown as Record<string, string>).toString();
    try {
      const res = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body,
      });
      if (res.ok) { setFormState('sent'); }
      else { setFormState('error'); }
    } catch {
      setFormState('error');
    }
  }

  return (
    <div>
      {/* ── Hero ── */}
      <section
        aria-labelledby="contact-hero-heading"
        className="relative w-full bg-cream py-24"
      >
        <div className="container-shell grid gap-12 lg:grid-cols-2 lg:items-start">

          {/* Left — form */}
          <div>
            <p className="label-upper mb-4">{hero.eyebrow}</p>
            <div className="hairline mb-8" />
            <h1 id="contact-hero-heading" className="section-title">{hero.heading}</h1>
            <p className="body-copy mt-5">{hero.intro}</p>

            {formState === 'sent' ? (
              <div className="mt-8 rounded-2xl bg-[var(--color-light-tint)] px-6 py-8">
                <p className="text-lg font-semibold text-[var(--color-sage-dark)]">Message received.</p>
                <p className="mt-2 body-copy">
                  Thank you for reaching out. Our office will be in touch with you soon.
                </p>
              </div>
            ) : (
              <form
                name="contact"
                data-netlify="true"
                data-netlify-honeypot="bot-field"
                onSubmit={handleSubmit}
                className="mt-8 grid gap-4"
              >
                {/* Required hidden inputs for Netlify */}
                <input type="hidden" name="form-name" value="contact" />
                <input type="hidden" name="bot-field" />

                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="contact-name" className="text-xs font-semibold uppercase tracking-[0.12em] text-[var(--color-charcoal)]">
                      Full Name
                    </label>
                    <input
                      id="contact-name"
                      name="name"
                      type="text"
                      required
                      autoComplete="name"
                      className="rounded-xl border border-[var(--color-cream-dark)] bg-white px-4 py-3 text-sm text-[var(--color-charcoal)] placeholder:text-[var(--color-charcoal)]/40 focus:border-[var(--color-sage-dark)] focus:outline-none focus:ring-2 focus:ring-[var(--color-sage-dark)]/20 transition"
                      placeholder="Your full name"
                    />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="contact-email" className="text-xs font-semibold uppercase tracking-[0.12em] text-[var(--color-charcoal)]">
                      Email
                    </label>
                    <input
                      id="contact-email"
                      name="email"
                      type="email"
                      required
                      autoComplete="email"
                      className="rounded-xl border border-[var(--color-cream-dark)] bg-white px-4 py-3 text-sm text-[var(--color-charcoal)] placeholder:text-[var(--color-charcoal)]/40 focus:border-[var(--color-sage-dark)] focus:outline-none focus:ring-2 focus:ring-[var(--color-sage-dark)]/20 transition"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="contact-phone" className="text-xs font-semibold uppercase tracking-[0.12em] text-[var(--color-charcoal)]">
                    Phone <span className="normal-case font-normal tracking-normal opacity-50">(optional)</span>
                  </label>
                  <input
                    id="contact-phone"
                    name="phone"
                    type="tel"
                    autoComplete="tel"
                    className="rounded-xl border border-[var(--color-cream-dark)] bg-white px-4 py-3 text-sm text-[var(--color-charcoal)] placeholder:text-[var(--color-charcoal)]/40 focus:border-[var(--color-sage-dark)] focus:outline-none focus:ring-2 focus:ring-[var(--color-sage-dark)]/20 transition"
                    placeholder="(920) 000-0000"
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="contact-message" className="text-xs font-semibold uppercase tracking-[0.12em] text-[var(--color-charcoal)]">
                    Message
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    required
                    rows={5}
                    className="rounded-xl border border-[var(--color-cream-dark)] bg-white px-4 py-3 text-sm text-[var(--color-charcoal)] placeholder:text-[var(--color-charcoal)]/40 focus:border-[var(--color-sage-dark)] focus:outline-none focus:ring-2 focus:ring-[var(--color-sage-dark)]/20 transition resize-none"
                    placeholder="How can we help you?"
                  />
                </div>

                {formState === 'error' && (
                  <p className="text-sm text-red-600">
                    Something went wrong. Please try again, or reach us directly by phone or email.
                  </p>
                )}

                <button
                  type="submit"
                  disabled={formState === 'loading'}
                  className="button-base mt-1 self-start rounded-xl bg-[var(--color-sage-dark)] px-8 py-3.5 text-sm font-semibold text-white transition hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-sage-dark)]/40 disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {formState === 'loading' ? 'Sending…' : 'Send Message'}
                </button>
              </form>
            )}
          </div>

          {/* Right — contact info card + decorative accent */}
          <div className="flex flex-col items-center gap-6">
            <div className="w-full rounded-[30px] bg-[#5E6A3E] p-8 text-white lg:sticky lg:top-28">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-sage-light mb-6">Get in Touch</p>
              <div className="space-y-5">
                <div className="border-b border-white/20 pb-5">
                  <p className="text-xs uppercase tracking-[0.14em] text-white/50 mb-2">Phone</p>
                  <a
                    href={`tel:${waysToStart.items[0].value}`}
                    className="block text-2xl font-bold text-white hover:text-white/80 transition-colors"
                  >
                    {waysToStart.items[0].value}
                  </a>
                  <p className="mt-1.5 text-sm text-white/65">{waysToStart.items[0].description}</p>
                </div>
                <div className="border-b border-white/20 pb-5">
                  <p className="text-xs uppercase tracking-[0.14em] text-white/50 mb-2">Email</p>
                  <a
                    href={`mailto:${waysToStart.items[1].value}`}
                    className="block text-base font-semibold text-white hover:text-white/80 transition-colors break-all"
                  >
                    {waysToStart.items[1].value}
                  </a>
                  <p className="mt-1.5 text-sm text-white/65">{waysToStart.items[1].description}</p>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-[0.14em] text-white/50 mb-2">Session Format</p>
                  <p className="text-base font-medium text-white">{waysToStart.items[2].value}</p>
                  <p className="mt-1.5 text-sm text-white/65">{waysToStart.items[2].description}</p>
                </div>
              </div>
            </div>

            <LeafDecoration
              variant="brand-cluster"
              className="w-[300px] opacity-50 pointer-events-none [mix-blend-mode:multiply]"
              aria-hidden="true"
            />
          </div>

        </div>
      </section>
    </div>
  );
}
