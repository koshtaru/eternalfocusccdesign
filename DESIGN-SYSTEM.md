# Eternal Focus CC — Design System
## Colours & Typography

---

## Colour Palette

The site uses the **KIMI palette** — a warm, grounded set of creams, sage greens, and charcoal tones. Every colour has a CSS custom property and a Tailwind token.

### Core Colours

| Name | Hex | CSS Variable | Tailwind Class |
|---|---|---|---|
| Cream | `#F6F4F2` | `--color-cream` | `bg-cream` / `text-cream` |
| Cream Dark | `#EDE4DB` | `--color-cream-dark` | `bg-cream-dark` |
| Sage | `#7E8A56` | `--color-sage` | `bg-sage` / `text-sage` |
| Sage Light | `#9BA574` | `--color-sage-light` | `bg-sage-light` / `text-sage-light` |
| Sage Dark | `#5E6A3E` | `--color-sage-dark` | `bg-sage-dark` / `text-sage-dark` |
| Charcoal | `#2B2B2B` | `--color-charcoal` | `bg-charcoal` / `text-charcoal` |
| Charcoal Light | `#6F6F6F` | `--color-charcoal-light` | `bg-charcoal-light` / `text-charcoal-light` |
| White | `#FFFFFF` | `--color-white` | — |

### Warm Surface Tones

These are used for card backgrounds, overlays, and surface layering. They are not Tailwind tokens — reference them via CSS variable.

| Name | Value | CSS Variable | Used For |
|---|---|---|---|
| Warm | `#F2EBE5` | `--color-warm` | Soft background tints |
| Warm Deep | `#EAE0D6` | `--color-warm-deep` | Deeper warm surface |
| Surface | `rgba(246, 244, 242, 0.94)` | `--color-surface` | Semi-transparent cream panels |
| Surface Soft | `rgba(242, 235, 229, 0.94)` | `--color-surface-soft` | Slightly warmer panel variant |
| Light Tint | `rgba(126, 138, 86, 0.12)` | `--color-light-tint` | Sage-tinted background fills |

### Semantic Aliases

These map the KIMI palette to intent-based names. Use these in components where you want to express role rather than colour:

| Alias | Maps To | CSS Variable |
|---|---|---|
| Primary | Sage | `--color-primary` |
| Secondary | Sage Dark | `--color-secondary` |
| Accent | Sage Light | `--color-accent` |
| Bright | Sage Light | `--color-bright` |
| Body | Charcoal Light | `--color-body` |
| BG | Cream | `--color-bg` |

### Section Backgrounds

The two repeating section backgrounds have layered radial gradients to add subtle warmth and depth. Never use a flat colour for these — always use the utility class.

**`.bg-cream`** — used on lighter sections (Reassurance, Faith, Insurance)
```
radial-gradient(ellipse at 20% 50%, rgba(237, 228, 219, 0.45), transparent 60%)
radial-gradient(ellipse at 80% 30%, rgba(242, 235, 229, 0.35), transparent 55%)
base: #F6F4F2
```

**`.bg-cream-dark`** — used on slightly deeper sections (Services, Telehealth, Testimonials)
```
radial-gradient(ellipse at 75% 60%, rgba(226, 218, 207, 0.4), transparent 55%)
radial-gradient(ellipse at 15% 40%, rgba(237, 228, 219, 0.3), transparent 50%)
base: #EDE4DB
```

**CTA panel** (`.cta-panel`) — sage gradient used only for the closing call-to-action
```
linear-gradient(135deg, #5E6A3E 0%, #7E8A56 100%)
```

### Scrollbar

A thin sage-tinted scrollbar is applied globally (webkit only):
- Width: `4px`
- Thumb: `rgba(126, 138, 86, 0.4)`, hover `rgba(126, 138, 86, 0.7)`
- Track: transparent

### Text Selection

Selected text uses a sage-tinted highlight:
- Background: `rgba(126, 138, 86, 0.20)`
- Text colour: Charcoal (`#2B2B2B`)

---

## Typography

Two typefaces form the typographic system. Display (serif) is used for all headings and featured quotes. Body (sans) is used for all supporting text, labels, and UI.

### Typefaces

| Role | Family | Fallback | CSS Variable | Tailwind Class |
|---|---|---|---|---|
| Display | Cormorant Garamond | Georgia, serif | `--font-display` | `font-serif` |
| Body | Inter | system-ui, sans-serif | `--font-body` | `font-sans` |

**Cormorant Garamond** is a refined old-style serif. Used at larger sizes (24px+) it creates an editorial, calm quality. It is always rendered with `font-smoothing: antialiased`.

**Inter** is a neutral grotesque sans-serif. Used for all functional text — labels, body copy, buttons, nav.

---

### Type Scale

All heading sizes use `clamp()` for fluid scaling between mobile and desktop viewports.

#### `.hero-title` — Page headline (Hero section only)
```css
font-family: Cormorant Garamond
font-size:   clamp(2rem, 3.2vw, 3rem)
font-weight: 500
line-height: 1.15
letter-spacing: 0em
color: --color-charcoal
text-wrap: balance
```
> The primary page title. Set at medium weight (500) to feel welcoming rather than heavy.

#### `.section-title` — Section headings
```css
font-family: Cormorant Garamond
font-size:   clamp(2.1rem, 3.6vw, 3.25rem)
font-weight: 600
line-height: 1.05
letter-spacing: -0.01em
color: --color-charcoal
text-wrap: balance
```
> Slightly larger and bolder than the hero title. Tight line-height suits multi-line headings. Use `!text-[clamp(1.6rem,2.8vw,2.5rem)]` to override when the heading is longer.

#### `.reflection-quote` — Large featured quote/passage
```css
font-family: Cormorant Garamond
font-size:   clamp(1.2rem, 2vw, 1.55rem)
line-height: 1.7
letter-spacing: -0.01em
color: --color-charcoal
```
> Used for the Reassurance section welcome message. Generous line-height suits meditative prose.

#### `.hero-lead` — Hero supporting paragraph
```css
font-family: Inter
font-size:   clamp(1rem, 1.5vw, 1.25rem)
line-height: 1.6
color: --color-charcoal
```

#### `.body-copy` — General body text
```css
font-family: Inter
font-size:   clamp(0.9375rem, 1.2vw, 1.125rem)
line-height: 1.7
color: --color-charcoal-light
```
> Used for section descriptions and supporting paragraphs. Charcoal Light (`#6F6F6F`) keeps it readable but clearly subordinate to headings.

#### `.label-upper` — Eyebrow / section label
```css
font-family: Inter
font-size:   0.75rem
font-weight: 500
letter-spacing: 0.14em
text-transform: uppercase
color: --color-charcoal-light
```
> Appears above every section heading. Sets context and creates vertical rhythm. Always paired with a `.hairline` divider below it.

#### `.card-title` — Card heading
```css
font-family: Inter
font-size:   1.14rem
font-weight: 600
line-height: 1.6
letter-spacing: -0.012em
color: --color-charcoal
```

#### `.card-copy` — Card body text
```css
font-family: Inter
font-size:   0.9375rem
line-height: 1.8
color: --color-charcoal-light
```

#### `.card-kicker` / `.section-kicker` — Small uppercase label inside cards
```css
font-size:   0.75–0.76rem
font-weight: 600
letter-spacing: 0.16–0.18em
text-transform: uppercase
color: --color-charcoal-light
```

---

### Typography Usage Rules

1. **Headings are always Cormorant Garamond.** Never use Inter for an `<h1>` or `<h2>`.
2. **Body text is always Inter.** Never use Cormorant Garamond for paragraphs or labels.
3. **Eyebrow labels always precede headings** — `.label-upper` above, `.hairline` below, then `.section-title`.
4. **`text-wrap: balance`** is applied to all heading classes to prevent awkward single-word last lines.
5. **Clamp sizing** means you should never hardcode `text-xl` or similar Tailwind size utilities on headings — always use the semantic class.
6. **On dark backgrounds** (CTA panel), heading colour switches to `text-white` and body to `text-white/80`. The class names stay the same; colour overrides are applied inline.

---

## Shadows & Radius

| Token | Value | CSS Variable | Used For |
|---|---|---|---|
| Card shadow | `0 18px 40px rgba(0,0,0,0.08)` | `--shadow-card` | Image cards (`.card-rounded`) |
| Soft shadow | `0 12px 30px rgba(43,43,43,0.05)` | `--shadow-soft` | Subtle panel lift |
| Panel shadow | `0 24px 60px rgba(43,43,43,0.09)` | `--shadow-panel` | Heavier panels |
| Card radius | `22px` | `--radius-card` | Standard card rounding |
| Image card radius | `28px` | hardcoded in `.card-rounded` | Large photo cards |

---

## Layout

**Max content width:** `1120px` (`--max-width`)
**Container class:** `.container-shell` — centred, `1.25rem` horizontal padding each side
**Section height:** All full-page sections use `min-h-[100dvh]` to respect dynamic viewport height on mobile
**Section padding:** `py-16` on the inner grid
**Section grid:** `grid gap-8 lg:grid-cols-2 lg:items-center` — single column on mobile, two equal columns on desktop
