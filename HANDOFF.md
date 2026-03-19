# Eternal Focus CC — KIMI Design Migration Handoff

**Repo:** https://github.com/koshtaru/eternalfocusccdesign
**Stack:** Next.js 14, TypeScript, Tailwind CSS, GSAP
**Design spec:** `Eternal_Focus_KIMI_Merge_Spec.md` (in the parent `Website design/` folder, not committed to repo)

---

## Status: 10/11 tasks complete

### Done ✅
| File | Change |
|------|--------|
| `package.json` | `gsap` installed |
| `tailwind.config.ts` | KIMI colors (cream/sage/charcoal), Cormorant Garamond font, leaf keyframe animations |
| `app/globals.css` | Full token swap, new utilities (`.label-upper`, `.hairline`, `.card-rounded`, `.btn-primary`, `.btn-secondary`, `.grain-overlay`) |
| `app/layout.tsx` | Cormorant Garamond font, grain overlay div, GSAPProvider wrapper |
| `components/GSAPProvider.tsx` | **NEW** — registers ScrollTrigger at app level, cleans up on unmount |
| `components/LeafDecoration.tsx` | **NEW** — SVG decoration, 6 variants: `cluster`, `single`, `vertical`, `bottom-right`, `top-right`, `bottom-left` |
| `components/NavBar.tsx` | `'use client'`, scroll detection, transparent-on-load → cream+blur on scroll, fixed positioning |
| `components/Footer.tsx` | Cream palette, serif logo, sage hover links, LeafDecoration, Privacy link added |
| `app/page.tsx` | Full KIMI redesign with pinned GSAP scroll animations, all 8 sections |
| `app/services/page.tsx` | Full KIMI redesign with pinned GSAP scroll animations, all 6 sections |
| `app/about/page.tsx` | Full KIMI redesign with pinned GSAP scroll animations, all 6 sections |

### Remaining ❌
| File | Change |
|------|--------|
| `app/contact/page.tsx` | Needs KIMI redesign — still on old green design |

---

## The one remaining task: `app/contact/page.tsx`

The current file at `app/contact/page.tsx` still uses the **old green design** (hard-coded rgba green values, old card classes, old gradients). It needs to be rewritten to match the KIMI pattern used in `app/services/page.tsx` and `app/about/page.tsx`.

### Sections to implement:

| Section | `aria-labelledby` to preserve | Layout | Animation | Leaves |
|---------|-------------------------------|--------|-----------|--------|
| **Hero** | `contact-hero-heading` | Centred headline over background image | GSAP entrance stagger (y+rotateX) | `bottom-right` |
| **Ways to start** | `ways-to-start-heading` | 3 cards (Phone, Email, Format) | GSAP stagger fade-up | None |
| **What to expect** | `what-to-expect-heading` | Text left + numbered steps right | Pinned GSAP ScrollTrigger | `top-right` |
| **Insurance status** | `insurance-status-heading` | Text left + list right | GSAP fade-up | None |
| **Closing CTA** | `contact-cta-heading` | Dark sage full-width panel | GSAP fade-up | `bottom-right` opacity-25 |

### Content source:
All content comes from `CONTACT_PAGE_CONTENT` in `lib/content.ts` — **do not change `lib/content.ts`**.

The destructured fields are:
```ts
const { hero, waysToStart, whatToExpect, insuranceStatus, closingCta } = CONTACT_PAGE_CONTENT;
```

### Pattern to follow exactly:

Copy the structure from `app/services/page.tsx` or `app/about/page.tsx`:

```tsx
'use client';

import Image from 'next/image';
import { useRef, useLayoutEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { CONTACT_PAGE_CONTENT } from '../../lib/content';
import LeafDecoration from '../../components/LeafDecoration';

gsap.registerPlugin(ScrollTrigger);

// Copy usePinnedSection, useFadeUp, useStaggerFadeUp helpers verbatim from services/page.tsx
```

- Top-level div: `<div className="pt-24">` (fixed nav offset)
- Hero: `h-[70vh]` with background image — use `hero_interior.jpg` or `resources_journal.jpg`
- Pinned sections: `min-h-screen`, `flex items-center`
- Alternating bg: `bg-cream` / `bg-cream-dark`
- Button classes in CTA: `button-base button-on-dark-primary` / `button-base button-on-dark-secondary`
- **No free-form contact form** (HIPAA — keep phone/email CTAs only)
- Keep all `aria-labelledby` IDs exactly as listed above

### Important constraints (do not change):
- `lib/content.ts` — untouched
- `lib/constants.ts` — untouched (SimplePractice URLs)
- `app/privacy/page.tsx` — untouched
- All `target="_blank" rel="noopener noreferrer"` on external links
- All `aria-labelledby` IDs must match their heading `id` attributes

---

## Design tokens reference

```css
--color-cream:          #F6F4F2
--color-cream-dark:     #F2EBE5
--color-sage:           #7E8A56
--color-sage-light:     #9BA574
--color-sage-dark:      #5E6A3E
--color-charcoal:       #2B2B2B
--color-charcoal-light: #6F6F6F
```

Tailwind classes available: `bg-cream`, `bg-cream-dark`, `text-sage`, `text-charcoal`, `text-charcoal-light`, `font-serif` (Cormorant Garamond)

CSS utility classes: `.label-upper`, `.hairline`, `.card-rounded`, `.btn-primary`, `.btn-secondary`, `.hero-title`, `.section-title`, `.hero-lead`, `.body-copy`, `.card-copy`, `.card-title`, `.card-premium`, `.card-premium-soft`, `.card-premium-inset`, `.cta-panel`, `.button-base`, `.button-on-dark-primary`, `.button-on-dark-secondary`

---

## Images available in `public/`

```
hero_interior.jpg       ← home hero bg
about_founder.jpg       ← about page portrait
services_couple.jpg     ← services hero / sections
team_counselor.jpg      ← about approach section
testimonial_interior.jpg ← testimonials section
courses_group.jpg       ← reassurance section
resources_journal.jpg   ← available for contact page
```

---

## After completing contact page

1. Run `npm run build` — should pass with no TypeScript errors
2. Verify all routes resolve: `/`, `/services`, `/about`, `/contact`, `/privacy`
3. Check SimplePractice URLs still intact in `lib/constants.ts`
4. Confirm skip-to-content link present in layout
5. Test mobile nav drawer still functional
6. Commit and push to `https://github.com/koshtaru/eternalfocusccdesign`
