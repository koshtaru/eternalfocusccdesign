'use client';

import Image from 'next/image';
import { useRef, useLayoutEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SERVICES_PAGE_CONTENT } from '../../lib/content';
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

export default function ServicesPage() {
  const {
    hero,
    focusAreas,
    counselingApproach,
    whoItsFor,
    supportLooksLike,
    closingCta,
  } = SERVICES_PAGE_CONTENT;

  // Hero refs
  const heroLine1 = useRef<HTMLSpanElement>(null);
  const heroLead  = useRef<HTMLParagraphElement>(null);

  useLayoutEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const ctx = gsap.context(() => {
      gsap.fromTo(
        [heroLine1.current, heroLead.current],
        { y: 40, opacity: 0, rotateX: 18 },
        { y: 0, opacity: 1, rotateX: 0, duration: 0.8, ease: 'power3.out', stagger: 0.14 }
      );
    });
    return () => ctx.revert();
  }, []);

  // Focus areas
  const focusRef = useRef<HTMLElement>(null);
  useStaggerFadeUp(focusRef, 'article');

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

  // Who it's for
  const whoRef = useRef<HTMLElement>(null);
  useFadeUp(whoRef);

  // Support looks like
  const supportRef = useRef<HTMLElement>(null);
  useStaggerFadeUp(supportRef, 'article');

  // Closing CTA
  const ctaRef = useRef<HTMLElement>(null);
  useFadeUp(ctaRef);

  return (
    <div className="pt-24">
      {/* Hero */}
      <section
        aria-labelledby="services-hero-heading"
        className="relative flex min-h-[70vh] w-full items-center overflow-hidden"
      >
        <Image
          src="/services_couple.jpg"
          alt="Two people in a supportive counseling session"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-cream/50" />
        <div className="relative z-10 container-shell">
          <p className="label-upper mb-6">{hero.eyebrow}</p>
          <h1 id="services-hero-heading" className="hero-title max-w-2xl" style={{ perspective: '600px' }}>
            <span ref={heroLine1}>{hero.heading}</span>
          </h1>
          <p ref={heroLead} className="hero-lead mt-6 max-w-xl">{hero.intro}</p>
        </div>
        <LeafDecoration variant="bottom-right" className="absolute bottom-0 right-0 w-[30vw] opacity-50 animate-leaf-drift pointer-events-none" aria-hidden="true" />
      </section>

      {/* Focus areas */}
      <section
        ref={focusRef}
        aria-labelledby="focus-areas-heading"
        className="relative bg-cream py-20"
      >
        <div className="container-shell">
          <p className="label-upper mb-4">{focusAreas.eyebrow}</p>
          <div className="hairline mb-8" />
          <h2 id="focus-areas-heading" className="section-title max-w-2xl">{focusAreas.heading}</h2>
          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {focusAreas.groups.map((group) => (
              <article key={group.title} className="card-premium p-6">
                <h3 className="font-serif text-2xl font-semibold text-charcoal">{group.title}</h3>
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
        <LeafDecoration variant="top-right" className="absolute top-8 right-8 w-40 opacity-40 animate-leaf-rotate pointer-events-none" aria-hidden="true" />
      </section>

      {/* Counseling approach — pinned */}
      <section
        ref={approachSectionRef}
        aria-labelledby="services-approach-heading"
        className="relative flex min-h-screen w-full items-center overflow-hidden bg-cream-dark"
      >
        <div className="container-shell grid gap-12 lg:grid-cols-2 lg:items-center">
          <div ref={approachContentRef}>
            <p ref={approachLabelRef} className="label-upper mb-4">{counselingApproach.eyebrow}</p>
            <div className="hairline mb-8" />
            <h2 id="services-approach-heading" className="section-title">{counselingApproach.heading}</h2>
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
        <LeafDecoration variant="cluster" className="absolute bottom-8 right-8 w-48 opacity-20 animate-leaf-rotate pointer-events-none" aria-hidden="true" />
      </section>

      {/* Who it's for */}
      <section
        ref={whoRef}
        aria-labelledby="who-its-for-heading"
        className="bg-cream py-20"
      >
        <div className="container-shell grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <p className="label-upper mb-4">{whoItsFor.eyebrow}</p>
            <div className="hairline mb-8" />
            <h2 id="who-its-for-heading" className="section-title">{whoItsFor.heading}</h2>
            <p className="card-premium-inset mt-6 bg-[rgba(126,138,86,0.08)] px-5 py-4 text-sm leading-7 text-[var(--color-sage-dark)]">{whoItsFor.note}</p>
          </div>
          <ul className="grid gap-3 sm:grid-cols-2">
            {whoItsFor.items.map((item) => (
              <li key={item} className="card-premium-inset px-5 py-4 text-sm leading-7 text-[var(--color-charcoal-light)]">{item}</li>
            ))}
          </ul>
        </div>
      </section>

      {/* Support looks like */}
      <section
        ref={supportRef}
        aria-labelledby="support-looks-like-heading"
        className="relative bg-cream-dark py-20"
      >
        <div className="container-shell">
          <p className="label-upper mb-4">{supportLooksLike.eyebrow}</p>
          <div className="hairline mb-8" />
          <h2 id="support-looks-like-heading" className="section-title max-w-3xl">{supportLooksLike.heading}</h2>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {supportLooksLike.paragraphs.map((paragraph, index) => (
              <article key={index} className="card-premium-soft bg-white p-6">
                <p className="card-copy">{paragraph}</p>
              </article>
            ))}
          </div>
        </div>
        <LeafDecoration variant="bottom-left" className="absolute bottom-8 left-8 w-40 opacity-40 animate-leaf-drift pointer-events-none" aria-hidden="true" />
      </section>

      {/* Closing CTA */}
      <section
        ref={ctaRef}
        aria-labelledby="services-cta-heading"
        className="relative overflow-hidden cta-panel py-20"
      >
        <div className="container-shell relative z-10 max-w-3xl">
          <p className="label-upper mb-4 text-sage-light">{closingCta.eyebrow}</p>
          <h2 id="services-cta-heading" className="section-title text-white">{closingCta.heading}</h2>
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
