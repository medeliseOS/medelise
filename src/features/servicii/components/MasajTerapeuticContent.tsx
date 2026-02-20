'use client';

import ServiceHero from './ServiceHero';
import ServiceSectionHeader from './ServiceSectionHeader';

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

            <ServiceSectionHeader
                title="Tehnici profesionale de masaj terapeutic și relaxare profundă"
                description="Masaj decontracturant, terapeutic medical și drenaj limfatic manual efectuate de specialiști cu formare clinică, adaptate nevoilor fiecărui pacient."
            />

            {/* More sections will be added here */}
        </main>
    );
}
