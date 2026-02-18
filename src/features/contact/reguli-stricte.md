# Reguli Stricte — features/contact

## Public API (Exporturi autorizate)
- `components/index.ts` exportă: ContactContent, ContactFormSection, ContactFaqSection

## Active dedicate (/public)
- `/public/icons-medelise/md-communication/`

## Reguli de import
- ✅ Poate importa din: `@ui/*`, `@shared/*`, `@lib/*`
- ❌ NU importa din: alte `@features/*`
- ⚠️ ContactFormSection este importat de `@features/iv-therapy` prin barrel

## Proprietar
- Echipa Frontend — Suport Client
