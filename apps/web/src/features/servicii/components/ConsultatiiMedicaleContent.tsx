'use client';

import ServiceHero from './ServiceHero';
import ServiceSectionHeader from './ServiceSectionHeader';
import ServiceRoleTabs from './ServiceRoleTabs';

export default function ConsultatiiMedicaleContent() {
    return (
        <main>
            <ServiceHero
                title="Consultații medicale la domiciliu – expertiza clinică vine la tine"
                description={`Medici specialiști și medici de familie disponibili pentru consultații complete la domiciliul tău. Evaluare clinică, diagnostic, prescripție și plan de tratament – totul într-o singură vizită.

Sănătatea ta merită atenție personalizată, nu săli de așteptare.`}
                imageSrc="/images-medelise/md-hero/ASISTENTA MEDICALA SPECIALIZATA ( ASISTENT )/_Gallery Features Base.svg"
                imageAlt="Medic Medelise efectuând o consultație medicală la domiciliul pacientului"
            />

            <ServiceSectionHeader
                title="Consultații complete cu medici de familie și medici specialiști"
                description="Evaluare clinică, diagnostic diferențial, prescripție și plan terapeutic personalizat, realizate de medici cu experiență în practica la domiciliu."
            />

            <ServiceRoleTabs />

            {/* More sections will be added here */}
        </main>
    );
}
