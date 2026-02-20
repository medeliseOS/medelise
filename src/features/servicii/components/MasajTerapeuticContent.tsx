'use client';

import ServiceHero from './ServiceHero';

export default function MasajTerapeuticContent() {
    return (
        <main>
            <ServiceHero
                title="Masaj terapeutic & relaxare – echilibru fizic și mental, la tine acasă"
                description={`Masaj decontracturant, terapeutic, drenaj limfatic și tehnici de relaxare profundă, realizate de terapeuți cu experiență clinică. Ședințele sunt personalizate în funcție de afecțiune și obiective.

Corpul tău are nevoie de îngrijire profesională, nu doar de relaxare.`}
                imageSrc="/images-medelise/md-hero/ASISTENTA MEDICALA SPECIALIZATA ( ASISTENT )/_Gallery Features Base.svg"
                imageAlt="Terapeut Medelise realizând masaj terapeutic decontracturant la domiciliu"
            />

            {/* Sections will be added here */}
        </main>
    );
}
