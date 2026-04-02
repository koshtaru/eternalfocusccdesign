'use client';

import Image from 'next/image';
import { useRef, useLayoutEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { EXTERNAL_LINKS } from '../lib/constants';
import { HOMEPAGE_CONTENT } from '../lib/content';
import LeafDecoration from '../components/LeafDecoration';
import ScrollProgressNav from '../components/ScrollProgressNav';

const HOME_SECTIONS = [
  { id: 'hero-heading',         label: 'Home' },
  { id: 'faith-heading',        label: 'Faith' },
  { id: 'testimonials-heading', label: 'Stories' },
  { id: 'services-heading',     label: 'Services' },
  { id: 'telehealth-heading',   label: 'Telehealth' },
  { id: 'insurance-heading',    label: 'Insurance' },
  { id: 'closing-cta-heading',  label: 'Get Started' },
];

gsap.registerPlugin(ScrollTrigger);

// Viewport-reveal: elements animate in as section enters, out as it leaves.
// No pinning, no scrub — works with native OS scroll inertia.
function useViewportReveal(
  sectionRef: React.RefObject<HTMLElement | null>,
  elA: React.RefObject<HTMLElement | HTMLDivElement | HTMLParagraphElement | null>,
  elB: React.RefObject<HTMLElement | HTMLDivElement | HTMLParagraphElement | null>,
  directionA: 'left' | 'right',
) {
  useLayoutEffect(() => {
    const section = sectionRef.current;
    const a = elA.current;
    const b = elB.current;
    if (!section || !a || !b) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const fromA = directionA === 'left' ? '-40px' : '40px';
    const fromB = directionA === 'left' ? '40px' : '-40px';

    const ctx = gsap.context(() => {
      // Start offscreen
      gsap.set(a, { x: fromA, opacity: 0 });
      gsap.set(b, { x: fromB, opacity: 0 });

      ScrollTrigger.create({
        trigger: section,
        start: 'top 75%',
        end: 'bottom 15%',
        onEnter: () => {
          gsap.to(a, { x: 0, opacity: 1, duration: 0.7, ease: 'power3.out' });
          gsap.to(b, { x: 0, opacity: 1, duration: 0.7, ease: 'power3.out', delay: 0.1 });
        },
        onLeave: () => {
          gsap.to(a, { x: fromA, opacity: 0, duration: 0.5, ease: 'power2.in' });
          gsap.to(b, { x: fromB, opacity: 0, duration: 0.5, ease: 'power2.in', delay: 0.06 });
        },
        onEnterBack: () => {
          gsap.to(a, { x: 0, opacity: 1, duration: 0.7, ease: 'power3.out' });
          gsap.to(b, { x: 0, opacity: 1, duration: 0.7, ease: 'power3.out', delay: 0.1 });
        },
        onLeaveBack: () => {
          gsap.to(a, { x: fromA, opacity: 0, duration: 0.5, ease: 'power2.in' });
          gsap.to(b, { x: fromB, opacity: 0, duration: 0.5, ease: 'power2.in', delay: 0.06 });
        },
      });
    }, section);

    return () => ctx.revert();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
}

function useViewportRevealCards(
  sectionRef: React.RefObject<HTMLElement | null>,
  textRef: React.RefObject<HTMLDivElement | null>,
  selector: string,
) {
  useLayoutEffect(() => {
    const section = sectionRef.current;
    const text = textRef.current;
    if (!section || !text) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const ctx = gsap.context(() => {
      const cards = gsap.utils.toArray<HTMLElement>(selector, section);

      gsap.set(text, { y: 24, opacity: 0 });
      gsap.set(cards, { y: 20, opacity: 0 });

      ScrollTrigger.create({
        trigger: section,
        start: 'top 75%',
        end: 'bottom 15%',
        onEnter: () => {
          gsap.to(text, { y: 0, opacity: 1, duration: 0.6, ease: 'power3.out' });
          gsap.to(cards, { y: 0, opacity: 1, duration: 0.6, ease: 'power3.out', stagger: 0.1, delay: 0.15 });
        },
        onLeave: () => {
          gsap.to(text, { y: -16, opacity: 0, duration: 0.4, ease: 'power2.in' });
          gsap.to(cards, { y: -12, opacity: 0, duration: 0.4, ease: 'power2.in', stagger: 0.06 });
        },
        onEnterBack: () => {
          gsap.to(text, { y: 0, opacity: 1, duration: 0.6, ease: 'power3.out' });
          gsap.to(cards, { y: 0, opacity: 1, duration: 0.6, ease: 'power3.out', stagger: 0.1, delay: 0.1 });
        },
        onLeaveBack: () => {
          gsap.to(text, { y: 24, opacity: 0, duration: 0.4, ease: 'power2.in' });
          gsap.to(cards, { y: 20, opacity: 0, duration: 0.4, ease: 'power2.in', stagger: 0.06 });
        },
      });
    }, section);

    return () => ctx.revert();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
}

function useFadeUp(ref: React.RefObject<HTMLElement | null>) {
  useLayoutEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(el,
        { y: 24, opacity: 0 },
        {
          y: 0, opacity: 1, duration: 0.6, ease: 'power2.out',
          scrollTrigger: { trigger: el, start: 'top 80%' },
        }
      );
    }, el);

    return () => ctx.revert();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
}

// ─── Hero ───────────────────────────────────────────────────────────────────
function HeroSection({ hero }: { hero: typeof HOMEPAGE_CONTENT.hero }) {
  const line1Ref = useRef<HTMLSpanElement>(null);
  const line2Ref = useRef<HTMLSpanElement>(null);
  const leadRef  = useRef<HTMLParagraphElement>(null);
  const ctaRef   = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const ctx = gsap.context(() => {
      gsap.fromTo(
        [line1Ref.current, line2Ref.current, leadRef.current, ctaRef.current],
        { y: 40, opacity: 0, rotateX: 18 },
        { y: 0, opacity: 1, rotateX: 0, duration: 0.8, ease: 'power3.out', stagger: 0.12 }
      );
    });
    return () => ctx.revert();
  }, []);

  return (
    <section
      aria-labelledby="hero-heading"
      className="relative flex min-h-[100dvh] w-full items-center justify-center overflow-hidden pt-20"
    >
      <Image
        src="/hero_interior.jpg"
        alt="Warm, peaceful interior of a counseling space"
        fill
        priority
        sizes="100vw"
        className="object-cover object-center"
      />
      <div className="absolute inset-0 bg-cream/65" />

      <div className="relative z-10 container-shell text-center">
        <p className="label-upper mb-6">{hero.eyebrow}</p>
        <h1 id="hero-heading" className="hero-title mx-auto max-w-3xl" style={{ perspective: '600px' }}>
          <span ref={line1Ref} className="block">{hero.heading.split('\n')[0] ?? hero.heading}</span>
          {hero.heading.includes('\n') && (
            <span ref={line2Ref} className="block">{hero.heading.split('\n')[1]}</span>
          )}
        </h1>
        <p ref={leadRef} className="hero-lead mx-auto mt-6 max-w-xl">
          {hero.supportingText}
        </p>
        <div ref={ctaRef} className="mt-10 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
          <a
            href={EXTERNAL_LINKS.bookAppointment}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary px-8 py-3 text-base"
          >
            {hero.primaryCta}
          </a>
          <a
            href={EXTERNAL_LINKS.clientPortal}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary px-8 py-3 text-base"
          >
            {hero.secondaryCta}
          </a>
        </div>
      </div>

      <LeafDecoration
        variant="bottom-right"
        className="absolute bottom-[-4%] right-[-4%] w-[35vw] translate-x-[20%] translate-y-[20%] opacity-60 animate-leaf-drift"
        aria-hidden="true"
      />
    </section>
  );
}

// ─── Services ───────────────────────────────────────────────────────────────
function ServicesSection({ services }: { services: typeof HOMEPAGE_CONTENT.services }) {
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const imageRef   = useRef<HTMLDivElement>(null);

  useViewportReveal(sectionRef, imageRef, contentRef, 'right');

  return (
    <section
      id="services-heading"
      ref={sectionRef}
      aria-labelledby="services-heading"
      className="relative w-full bg-cream-dark py-16"
    >
      <div className="container-shell">
        {/* Intro — image + service cards */}
        <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
          <div ref={imageRef} className="card-rounded aspect-[4/5] relative overflow-hidden max-h-[65vh] w-full">
            <Image
              src="/services_couple.jpg"
              alt="Two people in a supportive counseling session"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover object-center"
            />
          </div>
          <div ref={contentRef}>
            <p className="label-upper mb-4">{services.eyebrow}</p>
            <div className="hairline mb-8" />
            <h2 className="section-title !text-[clamp(1.6rem,2.8vw,2.5rem)]">{services.heading}</h2>
            <p className="body-copy mt-5">{services.intro}</p>
            <div className="mt-8 space-y-4">
              {services.items.map((card) => (
                <article key={card.title} className="card-premium-soft p-5">
                  <p className="card-kicker">{card.accent}</p>
                  <h3 className="card-title mt-2">{card.title}</h3>
                  <p className="card-copy mt-2">{card.description}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
        {/* Focus areas */}
        <div className="mt-16 border-t border-[var(--color-sage)]/20 pt-12">
          <p className="label-upper mb-8">{services.focusAreas.eyebrow}</p>
          <div className="grid gap-6 lg:grid-cols-3">
            {services.focusAreas.groups.map((group) => (
              <article key={group.title} className="card-premium p-6">
                <h3 className="font-serif text-xl font-semibold text-charcoal">{group.title}</h3>
                <p className="card-copy mt-3">{group.intro}</p>
                <ul className="mt-5 space-y-2">
                  {group.items.map((item) => (
                    <li key={item} className="card-premium-inset px-4 py-3 text-sm leading-6 text-[var(--color-charcoal-light)]">{item}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
        {/* What support can look like */}
        <div className="mt-12 border-t border-[var(--color-sage)]/20 pt-12">
          <p className="label-upper mb-4">{services.supportLooksLike.eyebrow}</p>
          <h3 className="section-title max-w-2xl">{services.supportLooksLike.heading}</h3>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {services.supportLooksLike.paragraphs.map((p, i) => (
              <article key={i} className="card-premium-soft bg-white p-6">
                <p className="card-copy">{p}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
      <LeafDecoration variant="top-right" className="absolute top-8 right-8 w-40 opacity-30 animate-leaf-rotate" aria-hidden="true" />
      <LeafDecoration variant="single" className="absolute bottom-8 left-8 w-20 opacity-20 animate-leaf-drift" aria-hidden="true" />
    </section>
  );
}

// ─── Faith ──────────────────────────────────────────────────────────────────
function FaithSection({ faithSection }: { faithSection: typeof HOMEPAGE_CONTENT.faithSection }) {
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const quoteRef   = useRef<HTMLDivElement>(null);

  useViewportReveal(sectionRef, contentRef, quoteRef, 'left');

  return (
    <section
      ref={sectionRef}
      aria-labelledby="faith-heading"
      className="relative flex min-h-[100dvh] w-full items-center bg-cream"
    >
      <div className="container-shell grid gap-8 lg:grid-cols-2 lg:items-center py-16">
        <div ref={contentRef}>
          <p className="label-upper mb-4">{faithSection.eyebrow}</p>
          <div className="hairline mb-8" />
          <h2 id="faith-heading" className="section-title">{faithSection.heading}</h2>
          <p className="body-copy mt-5">{faithSection.body}</p>
        </div>
        <div ref={quoteRef} className="rounded-[30px] bg-[#5E6A3E] p-8 text-white">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-sage-light mb-4">Scripture</p>
          <blockquote className="font-serif text-2xl leading-relaxed italic text-white/90">{faithSection.quote}</blockquote>
          <p className="mt-3 text-right text-xs text-white/60 tracking-wide">{faithSection.quoteAttribution}</p>
          <div className="mt-6 space-y-4 border-t border-white/20 pt-6">
            <div>
              <p className="text-xs uppercase tracking-[0.14em] text-sage-light">{faithSection.counselorLabel}</p>
              <p className="mt-1 text-lg">{faithSection.counselorValue}</p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.14em] text-sage-light">{faithSection.statesLabel}</p>
              <p className="mt-1 text-lg">{faithSection.statesValue}</p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.14em] text-sage-light">{faithSection.educationLabel}</p>
              <ul className="mt-1 space-y-1">
                {faithSection.educationItems.map((item) => (
                  <li key={item} className="text-sm text-white/85">{item}</li>
                ))}
              </ul>
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.14em] text-sage-light">{faithSection.backgroundLabel}</p>
              <p className="mt-1 text-sm text-white/85">{faithSection.backgroundValue}</p>
            </div>
          </div>
        </div>
      </div>
      <LeafDecoration variant="cluster" className="absolute bottom-8 right-8 w-48 opacity-15 animate-leaf-rotate" aria-hidden="true" />
    </section>
  );
}

// ─── Telehealth ─────────────────────────────────────────────────────────────
function TelehealthSection({ telehealth }: { telehealth: typeof HOMEPAGE_CONTENT.telehealth }) {
  const ref = useRef<HTMLElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  useViewportRevealCards(ref, textRef, '.card-premium-soft');

  return (
    <section
      ref={ref}
      aria-labelledby="telehealth-heading"
      className="relative flex min-h-[100dvh] w-full items-center bg-cream-dark"
    >
      <div className="container-shell grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <div ref={textRef}>
          <p className="label-upper mb-4">{telehealth.eyebrow}</p>
          <div className="hairline mb-8" />
          <h2 id="telehealth-heading" className="section-title">{telehealth.heading}</h2>
          <p className="body-copy mt-5">{telehealth.body}</p>
        </div>
        <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
          {telehealth.highlights.map((item) => (
            <div key={item} className="card-premium-soft px-5 py-5">
              <p className="card-copy">{item}</p>
            </div>
          ))}
        </div>
      </div>
      <LeafDecoration variant="top-right" className="absolute top-8 right-8 w-40 opacity-40 animate-leaf-rotate pointer-events-none" aria-hidden="true" />
    </section>
  );
}

// ─── Insurance ──────────────────────────────────────────────────────────────
function InsuranceSection({ insurance }: { insurance: typeof HOMEPAGE_CONTENT.insurance }) {
  const ref = useRef<HTMLElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  useViewportRevealCards(ref, textRef, '.card-premium-soft');

  return (
    <section
      ref={ref}
      aria-labelledby="insurance-heading"
      className="flex min-h-[100dvh] w-full items-center bg-cream"
    >
      <div className="container-shell grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
        <div ref={textRef}>
          <p className="label-upper mb-4">{insurance.eyebrow}</p>
          <div className="hairline mb-8" />
          <h2 id="insurance-heading" className="section-title">{insurance.heading}</h2>
          <p className="body-copy mt-5">{insurance.body}</p>
        </div>
        <ul className="grid gap-3">
          {insurance.items.map((item, index) => (
            <li key={item} className="card-premium-soft flex gap-4 px-5 py-4">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[var(--color-light-tint)] text-sm font-semibold text-[var(--color-sage-dark)]">
                0{index + 1}
              </span>
              <span className="card-copy pt-0.5">{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

// ─── Testimonials ───────────────────────────────────────────────────────────
function TestimonialsSection({ testimonialsPlaceholder }: { testimonialsPlaceholder: typeof HOMEPAGE_CONTENT.testimonialsPlaceholder }) {
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const imageRef   = useRef<HTMLDivElement>(null);

  useViewportReveal(sectionRef, imageRef, contentRef, 'right');

  return (
    <section
      ref={sectionRef}
      aria-labelledby="testimonials-heading"
      className="relative flex min-h-[100dvh] w-full items-center bg-cream-dark"
    >
      <div className="container-shell grid gap-8 lg:grid-cols-2 lg:items-center py-16">
        <div ref={imageRef} className="card-rounded aspect-[4/5] relative overflow-hidden max-h-[65vh] w-full">
          <Image
            src="/testimonial_interior.jpg"
            alt="A calming interior counseling space"
            fill
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="object-cover object-center"
          />
        </div>
        <div ref={contentRef}>
          <p className="label-upper mb-4">Your Story Matters</p>
          <div className="hairline mb-8" />
          <h2 id="testimonials-heading" className="section-title" style={{ fontSize: 'clamp(1.6rem,2.8vw,2.5rem)' }}>A space where healing begins at your own pace.</h2>
          <p className="body-copy mt-5">Every person carries a unique story. While we respect the privacy of those we serve, we want you to know this space was built for people like you — people looking for something real.</p>
          <div className="mt-8 space-y-4">
            <div className="card-premium-soft p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[var(--color-sage-dark)] mb-3">Our commitment</p>
              <p className="card-copy">Confidential, compassionate care rooted in faith. No judgment, no rush — just honest support for wherever you are right now.</p>
            </div>
            <div className="card-premium-soft p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[var(--color-sage-dark)] mb-3">Getting started</p>
              <p className="card-copy">Reach out when you are ready. A brief phone call or email is all it takes to begin exploring whether this is the right fit for you.</p>
            </div>
          </div>
        </div>
      </div>
      <LeafDecoration variant="top-right" className="absolute top-8 right-8 w-40 opacity-30 animate-leaf-rotate" aria-hidden="true" />
      <LeafDecoration variant="single" className="absolute bottom-8 left-8 w-20 opacity-20 animate-leaf-drift" aria-hidden="true" />
    </section>
  );
}

// ─── Closing CTA ────────────────────────────────────────────────────────────
function ClosingCTASection({ closingCTA }: { closingCTA: typeof HOMEPAGE_CONTENT.closingCTA }) {
  const ref = useRef<HTMLElement>(null);
  useFadeUp(ref);

  return (
    <section
      ref={ref}
      aria-labelledby="closing-cta-heading"
      className="relative overflow-hidden cta-panel py-20 cta-section-bridge"
    >
      <div className="container-shell relative z-10 max-w-3xl">
        <p className="label-upper mb-4 text-sage-light">{closingCTA.eyebrow}</p>
        <h2 id="closing-cta-heading" className="section-title text-white">{closingCTA.heading}</h2>
        <p className="body-copy mt-5 text-white/80">{closingCTA.body}</p>
        <div className="cta-actions mt-10">
          <a
            href={EXTERNAL_LINKS.bookAppointment}
            target="_blank"
            rel="noopener noreferrer"
            className="button-base button-on-dark-primary"
          >
            {closingCTA.primaryCta}
          </a>
          <a
            href={EXTERNAL_LINKS.clientPortal}
            target="_blank"
            rel="noopener noreferrer"
            className="button-base button-on-dark-secondary"
          >
            {closingCTA.secondaryCta}
          </a>
        </div>
      </div>
      <LeafDecoration variant="bottom-right" className="absolute bottom-0 right-0 w-64 opacity-25 pointer-events-none" aria-hidden="true" />
    </section>
  );
}

// ─── Page ───────────────────────────────────────────────────────────────────
export default function HomePage() {
  const {
    hero,
    services,
    faithSection,
    telehealth,
    insurance,
    testimonialsPlaceholder,
    closingCTA,
  } = HOMEPAGE_CONTENT;

  return (
    <div className="pt-0">
      <ScrollProgressNav sections={HOME_SECTIONS} />
      <HeroSection hero={hero} />
      <FaithSection faithSection={faithSection} />
      <TestimonialsSection testimonialsPlaceholder={testimonialsPlaceholder} />
      <ServicesSection services={services} />
      <TelehealthSection telehealth={telehealth} />
      <InsuranceSection insurance={insurance} />
      <ClosingCTASection closingCTA={closingCTA} />
    </div>
  );
}
