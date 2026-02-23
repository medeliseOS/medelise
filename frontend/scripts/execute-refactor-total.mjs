/**
 * ═══════════════════════════════════════════════════════════════
 * MEDELISE — Feature-First Architecture Migration
 * ═══════════════════════════════════════════════════════════════
 * 
 * Executes the full src/ reorganization:
 *   Phase 1: Create directory hierarchy
 *   Phase 2: Move files to new locations
 *   Phase 3: Rewrite ALL imports (alias + relative)
 *   Phase 4: Create barrel exports (index.ts)
 *   Phase 5: Create governance files (reguli-stricte.md)
 *   Phase 6: Update tsconfig.json
 *   Phase 7: Cleanup empty directories
 * 
 * Run: node scripts/execute-refactor-total.mjs
 */

import { mkdir, rename, readdir, readFile, writeFile, stat, rm, access } from 'fs/promises';
import { join, dirname, basename, relative } from 'path';

const SRC = 'src';
const STATS = { moved: 0, rewritten: 0, created: 0, errors: 0 };

function log(phase, msg) {
    console.log(`[Phase ${phase}] ${msg}`);
}

async function exists(p) {
    try { await access(p); return true; } catch { return false; }
}

async function moveFile(src, dest) {
    await mkdir(dirname(dest), { recursive: true });
    if (!(await exists(src))) {
        console.error(`  ❌ SOURCE NOT FOUND: ${src}`);
        STATS.errors++;
        return;
    }
    await rename(src, dest);
    STATS.moved++;
    log(2, `📦 ${src} → ${dest}`);
}

// ═══════════════════════════════════════════════════════════════
// PHASE 1: CREATE DIRECTORY HIERARCHY
// ═══════════════════════════════════════════════════════════════
async function phase1_createDirectories() {
    log(1, '═══ Creating directory hierarchy ═══');

    const dirs = [
        // Features
        'src/features/homepage/components',
        'src/features/iv-therapy/components/clinical',
        'src/features/iv-therapy/components/iv-drip',
        'src/features/iv-therapy/components/quality',
        'src/features/iv-therapy/data',
        'src/features/cariera/components/steps',
        'src/features/cariera/data',
        'src/features/auth/components',
        'src/features/about/components',
        'src/features/contact/components',
        'src/features/scheduling/context',
        // Shared
        'src/shared/constants',
        'src/shared/data',
        'src/shared/hooks',
        'src/shared/types',
    ];

    for (const dir of dirs) {
        await mkdir(dir, { recursive: true });
        log(1, `📁 ${dir}`);
    }
}

// ═══════════════════════════════════════════════════════════════
// PHASE 2: MOVE FILES
// ═══════════════════════════════════════════════════════════════
async function phase2_moveFiles() {
    log(2, '═══ Moving files to new locations ═══');

    // ── Homepage sections ──
    log(2, '── Homepage sections → features/homepage/components/ ──');
    const homepageSections = [
        'HeroSection.tsx', 'JourneySection.tsx', 'MissionStatsSection.tsx',
        'NewsletterSection.tsx', 'PatientPortalSection.tsx', 'QualitySection.tsx',
        'ServiciiSection.tsx', 'TestimonialsSection.tsx', 'WhyChooseUsSection.tsx',
    ];
    for (const f of homepageSections) {
        await moveFile(`src/components/${f}`, `src/features/homepage/components/${f}`);
    }

    // ── IV Therapy ──
    log(2, '── IV Therapy → features/iv-therapy/ ──');
    const ivTherapyComponents = [
        'AllInclusiveContent.tsx', 'AntiMahmurealaContent.tsx', 'BoostEnergieContent.tsx',
        'BoostImunitateContent.tsx', 'CalmareaMigrenelorContent.tsx', 'DeshidratareContent.tsx',
        'FertilityPlusContent.tsx', 'FrumuseteContent.tsx', 'GastroenteritaContent.tsx',
        'IVClinicalStudiesSection.tsx', 'IVDripCatalog.tsx', 'IVDripProductPage.tsx',
        'IVIdealForSection.tsx', 'IVQualitySection.tsx', 'IVWhySection.tsx',
        'MyersCocktailContent.tsx', 'RecuperareContent.tsx', 'ServiceCard.tsx',
        'SuperBoostImunitateContent.tsx',
    ];
    for (const f of ivTherapyComponents) {
        await moveFile(`src/components/services/${f}`, `src/features/iv-therapy/components/${f}`);
    }
    // Subdirectories
    for (const f of ['StudyCard.tsx', 'types.ts']) {
        await moveFile(`src/components/services/clinical/${f}`, `src/features/iv-therapy/components/clinical/${f}`);
    }
    for (const f of ['BenefitsList.tsx', 'ProductHeader.tsx', 'types.ts']) {
        await moveFile(`src/components/services/iv-drip/${f}`, `src/features/iv-therapy/components/iv-drip/${f}`);
    }
    for (const f of ['QualityFooter.tsx', 'QualityHeader.tsx', 'QualityImages.tsx', 'constants.ts', 'types.ts']) {
        await moveFile(`src/components/services/quality/${f}`, `src/features/iv-therapy/components/quality/${f}`);
    }
    // Data
    await moveFile('src/data/ivDripServices.ts', 'src/features/iv-therapy/data/ivDripServices.ts');

    // ── Cariera ──
    log(2, '── Cariera → features/cariera/ ──');
    const carieraComponents = [
        'ApplicationFormContent.tsx', 'ApplicationJourney.tsx', 'CarieraContent.tsx',
        'DocumentChecker.tsx', 'JobDetailContent.tsx', 'JobSidebarCard.tsx',
    ];
    for (const f of carieraComponents) {
        await moveFile(`src/components/cariera/${f}`, `src/features/cariera/components/${f}`);
    }
    // Data files (separated from components per architecture)
    for (const f of ['countryData.ts', 'documentRequirements.ts', 'jobData.ts']) {
        await moveFile(`src/components/cariera/${f}`, `src/features/cariera/data/${f}`);
    }
    // Steps subdirectory
    const steps = [
        'Step1_DatePersonale.tsx', 'Step2_ExperientaProfesionala.tsx',
        'Step3_Disponibilitate.tsx', 'Step4_IncarcareCV.tsx',
        'Step5_DocumenteNecesare.tsx', 'Step6_Consimtamant.tsx',
    ];
    for (const f of steps) {
        await moveFile(`src/components/cariera/steps/${f}`, `src/features/cariera/components/steps/${f}`);
    }

    // ── Auth ──
    log(2, '── Auth → features/auth/components/ ──');
    const authFiles = [
        'AnimatedEyeToggle.tsx', 'CardScanner.tsx', 'LoginForm.tsx',
        'LoginPageContent.tsx', 'RegisterForm.tsx', 'cardScannerUtils.ts',
    ];
    for (const f of authFiles) {
        await moveFile(`src/components/login/${f}`, `src/features/auth/components/${f}`);
    }

    // ── About ──
    log(2, '── About → features/about/components/ ──');
    for (const f of ['DespreNoiContent.tsx', 'VisionSection.tsx']) {
        await moveFile(`src/components/despre-noi/${f}`, `src/features/about/components/${f}`);
    }

    // ── Contact ──
    log(2, '── Contact → features/contact/components/ ──');
    for (const f of ['ContactContent.tsx', 'ContactFaqSection.tsx', 'ContactFormSection.tsx']) {
        await moveFile(`src/components/contact/${f}`, `src/features/contact/components/${f}`);
    }

    // ── Scheduling ──
    log(2, '── Scheduling context ──');
    await moveFile('src/context/CartContext.tsx', 'src/features/scheduling/context/CartContext.tsx');

    // ── Shared Infrastructure ──
    log(2, '── Shared infrastructure ──');
    await moveFile('src/constants/icons.ts', 'src/shared/constants/icons.ts');
    await moveFile('src/constants/images.ts', 'src/shared/constants/images.ts');
    await moveFile('src/data/navigation.ts', 'src/shared/data/navigation.ts');
}

// ═══════════════════════════════════════════════════════════════
// PHASE 3: REWRITE ALL IMPORTS
// ═══════════════════════════════════════════════════════════════

/**
 * Global import replacements.
 * ORDER MATTERS: longest match first to prevent partial replacement.
 */
const GLOBAL_IMPORT_MAP = [
    // ── IV Therapy content (longest paths first) ──
    ['@/components/services/SuperBoostImunitateContent', '@features/iv-therapy/components/SuperBoostImunitateContent'],
    ['@/components/services/CalmareaMigrenelorContent', '@features/iv-therapy/components/CalmareaMigrenelorContent'],
    ['@/components/services/IVClinicalStudiesSection', '@features/iv-therapy/components/IVClinicalStudiesSection'],
    ['@/components/services/AntiMahmurealaContent', '@features/iv-therapy/components/AntiMahmurealaContent'],
    ['@/components/services/GastroenteritaContent', '@features/iv-therapy/components/GastroenteritaContent'],
    ['@/components/services/BoostImunitateContent', '@features/iv-therapy/components/BoostImunitateContent'],
    ['@/components/services/FertilityPlusContent', '@features/iv-therapy/components/FertilityPlusContent'],
    ['@/components/services/AllInclusiveContent', '@features/iv-therapy/components/AllInclusiveContent'],
    ['@/components/services/IVDripProductPage', '@features/iv-therapy/components/IVDripProductPage'],
    ['@/components/services/BoostEnergieContent', '@features/iv-therapy/components/BoostEnergieContent'],
    ['@/components/services/DeshidratareContent', '@features/iv-therapy/components/DeshidratareContent'],
    ['@/components/services/MyersCocktailContent', '@features/iv-therapy/components/MyersCocktailContent'],
    ['@/components/services/RecuperareContent', '@features/iv-therapy/components/RecuperareContent'],
    ['@/components/services/FrumuseteContent', '@features/iv-therapy/components/FrumuseteContent'],
    ['@/components/services/IVQualitySection', '@features/iv-therapy/components/IVQualitySection'],
    ['@/components/services/IVDripCatalog', '@features/iv-therapy/components/IVDripCatalog'],
    ['@/components/services/IVWhySection', '@features/iv-therapy/components/IVWhySection'],
    ['@/components/services/ServiceCard', '@features/iv-therapy/components/ServiceCard'],

    // ── Cariera ──
    ['@/components/cariera/ApplicationFormContent', '@features/cariera/components/ApplicationFormContent'],
    ['@/components/cariera/documentRequirements', '@features/cariera/data/documentRequirements'],
    ['@/components/cariera/ApplicationJourney', '@features/cariera/components/ApplicationJourney'],
    ['@/components/cariera/JobDetailContent', '@features/cariera/components/JobDetailContent'],
    ['@/components/cariera/DocumentChecker', '@features/cariera/components/DocumentChecker'],
    ['@/components/cariera/JobSidebarCard', '@features/cariera/components/JobSidebarCard'],
    ['@/components/cariera/CarieraContent', '@features/cariera/components/CarieraContent'],
    ['@/components/cariera/countryData', '@features/cariera/data/countryData'],
    ['@/components/cariera/jobData', '@features/cariera/data/jobData'],

    // ── Auth ──
    ['@/components/login/LoginPageContent', '@features/auth/components/LoginPageContent'],
    ['@/components/login/AnimatedEyeToggle', '@features/auth/components/AnimatedEyeToggle'],
    ['@/components/login/cardScannerUtils', '@features/auth/components/cardScannerUtils'],
    ['@/components/login/RegisterForm', '@features/auth/components/RegisterForm'],
    ['@/components/login/CardScanner', '@features/auth/components/CardScanner'],
    ['@/components/login/LoginForm', '@features/auth/components/LoginForm'],

    // ── Contact ──
    ['@/components/contact/ContactFormSection', '@features/contact/components/ContactFormSection'],
    ['@/components/contact/ContactFaqSection', '@features/contact/components/ContactFaqSection'],
    ['@/components/contact/ContactContent', '@features/contact/components/ContactContent'],

    // ── About ──
    ['@/components/despre-noi/DespreNoiContent', '@features/about/components/DespreNoiContent'],
    ['@/components/despre-noi/VisionSection', '@features/about/components/VisionSection'],

    // ── Homepage sections ──
    ['@/components/MissionStatsSection', '@features/homepage/components/MissionStatsSection'],
    ['@/components/PatientPortalSection', '@features/homepage/components/PatientPortalSection'],
    ['@/components/WhyChooseUsSection', '@features/homepage/components/WhyChooseUsSection'],
    ['@/components/TestimonialsSection', '@features/homepage/components/TestimonialsSection'],
    ['@/components/NewsletterSection', '@features/homepage/components/NewsletterSection'],
    ['@/components/ServiciiSection', '@features/homepage/components/ServiciiSection'],
    ['@/components/JourneySection', '@features/homepage/components/JourneySection'],
    ['@/components/QualitySection', '@features/homepage/components/QualitySection'],
    ['@/components/HeroSection', '@features/homepage/components/HeroSection'],

    // ── UI alias modernization ──
    ['@/components/ui/FeatureCard', '@ui/FeatureCard'],
    ['@/components/ui/StatCard', '@ui/StatCard'],
    ['@/components/ui/Button', '@ui/Button'],
    ['@/components/ui/Spinner', '@ui/Spinner'],

    // ── Layout alias modernization ──
    ['@/components/layout/Navbar', '@layout/Navbar'],
    ['@/components/layout/Footer', '@layout/Footer'],

    // ── Shared infrastructure ──
    ['@/constants/images', '@shared/constants/images'],
    ['@/constants/icons', '@shared/constants/icons'],
    ['@/data/ivDripServices', '@features/iv-therapy/data/ivDripServices'],
    ['@/data/navigation', '@shared/data/navigation'],

    // ── Context ──
    ['@/context/CartContext', '@features/scheduling/context/CartContext'],
];

/**
 * Per-file relative import fixes (applied AFTER file moves).
 * These handle relative paths that changed due to directory restructuring.
 */
const RELATIVE_FIXES = {
    // ── IV Therapy boundary violations ──
    'src/features/iv-therapy/components/IVDripProductPage.tsx': [
        ["from '../ui/Button'", "from '@ui/Button'"],
        ["from '../TestimonialsSection'", "from '@features/homepage/components/TestimonialsSection'"],
    ],
    'src/features/iv-therapy/components/DeshidratareContent.tsx': [
        ["from '../contact/ContactFormSection'", "from '@features/contact/components/ContactFormSection'"],
    ],

    // ── Cariera data path fixes (data/ split from components/) ──
    'src/features/cariera/components/CarieraContent.tsx': [
        ["from './jobData'", "from '../data/jobData'"],
    ],
    'src/features/cariera/components/JobDetailContent.tsx': [
        ["from './jobData'", "from '../data/jobData'"],
        ["from './JobSidebarCard'", "from './JobSidebarCard'"], // stays same — no change
    ],
    'src/features/cariera/components/JobSidebarCard.tsx': [
        ["from './jobData'", "from '../data/jobData'"],
    ],
    'src/features/cariera/components/steps/Step1_DatePersonale.tsx': [
        ["from '../countryData'", "from '../../data/countryData'"],
    ],
    'src/features/cariera/components/steps/Step5_DocumenteNecesare.tsx': [
        ["from '../documentRequirements'", "from '../../data/documentRequirements'"],
    ],
};

async function walkTS(dir) {
    const results = [];
    let entries;
    try { entries = await readdir(dir, { withFileTypes: true }); } catch { return results; }
    for (const entry of entries) {
        const full = join(dir, entry.name);
        if (entry.isDirectory() && !entry.name.startsWith('.') && entry.name !== 'node_modules' && entry.name !== '.next') {
            results.push(...await walkTS(full));
        } else if (/\.(tsx?|mts)$/.test(entry.name) && entry.name !== 'execute-refactor-total.mjs') {
            results.push(full);
        }
    }
    return results;
}

async function phase3_rewriteImports() {
    log(3, '═══ Rewriting imports ═══');

    const allFiles = await walkTS('src');
    log(3, `Found ${allFiles.length} TypeScript files to process`);

    for (const filePath of allFiles) {
        let content = await readFile(filePath, 'utf-8');
        let changed = false;

        // 1. Apply global import map
        for (const [oldPath, newPath] of GLOBAL_IMPORT_MAP) {
            if (content.includes(oldPath)) {
                content = content.replaceAll(oldPath, newPath);
                changed = true;
            }
        }

        // 2. Apply per-file relative fixes
        const fixes = RELATIVE_FIXES[filePath];
        if (fixes) {
            for (const [oldImport, newImport] of fixes) {
                if (content.includes(oldImport)) {
                    content = content.replaceAll(oldImport, newImport);
                    changed = true;
                }
            }
        }

        if (changed) {
            await writeFile(filePath, content, 'utf-8');
            STATS.rewritten++;
            log(3, `✏️  ${filePath}`);
        }
    }
}

// ═══════════════════════════════════════════════════════════════
// PHASE 4: CREATE BARREL EXPORTS (index.ts)
// ═══════════════════════════════════════════════════════════════
async function phase4_barrelExports() {
    log(4, '═══ Creating barrel exports ═══');

    const barrels = {
        // ── components/ui ──
        'src/components/ui/index.ts': `export { default as Button } from './Button';
export { default as Spinner } from './Spinner';
export { default as StatCard } from './StatCard';
export { default as FeatureCard } from './FeatureCard';
`,

        // ── components/icons ──
        'src/components/icons/index.ts': `export { default as MailIcon } from './MailIcon';
`,

        // ── features/homepage ──
        'src/features/homepage/components/index.ts': `export { default as HeroSection } from './HeroSection';
export { default as JourneySection } from './JourneySection';
export { default as MissionStatsSection } from './MissionStatsSection';
export { default as NewsletterSection } from './NewsletterSection';
export { default as PatientPortalSection } from './PatientPortalSection';
export { default as QualitySection } from './QualitySection';
export { default as ServiciiSection } from './ServiciiSection';
export { default as TestimonialsSection } from './TestimonialsSection';
export { default as WhyChooseUsSection } from './WhyChooseUsSection';
`,

        // ── features/iv-therapy ──
        'src/features/iv-therapy/components/index.ts': `// Public API — IV Therapy Feature
export { default as IVDripCatalog } from './IVDripCatalog';
export { default as IVDripProductPage } from './IVDripProductPage';
export { default as ServiceCard } from './ServiceCard';
export { default as AllInclusiveContent } from './AllInclusiveContent';
export { default as AntiMahmurealaContent } from './AntiMahmurealaContent';
export { default as BoostEnergieContent } from './BoostEnergieContent';
export { default as BoostImunitateContent } from './BoostImunitateContent';
export { default as CalmareaMigrenelorContent } from './CalmareaMigrenelorContent';
export { default as DeshidratareContent } from './DeshidratareContent';
export { default as FertilityPlusContent } from './FertilityPlusContent';
export { default as FrumuseteContent } from './FrumuseteContent';
export { default as GastroenteritaContent } from './GastroenteritaContent';
export { default as MyersCocktailContent } from './MyersCocktailContent';
export { default as RecuperareContent } from './RecuperareContent';
export { default as SuperBoostImunitateContent } from './SuperBoostImunitateContent';
`,

        // ── features/cariera ──
        'src/features/cariera/components/index.ts': `// Public API — Cariera Feature
export { default as ApplicationFormContent } from './ApplicationFormContent';
export { default as ApplicationJourney } from './ApplicationJourney';
export { default as CarieraContent } from './CarieraContent';
export { default as DocumentChecker } from './DocumentChecker';
export { default as JobDetailContent } from './JobDetailContent';
export { default as JobSidebarCard } from './JobSidebarCard';
`,

        // ── features/auth ──
        'src/features/auth/components/index.ts': `// Public API — Auth Feature
export { default as LoginPageContent } from './LoginPageContent';
export { default as LoginForm } from './LoginForm';
export { default as RegisterForm } from './RegisterForm';
export { default as CardScanner } from './CardScanner';
export { default as AnimatedEyeToggle } from './AnimatedEyeToggle';
`,

        // ── features/about ──
        'src/features/about/components/index.ts': `// Public API — About Feature
export { default as DespreNoiContent } from './DespreNoiContent';
export { default as VisionSection } from './VisionSection';
`,

        // ── features/contact ──
        'src/features/contact/components/index.ts': `// Public API — Contact Feature
export { default as ContactContent } from './ContactContent';
export { default as ContactFormSection } from './ContactFormSection';
export { default as ContactFaqSection } from './ContactFaqSection';
`,

        // ── shared ──
        'src/shared/hooks/index.ts': `// Shared hooks — add below as created
`,
        'src/shared/types/index.ts': `// Shared types — add below as created
`,
    };

    for (const [file, content] of Object.entries(barrels)) {
        await mkdir(dirname(file), { recursive: true });
        await writeFile(file, content);
        STATS.created++;
        log(4, `📝 ${file}`);
    }
}

// ═══════════════════════════════════════════════════════════════
// PHASE 5: CREATE GOVERNANCE FILES (reguli-stricte.md)
// ═══════════════════════════════════════════════════════════════
async function phase5_governanceFiles() {
    log(5, '═══ Creating governance files ═══');

    const governance = {
        'src/features/homepage/reguli-stricte.md': `# Reguli Stricte — features/homepage

## Public API (Exporturi autorizate)
- \`components/index.ts\` exportă: HeroSection, JourneySection, MissionStatsSection, NewsletterSection, PatientPortalSection, QualitySection, ServiciiSection, TestimonialsSection, WhyChooseUsSection

## Active dedicate (/public)
- \`/public/images-medelise/md-hero/\`
- \`/public/images-medelise/md-quality/\`
- \`/public/images-medelise/md-portal/\`
- \`/public/images-medelise/md-watch/\`
- \`/public/images-medelise/md-testimonials/\`

## Reguli de import
- ✅ Poate importa din: \`@ui/*\`, \`@shared/*\`, \`@lib/*\`
- ❌ NU importa din: \`@features/auth\`, \`@features/cariera\`, \`@features/iv-therapy\`
- ⚠️ TestimonialsSection este importat de \`@features/iv-therapy\` prin barrel

## Proprietar
- Echipa Frontend — Homepage
`,

        'src/features/iv-therapy/reguli-stricte.md': `# Reguli Stricte — features/iv-therapy

## Public API (Exporturi autorizate)
- \`components/index.ts\` exportă: IVDripCatalog, IVDripProductPage, ServiceCard, + 12 componente de conținut produs

## Active dedicate (/public)
- \`/public/images-medelise/md-iv-drip/\`
- \`/public/icons-medelise/md-medical/\`

## Reguli de import
- ✅ Poate importa din: \`@ui/*\`, \`@shared/*\`, \`@lib/*\`
- ✅ Poate importa (prin barrel): \`@features/homepage/components\` (TestimonialsSection)
- ✅ Poate importa (prin barrel): \`@features/contact/components\` (ContactFormSection — Deshidratare)
- ❌ NU importa din: \`@features/auth\`, \`@features/cariera\`

## Proprietar
- Echipa Frontend — Servicii Medicale
`,

        'src/features/cariera/reguli-stricte.md': `# Reguli Stricte — features/cariera

## Public API (Exporturi autorizate)
- \`components/index.ts\` exportă: ApplicationFormContent, ApplicationJourney, CarieraContent, DocumentChecker, JobDetailContent, JobSidebarCard
- \`data/jobData.ts\` exportă: JOBS, JOB_SLUGS, getDaysRemaining, JobDetail

## Active dedicate (/public)
- \`/public/icons-medelise/md-system/\` (icoane UI partajate)
- \`/public/brand-medelise/\` (logo-uri pe sidebar card)

## Reguli de import
- ✅ Poate importa din: \`@ui/*\`, \`@shared/*\`, \`@lib/*\`, \`@/components/icons/*\`
- ❌ NU importa din: \`@features/auth\`, \`@features/iv-therapy\`, \`@features/homepage\`

## Proprietar
- Echipa Frontend — HR / Recrutare
`,

        'src/features/auth/reguli-stricte.md': `# Reguli Stricte — features/auth

## Public API (Exporturi autorizate)
- \`components/index.ts\` exportă: LoginPageContent, LoginForm, RegisterForm, CardScanner, AnimatedEyeToggle

## Active dedicate (/public)
- \`/public/images-medelise/md-login/\`
- \`/public/images-medelise/md-security/\`

## Reguli de import
- ✅ Poate importa din: \`@ui/*\`, \`@shared/*\`, \`@lib/*\`
- ❌ NU importa din: \`@features/cariera\`, \`@features/iv-therapy\`, \`@features/homepage\`

## Proprietar
- Echipa Frontend — Autentificare
`,

        'src/features/about/reguli-stricte.md': `# Reguli Stricte — features/about

## Public API (Exporturi autorizate)
- \`components/index.ts\` exportă: DespreNoiContent, VisionSection

## Active dedicate (/public)
- \`/public/icons-medelise/md-about/\`
- \`/public/images-medelise/md-owner/\`

## Reguli de import
- ✅ Poate importa din: \`@ui/*\`, \`@shared/*\`, \`@lib/*\`
- ❌ NU importa din: alte \`@features/*\`

## Proprietar
- Echipa Frontend — Brand / Corporate
`,

        'src/features/contact/reguli-stricte.md': `# Reguli Stricte — features/contact

## Public API (Exporturi autorizate)
- \`components/index.ts\` exportă: ContactContent, ContactFormSection, ContactFaqSection

## Active dedicate (/public)
- \`/public/icons-medelise/md-communication/\`

## Reguli de import
- ✅ Poate importa din: \`@ui/*\`, \`@shared/*\`, \`@lib/*\`
- ❌ NU importa din: alte \`@features/*\`
- ⚠️ ContactFormSection este importat de \`@features/iv-therapy\` prin barrel

## Proprietar
- Echipa Frontend — Suport Client
`,

        'src/features/scheduling/reguli-stricte.md': `# Reguli Stricte — features/scheduling

## Public API (Exporturi autorizate)
- \`context/CartContext.tsx\` exportă: CartProvider, useCart

## Active dedicate (/public)
- Niciun asset dedicat (încă)

## Reguli de import
- ✅ Poate importa din: \`@ui/*\`, \`@shared/*\`, \`@lib/*\`
- ❌ NU importa din: alte \`@features/*\`

## Proprietar
- Echipa Frontend — Programări
`,

        'src/components/ui/reguli-stricte.md': `# Reguli Stricte — components/ui (Atoms)

## Scop
Componente vizuale pure, fără logică de business. Props-only. Fără useContext.

## Exporturi
- Button, Spinner, StatCard, FeatureCard

## Reguli de import
- ✅ Poate importa din: \`@lib/*\`, alte componente \`@ui/*\`
- ❌ NU importa din: \`@features/*\`, \`@shared/*\`, \`@layout/*\`
- ❌ NU folosește: useContext, date specifice unui domeniu
`,

        'src/shared/reguli-stricte.md': `# Reguli Stricte — shared/

## Scop
Infrastructură partajată: constante, date de navigație, hook-uri globale, tipuri comune.

## Subdirectoare
- \`constants/\` — icons.ts, images.ts (registre de assets)
- \`data/\` — navigation.ts (date de navigație)
- \`hooks/\` — hook-uri globale viitoare
- \`types/\` — tipuri TypeScript partajate

## Reguli de import
- ✅ Poate importa din: \`@lib/*\`
- ❌ NU importa din: \`@features/*\`, \`@ui/*\`, \`@layout/*\`
`,
    };

    for (const [file, content] of Object.entries(governance)) {
        await writeFile(file, content);
        STATS.created++;
        log(5, `📋 ${file}`);
    }
}

// ═══════════════════════════════════════════════════════════════
// PHASE 6: UPDATE TSCONFIG.JSON
// ═══════════════════════════════════════════════════════════════
async function phase6_updateTsconfig() {
    log(6, '═══ Updating tsconfig.json ═══');

    const content = await readFile('tsconfig.json', 'utf-8');
    const config = JSON.parse(content);

    config.compilerOptions.paths = {
        '@/*': ['./src/*'],
        '@features/*': ['./src/features/*'],
        '@ui/*': ['./src/components/ui/*'],
        '@layout/*': ['./src/components/layout/*'],
        '@shared/*': ['./src/shared/*'],
        '@lib/*': ['./src/lib/*'],
    };

    await writeFile('tsconfig.json', JSON.stringify(config, null, 2) + '\n');
    log(6, '✅ tsconfig.json updated with new path aliases');
}

// ═══════════════════════════════════════════════════════════════
// PHASE 7: CLEANUP EMPTY DIRECTORIES
// ═══════════════════════════════════════════════════════════════
async function phase7_cleanup() {
    log(7, '═══ Cleaning up empty directories ═══');

    const dirsToCheck = [
        'src/components/services/clinical',
        'src/components/services/iv-drip',
        'src/components/services/quality',
        'src/components/services',
        'src/components/cariera/steps',
        'src/components/cariera',
        'src/components/login',
        'src/components/despre-noi',
        'src/components/contact',
        'src/context',
        'src/constants',
        'src/data',
    ];

    for (const dir of dirsToCheck) {
        try {
            const entries = await readdir(dir);
            const realEntries = entries.filter(e => e !== '.DS_Store');
            if (realEntries.length === 0) {
                await rm(dir, { recursive: true });
                log(7, `🗑️  Removed empty: ${dir}`);
            } else {
                log(7, `⚠️  Not empty (${realEntries.length} files): ${dir} → ${realEntries.join(', ')}`);
            }
        } catch {
            // Directory doesn't exist, already removed
        }
    }
}

// ═══════════════════════════════════════════════════════════════
// MAIN EXECUTION
// ═══════════════════════════════════════════════════════════════
async function main() {
    console.log('╔═══════════════════════════════════════════════════════════╗');
    console.log('║  MEDELISE — Feature-First Architecture Migration         ║');
    console.log('╚═══════════════════════════════════════════════════════════╝\n');

    const t0 = Date.now();

    await phase1_createDirectories();
    console.log('');
    await phase2_moveFiles();
    console.log('');
    await phase3_rewriteImports();
    console.log('');
    await phase4_barrelExports();
    console.log('');
    await phase5_governanceFiles();
    console.log('');
    await phase6_updateTsconfig();
    console.log('');
    await phase7_cleanup();

    const elapsed = ((Date.now() - t0) / 1000).toFixed(2);

    console.log('\n╔═══════════════════════════════════════════════════════════╗');
    console.log('║  MIGRATION COMPLETE                                      ║');
    console.log('╚═══════════════════════════════════════════════════════════╝');
    console.log(`\n📊 Results:`);
    console.log(`   📦 Files moved:     ${STATS.moved}`);
    console.log(`   ✏️  Files rewritten: ${STATS.rewritten}`);
    console.log(`   📝 Files created:   ${STATS.created}`);
    console.log(`   ❌ Errors:          ${STATS.errors}`);
    console.log(`   ⏱️  Time:           ${elapsed}s`);
    console.log(`\n🔍 Next: Run 'npm run build' to verify.`);
}

main().catch(err => {
    console.error('\n💥 FATAL ERROR:', err);
    process.exit(1);
});
