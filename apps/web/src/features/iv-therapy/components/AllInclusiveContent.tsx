'use client';

import IVDripHeroSection from './IVDripHeroSection';
import IVDripProductTabs from './IVDripProductTabs';
import ProductWhyItWorks from './ProductWhyItWorks';
import IVWellnessRitualSection from './IVWellnessRitualSection';
import IVSafeAdministrationSection from './IVSafeAdministrationSection';
import IVClinicalEvidenceSection from './IVClinicalEvidenceSection';
import TestimonialsSection from '@/components/ui/TestimonialsSection';

export default function AllInclusiveContent() {
    return (
        <>
            <IVDripHeroSection
                title="ALL - INCLUSIVE"
                subtitle="Suport Complet"
                imageSrc="/images-medelise/md-iv-drip/md-img-drip-dehydration.webp"
                imageAlt="All Inclusive IV Drip"
                volumeOptions={['250ml', '500ml', '1000ml']}
                pricingVariants={{
                    '250ml': { price: 400, oldPrice: 550 },
                    '500ml': { price: 600, oldPrice: 820 },
                    '1000ml': { price: 950, oldPrice: 1300 },
                }}
                price={600}
                benefits={[
                    'Pachetul complet de vitamine și minerale esențiale',
                    'Hidratare, energizare și detoxifiere într-o singură sesiune',
                    'Susținerea tuturor sistemelor: imunitar, nervos, muscular',
                    'Optimizarea metabolismului și a funcției cognitive',
                    'Regenerare celulară accelerată',
                    'Soluția all-in-one pentru sănătate și vitalitate',
                ]}
                reviewCount={44}
                averageRating={5}
            />

            <IVDripProductTabs
                descriptionContent={<><ProductWhyItWorks /><IVWellnessRitualSection /><IVClinicalEvidenceSection /><IVSafeAdministrationSection /></>}
                reviewsContent={<TestimonialsSection />}
            />
        </>
    );
}
