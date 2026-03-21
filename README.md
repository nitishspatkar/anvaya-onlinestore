# Anvaya — Rare Botanicals from India

A premium luxury e-commerce experience for artisan-crafted botanical essences, designed with a Swiss aesthetic that honors Indian heritage and quality.

## Design Philosophy

This project embodies the **Switzerland-India Bridge**:
- **Swiss precision**: Strict grid systems, generous whitespace, restrained color palette, clean typography
- **Indian warmth**: Botanical storytelling, human-centered narratives, earth tones, celebration of craft

### Design System

**Color Palette** (3-5 colors maximum, never exceeding recommendations):
- **Base**: Ivory `#F7F4EF` — backgrounds, breathing room
- **Primary**: Forest Green `#2D4A3E` — headings, navigation, key UI
- **Warm**: Sand `#C8A882` — cards, section alternates
- **Accent Gold**: `#B8985A` — borders, fine details, labels
- **Accent Terracotta**: `#C06040` — CTA button only (used nowhere else)
- **Blush**: `#E8D5C0` — hover states, subtle backgrounds
- **Text**: Warm Charcoal `#2C2420` — body text (never harsh black)

**Typography**:
- **Display/Headlines**: Cormorant Garamond (elegant, European, editorial)
- **Body/UI**: DM Sans (precise, neutral, Swiss modernist)
- Never bold — use regular or italic weights only
- Letter-spacing: 0.02em on headings, 0.05em on labels

**Spacing**:
- Strict 8pt spacing scale: 8, 16, 24, 32, 48, 64, 96px
- Minimum 24px padding in cards
- Minimum 96px vertical whitespace between sections
- 12 columns on desktop, 4 columns on mobile

## Project Structure

```
/app
  /layout.tsx              # Root layout with fonts and metadata
  /globals.css             # Design tokens and base styles
  /page.tsx                # Products grid page
  /products/[id]/
    /page.tsx              # Product detail page
  /not-found.tsx           # 404 page

/lib
  /products.ts             # Product data, types, utilities

/public
  /images/
    /products/             # Product photography
    /portraits/            # Maker portrait photography

/tailwind.config.ts        # Tailwind configuration
```

## Features

### Products Grid (`/`)
- Clean, editorial product cards
- 2-column grid on desktop, single column on mobile
- Hover effects with gold accents
- "Gift Favourite" badge for selected products
- Optimized image loading with Next.js Image

### Product Detail Pages (`/products/[id]`)
- **The Product**: Poetic introduction to the botanical
- **Where It Comes From**: Regional origin story with location indicator
- **Who Made This**: Human stories of farmers, harvesters, and artisans
- **How It's Made**: 4-step visual process timeline
- **Why It Makes a Perfect Gift**: Positioning and gift angle
- **Pre-Order CTA**: Reserve button with call-to-action
- Individual metadata generation for SEO

## Products Included

1. **Vetiver** — Cooling root essence from Tamil Nadu
2. **Sandalwood** — Sacred wood of spiritual warmth from Karnataka
3. **Turmeric** — Golden root of ancient healing from Kerala

Each product includes:
- Poetic storytelling
- Farmer/artisan profiles with names and roles
- Regional sourcing information
- 4-step process timeline
- Product imagery and maker portraits

## Design Principles

**What to Avoid:**
- Bright or saturated colors
- Decorative elements without purpose
- Exclamation marks in copy
- Hype language ("Best!", "Amazing!", "Revolutionary!")
- Cluttered layouts
- Dark mode (ivory base only)
- Stock photo aesthetic
- Harsh black text

**What to Embrace:**
- Whisper, don't shout — confidence is in restraint
- White/ivory backgrounds for all product images
- Natural light photography
- Botanical line art illustrations
- Micro-typography details matter
- Smooth transitions (300ms ease-out only)
- Thin-line botanical icons

## Customization

### Colors
Modify color tokens in `/app/globals.css` under the `:root` selector. All colors use CSS custom properties for easy theming.

### Typography
Fonts are imported in `/app/layout.tsx`. Change font families by updating the imports and weights.

### Products
Edit `/lib/products.ts` to add, modify, or remove products. The data structure includes:
- Product metadata (name, descriptor, region)
- Storytelling sections (introduction, origin, hands, process, gift angle)
- Associated imagery paths

### Images
- Product images: `/public/images/products/[product-id].jpg`
- Portrait images: `/public/images/portraits/[product-id].jpg`

## Performance Considerations

- Static generation of all product pages
- Image optimization with Next.js Image component
- CSS-based design tokens for fast theming
- Minimal JavaScript — mostly server components
- Metadata generation for SEO

## Deployment

The app is ready to deploy to Vercel:
```bash
npm install
npm run build
npm run start
```

Or connect your GitHub repository to Vercel for automatic deployments.

---

**Design Direction by**: Swiss Aesthetic + Indian Warmth  
**Built with**: Next.js 16, Tailwind CSS, TypeScript  
**Fonts**: Cormorant Garamond + DM Sans
