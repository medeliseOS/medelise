'use client';

import IVDripHeroSection from './IVDripHeroSection';
import IVDripProductTabs from './IVDripProductTabs';
import ProductWhyItWorks from './ProductWhyItWorks';
import IVWellnessRitualSection from './IVWellnessRitualSection';
import IVSafeAdministrationSection from './IVSafeAdministrationSection';
import IVClinicalEvidenceSection from './IVClinicalEvidenceSection';
import TestimonialsSection from '@/components/ui/TestimonialsSection';

export default function RecuperareContent() {
    return (
        <>
            <IVDripHeroSection
                title="RECUPERARE"
                subtitle="Refacere Accelerată"
                imageSrc="/images-medelise/md-iv-drip/md-img-drip-dehydration.webp"
                imageAlt="Recuperare IV Drip"
                volumeOptions={['250ml', '500ml', '1000ml']}
                pricingVariants={{
                    '250ml': { price: 240, oldPrice: 340 },
                    '500ml': { price: 380, oldPrice: 530 },
                    '1000ml': { price: 620, oldPrice: 880 },
                }}
                price={380}
                benefits={[
                    'Recuperare accelerată post-efort fizic intens',
                    'Reducerea inflamației musculare și articulare',
                    'Restabilirea echilibrului electrolitic',
                    'Susținerea regenerării țesuturilor',
                    'Combaterea oboselii și a epuizării fizice',
                    'Optimizarea performanței sportive pe termen lung',
                ]}
                reviewCount={33}
                averageRating={5}
            />

            <IVDripProductTabs
                descriptionContent={<><ProductWhyItWorks /><IVWellnessRitualSection /><IVClinicalEvidenceSection /><IVSafeAdministrationSection /></>}
                reviewsContent={<TestimonialsSection />}
            />
        </>
    );
}
