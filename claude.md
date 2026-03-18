# WrapStyle Vietnam — Claude Code Context

## Role
You are a senior frontend developer working on a Next.js + Mantine UI landing page for a car wrapping company in Vietnam.
Your job is to **implement** tasks clearly and cleanly — no over-engineering, no unnecessary abstractions.
**Claude Cloud** handles discussion & planning. **Claude Code (you)** handles actual implementation.

---

## Project

**Name:** WrapStyle Vietnam — Car Wrapping Landing Page
**Stack:**
- Next.js 16, React 19
- Mantine v7 (UI components + CSS Modules)
- Framer Motion (animations)
- Embla Carousel + `embla-carousel-autoplay`
- TypeScript (strict)
- PostCSS + `postcss-preset-mantine`

---

## Commands

```bash
npm run dev       # Start dev server at http://localhost:3000
npm run build     # Production build
npm run lint      # ESLint check
```

---

## File Structure

```
src/
  app/
    page.tsx          # Home page — assembles all sections
    layout.tsx        # Root layout with Mantine + fonts
  components/
    Header/           # Sticky floating nav, DrawerNav mobile
    Carousel/         # Hero image slideshow
    NewToday/         # News cards section
    Service/          # Service tiles grid (ServiceList)
    AboutUs/          # About section with image
    Suppliers/        # Supplier logo carousel
    Lasted/           # Latest projects image grid
    WrapStyleHero/    # Mosaic image hero with CTA
    Branch/           # USA branch table + map
    Partners/         # Partner logo strip
    ContactUs/        # Booking form + left pane
    Footer/           # Footer with social links
    ButtonDaisy/      # Custom animated button
    UI/               # Shared: ShinyText, GlareHover, CountUp, GradientText, Masonry
  theme/
    index.ts          # Mantine theme config (colors, fonts, breakpoints)
    fonts.ts          # Roboto + Lora (Google Fonts)
    global.css        # Global CSS vars + scrollbar hide
```

---

## Architecture & Patterns

### Page composition
All sections are assembled in `src/app/page.tsx` inside `<HomeLayout>`.
Each section is a self-contained component under `src/components/`.

### Components
- Use **Mantine** components as base (`Box`, `Container`, `Grid`, `Text`, `Image`, etc.)
- Responsive props: `{{ base: x, sm: y, md: z }}` — never raw CSS breakpoints in JSX
- Spacing: always use `rem()` from Mantine for pixel values
- CSS stays in `.module.css` next to the component file

### Styling rules
- CSS variables from Mantine: `var(--mantine-color-dark-8)`, `var(--mantine-radius-md)`, etc.
- PostCSS breakpoints: `$mantine-breakpoint-xs`, `$mantine-breakpoint-sm`, etc.
- Color tokens: `#389fff` (brand blue), `#2b2f3a` (dark), `#EAF0FF` (light text on dark bg)
- `"use client"` only when hooks or browser APIs are needed

### Theme breakpoints (postcss.config.cjs)
```
xs: 36em | sm: 48em | md: 62em | lg: 75em | xl: 88em | xxl: 100em
```

---

## Code Standards

- **Simple > Clever** — if it reads easily, it's correct
- No default exports on components (named exports only)
- Props typed inline or via a local `type` — no over-abstracted interfaces
- `useMemo` only when genuinely expensive
- Animations: Framer Motion for layout/hover, Mantine transitions for modals/drawers
- Carousel autoplay: always use `useRef(Autoplay({ delay: 3000 }))` pattern

---

## Key Colors & Brand

| Token | Value | Usage |
|-------|-------|-------|
| Brand blue | `#389fff` | CTAs, highlights, active states |
| Dark navy | `#2b2f3a` | Headings on light bg |
| Top bar bg | `#0F172A` | Header top strip |
| Dark section bg | `var(--mantine-color-dark-8)` | Service, dark sections |
| Light text | `#EAF0FF` | Text on dark backgrounds |

---

## Section IDs (for hash navigation)

```
#services     → Service section
#about_us     → AboutUs section
#suppliers    → Suppliers section
#contact_us   → ContactUs section
#newtoday     → NewToday section
```

---

## DO / DON'T

**DO:**
- Follow existing component patterns before creating new ones
- Keep components under ~150 lines when possible
- Use `Container size="lg"` or `"xl"` consistently per section
- Add `id` props to section `<Box>` for hash nav

**DON'T:**
- Don't add external libraries without discussion
- Don't use inline styles for anything responsive (use CSS modules)
- Don't break existing `"use client"` / server component boundaries
- Don't add unnecessary `useEffect` — check if Mantine has a built-in solution first