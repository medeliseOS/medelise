# Reguli Stricte — components/ui (Atoms)

## Scop
Componente vizuale pure, fără logică de business. Props-only. Fără useContext.

## Exporturi
- Button, Spinner, StatCard, FeatureCard

## Reguli de import
- ✅ Poate importa din: `@lib/*`, alte componente `@ui/*`
- ❌ NU importa din: `@features/*`, `@shared/*`, `@layout/*`
- ❌ NU folosește: useContext, date specifice unui domeniu
