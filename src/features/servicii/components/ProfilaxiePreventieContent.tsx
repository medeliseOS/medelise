'use client';

import ServiceHero from './ServiceHero';
import ServiceSectionHeader from './ServiceSectionHeader';
import ServiceRoleTabs from './ServiceRoleTabs';

export default function ProfilaxiePreventieContent() {
    return (
        <main>
            <ServiceHero
                title="Profilaxie & Prevenție – sănătatea se construiește înainte de boală"
                description={`Programe personalizate de educație medicală, prevenție escare, evaluări periodice și screening la domiciliu. Echipa Medelise te ajută să previi complicațiile și să menții starea de sănătate optimă.

Prevenția inteligentă costă mai puțin decât tratamentul.`}
                imageSrc="/images-medelise/md-hero/ASISTENTA MEDICALA SPECIALIZATA ( ASISTENT )/_Gallery Features Base.svg"
                imageAlt="Asistentă medicală Medelise oferind consultanță de prevenție medicală unui pacient"
            />

            <ServiceSectionHeader
                title="Programe de prevenție medicală și educație pentru sănătate"
                description="Evaluări periodice, screening de rutină și programe educaționale concepute pentru a preveni complicațiile și a menține sănătatea optimă pe termen lung."
            />

            <ServiceRoleTabs />

            {/* More sections will be added here */}
        </main>
    );
}
