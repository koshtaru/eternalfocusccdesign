import type { Metadata } from 'next';
import { PRIVACY_PAGE_CONTENT } from '../../lib/content';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  robots: { index: false, follow: false },
};

export default function PrivacyPage() {
  const { hero, inquiryHandling, communicationTools, updates, contact } =
    PRIVACY_PAGE_CONTENT;

  return (
    <div className="pb-20 pt-10 md:pb-28 md:pt-14">
      <div className="container-shell space-y-8 md:space-y-10">
        <section
          aria-labelledby="privacy-hero-heading"
          className="relative overflow-hidden rounded-[28px] border border-[var(--color-light-tint)] bg-gradient-to-br from-white via-[var(--color-bg)] to-[var(--color-light-tint)] px-6 py-8 shadow-[0_24px_70px_rgba(27,67,50,0.10)] md:px-10 md:py-12"
        >
          <div className="absolute inset-y-0 right-0 hidden w-1/2 bg-[radial-gradient(circle_at_top,_rgba(116,198,157,0.22),_transparent_58%)] lg:block" />
          <div className="absolute left-[-4rem] top-[-4rem] h-40 w-40 rounded-full bg-[rgba(216,243,220,0.5)] blur-3xl" />
          <div className="absolute bottom-[-5rem] right-[-2rem] h-52 w-52 rounded-full bg-[rgba(82,183,136,0.12)] blur-3xl" />

          <div className="relative max-w-3xl">
            <p className="inline-flex rounded-full border border-[rgba(27,67,50,0.12)] bg-white/80 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-[var(--color-secondary)]">
              {hero.eyebrow}
            </p>
            <h1 id="privacy-hero-heading" className="hero-title mt-6 max-w-2xl">
              {hero.heading}
            </h1>
            <p className="hero-lead mt-5">{hero.intro}</p>
            <p className="body-copy mt-4 max-w-2xl">{hero.supportingText}</p>
          </div>
        </section>

        <section
          className="rounded-[28px] border border-[rgba(82,183,136,0.14)] bg-[linear-gradient(180deg,_rgba(255,255,255,0.98),_rgba(252,253,251,0.96))] px-6 py-8 shadow-[0_18px_40px_rgba(27,67,50,0.06)] md:px-8 md:py-10"
          aria-labelledby="inquiries-heading"
        >
          <div className="max-w-3xl">
            <p className="section-kicker">{inquiryHandling.eyebrow}</p>
            <h2 id="inquiries-heading" className="section-title mt-3">
              {inquiryHandling.heading}
            </h2>
            <p className="body-copy mt-5">{inquiryHandling.body}</p>
          </div>
        </section>

        <section
          className="overflow-hidden rounded-[28px] border border-[rgba(82,183,136,0.16)] bg-[linear-gradient(180deg,_rgba(255,255,255,0.98),_rgba(216,243,220,0.38))] shadow-[0_18px_40px_rgba(27,67,50,0.06)]"
          aria-labelledby="tools-heading"
        >
          <div className="grid gap-0 lg:grid-cols-[1fr_0.95fr]">
            <div className="px-6 py-8 md:px-8 md:py-10">
              <p className="section-kicker">{communicationTools.eyebrow}</p>
              <h2 id="tools-heading" className="section-title mt-3">
                {communicationTools.heading}
              </h2>
              <p className="body-copy mt-5">{communicationTools.body}</p>
            </div>

            <div className="border-t border-[rgba(82,183,136,0.16)] bg-white px-6 py-8 lg:border-l lg:border-t-0 md:px-8 md:py-10">
              <ul className="space-y-4">
                {communicationTools.items.map((item) => (
                  <li key={item} className="card-premium-soft px-5 py-4">
                    <p className="card-copy">{item}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section
          className="rounded-[28px] border border-[rgba(82,183,136,0.18)] bg-[linear-gradient(180deg,_rgba(243,248,244,0.96),_rgba(255,255,255,0.99))] px-6 py-8 shadow-[0_16px_34px_rgba(27,67,50,0.05)] md:px-8 md:py-10"
          aria-labelledby="updates-heading"
        >
          <div className="max-w-3xl">
            <p className="section-kicker">{updates.eyebrow}</p>
            <h2 id="updates-heading" className="section-title mt-3">
              {updates.heading}
            </h2>
            <p className="body-copy mt-5">{updates.body}</p>
          </div>
        </section>

        <section
          className="rounded-[28px] border border-[rgba(82,183,136,0.14)] bg-[linear-gradient(180deg,_rgba(255,255,255,0.99),_rgba(248,250,248,0.94))] px-6 py-8 shadow-[0_16px_34px_rgba(27,67,50,0.05)] md:px-8 md:py-10"
          aria-labelledby="privacy-contact-heading"
        >
          <div className="max-w-3xl">
            <p className="section-kicker">{contact.eyebrow}</p>
            <h2 id="privacy-contact-heading" className="section-title mt-3">
              {contact.heading}
            </h2>
            <p className="body-copy mt-4">{contact.body}</p>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {contact.items.map((item) => (
              <article key={item.label} className="card-premium-soft p-5">
                <p className="card-kicker">{item.label}</p>
                {item.href ? (
                  <a
                    href={item.href}
                    className="mt-3 block text-lg font-semibold leading-7 text-[var(--color-primary)] underline decoration-[rgba(27,67,50,0.18)] underline-offset-4"
                  >
                    {item.value}
                  </a>
                ) : (
                  <p className="mt-3 text-lg font-semibold leading-7 text-[var(--color-primary)]">
                    {item.value}
                  </p>
                )}
              </article>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
