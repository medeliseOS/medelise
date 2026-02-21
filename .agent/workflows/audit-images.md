---
description: Verifică utilizarea next/image, optimizarea asset-urilor și scorurile de performanță
---

# 🖼️ Audit Images & Assets

Rol: **Performance Engineer** — Evaluează viteza de încărcare și respectarea best-practices Next.js.

## Pași de Execuție

### Pasul 1: Detectare `<img>` nativ (în loc de `<Image>` din next/image)
// turbo
```bash
grep -rn '<img ' apps/web/src/ --include="*.tsx" | grep -v "node_modules" | grep -v "// " | head -20
```

> **Impact:** `<img>` nativ descarcă fișierul complet (posbil 5MB), fără lazy loading, fără WebP/AVIF automat, fără redimensionare server-side.

### Pasul 2: Verificare `<Image>` fără dimensiuni sau alt
// turbo
```bash
grep -rn '<Image' apps/web/src/ --include="*.tsx" | grep -v 'alt=' | grep -v "node_modules" | head -20
```

// turbo
```bash
grep -rn '<Image' apps/web/src/ --include="*.tsx" | grep -v 'width=\|fill' | grep -v "node_modules" | head -20
```

### Pasul 3: Detectare imagini supradimensionate în public/
// turbo
```bash
find apps/web/public -type f \( -name "*.png" -o -name "*.jpg" -o -name "*.jpeg" \) -size +500k 2>/dev/null | head -20
```

### Pasul 4: Verificare format modern (WebP/AVIF vs PNG/JPG)
// turbo
```bash
echo "=== PNG ===" && find apps/web/public -name "*.png" 2>/dev/null | wc -l && echo "=== JPG ===" && find apps/web/public -name "*.jpg" -o -name "*.jpeg" 2>/dev/null | wc -l && echo "=== WebP ===" && find apps/web/public -name "*.webp" 2>/dev/null | wc -l && echo "=== AVIF ===" && find apps/web/public -name "*.avif" 2>/dev/null | wc -l && echo "=== SVG ===" && find apps/web/public -name "*.svg" 2>/dev/null | wc -l
```

### Pasul 5: Verificare `priority` pe LCP (Largest Contentful Paint)
Imaginea hero (prima vizibilă) TREBUIE să aibă prop-ul `priority`:
```bash
grep -rn 'priority' apps/web/src/ --include="*.tsx" | grep "Image" | head -10
```

### Pasul 6: Scor de optimizare

| Metric | Ideal | Actual | Status |
|---|---|---|---|
| `<img>` native | 0 | ❓ | ✅ / ❌ |
| `<Image>` fără alt | 0 | ❓ | ✅ / ❌ |
| Fișiere >500KB | 0 | ❓ | ✅ / ❌ |
| Format modern (WebP/AVIF) | >80% | ❓ | ✅ / ❌ |
| Hero cu `priority` | Da | ❓ | ✅ / ❌ |

```
Scor = (Metrici corecte / Total metrici) × 100
```

| Scor | Verdict |
|---|---|
| 90-100% | ✅ Optimizat profesional |
| 70-89% | ⚠️ Necesar optimizări |
| <70% | 🔴 Performanță compromisă |

**Criteriu de succes:** Scor ≥ 90%. Zero `<img>` nativ. Toate imaginile >500KB convertite la WebP. Hero cu `priority`.
