/* ───────────────────────────────────────
   Job Data — single source of truth
   Replace with API / CMS when ready.
   ─────────────────────────────────────── */

/* ─── Centralized Brand Constants ─── */
export const COMPANY_BRAND = 'Medelise Health Solutions';
export const COMPANY_WEBSITE = 'www.medelise.ro';

/* ─── Interfaces ─── */
export interface JobDetail {
    /* Listing-level (cards on /cariera) */
    category: string;
    title: string;
    type: string;
    location: string;
    salary: string;
    experience: string;
    deadline: string; /* ISO 8601 date, e.g. '2026-03-15' */

    /* Detail-level (full page /cariera/[slug]) */
    overviewTitle: string;
    overviewBody: string;
    profileTitle: string;
    profileBody: string;
    tasksTitle: string;
    tasksBody: string;
    benefitsTitle: string;
    benefitsBody: string;
    closingText: string;

    sidebar: {
        companyName: string;
        locations: string[];
        website: string;
        jobType: string;
        salary: string;
        workLocation: string;
        datePosted: string;
    };
}

/* ─── Helper: compute days remaining from a deadline ─── */
export function getDaysRemaining(deadline: string): number {
    const now = new Date();
    const end = new Date(deadline);
    const diff = Math.ceil((end.getTime() - now.getTime()) / (1000 * 60 * 60 * 24));
    return Math.max(0, diff);
}

/* ─── Data ─── */
export const JOBS: Record<string, JobDetail> = {
    'asistent-medical-generalist': {
        category: 'Servicii Medicale la Domiciliu',
        title: 'Asistent Medical Generalist',
        type: 'Full Time',
        location: 'București',
        salary: '7K - 9K Lei',
        experience: '5-6 Years',
        deadline: '2026-03-15',

        overviewTitle: 'Company Overview:',
        overviewBody:
            'Suntem o companie medicală orientată spre viitor, cu misiunea de a oferi îngrijire medicală de calitate, direct la pacient acasă.\nCu ajutorul platformei noastre digitale – careOS – organizăm, planificăm și livrăm servicii medicale personalizate, eficiente și empatice.\nCredem că adevărata schimbare în sănătate începe cu oameni bine pregătiți, bine plătiți și profund motivați.',
        tasksTitle: 'Ce vei face concret?',
        tasksBody:
            'Vei efectua vizite medicale la domiciliul pacienților (evaluări, tratamente, monitorizare post-operatorie etc.)\nVei colabora cu medici specialiști pentru planul de îngrijire personalizat\nVei introduce date clinice și observații direct în aplicația Medelise (tablete oferite de companie)\nVei educa pacienții și aparținătorii în privința tratamentului și recuperării\nVei avea un program flexibil, stabilit împreună cu coordonatorul regional',
        profileTitle: 'Profilul tău ideal:',
        profileBody:
            'Ești asistent medical generalist, cu diplomă recunoscută (minim 2 ani experiență)\nDeții Certificat de Membru OAMGMAMR și aviz anual valabil\nAi carnet de conducere categoria B (avantaj important)\nÎți place să lucrezi autonom și să iei decizii rapide în teren\nEști empatic, atent la detalii și vrei să faci diferența',
        benefitsTitle: 'Ce îți oferim:',
        benefitsBody:
            'Pachet salarial competitiv (fix + bonusuri per caz + diurne)\nTraininguri periodice (inclusiv cu parteneri internaționali)\nTehnologie modernă – totul digitalizat (fără hârtii, fără pierdere de timp)\nEchipamente și consumabile medicale de calitate, asigurate de companie\nProgram de lucru flexibil, adaptabil stilului tău de viață\nPosibilitatea de a avansa spre roluri de coordonare sau specializare',
        closingText:
            'Dacă ești gata să redai demnitatea îngrijirii medicale și vrei să lucrezi într-un sistem care respectă profesioniștii, te așteptăm în echipa Medelise.',
        sidebar: {
            companyName: COMPANY_BRAND,
            locations: ['București – Ilfov', 'Cluj', 'Timișoara'],
            website: COMPANY_WEBSITE,
            jobType: 'Full Time / Part Time',
            salary: '3K - 9K Lei',
            workLocation: 'Teren',
            datePosted: '27.04.2025',
        },
    },

    'ambulantier': {
        category: 'Servicii de Urgență',
        title: 'Ambulanțier',
        type: 'Full Time',
        location: 'Constanța',
        salary: '5K - 6K Lei',
        experience: '2-3 Years',
        deadline: '2026-03-15',

        overviewTitle: 'Company Overview:',
        overviewBody:
            'Suntem o companie medicală orientată spre viitor, cu misiunea de a oferi îngrijire medicală de calitate, direct la pacient acasă.\nCu ajutorul platformei noastre digitale – careOS – organizăm, planificăm și livrăm servicii medicale personalizate, eficiente și empatice.\nCredem că adevărata schimbare în sănătate începe cu oameni bine pregătiți, bine plătiți și profund motivați.',
        tasksTitle: 'Ce vei face concret?',
        tasksBody:
            'Vei asigura transportul pacienților în condiții de siguranță și confort\nVei acorda prim ajutor conform protocoalelor în vigoare\nVei monitoriza starea pacientului pe durata transportului\nVei întreține și verifica echipamentele medicale din ambulanță\nVei colabora cu echipa medicală pentru intervenții rapide și eficiente',
        profileTitle: 'Profilul tău ideal:',
        profileBody:
            'Deții certificat de ambulanțier acreditat\nAi experiență de minim 2 ani în domeniu\nDeții permis de conducere categoria B (categoria C – avantaj)\nEști calm sub presiune și capabil să iei decizii rapide\nAi condiție fizică bună și abilități de comunicare',
        benefitsTitle: 'Ce îți oferim:',
        benefitsBody:
            'Salariu competitiv + bonusuri de gardă\nEchipament modern, ambulanțe dotate la cel mai înalt standard\nTraininguri de specialitate periodice\nAsigurare medicală privată\nProgram flexibil, ture negociabile\nOportunități de avansare în cadrul echipei de urgență',
        closingText:
            'Dacă ești pasionat de medicină de urgență și vrei să faci parte dintr-o echipă care salvează vieți zilnic, aplică acum!',
        sidebar: {
            companyName: COMPANY_BRAND,
            locations: ['Constanța', 'București'],
            website: COMPANY_WEBSITE,
            jobType: 'Full Time',
            salary: '5K - 6K Lei',
            workLocation: 'Teren',
            datePosted: '27.04.2025',
        },
    },

    'medic-de-familie': {
        category: 'Asistență Medicală Primară',
        title: 'Medic de Familie',
        type: 'Part Time',
        location: 'București',
        salary: '9K - 12K Lei',
        experience: '5-6 Years',
        deadline: '2026-03-20',

        overviewTitle: 'Company Overview:',
        overviewBody:
            'Suntem o companie medicală orientată spre viitor, cu misiunea de a oferi îngrijire medicală de calitate, direct la pacient acasă.\nCu ajutorul platformei noastre digitale – careOS – organizăm, planificăm și livrăm servicii medicale personalizate, eficiente și empatice.\nCredem că adevărata schimbare în sănătate începe cu oameni bine pregătiți, bine plătiți și profund motivați.',
        tasksTitle: 'Ce vei face concret?',
        tasksBody:
            'Vei consulta pacienți la domiciliu, oferind diagnostic și tratament personalizat\nVei monitoriza pacienți cronici și vei ajusta planurile de tratament\nVei elibera rețete, trimiteri și certificări medicale\nVei colabora cu specialiști pentru cazuri complexe\nVei utiliza platforma Medelise pentru documentarea digitală a consultațiilor',
        profileTitle: 'Profilul tău ideal:',
        profileBody:
            'Ești medic specialist în medicină de familie, cu drept de liberă practică\nAi minim 5 ani experiență clinică\nEști membru activ al Colegiului Medicilor\nÎți place abordarea holistică a pacientului\nEști organizat, empatic și orientat spre soluții',
        benefitsTitle: 'Ce îți oferim:',
        benefitsBody:
            'Remunerație premium per consultație + bonusuri de performanță\nFlexibilitate totală – tu îți alegi programul\nTabletă și echipament medical asigurate de companie\nTraininguri și conferințe medicale finanțate integral\nSistem digital complet – fără birocrație\nOportunități de leadership medical în cadrul rețelei Medelise',
        closingText:
            'Dacă vrei să practici medicina de familie fără constrângerile sistemului tradițional, Medelise îți oferă cadrul perfect.',
        sidebar: {
            companyName: COMPANY_BRAND,
            locations: ['București', 'Ilfov'],
            website: COMPANY_WEBSITE,
            jobType: 'Part Time',
            salary: '9K - 12K Lei',
            workLocation: 'Teren + Remote',
            datePosted: '27.04.2025',
        },
    },

    'asistent-coordonator': {
        category: 'Management Operațional',
        title: 'Asistent Coordonator',
        type: 'Full Time',
        location: 'Remote',
        salary: '30K - 35K Lei',
        experience: '4 Years',
        deadline: '2026-03-10',

        overviewTitle: 'Company Overview:',
        overviewBody:
            'Suntem o companie medicală orientată spre viitor, cu misiunea de a oferi îngrijire medicală de calitate, direct la pacient acasă.\nCu ajutorul platformei noastre digitale – careOS – organizăm, planificăm și livrăm servicii medicale personalizate, eficiente și empatice.\nCredem că adevărata schimbare în sănătate începe cu oameni bine pregătiți, bine plătiți și profund motivați.',
        tasksTitle: 'Ce vei face concret?',
        tasksBody:
            'Vei coordona programările și vizitele echipelor medicale de teren\nVei monitoriza și optimiza fluxurile operaționale prin platforma careOS\nVei asigura comunicarea eficientă între pacienți, echipa medicală și management\nVei gestiona documentația operațională și rapoartele zilnice\nVei contribui la îmbunătățirea continuă a proceselor interne',
        profileTitle: 'Profilul tău ideal:',
        profileBody:
            'Ai experiență în coordonare operațională sau management medical\nEști organizat, orientat către detalii și capabil să gestionezi multiple sarcini simultan\nAi abilități excelente de comunicare verbală și scrisă\nCunoști bine instrumentele digitale (Google Workspace, Excel, platforme de management)\nAi capacitatea de a lucra autonom și de a lua decizii rapide',
        benefitsTitle: 'Ce îți oferim:',
        benefitsBody:
            'Salariu competitiv + bonusuri de performanță trimestriale\nLucru 100% remote cu flexibilitate de program\nEchipamente de lucru asigurate (laptop, telefon, licențe software)\nTraininguri de leadership și management operațional\nMediu de lucru modern, dinamic, orientat spre inovație\nOportunități de avansare în management regional',
        closingText:
            'Dacă ești un organizator natural care vrea să schimbe modul în care funcționează serviciile medicale, locul tău este în echipa Medelise.',
        sidebar: {
            companyName: COMPANY_BRAND,
            locations: ['Remote – Toată România'],
            website: COMPANY_WEBSITE,
            jobType: 'Full Time',
            salary: '30K - 35K Lei',
            workLocation: 'Remote',
            datePosted: '27.04.2025',
        },
    },
};

/* ─── All slugs — for generateStaticParams ─── */
export const JOB_SLUGS = Object.keys(JOBS);
