'use client';

import React from 'react';
import IVDripProductPage from './IVDripProductPage';

export default function AllInclusiveContent() {
    return (
        <IVDripProductPage
            id="all-inclusive-iv"
            title="ALL-INCLUSIVE"
            subtitle="Suport Complet VIP – Toate Beneficiile într-o Singură Perfuzie"
            imageSrc="/images-medelise/md-iv-drip/md-img-drip-all-inclusive.webp"
            imageAlt="All-Inclusive IV Drip"
            price={1500}
            oldPrice={2500}
            volumeOptions={['1000ml']}
            economyPerMl={['1,50 Lei/ml']}
            benefits={[
                'Pachet VIP complet – combină toate terapiile',
                'Hidratare, imunitate, energie și detoxifiere',
                'Regenerare celulară și anti-aging premium',
                'Suport cognitiv și neurologic avansat',
                'Cele mai mari doze de antioxidanți disponibile',
                'Experiența ultimă în wellness intravenos',
            ]}
            description={{
                title: 'IV Drip All-Inclusive – Pachetul VIP Complet',
                intro: 'All-Inclusive este protocolul nostru de vârf – o perfuzie premium care combină cele mai valoroase elemente din toate terapiile noastre IV. Conceput pentru cei care doresc cel mai înalt nivel de wellness, acest cocktail oferă beneficii la 360° pentru organism.',
                sections: [
                    {
                        heading: 'Compoziție',
                        content: [
                            'Glutation Premium – detoxifiere și luminozitate',
                            'Vitamina C megadoză (20g+)',
                            'Complex complet de vitamine B (B1-B12)',
                            'Magneziu, Zinc, Seleniu, Calciu',
                            'Coenzima Q10 și L-Carnitină',
                            'Alpha Lipoic Acid (ALA)',
                            'N-Acetilcisteină (NAC)',
                            'Taurină și aminoacizi esențiali',
                            'Vitamina D3 și Vitamina E',
                            'Biotină pentru piele, păr, unghii',
                        ],
                    },
                    {
                        heading: 'Durata tratamentului',
                        content: 'Perfuzia durează 90-120 de minute datorită cantității mari de substanțe active. Se administrează într-un cadru confortabil, cu monitorizare continuă.',
                    },
                    {
                        heading: 'Ce include',
                        content: [
                            'Consultație inițială cu personalul medical',
                            'Evaluare pre-administrare completă',
                            'Perfuzia All-Inclusive premium',
                            'Monitorizare pe toată durata administrării',
                            'Kit de wellness post-tratament',
                            'Follow-up telefonic la 24h',
                        ],
                    },
                    {
                        heading: 'Indicații',
                        content: [
                            'Wellness premium și mentenanță lunară',
                            'Pregătire pentru evenimente importante',
                            'Recuperare completă post-boală sau chirurgie',
                            'Detoxifiere și reset complet al organismului',
                            'Anti-aging și regenerare celulară completă',
                            'Cadou VIP pentru persoane dragi',
                        ],
                    },
                ],
            }}
            reviews={[
                {
                    author: 'Maximilian H.',
                    date: '12 Februarie 2025',
                    rating: 5,
                    text: 'Experiență VIP în adevăratul sens! Echipa Medelise a fost impecabilă de la consultație până la follow-up. Este cel mai bun lucru pe care l-am făcut pentru sănătatea mea. Merită fiecare bănuț!',
                },
                {
                    author: 'Adriana B.',
                    date: '28 Ianuarie 2025',
                    rating: 5,
                    text: 'Am primit All-Inclusive cadou de la soț. Cel mai bun cadou posibil! M-am simțit extraordinar zile întregi după perfuzie. Acum e abonament lunar!',
                },
                {
                    author: 'Inv. Dr. Teodorescu',
                    date: '5 Ianuarie 2025',
                    rating: 5,
                    text: 'Ca medic și pacient, apreciez protocoalele Medelise. All-Inclusive este formulat impecabil, cu ingrediente de cea mai înaltă calitate. Recomandare fără rezerve.',
                },
            ]}
            reviewCount={22}
            averageRating={5}
        />
    );
}
