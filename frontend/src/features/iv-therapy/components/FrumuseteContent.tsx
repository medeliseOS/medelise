'use client';

import React from 'react';
import IVDripProductPage from './IVDripProductPage';

export default function FrumuseteContent() {
    return (
        <IVDripProductPage
            id="frumusete-iv"
            title="FRUMUSEȚE"
            subtitle="Regenerare Celulară și Strălucire Naturală"
            imageSrc="/images-medelise/md-iv-drip/md-img-drip-beauty.webp"
            imageAlt="Frumusețe IV Drip"
            price={700}
            oldPrice={1500}
            volumeOptions={['500ml', '1000ml']}
            economyPerMl={['1,40 Lei/ml', '0,70 Lei/ml']}
            benefits={[
                'Piele luminoasă și hidratată din interior',
                'Reducerea semnelor de îmbătrânire celulară',
                'Întărirea unghiilor și părului',
                'Detoxifiere cu Glutation – cel mai puternic antioxidant',
                'Stimularea producției naturale de colagen',
                'Protecție împotriva stresului oxidativ',
            ]}
            description={{
                title: 'IV Drip Frumusețe – Glow din Interior',
                intro: 'Adevărata frumusețe vine din interior. Tratamentul nostru IV Drip de Frumusețe furnizează direct în fluxul sanguin antioxidanții și vitaminele esențiale pentru regenerarea celulară, producția de colagen și protecția împotriva radicalilor liberi.',
                sections: [
                    {
                        heading: 'Compoziție',
                        content: [
                            'Glutation – antioxidant master pentru luminozitatea pielii',
                            'Vitamina C megadoză – stimulează producția de colagen',
                            'Biotină (Vitamina B7) – pentru păr, piele și unghii',
                            'Acid Hialuronic – hidratare profundă',
                            'Zinc – regenerare tisulară',
                            'Vitamina E – protecție antioxidantă',
                            'Seleniu – anti-aging celular',
                        ],
                    },
                    {
                        heading: 'Durata tratamentului',
                        content: 'Perfuzia durează 45-75 de minute în funcție de concentrația de Glutation aleasă. Rezultatele vizibile apar după 3-4 ședințe, cu menținere lunară recomandată.',
                    },
                    {
                        heading: 'Indicații',
                        content: [
                            'Piele matură cu semne de îmbătrânire',
                            'Pregătire pre-eveniment (nuntă, gală, ședință foto)',
                            'Hiperpigmentare și ten neuniform',
                            'Păr fragil și unghii casante',
                            'Recuperare post-expunere solară excesivă',
                            'Detoxifiere completă pentru un glow natural',
                        ],
                    },
                ],
            }}
            reviews={[
                {
                    author: 'Alina S.',
                    date: '9 Februarie 2025',
                    rating: 5,
                    text: 'Am făcut 4 ședințe înainte de nuntă și pielea mea arăta incredibil! Make-up artist-a a remarcat diferența. Glutation-ul face minuni!',
                },
                {
                    author: 'Cristina P.',
                    date: '22 Ianuarie 2025',
                    rating: 5,
                    text: 'La 45 de ani pielea mea arată mai bine ca niciodată. Fac lunar perfuzia de frumusețe și diferența este vizibilă. Recomand tuturor prietenelor!',
                },
                {
                    author: 'Monica D.',
                    date: '5 Ianuarie 2025',
                    rating: 4,
                    text: 'Rezultate bune, dar necesită consecvență. După 3 ședințe am observat pielea mai luminoasă și unghiile mai puternice. Merită investiția pe termen lung.',
                },
            ]}
            reviewCount={44}
            averageRating={5}
        />
    );
}
