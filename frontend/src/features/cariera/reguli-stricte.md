# Reguli Stricte — features/cariera

## Public API (Exporturi autorizate)
- `components/index.ts` exportă: ApplicationFormContent, ApplicationJourney, CarieraContent, DocumentChecker, JobDetailContent, JobSidebarCard
- `data/jobData.ts` exportă: JOBS, JOB_SLUGS, getDaysRemaining, JobDetail

## Active dedicate (/public)
- `/public/icons-medelise/md-system/` (icoane UI partajate)
- `/public/brand-medelise/` (logo-uri pe sidebar card)

## Reguli de import
- ✅ Poate importa din: `@ui/*`, `@shared/*`, `@lib/*`, `@/components/icons/*`
- ❌ NU importa din: `@features/auth`, `@features/iv-therapy`, `@features/homepage`

## Proprietar
- Echipa Frontend — HR / Recrutare
