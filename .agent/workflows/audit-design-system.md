---
description: Verifică unificarea componentelor UI — butoane, inputuri, carduri trebuie să folosească componente centralizate
---

# 🎨 Audit Design System

Rol: **Design System Architect** — Verifică consistența vizuală și modularitatea arhitecturală.

## Pași de Execuție

### Pasul 1: Detectare butoane native (nu componente)
// turbo
```bash
grep -rn '<button' apps/web/src/ --include="*.tsx" | grep -v "node_modules" | grep -v "Button.tsx" | grep -v "// " | head -30
```

### Pasul 2: Detectare inputuri native
// turbo
```bash
grep -rn '<input' apps/web/src/ --include="*.tsx" | grep -v "node_modules" | grep -v "Input.tsx" | head -30
```

### Pasul 3: Detectare stiluri inline pe elemente interactive
// turbo
```bash
grep -rn 'style={{' apps/web/src/ --include="*.tsx" | grep -v "node_modules" | head -30
```

### Pasul 4: Verificare culori hardcoded (nu CSS variables)
// turbo
```bash
grep -rn '#[0-9A-Fa-f]\{6\}' apps/web/src/ --include="*.tsx" --include="*.css" | grep -v "node_modules" | grep -v "globals.css" | grep -v ".next" | head -30
```

### Pasul 5: Inventar componente centralizate

Verifică existența și utilizarea următoarelor componente din `src/components/ui/` sau `src/shared/ui/`:

| Componentă | Fișier | Utilizată în | Status |
|---|---|---|---|
| `<Button />` | `Button.tsx` | — | ✅ / ❌ |
| `<Input />` | `Input.tsx` | — | ✅ / ❌ |
| `<Card />` | `Card.tsx` | — | ✅ / ❌ |
| `<Modal />` | `Modal.tsx` | — | ✅ / ❌ |
| `<Spinner />` | `Spinner.tsx` | — | ✅ / ❌ |

### Pasul 6: Verdict

```
Scor Modularitate = (Utilizări componente centralizate / Total utilizări element) × 100
```

| Scor | Verdict |
|---|---|
| 95-100% | ✅ Design System profesional |
| 80-94% | ⚠️ Acceptabil, dar necesită curățare |
| <80% | 🔴 Inconsistență vizuală gravă |

**Criteriu de succes:** Scor Modularitate ≥ 95%. Zero `<button>` nativ, zero culori hardcoded în afara `globals.css`.
