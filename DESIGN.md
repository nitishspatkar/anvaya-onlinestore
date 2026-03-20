# Anvaya Design System Documentation

## Overview

Anvaya embodies a **Swiss Aesthetic with Indian Warmth** — combining the precision and restraint of Swiss design with the storytelling and humanity of Indian heritage.

## Design Tokens

All design tokens are defined as CSS custom properties in `/app/globals.css` for easy customization and consistent application across the application.

### Colors

```css
--background: #F7F4EF       /* Ivory base — never pure white */
--foreground: #2C2420       /* Warm charcoal — never harsh black */
--text-primary: #2C2420     /* Primary text color */
--text-secondary: #6B6460   /* Secondary text, muted information */
--primary: #2D4A3E          /* Forest green — headings, nav, key UI */
--accent-warm: #C8A882      /* Sand — cards, section alternates */
--accent-gold: #B8985A      /* Muted gold — borders, labels, fine details */
--accent-blush: #E8D5C0     /* Subtle background, hover states */
--accent-terracotta: #C06040 /* Terracotta — CTA button ONLY */
--border: #D4C4B8           /* Subtle borders */
```

**Color Rules:**
- Maximum 3 colors visible in any single section
- Never bright or saturated colors
- Accent terracotta is reserved for the primary CTA button exclusively
- Text never uses direct colors — always use `text-primary` or `text-secondary`

### Typography

**Font Families:**
- **Display/Headlines**: Cormorant Garamond (elegant, European, editorial)
- **Body/UI**: DM Sans (precise, neutral, Swiss modernist)

**Font Weights:**
- Headings: 400 (regular) or italic — never bold
- Body: 400 (regular)
- Labels: 500 (medium)

**Letter Spacing:**
- Headings: 0.02em
- Body: 0.3px (calculated in px for better control)
- Labels/Uppercase: 0.05em (all-caps micro-typography)

**Typography Scale:**
```
h1: 5xl (48px) → 6xl (60px) on md+
h2: 4xl (36px) → 5xl (48px) on md+
h3: 2xl (24px) → 3xl (30px) on md+
h4: xl (20px) → 2xl (24px) on md+
p: lg (18px) with leading-relaxed (1.625)
```

### Spacing

Strict 8pt spacing scale ensures alignment and consistency:
- `8px` (1 unit)
- `16px` (2 units)
- `24px` (3 units) — minimum card padding
- `32px` (4 units)
- `48px` (6 units)
- `64px` (8 units)
- `96px` (12 units) — minimum section separation

**Key Spacing Conventions:**
- Minimum 24px padding inside any card or container
- Minimum 96px vertical whitespace between major sections
- Use gap classes for layout spacing: `gap-8`, `gap-12`
- Never mix margin/padding with gap classes on the same element

## Component Patterns

### Cards

Product cards follow a strict visual hierarchy:
```
[Image: aspect-square, bg-accent-blush]
[Name: font-serif, text-3xl, text-primary]
[Descriptor: text-text-secondary, text-lg]
[Region: text-xs, uppercase, text-accent-gold]
[Optional: Gift Favourite badge]
```

**Hover State:**
- `border` transitions to `border-accent-gold`
- Shadow becomes visible
- Heading color transitions to `text-accent-warm`
- Duration: 300ms ease-out

### Sections

Major content sections follow this structure:
1. Heading in serif font (2xl-5xl)
2. Introductory paragraph in body font
3. Content in 1-2 column grid (1 column mobile, 2+ desktop)
4. Optional visual element (image, timeline, location indicator)
5. Generous spacing (96px) before next section

### Navigation

- Back button: small, uppercase, tracking-widest
- Sticky header with minimal weight
- Color: `text-secondary` with hover to `text-primary`

## Layout System

### Grid Structure

**Desktop (md and above):**
- 12-column flexible grid
- Max width: 1440px (`max-w-6xl`)
- Padding: 32px horizontal (`px-8`)

**Mobile (below md):**
- 4-column flexible grid
- Full-width content
- Padding: 24px horizontal (`px-6`)

### Responsive Patterns

**Typography:**
```
h1: text-5xl md:text-6xl
h2: text-4xl md:text-5xl
h3: text-2xl md:text-3xl
p: text-lg (consistent across breakpoints)
```

**Grid:**
```
grid-cols-1 md:grid-cols-2
grid-cols-1 md:grid-cols-4 (for process timeline)
```

**Spacing:**
```
py-16 md:py-24
px-6 md:px-8
gap-8 md:gap-12
```

## Imagery

### Product Photography

- **Background**: White or ivory (#F7F4EF) only
- **Lighting**: Natural, soft, editorial quality
- **Composition**: Product centered with breathing room
- **Style**: Premium, sophisticated, luxury aesthetic
- **Dimensions**: Square aspect ratio (1:1)

### Portrait Photography

- **Subject**: Farmer, artisan, or community member
- **Lighting**: Soft, golden-hour, warm tones
- **Tone**: Dignified, respectful, celebratory
- **Context**: Regional setting visible in background (soft focus)
- **Styling**: Traditional or natural clothing
- **Aesthetic**: Human, real, inspiring — never poverty tourism

### Icons

- **Style**: Thin-line botanical illustrations only
- **Weight**: Never filled, always outlined
- **Sizing**: 16px, 20px, or 24px consistently
- **Color**: Apply using text-color classes, never hardcoded colors

## Interactions

### Transitions

All transitions use consistent timing and easing:
```css
duration: 300ms
easing: ease-out
```

**Common transitions:**
- `transition-colors` — for hover states, active states
- `transition-opacity` — for fade effects
- `transition-all` — for complex multi-property changes

**Avoid:**
- Bouncy or playful easing functions
- Transitions longer than 300ms
- Transitions on properties like width or height (use opacity instead)

### Hover States

- **Links/Cards**: Border color to gold, shadow becomes visible
- **Buttons**: Opacity reduction (opacity-90)
- **Text**: Color transition (e.g., to accent-warm)
- **Images**: Subtle scale or brightness adjustment (if any)

## Page Structures

### Homepage (`/`)

**Structure:**
1. Header with brand name and description
2. Products grid (2 columns desktop, 1 mobile)
3. Footer with tagline

**Spacing:**
- Header: pt-16 pb-24
- Grid section: py-24
- Footer: py-16 (border-top)

### Product Detail (`/products/[id]`)

**Sections (in order):**
1. **Navigation Bar** — sticky, minimal
2. **Hero** — product image + introduction (2-column grid)
3. **Where It Comes From** — origin story with location badge
4. **Who Made This** — portrait + story (2-column grid)
5. **How It's Made** — 4-step timeline (4-column desktop, vertical mobile)
6. **Why It Makes a Perfect Gift** — positioning copy
7. **CTA** — reserve button with launching message
8. **Footer** — tagline

**Alternating Backgrounds:**
- Default: background (ivory)
- Origin section: bg-accent-blush
- Process section: bg-accent-blush
- Other sections: background

## Accessibility

### Semantic HTML

- Use `<main>`, `<header>`, `<section>`, `<footer>` elements
- Use `<h1>`, `<h2>`, etc. for headings (never skip levels)
- Use `<nav>` for navigation
- Link text should be descriptive

### Images

- All images have descriptive `alt` text
- Decorative images: leave alt empty or use `aria-hidden="true"`
- Avoid text-heavy images; use actual text instead

### Color Contrast

- All text meets WCAG AA standards
- Warm charcoal (#2C2420) on ivory (#F7F4EF): 15.6:1 contrast ratio
- Never rely on color alone to convey information

## Customization Guide

### Changing Colors

Update CSS custom properties in `/app/globals.css`:
```css
:root {
  --primary: #NEW_HEX_CODE;
  /* ... other colors */
}
```

All Tailwind classes automatically use these tokens.

### Changing Fonts

Update font imports in `/app/layout.tsx`:
```tsx
import { NewFont, NewFont_Mono } from 'next/font/google'

const newFont = NewFont({ variable: '--font-display', ... })
```

Then update the font family CSS variables to match.

### Adding Products

Add to the products array in `/lib/products.ts`:
```typescript
{
  id: 'new-product',
  name: 'Product Name',
  descriptor: 'One-line description',
  region: 'Region Name',
  introduction: 'Poetic introduction...',
  origin: { /* ... */ },
  hands: { /* ... */ },
  process: [ /* ... */ ],
  giftAngle: 'Gift positioning...',
  isFavourite: false
}
```

Images must be placed in:
- `/public/images/products/new-product.jpg`
- `/public/images/portraits/new-product.jpg`

---

**Design System v1.0**  
Based on Swiss Aesthetic + Indian Warmth principles  
Built with Tailwind CSS, CSS Custom Properties, and Next.js
