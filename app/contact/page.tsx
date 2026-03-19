import { CONTACT_PAGE_CONTENT } from '../../lib/content';

export default function ContactPage() {
  const {
    hero,
    waysToStart,
    whatToExpect,
    insuranceStatus,
    closingCta,
  } = CONTACT_PAGE_CONTENT;

  return (
    <div className="pb-20 pt-10 md:pb-28 md:pt-14">
      <div className="container-shell space-y-8 md:space-y-10">
        <section
          aria-labelledby="contact-hero-heading"
          className="relative overflow-hidden rounded-[28px] border border-[var(--color-light-tint)] bg-gradient-to-br from-white via-[var(--color-bg)] to-[var(--color-light-tint)] px-6 py-8 shadow-[0_24px_70px_rgba(27,67,50,0.10)] md:px-10 md:py-12"
        >
          <div className="absolute inset-y-0 right-0 hidden w-1/2 bg-[radial-gradient(circle_at_top,_rgba(116,198,157,0.22),_transparent_58%)] lg:block" />
          <div className="absolute left-[-4rem] top-[-4rem] h-40 w-40 rounded-full bg-[rgba(216,243,220,0.5)] blur-3xl" />
          <div className="absolute bottom-[-5rem] right-[-2rem] h-52 w-52 rounded-full bg-[rgba(82,183,136,0.12)] blur-3xl" />

          <div className="relative grid gap-10 lg:grid-cols-[minmax(0,1.05fr)_minmax(320px,0.95fr)] lg:items-center">
            <div className="max-w-2xl">
              <p className="inline-flex rounded-full border border-[rgba(27,67,50,0.12)] bg-white/80 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-[var(--color-secondary)]">
                {hero.eyebrow}
              </p>
              <h1
                id="contact-hero-heading"
                className="hero-title mt-6 max-w-2xl"
              >
                {hero.heading}
              </h1>
              <p className="hero-lead mt-5">{hero.intro}</p>
              <p className="body-copy mt-4 max-w-2xl">{hero.supportingText}</p>
            </div>

            <aside className="card-premium rounded-[26px] border-white/70 bg-white/80 p-6 shadow-[0_18px_50px_rgba(27,67,50,0.10)] backdrop-blur">
              <div className="card-premium rounded-[22px] bg-[linear-gradient(180deg,_rgba(216,243,220,0.58),_rgba(255,255,255,0.96))] p-6 shadow-none">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--color-secondary)]">
                  Current Intake Path
                </p>
                <div className="mt-6 space-y-4">
                  <div className="card-premium-inset bg-white/90 p-4">
                    <p className="card-copy">
                      Direct phone or email contact is the current way to ask questions, discuss fit, and learn the next steps.
                    </p>
                  </div>
                  <div className="card-premium-inset bg-white/90 p-4">
                    <p className="card-copy">
                      Telehealth counseling only for clients in Wisconsin.
                    </p>
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </section>

        <section
          className="rounded-[28px] border border-[rgba(82,183,136,0.14)] bg-[linear-gradient(180deg,_rgba(255,255,255,0.98),_rgba(252,253,251,0.96))] px-6 py-8 shadow-[0_18px_40px_rgba(27,67,50,0.06)] md:px-8 md:py-10"
          aria-labelledby="ways-to-start-heading"
        >
          <div className="max-w-2xl">
            <p className="section-kicker">
              {waysToStart.eyebrow}
            </p>
            <h2
              id="ways-to-start-heading"
              className="section-title mt-3"
            >
              {waysToStart.heading}
            </h2>
            <p className="body-copy mt-4">{waysToStart.intro}</p>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {waysToStart.items.map((item) => (
              <article
                key={item.label}
                className="card-premium-soft p-5"
              >
                <p className="card-kicker">
                  {item.label}
                </p>
                {item.href ? (
                  <a
                    href={item.href}
                    className="mt-3 block text-lg font-semibold leading-7 text-[var(--color-primary)] underline decoration-[rgba(27,67,50,0.18)] underline-offset-4"
                  >
                    {item.value}
                  </a>
                ) : (
                  <p className="mt-3 text-lg font-semibold leading-7 text-[var(--color-primary)]">{item.value}</p>
                )}
                <p className="card-copy mt-3">{item.description}</p>
              </article>
            ))}
          </div>

          <p className="card-premium-inset mt-6 bg-[rgba(216,243,220,0.45)] px-5 py-4 text-sm leading-7 text-[var(--color-primary)]">
            {waysToStart.note}
          </p>
        </section>

        <section
          className="overflow-hidden rounded-[28px] border border-[rgba(82,183,136,0.16)] bg-[linear-gradient(180deg,_rgba(255,255,255,0.98),_rgba(216,243,220,0.38))] shadow-[0_18px_40px_rgba(27,67,50,0.06)]"
          aria-labelledby="what-to-expect-heading"
        >
          <div className="grid gap-0 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="px-6 py-8 md:px-8 md:py-10">
              <p className="section-kicker">
                {whatToExpect.eyebrow}
              </p>
              <h2
                id="what-to-expect-heading"
                className="section-title mt-3"
              >
                {whatToExpect.heading}
              </h2>
            </div>

            <ol className="space-y-3 border-t border-[rgba(82,183,136,0.16)] bg-white px-6 py-8 lg:border-l lg:border-t-0 md:px-8 md:py-10">
              {whatToExpect.steps.map((step, index) => (
                <li
                  key={step.title}
                  className="card-premium-soft flex gap-4 px-5 py-4"
                >
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[var(--color-light-tint)] text-sm font-semibold text-[var(--color-primary)]">
                    0{index + 1}
                  </span>
                  <div className="pt-0.5">
                    <h3 className="text-base font-semibold text-[var(--color-primary)]">{step.title}</h3>
                    <p className="card-copy mt-2">{step.description}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section
          className="rounded-[28px] border border-[rgba(82,183,136,0.18)] bg-[linear-gradient(180deg,_rgba(243,248,244,0.96),_rgba(255,255,255,0.99))] px-6 py-8 shadow-[0_16px_34px_rgba(27,67,50,0.05)] md:px-8 md:py-10"
          aria-labelledby="insurance-status-heading"
        >
          <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
            <div>
              <p className="section-kicker">
                {insuranceStatus.eyebrow}
              </p>
              <h2
                id="insurance-status-heading"
                className="section-title mt-3"
              >
                {insuranceStatus.heading}
              </h2>
              <p className="body-copy mt-4">{insuranceStatus.body}</p>
            </div>

            <ul className="grid gap-3">
              {insuranceStatus.items.map((item, index) => (
                <li
                  key={item}
                  className="card-premium-soft flex gap-4 px-5 py-4"
                >
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[var(--color-light-tint)] text-sm font-semibold text-[var(--color-primary)]">
                    0{index + 1}
                  </span>
                  <span className="card-copy pt-0.5">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section
          className="cta-panel relative overflow-hidden rounded-[30px] bg-[linear-gradient(135deg,_var(--color-primary),_var(--color-secondary))] px-6 py-8 text-[var(--color-bg)] md:px-8 md:py-10"
          aria-labelledby="contact-cta-heading"
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(116,198,157,0.24),_transparent_34%),radial-gradient(circle_at_bottom_right,_rgba(216,243,220,0.18),_transparent_32%)]" />
          <div className="relative max-w-3xl">
            <p className="section-kicker text-[var(--color-bright)]">
              {closingCta.eyebrow}
            </p>
            <h2
              id="contact-cta-heading"
              className="section-title mt-3 text-[var(--color-bg)]"
            >
              {closingCta.heading}
            </h2>
            <p className="body-copy mt-4 max-w-2xl text-[rgba(248,250,248,0.9)]">{closingCta.body}</p>
            <div className="cta-actions mt-8">
              <a
                href={closingCta.primaryHref}
                className="button-base button-on-dark-primary"
              >
                {closingCta.primaryLabel}
              </a>
              <a
                href={closingCta.secondaryHref}
                className="button-base button-on-dark-secondary"
              >
                {closingCta.secondaryLabel}
              </a>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
