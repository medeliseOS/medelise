---
description: Detectează urme ale numelui vechi "Medvita" rămas în codebase după rebranding
---

# 👻 Ghost Check — Medvita Remains

Rol: **QA Rebranding Specialist** — Caută neglijențe în procesul de tranziție Medvita → Medelise.

## Pași de Execuție

### Pasul 1: Căutare Case-Insensitive în tot codul sursă
// turbo
```bash
grep -rni "medvita" apps/ packages/ --include="*.tsx" --include="*.ts" --include="*.css" --include="*.json" --include="*.md" | grep -v "node_modules" | grep -v ".next"
```

### Pasul 2: Căutare în asset-uri (alt text, meta tags)
// turbo
```bash
grep -rni "medvita" apps/web/src/ --include="*.tsx" | grep -E "(alt=|title=|content=|meta|description)" | head -30
```

### Pasul 3: Căutare în numele de fișiere
// turbo
```bash
find apps/ packages/ -iname "*medvita*" -not -path "*/node_modules/*" -not -path "*/.next/*"
```

### Pasul 4: Căutare în comentarii
// turbo
```bash
grep -rn "medvita" apps/web/src/ --include="*.tsx" --include="*.ts" | grep -E "(//|/\*|\*)" | head -20
```

### Pasul 5: Output

| Fișier | Linie | Context | Tip | Acțiune |
|---|---|---|---|---|
| `Footer.tsx` | L45 | `alt="Medvita Logo"` | Alt text | Înlocuiește cu "Medelise" |
| `layout.tsx` | L12 | `// Old Medvita theme` | Comentariu | Șterge comentariul |
| `brand-medvita.png` | — | Numele fișierului | Asset | Redenumește |

### Pasul 6: Aplicare automată (cu confirmare)
Dacă utilizatorul confirmă, aplică find-and-replace:
```bash
# ATENȚIE: Rulează doar după confirmare!
find apps/web/src -type f \( -name "*.tsx" -o -name "*.ts" \) -exec sed -i '' 's/Medvita/Medelise/g' {} +
```

**Criteriu de succes:** Zero apariții "Medvita" în codebase (excepție: `MASTER_ARCHITECTURE.md` ca referință istorică).
