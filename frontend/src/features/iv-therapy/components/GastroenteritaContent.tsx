'use client';

import React from 'react';
import IVDripProductPage from './IVDripProductPage';

export default function GastroenteritaContent() {
    return (
        <IVDripProductPage
            id="gastroenterita-iv"
            title="GASTROENTERITĂ"
            subtitle="Hidratare Corectivă și Refacere Digestivă"
            imageSrc="/images-medelise/md-iv-drip/md-img-drip-gastroenteritis.webp"
            imageAlt="Gastroenterită IV Drip"
            price={450}
            oldPrice={650}
            volumeOptions={['500ml', '1000ml']}
            economyPerMl={['0,90 Lei/ml', '0,45 Lei/ml']}
            benefits={[
                'Rehidratare rapidă în cazuri de diaree și vărsături',
                'Corectarea dezechilibrelor electrolitice',
                'Reducerea grețurilor și ameliorarea stării generale',
                'Restabilirea funcției digestive normale',
                'Suport nutrițional intravenos când alimentația orală nu e posibilă',
                'Recuperare accelerată comparativ cu hidratarea orală',
            ]}
            description={{
                title: 'IV Drip Gastroenterită – Hidratare și Recuperare Digestivă',
                intro: 'Gastroenterita poate duce rapid la deshidratare severă, mai ales când organismul nu poate reține lichidele administrate oral. Tratamentul nostru IV Drip oferă rehidratare directă în fluxul sanguin, corectând rapid deficitele de fluide și electroliți.',
                sections: [
                    {
                        heading: 'Compoziție',
                        content: [
                            'Soluție Ringer Lactat pentru rehidratare optimă',
                            'Electroliți esențiali (Na, K, Mg, Ca)',
                            'Ondansetron (antiemetic)',
                            'Vitamina B6 pentru funcția digestivă',
                            'Zinc pentru refacerea mucoasei intestinale',
                        ],
                    },
                    {
                        heading: 'Durata tratamentului',
                        content: 'Perfuzia durează 60-90 de minute, în funcție de severitatea deshidratării. Personalul medical va evalua starea pacientului și va ajusta protocolul în consecință.',
                    },
                    {
                        heading: 'Indicații',
                        content: [
                            'Gastroenterită virală sau bacteriană',
                            'Deshidratare moderată-severă cu vărsături',
                            'Intoleranță alimentară acută',
                            'Toxiinfecție alimentară',
                            'Recuperare post-virozare cu simptome digestive',
                        ],
                    },
                ],
            }}
            reviews={[
                {
                    author: 'Ioana S.',
                    date: '10 Ianuarie 2025',
                    rating: 5,
                    text: 'Am chemat echipa Medelise pentru fiul meu care avea gastroenterită severă. În câteva ore starea lui s-a îmbunătățit vizibil. Mulțumim pentru profesionalism!',
                },
                {
                    author: 'Vlad P.',
                    date: '25 Decembrie 2024',
                    rating: 5,
                    text: 'Serviciu excelent! Am făcut toxiinfecție alimentară de Crăciun și nu puteam reține nimic. Perfuzia m-a pus pe picioare rapid.',
                },
                {
                    author: 'Carmen A.',
                    date: '8 Februarie 2025',
                    rating: 4,
                    text: 'Foarte utilă perfuzia, m-a ajutat enorm. Personalul a fost atent și profesionist. Recomand pentru oricine trece printr-o gastroenterită.',
                },
            ]}
            reviewCount={29}
            averageRating={5}
        />
    );
}
