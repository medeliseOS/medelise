# 🦸 Reguli Stricte — images-medelise/md-hero/

> CREIERUL folderului. Consultă ÎNTÂI acest fișier.

## Scop
Imagini **hero section** — background-uri, fotografii medicale, avatare.

**Format unic permis:** `.webp` | ⛔ Alte formate INTERZISE
**Pattern:** `md-img-hero-{descriptor}.webp` sau `md-img-avatar-{nn}.webp`

## Registru de Rutanări

| Fișier | Rol | Componentă |
|---|---|---|
| `md-img-hero-bg.webp` | Background hero principal | `HeroSection` |
| `md-img-hero-adn.webp` | Imagine ADN hero | `HeroSection` |
| `md-img-hero-medical-01.webp` | Fotografie medic 1 | `HeroSection` |
| `md-img-hero-medical-02.webp` | Fotografie medic 2 | `HeroSection` |
| `md-img-avatar-01.webp` | Avatar testimonial 1 | `HeroStats` |
| `md-img-avatar-02.webp` | Avatar testimonial 2 | `HeroStats` |
| `md-img-avatar-03.webp` | Avatar testimonial 3 | `HeroStats` |

## Reguli de Actualizare
1. Convertește în `.webp` (calitate 82%, max 1920px lățime)
2. Pattern: `md-img-hero-{descriptor}.webp`
3. Adaugă în registru → Commit: `asset(images/hero): add md-img-hero-{descriptor}`
