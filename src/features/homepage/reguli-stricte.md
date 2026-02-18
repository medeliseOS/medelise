# Reguli Stricte — features/homepage

## Public API (Exporturi autorizate)
- `components/index.ts` exportă: HeroSection, JourneySection, MissionStatsSection, NewsletterSection, PatientPortalSection, QualitySection, ServiciiSection, TestimonialsSection, WhyChooseUsSection

## Active dedicate (/public)
- `/public/images-medelise/md-hero/`
- `/public/images-medelise/md-quality/`
- `/public/images-medelise/md-portal/`
- `/public/images-medelise/md-watch/`
- `/public/images-medelise/md-testimonials/`

## Reguli de import
- ✅ Poate importa din: `@ui/*`, `@shared/*`, `@lib/*`
- ❌ NU importa din: `@features/auth`, `@features/cariera`, `@features/iv-therapy`
- ⚠️ TestimonialsSection este importat de `@features/iv-therapy` prin barrel

## Proprietar
- Echipa Frontend — Homepage
