'use client';

import ServiceHero from './ServiceHero';
import ServiceSectionHeader from './ServiceSectionHeader';

export default function PachetePlanuriContent() {
    return (
        <main>
            <ServiceHero
                title="Pachete & Planuri medicale – îngrijire continuă, structurată și accesibilă"
                description={`Pachete complete pentru pacienți postoperatorii, cronici și seniori. Planuri de îngrijire personalizate cu vizite regulate, monitorizare și raportare către medicul curant.

Îngrijirea de calitate nu trebuie să fie complicată. Noi o facem simplă.`}
                imageSrc="/images-medelise/md-hero/ASISTENTA MEDICALA SPECIALIZATA ( ASISTENT )/_Gallery Features Base.svg"
                imageAlt="Echipa medicală Medelise prezentând un plan de îngrijire personalizat unui pacient"
            />

            <ServiceSectionHeader
                title="Pachete de îngrijire structurate pentru fiecare etapă de viață"
                description="Planuri medicale personalizate cu vizite programate, monitorizare continuă și raportare digitală, destinate pacienților postoperatorii, cronici și seniori."
            />

            {/* More sections will be added here */}
        </main>
    );
}
