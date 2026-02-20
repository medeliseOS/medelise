'use client';

import ServiceHero from './ServiceHero';
import ServiceSectionHeader from './ServiceSectionHeader';
import ServiceRoleTabs from './ServiceRoleTabs';

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

            <ServiceSectionHeader
                title="Servicii și proceduri la domiciliu – realizate de asistenți medicali autorizați"
                description="Proceduri sigure și standardizate, efectuate la domiciliu de asistenți medicali specializați, conform protocoalelor medicale internaționale."
            />

            <ServiceRoleTabs />

            {/* More sections will be added here */}
        </main>
    );
}
