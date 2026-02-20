/**
 * Propagates ServiceHero to all 12 service content pages
 * with unique, page-specific title + description + image.
 *
 * Usage: node scripts/propagate-service-hero.mjs
 */

import { writeFileSync } from 'fs';
import { join } from 'path';

const DIR = join(process.cwd(), 'src/features/servicii/components');

// The only hero image currently available
const HERO_IMG = '/images-medelise/md-hero/ASISTENTA MEDICALA SPECIALIZATA ( ASISTENT )/_Gallery Features Base.svg';

const PAGES = [
    {
        file: 'MonitorizareDiagnosticContent.tsx',
        component: 'MonitorizareDiagnosticContent',
        title: 'Monitorizare & Diagnostic la domiciliu – siguranța datelor clinice, în confortul tău',
        desc: `Echipa Medelise vine la tine acasă pentru măsurarea parametrilor vitali, EKG, pulsoximetrie, glicemie și tensiune arterială. Toate valorile sunt înregistrate digital și transmise medicului curant în timp real.\n\nPrevenția începe cu monitorizarea corectă.`,
        alt: 'Asistentă medicală Medelise monitorizând parametrii vitali ai unui pacient la domiciliu',
    },
    {
        file: 'IngrijiriPostoperatoriiContent.tsx',
        component: 'IngrijiriPostoperatoriiContent',
        title: 'Îngrijiri postoperatorii & plăgi – recuperare accelerată, la domiciliu',
        desc: `Pansamente sterile, îngrijirea escarelor, suturilor și plăgilor complexe – toate realizate de asistenți medicali cu experiență în chirurgie generală și ortopedie.\n\nReducem riscul de infecție și accelerăm vindecarea, fără deplasări inutile la spital.`,
        alt: 'Asistentă medicală Medelise realizând pansamentul unei plăgi postoperatorii la domiciliu',
    },
    {
        file: 'AdministrareTratamenteContent.tsx',
        component: 'AdministrareTratamenteContent',
        title: 'Administrare profesională a tratamentelor – standard de clinică, la domiciliu',
        desc: `Servicii medicale executate de personal calificat Medvita, conform protocoalelor internaționale. Administrăm tratamente complexe, ajustăm dozele prescrise, monitorizăm reacțiile și asigurăm continuitatea terapeutică, direct la tine acasă.\n\nÎți garantăm siguranță, precizie și zero erori în administrare.`,
        alt: 'Asistentă medicală Medelise administrând un tratament intravenos la domiciliu',
    },
    {
        file: 'ConsultatiiMedicaleContent.tsx',
        component: 'ConsultatiiMedicaleContent',
        title: 'Consultații medicale la domiciliu – expertiza clinică vine la tine',
        desc: `Medici specialiști și medici de familie disponibili pentru consultații complete la domiciliul tău. Evaluare clinică, diagnostic, prescripție și plan de tratament – totul într-o singură vizită.\n\nSănătatea ta merită atenție personalizată, nu săli de așteptare.`,
        alt: 'Medic Medelise efectuând o consultație medicală la domiciliul pacientului',
    },
    {
        file: 'KinetoterapieRecuperareContent.tsx',
        component: 'KinetoterapieRecuperareContent',
        title: 'Kinetoterapie & Recuperare – mobilitate și funcționalitate, pas cu pas',
        desc: `Kinetoterapeuți certificați vin la tine acasă pentru recuperare post-AVC, drenaj limfatic, reeducare mers și exerciții terapeutice personalizate. Fiecare ședință este adaptată progresului tău.\n\nRecuperarea reală se face acolo unde te simți în siguranță – acasă.`,
        alt: 'Kinetoterapeut Medelise ghidând un pacient prin exerciții de recuperare la domiciliu',
    },
    {
        file: 'MasajTerapeuticContent.tsx',
        component: 'MasajTerapeuticContent',
        title: 'Masaj terapeutic & relaxare – echilibru fizic și mental, la tine acasă',
        desc: `Masaj decontracturant, terapeutic, drenaj limfatic și tehnici de relaxare profundă, realizate de terapeuți cu experiență clinică. Ședințele sunt personalizate în funcție de afecțiune și obiective.\n\nCorpul tău are nevoie de îngrijire profesională, nu doar de relaxare.`,
        alt: 'Terapeut Medelise realizând masaj terapeutic decontracturant la domiciliu',
    },
    {
        file: 'ProfilaxiePreventieContent.tsx',
        component: 'ProfilaxiePreventieContent',
        title: 'Profilaxie & Prevenție – sănătatea se construiește înainte de boală',
        desc: `Programe personalizate de educație medicală, prevenție escare, evaluări periodice și screening la domiciliu. Echipa Medelise te ajută să previi complicațiile și să menții starea de sănătate optimă.\n\nPrevenția inteligentă costă mai puțin decât tratamentul.`,
        alt: 'Asistentă medicală Medelise oferind consultanță de prevenție medicală unui pacient',
    },
    {
        file: 'PachetePlanuriContent.tsx',
        component: 'PachetePlanuriContent',
        title: 'Pachete & Planuri medicale – îngrijire continuă, structurată și accesibilă',
        desc: `Pachete complete pentru pacienți postoperatorii, cronici și seniori. Planuri de îngrijire personalizate cu vizite regulate, monitorizare și raportare către medicul curant.\n\nÎngrijirea de calitate nu trebuie să fie complicată. Noi o facem simplă.`,
        alt: 'Echipa medicală Medelise prezentând un plan de îngrijire personalizat unui pacient',
    },
    {
        file: 'IngrijireSenioriContent.tsx',
        component: 'IngrijireSenioriContent',
        title: 'Îngrijire seniori & paliativă – demnitate, empatie și profesionalism',
        desc: `Îngrijiri complexe pentru pacienți vârstnici, cronici sau aflați în stadii terminale. Asistență medicală, suport emoțional, gestionarea durerii și comunicare permanentă cu familia.\n\nFiecare persoană merită îngrijire cu respect, până în ultimul moment.`,
        alt: 'Asistentă medicală Medelise oferind îngrijire paliativă unui pacient senior la domiciliu',
    },
    {
        file: 'IngrijiriSuportConfortContent.tsx',
        component: 'IngrijiriSuportConfortContent',
        title: 'Îngrijiri de suport & confort – demnitate în fiecare gest de îngrijire',
        desc: `Toaletă, igienă personală, mobilizare ușoară, alimentație asistată și suport pentru activitățile zilnice. Personal format, empatic și dedicat, disponibil la domiciliu.\n\nConfortul nu e un lux – e un drept. Noi îl asigurăm cu profesionalism.`,
        alt: 'Asistentă Medelise oferind sprijin și îngrijire de confort unui pacient la domiciliu',
    },
    {
        file: 'ServiciiLaboratorContent.tsx',
        component: 'ServiciiLaboratorContent',
        title: 'Servicii de laborator la domiciliu – analize precise, fără cozi',
        desc: `Recoltări de sânge, urină și alte probe biologice la domiciliu, cu rezultate rapide transmise digital. Colaborăm cu laboratoare acreditate pentru acuratețe maximă.\n\nAnalizele tale, în confortul casei tale – rapid, sigur și fără stress.`,
        alt: 'Asistentă medicală Medelise recoltând probe de sânge la domiciliul pacientului',
    },
    {
        file: 'TelemedicinaContent.tsx',
        component: 'TelemedicinaContent',
        title: 'Telemedicină – consultații medicale oriunde, oricând',
        desc: `Consulturi video cu medici specialiști, interpretare analize, prescripții digitale și monitorizare la distanță. Platforma Medelise conectează pacientul cu medicul, fără bariere geografice.\n\nMedicina viitorului este digitală. Cu Medelise, viitorul e deja aici.`,
        alt: 'Pacient în consultație video cu un medic specialist pe platforma Medelise',
    },
];

for (const page of PAGES) {
    const code = `'use client';

import ServiceHero from './ServiceHero';

export default function ${page.component}() {
    return (
        <main>
            <ServiceHero
                title="${page.title}"
                description={\`${page.desc}\`}
                imageSrc="${HERO_IMG}"
                imageAlt="${page.alt}"
            />

            {/* Sections will be added here */}
        </main>
    );
}
`;
    writeFileSync(join(DIR, page.file), code, 'utf-8');
    console.log(`✅ ${page.file}`);
}

console.log(`\nDone: ${PAGES.length} pages updated`);
