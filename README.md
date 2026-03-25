# Eternal Focus Christian Counseling — Website

Next.js 14 website for Eternal Focus Christian Counseling (Amy Polzin, MA, NCC, LPC). Built with the KIMI design system — a warm, editorial palette of cream, sage, and charcoal with Cormorant Garamond serif headings and GSAP scroll animations.

**Repo:** https://github.com/koshtaru/eternalfocusccdesign

---

## Stack

- **Framework:** Next.js 14 (App Router, TypeScript)
- **Styling:** Tailwind CSS + custom CSS design tokens
- **Animations:** GSAP + ScrollTrigger
- **Fonts:** Cormorant Garamond (serif/display), Inter (sans/body)
- **Booking:** External links to SimplePractice

---

## Running Locally

```bash
npm install
npm run dev
```

Opens at `http://localhost:3000`.

---

## Project Structure

```
app/
  page.tsx          # Homepage (8 sections)
  services/         # Services page
  about/            # About page
  contact/          # Contact page (pending redesign)
  privacy/          # Privacy policy
  globals.css       # KIMI design tokens + component classes
components/
  NavBar.tsx
  Footer.tsx
  ScrollProgressNav.tsx
  LeafDecoration.tsx
  GSAPProvider.tsx
lib/
  content.ts        # All page copy (HOMEPAGE_CONTENT, etc.)
  constants.ts      # External links (SimplePractice booking/portal)
public/
  hero_interior.jpg
  courses_group.jpg
  services_couple.jpg
  testimonial_interior.jpg
DESIGN-SYSTEM.md    # Colours, typography, shadows, layout tokens
```

---

## Pages

| Page | Status | Notes |
|---|---|---|
| Home (`/`) | Complete | 8 sections, GSAP viewport animations |
| Services (`/services`) | Complete | KIMI redesign |
| About (`/about`) | Complete | KIMI redesign |
| Contact (`/contact`) | Pending | Needs KIMI redesign (see HANDOFF.md) |
| Privacy (`/privacy`) | Placeholder | Unchanged |

---

## Task History

### Commit `142f18c` — Initial commit: Eternal Focus CC with KIMI design integration
Built the full initial site from scratch with the KIMI design system applied across all pages. Established the cream/sage/charcoal palette, Cormorant Garamond + Inter type system, and GSAP pinned scroll animations on the homepage.

---

### Commit `92bf7de` — Add HANDOFF.md
Documented the remaining task: rebuilding `app/contact/page.tsx` from the old green design to match the KIMI pattern. Specified required sections (Hero, Ways to Start, What to Expect, Insurance Status, Closing CTA), aria IDs, and animation patterns.

---

### Commit `8193f3e` — Add scroll progress nav + fix pinned section blank content bug
Added `ScrollProgressNav` — a fixed right-side dot navigation that tracks scroll position across all 8 homepage sections. Fixed a bug where pinned sections showed blank content after GSAP ScrollTrigger initialization.

---

### Commit `e619371` — Fix pinned section layout: clipping, image overflow, exit animation
Resolved image overflow clipping in the pinned two-column sections. Fixed exit animation timing so elements slide out in opposite directions with a visible stagger. Corrected layout so image cards respect `max-h-[65vh]` on desktop.

---

### Commit `14ba835` — Replace pinned scroll sections with viewport-reveal animations
**Major animation architecture change.** Removed all GSAP pinning, scrubbing, and snapping from the homepage. Replaced with Apple.com-style free scrolling — sections scroll naturally with OS inertia, and content animates in/out as sections enter and leave the viewport.

**Why:** Multiple attempts to make pinned sections feel organic (scrub tuning, `back.out` eases, ScrollTrigger snap with elastic ease) all felt mechanical because `pin: true` freezes the scroll position, fighting macOS trackpad inertia. The correct fix was removing pinning entirely.

**What changed:**
- `usePinnedSection` → `useViewportReveal` — elements slide in from opposite sides as section enters viewport, slide back out as it leaves
- `usePinnedCards` → `useViewportRevealCards` — text and cards fade/slide up in sequence on enter, reverse on leave
- All sections use `min-h-[100dvh]` (unchanged) so they still fill the screen; scroll is just never interrupted
- Updated KIMI colour tokens (`cream-dark` corrected to `#EDE4DB`)
- Added section background radial gradients to `globals.css`
- Added `DESIGN-SYSTEM.md` documenting full colour palette and typography scale

---

## Design System

See `DESIGN-SYSTEM.md` for full documentation of:
- Colour palette (hex values, CSS variables, Tailwind tokens)
- Section backgrounds (radial gradient recipes)
- Typography scale (all CSS classes with values and usage rules)
- Shadows, border radii, layout tokens

---

## External Links

Configured in `lib/constants.ts`:
- **Book Appointment:** SimplePractice scheduling link
- **Client Portal:** SimplePractice client portal link
