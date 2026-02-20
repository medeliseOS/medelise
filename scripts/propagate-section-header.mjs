/**
 * Adds ServiceSectionHeader to all 12 service pages with page-specific content.
 *
 * Usage: node scripts/propagate-section-header.mjs
 */

import { writeFileSync } from 'fs';
import { join } from 'path';

const DIR = join(process.cwd(), 'src/features/servicii/components');
const HERO_IMG = '/images-medelise/md-hero/ASISTENTA MEDICALA SPECIALIZATA ( ASISTENT )/_Gallery Features Base.svg';

const PAGES = [
    {
        file: 'MonitorizareDiagnosticContent.tsx',
        component: 'MonitorizareDiagnosticContent',
        heroTitle: 'Monitorizare & Diagnostic la domiciliu – siguranța datelor clinice, în confortul tău',
        heroDesc: `Echipa Medelise vine la tine acasă pentru măsurarea parametrilor vitali, EKG, pulsoximetrie, glicemie și tensiune arterială. Toate valorile sunt înregistrate digital și transmise medicului curant în timp real.\n\nPrevenția începe cu monitorizarea corectă.`,
        heroAlt: 'Asistentă medicală Medelise monitorizând parametrii vitali ai unui pacient la domiciliu',
        sectionTitle: 'Monitorizare medicală completă – parametri vitali, EKG și analize rapide',
        sectionDesc: 'Verificări precise și non-invazive ale stării de sănătate, efectuate cu echipament profesional la domiciliu de asistenți medicali certificați.',
    },
    {
        file: 'IngrijiriPostoperatoriiContent.tsx',
        component: 'IngrijiriPostoperatoriiContent',
        heroTitle: 'Îngrijiri postoperatorii & plăgi – recuperare accelerată, la domiciliu',
        heroDesc: `Pansamente sterile, îngrijirea escarelor, suturilor și plăgilor complexe – toate realizate de asistenți medicali cu experiență în chirurgie generală și ortopedie.\n\nReducem riscul de infecție și accelerăm vindecarea, fără deplasări inutile la spital.`,
        heroAlt: 'Asistentă medicală Medelise realizând pansamentul unei plăgi postoperatorii la domiciliu',
        sectionTitle: 'Îngrijirea profesională a plăgilor și recuperarea postoperatorie',
        sectionDesc: 'Pansamente, tușeuri, îngrijire escare și monitorizare post-chirurgicală efectuate cu materiale sterile și protocoale spitalicești, la domiciliu.',
    },
    {
        file: 'AdministrareTratamenteContent.tsx',
        component: 'AdministrareTratamenteContent',
        heroTitle: 'Administrare profesională a tratamentelor – standard de clinică, la domiciliu',
        heroDesc: `Servicii medicale executate de personal calificat Medvita, conform protocoalelor internaționale. Administrăm tratamente complexe, ajustăm dozele prescrise, monitorizăm reacțiile și asigurăm continuitatea terapeutică, direct la tine acasă.\n\nÎți garantăm siguranță, precizie și zero erori în administrare.`,
        heroAlt: 'Asistentă medicală Medelise administrând un tratament intravenos la domiciliu',
        sectionTitle: 'Servicii și proceduri la domiciliu – realizate de asistenți medicali autorizați',
        sectionDesc: 'Proceduri sigure și standardizate, efectuate la domiciliu de asistenți medicali specializați, conform protocoalelor medicale internaționale.',
    },
    {
        file: 'ConsultatiiMedicaleContent.tsx',
        component: 'ConsultatiiMedicaleContent',
        heroTitle: 'Consultații medicale la domiciliu – expertiza clinică vine la tine',
        heroDesc: `Medici specialiști și medici de familie disponibili pentru consultații complete la domiciliul tău. Evaluare clinică, diagnostic, prescripție și plan de tratament – totul într-o singură vizită.\n\nSănătatea ta merită atenție personalizată, nu săli de așteptare.`,
        heroAlt: 'Medic Medelise efectuând o consultație medicală la domiciliul pacientului',
        sectionTitle: 'Consultații complete cu medici de familie și medici specialiști',
        sectionDesc: 'Evaluare clinică, diagnostic diferențial, prescripție și plan terapeutic personalizat, realizate de medici cu experiență în practica la domiciliu.',
    },
    {
        file: 'KinetoterapieRecuperareContent.tsx',
        component: 'KinetoterapieRecuperareContent',
        heroTitle: 'Kinetoterapie & Recuperare – mobilitate și funcționalitate, pas cu pas',
        heroDesc: `Kinetoterapeuți certificați vin la tine acasă pentru recuperare post-AVC, drenaj limfatic, reeducare mers și exerciții terapeutice personalizate. Fiecare ședință este adaptată progresului tău.\n\nRecuperarea reală se face acolo unde te simți în siguranță – acasă.`,
        heroAlt: 'Kinetoterapeut Medelise ghidând un pacient prin exerciții de recuperare la domiciliu',
        sectionTitle: 'Programe de kinetoterapie și recuperare funcțională la domiciliu',
        sectionDesc: 'Exerciții terapeutice, drenaj limfatic manual și reeducare neuromotorie realizate de kinetoterapeuți cu experiență clinică, adaptate fiecărei etape de recuperare.',
    },
    {
        file: 'MasajTerapeuticContent.tsx',
        component: 'MasajTerapeuticContent',
        heroTitle: 'Masaj terapeutic & relaxare – echilibru fizic și mental, la tine acasă',
        heroDesc: `Masaj decontracturant, terapeutic, drenaj limfatic și tehnici de relaxare profundă, realizate de terapeuți cu experiență clinică. Ședințele sunt personalizate în funcție de afecțiune și obiective.\n\nCorpul tău are nevoie de îngrijire profesională, nu doar de relaxare.`,
        heroAlt: 'Terapeut Medelise realizând masaj terapeutic decontracturant la domiciliu',
        sectionTitle: 'Tehnici profesionale de masaj terapeutic și relaxare profundă',
        sectionDesc: 'Masaj decontracturant, terapeutic medical și drenaj limfatic manual efectuate de specialiști cu formare clinică, adaptate nevoilor fiecărui pacient.',
    },
    {
        file: 'ProfilaxiePreventieContent.tsx',
        component: 'ProfilaxiePreventieContent',
        heroTitle: 'Profilaxie & Prevenție – sănătatea se construiește înainte de boală',
        heroDesc: `Programe personalizate de educație medicală, prevenție escare, evaluări periodice și screening la domiciliu. Echipa Medelise te ajută să previi complicațiile și să menții starea de sănătate optimă.\n\nPrevenția inteligentă costă mai puțin decât tratamentul.`,
        heroAlt: 'Asistentă medicală Medelise oferind consultanță de prevenție medicală unui pacient',
        sectionTitle: 'Programe de prevenție medicală și educație pentru sănătate',
        sectionDesc: 'Evaluări periodice, screening de rutină și programe educaționale concepute pentru a preveni complicațiile și a menține sănătatea optimă pe termen lung.',
    },
    {
        file: 'PachetePlanuriContent.tsx',
        component: 'PachetePlanuriContent',
        heroTitle: 'Pachete & Planuri medicale – îngrijire continuă, structurată și accesibilă',
        heroDesc: `Pachete complete pentru pacienți postoperatorii, cronici și seniori. Planuri de îngrijire personalizate cu vizite regulate, monitorizare și raportare către medicul curant.\n\nÎngrijirea de calitate nu trebuie să fie complicată. Noi o facem simplă.`,
        heroAlt: 'Echipa medicală Medelise prezentând un plan de îngrijire personalizat unui pacient',
        sectionTitle: 'Pachete de îngrijire structurate pentru fiecare etapă de viață',
        sectionDesc: 'Planuri medicale personalizate cu vizite programate, monitorizare continuă și raportare digitală, destinate pacienților postoperatorii, cronici și seniori.',
    },
    {
        file: 'IngrijireSenioriContent.tsx',
        component: 'IngrijireSenioriContent',
        heroTitle: 'Îngrijire seniori & paliativă – demnitate, empatie și profesionalism',
        heroDesc: `Îngrijiri complexe pentru pacienți vârstnici, cronici sau aflați în stadii terminale. Asistență medicală, suport emoțional, gestionarea durerii și comunicare permanentă cu familia.\n\nFiecare persoană merită îngrijire cu respect, până în ultimul moment.`,
        heroAlt: 'Asistentă medicală Medelise oferind îngrijire paliativă unui pacient senior la domiciliu',
        sectionTitle: 'Îngrijire specializată pentru seniori și pacienți paliativ',
        sectionDesc: 'Asistență medicală complexă, gestionarea durerii, suport emoțional și comunicare transparentă cu familia, pentru pacienți vârstnici sau aflați în stadii terminale.',
    },
    {
        file: 'IngrijiriSuportConfortContent.tsx',
        component: 'IngrijiriSuportConfortContent',
        heroTitle: 'Îngrijiri de suport & confort – demnitate în fiecare gest de îngrijire',
        heroDesc: `Toaletă, igienă personală, mobilizare ușoară, alimentație asistată și suport pentru activitățile zilnice. Personal format, empatic și dedicat, disponibil la domiciliu.\n\nConfortul nu e un lux – e un drept. Noi îl asigurăm cu profesionalism.`,
        heroAlt: 'Asistentă Medelise oferind sprijin și îngrijire de confort unui pacient la domiciliu',
        sectionTitle: 'Servicii de suport pentru confort și activități zilnice',
        sectionDesc: 'Toaletă, igienă, mobilizare asistată și suport nutrițional realizate de personal empatic și calificat, pentru menținerea demnității și confortului zilnic.',
    },
    {
        file: 'ServiciiLaboratorContent.tsx',
        component: 'ServiciiLaboratorContent',
        heroTitle: 'Servicii de laborator la domiciliu – analize precise, fără cozi',
        heroDesc: `Recoltări de sânge, urină și alte probe biologice la domiciliu, cu rezultate rapide transmise digital. Colaborăm cu laboratoare acreditate pentru acuratețe maximă.\n\nAnalizele tale, în confortul casei tale – rapid, sigur și fără stress.`,
        heroAlt: 'Asistentă medicală Medelise recoltând probe de sânge la domiciliul pacientului',
        sectionTitle: 'Recoltări biologice la domiciliu cu rezultate digitale rapide',
        sectionDesc: 'Recoltări de sânge, urină și alte probe biologice efectuate în condiții sterile, cu rezultate transmise digital prin laboratoare acreditate.',
    },
    {
        file: 'TelemedicinaContent.tsx',
        component: 'TelemedicinaContent',
        heroTitle: 'Telemedicină – consultații medicale oriunde, oricând',
        heroDesc: `Consulturi video cu medici specialiști, interpretare analize, prescripții digitale și monitorizare la distanță. Platforma Medelise conectează pacientul cu medicul, fără bariere geografice.\n\nMedicina viitorului este digitală. Cu Medelise, viitorul e deja aici.`,
        heroAlt: 'Pacient în consultație video cu un medic specialist pe platforma Medelise',
        sectionTitle: 'Consultații video și monitorizare la distanță cu medici specialiști',
        sectionDesc: 'Acces la medici de toate specialitățile prin platformă video securizată, cu interpretare analize, prescripții digitale și urmărire terapeutică continuă.',
    },
];

for (const page of PAGES) {
    const code = `'use client';

import ServiceHero from './ServiceHero';
import ServiceSectionHeader from './ServiceSectionHeader';

export default function ${page.component}() {
    return (
        <main>
            <ServiceHero
                title="${page.heroTitle}"
                description={\`${page.heroDesc}\`}
                imageSrc="${HERO_IMG}"
                imageAlt="${page.heroAlt}"
            />

            <ServiceSectionHeader
                title="${page.sectionTitle}"
                description="${page.sectionDesc}"
            />

            {/* More sections will be added here */}
        </main>
    );
}
`;
    writeFileSync(join(DIR, page.file), code, 'utf-8');
    console.log(`✅ ${page.file}`);
}

console.log(`\\nDone: ${PAGES.length} pages updated`);
