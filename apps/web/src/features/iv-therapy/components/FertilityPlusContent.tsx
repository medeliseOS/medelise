'use client';

import React from 'react';
import IVDripProductPage from './IVDripProductPage';
import { ContactFormSection } from '@features/contact/components';

export default function FertilityPlusContent() {
    return (
        <>
            <IVDripProductPage
            id="fertility-plus-iv"
            title="FERTILITY+"
            subtitle="Optimizare Celulară și Suport Reproductiv"
            imageSrc="/images-medelise/md-iv-drip/md-img-drip-fertility.webp"
            imageAlt="Fertility+ IV Drip"
            price={900}
            oldPrice={1600}
            volumeOptions={['500ml', '1000ml']}
            economyPerMl={['1,80 Lei/ml', '0,90 Lei/ml']}
            benefits={[
                'Reducerea stresului oxidativ celular',
                'Optimizarea calității ovulelor și spermei',
                'Suport hormonal natural și echilibrat',
                'Detoxifiere pentru pregătirea concepției',
                'Antioxidanți premium pentru sănătatea reproductivă',
                'Susținerea implantării și a sarcinii timpurii',
            ]}
            description={{
                title: 'IV Drip Fertility+ – Suport Premium pentru Fertilitate',
                intro: 'Fertility+ este un protocol IV specializat conceput pentru cuplurile care își doresc să optimizeze fertilitatea naturală sau care se pregătesc pentru proceduri de reproducere asistată (FIV/ICSI). Formula noastră combină antioxidanți puternici cu vitamine și minerale esențiale pentru sănătatea reproductivă.',
                sections: [
                    {
                        heading: 'Compoziție',
                        content: [
                            'Coenzima Q10 – energie celulară pentru ovocite și spermă',
                            'L-Carnitină – motilitate spermatică',
                            'Acid Folic (L-Metilfolat) – prevenirea defectelor de tub neural',
                            'Vitamina D3 – echilibru hormonal',
                            'Zinc – calitatea reproductivă',
                            'Seleniu – protecție antioxidantă',
                            'Vitamina E – protecția membranelor celulare',
                            'Glutation – detoxifiere preconceptională',
                            'N-Acetilcisteină (NAC)',
                        ],
                    },
                    {
                        heading: 'Durata tratamentului',
                        content: 'Perfuzia durează 60-90 de minute. Protocolul recomandat include 6-8 ședințe înainte de concepție sau al ciclului FIV, administrate săptămânal sau bisăptămânal.',
                    },
                    {
                        heading: 'Indicații',
                        content: [
                            'Pregătire preconceptională (femei și bărbați)',
                            'Pre și post-transfer embrionar (FIV/ICSI)',
                            'Calitate redusă a ovocitelor sau rezervă ovariană scăzută',
                            'Parametri spermatici sub optim',
                            'Avorturi spontane recurente',
                            'Endometrioză și PCOS (ca tratament adjuvant)',
                        ],
                    },
                ],
            }}
            reviews={[
                {
                    author: 'Ana și Mihai R.',
                    date: '1 Februarie 2025',
                    rating: 5,
                    text: 'După 2 ani de încercări și un FIV eșuat, am început protocolul Fertility+ înainte de al doilea FIV. Suntem acum în săptămâna 12 de sarcină! Nu știm dacă perfuzia a făcut diferența, dar suntem recunoscători.',
                },
                {
                    author: 'Dr. Elena Popescu, Specialist Fertilitate',
                    date: '15 Ianuarie 2025',
                    rating: 5,
                    text: 'Recomand Fertility+ pacientelor mele ca adjuvant. Compoziția este bine documentată și bazată pe evidențe. Colaborarea cu Medelise este excelentă.',
                },
                {
                    author: 'Cosmina L.',
                    date: '20 Decembrie 2024',
                    rating: 5,
                    text: 'Am făcut 8 ședințe cu soțul meu. Parametrii lui s-au îmbunătățit semnificativ la spermogramă. Personalul a fost foarte empatic și profesionist.',
                },
            ]}
            reviewCount={19}
            averageRating={5}
                idealForItems={[
                    'Cupluri aflate în planificarea naturală a sarcinii care doresc să optimizeze fertilitatea.',
                    'Paciente în pregătire pentru proceduri de FIV/ICSI sau post-transfer embrionar.',
                    'Bărbați cu parametri spermatici suboptimi (motilitate, morfologie, concentrație).',
                    'Persoane cu avorturi spontane recurente sau endometrioză care necesită suport antioxidant.',
                ]}
                clinicalStudies={[
                    {
                        title: 'Coenzyme Q10 and Female Reproductive Aging',
                        content: 'Suplimentarea cu CoQ10 îmbunătățește calitatea ovocitelor și rata de fertilizare la femeile peste 35 de ani, prin reducerea stresului oxidativ mitocondrial.',
                    },
                    {
                        title: 'Antioxidant Therapy in Male Infertility: A Cochrane Review',
                        content: 'Antioxidanții (vitamina E, seleniu, zinc, L-carnitină) îmbunătățesc semnificativ parametrii spermogramei și cresc rata de sarcină cu 4-5x.',
                    },
                    {
                        title: 'L-Methylfolate vs Folic Acid in Neural Tube Defect Prevention',
                        content: 'L-metilfolatul este forma bioactivă, eficientă inclusiv la femeile cu mutația MTHFR (40% din populație), eliminând riscul de conversie insuficientă.',
                    },
                    {
                        title: 'Glutathione and Oocyte Quality in Assisted Reproduction',
                        content: 'Glutationul reduce fragmentarea ADN-ului ovocitar și îmbunătățește dezvoltarea embrionară, crescând ratele de implantare cu 15-20%.',
                    },
                ]}
                qualityBagImageSrc="/images-medelise/md-iv-drip/md-img-drip-fertility.webp"
        />


        <ContactFormSection />
    </>
    );
}
