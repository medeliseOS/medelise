'use client';

import React from 'react';
import IVDripProductPage from './IVDripProductPage';

export default function DeshidratareContent() {
    return (
        <IVDripProductPage
            id="deshidratare-iv"
            title="DESHIDRATARE"
            subtitle="Revitalizează și Rehidratează"
            imageSrc="/images/iv-drip/Photo.svg"
            imageAlt="Deshidratare IV Drip"
            price={300}
            oldPrice={450}
            volumeOptions={['500ml', '1000ml']}
            economyPerMl={['0,50 Lei/ml', '0,25 Lei/ml']}
            benefits={[
                'Rehidratare rapidă și eficientă',
                'Restabilirea echilibrului de electroliți',
                'Îmbunătățirea nivelului de energie',
                'Claritate mentală crescută',
                'Recuperare mai rapidă după efort, boală sau expunere la căldură',
                'Ameliorarea simptomelor precum oboseală, amețeală, greață și cefalee',
            ]}
            description={{
                title: 'IV Drip Deshidratare – Rehidratare Rapidă și Eficientă',
                intro: 'Tratamentul IV Drip Deshidratare de la Medelise este soluția perfectă pentru rehidratarea rapidă a organismului. Administrat intravenos, acest cocktail de fluide și electroliți esențiali ajunge direct în fluxul sanguin, oferind o hidratare mult mai eficientă decât consumul oral de lichide.',
                sections: [
                    {
                        heading: 'Compoziție',
                        content: [
                            'Soluție salină (NaCl 0,9%)',
                            'Electroliți esențiali (Sodiu, Potasiu, Magneziu)',
                            'Vitamina C pentru susținerea imunității',
                            'Complex de vitamine B pentru energie',
                        ],
                    },
                    {
                        heading: 'Durata tratamentului',
                        content: 'Perfuzia durează aproximativ 30-60 de minute, în funcție de volumul ales (500ml sau 1000ml). Tratamentul este administrat în confortul propriei locuințe de către personalul nostru medical certificat.',
                    },
                    {
                        heading: 'Indicații',
                        content: [
                            'Deshidratare cauzată de efort fizic intens',
                            'Recuperare după gastroenterită sau viroze',
                            'Expunere prelungită la căldură',
                            'Oboseală cronică și lipsă de energie',
                            'Jet lag sau călătorii lungi',
                            'Post-intervenții chirurgicale (cu recomandare medicală)',
                        ],
                    },
                ],
            }}
            reviews={[
                {
                    author: 'Maria P.',
                    date: '15 Ianuarie 2025',
                    rating: 5,
                    text: 'Excelent! Am apelat la acest tratament după o gastroenterită severă și m-am simțit mult mai bine în câteva ore. Personalul a fost foarte profesionist și m-a făcut să mă simt confortabil pe toată durata perfuziei.',
                },
                {
                    author: 'Andrei V.',
                    date: '3 Februarie 2025',
                    rating: 5,
                    text: 'Folosesc acest serviciu regulat după antrenamentele intense de maraton. Recuperarea este mult mai rapidă comparativ cu hidratarea orală. Recomand cu încredere!',
                },
                {
                    author: 'Elena D.',
                    date: '20 Decembrie 2024',
                    rating: 4,
                    text: 'Serviciu bun, am simțit diferența imediat. Singurul motiv pentru care nu dau 5 stele este prețul, dar calitatea justifică investiția.',
                },
            ]}
            reviewCount={46}
            averageRating={5}
            idealForItems={[
                'Sportivi sau persoane active care pierd lichide prin transpirație intensă.',
                'Participanți la evenimente în aer liber, festivaluri, competiții sau călătorii lungi.',
                'Profesioniști expuși stresului, lipsei de somn sau alimentației neregulate.',
                'Pacienți cu stare generală de oboseală, amețeală sau dureri de cap cauzate de deficitul de lichide.',
            ]}
        />
    );
}
