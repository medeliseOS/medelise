#!/bin/bash
# Script pentru mutarea componentelor neutilizate IV Therapy

BASE="/home/osx/Desktop/03_Dev/MEDVITA HEALTH SOLUTIONS 3.0/medelise/apps/web/src/features/iv-therapy/components"
DEST="$BASE/_componente_neutilizate"

# Creăm subdirectoarele necesare
mkdir -p "$DEST/clinical"
mkdir -p "$DEST/quality"
mkdir -p "$DEST/iv-drip"

# Mutăm subdirectoarele vechi
mv "$BASE/clinical/StudyCard.tsx" "$DEST/clinical/"
mv "$BASE/clinical/types.ts" "$DEST/clinical/"
mv "$BASE/quality/QualityHeader.tsx" "$DEST/quality/"
mv "$BASE/quality/QualityImages.tsx" "$DEST/quality/"
mv "$BASE/quality/QualityFooter.tsx" "$DEST/quality/"
mv "$BASE/quality/constants.ts" "$DEST/quality/"
mv "$BASE/quality/types.ts" "$DEST/quality/"
mv "$BASE/iv-drip/BenefitsList.tsx" "$DEST/iv-drip/"
mv "$BASE/iv-drip/ProductHeader.tsx" "$DEST/iv-drip/"
mv "$BASE/iv-drip/types.ts" "$DEST/iv-drip/"

# Mutăm componentele template vechi
mv "$BASE/IVDripProductPage.tsx" "$DEST/"
mv "$BASE/IVWhySection.tsx" "$DEST/"
mv "$BASE/IVIdealForSection.tsx" "$DEST/"
mv "$BASE/IVClinicalStudiesSection.tsx" "$DEST/"
mv "$BASE/IVQualitySection.tsx" "$DEST/"
mv "$BASE/IVDripCatalog.tsx" "$DEST/"
mv "$BASE/ServiceCard.tsx" "$DEST/"

# Mutăm Content pages neutilizate
mv "$BASE/AllInclusiveContent.tsx" "$DEST/"
mv "$BASE/AntiMahmurealaContent.tsx" "$DEST/"
mv "$BASE/BoostEnergieContent.tsx" "$DEST/"
mv "$BASE/BoostImunitateContent.tsx" "$DEST/"
mv "$BASE/CalmareaMigrenelorContent.tsx" "$DEST/"
mv "$BASE/FertilityPlusContent.tsx" "$DEST/"
mv "$BASE/FrumuseteContent.tsx" "$DEST/"
mv "$BASE/GastroenteritaContent.tsx" "$DEST/"
mv "$BASE/MyersCocktailContent.tsx" "$DEST/"
mv "$BASE/RecuperareContent.tsx" "$DEST/"
mv "$BASE/SuperBoostImunitateContent.tsx" "$DEST/"

# Ștergem directoarele goale rămase
rmdir "$BASE/clinical" 2>/dev/null
rmdir "$BASE/quality" 2>/dev/null
rmdir "$BASE/iv-drip" 2>/dev/null

echo "✅ Toate componentele neutilizate au fost mutate în _componente_neutilizate/"
