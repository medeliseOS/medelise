'use client';

import IVDripHeroSection from './IVDripHeroSection';
import IVDripProductTabs from './IVDripProductTabs';
import ProductWhyItWorks from './ProductWhyItWorks';
import IVWellnessRitualSection from './IVWellnessRitualSection';
import IVSafeAdministrationSection from './IVSafeAdministrationSection';
import IVClinicalEvidenceSection from './IVClinicalEvidenceSection';
import TestimonialsSection from '@/components/ui/TestimonialsSection';

export default function GastroenteritaContent() {
    return (
        <>
            <IVDripHeroSection
                title="GASTROENTERITA"
                subtitle="Hidratare Corectivă"
                imageSrc="/images-medelise/md-iv-drip/md-img-drip-dehydration.webp"
                imageAlt="Gastroenterita IV Drip"
                volumeOptions={['250ml', '500ml', '1000ml']}
                pricingVariants={{
                    '250ml': { price: 230, oldPrice: 330 },
                    '500ml': { price: 370, oldPrice: 520 },
                    '1000ml': { price: 600, oldPrice: 860 },
                }}
                price={370}
                benefits={[
                    'Rehidratare rapidă în cazuri de gastroenterită acută',
                    'Restabilirea echilibrului electrolitic pierdut',
                    'Combaterea deshidratării cauzate de vărsături și diaree',
                    'Susținerea funcției gastrointestinale',
                    'Ameliorarea rapidă a stării generale',
                    'Recuperare completă fără stresul administrării orale',
                ]}
                reviewCount={31}
                averageRating={5}
            />

            <IVDripProductTabs
                descriptionContent={<><ProductWhyItWorks /><IVWellnessRitualSection /><IVClinicalEvidenceSection /><IVSafeAdministrationSection /></>}
                reviewsContent={<TestimonialsSection />}
            />
        </>
    );
}
