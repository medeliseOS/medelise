---
description: Detectează clase CSS moarte și importuri de module neutilizate (Anti-Bloat / Template Junk)
---

# 🔍 Detect Template Junk

Rol: **Performance Engineer** — Scanează codul pentru reziduuri de template necurățat.

## Pași de Execuție

### Pasul 1: Scanare importuri neutilizate
// turbo
```bash
cd apps/web && npx --yes knip --include=unlisted,unresolved,exports,types 2>&1 | head -100
```

### Pasul 2: Detectare clase CSS nefolosite
Scanează manual fișierele `globals.css` și orice `<style jsx>` din componente. Pentru fiecare clasă definită:
1. Rulează `grep -rn "clasa-suspectă" apps/web/src/` pentru a verifica dacă este referențiată în JSX.
2. Dacă nu apare în niciun `className=`, marchează ca **Dead CSS**.

### Pasul 3: Verificare dependențe package.json
// turbo
```bash
cd apps/web && npx --yes depcheck --ignores="@types/*,eslint*,prettier*,typescript" 2>&1
```

### Pasul 4: Rezumat

Generează un tabel cu:

| Tip | Fișier | Linie | Element mort | Acțiune |
|---|---|---|---|---|
| CSS | `globals.css` | L42 | `.exemplu-nefolosit` | Șterge |
| Import | `Page.tsx` | L3 | `import { X } from 'y'` | Șterge |
| Dependență | `package.json` | — | `librărie-X` | `pnpm remove` |

**Criteriu de succes:** Zero clase moarte, zero importuri inutile, zero dependențe neutilizate.
