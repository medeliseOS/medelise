'use client';

import React from 'react';
import IVDripProductPage from './IVDripProductPage';
import { ContactFormSection } from '@features/contact/components';

export default function AntiMahmurealaContent() {
    return (
        <>
            <IVDripProductPage
            id="anti-mahmureala-iv"
            title="ANTI-MAHMUREALĂ"
            subtitle="Recuperare Rapidă după Petrecere"
            imageSrc="/images-medelise/md-iv-drip/md-img-drip-hangover.webp"
            imageAlt="Anti-Mahmureală IV Drip"
            price={350}
            oldPrice={500}
            volumeOptions={['500ml', '1000ml']}
            economyPerMl={['0,70 Lei/ml', '0,35 Lei/ml']}
            benefits={[
                'Reducerea rapidă a greței și vărsăturilor',
                'Ameliorarea cefaleei și migrenei postconsum',
                'Rehidratare intensivă a organismului',
                'Detoxifiere accelerată a ficatului',
                'Restabilirea nivelului de electroliți',
                'Îmbunătățirea clarității mentale și a energiei',
            ]}
            description={{
                title: 'IV Drip Anti-Mahmureală – Recuperare Rapidă și Detoxifiere',
                intro: 'Tratamentul IV Drip Anti-Mahmureală de la Medelise este soluția ta de urgență după o seară lungă. Compus din fluide, electroliți, vitamine și medicamente antiemetice, acest cocktail intravenos acționează rapid pentru a elimina simptomele mahmureliI.',
                sections: [
                    {
                        heading: 'Compoziție',
                        content: [
                            'Soluție salină (NaCl 0,9%) pentru rehidratare',
                            'Complex de vitamine B (B1, B6, B12)',
                            'Vitamina C în doză mare',
                            'Magneziu și Potasiu',
                            'Ondansetron (anti-greață)',
                            'Glutation pentru detoxifiere hepatică',
                        ],
                    },
                    {
                        heading: 'Durata tratamentului',
                        content: 'Perfuzia durează între 45-90 de minute. Majoritatea pacienților simt o ameliorare semnificativă în primele 30 de minute de la începerea tratamentului.',
                    },
                    {
                        heading: 'Indicații',
                        content: [
                            'Mahmureală severă cu greață și cefalee',
                            'Deshidratare post-consum de alcool',
                            'Oboseală și letargie la dimineață',
                            'Recuperare rapidă înainte de eveniment sau muncă',
                            'Detoxifiere după perioadă de consum excesiv',
                        ],
                    },
                ],
            }}
            reviews={[
                {
                    author: 'Cristian M.',
                    date: '28 Ianuarie 2025',
                    rating: 5,
                    text: 'Serviciu salvator! După revelion m-am simțit groaznic, dar după perfuzie am fost ca nou în mai puțin de o oră. Personalul a fost discret și profesionist.',
                },
                {
                    author: 'Alexandra R.',
                    date: '14 Februarie 2025',
                    rating: 5,
                    text: 'Am comandat pentru soțul meu după o petrecere cu colegii. A fost foarte mulțumit, a zis că e cea mai bună investiție. Vom apela din nou cu siguranță!',
                },
                {
                    author: 'Bogdan L.',
                    date: '5 Ianuarie 2025',
                    rating: 4,
                    text: 'Funcționează excelent! Am apelat de 3 ori deja. Singurul minus e că trebuie să aștepți 1-2 ore până ajung, dar merită fiecare leu.',
                },
            ]}
            reviewCount={38}
            averageRating={5}
                idealForItems={[
                    'Persoane care au consumat alcool în exces și prezintă simptome de mahmureală.',
                    'Profesioniști care trebuie să fie funcționali dimineața după un eveniment social.',
                    'Participanți la festivaluri, petreceri sau vacanțe cu consum de alcool.',
                    'Oricine dorește o recuperare rapidă fără a aștepta procesul natural de 24-48h.',
                ]}
                clinicalStudies={[
                    {
                        title: 'IV Fluid Resuscitation for Alcohol-Induced Dehydration',
                        content: 'Rehidratarea IV corectează deficitul hidric cauzat de alcool cu 60% mai rapid decât consumul oral de lichide, reducând simptomele de mahmureală.',
                    },
                    {
                        title: 'The Role of Glutathione in Alcohol Detoxification',
                        content: 'Glutationul administrat IV accelerează metabolizarea acetaldehidei (toxina principală a alcoolului), reducând hepatotoxicitatea și simptomele asociate.',
                    },
                    {
                        title: 'Ondansetron for Alcohol-Related Nausea and Vomiting',
                        content: 'Ondansetronul IV elimină greața și vărsăturile în 15-20 minute, permițând rehidratarea eficientă și recuperarea funcționalității.',
                    },
                    {
                        title: 'Electrolyte Depletion in Acute Alcohol Intoxication',
                        content: 'Alcoolul cauzează pierderi semnificative de magneziu, potasiu și sodiu. Înlocuirea IV restabilește echilibrul electrolitic și reduce cefaleea și oboseala.',
                    },
                ]}
                qualityBagImageSrc="/images-medelise/md-iv-drip/md-img-drip-hangover.webp"
        />


        <ContactFormSection />
    </>
    );
}
