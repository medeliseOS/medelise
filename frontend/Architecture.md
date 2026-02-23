# 📐 Architecture.md — Mathematical Web Governance Protocol

**Proiect:** MEDELISE / MEDVITA HEALTH SOLUTIONS  
**Ecosistem:** SpheraOS / careOS  
**Stack:** Next.js 16 (App Router) · Tailwind CSS v4 · styled-jsx  
**Actualizat:** 12 Februarie 2026

---

## 1. Regula Zero — Fundația Matematică

> **Fiecare valoare vizuală din proiect derivă din `--base-unit: 4px`.**

```css
:root { --base-unit: 4px; }
```

- Sursa unică de adevăr: [globals.css](file:///Users/mi/Desktop/MEDVITA%20HEALTH%20SOLUTIONS%20WORK/medelise/src/app/globals.css)
- Orice `padding`, `margin`, `gap`, `width`, `height`, `border-radius` **= N × 4px**
- Valorile preferate sunt multipli de **8** — multipli de 4 doar pentru micro-ajustări

---

## 2. Culori

### Paletă

| Token | Hex | Rol |
|-------|-----|-----|
| `--color-primary` | `#213170` | Indigo — CTA, headings, navbar |
| `--color-primary-hover` | `#1A2659` | Hover pe primary |
| `--color-accent` | `#FE5D16` | Orange — highlights, eyebrow, accente |
| `--color-accent-hover` | `#E54D0F` | Hover pe accent |
| `--color-secondary` | `#BDE0FF` | Baby Blue — text pe fundal Indigo |
| `--color-surface` | `#F8F9FA` | Background global |
| `--color-surface-card` | `#f0f6ff` | Card backgrounds |
| `--color-surface-border` | `#E5E7EB` | Borders subtile |
| `--color-text` | `#232123` | Text principal |
| `--color-text-muted` | `#637083` | Text secundar |
| `--color-input-border` | `#97a1af` | Input borders |
| `--color-border-light` | `#CED2DA` | Borders decorative |
| `--color-white` | `#FFFFFF` | Alb |
| `--color-success/error/warning/info` | — | Stări semantice |

### Reguli

| # | Regulă |
|---|--------|
| **C1** | CTA principal = Indigo (`--color-primary`) cu text alb |
| **C2** | Orange (`--color-accent`) exclusiv pentru highlights, eyebrow, accente — **NU** CTA |
| **C3** | Pe fundal Indigo: **DOAR** alb sau Baby Blue (`--color-secondary`) |
| **C4** | Niciun hex/rgb hardcodat în componente — **DOAR** `var(--color-*)` |

---

## 3. Tipografie

### Familii de Font

| Token | Font | Rol |
|-------|------|-----|
| `--font-brand` | Michroma | Logo, wordmark — **niciodată** headings sau body |
| `--font-heading` | Montserrat | Toate titlurile (h1–h6) |
| `--font-body` | Inter | Text body, paragrafe |
| `--font-cta` | DM Sans | Text pe butoane |

### Fluid Typography (clamp)

Formula: `clamp(mobile, calc(mobile + Δ × (100vw − 375px) / 1065), desktop)`

| Token | Mobile → Desktop | Utilizare |
|-------|:-:|-----------|
| `--text-sm` | 14px (fix) | Labels |
| `--text-body` | 16px → 18px | Paragrafe |
| `--text-lg` | 18px → 20px | Body mare |
| `--text-xl` | 20px → 24px | H4 |
| `--text-2xl` | 24px → 32px | H3 |
| `--text-3xl` | 28px → 36px | H2 |
| `--text-4xl` | 32px → 64px | H1 / Hero |

### Reguli

| # | Regulă |
|---|--------|
| **T1** | Se referă **DOAR** aliasurile semantice (`--font-heading`, nu `--font-montserrat`) |
| **T2** | Se referă **DOAR** token-urile fluid (`--text-body`, `--text-3xl`) — niciun `clamp()` manual |
| **T3** | Line-height: `--lh-body: 1.6` (text), `--lh-heading: 1.2` (titluri) |
| **T4** | Measure: niciun text depășește `--max-prose: 70ch` |

### Clase de Tipografie

| Clasă | Model |
|-------|-------|
| `.heading-1` … `.heading-4` | `--font-heading` + `--text-4xl`→`--text-xl` + weight 700/600 |
| `.body-text`, `.body-lg`, `.body-sm` | `--font-body` + `--text-body`/`lg`/`sm` |
| `.eyebrow` | `--font-heading` + `--text-sm` + uppercase + orange |

---

## 4. Spacing (8pt Grid)

### Scala

| Token | px | Tip |
|-------|:--:|:---:|
| `--space-1` | 4 | micro |
| `--space-2` | 8 | **preferat** |
| `--space-3` | 12 | micro |
| `--space-4` | 16 | **preferat** |
| `--space-5` | 20 | micro |
| `--space-6` | 24 | **preferat** |
| `--space-7` | 28 | micro |
| `--space-8` | 32 | **preferat** |
| `--space-10` | 40 | **preferat** |
| `--space-12` | 48 | **preferat** |
| `--space-14` | 56 | micro |
| `--space-16` | 64 | **preferat** |
| `--space-20` | 80 | **preferat** |
| `--space-24` | 96 | **preferat** |
| `--space-28` | 112 | **preferat** |

### Border Radius

| Token | px |
|-------|:--:|
| `--radius-sm` | 4 |
| `--radius-main` | **8** ← golden radius |
| `--radius-lg` | 16 |
| `--radius-xl` | 20 |
| `--radius-2xl` | 24 |
| `--radius-full` | 500 |

### Shadows

| Token | Valoare |
|-------|---------|
| `--shadow-sm` | `0 1px 4px rgba(0,0,0,0.06)` |
| `--shadow-md` | `0 4px 16px rgba(0,0,0,0.08)` |
| `--shadow-lg` | `0 8px 32px rgba(0,0,0,0.12)` |

---

## 5. Layout

### Container

| Proprietate | Valoare |
|-------------|---------|
| Max-width | `--max-width: 1280px` |
| Centrare | `margin: 0 auto` |
| Gutter | `--gutter: clamp(16px → 32px)` |

### Regula Proximității (Fluid Section Spacing)

Toate valorile sunt fluid via `clamp()` — **zero breakpoint-uri**.

| Token | Mobile → Desktop | Când |
|-------|:-:|:--|
| `--space-section-py` | 48px → 96px | Distanță **între** secțiuni (MARE) |
| `--space-section-py-tight` | 32px → 48px | Distanță **între blocuri înrudite** (MEDIE) |
| `--space-section-px` | 16px → 112px | Padding lateral secțiuni full-width |
| `--space-nav-x` | 16px → 32px | Padding lateral navbar |
| `--space-2` … `--space-6` | 8–24px | Distanță **între elemente** din aceeași secțiune (MICĂ) |

### Componente Layout

| Componentă | Fișier | Scop |
|-----------|--------|------|
| `<Section />` | [Section.tsx](file:///Users/mi/Desktop/MEDVITA%20HEALTH%20SOLUTIONS%20WORK/medelise/src/components/layout/Section.tsx) | Vertical rhythm: `default`/`tight`/`none` |
| `<Container />` | [Container.tsx](file:///Users/mi/Desktop/MEDVITA%20HEALTH%20SOLUTIONS%20WORK/medelise/src/components/layout/Container.tsx) | Max-width + gutter + auto-center |

### Clase CSS echivalente

`.section-py` · `.section-py-tight` · `.section-padding` · `.container-main`

---

## 6. Butoane

| Clasă | Bg | Text | Font | Padding |
|-------|:--:|:----:|:----:|:-------:|
| `.btn-cta` | Indigo | alb | DM Sans | 12×24 |
| `.btn-primary` | Indigo | alb | Inter | 12×20 |
| `.btn-accent` | Orange | alb | Inter | 12×24 |

- Toate: `--radius-main` (8px) · `transition: all 0.2s ease-in-out`
- Hover CTA/Primary: `--color-primary-hover` · `--shadow-md`
- Hover Accent: `--color-accent-hover` · shadow portocaliu

---

## 7. Reguli Tehnice

| # | Regulă |
|---|--------|
| **TW1** | `@import "tailwindcss"` la începutul `globals.css` |
| **TW2** | `@theme inline { }` — variabilele din styled-jsx **trebuie** înregistrate aici (anti-tree-shake) |
| **TW3** | `@theme` primește doar valori statice — `calc()` rămâne doar în `:root` |
| **TW4** | `next/font` classes pe `<html>`, **nu** pe `<body>` |
| **TW5** | `box-sizing: border-box` global |
| **N1** | `<Image>` de Next.js (nu `<img>` nativ) |
| **N2** | `<Link>` de Next.js (nu `<a>`) pentru navigare internă |
| **H1** | `<main>` wrapping conținut · `<section>` per bloc · un singur `<h1>` per pagină |

---

## 8. Convenții de Cod

| # | Regulă |
|---|--------|
| **D1** | `globals.css` = singura sursă de adevăr |
| **D2** | Date navigare centralizate în `src/data/navigation.ts` |
| **D3** | Componente: styled-jsx pentru CSS scoped |
| **D4** | `lang="ro"` pe `<html>` |
