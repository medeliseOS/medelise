---
description: Verifică utilizarea corectă a Link din next/link în loc de ancora nativă — SPA Health
---

# 🔗 Audit Navigation (SPA Health)

Rol: **Next.js Performance Expert** — Verifică dacă echipa folosește corect framework-ul.

## Pași de Execuție

### Pasul 1: Detectare `<a href>` nativ (în loc de `<Link>`)
// turbo
```bash
grep -rn '<a ' apps/web/src/ --include="*.tsx" | grep -v "node_modules" | grep -v "// " | grep -v "Link" | head -30
```

### Pasul 2: Detectare `<a>` cu href intern (cele mai problematice)
// turbo
```bash
grep -rn '<a.*href="/' apps/web/src/ --include="*.tsx" | grep -v "node_modules" | head -20
```

> **Impact:** Fiecare `<a href="/pagina">` forțează **full page reload**, anulând complet avantajul SPA și degradând experiența utilizatorului: se reîncarcă JS, CSS, se pierde state-ul aplicației.

### Pasul 3: Detectare Link-uri externe fără `target` și `rel`
// turbo
```bash
grep -rn '<a.*href="http' apps/web/src/ --include="*.tsx" | grep -v 'target=' | grep -v "node_modules" | head -20
```

Link-urile externe TREBUIE să aibă `target="_blank"` și `rel="noopener noreferrer"`.

### Pasul 4: Verificare rute inexistente (broken links)
1. Listează toate rutele definite în `src/app/`:
```bash
find apps/web/src/app -name "page.tsx" | sed 's|apps/web/src/app||;s|/page.tsx||;s|^$|/|'
```
2. Listează toate referințele `href="/"` din cod
3. Compară cele două liste

### Pasul 5: Output

| Fișier | Linie | Cod actual | Tip problemă | Fix |
|---|---|---|---|---|
| `Footer.tsx` | L25 | `<a href="/contact">` | Ancorã nativă | `<Link href="/contact">` |
| `Card.tsx` | L8 | `<a href="https://...">` | Fără target/rel | Adaugă atribute |
| `Nav.tsx` | L12 | `<Link href="/inexistent">` | Rută inexistentă | Verifică/Șterge |

**Criteriu de succes:** Zero `<a>` cu href-uri interne. Toate link-urile externe au `target="_blank" rel="noopener noreferrer"`. Zero rute stricate.
