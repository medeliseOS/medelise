'use client';

import React from 'react';
import IVDripProductPage from './IVDripProductPage';

export default function BoostImunitateContent() {
    return (
        <IVDripProductPage
            id="boost-imunitate-iv"
            title="BOOST DE IMUNITATE"
            subtitle="Protecție Naturală și Susținere Antivirală"
            imageSrc="/images-medelise/md-iv-drip/md-img-drip-immune-boost.webp"
            imageAlt="Boost de Imunitate IV Drip"
            price={400}
            oldPrice={650}
            volumeOptions={['500ml', '1000ml']}
            economyPerMl={['0,80 Lei/ml', '0,40 Lei/ml']}
            benefits={[
                'Întărirea sistemului imunitar natural',
                'Protecție crescută împotriva infecțiilor virale',
                'Reducerea duratei și severității răcelilor',
                'Suport antioxidant puternic',
                'Accelerarea proceselor de vindecare',
                'Prevenție activă în sezonul rece',
            ]}
            description={{
                title: 'IV Drip Boost de Imunitate – Apărare Naturală Amplificată',
                intro: 'Sistemul tău imunitar este prima linie de apărare a organismului. Tratamentul nostru IV Drip furnizează direct în sânge un cocktail puternic de vitamine, minerale și antioxidanți care susțin și amplifică răspunsul imun natural.',
                sections: [
                    {
                        heading: 'Compoziție',
                        content: [
                            'Vitamina C în megadoză (10g+)',
                            'Zinc în formă biodisponibilă',
                            'Vitamina D3 pentru imunitate adaptivă',
                            'Seleniu – antioxidant esențial',
                            'Complex de vitamine B',
                            'N-Acetilcisteină (NAC) pentru detoxifiere',
                        ],
                    },
                    {
                        heading: 'Durata tratamentului',
                        content: 'Perfuzia durează 45-60 de minute. Recomandăm un ciclu de 4 ședințe în sezonul rece sau înainte de călătorii pentru protecție optimă.',
                    },
                    {
                        heading: 'Indicații',
                        content: [
                            'Prevenție în sezonul gripei și virozelor',
                            'La primele simptome de răceală',
                            'Înainte și după călătorii cu avionul',
                            'Stres cronic care slăbește imunitatea',
                            'Post-tratament cu antibiotice',
                            'Expunere la medii cu risc crescut de infecții',
                        ],
                    },
                ],
            }}
            reviews={[
                {
                    author: 'Gabriela N.',
                    date: '12 Februarie 2025',
                    rating: 5,
                    text: 'Am făcut perfuzia înainte de o călătorie în Asia și nu m-am îmbolnăvit deloc! Obișnuiam să răcesc mereu în avion. Foarte recomandată!',
                },
                {
                    author: 'Cosmin D.',
                    date: '30 Ianuarie 2025',
                    rating: 5,
                    text: 'Fac un ciclu de 4 perfuzii în fiecare iarnă. De când am început, nu am mai avut gripă deloc. Investiție inteligentă în sănătate.',
                },
                {
                    author: 'Laura V.',
                    date: '15 Ianuarie 2025',
                    rating: 4,
                    text: 'Am apelat când am simțit primele semne de răceală. A doua zi mă simțeam mult mai bine. Serviciu prompt și profesionist.',
                },
            ]}
            reviewCount={41}
            averageRating={5}
        />
    );
}
