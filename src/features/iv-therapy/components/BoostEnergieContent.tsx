'use client';

import React from 'react';
import IVDripProductPage from './IVDripProductPage';

export default function BoostEnergieContent() {
    return (
        <IVDripProductPage
            id="boost-energie-iv"
            title="BOOST DE ENERGIE"
            subtitle="Vitalitate Instantă și Rezistență"
            imageSrc="/images-medelise/md-iv-drip/md-img-drip-boost-energy.webp"
            imageAlt="Boost de Energie IV Drip"
            price={600}
            oldPrice={650}
            volumeOptions={['500ml', '1000ml']}
            economyPerMl={['1,20 Lei/ml', '0,60 Lei/ml']}
            benefits={[
                'Energie instantă și de lungă durată',
                'Combaterea oboselii cronice și burnout-ului',
                'Îmbunătățirea performanței cognitive',
                'Creșterea rezistenței fizice',
                'Optimizarea metabolismului energetic',
                'Reducerea stresului oxidativ',
            ]}
            description={{
                title: 'IV Drip Boost de Energie – Vitalitate și Performanță',
                intro: 'Simte diferența instantaneu! Tratamentul IV Drip Boost de Energie combină cele mai eficiente vitamine și minerale pentru a-ți oferi un val de energie sustenabilă, fără cafeină sau stimulente artificiale.',
                sections: [
                    {
                        heading: 'Compoziție',
                        content: [
                            'Complex complet de vitamine B (B1, B2, B3, B5, B6, B12)',
                            'Vitamina C megadoză',
                            'Magneziu pentru funcția musculară',
                            'Taurină pentru energie celulară',
                            'Coenzima Q10',
                            'L-Carnitină pentru metabolismul grăsimilor',
                        ],
                    },
                    {
                        heading: 'Durata tratamentului',
                        content: 'Perfuzia durează 45-60 de minute. Efectele energizante se simt de obicei în primele 30 de minute și durează câteva zile.',
                    },
                    {
                        heading: 'Indicații',
                        content: [
                            'Oboseală cronică și lipsă de motivație',
                            'Perioadele intense de muncă sau examene',
                            'Antrenamente sportive frecvente',
                            'Jet lag și călătorii frecvente',
                            'Tranziții sezoniere (toamnă-iarnă)',
                            'Regimuri alimentare restrictive',
                        ],
                    },
                ],
            }}
            reviews={[
                {
                    author: 'Diana F.',
                    date: '5 Februarie 2025',
                    rating: 5,
                    text: 'Lucrez 12 ore pe zi și cafeaua nu mai avea efect. După perfuzie am simțit o energie curată, fără agitație. Fac asta lunar acum!',
                },
                {
                    author: 'Lucian B.',
                    date: '22 Ianuarie 2025',
                    rating: 5,
                    text: 'Excelent pentru perioadele de deadline-uri. Concentrarea și energia au fost la alt nivel câteva zile după tratament.',
                },
                {
                    author: 'Andreea M.',
                    date: '10 Ianuarie 2025',
                    rating: 4,
                    text: 'Foarte bună calitatea serviciului. Am simțit diferența, dar aș fi vrut ca efectul să dureze mai mult. O să încerc varianta de 1000ml data viitoare.',
                },
            ]}
            reviewCount={52}
            averageRating={5}
        />
    );
}
