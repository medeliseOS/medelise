---
description: Detectează valori fixe de pixeli care sparg layout-ul pe mobil (Hard-Pixel Destroyer)
---

# 📱 Audit Responsive (Hard-Pixel Destroyer)

Rol: **Mobile-First UI Engineer** — Caută elemente care ies din ecran pe rezoluții mici.

## Pași de Execuție

### Pasul 1: Detectare lățimi fixe mari (>500px)
// turbo
```bash
grep -rn 'width:.*[0-9]\{3,\}px' apps/web/src/ --include="*.tsx" --include="*.css" | grep -v "node_modules" | grep -v "max-width" | grep -v "min-width" | head -30
```

### Pasul 2: Detectare margin/padding fixe mari
// turbo
```bash
grep -rn 'margin.*[0-9]\{3,\}px\|padding.*[0-9]\{3,\}px' apps/web/src/ --include="*.tsx" --include="*.css" | grep -v "node_modules" | grep -v "max-width" | head -30
```

### Pasul 3: Detectare left/right fixe
// turbo
```bash
grep -rn 'left:.*[0-9]\{3,\}px\|right:.*[0-9]\{3,\}px' apps/web/src/ --include="*.tsx" --include="*.css" | grep -v "node_modules" | head -20
```

### Pasul 4: Verificare media queries pe secțiunile critice

Pentru fiecare componentă/secțiune majoră, verifică existența breakpoint-urilor:

| Componentă | Desktop (>1024) | Tablet (768-1024) | Mobile (<480) | Status |
|---|---|---|---|---|
| HeroSection | ❓ | ❓ | ❓ | ✅ / ❌ |
| Navbar | ❓ | ❓ | ❓ | ✅ / ❌ |
| Footer | ❓ | ❓ | ❓ | ✅ / ❌ |
| ServiceCard | ❓ | ❓ | ❓ | ✅ / ❌ |
| Forms | ❓ | ❓ | ❓ | ✅ / ❌ |

### Pasul 5: Detectare overflow potențial
// turbo
```bash
grep -rn 'overflow:\s*hidden\|overflow:\s*visible\|overflow-x' apps/web/src/ --include="*.tsx" --include="*.css" | grep -v "node_modules" | head -20
```

### Pasul 6: Output — Lista de pericol

| Fișier | Linie | Proprietate | Valoare | Impact pe 375px | Fix |
|---|---|---|---|---|---|
| `Hero.tsx` | L45 | `width` | `1200px` | Overflow horizontal | Folosește `100%` sau `clamp()` |
| `Card.css` | L12 | `padding-left` | `200px` | Card comprimat | Folosește `clamp()` sau `%` |

### Pasul 7: Recomandări universale
- Înlocuiește `width: Xpx` cu `max-width: Xpx; width: 100%`
- Înlocuiește `padding: Xpx` cu `padding: clamp(min, preferred, max)` sau CSS variables
- Folosește `var(--space-section-px)` conform design system-ul existent

**Criteriu de succes:** Zero proprietăți fixe >500px fără media query corespunzătoare. Toate secțiunile au breakpoints la 1024px, 768px și 480px.
