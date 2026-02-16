'use client';

import React from 'react';
import IVDripProductPage from './IVDripProductPage';

export default function MyersCocktailContent() {
    return (
        <IVDripProductPage
            id="myers-cocktail-iv"
            title="MYERS COCKTAIL"
            subtitle="Complex Vitaminic Total și Echilibru Complet"
            imageSrc="/images/iv-drip/myers-cocktail.png"
            imageAlt="Myers Cocktail IV Drip"
            price={750}
            oldPrice={850}
            volumeOptions={['500ml', '1000ml']}
            economyPerMl={['1,50 Lei/ml', '0,75 Lei/ml']}
            benefits={[
                'Cocktailul vitaminic original și cel mai cercetat',
                'Echilibrare completă a vitaminelor și mineralelor',
                'Energie sustenabilă și claritate mentală',
                'Funcție imunitară optimizată',
                'Reducerea migren și a oboselii cronice',
                'Ameliorarea simptomelor de astm și alergii',
            ]}
            description={{
                title: 'Myers Cocktail – Protocolul Original de Terapie IV',
                intro: 'Dezvoltat de Dr. John Myers în anii \'60, acest cocktail intravenos este cel mai studiat și utilizat protocol de terapie IV din lume. Formula sa echilibrată oferă un spectru complet de vitamine și minerale esențiale pentru funcționarea optimă a organismului.',
                sections: [
                    {
                        heading: 'Compoziție',
                        content: [
                            'Vitamina C (2-5g)',
                            'Complex de vitamine B (B1, B2, B3, B5, B6, B12)',
                            'Magneziu sulfat',
                            'Calciu gluconat',
                            'Vitamina B12 (Metilcobalamină)',
                            'Soluție salină ca vehicul',
                        ],
                    },
                    {
                        heading: 'Durata tratamentului',
                        content: 'Perfuzia durează 30-45 de minute. Este unul dintre cele mai rapide protocoale IV, ideal pentru persoanele cu program încărcat.',
                    },
                    {
                        heading: 'Indicații',
                        content: [
                            'Oboseală cronică și sindrom de epuizare',
                            'Migrene și cefalee de tensiune',
                            'Fibromialgie și dureri cronice',
                            'Astm bronșic și alergii sezoniere',
                            'Depresie ușoară și anxietate',
                            'Menținere generală a sănătății optime',
                        ],
                    },
                ],
            }}
            reviews={[
                {
                    author: 'Prof. Dr. Ionescu M.',
                    date: '10 Februarie 2025',
                    rating: 5,
                    text: 'Cocktailul Myers este standardul de aur în terapia IV. Medelise îl administrează exemplar, cu ingrediente de cea mai bună calitate.',
                },
                {
                    author: 'Ana-Maria B.',
                    date: '25 Ianuarie 2025',
                    rating: 5,
                    text: 'Fac Myers Cocktail lunar de 6 luni. Migrena mea cronică s-a redus dramatic, iar nivelul de energie este constant ridicat. Best decision ever!',
                },
                {
                    author: 'Florin S.',
                    date: '12 Ianuarie 2025',
                    rating: 4,
                    text: 'Protocol solid, se simte diferența. Ca sportiv amator, îl folosesc pentru menținere generală. Raportul calitate-preț este bun.',
                },
            ]}
            reviewCount={58}
            averageRating={5}
        />
    );
}
