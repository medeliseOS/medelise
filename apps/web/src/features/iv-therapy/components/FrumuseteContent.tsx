'use client';

import React from 'react';
import IVDripProductPage from './IVDripProductPage';
import { ContactFormSection } from '@features/contact/components';

export default function FrumuseteContent() {
    return (
        <>
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
                idealForItems={[
                    'Persoane care doresc o piele luminoasă, hidratată și cu aspect tânăr.',
                    'Pacienți care se pregătesc pentru un eveniment important (nuntă, gală, ședință foto).',
                    'Fumători sau persoane expuse la poluare care doresc detoxifiere și luminozitate.',
                    'Oricine caută o abordare anti-aging din interior, complementară îngrijirii topice.',
                ]}
                clinicalStudies={[
                    {
                        title: 'Glutathione and Skin Lightening: Clinical Evidence',
                        content: 'Glutationul IV inhibă enzima tirozinază, reducând producția de melanină și oferind un ten mai luminos și uniform în 4-6 ședințe.',
                    },
                    {
                        title: 'High-Dose Vitamin C and Collagen Synthesis',
                        content: 'Vitamina C este cofactor esențial în sinteza colagenului. Megadozele IV stimulează producția de colagen tip I și III, reducând ridurile.',
                    },
                    {
                        title: 'Biotin and Hair/Nail Growth: A Meta-Analysis',
                        content: 'Biotina îmbunătățește grosimea unghiilor cu 25% și reduce căderea părului la pacienții cu deficit, cu efecte vizibile în 3-6 luni.',
                    },
                    {
                        title: 'Alpha Lipoic Acid as a Universal Antioxidant in Dermatology',
                        content: 'ALA protejează împotriva fotodaunelor UV, reduce inflamația cutanată și regenerează alți antioxidanți (vitamina C, vitamina E, glutation).',
                    },
                ]}
                qualityBagImageSrc="/images-medelise/md-iv-drip/md-img-drip-beauty.webp"
        />


        <ContactFormSection />
    </>
    );
}
