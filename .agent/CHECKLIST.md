# MEDELISE — Project Architecture Checklist

> **Last updated:** 2026-02-22  
> **Stack:** Next.js 16.1.6 · React 19.2.3 · Tailwind CSS v4 · styled-jsx · TypeScript  
> **Design System:** SpheraOS (globals.css)

---

## 1. Global Design System — `globals.css`

### 1.1 CSS Variables (`:root`)

| Token | Value / Formula | Status |
|---|---|---|
| `--color-primary` | `#213170` | ✅ |
| `--color-accent` | `#FE5D16` | ✅ |
| `--color-secondary` | `#BDE0FF` | ✅ |
| `--color-neutral-dark` | `#232123` | ✅ |
| `--color-success` | `#10B981` | ✅ |
| `--color-error` | `#E11D48` | ✅ |
| `--color-warning` | `#F59E0B` | ✅ |
| `--color-info` | `#0EA5E9` | ✅ |
| `--color-surface-light` | `#F8F9FA` | ✅ |
| `--color-surface-border` | `#E5E7EB` | ✅ |
| `--color-white` | `#FFFFFF` | ✅ |
| `--font-brand` | Michroma | ✅ |
| `--font-body` | Inter | ✅ |
| `--space-section-px` | clamp 16px→112px (375→1440) | ✅ **AUTHORITATIVE** |
| `--space-nav-x` | clamp 16px→32px (375→1440) | ✅ used by Navbar |

### 1.2 Utility Classes

| Class | Purpose | Status |
|---|---|---|
| `.section-padding` | Fluid horizontal padding via `--space-section-px` | ✅ |
| `.font-brand` / `.font-body` | Typography | ✅ |
| `.text-primary` / `.bg-primary` | Color | ✅ |
| `.text-accent` / `.bg-accent` | Color | ✅ |
| `.text-secondary` / `.bg-secondary` | Color | ✅ |
| `.text-neutral-dark` / `.bg-neutral-dark` | Color | ✅ |
| `.btn-cta` | Orange CTA button | ✅ |
| `.btn-primary` | Indigo button | ✅ |

### 1.3 Brand Rules (Inviolabile)

- [x] Orange (`#FE5D16`) → EXCLUSIV pentru CTA
- [x] Pe Indigo (`#213170`) → DOAR alb sau Baby Blue (`#BDE0FF`)
- [x] Michroma pt branding, Inter pt body

---

## 2. Layout Architecture

### 2.1 Root Layout — `src/app/layout.tsx`

| Item | Status |
|---|---|
| Google Fonts: Inter, Michroma, Montserrat, DM Sans | ✅ |
| CSS variables attached to `<body>` | ✅ |
| `<Navbar />` rendered before `{children}` | ✅ |
| `lang="ro"` attribute | ✅ |

### 2.2 Homepage — `src/app/page.tsx`

| Section | Component | `.section-padding` | Status |
|---|---|---|---|
| Hero | `<HeroSection />` | ✅ | ✅ |
| Mission Stats | `<MissionStatsSection />` | ✅ | ✅ |
| Why Choose Us | `<WhyChooseUsSection />` | ✅ | ✅ |

### 2.3 Sub-pages

| Route | File | Status |
|---|---|---|
| `/cariera` | `src/app/cariera/page.tsx` | 🔲 Empty shell |
| `/contact` | `src/app/contact/page.tsx` | 🔲 Empty shell |
| `/despre-noi` | `src/app/despre-noi/page.tsx` | 🔲 Empty shell |

---

## 3. Navbar System — `src/components/layout/`

| File | Breakpoint | Status |
|---|---|---|
| `DesktopNav.tsx` | ≥1024px, uses `--space-nav-x` | ✅ |
| `TabletNav.tsx` | 768–1023px | ✅ |
| `MobileNav.tsx` | <768px | ✅ |
| `Navbar.tsx` | Orchestrator | ✅ |
| `Logo.tsx` / `BookNowButton.tsx` / `SearchIcon.tsx` / `ChevronDown.tsx` / `MenuButton.tsx` / `ArrowCircleIcon.tsx` | Shared components | ✅ |

---

## 4. Section Components

### 4.1 HeroSection — `src/components/HeroSection.tsx`

- [x] Horizontal padding via `.section-padding`
- [x] Fluid `clamp()` typography (eyebrow, heading, subtitle)
- [x] Watch image hidden ≤1024px
- [x] CTA button (Indigo, hover darken)

### 4.2 MissionStatsSection — `src/components/MissionStatsSection.tsx`

- [x] Horizontal padding via `.section-padding`
- [x] 4 stat cards: row (desktop) → 2×2 grid (tablet) → stacked (mobile)
- [x] Uses `<StatCard />` reusable component

### 4.3 WhyChooseUsSection — `src/components/WhyChooseUsSection.tsx`

- [x] Horizontal padding via `.section-padding`
- [x] 6 feature cards: 3-col (desktop) → 2-col (tablet) → 1-col (mobile)
- [x] Uses `<FeatureCard />` reusable component

---

## 5. Reusable UI Components — `src/components/ui/`

| Component | Props | Status |
|---|---|---|
| `StatCard.tsx` | `label`, `value` | ✅ |
| `FeatureCard.tsx` | `title`, `description`, `elevated?` | ✅ |

---

## 6. Global Fluid Padding — Compliance

| Section | `.section-padding` | Local override | Compliant |
|---|---|---|---|
| HeroSection | ✅ | ❌ None | ✅ |
| MissionStatsSection | ✅ | ❌ None | ✅ |
| WhyChooseUsSection | ✅ | ❌ None | ✅ |
| Navbar | `--space-nav-x` (separate) | N/A | ✅ |

---

## 7. Assets — `public/`

| File | Used By | Status |
|---|---|---|
| `iwatch-hero.png` | HeroSection | ✅ |
| `iwatch.png` | WhyChooseUsSection | ✅ |
| `iwatch_ultra_medelise.png` | WhyChooseUsSection | ✅ |
| `icon.png` | Favicon | ✅ |
| `icons/` (7 files) | Nav icons | ✅ |

---

## 8. Dependencies

| Package | Version | Purpose | Status |
|---|---|---|---|
| `next` | 16.1.6 | Framework | ✅ |
| `react` / `react-dom` | 19.2.3 | UI | ✅ |
| `tailwindcss` | v4 | CSS utilities | ✅ |
| `eslint` + config | v9 | Linting | ✅ |
| `prettier` + plugin | 3.8.1 | Formatting | ✅ |

---

## 9. Pending — Future Work

### 🔴 Critical
- [ ] Sub-pages empty (`/cariera`, `/contact`, `/despre-noi`)

### 🟢 Future Sections
- [ ] Services / IV Drip Therapy (expand)
- [ ] Team / About
- [ ] Testimonials
- [ ] Contact form
- [ ] FAQ

---

## 10. Fluid Padding Formula

```
--space-section-px = clamp(16px, calc(16px + 96 × (100vw - 375px) / 1065), 112px)

  375px →  16px
  562px →  33px
  768px →  52px
 1024px →  74px
 1440px → 112px
```

> Apply via `className="... section-padding"` or use `var(--space-section-px)` directly.
