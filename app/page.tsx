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
  { id: 'hero-heading',        label: 'Home' },
  { id: 'reassurance-section', label: 'Welcome' },
  { id: 'services-heading',    label: 'Services' },
  { id: 'faith-heading',       label: 'Faith' },
  { id: 'telehealth-heading',  label: 'Telehealth' },
  { id: 'insurance-heading',   label: 'Insurance' },
  { id: 'testimonials-heading',label: 'Stories' },
  { id: 'closing-cta-heading', label: 'Get Started' },
];

gsap.registerPlugin(ScrollTrigger);

function usePinnedSection(
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

    const exitA = directionA === 'left' ? '-30vw' : '30vw';
    const exitB = directionA === 'left' ? '30vw' : '-30vw';

    const ctx = gsap.context(() => {
      // Content starts fully visible — no entry animation
      gsap.set([a, b], { clearProps: 'all' });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: 'top top',
          end: '+=80%',
          pin: true,
          pinSpacing: true,
          scrub: 1.4,
        },
      });

      // Hold fully visible for first 55% of scroll debt
      tl.to({}, { duration: 0.55 });

      // Exit: slide out in opposite directions (last 45%)
      tl.to(a, { x: exitA, opacity: 0, ease: 'power2.in' }, 0.55);
      tl.to(b, { x: exitB, opacity: 0, ease: 'power2.in' }, 0.58);
    }, section);

    return () => ctx.revert();
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
  }, []);
}

function usePinnedCards(
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

      // Set initial states
      gsap.set(text, { y: 24, opacity: 0 });
      gsap.set(cards, { x: 60, opacity: 0 });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: 'top top',
          end: '+=100%',
          pin: true,
          pinSpacing: true,
          scrub: 1.4,
        },
      });

      // Text fades up first (0–30%)
      tl.to(text, { y: 0, opacity: 1, ease: 'power2.out', duration: 0.3 }, 0);

      // Cards stagger in from right (20–70%)
      tl.to(cards, {
        x: 0,
        opacity: 1,
        ease: 'back.out(1.4)',
        stagger: 0.12,
        duration: 0.2,
      }, 0.2);

      // Hold for remaining 30%
      tl.to({}, { duration: 0.3 });
    }, section);

    return () => ctx.revert();
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

// ─── Reassurance ────────────────────────────────────────────────────────────
function ReassuranceSection({ reassurance }: { reassurance: typeof HOMEPAGE_CONTENT.reassurance }) {
  const sectionRef  = useRef<HTMLElement>(null);
  const contentRef  = useRef<HTMLDivElement>(null);
  const imageRef    = useRef<HTMLDivElement>(null);

  usePinnedSection(sectionRef, contentRef, imageRef, 'left');

  return (
    <section
      id="reassurance-section"
      ref={sectionRef}
      aria-label="Welcome reassurance"
      className="relative flex min-h-[100dvh] w-full items-center bg-cream"
    >
      <div className="container-shell grid gap-8 lg:grid-cols-2 lg:items-center py-16">
        <div ref={contentRef}>
          <p className="label-upper mb-4">A Steady First Step</p>
          <div className="hairline mb-8" />
          <p className="reflection-quote max-w-lg">{reassurance.message}</p>
          <p className="mt-6 label-upper">{reassurance.accent}</p>
        </div>
        <div ref={imageRef} className="card-rounded aspect-[4/5] relative overflow-hidden max-h-[65vh] w-full">
          <Image
            src="/courses_group.jpg"
            alt="A quiet, welcoming counseling environment"
            fill
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="object-cover object-center"
          />
        </div>
      </div>
      <LeafDecoration variant="vertical" className="absolute right-4 top-0 h-full w-8 opacity-30" aria-hidden="true" />
      <LeafDecoration variant="cluster" className="absolute bottom-8 right-8 w-40 opacity-20 animate-leaf-rotate" aria-hidden="true" />
    </section>
  );
}

// ─── Services ───────────────────────────────────────────────────────────────
function ServicesSection({ services }: { services: typeof HOMEPAGE_CONTENT.services }) {
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const imageRef   = useRef<HTMLDivElement>(null);

  usePinnedSection(sectionRef, imageRef, contentRef, 'right');

  return (
    <section
      ref={sectionRef}
      aria-labelledby="services-heading"
      className="relative flex min-h-[100dvh] w-full items-center bg-cream-dark"
    >
      <div className="container-shell grid gap-8 lg:grid-cols-2 lg:items-center py-16">
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
          <h2 id="services-heading" className="section-title !text-[clamp(1.6rem,2.8vw,2.5rem)]">{services.heading}</h2>
          <p className="body-copy mt-5">{services.intro}</p>
          <div className="mt-8 space-y-4">
            {services.items.slice(0, 2).map((card) => (
              <article key={card.title} className="card-premium-soft p-5">
                <p className="card-kicker">{card.accent}</p>
                <h3 className="card-title mt-2">{card.title}</h3>
                <p className="card-copy mt-2">{card.description}</p>
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

  usePinnedSection(sectionRef, contentRef, quoteRef, 'left');

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
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-sage-light mb-4">Reflection</p>
          <blockquote className="font-serif text-2xl leading-relaxed italic text-white/90">{faithSection.quote}</blockquote>
          <div className="mt-8 space-y-4 border-t border-white/20 pt-6">
            <div>
              <p className="text-xs uppercase tracking-[0.14em] text-sage-light">{faithSection.counselorLabel}</p>
              <p className="mt-1 text-lg">{faithSection.counselorValue}</p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.14em] text-sage-light">{faithSection.statesLabel}</p>
              <p className="mt-1 text-lg">{faithSection.statesValue}</p>
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
  usePinnedCards(ref, textRef, '.card-premium-soft');

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
  usePinnedCards(ref, textRef, '.card-premium-soft');

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

  usePinnedSection(sectionRef, imageRef, contentRef, 'right');

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
          <p className="body-copy mt-5">Every person who walks through our door carries a unique story. While we respect the privacy of those we serve, we want you to know this space was built for people like you — people looking for something real.</p>
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
    reassurance,
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
      <ReassuranceSection reassurance={reassurance} />
      <ServicesSection services={services} />
      <FaithSection faithSection={faithSection} />
      <TelehealthSection telehealth={telehealth} />
      <InsuranceSection insurance={insurance} />
      <TestimonialsSection testimonialsPlaceholder={testimonialsPlaceholder} />
      <ClosingCTASection closingCTA={closingCTA} />
    </div>
  );
}
