# Reguli Stricte — shared/

## Scop
Infrastructură partajată: constante, date de navigație, hook-uri globale, tipuri comune.

## Subdirectoare
- `constants/` — icons.ts, images.ts (registre de assets)
- `data/` — navigation.ts (date de navigație)
- `hooks/` — hook-uri globale viitoare
- `types/` — tipuri TypeScript partajate

## Reguli de import
- ✅ Poate importa din: `@lib/*`
- ❌ NU importa din: `@features/*`, `@ui/*`, `@layout/*`
