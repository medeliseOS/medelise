# Componente Neutilizate — IV Therapy

Aceste componente fac parte din **arhitectura veche** (template monolitic `IVDripProductPage`) 
și din paginile de produs care în prezent returnează `null` în routing.

Sunt păstrate aici pentru referință și posibilă migrare la noua arhitectură modulară.

## Fișiere mutate aici:
- `IVDripProductPage.tsx` — template monolitic vechi
- `IVWhySection.tsx` — secțiune "De ce funcționează"
- `IVIdealForSection.tsx` — secțiune "Ideal pentru"  
- `IVClinicalStudiesSection.tsx` — secțiune studii clinice
- `IVQualitySection.tsx` — secțiune calitate
- `IVDripCatalog.tsx` — catalogul de produse
- `ServiceCard.tsx` — card pentru catalog
- `clinical/` — subdirectory studii clinice
- `quality/` — subdirectory calitate
- `iv-drip/` — subdirectory types
- 11 x Content pages (AllInclusive, AntiMahmureala, etc.)
