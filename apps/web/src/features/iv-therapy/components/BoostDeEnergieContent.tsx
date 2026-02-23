'use client';

import IVDripHeroSection from './IVDripHeroSection';
import IVDripProductTabs from './IVDripProductTabs';
import ProductWhyItWorks from './ProductWhyItWorks';
import IVWellnessRitualSection from './IVWellnessRitualSection';
import IVSafeAdministrationSection from './IVSafeAdministrationSection';
import IVClinicalEvidenceSection from './IVClinicalEvidenceSection';
import TestimonialsSection from '@/components/ui/TestimonialsSection';

export default function BoostDeEnergieContent() {
    return (
        <>
            <IVDripHeroSection
                title="BOOST DE ENERGIE"
                subtitle="Vitalitate Instantă"
                imageSrc="/images-medelise/md-iv-drip/md-img-drip-dehydration.webp"
                imageAlt="Boost de Energie IV Drip"
                volumeOptions={['250ml', '500ml', '1000ml']}
                pricingVariants={{
                    '250ml': { price: 250, oldPrice: 350 },
                    '500ml': { price: 400, oldPrice: 550 },
                    '1000ml': { price: 650, oldPrice: 900 },
                }}
                price={400}
                benefits={[
                    'Creșterea imediată a nivelului de energie',
                    'Combaterea oboselii cronice',
                    'Îmbunătățirea concentrării și clarității mentale',
                    'Optimizarea metabolismului celular',
                    'Recuperare rapidă după perioade de stres intens',
                    'Susținerea funcției sistemului nervos',
                ]}
                reviewCount={38}
                averageRating={5}
            />

            <IVDripProductTabs
                descriptionContent={<><ProductWhyItWorks /><IVWellnessRitualSection /><IVClinicalEvidenceSection /><IVSafeAdministrationSection /></>}
                reviewsContent={<TestimonialsSection />}
            />
        </>
    );
}
