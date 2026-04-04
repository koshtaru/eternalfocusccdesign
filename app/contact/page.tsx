import { CONTACT_PAGE_CONTENT } from '../../lib/content';
import LeafDecoration from '../../components/LeafDecoration';

export default function ContactPage() {
  const { hero, waysToStart, whatToExpect, insuranceStatus, closingCta } = CONTACT_PAGE_CONTENT;

  return (
    <div>
      {/* ── Hero ── */}
      <section
        aria-labelledby="contact-hero-heading"
        className="relative w-full bg-cream py-24"
      >
        <div className="container-shell grid gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="label-upper mb-4">{hero.eyebrow}</p>
            <div className="hairline mb-8" />
            <h1 id="contact-hero-heading" className="section-title">{hero.heading}</h1>
            <p className="body-copy mt-5">{hero.intro}</p>
            <p className="body-copy mt-3">{hero.supportingText}</p>
          </div>
          {/* Contact details card — dark green, matching the faith section card */}
          <div className="rounded-[30px] bg-[#5E6A3E] p-8 text-white">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-sage-light mb-6">Get in Touch</p>
            <div className="space-y-5">
              <div className="border-b border-white/20 pb-5">
                <p className="text-xs uppercase tracking-[0.14em] text-white/50 mb-1">Phone</p>
                <a
                  href={`tel:${waysToStart.items[0].value}`}
                  className="text-xl font-semibold text-white hover:text-white/80 transition-colors"
                >
                  {waysToStart.items[0].value}
                </a>
                <p className="mt-1 text-sm text-white/65">{waysToStart.items[0].description}</p>
              </div>
              <div className="border-b border-white/20 pb-5">
                <p className="text-xs uppercase tracking-[0.14em] text-white/50 mb-1">Email</p>
                <a
                  href={`mailto:${waysToStart.items[1].value}`}
                  className="text-lg font-semibold text-white hover:text-white/80 transition-colors break-all"
                >
                  {waysToStart.items[1].value}
                </a>
                <p className="mt-1 text-sm text-white/65">{waysToStart.items[1].description}</p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.14em] text-white/50 mb-1">Session Format</p>
                <p className="text-base font-medium text-white">{waysToStart.items[2].value}</p>
                <p className="mt-1 text-sm text-white/65">{waysToStart.items[2].description}</p>
              </div>
            </div>
          </div>
        </div>
        <LeafDecoration variant="cluster" className="absolute bottom-8 right-8 w-48 opacity-10 animate-leaf-rotate pointer-events-none" aria-hidden="true" />
      </section>

      {/* ── What to Expect ── */}
      <section
        aria-labelledby="what-to-expect-heading"
        className="relative w-full bg-cream-dark py-20"
      >
        <div className="container-shell">
          <p className="label-upper mb-4">{whatToExpect.eyebrow}</p>
          <div className="hairline mb-8" />
          <h2 id="what-to-expect-heading" className="section-title max-w-2xl">{whatToExpect.heading}</h2>
          <div className="mt-10 grid gap-4 md:grid-cols-2">
            {whatToExpect.steps.map((step, i) => (
              <article key={step.title} className="card-premium-soft flex gap-4 px-5 py-5">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[var(--color-light-tint)] text-sm font-semibold text-[var(--color-sage-dark)]">
                  0{i + 1}
                </span>
                <div className="pt-0.5">
                  <h3 className="card-title">{step.title}</h3>
                  <p className="card-copy mt-2">{step.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
        <LeafDecoration variant="top-right" className="absolute top-8 right-8 w-40 opacity-20 animate-leaf-rotate pointer-events-none" aria-hidden="true" />
      </section>

      {/* ── Insurance / Payment ── */}
      <section
        aria-labelledby="insurance-status-heading"
        className="w-full bg-cream py-20"
      >
        <div className="container-shell grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
          <div>
            <p className="label-upper mb-4">{insuranceStatus.eyebrow}</p>
            <div className="hairline mb-8" />
            <h2 id="insurance-status-heading" className="section-title">{insuranceStatus.heading}</h2>
            <p className="body-copy mt-5">{insuranceStatus.body}</p>
          </div>
          <ul className="grid gap-3">
            {insuranceStatus.items.map((item, i) => (
              <li key={item} className="card-premium-soft flex gap-4 px-5 py-4">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[var(--color-light-tint)] text-sm font-semibold text-[var(--color-sage-dark)]">
                  0{i + 1}
                </span>
                <span className="card-copy pt-0.5">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── Closing CTA ── */}
      <section
        aria-labelledby="contact-cta-heading"
        className="relative overflow-hidden cta-panel py-20 cta-section-bridge"
      >
        <div className="container-shell relative z-10 max-w-3xl">
          <p className="label-upper mb-4 text-sage-light">{closingCta.eyebrow}</p>
          <h2 id="contact-cta-heading" className="section-title text-white">{closingCta.heading}</h2>
          <p className="body-copy mt-5 text-white/80">{closingCta.body}</p>
          <div className="cta-actions mt-10">
            <a href={closingCta.primaryHref} className="button-base button-on-dark-primary">
              {closingCta.primaryLabel}
            </a>
            <a href={closingCta.secondaryHref} className="button-base button-on-dark-secondary">
              {closingCta.secondaryLabel}
            </a>
          </div>
        </div>
        <LeafDecoration variant="bottom-right" className="absolute bottom-0 right-0 w-64 opacity-25 pointer-events-none" aria-hidden="true" />
      </section>
    </div>
  );
}
