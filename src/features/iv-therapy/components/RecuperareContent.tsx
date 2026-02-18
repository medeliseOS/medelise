'use client';

import React from 'react';
import IVDripProductPage from './IVDripProductPage';

export default function RecuperareContent() {
    return (
        <IVDripProductPage
            id="recuperare-iv"
            title="RECUPERARE"
            subtitle="Refacere Accelerată a Organismului"
            imageSrc="/images-medelise/md-iv-drip/md-img-drip-recovery.webp"
            imageAlt="Recuperare IV Drip"
            price={500}
            oldPrice={700}
            volumeOptions={['500ml', '1000ml']}
            economyPerMl={['1,00 Lei/ml', '0,50 Lei/ml']}
            benefits={[
                'Recuperare fizică accelerată după efort intens',
                'Reducerea inflamației și a durerii musculare',
                'Restabilirea nivelului optim de minerale',
                'Suport pentru regenerarea țesuturilor',
                'Îmbunătățirea calității somnului și odihnei',
                'Boost energetic și mental post-recuperare',
            ]}
            description={{
                title: 'IV Drip Recuperare – Refacere Completă și Accelerată',
                intro: 'Fie că ești sportiv de performanță, ai trecut prin chirurgie, sau pur și simplu ai un stil de viață solicitant, tratamentul nostru IV Drip pentru Recuperare îți oferă tot ce are nevoie organismul pentru a se reface rapid și complet.',
                sections: [
                    {
                        heading: 'Compoziție',
                        content: [
                            'Aminoacizi esențiali pentru refacerea musculară',
                            'Magneziu și Calciu pentru relaxare musculară',
                            'Vitamina C în doză mare (antioxidant)',
                            'Complex de vitamine B pentru metabolismul energetic',
                            'Zinc și Seleniu pentru recuperarea imunitară',
                            'Soluție salină pentru hidratare optimă',
                        ],
                    },
                    {
                        heading: 'Durata tratamentului',
                        content: 'Tratamentul durează între 45-75 de minute. Este recomandat ca prim pas de recuperare sau ca tratament regulat pentru sportivii de performanță.',
                    },
                    {
                        heading: 'Indicații',
                        content: [
                            'Post-antrenament intens sau competiție sportivă',
                            'Recuperare postoperatorie (cu aviz medical)',
                            'Oboseală cronică și burnout profesional',
                            'Recuperare după boli virale sau bacteriene',
                            'Jet lag sever după călătorii intercontinentale',
                            'Perioadele de convalescență',
                        ],
                    },
                ],
            }}
            reviews={[
                {
                    author: 'Radu T.',
                    date: '1 Februarie 2025',
                    rating: 5,
                    text: 'Ca triatlet, recuperarea e esențială. Perfuzia Medelise după cursă e game-changer! Mă simt refăcut mult mai repede decât cu suplimentele orale.',
                },
                {
                    author: 'Simona G.',
                    date: '18 Ianuarie 2025',
                    rating: 5,
                    text: 'Am folosit după o operație minoră (cu acordul chirurgului). Recuperarea a fost mult mai rapidă decât mă așteptam. Foarte recomandat!',
                },
                {
                    author: 'Mihai C.',
                    date: '27 Decembrie 2024',
                    rating: 4,
                    text: 'Bun pentru recuperare post-gripă. Am simțit diferența clar. Personalul foarte amabil și profesionist.',
                },
            ]}
            reviewCount={34}
            averageRating={5}
        />
    );
}
