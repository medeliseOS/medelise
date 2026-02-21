---
description: Identifică date hardcoded în componente — texte, ID-uri, URL-uri care ar trebui externalizate
---

# 📦 Audit Hardcoded vs API

Rol: **Backend Integration Architect** — Demonstrează dacă platforma este o machetă statică sau un software dinamic.

## Pași de Execuție

### Pasul 1: Scanare string-uri hardcoded în JSX
// turbo
```bash
grep -rn "const.*=.*\[" apps/web/src/features/ apps/web/src/components/ --include="*.tsx" --include="*.ts" | grep -v "node_modules" | grep -v ".next" | head -50
```

### Pasul 2: Scanare URL-uri de imagine hardcoded
// turbo
```bash
grep -rn 'src="/' apps/web/src/ --include="*.tsx" | grep -v "node_modules" | head -30
```

### Pasul 3: Verificare existență rute API
// turbo
```bash
find apps/web/src/app -name "route.ts" -o -name "route.tsx" 2>/dev/null
```

### Pasul 4: Verificare fișiere de date statice
// turbo
```bash
find apps/web/src -name "*.ts" -path "*/data/*" -o -name "*.ts" -path "*/config/*" -o -name "*.ts" -path "*/constants/*" 2>/dev/null
```

### Pasul 5: Clasificare

Generează „Lista neagră" cu:

| Element | Fișier | Linie | Tip | Pregătit pt API? |
|---|---|---|---|---|
| Lista de joburi | `jobData.ts` | L1-50 | Array static | ❌ Necesită `/api/jobs` |
| Texte hero | `HeroSection.tsx` | L12 | String inline | ❌ Necesită CMS |
| URL imagine | `ServiceCard.tsx` | L8 | Path hardcoded | ⚠️ Acceptabil dacă din `public/` |

### Pasul 6: Recomandări

1. Creează un `src/services/` layer cu funcții `async` care simulează fetch-ul
2. Mută toate obiectele `const data = [...]` în fișiere de serviciu
3. Adaugă tipuri TypeScript pentru contractele de date (interfețe)
4. Documentează fiecare endpoint necesar în `MASTER_ARCHITECTURE.md`

**Criteriu de succes:** Fiecare sursă de date are un serviciu corespunzător, gata de conectare la backend real.
