'use client';

import React from 'react';
import IVDripProductPage from './IVDripProductPage';
import { ContactFormSection } from '@features/contact/components';

export default function BoostEnergieContent() {
    return (
        <>
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
                idealForItems={[
                    'Profesioniști cu program încărcat și nivel crescut de stres sau burnout.',
                    'Studenți în perioadele de examene și sesiuni intensive.',
                    'Sportivi care au nevoie de energie sustenabilă fără stimulente artificiale.',
                    'Persoane cu oboseală cronică, insomnie sau deficit de vitamine B.',
                ]}
                clinicalStudies={[
                    {
                        title: 'B Vitamins and the Brain: Mechanisms, Dose and Efficacy',
                        content: 'Suplimentarea cu doze mari de complex B îmbunătățește funcția cognitivă, reduce stresul oxidativ cerebral și susține metabolismul energetic celular.',
                    },
                    {
                        title: 'Intravenous Vitamin C in Fatigue Reduction: A Double-Blind RCT',
                        content: 'Administrarea IV de vitamina C a redus semnificativ nivelurile de oboseală la subiecții cu deficit subclinic, cu efecte persistente până la 2 săptămâni.',
                    },
                    {
                        title: 'Magnesium Supplementation and Exercise Performance',
                        content: 'Magneziul intravenos optimizează producția de ATP și reduce acumularea de lactat, îmbunătățind rezistența fizică și timpul de recuperare.',
                    },
                    {
                        title: 'Coenzyme Q10 and Cellular Energy Metabolism',
                        content: 'CoQ10 crește producția mitocondrială de energie și reduce oboseala la pacienții cu deficit energetic cronic.',
                    },
                ]}
                qualityBagImageSrc="/images-medelise/md-iv-drip/md-img-drip-boost-energy.webp"
        />


        <ContactFormSection />
    </>
    );
}
