---
description: Audit de securitate — chei API expuse, XSS, validări lipsă
---

# 🛡️ Audit Security

Rol: **Security Engineer** — Identifică vulnerabilități critice care pot compromite datele utilizatorilor.

## Pași de Execuție

### Pasul 1: Detectare secrete expuse în frontend
// turbo
```bash
grep -rn "API_KEY\|SECRET\|TOKEN\|PASSWORD\|PRIVATE_KEY\|api_key\|secret\|token\|password" apps/web/src/ --include="*.tsx" --include="*.ts" --include="*.env" | grep -v "node_modules" | grep -v ".env.example" | head -20
```

### Pasul 2: Detectare .env accesibil public
// turbo
```bash
find . -name ".env" -not -path "*/node_modules/*" -not -path "*/.next/*" 2>/dev/null
```

Verifică dacă `.env` este listat în `.gitignore`.

### Pasul 3: Detectare dangerouslySetInnerHTML
// turbo
```bash
grep -rn "dangerouslySetInnerHTML" apps/web/src/ --include="*.tsx" --include="*.ts" | grep -v "node_modules"
```

Dacă există, verifică:
- Se face sanitizare cu DOMPurify sau librărie similară? ❓
- Input-ul vine de la user sau din CMS? ❓

### Pasul 4: Detectare eval() sau Function()
// turbo
```bash
grep -rn "eval(\|new Function(" apps/web/src/ --include="*.tsx" --include="*.ts" | grep -v "node_modules"
```

### Pasul 5: Verificare validări de input

Pentru fiecare formular din aplicație:

| Formular | Client-side validation | Schema validation (Zod) | Server-side | Status |
|---|---|---|---|---|
| Login | ❓ | ❓ | ❓ | ✅ / ❌ |
| Register | ❓ | ❓ | ❓ | ✅ / ❌ |
| Contact | ❓ | ❓ | ❓ | ✅ / ❌ |
| Aplicare job | ❓ | ❓ | ❓ | ✅ / ❌ |

### Pasul 6: Verificare CORS și headers
// turbo
```bash
grep -rn "Access-Control\|cors\|CORS" apps/web/ --include="*.ts" --include="*.tsx" --include="*.mjs" | grep -v "node_modules" | head -10
```

### Pasul 7: Raport de riscuri

| Risc | Severitate | Locație | Recomandare |
|---|---|---|---|
| Secret expus | 🔴 Critical | `config.ts:L5` | Mută în `.env.local` |
| XSS via innerHTML | 🔴 Critical | `Page.tsx:L30` | Adaugă DOMPurify |
| Fără validare Zod | 🟡 Medium | `Form.tsx` | Adaugă schema Zod |

**Criteriu de succes:** Zero secrete expuse, zero `dangerouslySetInnerHTML` nesanitizat, validare Zod pe toate formularele.
