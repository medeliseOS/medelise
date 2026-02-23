'use client';

import IVDripHeroSection from './IVDripHeroSection';
import IVDripProductTabs from './IVDripProductTabs';
import ProductWhyItWorks from './ProductWhyItWorks';
import IVWellnessRitualSection from './IVWellnessRitualSection';
import IVSafeAdministrationSection from './IVSafeAdministrationSection';
import IVClinicalEvidenceSection from './IVClinicalEvidenceSection';
import TestimonialsSection from '@/components/ui/TestimonialsSection';

export default function FrumuseteContent() {
    return (
        <>
            <IVDripHeroSection
                title="FRUMUSETE"
                subtitle="Regenerare Celulară"
                imageSrc="/images-medelise/md-iv-drip/md-img-drip-dehydration.webp"
                imageAlt="Frumusete IV Drip"
                volumeOptions={['250ml', '500ml', '1000ml']}
                pricingVariants={{
                    '250ml': { price: 300, oldPrice: 420 },
                    '500ml': { price: 460, oldPrice: 630 },
                    '1000ml': { price: 750, oldPrice: 1020 },
                }}
                price={460}
                benefits={[
                    'Revitalizare cutanată prin Glutathione și Vitamina C',
                    'Stimularea producției naturale de colagen',
                    'Hidratare profundă a pielii, părului și unghiilor',
                    'Reducerea semnelor de îmbătrânire prematură',
                    'Luminozitate și tonifiere vizibilă',
                    'Protecție antioxidantă împotriva stresului oxidativ',
                ]}
                reviewCount={36}
                averageRating={5}
            />

            <IVDripProductTabs
                descriptionContent={<><ProductWhyItWorks /><IVWellnessRitualSection /><IVClinicalEvidenceSection /><IVSafeAdministrationSection /></>}
                reviewsContent={<TestimonialsSection />}
            />
        </>
    );
}
