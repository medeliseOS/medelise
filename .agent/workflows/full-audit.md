---
description: Audit complet al întregului proiect — rulează toate workflow-urile de audit și generează raport centralizat cu scoruri per categorie
---

# 🏥 Full Audit — MEDELISE Project Health Report

Rol: **Lead QA Architect** — Execută toate auditurile din ecosistemul `.agent/workflows/` și produce un raport unificat cu scoruri per categorie.

> **IMPORTANT:** Acest workflow combină cele 10 audituri individuale într-o singură execuție completă. Fiecare secțiune corespunde unui workflow existent și produce un scor. La final se calculează **Project Health Score** global.

// turbo-all

---

## Faza 1: Zero Bloat — Template Junk Detection

> Ref: `/detect-template-junk`

### 1.1 Scanare importuri neutilizate
```bash
cd /home/osx/Desktop/03_Dev/MEDVITA\ HEALTH\ SOLUTIONS\ 3.0/medelise/apps/web && npx --yes knip --include=unlisted,unresolved,exports,types 2>&1 | head -100
```

### 1.2 Verificare dependențe package.json
```bash
cd /home/osx/Desktop/03_Dev/MEDVITA\ HEALTH\ SOLUTIONS\ 3.0/medelise/apps/web && npx --yes depcheck --ignores="@types/*,eslint*,prettier*,typescript,tailwindcss,@tailwindcss/*" 2>&1
```

### 1.3 Detectare clase CSS nefolosite
Scanează manual `globals.css` și `<style jsx>` din componente. Pentru fiecare clasă definită:
1. Rulează `grep -rn "clasa-suspectă" apps/web/src/` pentru a verifica referențierea
2. Dacă nu apare în niciun `className=`, marchează ca **Dead CSS**

### 1.4 Verdict Bloat
Completează:

| Metric | Valoare | Status |
|---|---|---|
| Importuri neutilizate | ❓ | ✅ / ❌ |
| Dependențe neutilizate | ❓ | ✅ / ❌ |
| Clase CSS moarte | ❓ | ✅ / ❌ |

```
Scor Bloat = (Metrici curate / Total metrici) × 100
```

---

## Faza 2: DRY — Cod Duplicat

> Ref: `/audit-dry`

### 2.1 Rulează jscpd
```bash
cd /home/osx/Desktop/03_Dev/MEDVITA\ HEALTH\ SOLUTIONS\ 3.0/medelise && npx --yes jscpd apps/web/src --ignore "**/node_modules/**,**/.next/**" --min-lines 10 --min-tokens 50 --reporters console 2>&1
```

### 2.2 Analiză manuală
Compară structural componentele din `src/features/*/components/` — identifică blocuri JSX + CSS identice (>15 linii) și fragmente `<style jsx>` repetitive.

### 2.3 Verdict DRY
```
Componentiality Score = 1 - (Linii duplicate / Linii totale) × 100
```

| Scor | Verdict |
|---|---|
| 90-100% | ✅ Excelent |
| 70-89% | ⚠️ Necesită extracții |
| <70% | 🔴 Technical Debt masiv |

---

## Faza 3: Hardcoded Data

> Ref: `/audit-hardcoded`

### 3.1 Scanare array-uri/obiecte hardcoded
```bash
grep -rn "const.*=.*\[" /home/osx/Desktop/03_Dev/MEDVITA\ HEALTH\ SOLUTIONS\ 3.0/medelise/apps/web/src/features/ /home/osx/Desktop/03_Dev/MEDVITA\ HEALTH\ SOLUTIONS\ 3.0/medelise/apps/web/src/components/ --include="*.tsx" --include="*.ts" | grep -v "node_modules" | grep -v ".next" | head -50
```

### 3.2 Scanare URL-uri de imagine hardcoded
```bash
grep -rn 'src="/' /home/osx/Desktop/03_Dev/MEDVITA\ HEALTH\ SOLUTIONS\ 3.0/medelise/apps/web/src/ --include="*.tsx" | grep -v "node_modules" | head -30
```

### 3.3 Verificare existență rute API
```bash
find /home/osx/Desktop/03_Dev/MEDVITA\ HEALTH\ SOLUTIONS\ 3.0/medelise/apps/web/src/app -name "route.ts" -o -name "route.tsx" 2>/dev/null
```

### 3.4 Verificare fișiere de date statice
```bash
find /home/osx/Desktop/03_Dev/MEDVITA\ HEALTH\ SOLUTIONS\ 3.0/medelise/apps/web/src -name "*.ts" -path "*/data/*" -o -name "*.ts" -path "*/config/*" -o -name "*.ts" -path "*/constants/*" 2>/dev/null
```

### 3.5 Verdict Hardcoded
Generează „Lista neagră" cu elementi hardcoded și clasifică pregătirea pentru API:

| Element | Fișier | Tip | Pregătit pt API? |
|---|---|---|---|
| ... | ... | ... | ✅ / ❌ |

---

## Faza 4: Ghost Check — Zero „Medvita"

> Ref: `/ghost-check-medvita`

### 4.1 Căutare case-insensitive în cod
```bash
grep -rni "medvita" /home/osx/Desktop/03_Dev/MEDVITA\ HEALTH\ SOLUTIONS\ 3.0/medelise/apps/ /home/osx/Desktop/03_Dev/MEDVITA\ HEALTH\ SOLUTIONS\ 3.0/medelise/packages/ --include="*.tsx" --include="*.ts" --include="*.css" --include="*.json" --include="*.md" | grep -v "node_modules" | grep -v ".next" | grep -v "MASTER_ARCHITECTURE"
```

### 4.2 Căutare în asset-uri (alt, meta, title)
```bash
grep -rni "medvita" /home/osx/Desktop/03_Dev/MEDVITA\ HEALTH\ SOLUTIONS\ 3.0/medelise/apps/web/src/ --include="*.tsx" | grep -E "(alt=|title=|content=|meta|description)" | head -30
```

### 4.3 Căutare în numele de fișiere
```bash
find /home/osx/Desktop/03_Dev/MEDVITA\ HEALTH\ SOLUTIONS\ 3.0/medelise/apps/ /home/osx/Desktop/03_Dev/MEDVITA\ HEALTH\ SOLUTIONS\ 3.0/medelise/packages/ -iname "*medvita*" -not -path "*/node_modules/*" -not -path "*/.next/*"
```

### 4.4 Verdict Ghost
| Metric | Valoare |
|---|---|
| Apariții „Medvita" în cod | ❓ |
| Apariții în meta/alt | ❓ |
| Fișiere cu „Medvita" în nume | ❓ |

**Target: Zero apariții** (excepție: `MASTER_ARCHITECTURE.md`).

---

## Faza 5: Design System — Consistență UI

> Ref: `/audit-design-system`

### 5.1 Detectare butoane native
```bash
grep -rn '<button' /home/osx/Desktop/03_Dev/MEDVITA\ HEALTH\ SOLUTIONS\ 3.0/medelise/apps/web/src/ --include="*.tsx" | grep -v "node_modules" | grep -v "Button.tsx" | grep -v "// " | head -30
```

### 5.2 Detectare inputuri native
```bash
grep -rn '<input' /home/osx/Desktop/03_Dev/MEDVITA\ HEALTH\ SOLUTIONS\ 3.0/medelise/apps/web/src/ --include="*.tsx" | grep -v "node_modules" | grep -v "Input.tsx" | head -30
```

### 5.3 Detectare stiluri inline
```bash
grep -rn 'style={{' /home/osx/Desktop/03_Dev/MEDVITA\ HEALTH\ SOLUTIONS\ 3.0/medelise/apps/web/src/ --include="*.tsx" | grep -v "node_modules" | head -30
```

### 5.4 Detectare culori hardcoded (nu CSS variables)
```bash
grep -rn '#[0-9A-Fa-f]\{6\}' /home/osx/Desktop/03_Dev/MEDVITA\ HEALTH\ SOLUTIONS\ 3.0/medelise/apps/web/src/ --include="*.tsx" --include="*.css" | grep -v "node_modules" | grep -v "globals.css" | grep -v ".next" | head -30
```

### 5.5 Verdict Design System
```
Scor Modularitate = (Utilizări componente centralizate / Total utilizări) × 100
```

| Scor | Verdict |
|---|---|
| 95-100% | ✅ Design System profesional |
| 80-94% | ⚠️ Acceptabil, necesită curățare |
| <80% | 🔴 Inconsistență vizuală gravă |

---

## Faza 6: Securitate

> Ref: `/audit-security`

### 6.1 Detectare secrete expuse
```bash
grep -rn "API_KEY\|SECRET\|TOKEN\|PASSWORD\|PRIVATE_KEY\|api_key\|secret\|token\|password" /home/osx/Desktop/03_Dev/MEDVITA\ HEALTH\ SOLUTIONS\ 3.0/medelise/apps/web/src/ --include="*.tsx" --include="*.ts" --include="*.env" | grep -v "node_modules" | grep -v ".env.example" | head -20
```

### 6.2 Detectare .env accesibil
```bash
find /home/osx/Desktop/03_Dev/MEDVITA\ HEALTH\ SOLUTIONS\ 3.0/medelise -name ".env" -not -path "*/node_modules/*" -not -path "*/.next/*" 2>/dev/null
```

Verifică dacă `.env` este în `.gitignore`.

### 6.3 Detectare dangerouslySetInnerHTML
```bash
grep -rn "dangerouslySetInnerHTML" /home/osx/Desktop/03_Dev/MEDVITA\ HEALTH\ SOLUTIONS\ 3.0/medelise/apps/web/src/ --include="*.tsx" --include="*.ts" | grep -v "node_modules"
```

### 6.4 Detectare eval() sau Function()
```bash
grep -rn "eval(\|new Function(" /home/osx/Desktop/03_Dev/MEDVITA\ HEALTH\ SOLUTIONS\ 3.0/medelise/apps/web/src/ --include="*.tsx" --include="*.ts" | grep -v "node_modules"
```

### 6.5 Verificare CORS și headers
```bash
grep -rn "Access-Control\|cors\|CORS" /home/osx/Desktop/03_Dev/MEDVITA\ HEALTH\ SOLUTIONS\ 3.0/medelise/apps/web/ --include="*.ts" --include="*.tsx" --include="*.mjs" | grep -v "node_modules" | head -10
```

### 6.6 Verdict Securitate
| Risc | Severitate | Locație | Status |
|---|---|---|---|
| Secrete expuse | 🔴 Critical | ❓ | ✅ / ❌ |
| XSS (innerHTML) | 🔴 Critical | ❓ | ✅ / ❌ |
| eval/Function | 🔴 Critical | ❓ | ✅ / ❌ |
| Validare Zod | 🟡 Medium | ❓ | ✅ / ❌ |

---

## Faza 7: Navigation — SPA Health

> Ref: `/audit-navigation`

### 7.1 Detectare `<a>` nativ intern
```bash
grep -rn '<a ' /home/osx/Desktop/03_Dev/MEDVITA\ HEALTH\ SOLUTIONS\ 3.0/medelise/apps/web/src/ --include="*.tsx" | grep -v "node_modules" | grep -v "// " | grep -v "Link" | head -30
```

### 7.2 Detectare `<a>` cu href intern
```bash
grep -rn '<a.*href="/' /home/osx/Desktop/03_Dev/MEDVITA\ HEALTH\ SOLUTIONS\ 3.0/medelise/apps/web/src/ --include="*.tsx" | grep -v "node_modules" | head -20
```

### 7.3 Link-uri externe fără target/rel
```bash
grep -rn '<a.*href="http' /home/osx/Desktop/03_Dev/MEDVITA\ HEALTH\ SOLUTIONS\ 3.0/medelise/apps/web/src/ --include="*.tsx" | grep -v 'target=' | grep -v "node_modules" | head -20
```

### 7.4 Verificare rute existente vs referințe
```bash
find /home/osx/Desktop/03_Dev/MEDVITA\ HEALTH\ SOLUTIONS\ 3.0/medelise/apps/web/src/app -name "page.tsx" | sed 's|.*/apps/web/src/app||;s|/page.tsx||;s|^$|/|' | sort
```

### 7.5 Verdict Navigation
| Metric | Valoare | Status |
|---|---|---|
| `<a>` cu href intern | ❓ | ✅ / ❌ |
| Link-uri externe fără atribute | ❓ | ✅ / ❌ |
| Rute inexistente referite | ❓ | ✅ / ❌ |

**Target: Zero `<a>` nativ intern. Toate link-urile externe cu `target="_blank" rel="noopener noreferrer"`.**

---

## Faza 8: Images & Assets — Performance

> Ref: `/audit-images`

### 8.1 Detectare `<img>` nativ
```bash
grep -rn '<img ' /home/osx/Desktop/03_Dev/MEDVITA\ HEALTH\ SOLUTIONS\ 3.0/medelise/apps/web/src/ --include="*.tsx" | grep -v "node_modules" | grep -v "// " | head -20
```

### 8.2 `<Image>` fără alt sau dimensiuni
```bash
grep -rn '<Image' /home/osx/Desktop/03_Dev/MEDVITA\ HEALTH\ SOLUTIONS\ 3.0/medelise/apps/web/src/ --include="*.tsx" | grep -v 'alt=' | grep -v "node_modules" | head -20
```

```bash
grep -rn '<Image' /home/osx/Desktop/03_Dev/MEDVITA\ HEALTH\ SOLUTIONS\ 3.0/medelise/apps/web/src/ --include="*.tsx" | grep -v 'width=\|fill' | grep -v "node_modules" | head -20
```

### 8.3 Imagini supradimensionate (>500KB)
```bash
find /home/osx/Desktop/03_Dev/MEDVITA\ HEALTH\ SOLUTIONS\ 3.0/medelise/apps/web/public -type f \( -name "*.png" -o -name "*.jpg" -o -name "*.jpeg" \) -size +500k 2>/dev/null | head -20
```

### 8.4 Format modern check
```bash
echo "=== PNG ===" && find /home/osx/Desktop/03_Dev/MEDVITA\ HEALTH\ SOLUTIONS\ 3.0/medelise/apps/web/public -name "*.png" 2>/dev/null | wc -l && echo "=== JPG ===" && find /home/osx/Desktop/03_Dev/MEDVITA\ HEALTH\ SOLUTIONS\ 3.0/medelise/apps/web/public -name "*.jpg" -o -name "*.jpeg" 2>/dev/null | wc -l && echo "=== WebP ===" && find /home/osx/Desktop/03_Dev/MEDVITA\ HEALTH\ SOLUTIONS\ 3.0/medelise/apps/web/public -name "*.webp" 2>/dev/null | wc -l && echo "=== SVG ===" && find /home/osx/Desktop/03_Dev/MEDVITA\ HEALTH\ SOLUTIONS\ 3.0/medelise/apps/web/public -name "*.svg" 2>/dev/null | wc -l
```

### 8.5 Hero cu priority
```bash
grep -rn 'priority' /home/osx/Desktop/03_Dev/MEDVITA\ HEALTH\ SOLUTIONS\ 3.0/medelise/apps/web/src/ --include="*.tsx" | grep "Image" | head -10
```

### 8.6 Verdict Images
| Metric | Ideal | Actual | Status |
|---|---|---|---|
| `<img>` native | 0 | ❓ | ✅ / ❌ |
| `<Image>` fără alt | 0 | ❓ | ✅ / ❌ |
| Fișiere >500KB | 0 | ❓ | ✅ / ❌ |
| Format modern >80% | Da | ❓ | ✅ / ❌ |
| Hero cu `priority` | Da | ❓ | ✅ / ❌ |

---

## Faza 9: Responsive — Hard-Pixel Destroyer

> Ref: `/audit-responsive`

### 9.1 Lățimi fixe mari (>500px)
```bash
grep -rn 'width:.*[0-9]\{3,\}px' /home/osx/Desktop/03_Dev/MEDVITA\ HEALTH\ SOLUTIONS\ 3.0/medelise/apps/web/src/ --include="*.tsx" --include="*.css" | grep -v "node_modules" | grep -v "max-width" | grep -v "min-width" | head -30
```

### 9.2 Margin/padding fixe mari
```bash
grep -rn 'margin.*[0-9]\{3,\}px\|padding.*[0-9]\{3,\}px' /home/osx/Desktop/03_Dev/MEDVITA\ HEALTH\ SOLUTIONS\ 3.0/medelise/apps/web/src/ --include="*.tsx" --include="*.css" | grep -v "node_modules" | grep -v "max-width" | head -30
```

### 9.3 Left/right fixe
```bash
grep -rn 'left:.*[0-9]\{3,\}px\|right:.*[0-9]\{3,\}px' /home/osx/Desktop/03_Dev/MEDVITA\ HEALTH\ SOLUTIONS\ 3.0/medelise/apps/web/src/ --include="*.tsx" --include="*.css" | grep -v "node_modules" | head -20
```

### 9.4 Overflow check
```bash
grep -rn 'overflow:\s*hidden\|overflow:\s*visible\|overflow-x' /home/osx/Desktop/03_Dev/MEDVITA\ HEALTH\ SOLUTIONS\ 3.0/medelise/apps/web/src/ --include="*.tsx" --include="*.css" | grep -v "node_modules" | head -20
```

### 9.5 Verdict Responsive
| Fișier | Proprietate | Valoare | Impact pe 375px | Status |
|---|---|---|---|---|
| ❓ | ❓ | ❓ | ❓ | ✅ / ❌ |

**Target: Zero proprietăți fixe >500px fără media query.**

---

## Faza 10: Form Logic — B2B vs PF

> Ref: `/audit-form-logic`

### 10.1 Identificare formulare cu switch PF/B2B
```bash
grep -rn "B2B\|persoana.*fizica\|firma\|CUI\|companie\|company\|tip.*utilizator\|user.*type\|account.*type" /home/osx/Desktop/03_Dev/MEDVITA\ HEALTH\ SOLUTIONS\ 3.0/medelise/apps/web/src/ --include="*.tsx" --include="*.ts" -i | grep -v "node_modules" | head -30
```

### 10.2 Verificare manuală
Pentru fiecare formular găsit, analizează:
1. Există handler `onChange`/`onSwitch` la schimbarea tipului?
2. Se face `reset()` sau `setState(initialState)` la comutare?
3. Câmpurile B2B sunt condiționate de tipul selectat?

### 10.3 Verdict Forms
| Scenariu | Comportament actual | Status |
|---|---|---|
| Comutare PF→B2B→PF | ❓ | ✅ / ❌ |
| Submit fără CUI pe B2B | ❓ | ✅ / ❌ |
| Validare Zod completă | ❓ | ✅ / ❌ |

---

## Faza 11: Full-Width Layout Compliance

> Ref: `/full-width-layout`

### 11.1 Detectare max-width pe containere
```bash
grep -rn 'max-width' /home/osx/Desktop/03_Dev/MEDVITA\ HEALTH\ SOLUTIONS\ 3.0/medelise/apps/web/src/ --include="*.tsx" --include="*.css" | grep -v "node_modules" | grep -v "media" | head -20
```

### 11.2 Detectare margin: 0 auto
```bash
grep -rn 'margin.*0.*auto\|margin:.*auto' /home/osx/Desktop/03_Dev/MEDVITA\ HEALTH\ SOLUTIONS\ 3.0/medelise/apps/web/src/ --include="*.tsx" --include="*.css" | grep -v "node_modules" | head -20
```

### 11.3 Verificare utilizare CSS variables de padding
```bash
grep -rn 'space-section-px' /home/osx/Desktop/03_Dev/MEDVITA\ HEALTH\ SOLUTIONS\ 3.0/medelise/apps/web/src/ --include="*.tsx" --include="*.css" | grep -v "node_modules" | head -20
```

### 11.4 Verdict Layout
| Metric | Valoare | Status |
|---|---|---|
| Containere cu max-width | ❓ | ✅ / ❌ |
| `margin: 0 auto` | ❓ | ✅ / ❌ |
| Secțiuni cu `--space-section-px` | ❓ | ✅ / ❌ |

**Target: Zero max-width pe containere principale. Toate secțiunile fluid cu CSS variables.**

---

## 📊 Raport Final — Project Health Score

### Dashboard Scoruri

| # | Categorie | Scor | Status | Ref Workflow |
|---|---|---|---|---|
| 1 | Zero Bloat (Template Junk) | ❓% | ✅⚠️🔴 | `/detect-template-junk` |
| 2 | DRY (Cod Duplicat) | ❓% | ✅⚠️🔴 | `/audit-dry` |
| 3 | Hardcoded Data | ❓% | ✅⚠️🔴 | `/audit-hardcoded` |
| 4 | Ghost Check (Zero Medvita) | ❓% | ✅⚠️🔴 | `/ghost-check-medvita` |
| 5 | Design System | ❓% | ✅⚠️🔴 | `/audit-design-system` |
| 6 | Securitate | ❓% | ✅⚠️🔴 | `/audit-security` |
| 7 | Navigation (SPA Health) | ❓% | ✅⚠️🔴 | `/audit-navigation` |
| 8 | Images & Performance | ❓% | ✅⚠️🔴 | `/audit-images` |
| 9 | Responsive | ❓% | ✅⚠️🔴 | `/audit-responsive` |
| 10 | Form Logic (B2B/PF) | ❓% | ✅⚠️🔴 | `/audit-form-logic` |
| 11 | Full-Width Layout | ❓% | ✅⚠️🔴 | `/full-width-layout` |

### Calcul Project Health Score

```
Project Health Score = Media aritmetică a celor 11 scoruri
```

| Scor Global | Verdict |
|---|---|
| 90-100% | ✅ Production-Ready — calitate profesională |
| 75-89% | ⚠️ Acceptabil — necesită îmbunătățiri targetate |
| 60-74% | 🟡 Sub Standard — multiple domenii de lucru |
| <60% | 🔴 Critical — proiectul necesită refactorizare majoră |

### Top 5 Priorități (completează după audit)

| Prioritate | Categorie | Problemă principală | Impact | Efort estimat |
|---|---|---|---|---|
| P1 | ❓ | ❓ | 🔴 | ❓ |
| P2 | ❓ | ❓ | 🔴 | ❓ |
| P3 | ❓ | ❓ | 🟡 | ❓ |
| P4 | ❓ | ❓ | 🟡 | ❓ |
| P5 | ❓ | ❓ | 🟢 | ❓ |

### Recomandări Generale

După completarea auditului, documentează:
1. **Quick Wins** — probleme rezolvabile în <30 min (ex: ștergere importuri, înlocuire `<a>` cu `<Link>`)
2. **Medium Effort** — necesită 1-3 ore (ex: extragere componente duplicate, adăugare validări Zod)
3. **Major Refactoring** — necesită planificare (ex: restructurare servicii de date, redesign responsiv)

---

**Criteriu de succes global:** Project Health Score ≥ 85%. Zero probleme de severitate 🔴 Critical.
