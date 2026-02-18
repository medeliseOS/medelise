# 📱 Reguli Stricte — icons-medelise/md-social/

> CREIERUL folderului. Consultă ÎNTÂI acest fișier înainte de orice operațiune.

## Scop
Conține exclusiv **iconițe social media și contact** folosite în footer, share buttons și pagina de contact.

**Format unic permis:** `.webp` | ⛔ Alte formate INTERZISE

## Nomenclatură Obligatorie
**Pattern:** `md-ico-{platform/descriptor}.webp`

## Registru de Rutanări

| Fișier | Rol | Componentă |
|---|---|---|
| `md-ico-social-01.webp` | Iconiță social generală 1 | `Footer`, `ShareButtons` |
| `md-ico-social-02.webp` | Iconiță social generală 2 | `Footer`, `ShareButtons` |
| `md-ico-facebook.webp` | Facebook | `Footer`, `SocialLinks` |
| `md-ico-twitter.webp` | Twitter/X | `Footer`, `SocialLinks` |

## Reguli de Actualizare
1. Verifică în registru dacă platforma există deja
2. Convertește în `.webp` (calitate 90%, lossless)
3. Pattern: `md-ico-{platform}.webp`
4. Adaugă în registru
5. Commit: `asset(icons/social): add md-ico-{platform}`
