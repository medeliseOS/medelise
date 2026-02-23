'use client';

import IVDripHeroSection from './IVDripHeroSection';
import IVDripProductTabs from './IVDripProductTabs';
import ProductWhyItWorks from './ProductWhyItWorks';
import IVWellnessRitualSection from './IVWellnessRitualSection';
import IVSafeAdministrationSection from './IVSafeAdministrationSection';
import IVClinicalEvidenceSection from './IVClinicalEvidenceSection';
import TestimonialsSection from '@/components/ui/TestimonialsSection';

export default function FertilityPlusContent() {
    return (
        <>
            <IVDripHeroSection
                title="FERTILITY+"
                subtitle="Optimizare Celulară"
                imageSrc="/images-medelise/md-iv-drip/md-img-drip-dehydration.webp"
                imageAlt="Fertility+ IV Drip"
                volumeOptions={['250ml', '500ml', '1000ml']}
                pricingVariants={{
                    '250ml': { price: 320, oldPrice: 440 },
                    '500ml': { price: 480, oldPrice: 660 },
                    '1000ml': { price: 780, oldPrice: 1050 },
                }}
                price={480}
                benefits={[
                    'Optimizarea fertilității prin suport nutrițional avansat',
                    'Acid folic și vitamine esențiale pentru sănătatea reproductivă',
                    'Detoxifiere celulară și reducerea stresului oxidativ',
                    'Susținerea echilibrului hormonal',
                    'Îmbunătățirea calității ovocitelor și spermatozoizilor',
                    'Pregătire optimă a organismului pentru concepție',
                ]}
                reviewCount={22}
                averageRating={5}
            />

            <IVDripProductTabs
                descriptionContent={<><ProductWhyItWorks /><IVWellnessRitualSection /><IVClinicalEvidenceSection /><IVSafeAdministrationSection /></>}
                reviewsContent={<TestimonialsSection />}
            />
        </>
    );
}
