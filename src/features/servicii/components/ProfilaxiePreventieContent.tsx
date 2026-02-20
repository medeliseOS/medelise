'use client';

import ServiceHero from './ServiceHero';

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

            {/* Sections will be added here */}
        </main>
    );
}
