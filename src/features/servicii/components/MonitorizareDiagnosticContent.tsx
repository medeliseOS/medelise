'use client';

import ServiceHero from './ServiceHero';
import ServiceSectionHeader from './ServiceSectionHeader';

export default function MonitorizareDiagnosticContent() {
    return (
        <main>
            <ServiceHero
                title="Monitorizare & Diagnostic la domiciliu – siguranța datelor clinice, în confortul tău"
                description={`Echipa Medelise vine la tine acasă pentru măsurarea parametrilor vitali, EKG, pulsoximetrie, glicemie și tensiune arterială. Toate valorile sunt înregistrate digital și transmise medicului curant în timp real.

Prevenția începe cu monitorizarea corectă.`}
                imageSrc="/images-medelise/md-hero/ASISTENTA MEDICALA SPECIALIZATA ( ASISTENT )/_Gallery Features Base.svg"
                imageAlt="Asistentă medicală Medelise monitorizând parametrii vitali ai unui pacient la domiciliu"
            />

            <ServiceSectionHeader
                title="Monitorizare medicală completă – parametri vitali, EKG și analize rapide"
                description="Verificări precise și non-invazive ale stării de sănătate, efectuate cu echipament profesional la domiciliu de asistenți medicali certificați."
            />

            {/* More sections will be added here */}
        </main>
    );
}
