'use client';

import IVDripHeroSection from './IVDripHeroSection';
import IVDripProductTabs from './IVDripProductTabs';
import ProductWhyItWorks from './ProductWhyItWorks';
import IVWellnessRitualSection from './IVWellnessRitualSection';
import IVSafeAdministrationSection from './IVSafeAdministrationSection';
import IVClinicalEvidenceSection from './IVClinicalEvidenceSection';
import TestimonialsSection from '@/components/ui/TestimonialsSection';

export default function AntiMahmurealaContent() {
    return (
        <>
            <IVDripHeroSection
                title="ANTI-MAHMUREALĂ"
                subtitle="Reducerea Greței și Cefaleei"
                imageSrc="/images-medelise/md-iv-drip/md-img-drip-dehydration.webp"
                imageAlt="Anti-Mahmureală IV Drip"
                volumeOptions={['250ml', '500ml', '1000ml']}
                pricingVariants={{
                    '250ml': { price: 220, oldPrice: 320 },
                    '500ml': { price: 350, oldPrice: 500 },
                    '1000ml': { price: 580, oldPrice: 850 },
                }}
                price={350}
                benefits={[
                    'Ameliorarea rapidă a simptomelor de mahmureală',
                    'Reducerea greței și a cefaleei',
                    'Rehidratare profundă și restaurarea electroliților',
                    'Detoxifiere hepatică accelerată',
                    'Creșterea nivelului de energie și claritate mentală',
                    'Recuperare completă în mai puțin de o oră',
                ]}
                reviewCount={41}
                averageRating={5}
            />

            <IVDripProductTabs
                descriptionContent={<><ProductWhyItWorks /><IVWellnessRitualSection /><IVClinicalEvidenceSection /><IVSafeAdministrationSection /></>}
                reviewsContent={<TestimonialsSection />}
            />
        </>
    );
}
