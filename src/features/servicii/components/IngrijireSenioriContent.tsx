'use client';

import ServiceHero from './ServiceHero';

export default function IngrijireSenioriContent() {
    return (
        <main>
            <ServiceHero
                title="Îngrijire seniori & paliativă – demnitate, empatie și profesionalism"
                description={`Îngrijiri complexe pentru pacienți vârstnici, cronici sau aflați în stadii terminale. Asistență medicală, suport emoțional, gestionarea durerii și comunicare permanentă cu familia.

Fiecare persoană merită îngrijire cu respect, până în ultimul moment.`}
                imageSrc="/images-medelise/md-hero/ASISTENTA MEDICALA SPECIALIZATA ( ASISTENT )/_Gallery Features Base.svg"
                imageAlt="Asistentă medicală Medelise oferind îngrijire paliativă unui pacient senior la domiciliu"
            />

            {/* Sections will be added here */}
        </main>
    );
}
