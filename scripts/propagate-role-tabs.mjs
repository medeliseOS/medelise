/**
 * Adds ServiceRoleTabs to all 12 service pages (after ServiceSectionHeader).
 *
 * Usage: node scripts/propagate-role-tabs.mjs
 */

import { readFileSync, writeFileSync } from 'fs';
import { join } from 'path';

const DIR = join(process.cwd(), 'src/features/servicii/components');

const FILES = [
    'MonitorizareDiagnosticContent.tsx',
    'IngrijiriPostoperatoriiContent.tsx',
    'AdministrareTratamenteContent.tsx',
    'ConsultatiiMedicaleContent.tsx',
    'KinetoterapieRecuperareContent.tsx',
    'MasajTerapeuticContent.tsx',
    'ProfilaxiePreventieContent.tsx',
    'PachetePlanuriContent.tsx',
    'IngrijireSenioriContent.tsx',
    'IngrijiriSuportConfortContent.tsx',
    'ServiciiLaboratorContent.tsx',
    'TelemedicinaContent.tsx',
];

let updated = 0;

for (const file of FILES) {
    const filePath = join(DIR, file);
    let content = readFileSync(filePath, 'utf-8');

    // Skip if already has ServiceRoleTabs
    if (content.includes('ServiceRoleTabs')) {
        console.log(`⏭️  ${file} — already has tabs, skipping`);
        continue;
    }

    // 1. Add import
    content = content.replace(
        "import ServiceSectionHeader from './ServiceSectionHeader';",
        "import ServiceSectionHeader from './ServiceSectionHeader';\nimport ServiceRoleTabs from './ServiceRoleTabs';"
    );

    // 2. Add component after ServiceSectionHeader closing tag
    content = content.replace(
        /(<ServiceSectionHeader\s[\s\S]*?\/>)\s*\n\s*\{\/\* More sections/,
        '$1\n\n            <ServiceRoleTabs />\n\n            {/* More sections'
    );

    writeFileSync(filePath, content, 'utf-8');
    updated++;
    console.log(`✅ ${file}`);
}

console.log(`\nDone: ${updated} pages updated`);
