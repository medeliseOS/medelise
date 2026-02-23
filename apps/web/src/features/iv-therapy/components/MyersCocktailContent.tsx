'use client';

import IVDripHeroSection from './IVDripHeroSection';
import IVDripProductTabs from './IVDripProductTabs';
import ProductWhyItWorks from './ProductWhyItWorks';
import IVWellnessRitualSection from './IVWellnessRitualSection';
import IVSafeAdministrationSection from './IVSafeAdministrationSection';
import IVClinicalEvidenceSection from './IVClinicalEvidenceSection';
import TestimonialsSection from '@/components/ui/TestimonialsSection';

export default function MyersCocktailContent() {
    return (
        <>
            <IVDripHeroSection
                title="MYERS-COCKTAIL"
                subtitle="Complex Vitaminic Total"
                imageSrc="/images-medelise/md-iv-drip/md-img-drip-dehydration.webp"
                imageAlt="Myers Cocktail IV Drip"
                volumeOptions={['250ml', '500ml', '1000ml']}
                pricingVariants={{
                    '250ml': { price: 300, oldPrice: 400 },
                    '500ml': { price: 450, oldPrice: 600 },
                    '1000ml': { price: 700, oldPrice: 950 },
                }}
                price={450}
                benefits={[
                    'Complex multivitaminic complet administrat intravenos',
                    'Susținerea sistemului imunitar',
                    'Reducerea oboselii și a stresului cronic',
                    'Îmbunătățirea funcției cardiovasculare',
                    'Ameliorarea migrenelor și a durerilor musculare',
                    'Revitalizare generală a organismului',
                ]}
                reviewCount={52}
                averageRating={5}
            />

            <IVDripProductTabs
                descriptionContent={<><ProductWhyItWorks /><IVWellnessRitualSection /><IVClinicalEvidenceSection /><IVSafeAdministrationSection /></>}
                reviewsContent={<TestimonialsSection />}
            />
        </>
    );
}
