/**
 * Creates 12 service product pages under app/servicii/[slug]/page.tsx
 * and placeholder content components under features/servicii/components/
 *
 * Usage: node scripts/create-service-pages.mjs
 */

import { writeFileSync, mkdirSync, existsSync } from 'fs';
import { join } from 'path';

const CWD = process.cwd();

const SERVICES = [
    {
        slug: 'monitorizare-diagnostic',
        title: 'Monitorizare & Diagnostic',
        subtitle: 'Parametri vitali, recoltări, EKG, etc.',
        metaTitle: 'Monitorizare & Diagnostic la Domiciliu | Medelise',
        metaDesc: 'Servicii de monitorizare a parametrilor vitali, recoltări și EKG disponibile la domiciliu, cu profesioniști medicali Medelise.',
        componentName: 'MonitorizareDiagnosticContent',
    },
    {
        slug: 'ingrijiri-postoperatorii-plagi',
        title: 'Îngrijiri Postoperatorii & Plăgi',
        subtitle: 'Plăgi simple, suprainfectate, escare, suturi, etc.',
        metaTitle: 'Îngrijiri Postoperatorii & Plăgi | Medelise',
        metaDesc: 'Îngrijire profesională a plăgilor, escarelor și suturilor la domiciliu. Recuperare postoperatorie asistată de echipa Medelise.',
        componentName: 'IngrijiriPostoperatoriiContent',
    },
    {
        slug: 'administrare-tratamente',
        title: 'Administrare & Tratamente',
        subtitle: 'Injecții, perfuzii, administrări orale, etc.',
        metaTitle: 'Administrare Tratamente la Domiciliu | Medelise',
        metaDesc: 'Administrare de injecții, perfuzii și tratamente orale la domiciliu de către personal medical autorizat Medelise.',
        componentName: 'AdministrareTratamenteContent',
    },
    {
        slug: 'consultatii-medicale',
        title: 'Consultații Medicale',
        subtitle: 'Consult medic specialist / medic de familie / etc.',
        metaTitle: 'Consultații Medicale la Domiciliu | Medelise',
        metaDesc: 'Consultații medicale la domiciliu cu medici specialiști și medici de familie. Programează rapid cu Medelise.',
        componentName: 'ConsultatiiMedicaleContent',
    },
    {
        slug: 'kinetoterapie-recuperare',
        title: 'Kinetoterapie & Recuperare',
        subtitle: 'Drenaj limfatic, reeducare mers, post-AVC, etc.',
        metaTitle: 'Kinetoterapie & Recuperare la Domiciliu | Medelise',
        metaDesc: 'Kinetoterapie profesională la domiciliu: drenaj limfatic, recuperare post-AVC, reeducare mers cu Medelise.',
        componentName: 'KinetoterapieRecuperareContent',
    },
    {
        slug: 'masaj-terapeutic-relaxare',
        title: 'Masaj Terapeutic & Relaxare',
        subtitle: 'Decontracturant, terapeutic, drenaj limfatic, etc.',
        metaTitle: 'Masaj Terapeutic & Relaxare la Domiciliu | Medelise',
        metaDesc: 'Masaj decontracturant, terapeutic și drenaj limfatic la domiciliu. Relaxare și recuperare cu profesioniștii Medelise.',
        componentName: 'MasajTerapeuticContent',
    },
    {
        slug: 'profilaxie-preventie',
        title: 'Profilaxie & Prevenție',
        subtitle: 'Educație medicală, prevenție escare, etc.',
        metaTitle: 'Profilaxie & Prevenție Medicală | Medelise',
        metaDesc: 'Servicii de profilaxie și prevenție medicală la domiciliu: educație, evaluări periodice și prevenție escare cu Medelise.',
        componentName: 'ProfilaxiePreventieContent',
    },
    {
        slug: 'pachete-planuri-medicale',
        title: 'Pachete & Planuri Medicale',
        subtitle: 'Pachete postoperatorii, cronici, seniori, etc.',
        metaTitle: 'Pachete & Planuri Medicale | Medelise',
        metaDesc: 'Pachete medicale personalizate: postoperatorii, cronici și seniori. Planuri de îngrijire complete cu Medelise.',
        componentName: 'PachetePlanuriContent',
    },
    {
        slug: 'ingrijire-seniori-paliativa',
        title: 'Îngrijire Seniori & Paliativă',
        subtitle: 'Îngrijiri complexe, pacienți cronici sau terminali, etc.',
        metaTitle: 'Îngrijire Seniori & Paliativă | Medelise',
        metaDesc: 'Îngrijire la domiciliu pentru seniori și pacienți paliativ: asistență complexă, suport emoțional și confort cu Medelise.',
        componentName: 'IngrijireSenioriContent',
    },
    {
        slug: 'ingrijiri-suport-confort',
        title: 'Îngrijiri de Suport & Confort',
        subtitle: 'Toaletă, igienă, mobilizare ușoară, etc.',
        metaTitle: 'Îngrijiri de Suport & Confort | Medelise',
        metaDesc: 'Servicii de suport și confort la domiciliu: igienă, toaletă, mobilizare. Asistență umană și profesională cu Medelise.',
        componentName: 'IngrijiriSuportConfortContent',
    },
    {
        slug: 'servicii-laborator-domiciliu',
        title: 'Servicii de Laborator la Domiciliu',
        subtitle: 'Recoltări sânge, urină, buletin de analize, etc.',
        metaTitle: 'Analize de Laborator la Domiciliu | Medelise',
        metaDesc: 'Recoltări de sânge și urină la domiciliu cu rezultate rapide. Buletin de analize digital cu Medelise.',
        componentName: 'ServiciiLaboratorContent',
    },
    {
        slug: 'telemedicina',
        title: 'Telemedicină',
        subtitle: 'Consulturi video, interpretare analize, etc.',
        metaTitle: 'Telemedicină – Consulturi Online | Medelise',
        metaDesc: 'Consultații medicale online prin video, interpretare analize și prescripții digitale. Telemedicină accesibilă cu Medelise.',
        componentName: 'TelemedicinaContent',
    },
];

/* ── Create directories ── */
const featureDir = join(CWD, 'src/features/servicii/components');
if (!existsSync(featureDir)) mkdirSync(featureDir, { recursive: true });

/* ── Generate files ── */
for (const svc of SERVICES) {
    // 1. Content component (placeholder)
    const contentPath = join(featureDir, `${svc.componentName}.tsx`);
    const contentCode = `'use client';

export default function ${svc.componentName}() {
    return (
        <main className="service-page">
            {/* Sections will be added here */}

            <style jsx>{\`
                .service-page {
                    font-family: var(--font-heading);
                    min-height: 100vh;
                    background: var(--color-white);
                }
            \`}</style>
        </main>
    );
}
`;
    writeFileSync(contentPath, contentCode, 'utf-8');
    console.log(`✅ Component: ${svc.componentName}.tsx`);

    // 2. App route page
    const pageDir = join(CWD, `src/app/servicii/${svc.slug}`);
    if (!existsSync(pageDir)) mkdirSync(pageDir, { recursive: true });

    const pageCode = `import type { Metadata } from 'next';
import ${svc.componentName} from '@features/servicii/components/${svc.componentName}';

export const metadata: Metadata = {
    title: '${svc.metaTitle}',
    description: '${svc.metaDesc}',
};

export default function ${svc.componentName.replace('Content', 'Page')}() {
    return <${svc.componentName} />;
}
`;
    writeFileSync(join(pageDir, 'page.tsx'), pageCode, 'utf-8');
    console.log(`✅ Route:     /servicii/${svc.slug}`);
}

// 3. Barrel export
const barrelPath = join(featureDir, '..', 'index.ts');
const barrelCode = SERVICES.map(
    s => `export { default as ${s.componentName} } from './components/${s.componentName}';`
).join('\n') + '\n';
writeFileSync(barrelPath, barrelCode, 'utf-8');
console.log(`\n✅ Barrel: features/servicii/index.ts`);

console.log(`\nDone: ${SERVICES.length} pages created`);
