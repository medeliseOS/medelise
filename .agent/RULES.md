# MEDELISE — Reguli Stricte pentru Agenții AI

> **Versiune:** 1.0 · **Data:** 2026-02-21
> **Scop:** Orice agent AI care lucrează în acest proiect TREBUIE să respecte aceste reguli înainte de a scrie, modifica sau șterge cod.

---

## 🔴 Reguli Inviolabile

### R1. Zero Bloat Policy
- **NU** lăsa clase CSS nefolosite în cod.
- **NU** lăsa importuri de biblioteci/module care nu sunt apelate.
- **NU** crea fișiere temporare (`.tmp`, `.bak`, `.log`, `.mmd`) în repo.
- După fiecare task, rulează workflow-ul `/detect-template-junk`.

### R2. DRY (Don't Repeat Yourself)
- Dacă un bloc de cod (≥15 linii) apare identic sau cvasi-identic în ≥2 fișiere, **TREBUIE** extras într-o componentă/utilitar reutilizabil.
- Fiecare componentă de UI (Button, Input, Card) trebuie să existe într-o singură sursă de adevăr (`src/components/ui/` sau `src/shared/ui/`).
- Rulează periodic `/audit-dry`.

### R3. No Hardcoded Data în Componente
- Textele, ID-urile de produse, URL-urile de imagine și datele de content **NU** se scriu direct în JSX.
- Se folosesc fișiere de date (`data/`, `config/`, `constants/`) sau servicii (`services/`).
- Pregătește-te mereu pentru înlocuirea cu API real: structurează datele ca și cum ar veni dintr-un `fetch()`.
- Validare: `/audit-hardcoded`.

### R4. Rebranding Complet — Zero "Medvita"
- Numele vechi "Medvita" **NU** trebuie să apară nicăieri în cod, comentarii, alt-text, meta-tags, constante sau variabile.
- Excepție: doar în `MASTER_ARCHITECTURE.md` ca referință istorică.
- Verificare: `/ghost-check-medvita`.

### R5. Design System Unificat
- Toate butoanele folosesc `<Button />` din `src/components/ui/Button.tsx`.
- Toate input-urile folosesc componente centralizate, nu `<input>` nativ cu stiluri ad-hoc.
- Culorile vin **exclusiv** din CSS variables din `globals.css`.
- Verificare: `/audit-design-system`.

### R6. Securitate
- **NICIODATĂ** chei API sau secrete în frontend.
- **NICIODATĂ** `dangerouslySetInnerHTML` fără sanitizare explicită.
- Toate input-urile de formular trebuie validate atât vizual cât și logic (Zod / schema validation).
- Verificare: `/audit-security`.

### R7. Next.js Best Practices
- Navigare internă **exclusiv** cu `<Link>` din `next/link`, nu `<a href>`.
- Imagini **exclusiv** cu `<Image>` din `next/image` cu `width`, `height` și `alt` obligatorii.
- Componente client (`'use client'`) doar când e strict necesar.
- Verificare: `/audit-navigation` și `/audit-images`.

### R8. Responsive-First
- **INTERZIS** `width` sau `margin`/`padding` cu valori fixe mari (>600px) fără media query.
- Folosește `clamp()`, `%`, `vw/vh`, `rem` în loc de pixeli ficși.
- Testează mental fiecare element la 375px lățime.
- Verificare: `/audit-responsive`.

### R9. Consistența Formularelor (B2B / PF)
- Comutarea între tipurile de utilizator (Persoană Fizică / B2B) trebuie să cureț complet starea formularului.
- Câmpurile specifice B2B (CUI, Adresă Sediu) nu trebuie să contamineze datele PF.
- Verificare: `/audit-form-logic`.

### R10. Organizare Cod
- Fiecarea pagină/feature are propria structuă în `src/features/[feature]/`.
- Componentele shared stau în `src/shared/` sau `src/components/ui/`.
- Serviciile de date stau în `src/services/`.
- Nu crea foldere goale sau cu un singur fișier dacă nu e necesar.

---

## 📋 Checklist Pre-Commit (obligatoriu)

Înainte de a declara un task finalizat, agentul TREBUIE să verifice:

- [ ] Niciun import neutilizat
- [ ] Nicio clasă CSS moartă
- [ ] Niciun string hardcoded în JSX (text, URL, ID-uri)
- [ ] Zero referințe "Medvita" (exceptând docs)
- [ ] Toate butoanele/inputurile sunt componente centralizate
- [ ] Navigare cu `<Link>`, imagini cu `<Image>`
- [ ] Fără valori fixe de pixeli fără fallback responsive
- [ ] Validare logică pe formulare, nu doar vizuală
- [ ] Zero secrete expuse în cod frontend

---

## 🔗 Workflows Disponibile

| Slug | Scop |
|---|---|
| `/detect-template-junk` | Clase CSS moarte + importuri neutilizate |
| `/audit-dry` | Cod duplicat între fișiere (DRY Score) |
| `/audit-hardcoded` | Date hardcoded vs. servicii/API |
| `/ghost-check-medvita` | Resturi "Medvita" în codebase |
| `/audit-design-system` | Consistența componentelor UI |
| `/audit-form-logic` | Logică B2B vs. PF în formulare |
| `/audit-security` | Vulnerabilități XSS, secrete expuse |
| `/audit-navigation` | `<a>` vs `<Link>`, rute defecte |
| `/audit-responsive` | Pixeli ficși, layout-uri care se sparg |
| `/audit-images` | `<img>` vs `<Image>`, optimizare assets |
