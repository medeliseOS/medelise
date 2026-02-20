'use client';

import ServiceHero from './ServiceHero';

export default function AdministrareTratamenteContent() {
    return (
        <main>
            <ServiceHero
                title="Administrare profesională a tratamentelor – standard de clinică, la domiciliu"
                description={`Servicii medicale executate de personal calificat Medvita, conform protocoalelor internaționale. Administrăm tratamente complexe, ajustăm dozele prescrise, monitorizăm reacțiile și asigurăm continuitatea terapeutică, direct la tine acasă.

Îți garantăm siguranță, precizie și zero erori în administrare.`}
                imageSrc="/images-medelise/md-hero/ASISTENTA MEDICALA SPECIALIZATA ( ASISTENT )/_Gallery Features Base.svg"
                imageAlt="Asistentă medicală Medelise administrând un tratament intravenos la domiciliu"
            />

            {/* Sections will be added here */}
        </main>
    );
}
