'use client';

import Image from 'next/image';
import { useRef, useLayoutEffect, useState, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Link from 'next/link';
import { EXTERNAL_LINKS } from '../lib/constants';
import { HOMEPAGE_CONTENT } from '../lib/content';
import LeafDecoration from '../components/LeafDecoration';
import ScrollProgressNav from '../components/ScrollProgressNav';

const HOME_SECTIONS = [
  { id: 'hero-heading',         label: 'Home' },
  { id: 'faith-heading',        label: 'Faith',       offset: 80 },
  { id: 'testimonials-heading', label: 'Stories',     offset: 80 },
  { id: 'services-heading',     label: 'Services',    offset: 100 },
  { id: 'telehealth-heading',   label: 'Telehealth',  offset: 155 },
  { id: 'insurance-heading',    label: 'Fees',        offset: 195 },
  { id: 'about-heading',        label: 'About',       offset: 80 },
  { id: 'closing-cta-heading',  label: 'Get Started', offset: 80 },
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
          <Link
            href="/contact"
            className="btn-primary px-8 py-3 text-base"
          >
            {hero.primaryCta}
          </Link>
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
      className="relative w-full bg-cream-dark py-10"
    >
      <div className="container-shell">
        {/* Intro — image + service cards */}
        <div className="grid gap-6 lg:grid-cols-2 lg:items-stretch">
          <div ref={imageRef} className="card-rounded relative overflow-hidden w-full h-full min-h-[320px]">
            <Image
              src="https://firebasestorage.googleapis.com/v0/b/eternal-focus.firebasestorage.app/o/Images%2Fservices_couple.PNG?alt=media&token=b9529258-443a-4791-a857-eedb3fb64285"
              alt="Two people in a supportive counseling session"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover object-center"
            />
          </div>
          <div className="relative">
          <div ref={contentRef}>
            <p className="label-upper mb-3">{services.eyebrow}</p>
            <div className="hairline mb-4" />
            <h2 className="section-title !text-[clamp(1.2rem,2vw,1.75rem)] !leading-tight">{services.heading}</h2>
            <div className="mt-4 space-y-3">
              {services.items.map((card) => (
                <article key={card.title} className="card-premium-soft p-4">
                  <p className="card-kicker">{card.accent}</p>
                  <h3 className="card-title mt-1">{card.title}</h3>
                  <p className="card-copy mt-1 !text-sm">{card.description}</p>
                </article>
              ))}
            </div>
          </div>
          </div>
        </div>
        {/* Focus areas */}
        <div className="relative mt-16 pt-12">
          <LeafDecoration
            variant="brand-stem"
            className="lg:hidden absolute -top-16 left-1/2 -translate-x-1/2 w-[160px] opacity-[0.15] pointer-events-none [mix-blend-mode:multiply]"
            aria-hidden="true"
          />
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
          <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end mb-10">
            <div>
              <p className="label-upper mb-4">{services.supportLooksLike.eyebrow}</p>
              <div className="hairline mb-5" />
              <h3 className="section-title max-w-2xl">{services.supportLooksLike.heading}</h3>
            </div>
            <div className="card-premium-inset px-6 py-5 max-w-xs hidden lg:block">
              <p className="reflection-quote !text-base !leading-relaxed text-[var(--color-charcoal-light)]">
                {services.supportLooksLike.quote}
              </p>
              <p className="mt-2 text-xs text-[var(--color-charcoal-light)]/60 text-right">{services.supportLooksLike.quoteAttribution}</p>
            </div>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {services.supportLooksLike.paragraphs.map((p, i) => (
              <article key={i} className="card-premium p-6 flex flex-col gap-4">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[var(--color-light-tint)] text-sm font-semibold text-[var(--color-sage-dark)]">
                  0{i + 1}
                </span>
                <h4 className="card-title">{p.title}</h4>
                <p className="card-copy">{p.body}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
      <LeafDecoration
        variant="brand-stem"
        className="hidden lg:block absolute top-[-4%] right-[3%] w-[220px] opacity-[0.15] pointer-events-none [mix-blend-mode:multiply]"
        aria-hidden="true"
      />
    </section>
  );
}

// ─── Faith ──────────────────────────────────────────────────────────────────
function FaithSection({ faithSection }: { faithSection: typeof HOMEPAGE_CONTENT.faithSection }) {
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const quoteRef   = useRef<HTMLDivElement>(null);
  const [expanded, setExpanded] = useState<string | null>(null);
  const activeMethod = faithSection.methods.find((m) => m.abbr === expanded) ?? null;

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
        <div ref={quoteRef} className="relative overflow-hidden rounded-[30px] bg-[#5E6A3E] p-8 text-white">
          {/* Scripture */}
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-sage-light mb-4">Scripture</p>
          <blockquote className="font-serif text-2xl leading-relaxed italic text-white/90">{faithSection.quote}</blockquote>
          <p className="mt-3 text-right text-xs text-white/60 tracking-wide">{faithSection.quoteAttribution}</p>
          {/* Counselor snapshot + Meet Amy on same row */}
          <div className="mt-5 border-t border-white/20 pt-5 flex items-center justify-between gap-3">
            <p className="text-sm font-medium text-white">
              {faithSection.counselorValue} | {faithSection.statesValue}
            </p>
            <a
              href="/#about-heading"
              className="shrink-0 inline-flex items-center gap-1 text-xs font-medium text-white hover:text-white/70 transition-colors duration-200"
            >
              {faithSection.meetAmyLabel} <span aria-hidden="true">→</span>
            </a>
          </div>
          {/* Therapeutic approaches — abbr-only pill row */}
          <div className="mt-5 border-t border-white/20 pt-5">
            <p className="text-xs uppercase tracking-[0.14em] text-sage-light mb-3">{faithSection.approachesEyebrow}</p>
            <div className="grid grid-cols-3 gap-2">
              {faithSection.methods.map((m) => {
                const isOpen = expanded === m.abbr;
                return (
                  <button
                    key={m.abbr}
                    type="button"
                    onClick={() => setExpanded(isOpen ? null : m.abbr)}
                    className={`rounded-xl border py-2.5 text-center text-xs font-bold tracking-[0.10em] transition-all duration-200 focus-visible:outline-none ${
                      isOpen
                        ? 'bg-white text-[#5E6A3E] border-white'
                        : 'bg-white/20 text-white border-white/40 hover:bg-white/30 hover:border-white/60'
                    }`}
                    aria-expanded={isOpen}
                  >
                    {m.abbr}
                  </button>
                );
              })}
            </div>
            {activeMethod && (
              <div className="mt-2 rounded-xl bg-white/10 border border-white/20 px-4 py-3">
                <p className="text-xs font-semibold text-white/90">{activeMethod.name}</p>
                <p className="mt-1.5 text-xs text-white/65 leading-relaxed">{activeMethod.description}</p>
              </div>
            )}
          </div>
          <LeafDecoration
            variant="brand-cluster"
            className="lg:hidden absolute bottom-0 right-0 w-[220px] opacity-[0.15] pointer-events-none [mix-blend-mode:multiply]"
            aria-hidden="true"
          />
        </div>
      </div>
      <LeafDecoration
        variant="brand-cluster"
        className="hidden lg:block absolute bottom-6 left-[-3%] w-[260px] opacity-[0.12] pointer-events-none [mix-blend-mode:multiply]"
        aria-hidden="true"
      />
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
          <div className="mt-5 flex items-start gap-3 rounded-xl border border-[var(--color-sage-dark)]/25 bg-[var(--color-sage-dark)]/[0.07] px-4 py-3.5">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
              className="mt-0.5 h-4 w-4 shrink-0 text-[var(--color-sage-dark)]" aria-hidden="true">
              <path fillRule="evenodd"
                d="M9.69 18.933l.003.001C9.89 19.02 10 19 10 19s.11.02.308-.066l.002-.001.006-.003.018-.008a5.741 5.741 0 00.281-.14c.186-.096.446-.24.757-.433.62-.384 1.445-.966 2.274-1.765C15.302 14.988 17 12.493 17 9A7 7 0 103 9c0 3.492 1.698 5.988 3.355 7.584a13.731 13.731 0 002.273 1.765 11.842 11.842 0 00.976.544l.062.029.018.008.006.003zM10 11.25a2.25 2.25 0 100-4.5 2.25 2.25 0 000 4.5z"
                clipRule="evenodd" />
            </svg>
            <p className="text-sm font-semibold text-[var(--color-sage-dark)]">{telehealth.locationNote}</p>
          </div>
        </div>
        <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
          {telehealth.highlights.map((item) => (
            <div key={item} className="card-premium-soft px-5 py-5">
              <p className="card-copy">{item}</p>
            </div>
          ))}
        </div>
      </div>
      <LeafDecoration variant="top-right" className="absolute top-8 right-8 w-28 lg:w-40 opacity-40 animate-leaf-rotate pointer-events-none" aria-hidden="true" />
    </section>
  );
}

// ─── Insurance ──────────────────────────────────────────────────────────────
function InsuranceSection({ insurance }: { insurance: typeof HOMEPAGE_CONTENT.insurance }) {
  const ref = useRef<HTMLElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  useViewportRevealCards(ref, textRef, '.session-fee-row');

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
        <ul className="divide-y divide-[var(--color-cream-dark)] rounded-2xl bg-white/60 px-6">
          {insurance.items.map((item) => {
            const [label, price] = item.split(': ');
            return (
              <li key={item} className="session-fee-row flex items-center justify-between py-4">
                <span className="body-copy">{label}</span>
                <span className="text-base font-semibold text-[var(--color-sage-dark)]">{price}</span>
              </li>
            );
          })}
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
        <div
          ref={imageRef}
          className="card-rounded w-full max-w-[420px] mx-auto overflow-hidden aspect-[3/4]"
        >
          <video
            src="https://firebasestorage.googleapis.com/v0/b/eternal-focus.firebasestorage.app/o/testimonials-video.mp4?alt=media&token=7a76d338-f152-49a4-8261-6a8efd2c3006"
            controls
            playsInline
            disablePictureInPicture
            controlsList="noplaybackrate"
            className="w-full h-full object-cover object-[center_35%] block"
          />
        </div>
        <div className="relative">
          <LeafDecoration variant="top-right" className="lg:hidden absolute top-0 right-0 w-36 opacity-30 pointer-events-none" aria-hidden="true" />
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
      </div>
      <LeafDecoration variant="top-right" className="hidden lg:block absolute top-8 right-8 w-40 opacity-30 animate-leaf-rotate" aria-hidden="true" />
      <LeafDecoration variant="single" className="hidden lg:block absolute bottom-8 left-8 w-20 opacity-20 animate-leaf-drift" aria-hidden="true" />
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
          <Link
            href="/contact"
            className="button-base button-on-dark-primary"
          >
            {closingCTA.primaryCta}
          </Link>
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

// ─── About ──────────────────────────────────────────────────────────────────
function AboutSection({ about }: { about: typeof HOMEPAGE_CONTENT.about }) {
  const sectionRef = useRef<HTMLElement>(null);
  const imageRef   = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useViewportReveal(sectionRef, imageRef, contentRef, 'left');

  return (
    <section
      id="about-heading"
      ref={sectionRef}
      aria-labelledby="about-heading"
      className="relative flex min-h-[100dvh] w-full items-center bg-cream"
    >
      <div className="container-shell grid gap-8 lg:grid-cols-2 lg:items-start py-16">
        {/* Left — photo + personal bio */}
        <div ref={imageRef} className="flex flex-col gap-6">
          <div className="card-rounded aspect-[3/4] relative overflow-hidden max-h-[55vh] w-full">
            <Image
              src="/amy-polzin.jpg"
              alt="Amy Polzin, Licensed Professional Counselor"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover object-top"
            />
          </div>
          <div className="card-premium-soft p-5">
            <p className="label-upper mb-3">{about.bioEyebrow}</p>
            <ul className="space-y-2">
              {about.bioItems.map((item) => (
                <li key={item} className="flex gap-2 text-sm text-[var(--color-charcoal-light)]">
                  <span className="mt-0.5 shrink-0 text-[var(--color-sage)]">—</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        {/* Right — heading + credentials + approach */}
        <div ref={contentRef}>
          <p className="label-upper mb-4">{about.eyebrow}</p>
          <div className="hairline mb-8" />
          <h2 id="about-heading" className="section-title">{about.heading}</h2>
          <p className="body-copy mt-5">{about.intro}</p>
          {/* Credentials */}
          <div className="relative overflow-hidden mt-8 rounded-[20px] bg-[#5E6A3E] p-6 text-white space-y-4">
            <LeafDecoration
              variant="brand-stem"
              className="lg:hidden absolute top-0 right-0 w-[140px] opacity-[0.15] pointer-events-none [mix-blend-mode:multiply]"
              aria-hidden="true"
            />
            <div>
              <p className="text-xs uppercase tracking-[0.14em] text-sage-light">{about.counselorLabel}</p>
              <p className="mt-1 text-lg">{about.counselorValue}</p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.14em] text-sage-light">{about.statesLabel}</p>
              <p className="mt-1 text-lg">{about.statesValue}</p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.14em] text-sage-light">{about.educationLabel}</p>
              <ul className="mt-1 space-y-1">
                {about.educationItems.map((item) => (
                  <li key={item} className="text-sm text-white/85">{item}</li>
                ))}
              </ul>
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.14em] text-sage-light">{about.backgroundLabel}</p>
              <p className="mt-1 text-sm text-white/85">{about.backgroundValue}</p>
            </div>
          </div>
          {/* Counseling approach */}
          <div className="mt-8">
            <p className="body-copy">{about.approachBody}</p>
          </div>
        </div>
      </div>
      <LeafDecoration variant="cluster" className="absolute bottom-8 left-8 w-36 opacity-20 animate-leaf-drift" aria-hidden="true" />
      <LeafDecoration
        variant="brand-stem"
        className="hidden lg:block absolute top-[-4%] right-[3%] w-[200px] opacity-[0.15] pointer-events-none [mix-blend-mode:multiply]"
        aria-hidden="true"
      />
    </section>
  );
}

// ─── Page ───────────────────────────────────────────────────────────────────
export default function HomePage() {
  useEffect(() => {
    history.scrollRestoration = 'manual';
    // Only jump to top when there's no hash target (e.g. /#about-heading)
    if (!window.location.hash) {
      window.scrollTo(0, 0);
    }
  }, []);

  const {
    hero,
    services,
    faithSection,
    about,
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
      <AboutSection about={about} />
      <ClosingCTASection closingCTA={closingCTA} />
    </div>
  );
}
