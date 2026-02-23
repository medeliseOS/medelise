# 🧬 Reguli Stricte — icons-medelise/md-medical/

> CREIERUL folderului. Consultă ÎNTÂI acest fișier înainte de orice operațiune.

## Scop
Conține exclusiv **iconițe medicale/health** folosite în componentele Medelise legate de servicii medicale, specialități și simboluri de sănătate.

**Format unic permis:** `.webp` | ⛔ Alte formate INTERZISE

## Nomenclatură Obligatorie
**Pattern:** `md-ico-{descriptor}.webp` — kebab-case, max 3 cuvinte

## Registru de Rutanări

| Fișier | Rol | Componentă |
|---|---|---|
| `md-ico-stethoscope.webp` | Iconiță medic generalist | `ServiceCard`, `AboutSection` |
| `md-ico-ambulance.webp` | Iconiță urgențe / servicii mobile | `EmergencyBanner` |
| `md-ico-heart.webp` | Iconiță sănătate cardio | `HealthMetrics`, `DashboardWidget` |
| `md-ico-atom.webp` | Iconiță cercetare / laborator | `QualitySection` |
| `md-ico-adn.webp` | Iconiță ADN / genetică | `HeroSection`, `SciencePanel` |

## Reguli de Actualizare
1. Verifică în registru dacă iconița există deja
2. Convertește în `.webp` (calitate 90%, lossless)
3. Pattern: `md-ico-{descriptor}.webp`
4. Adaugă în registru cu maparea completă
5. Commit: `asset(icons/medical): add md-ico-{descriptor}`
