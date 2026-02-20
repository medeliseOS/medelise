'use client';

import ServiceHero from './ServiceHero';
import ServiceSectionHeader from './ServiceSectionHeader';
import ServiceRoleTabs from './ServiceRoleTabs';

export default function ServiciiLaboratorContent() {
    return (
        <main>
            <ServiceHero
                title="Servicii de laborator la domiciliu – analize precise, fără cozi"
                description={`Recoltări de sânge, urină și alte probe biologice la domiciliu, cu rezultate rapide transmise digital. Colaborăm cu laboratoare acreditate pentru acuratețe maximă.

Analizele tale, în confortul casei tale – rapid, sigur și fără stress.`}
                imageSrc="/images-medelise/md-hero/ASISTENTA MEDICALA SPECIALIZATA ( ASISTENT )/_Gallery Features Base.svg"
                imageAlt="Asistentă medicală Medelise recoltând probe de sânge la domiciliul pacientului"
            />

            <ServiceSectionHeader
                title="Recoltări biologice la domiciliu cu rezultate digitale rapide"
                description="Recoltări de sânge, urină și alte probe biologice efectuate în condiții sterile, cu rezultate transmise digital prin laboratoare acreditate."
            />

            <ServiceRoleTabs />

            {/* More sections will be added here */}
        </main>
    );
}
