'use client';

import { useEffect, useRef, useState } from 'react';

export interface ScrollSection {
  id: string;
  label: string;
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
      const progress = docHeight > 0 ? Math.min(scrollTop / docHeight, 1) : 0;
      setScrollProgress(progress);

      // Show after scrolling past hero (first 15% of page)
      setVisible(progress > 0.05);

      // Find active section
      let current = 0;
      sections.forEach((sec, i) => {
        const el = document.getElementById(sec.id);
        if (!el) return;
        const rect = el.getBoundingClientRect();
        // Section is "active" when its top is within upper 55% of viewport
        if (rect.top <= window.innerHeight * 0.55) {
          current = i;
        }
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
    const target = el.closest('section') ?? el;
    const navbar = document.querySelector('header');
    const offset = navbar ? navbar.getBoundingClientRect().height : 80;
    const top = Math.max(0, target.getBoundingClientRect().top + window.scrollY - offset);
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
      <div className="relative flex flex-col items-center" style={{ overflow: 'hidden' }}>
        {/* Track background */}
        <div
          className="absolute left-1/2 -translate-x-1/2 w-[2px] rounded-full bg-[rgba(43,43,43,0.10)]"
          style={{ top: 0, height: '100%' }}
        />
        {/* Filled progress */}
        <div
          className="absolute left-1/2 -translate-x-1/2 w-[2px] rounded-full bg-[var(--color-sage)]"
          style={{
            top: 0,
            height: `${Math.min(scrollProgress * 100, 100)}%`,
            transition: 'height 80ms linear',
            transformOrigin: 'top',
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
