'use client';

import IVDripHeroSection from './IVDripHeroSection';
import IVDripProductTabs from './IVDripProductTabs';
import ProductWhyItWorks from './ProductWhyItWorks';
import IVWellnessRitualSection from './IVWellnessRitualSection';
import IVSafeAdministrationSection from './IVSafeAdministrationSection';
import IVClinicalEvidenceSection from './IVClinicalEvidenceSection';
import TestimonialsSection from '@/components/ui/TestimonialsSection';

export default function SuperBoostDeImunitateContent() {
    return (
        <>
            <IVDripHeroSection
                title="SUPER - BOOST DE IMUNITATE"
                subtitle="Protecție Avansată"
                imageSrc="/images-medelise/md-iv-drip/md-img-drip-dehydration.webp"
                imageAlt="Super Boost de Imunitate IV Drip"
                volumeOptions={['250ml', '500ml', '1000ml']}
                pricingVariants={{
                    '250ml': { price: 350, oldPrice: 480 },
                    '500ml': { price: 520, oldPrice: 700 },
                    '1000ml': { price: 850, oldPrice: 1150 },
                }}
                price={520}
                benefits={[
                    'Protecție imunitară avansată cu doze mari de antioxidanți',
                    'Combinație sinergică de Vitamina C, Zinc și Seleniu',
                    'Stimularea producției de anticorpi',
                    'Detoxifiere celulară profundă',
                    'Susținerea funcției hepatice și renale',
                    'Prevenție activă împotriva infecțiilor sezoniere',
                ]}
                reviewCount={27}
                averageRating={5}
            />

            <IVDripProductTabs
                descriptionContent={<><ProductWhyItWorks /><IVWellnessRitualSection /><IVClinicalEvidenceSection /><IVSafeAdministrationSection /></>}
                reviewsContent={<TestimonialsSection />}
            />
        </>
    );
}
