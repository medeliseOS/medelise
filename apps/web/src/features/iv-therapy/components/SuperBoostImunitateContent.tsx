'use client';

import React from 'react';
import IVDripProductPage from './IVDripProductPage';
import { ContactFormSection } from '@features/contact/components';

export default function SuperBoostImunitateContent() {
    return (
        <>
            <IVDripProductPage
            id="super-boost-imunitate-iv"
            title="SUPER-BOOST DE IMUNITATE"
            subtitle="Protecție Avansată și Regenerare Celulară"
            imageSrc="/images-medelise/md-iv-drip/md-img-drip-super-immune.webp"
            imageAlt="Super-Boost de Imunitate IV Drip"
            price={800}
            oldPrice={1200}
            volumeOptions={['500ml', '1000ml']}
            economyPerMl={['1,60 Lei/ml', '0,80 Lei/ml']}
            benefits={[
                'Protecție imunitară de nivel maxim',
                'Doze duble de Vitamina C și Zinc',
                'Regenerare celulară accelerată',
                'Detoxifiere hepatică cu Glutation',
                'Reducerea inflamației sistemice',
                'Suport complet în perioadele critice de boală',
            ]}
            description={{
                title: 'IV Drip Super-Boost de Imunitate – Protecție de Nivel Maxim',
                intro: 'Când organismul tău are nevoie de protecție maximă, Super-Boost de Imunitate oferă doze premium de antioxidanți, vitamine și minerale. Acest protocol avansat este conceput pentru situații care necesită un răspuns imunitar puternic și rapid.',
                sections: [
                    {
                        heading: 'Compoziție',
                        content: [
                            'Vitamina C în megadoză dublă (20g+)',
                            'Zinc în doză terapeutică',
                            'Glutation – cel mai puternic antioxidant',
                            'Vitamina D3 în doză mare',
                            'N-Acetilcisteină (NAC)',
                            'Seleniu și Cupru pentru imunitate',
                            'Complex complet de vitamine B',
                            'Alpha Lipoic Acid (ALA)',
                        ],
                    },
                    {
                        heading: 'Durata tratamentului',
                        content: 'Perfuzia durează 60-90 de minute datorită concentrației ridicate de substanțe active. Se recomandă monitorizare pe durata administrării.',
                    },
                    {
                        heading: 'Indicații',
                        content: [
                            'Infecții virale sau bacteriene active',
                            'Post-COVID sau recuperare post-infecțioasă',
                            'Imunitate sever compromisă de stres',
                            'Pregătire pre și post-chirurgicală',
                            'Expunere la patogeni în zona de risc',
                            'Boli autoimune (cu supervizare medicală)',
                        ],
                    },
                ],
            }}
            reviews={[
                {
                    author: 'Dr. Alexandru P.',
                    date: '8 Februarie 2025',
                    rating: 5,
                    text: 'Ca medic, apreciez compoziția acestui protocol. L-am recomandat pacienților mei post-COVID cu rezultate excelente. Formularea este bine gândită.',
                },
                {
                    author: 'Marta I.',
                    date: '20 Ianuarie 2025',
                    rating: 5,
                    text: 'Am făcut Super-Boost după o pneumonie. Recuperarea a fost mult mai rapidă decât anticipa medicul meu. Mă simt revitalizată complet.',
                },
                {
                    author: 'George V.',
                    date: '3 Ianuarie 2025',
                    rating: 5,
                    text: 'Protocolul premium merită fiecare bănuț. Calitatea ingredientelor se simte. Fac trimestrial pentru menținerea imunității.',
                },
            ]}
            reviewCount={27}
            averageRating={5}
                idealForItems={[
                    'Pacienți imunocompromiși sau cu afecțiuni autoimune (sub supraveghere medicală).',
                    'Persoane expuse la medii cu risc ridicat de infecție (spitale, școli, transport public).',
                    'Călători internaționali care doresc protecție maximă înainte și după zbor.',
                    'Pacienți post-COVID cu imunitate residuală scăzută sau long COVID.',
                ]}
                clinicalStudies={[
                    {
                        title: 'High-Dose IV Vitamin C and Severe Respiratory Infections',
                        content: 'Megadozele de vitamina C (15-25g IV) reduc durata spitalizării și severitatea pneumoniei la pacienții cu infecții respiratorii severe.',
                    },
                    {
                        title: 'Glutathione and Immune Cell Function',
                        content: 'Glutationul este esențial pentru activitatea optimă a limfocitelor T. Deficitul reduce răspunsul imun cu până la 50%.',
                    },
                    {
                        title: 'Selenium and Viral Resistance: A Population Study',
                        content: 'Nivelurile optime de seleniu reduc susceptibilitatea la infecțiile virale și previn mutațiile virale care cresc virulența.',
                    },
                    {
                        title: 'Zinc and Adaptive Immunity in Elderly Adults',
                        content: 'Suplimentarea cu zinc la adulții peste 65 de ani restabilește funcția timică și crește producția de anticorpi cu 30-40%.',
                    },
                ]}
                qualityBagImageSrc="/images-medelise/md-iv-drip/md-img-drip-super-immune.webp"
        />


        <ContactFormSection />
    </>
    );
}
