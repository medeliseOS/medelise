# 🏷️ Reguli Stricte — brand-medelise/

> CREIERUL folderului. Consultă ÎNTÂI acest fișier înainte de orice operațiune.

## Scop
Conține exclusiv **activele de brand Medelise**: logo-uri, wordmark-uri și variante de icon în toate scheme de culoare.

**Format unic permis:** `.webp` | ⛔ Alte formate INTERZISE

## Nomenclatură Obligatorie

| Segment | Regulă | Exemplu |
|---|---|---|
| Prefix brand | `md-` | `md-logo-...` |
| Tip activ | `logo-` / `wordmark` | `md-logo-full` |
| Varianta culoare | sufixul culorii | `md-logo-icon-indigo` |
| Extensie | `.webp` obligatoriu | `md-logo-full.webp` |

**Pattern:** `md-logo-{tip}-{varianta}.webp` sau `md-wordmark.webp`

## Registru de Rutanări

| Fișier | Rol | Componentă |
|---|---|---|
| `md-logo-full.webp` | Logo complet Medelise | `Header`, `Footer`, `LoginPage` |
| `md-wordmark.webp` | Wordmark text-only | `Footer`, `EmailTemplates` |
| `md-logo-os-vividorange.webp` | Logo OS varianta vivid orange | `Header` |
| `md-logo-icon-indigo.webp` | Icon logo — indigo | `Favicon`, `MobileNav` |
| `md-logo-icon-charcoal.webp` | Icon logo — charcoal | `DarkMode` |
| `md-logo-icon-babyblue.webp` | Icon logo — baby blue | `LightTheme` |
| `md-logo-icon-lightgrey.webp` | Icon logo — light grey | `DisabledState` |
| `md-logo-icon-vividorange.webp` | Icon logo — vivid orange | `AccentBranding` |
| `md-logo-icon-os-indigo.webp` | Icon OS — indigo | `AppIcon` |
| `md-logo-icon-os-white.webp` | Icon OS — white | `DarkBg` |

## Reguli de Actualizare
1. Verifică în registru dacă varianta există deja
2. Convertește în `.webp` (calitate 95%, lossless)
3. Respectă pattern: `md-logo-{tip}-{varianta}.webp`
4. Adaugă în registru cu maparea completă
5. Commit: `asset(brand): add/update md-logo-{varianta}`
