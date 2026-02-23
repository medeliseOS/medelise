'use client';

import IVDripHeroSection from './IVDripHeroSection';
import IVDripProductTabs from './IVDripProductTabs';
import ProductWhyItWorks from './ProductWhyItWorks';
import IVWellnessRitualSection from './IVWellnessRitualSection';
import IVSafeAdministrationSection from './IVSafeAdministrationSection';
import IVClinicalEvidenceSection from './IVClinicalEvidenceSection';
import TestimonialsSection from '@/components/ui/TestimonialsSection';

export default function CalmareamigrenelorContent() {
    return (
        <>
            <IVDripHeroSection
                title="CALMAREA MIGRENELOR"
                subtitle="Relaxare Neurovasculară"
                imageSrc="/images-medelise/md-iv-drip/md-img-drip-dehydration.webp"
                imageAlt="Calmarea Migrenelor IV Drip"
                volumeOptions={['250ml', '500ml', '1000ml']}
                pricingVariants={{
                    '250ml': { price: 260, oldPrice: 360 },
                    '500ml': { price: 400, oldPrice: 560 },
                    '1000ml': { price: 650, oldPrice: 900 },
                }}
                price={400}
                benefits={[
                    'Ameliorarea rapidă a migrenelor și cefaleei tensionale',
                    'Relaxare neurovasculară prin magneziu intravenos',
                    'Reducerea inflamației și a sensibilității la lumină',
                    'Hidratare profundă care previne recurența',
                    'Combaterea greței asociate migrenelor',
                    'Efect calmant asupra sistemului nervos central',
                ]}
                reviewCount={29}
                averageRating={5}
            />

            <IVDripProductTabs
                descriptionContent={<><ProductWhyItWorks /><IVWellnessRitualSection /><IVClinicalEvidenceSection /><IVSafeAdministrationSection /></>}
                reviewsContent={<TestimonialsSection />}
            />
        </>
    );
}
