'use client';

import ServiceHero from './ServiceHero';
import ServiceSectionHeader from './ServiceSectionHeader';

export default function IngrijiriSuportConfortContent() {
    return (
        <main>
            <ServiceHero
                title="Îngrijiri de suport & confort – demnitate în fiecare gest de îngrijire"
                description={`Toaletă, igienă personală, mobilizare ușoară, alimentație asistată și suport pentru activitățile zilnice. Personal format, empatic și dedicat, disponibil la domiciliu.

Confortul nu e un lux – e un drept. Noi îl asigurăm cu profesionalism.`}
                imageSrc="/images-medelise/md-hero/ASISTENTA MEDICALA SPECIALIZATA ( ASISTENT )/_Gallery Features Base.svg"
                imageAlt="Asistentă Medelise oferind sprijin și îngrijire de confort unui pacient la domiciliu"
            />

            <ServiceSectionHeader
                title="Servicii de suport pentru confort și activități zilnice"
                description="Toaletă, igienă, mobilizare asistată și suport nutrițional realizate de personal empatic și calificat, pentru menținerea demnității și confortului zilnic."
            />

            {/* More sections will be added here */}
        </main>
    );
}
