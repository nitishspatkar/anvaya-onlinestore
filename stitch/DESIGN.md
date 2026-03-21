# Design System Specification: Editorial Heritage

## 1. Overview & Creative North Star: "The Digital Curator"
This design system is built on the intersection of two worlds: the rigorous, grid-based discipline of Swiss Modernism and the soulful, tactile narrative of Indian heritage. We reject the "template" look of modern e-commerce. Instead, we embrace the **Digital Curator** ethos—where every product is treated as an artifact and every screen as a gallery wall.

### The Aesthetic Tension
To achieve this, we balance high-contrast typography scales with intentional asymmetry. We break the rigid grid by allowing high-quality imagery to "bleed" or overlap containers, creating a sense of organic movement. Breathing room (whitespace) is not empty; it is a structural element used to denote luxury and focus.

---

## 2. Colors & Surface Philosophy
Our palette moves away from digital vibrancy toward earthen permanence. We use tonal depth rather than structural lines to define the interface.

### The "No-Line" Rule
**Explicit Instruction:** Do not use 1px solid borders to section content. Boundaries must be defined solely through background color shifts. For example, a `surface-container-low` section sitting on a `surface` background creates a clear but soft distinction that feels architectural rather than "web-like."

### Surface Hierarchy & Nesting
Treat the UI as a series of physical layers—like stacked sheets of fine handmade paper.
- **Base Layer:** `surface` (#fbf9f8)
- **Primary Content Wells:** `surface-container-low` (#f6f3f2)
- **Interactive Floating Elements:** `surface-container-lowest` (#ffffff)
- **Deep Insets:** `surface-container-high` (#eae8e7)

### Signature Textures & Gradients
To avoid a "flat" digital feel, use subtle radial gradients on main CTAs or Hero sections. Transitioning from `primary` (#173124) to `primary-container` (#2d4739) provides a velvet-like depth. For a "Glassmorphism" effect on floating navigation or mobile overlays, use `surface` at 80% opacity with a `20px` backdrop-blur.

---

## 3. Typography: The Dialogue of Tradition
The typography is a conversation between the hand-crafted (Serif) and the engineered (Sans).

*   **Headings (Noto Serif):** Use for `display` and `headline` tiers. This font carries the "story." It should be used with generous letter-spacing in uppercase for labels, or tight tracking for large display headers to create an editorial impact.
*   **Body (Inter):** Use for `title`, `body`, and `label` tiers. Inter represents Swiss precision. It provides the clarity and trustworthiness required for ingredient lists and shipping details.

**Hierarchy Tip:** Pair a `display-lg` serif header with a `label-md` sans-serif sub-header in `secondary` (#944925) for a sophisticated, high-end editorial look.

---

## 4. Elevation & Depth
In this system, depth is felt, not seen. We move away from heavy material shadows toward **Tonal Layering**.

*   **The Layering Principle:** Place a `surface-container-lowest` card on a `surface-container-low` section. The slight shift in "warmth" creates a natural lift.
*   **Ambient Shadows:** If a floating effect is mandatory (e.g., a "Quick Buy" drawer), use a shadow with a `40px` blur at 6% opacity. Use a tinted shadow color derived from `on-surface` (#1b1c1c) rather than pure black.
*   **The "Ghost Border" Fallback:** If accessibility requires a container boundary, use the `outline-variant` token (#c2c8c2) at **15% opacity**. This creates a "whisper" of a line that disappears into the background.

---

## 5. Components & Interface Elements

### Buttons
*   **Primary:** `primary` background with `on-primary` text. Use `DEFAULT` (0.25rem) roundedness for a sharp, tailored look. No shadows.
*   **Secondary:** `surface` background with a `Ghost Border` and `primary` text.
*   **Tertiary:** Text-only in `primary` or `secondary`, using `label-md` with 0.1em letter spacing.

### Cards & Product Grids
*   **Forbidden:** Divider lines and 100% opaque borders.
*   **The Approach:** Use vertical white space (Scale `16` or `20`) to separate products. Use `surface-variant` backgrounds for product photography to create a "frame" effect without using lines.

### Input Fields
*   **Style:** Minimalist underlines using `outline-variant` at 40% opacity. Upon focus, the line transitions to `primary` (#173124) at 1px thickness. Helper text should always use `body-sm` in `on-surface-variant`.

### Signature Component: The "Provenance Chip"
Use `tertiary-container` (#533e1f) with `on-tertiary-container` (#c7aa82) text. These small, low-contrast chips should be used to highlight ingredient origins (e.g., "Sourced from Kerala"), reinforcing the brand's authenticity.

---

## 6. Do’s and Don’ts

### Do
*   **Do** use asymmetrical layouts. Place an image off-center and let the `display-md` text overlap the edge of the photo.
*   **Do** use the `24` (8.5rem) spacing token for top-level section margins to emphasize exclusivity.
*   **Do** ensure all photography uses a warm, natural color grade to match the `terracotta` and `sand` tones.

### Don’t
*   **Don’t** use pure black (#000000) for text. Always use `on-surface` (#1b1c1c) to maintain a soft, organic feel.
*   **Don’t** use the `full` roundedness (pills) for buttons. It feels too "tech-startup." Stick to `sm` or `DEFAULT` for a more architectural, premium feel.
*   **Don’t** use standard "Hover" states like brightening a color. Instead, use a subtle "Lift" (shift in surface tone) or a slight scale-up of the image within its frame.

---

## 7. Motion & Interaction
Animations should mimic the slow, deliberate movement of a curator. 
*   **Page Transitions:** Use "Staggered Fades"—headings appear first, followed by imagery, then body text.
*   **Hover States:** When hovering over a product card, the background should shift from `surface` to `surface-container-low` over a `400ms` duration.