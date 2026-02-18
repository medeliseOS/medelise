'use client';

import React from 'react';
import IVDripProductPage from './IVDripProductPage';

export default function CalmareaMigrenelorContent() {
    return (
        <IVDripProductPage
            id="calmarea-migrenelor-iv"
            title="CALMAREA MIGRENELOR"
            subtitle="Relaxare Neurovasculară și Ameliorare Rapidă"
            imageSrc="/images-medelise/md-iv-drip/md-img-drip-headache-relief.webp"
            imageAlt="Calmarea Migrenelor IV Drip"
            price={550}
            oldPrice={750}
            volumeOptions={['500ml', '1000ml']}
            economyPerMl={['1,10 Lei/ml', '0,55 Lei/ml']}
            benefits={[
                'Ameliorare rapidă a migrenei și cefaleei',
                'Relaxare neurovasculară naturală',
                'Reducerea sensibilității la lumină și zgomot',
                'Hidratare care susține circulația cerebrală',
                'Efect antiinflamator și analgezic',
                'Prevenirea recurenței episoadelor de migrenă',
            ]}
            description={{
                title: 'IV Drip Calmarea Migrenelor – Ameliorare Rapidă și Prevenție',
                intro: 'Migrena nu este doar o durere de cap – este o afecțiune neurologică debilitantă. Tratamentul nostru IV Drip acționează direct asupra mecanismelor vasculare și inflamatorii ale migrenei, oferind ameliorare când medicamentele orale nu sunt suficiente sau nu pot fi tolerate.',
                sections: [
                    {
                        heading: 'Compoziție',
                        content: [
                            'Magneziu sulfat (relaxant neurovascular)',
                            'Ketorolac (antiinflamator puternic)',
                            'Ondansetron (pentru greența asociată migrenei)',
                            'Complex de vitamine B (neuroprotectoare)',
                            'Vitamina B2 (Riboflavină) – dovedită în prevenția migrenei',
                            'Soluție salină pentru hidratare optimă',
                        ],
                    },
                    {
                        heading: 'Durata tratamentului',
                        content: 'Perfuzia durează 45-60 de minute. Majoritatea pacienților raportează ameliorare semnificativă în primele 20-30 de minute de la începerea tratamentului.',
                    },
                    {
                        heading: 'Indicații',
                        content: [
                            'Migrenă acută cu sau fără aură',
                            'Cefalee de tensiune severă',
                            'Cefalee prin abuz medicamentos',
                            'Migrenă menstruală',
                            'Cefalee post-traumatică (cu aviz medical)',
                            'Prevenție la pacienții cu migrene frecvente',
                        ],
                    },
                ],
            }}
            reviews={[
                {
                    author: 'Raluca C.',
                    date: '7 Februarie 2025',
                    rating: 5,
                    text: 'Sufăr de migrene cronice de 10 ani. Nicio pastilă nu ajuta în crize severe. Perfuzia Medelise este singurul lucru care mă scoate din criză rapid. Sunt recunoscătoare!',
                },
                {
                    author: 'Daniel M.',
                    date: '18 Ianuarie 2025',
                    rating: 5,
                    text: 'Am chemat echipa la 3 dimineața în plină criză de migrenă. Au venit în 90 de minute și după perfuzie am putut în sfârșit să dorm. Serviciu salvator!',
                },
                {
                    author: 'Irina T.',
                    date: '2 Ianuarie 2025',
                    rating: 4,
                    text: 'Funcționează excelent! Am redus frecvența migrenelor cu perfuzii preventive lunare. Diferența este enormă față de tratamentul oral.',
                },
            ]}
            reviewCount={33}
            averageRating={5}
        />
    );
}
