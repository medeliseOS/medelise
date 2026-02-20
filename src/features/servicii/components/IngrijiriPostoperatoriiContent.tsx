'use client';

import ServiceHero from './ServiceHero';

export default function IngrijiriPostoperatoriiContent() {
    return (
        <main>
            <ServiceHero
                title="Îngrijiri postoperatorii & plăgi – recuperare accelerată, la domiciliu"
                description={`Pansamente sterile, îngrijirea escarelor, suturilor și plăgilor complexe – toate realizate de asistenți medicali cu experiență în chirurgie generală și ortopedie.

Reducem riscul de infecție și accelerăm vindecarea, fără deplasări inutile la spital.`}
                imageSrc="/images-medelise/md-hero/ASISTENTA MEDICALA SPECIALIZATA ( ASISTENT )/_Gallery Features Base.svg"
                imageAlt="Asistentă medicală Medelise realizând pansamentul unei plăgi postoperatorii la domiciliu"
            />

            {/* Sections will be added here */}
        </main>
    );
}
