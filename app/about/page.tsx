'use client';

import Image from 'next/image';
import { useRef, useLayoutEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ABOUT_PAGE_CONTENT } from '../../lib/content';
import LeafDecoration from '../../components/LeafDecoration';

gsap.registerPlugin(ScrollTrigger);

function usePinnedSection(
  sectionRef: React.RefObject<HTMLElement | null>,
  animate: (tl: gsap.core.Timeline) => void,
) {
  useLayoutEffect(() => {
    const section = sectionRef.current;
    if (!section) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: { trigger: section, start: 'top top', end: '+=130%', pin: true, scrub: 0.6 },
      });
      animate(tl);
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
      gsap.fromTo(el, { y: 24, opacity: 0 }, {
        y: 0, opacity: 1, duration: 0.6, ease: 'power2.out',
        scrollTrigger: { trigger: el, start: 'top 80%' },
      });
    }, el);
    return () => ctx.revert();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
}

function useStaggerFadeUp(containerRef: React.RefObject<HTMLElement | null>, selector: string) {
  useLayoutEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const ctx = gsap.context(() => {
      gsap.fromTo(el.querySelectorAll(selector),
        { y: 32, opacity: 0 },
        {
          y: 0, opacity: 1, duration: 0.5, ease: 'power2.out', stagger: 0.1,
          scrollTrigger: { trigger: el, start: 'top 80%' },
        }
      );
    }, el);
    return () => ctx.revert();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
}

export default function AboutPage() {
  const {
    hero,
    professionalOverview,
    counselingApproach,
    areasOfFocus,
    education,
    closingCta,
  } = ABOUT_PAGE_CONTENT;

  // Hero — pinned, portrait right + bio left
  const heroSectionRef = useRef<HTMLElement>(null);
  const heroBioRef     = useRef<HTMLDivElement>(null);
  const heroImageRef   = useRef<HTMLDivElement>(null);
  const heroLabelRef   = useRef<HTMLParagraphElement>(null);
  usePinnedSection(heroSectionRef, (tl) => {
    tl.fromTo(heroLabelRef.current, { opacity: 0, y: -12 }, { opacity: 1, y: 0, ease: 'none' }, 0);
    tl.fromTo(heroBioRef.current, { x: '-60vw', opacity: 0 }, { x: 0, opacity: 1, ease: 'power2.out' }, 0);
    tl.fromTo(heroImageRef.current, { x: '40vw', opacity: 0, scale: 0.98 }, { x: 0, opacity: 1, scale: 1, ease: 'power2.out' }, 0.05);
    tl.fromTo(heroBioRef.current, { x: 0, opacity: 1 }, { x: '-18vw', opacity: 0, ease: 'power2.in' }, 0.7);
    tl.fromTo(heroImageRef.current, { x: 0, opacity: 1 }, { x: '18vw', opacity: 0, ease: 'power2.in' }, 0.7);
    tl.fromTo(heroLabelRef.current, { opacity: 1 }, { opacity: 0, ease: 'power2.in' }, 0.8);
  });

  // Professional overview
  const overviewRef = useRef<HTMLElement>(null);
  useFadeUp(overviewRef);

  // Counseling approach — pinned
  const approachSectionRef = useRef<HTMLElement>(null);
  const approachContentRef = useRef<HTMLDivElement>(null);
  const approachCardsRef   = useRef<HTMLDivElement>(null);
  const approachLabelRef   = useRef<HTMLParagraphElement>(null);
  usePinnedSection(approachSectionRef, (tl) => {
    tl.fromTo(approachLabelRef.current, { opacity: 0, y: -12 }, { opacity: 1, y: 0, ease: 'none' }, 0);
    tl.fromTo(approachContentRef.current, { x: '-60vw', opacity: 0 }, { x: 0, opacity: 1, ease: 'power2.out' }, 0);
    tl.fromTo(approachCardsRef.current, { x: '40vw', opacity: 0 }, { x: 0, opacity: 1, ease: 'power2.out' }, 0.05);
    tl.fromTo(approachContentRef.current, { x: 0, opacity: 1 }, { x: '-18vw', opacity: 0, ease: 'power2.in' }, 0.7);
    tl.fromTo(approachCardsRef.current, { x: 0, opacity: 1 }, { x: '18vw', opacity: 0, ease: 'power2.in' }, 0.7);
    tl.fromTo(approachLabelRef.current, { opacity: 1 }, { opacity: 0, ease: 'power2.in' }, 0.8);
  });

  // Areas of focus
  const focusRef = useRef<HTMLElement>(null);
  useStaggerFadeUp(focusRef, 'li');

  // Education
  const educationRef = useRef<HTMLElement>(null);
  useFadeUp(educationRef);

  // Closing CTA
  const ctaRef = useRef<HTMLElement>(null);
  useFadeUp(ctaRef);

  return (
    <div className="pt-24">
      {/* Hero — pinned */}
      <section
        ref={heroSectionRef}
        aria-labelledby="about-hero-heading"
        className="relative flex min-h-screen w-full items-center overflow-hidden bg-cream"
      >
        <div className="container-shell grid gap-12 lg:grid-cols-2 lg:items-center">
          <div ref={heroBioRef}>
            <p ref={heroLabelRef} className="label-upper mb-4">{hero.eyebrow}</p>
            <div className="hairline mb-8" />
            <h1 id="about-hero-heading" className="hero-title">{hero.heading}</h1>
            <p className="hero-lead mt-6">{hero.intro}</p>
            <p className="body-copy mt-4 max-w-xl">{hero.supportingText}</p>
          </div>
          <div ref={heroImageRef} className="card-rounded aspect-[3/4] relative overflow-hidden">
            <Image
              src="/about_founder.jpg"
              alt="Amy Polzin, counselor at Eternal Focus Christian Counseling"
              fill
              priority
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover object-center"
            />
          </div>
        </div>
        <LeafDecoration variant="vertical" className="absolute right-4 top-0 h-full w-8 opacity-30 pointer-events-none" aria-hidden="true" />
      </section>

      {/* Professional overview */}
      <section
        ref={overviewRef}
        aria-labelledby="professional-overview-heading"
        className="bg-cream-dark py-20"
      >
        <div className="container-shell max-w-3xl">
          <p className="label-upper mb-4">{professionalOverview.eyebrow}</p>
          <div className="hairline mb-8" />
          <h2 id="professional-overview-heading" className="section-title">
            A thoughtful, steady presence for seasons that require support and care.
          </h2>
          <p className="body-copy mt-6">{professionalOverview.body}</p>
        </div>
      </section>

      {/* Counseling approach — pinned */}
      <section
        ref={approachSectionRef}
        aria-labelledby="approach-heading"
        className="relative flex min-h-screen w-full items-center overflow-hidden bg-cream"
      >
        <div className="container-shell grid gap-12 lg:grid-cols-2 lg:items-center">
          <div ref={approachContentRef}>
            <p ref={approachLabelRef} className="label-upper mb-4">{counselingApproach.eyebrow}</p>
            <div className="hairline mb-8" />
            <h2 id="approach-heading" className="section-title">{counselingApproach.heading}</h2>
            <p className="body-copy mt-5">{counselingApproach.body}</p>
            <p className="mt-6 label-upper">{counselingApproach.methodsIntro}</p>
          </div>
          <div ref={approachCardsRef} className="space-y-4">
            {counselingApproach.methods.map((method) => (
              <article key={method.name} className="card-premium-soft p-5">
                <h3 className="card-title">{method.name}</h3>
                <p className="card-copy mt-2">{method.description}</p>
              </article>
            ))}
          </div>
        </div>
        <LeafDecoration variant="top-right" className="absolute top-8 right-8 w-40 opacity-30 animate-leaf-rotate pointer-events-none" aria-hidden="true" />
      </section>

      {/* Areas of focus */}
      <section
        ref={focusRef}
        aria-labelledby="focus-heading"
        className="relative bg-cream-dark py-20"
      >
        <div className="container-shell">
          <p className="label-upper mb-4">{areasOfFocus.eyebrow}</p>
          <div className="hairline mb-8" />
          <h2 id="focus-heading" className="section-title max-w-2xl">{areasOfFocus.heading}</h2>
          <ul className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {areasOfFocus.items.map((item) => (
              <li key={item} className="card-premium-inset px-5 py-4 text-sm leading-7 text-[var(--color-charcoal-light)]">
                {item}
              </li>
            ))}
          </ul>
        </div>
        <LeafDecoration variant="bottom-left" className="absolute bottom-8 left-8 w-40 opacity-40 animate-leaf-drift pointer-events-none" aria-hidden="true" />
      </section>

      {/* Education */}
      <section
        ref={educationRef}
        aria-labelledby="education-heading"
        className="bg-cream py-20"
      >
        <div className="container-shell grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <p className="label-upper mb-4">{education.eyebrow}</p>
            <div className="hairline mb-8" />
            <h2 id="education-heading" className="section-title">{education.heading}</h2>
            <p className="body-copy mt-5">{education.intro}</p>
            <p className="card-premium-inset mt-6 bg-white px-5 py-4 text-sm leading-7 text-[var(--color-charcoal-light)]">{education.note}</p>
          </div>
          <ol className="space-y-3">
            {education.items.map((item, index) => (
              <li key={item} className="card-premium-soft flex gap-4 bg-white px-5 py-4">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[var(--color-light-tint)] text-sm font-semibold text-[var(--color-sage-dark)]">
                  0{index + 1}
                </span>
                <span className="card-copy pt-0.5">{item}</span>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Closing CTA */}
      <section
        ref={ctaRef}
        aria-labelledby="about-cta-heading"
        className="relative overflow-hidden cta-panel py-20"
      >
        <div className="container-shell relative z-10 max-w-3xl">
          <p className="label-upper mb-4 text-sage-light">{closingCta.eyebrow}</p>
          <h2 id="about-cta-heading" className="section-title text-white">{closingCta.heading}</h2>
          <p className="body-copy mt-5 text-white/80">{closingCta.body}</p>
          <div className="cta-actions mt-10">
            <a href={closingCta.primaryHref} className="button-base button-on-dark-primary">{closingCta.primaryLabel}</a>
            <a href={closingCta.secondaryHref} className="button-base button-on-dark-secondary">{closingCta.secondaryLabel}</a>
          </div>
        </div>
        <LeafDecoration variant="bottom-right" className="absolute bottom-0 right-0 w-64 opacity-25 pointer-events-none" aria-hidden="true" />
      </section>
    </div>
  );
}
