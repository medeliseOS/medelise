# Reguli Stricte — features/iv-therapy

## Public API (Exporturi autorizate)
- `components/index.ts` exportă: IVDripCatalog, IVDripProductPage, ServiceCard, + 12 componente de conținut produs

## Active dedicate (/public)
- `/public/images-medelise/md-iv-drip/`
- `/public/icons-medelise/md-medical/`

## Reguli de import
- ✅ Poate importa din: `@ui/*`, `@shared/*`, `@lib/*`
- ✅ Poate importa (prin barrel): `@features/homepage/components` (TestimonialsSection)
- ✅ Poate importa (prin barrel): `@features/contact/components` (ContactFormSection — Deshidratare)
- ❌ NU importa din: `@features/auth`, `@features/cariera`

## Proprietar
- Echipa Frontend — Servicii Medicale
