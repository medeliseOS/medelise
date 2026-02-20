'use client';

import ServiceHero from './ServiceHero';
import ServiceSectionHeader from './ServiceSectionHeader';
import ServiceRoleTabs from './ServiceRoleTabs';

export default function KinetoterapieRecuperareContent() {
    return (
        <main>
            <ServiceHero
                title="Kinetoterapie & Recuperare – mobilitate și funcționalitate, pas cu pas"
                description={`Kinetoterapeuți certificați vin la tine acasă pentru recuperare post-AVC, drenaj limfatic, reeducare mers și exerciții terapeutice personalizate. Fiecare ședință este adaptată progresului tău.

Recuperarea reală se face acolo unde te simți în siguranță – acasă.`}
                imageSrc="/images-medelise/md-hero/ASISTENTA MEDICALA SPECIALIZATA ( ASISTENT )/_Gallery Features Base.svg"
                imageAlt="Kinetoterapeut Medelise ghidând un pacient prin exerciții de recuperare la domiciliu"
            />

            <ServiceSectionHeader
                title="Programe de kinetoterapie și recuperare funcțională la domiciliu"
                description="Exerciții terapeutice, drenaj limfatic manual și reeducare neuromotorie realizate de kinetoterapeuți cu experiență clinică, adaptate fiecărei etape de recuperare."
            />

            <ServiceRoleTabs />

            {/* More sections will be added here */}
        </main>
    );
}
