'use client';

import { useEffect, useRef, useState } from 'react';

export interface ScrollSection {
  id: string;
  label: string;
  offset?: number;
}

interface Props {
  sections: ScrollSection[];
}

export default function ScrollProgressNav({ sections }: Props) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [visible, setVisible] = useState(false);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    const update = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;

      // Show after scrolling past first 5% of page
      setVisible(docHeight > 0 && scrollTop / docHeight > 0.05);

      // Section positions (absolute scroll Y of each section/element)
      const positions = sections.map((sec) => {
        const el = document.getElementById(sec.id);
        if (!el) return 0;
        const section = el.closest('section') ?? el;
        return section.getBoundingClientRect().top + window.scrollY;
      });

      // Interpolate bar progress between sections
      const pageEnd = document.documentElement.scrollHeight;
      let bp = 0;
      for (let i = 0; i < positions.length; i++) {
        const start = positions[i];
        const end = i < positions.length - 1 ? positions[i + 1] : pageEnd;
        if (scrollTop >= start && scrollTop < end) {
          const t = (scrollTop - start) / Math.max(1, end - start);
          bp = (i + t) / (sections.length - 1);
          break;
        }
        if (i === sections.length - 1 && scrollTop >= start) {
          bp = 1;
        }
      }
      setScrollProgress(Math.min(bp, 1));

      // Active dot
      let current = 0;
      sections.forEach((sec, i) => {
        const el = document.getElementById(sec.id);
        if (!el) return;
        if (el.getBoundingClientRect().top <= window.innerHeight * 0.55) current = i;
      });
      setActiveIndex(current);
    };

    const onScroll = () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      rafRef.current = requestAnimationFrame(update);
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    update(); // initial run
    return () => {
      window.removeEventListener('scroll', onScroll);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [sections]);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (!el) return;
    // First dot → very top, last dot → very bottom
    if (id === 'hero-heading') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    if (id === 'closing-cta-heading') {
      window.scrollTo({ top: document.documentElement.scrollHeight, behavior: 'smooth' });
      return;
    }
    const section = (el.closest('section') ?? el) as HTMLElement;
    const navbar = document.querySelector('header');
    const navbarH = navbar ? navbar.getBoundingClientRect().height : 80;
    const sec = sections.find((s) => s.id === id);
    const extraOffset = sec?.offset ?? 80;

    let top: number;
    if (section.classList.contains('items-center')) {
      // Full-height vertically-centered section: target the primary eyebrow.
      // Find the h2 heading first, then look for .label-upper in its parent
      // container — this avoids picking up secondary eyebrows in other columns
      // (e.g. "A Little About Amy" in the About section's bio card).
      const h2 = section.querySelector<HTMLElement>('h2[id], h2');
      const container = h2?.parentElement ?? section;
      const eyebrow = container.querySelector<HTMLElement>('.label-upper') ?? section;
      top = Math.max(0, eyebrow.getBoundingClientRect().top + window.scrollY - navbarH - extraOffset);
    } else {
      // Compact section (e.g. Services): use the per-section offset below the navbar
      top = Math.max(0, section.getBoundingClientRect().top + window.scrollY - navbarH - extraOffset);
    }
    window.scrollTo({ top, behavior: 'smooth' });
  };

  return (
    <div
      aria-hidden="true"
      className="fixed right-4 top-1/2 z-40 -translate-y-1/2 flex flex-col items-center gap-0"
      style={{
        opacity: visible ? 1 : 0,
        transition: 'opacity 400ms ease',
        pointerEvents: visible ? 'auto' : 'none',
      }}
    >
      {/* Vertical progress track */}
      <div className="relative flex flex-col items-center">
        {/* Track — runs from center of first dot to center of last dot.
             py-1 (4px) + half button (10px) = 14px inset each end */}
        <div
          className="absolute left-1/2 -translate-x-1/2 w-[2px] rounded-full bg-[rgba(43,43,43,0.10)]"
          style={{ top: 14, bottom: 14 }}
        />
        {/* Filled progress — same bounds, scaled from the top */}
        <div
          className="absolute left-1/2 -translate-x-1/2 w-[2px] bg-[var(--color-sage)]"
          style={{
            top: 14,
            bottom: 14,
            transformOrigin: 'top',
            transform: `scaleY(${Math.min(scrollProgress, 1)})`,
            transition: 'transform 80ms linear',
          }}
        />

        {/* Dots */}
        <div className="relative flex flex-col gap-5 py-1">
          {sections.map((sec, i) => (
            <button
              key={sec.id}
              onClick={() => scrollTo(sec.id)}
              tabIndex={-1}
              className="group relative flex items-center justify-center"
              style={{ width: 20, height: 20 }}
            >
              {/* Dot */}
              <span
                className="block rounded-full transition-all duration-200"
                style={{
                  width: i === activeIndex ? 10 : 7,
                  height: i === activeIndex ? 10 : 7,
                  background: i === activeIndex
                    ? 'var(--color-sage)'
                    : 'rgba(43,43,43,0.22)',
                  boxShadow: i === activeIndex
                    ? '0 0 0 3px rgba(126,138,86,0.18)'
                    : 'none',
                }}
              />
              {/* Label tooltip */}
              <span
                className="pointer-events-none absolute right-7 whitespace-nowrap rounded-md bg-[var(--color-charcoal)] px-2.5 py-1 text-xs font-medium text-white opacity-0 transition-opacity duration-150 group-hover:opacity-100"
                style={{ letterSpacing: '0.03em' }}
              >
                {sec.label}
              </span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
