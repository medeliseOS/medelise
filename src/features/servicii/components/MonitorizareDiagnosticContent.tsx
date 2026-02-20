'use client';

import ServiceHero from './ServiceHero';

export default function MonitorizareDiagnosticContent() {
    return (
        <main>
            <ServiceHero
                title="Administrare profesională a tratamentelor – standard de clinică, la domiciliu"
                description={`Servicii medicale executate de personal calificat Medvita, conform protocoalelor internaționale. Administrăm tratamente complexe, ajustăm dozele prescrise, monitorizăm reacțiile și asigurăm continuitatea terapeutică, direct la tine acasă.\n\nÎți garantăm siguranță, precizie și zero erori în administrare.`}
                imageSrc="/images-medelise/md-hero/ASISTENTA MEDICALA SPECIALIZATA ( ASISTENT )/_Gallery Features Base.svg"
                imageAlt="Asistentă medicală Medelise în timpul unei consultații la domiciliu"
            />

            {/* Sections will be added here */}
        </main>
    );
}
