'use client';

import ServiceHero from './ServiceHero';

export default function TelemedicinaContent() {
    return (
        <main>
            <ServiceHero
                title="Telemedicină – consultații medicale oriunde, oricând"
                description={`Consulturi video cu medici specialiști, interpretare analize, prescripții digitale și monitorizare la distanță. Platforma Medelise conectează pacientul cu medicul, fără bariere geografice.

Medicina viitorului este digitală. Cu Medelise, viitorul e deja aici.`}
                imageSrc="/images-medelise/md-hero/ASISTENTA MEDICALA SPECIALIZATA ( ASISTENT )/_Gallery Features Base.svg"
                imageAlt="Pacient în consultație video cu un medic specialist pe platforma Medelise"
            />

            {/* Sections will be added here */}
        </main>
    );
}
