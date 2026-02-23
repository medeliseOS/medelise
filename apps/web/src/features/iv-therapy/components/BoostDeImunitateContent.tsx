'use client';

import IVDripHeroSection from './IVDripHeroSection';
import IVDripProductTabs from './IVDripProductTabs';
import ProductWhyItWorks from './ProductWhyItWorks';
import IVWellnessRitualSection from './IVWellnessRitualSection';
import IVSafeAdministrationSection from './IVSafeAdministrationSection';
import IVClinicalEvidenceSection from './IVClinicalEvidenceSection';
import TestimonialsSection from '@/components/ui/TestimonialsSection';

export default function BoostDeImunitateContent() {
    return (
        <>
            <IVDripHeroSection
                title="BOOST DE IMUNITATE"
                subtitle="Susținere Antivirală"
                imageSrc="/images-medelise/md-iv-drip/md-img-drip-dehydration.webp"
                imageAlt="Boost de Imunitate IV Drip"
                volumeOptions={['250ml', '500ml', '1000ml']}
                pricingVariants={{
                    '250ml': { price: 280, oldPrice: 380 },
                    '500ml': { price: 420, oldPrice: 580 },
                    '1000ml': { price: 680, oldPrice: 950 },
                }}
                price={420}
                benefits={[
                    'Întărirea sistemului imunitar prin doze mari de Vitamina C',
                    'Protecție antivirală și antibacteriană',
                    'Reducerea duratei și severității răcelilor',
                    'Neutralizarea radicalilor liberi prin antioxidanți',
                    'Susținerea producției de celule albe',
                    'Prevenție activă în sezonul rece',
                ]}
                reviewCount={35}
                averageRating={5}
            />

            <IVDripProductTabs
                descriptionContent={<><ProductWhyItWorks /><IVWellnessRitualSection /><IVClinicalEvidenceSection /><IVSafeAdministrationSection /></>}
                reviewsContent={<TestimonialsSection />}
            />
        </>
    );
}
