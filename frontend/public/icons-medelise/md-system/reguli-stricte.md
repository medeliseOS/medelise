# ⚙️ Reguli Stricte — icons-medelise/md-system/

> CREIERUL folderului. Consultă ÎNTÂI acest fișier înainte de orice operațiune.

## Scop
Conține exclusiv **iconițe de sistem/UI**: navigare, acțiuni, forme decorative și elemente de interfață.

**Format unic permis:** `.webp` | ⛔ Alte formate INTERZISE

## Nomenclatură Obligatorie
**Pattern:** `md-ico-{descriptor}.webp` — kebab-case, max 3 cuvinte

## Registru de Rutanări

| Fișier | Rol | Componentă |
|---|---|---|
| `md-ico-arrow-right.webp` | Săgeată dreapta | `Button`, `Navigation` |
| `md-ico-arrow-left.webp` | Săgeată stânga | `Carousel`, `BackButton` |
| `md-ico-arrow-right-png.webp` | Săgeată dreapta (varianta PNG) | `SliderArrows` |
| `md-ico-arrow-up-right.webp` | Săgeată diagonală | `ExternalLink` |
| `md-ico-chevron-down.webp` | Chevron jos | `Dropdown`, `Accordion` |
| `md-ico-chevron-down-alt.webp` | Chevron jos (varianta) | `Select` |
| `md-ico-close.webp` | Închide / X | `Modal`, `Dialog` |
| `md-ico-close-alt.webp` | Închide (varianta) | `MobileMenu` |
| `md-ico-menu.webp` | Hamburger menu | `MobileNav` |
| `md-ico-menu-alt.webp` | Menu (varianta) | `Header` |
| `md-ico-search.webp` | Căutare | `SearchBar` |
| `md-ico-check.webp` | Bifă simplă | `Checkbox`, `SuccessState` |
| `md-ico-check-alt.webp` | Bifă (varianta) | `FormValidation` |
| `md-ico-check-circle.webp` | Bifă în cerc | `StepComplete` |
| `md-ico-add.webp` | Plus / Adaugă | `AddButton` |
| `md-ico-remove.webp` | Minus / Elimină | `RemoveButton` |
| `md-ico-more.webp` | More / Trei puncte | `MoreMenu` |
| `md-ico-calendar.webp` | Calendar | `DatePicker` |
| `md-ico-timer.webp` | Timer | `CountdownWidget` |
| `md-ico-timer-alt.webp` | Timer (varianta) | `SessionTimer` |
| `md-ico-chart.webp` | Grafic | `DashboardChart` |
| `md-ico-chart-alt.webp` | Grafic (varianta) | `AnalyticsPanel` |
| `md-ico-star.webp` | Stea rating | `RatingStars` |
| `md-ico-copy.webp` | Copiază | `CopyButton` |
| `md-ico-flag.webp` | Steag | `FlaggedItems` |
| `md-ico-suitcase.webp` | Geantă / Job | `CareersCard` |
| `md-ico-money-dollar.webp` | Dolar | `PricingCard` |
| `md-ico-location-emp.webp` | Locație | `EmployeeCard` |
| `md-ico-box.webp` | Cutie / Pachet | `PackageCard` |
| `md-ico-calendar-emp.webp` | Calendar angajat | `EmployeeSchedule` |
| `md-ico-ellipse-sm-01.webp` | Cerc decorativ mic 1 | `Decorations` |
| `md-ico-ellipse-sm-02.webp` | Cerc decorativ mic 2 | `Decorations` |
| `md-ico-ellipse-md-01.webp` | Cerc decorativ mediu 1 | `Decorations` |
| `md-ico-ellipse-md-02.webp` | Cerc decorativ mediu 2 | `Decorations` |
| `md-ico-ellipse-lg.webp` | Cerc decorativ mare | `Decorations` |
| `md-ico-ellipse-xl.webp` | Cerc decorativ extra-large | `Decorations` |
| `md-ico-vector-01.webp` | Element vectorial 1 | `Decorations` |
| `md-ico-vector-02.webp` | Element vectorial 2 | `Decorations` |
| `md-ico-vector-03.webp` | Element vectorial 3 | `Decorations` |
| `md-ico-vector-04.webp` | Element vectorial 4 | `Decorations` |

## Reguli de Actualizare
1. Verifică în registru dacă iconița există deja
2. Convertește în `.webp` (calitate 90%, lossless)
3. Pattern: `md-ico-{descriptor}.webp`
4. Adaugă în registru
5. Commit: `asset(icons/system): add md-ico-{descriptor}`
