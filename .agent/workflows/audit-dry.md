---
description: Audit de Reutilizare — detectează cod duplicat între fișiere și calculează Componentiality Score
---

# 🔁 Audit DRY (Don't Repeat Yourself)

Rol: **Senior Software Architect** — Identifică Technical Debt din cod duplicat.

## Pași de Execuție

### Pasul 1: Rulează jscpd (Copy-Paste Detector)
// turbo
```bash
npx --yes jscpd apps/web/src --ignore "**/node_modules/**,**/.next/**" --min-lines 10 --min-tokens 50 --reporters console 2>&1
```

### Pasul 2: Analiză manuală a paginilor principale
Compară structural următoarele perechi de componente (verifică Hero Sections, FAQ Sections, CTA Sections):
1. Deschide fiecare pagină principală din `src/features/*/components/*Content.tsx`
2. Identifică blocuri JSX + CSS identice sau cvasi-identice (>15 linii)
3. Notează fragmentele de `<style jsx>` care se repetă

### Pasul 3: Calculează Componentiality Score

```
Score = 1 - (Linii duplicate / Linii totale analizate) × 100
```

| Scor | Verdict |
|---|---|
| 90-100% | ✅ Excelent — cod modular |
| 70-89% | ⚠️ Acceptabil — câteva extracții necesare |
| <70% | 🔴 Technical Debt masiv |

### Pasul 4: Output

Generează tabel:

| Fișier A | Linii A | Fișier B | Linii B | % Identitate | Recomandare |
|---|---|---|---|---|---|
| `CarieraContent.tsx` | L50-67 | `ContactContent.tsx` | L19-35 | ~90% | Extrage `PageHeroSection` |

### Pasul 5: Refactorizare (dacă e cazul)
Pentru fiecare duplicat identificat:
1. Creează componentă reutilizabilă în `src/shared/ui/` sau `src/components/layout/`
2. Înlocuiește blocurile duplicate cu componenta nouă
3. Verifică build-ul: `pnpm build`

**Criteriu de succes:** Componentiality Score ≥ 90%.
