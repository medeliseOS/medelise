'use client';

import React from 'react';
import IVDripHeroSection from './IVDripHeroSection';
import IVDripProductTabs from './IVDripProductTabs';
import ProductWhyItWorks from './ProductWhyItWorks';
import IVWellnessRitualSection from './IVWellnessRitualSection';
import IVClinicalEvidenceSection from './IVClinicalEvidenceSection';
import TestimonialsSection from '@/components/ui/TestimonialsSection';

export default function DeshidratareContent() {
    return (
        <>
            <IVDripHeroSection
                title="DESHIDRATARE"
                subtitle="Revitalizează și Rehidratează"
                imageSrc="/images-medelise/md-iv-drip/md-img-drip-dehydration.webp"
                imageAlt="Deshidratare IV Drip"
                volumeOptions={['250ml', '500ml', '1000ml']}
                pricingVariants={{
                    '250ml': { price: 200, oldPrice: 300 },
                    '500ml': { price: 300, oldPrice: 450 },
                    '1000ml': { price: 550, oldPrice: 800 },
                }}
                economyPerMl={{
                    '250ml': '0,80 Lei/ml vs 1,20 Lei/ml',
                    '500ml': '0,60 Lei/ml vs 0,90 Lei/ml',
                    '1000ml': '0,55 Lei/ml vs 0,80 Lei/ml',
                }}
                price={300}
                oldPrice={450}
                benefits={[
                    'Rehidratare rapidă și eficientă',
                    'Restabilirea echilibrului de electroliți',
                    'Îmbunătățirea nivelului de energie',
                    'Claritate mentală crescută',
                    'Recuperare mai rapidă după efort, boală sau expunere la căldură',
                    'Ameliorarea simptomelor precum oboseală, amețeală, greață și cefalee',
                ]}
                reviewCount={46}
                averageRating={5}
            />

            <IVDripProductTabs
                descriptionContent={<><ProductWhyItWorks /><IVWellnessRitualSection /><IVClinicalEvidenceSection /></>}
                reviewsContent={<TestimonialsSection />}
            />
        </>
    );
}

