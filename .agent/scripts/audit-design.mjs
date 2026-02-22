#!/usr/bin/env node

/**
 * ╔══════════════════════════════════════════════════════════════════════════╗
 * ║  SpheraOS Design Audit Script                                          ║
 * ║  Verificare completă a conformității cu Design System-ul               ║
 * ║  MEDELISE / careOS Ecosystem                                           ║
 * ╠══════════════════════════════════════════════════════════════════════════╣
 * ║  Rulare:  node .agent/scripts/audit-design.mjs                        ║
 * ║  Output:  Raport complet cu scor, erori și recomandări                 ║
 * ╚══════════════════════════════════════════════════════════════════════════╝
 */

import { readFileSync, readdirSync, statSync, mkdirSync, writeFileSync } from 'fs';
import { join, relative, extname } from 'path';

// ─── CONFIG ───────────────────────────────────────────────────────────────────
const SRC_DIR = join(process.cwd(), 'apps/web/src');
const PUBLIC_DIR = join(process.cwd(), 'apps/web/public');
const REPORT_DIR = join(process.cwd(), '.agent', 'reports');
const EXTENSIONS = ['.tsx', '.ts', '.css'];

// ─── DESIGN SYSTEM TOKENS (din globals.css) ──────────────────────────────────
const VALID_COLORS = {
    '--color-primary': '#213170',
    '--color-primary-hover': '#1A2659',
    '--color-accent': '#FE5D16',
    '--color-accent-hover': '#E54D0F',
    '--color-secondary': '#BDE0FF',
    '--color-surface': '#F8F9FA',
    '--color-surface-card': '#F5F5F5',
    '--color-surface-border': '#E5E7EB',
    '--color-text': '#232123',
    '--color-text-muted': '#637083',
    '--color-text-light': '#666D80',
    '--color-input-border': '#97a1af',
    '--color-border-light': '#CED2DA',
    '--color-border-form': '#DFE1E7',
    '--color-white': '#FFFFFF',
    '--color-success': '#10B981',
    '--color-error': '#E11D48',
    '--color-warning': '#F59E0B',
    '--color-info': '#0EA5E9',
};

const VALID_HEX_VALUES = new Set(
    Object.values(VALID_COLORS).map(v => v.toUpperCase())
);

// Hex-uri permise suplimentar (transparențe, rgba echivalenți, negru, alb simplu)
const ALLOWED_HEX_EXCEPTIONS = new Set([
    '#FFFFFF', '#FFF', '#000000', '#000', '#0000',
]);

const VALID_FONTS = [
    '--font-brand', '--font-heading', '--font-display', '--font-body', '--font-cta',
];

const VALID_SPACES = [
    '--space-1', '--space-2', '--space-3', '--space-4', '--space-5',
    '--space-6', '--space-7', '--space-8', '--space-10', '--space-12',
    '--space-14', '--space-16', '--space-20', '--space-24', '--space-28',
    '--space-section-px', '--space-section-px-sm', '--space-section-px-md', '--space-section-px-lg',
    '--space-section-py', '--space-section-py-tight', '--space-nav-x', '--gutter',
];

const VALID_RADII = [
    '--radius-sm', '--radius-main', '--radius-lg', '--radius-xl',
    '--radius-2xl', '--radius-full', '--radius-pill',
];

const VALID_SHADOWS = ['--shadow-sm', '--shadow-md', '--shadow-lg', '--shadow-focus'];

const VALID_TEXT_SIZES = [
    '--text-overline', '--text-caption', '--text-xs', '--text-sm',
    '--text-body', '--text-body-lg',
    '--text-h6', '--text-h5', '--text-h4', '--text-h3', '--text-h2', '--text-h1',
    '--text-display', '--text-lg', '--text-xl', '--text-2xl', '--text-3xl', '--text-4xl',
];

// ─── SEVERITY ─────────────────────────────────────────────────────────────────
const SEV = {
    CRITICAL: '🔴 CRITICAL',
    WARNING: '🟡 WARNING',
    INFO: '🔵 INFO',
};

// ─── UTILS ────────────────────────────────────────────────────────────────────
function getAllFiles(dir, exts) {
    let results = [];
    try {
        const entries = readdirSync(dir);
        for (const entry of entries) {
            const fullPath = join(dir, entry);
            try {
                const stat = statSync(fullPath);
                if (stat.isDirectory()) {
                    if (entry === 'node_modules' || entry === '.next') continue;
                    results = results.concat(getAllFiles(fullPath, exts));
                } else if (exts.includes(extname(entry))) {
                    results.push(fullPath);
                }
            } catch { /* skip inaccessible */ }
        }
    } catch { /* skip inaccessible dirs */ }
    return results;
}

function relPath(absPath) {
    return relative(process.cwd(), absPath);
}

// ─── ISSUE COLLECTOR ──────────────────────────────────────────────────────────
const issues = [];
const stats = {
    filesScanned: 0,
    totalLines: 0,
    hardcodedColors: 0,
    hardcodedFonts: 0,
    hardcodedPixels: 0,
    nativeButtons: 0,
    nativeInputs: 0,
    nativeAnchors: 0,
    nativeImgs: 0,
    inlineStyles: 0,
    missingAlt: 0,
    colorTokenUsage: 0,
    spaceTokenUsage: 0,
    // Security
    exposedSecrets: 0,
    dangerousHTML: 0,
    evalUsage: 0,
};

function addIssue(severity, category, file, line, message, code) {
    issues.push({ severity, category, file: relPath(file), line, message, code: code?.trim() });
}

// ═══════════════════════════════════════════════════════════════════════════════
// AUDIT CHECKS
// ═══════════════════════════════════════════════════════════════════════════════

function auditFile(filePath) {
    const content = readFileSync(filePath, 'utf-8');
    const lines = content.split('\n');
    const isGlobalsCss = filePath.includes('globals.css');
    const isButtonComponent = filePath.includes('Button.tsx') && filePath.includes('/ui/');
    const isInputComponent = filePath.includes('Input.tsx') && filePath.includes('/ui/');
    const ext = extname(filePath);

    stats.filesScanned++;
    stats.totalLines += lines.length;

    lines.forEach((line, idx) => {
        const lineNum = idx + 1;
        const trimmed = line.trim();

        // Skip comments
        if (trimmed.startsWith('//') || trimmed.startsWith('/*') || trimmed.startsWith('*')) return;

        // ── CHECK 1: Hardcoded Hex Colors ──────────────────────────────────────
        if (!isGlobalsCss) {
            const hexMatches = line.match(/#[0-9A-Fa-f]{3,8}\b/g);
            if (hexMatches) {
                for (const hex of hexMatches) {
                    const upper = hex.toUpperCase();
                    // Skip if it's an allowed exception or a valid DS color
                    if (ALLOWED_HEX_EXCEPTIONS.has(upper)) continue;
                    if (VALID_HEX_VALUES.has(upper)) {
                        // It's a DS color but used as hardcoded hex instead of var()
                        const tokenName = Object.entries(VALID_COLORS).find(
                            ([, v]) => v.toUpperCase() === upper
                        )?.[0];
                        addIssue(SEV.WARNING, 'COLOR', filePath, lineNum,
                            `Culoare DS "${hex}" folosită direct → folosește var(${tokenName})`,
                            trimmed
                        );
                        stats.hardcodedColors++;
                    } else {
                        // Rogue color not in DS
                        addIssue(SEV.CRITICAL, 'COLOR', filePath, lineNum,
                            `Culoare "${hex}" NU există în Design System`,
                            trimmed
                        );
                        stats.hardcodedColors++;
                    }
                }
            }

            // ── CHECK 1b: rgba() with non-standard colors ──────────────────────
            const rgbaMatches = line.match(/rgba\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)/g);
            if (rgbaMatches) {
                for (const rgba of rgbaMatches) {
                    // Allow black/white rgba
                    if (rgba.includes('0, 0, 0') || rgba.includes('255, 255, 255') || rgba.includes('33, 49, 112')) continue;
                    addIssue(SEV.INFO, 'COLOR', filePath, lineNum,
                        `rgba() hardcoded — verifică dacă corespunde unui token DS`,
                        trimmed
                    );
                }
            }
        }

        // ── CHECK 2: Hardcoded font-family ─────────────────────────────────────
        if (!isGlobalsCss && ext === '.tsx') {
            // Only flag if NOT using var() — font-family: var(...) is correct usage
            const fontFamilyMatch = line.match(/font-family\s*:\s*(?!var\()/i);
            if (fontFamilyMatch && !line.includes('var(')) {
                addIssue(SEV.WARNING, 'TYPOGRAPHY', filePath, lineNum,
                    `font-family hardcoded → folosește var(--font-heading), var(--font-body), etc.`,
                    trimmed
                );
                stats.hardcodedFonts++;
            }
        }

        // ── CHECK 3: Hardcoded font-size (non-variable) ────────────────────────
        if (!isGlobalsCss) {
            const fontSizeMatch = line.match(/font-size\s*:\s*(\d+)px/i);
            if (fontSizeMatch && !line.includes('var(')) {
                const px = parseInt(fontSizeMatch[1]);
                // Only flag sizes that should clearly be tokens
                if (px >= 14) {
                    addIssue(SEV.WARNING, 'TYPOGRAPHY', filePath, lineNum,
                        `font-size: ${px}px hardcoded → folosește var(--text-*) token`,
                        trimmed
                    );
                }
            }
        }

        // ── CHECK 4: Large Fixed Pixel Values (>100px for layout) ──────────────
        if (!isGlobalsCss) {
            // Skip @media queries — min-width in media queries is standard CSS
            if (!line.includes('@media') && !line.includes('min-width') && !line.includes('max-width') && !line.includes('max-height')) {
                const bigPxMatch = line.match(/(width|height|margin|padding|left|right|top|bottom|gap)\s*:\s*(\d+)px/i);
                if (bigPxMatch) {
                    const prop = bigPxMatch[1];
                    const px = parseInt(bigPxMatch[2]);
                    if (px > 100) {
                        addIssue(SEV.WARNING, 'SPACING', filePath, lineNum,
                            `${prop}: ${px}px → valoare fixă mare, folosește var(--space-*) sau clamp()`,
                            trimmed
                        );
                        stats.hardcodedPixels++;
                    }
                }
            }
        }

        // ── CHECK 5: Native <button> (nu <Button />) ──────────────────────────
        if (ext === '.tsx' && !isButtonComponent) {
            if (line.match(/<button[\s>]/) && !line.match(/<Button/) && !line.includes('// ok-native')) {
                addIssue(SEV.CRITICAL, 'COMPONENT', filePath, lineNum,
                    `<button> nativ detectat → folosește <Button /> din ui/`,
                    trimmed
                );
                stats.nativeButtons++;
            }
        }

        // ── CHECK 6: Native <input> (nu componentă centralizată) ──────────────
        if (ext === '.tsx' && !isInputComponent) {
            if (line.match(/<input[\s]/i) && !line.includes('// ok-native')) {
                // Don't flag hidden inputs or file inputs as aggressively
                if (!line.includes('type="hidden"') && !line.includes('type="file"')) {
                    addIssue(SEV.INFO, 'COMPONENT', filePath, lineNum,
                        `<input> nativ detectat → consideră folosirea unei componente Input centralizate`,
                        trimmed
                    );
                    stats.nativeInputs++;
                }
            }
        }

        // ── CHECK 7: Native <a> for internal links ────────────────────────────
        if (ext === '.tsx') {
            const anchorMatch = line.match(/<a\s+[^>]*href=["']\/[^"']*["']/);
            if (anchorMatch) {
                addIssue(SEV.CRITICAL, 'NAVIGATION', filePath, lineNum,
                    `<a href="/..."> nativ → folosește <Link> din next/link (previne full reload)`,
                    trimmed
                );
                stats.nativeAnchors++;
            }
        }

        // ── CHECK 8: Native <img> (nu <Image />) ──────────────────────────────
        if (ext === '.tsx') {
            if (line.match(/<img[\s]/i)) {
                addIssue(SEV.CRITICAL, 'IMAGE', filePath, lineNum,
                    `<img> nativ → folosește <Image> din next/image (lazy load + WebP automat)`,
                    trimmed
                );
                stats.nativeImgs++;
            }
        }

        // ── CHECK 9: Inline style objects (style={{...}}) ─────────────────────
        if (ext === '.tsx') {
            if (line.match(/style=\{\{/) && !line.includes('// ok-inline')) {
                addIssue(SEV.INFO, 'STYLE', filePath, lineNum,
                    `Stil inline detectat → preferă className cu variabile CSS`,
                    trimmed
                );
                stats.inlineStyles++;
            }
        }

        // ── CHECK 10: <Image> fără alt ────────────────────────────────────────
        if (ext === '.tsx') {
            if (line.match(/<Image\s/) && !content.substring(
                Math.max(0, content.indexOf(line) - 5),
                content.indexOf(line) + line.length + 200
            ).includes('alt=')) {
                addIssue(SEV.WARNING, 'A11Y', filePath, lineNum,
                    `<Image> posibil fără atribut alt → necesar pentru accesibilitate`,
                    trimmed
                );
                stats.missingAlt++;
            }
        }

        // ── CHECK 11: Token Usage Tracking ────────────────────────────────────
        if (line.includes('var(--color-')) stats.colorTokenUsage++;
        if (line.includes('var(--space-')) stats.spaceTokenUsage++;

        // ── CHECK 12: Secrete expuse în frontend ──────────────────────────────
        if (ext === '.tsx' || ext === '.ts') {
            // Skip .env files and server-only files
            const secretPattern = /(?:API_KEY|SECRET_KEY|PRIVATE_KEY|PASSWORD|api_key|secret_key)\s*[=:]\s*["'][^"']{8,}/;
            if (secretPattern.test(trimmed) && !trimmed.startsWith('//') && !filePath.includes('middleware')) {
                // Only flag if it's a hardcoded value, not an env var reference
                if (!trimmed.includes('process.env') && !trimmed.includes('NEXT_PUBLIC_')) {
                    addIssue(SEV.CRITICAL, 'SECURITY', filePath, lineNum,
                        `Secret posibil hardcoded detectat → mută în .env.local`,
                        trimmed
                    );
                    stats.exposedSecrets++;
                }
            }
        }

        // ── CHECK 13: dangerouslySetInnerHTML ────────────────────────────────
        if (ext === '.tsx' && line.includes('dangerouslySetInnerHTML')) {
            const hasSanitize = [
                'DOMPurify', 'sanitize', 'sanitizeHtml', 'xss'
            ].some(s => {
                try { return readFileSync(filePath, 'utf-8').includes(s); } catch { return false; }
            });
            addIssue(
                hasSanitize ? SEV.WARNING : SEV.CRITICAL,
                'SECURITY', filePath, lineNum,
                hasSanitize
                    ? `dangerouslySetInnerHTML detectat — sanitizare prezentă ✓ verifică corectitudinea`
                    : `dangerouslySetInnerHTML FĂRĂ sanitizare → risc XSS critic`,
                trimmed
            );
            stats.dangerousHTML++;
        }

        // ── CHECK 14: eval() / new Function() ────────────────────────────────
        if ((ext === '.tsx' || ext === '.ts') && /\beval\s*\(|new\s+Function\s*\(/.test(line)) {
            addIssue(SEV.CRITICAL, 'SECURITY', filePath, lineNum,
                `eval() sau new Function() detectat → vector de atac XSS`,
                trimmed
            );
            stats.evalUsage++;
        }
    });
}

// ═══════════════════════════════════════════════════════════════════════════════
// ASSET AUDIT
// ═══════════════════════════════════════════════════════════════════════════════

function auditAssets() {
    const assetIssues = [];
    try {
        const imgExtensions = ['.png', '.jpg', '.jpeg', '.gif', '.bmp'];
        const modernExtensions = ['.webp', '.avif', '.svg'];
        let totalImages = 0;
        let modernImages = 0;
        let oversizedImages = 0;

        function scanDir(dir) {
            try {
                const entries = readdirSync(dir);
                for (const entry of entries) {
                    const fullPath = join(dir, entry);
                    try {
                        const stat = statSync(fullPath);
                        if (stat.isDirectory()) {
                            scanDir(fullPath);
                        } else {
                            const ext = extname(entry).toLowerCase();
                            if (imgExtensions.includes(ext) || modernExtensions.includes(ext)) {
                                totalImages++;
                                if (modernExtensions.includes(ext)) modernImages++;
                                if (imgExtensions.includes(ext) && stat.size > 500 * 1024) {
                                    oversizedImages++;
                                    addIssue(SEV.WARNING, 'ASSET', fullPath, 0,
                                        `Imagine ${(stat.size / 1024).toFixed(0)}KB > 500KB → convertește la WebP`,
                                        entry
                                    );
                                }
                            }
                        }
                    } catch { /* skip */ }
                }
            } catch { /* skip */ }
        }

        scanDir(PUBLIC_DIR);

        return { totalImages, modernImages, oversizedImages };
    } catch {
        return { totalImages: 0, modernImages: 0, oversizedImages: 0 };
    }
}

// ═══════════════════════════════════════════════════════════════════════════════
// BRAND RULES CHECK
// ═══════════════════════════════════════════════════════════════════════════════

function auditBrandRules(files) {
    let medvitaCount = 0;

    for (const file of files) {
        try {
            const content = readFileSync(file, 'utf-8');
            const lines = content.split('\n');
            lines.forEach((line, idx) => {
                if (/medvita/i.test(line) && !file.includes('MASTER_ARCHITECTURE')) {
                    addIssue(SEV.CRITICAL, 'BRAND', file, idx + 1,
                        `Referință "Medvita" detectată → rebranding incomplet`,
                        line.trim()
                    );
                    medvitaCount++;
                }
            });
        } catch { /* skip */ }
    }

    return medvitaCount;
}

// ═══════════════════════════════════════════════════════════════════════════════
// REPORT GENERATOR
// ═══════════════════════════════════════════════════════════════════════════════

function generateReport(assetStats, medvitaCount) {
    const criticals = issues.filter(i => i.severity === SEV.CRITICAL);
    const warnings = issues.filter(i => i.severity === SEV.WARNING);
    const infos = issues.filter(i => i.severity === SEV.INFO);

    // ── Calculate scores ──
    const maxDemerits = Math.max(1, stats.filesScanned * 2);
    const demerits = criticals.length * 3 + warnings.length * 1.5 + infos.length * 0.5;
    const rawScore = Math.max(0, 100 - (demerits / maxDemerits) * 100);
    const score = Math.round(rawScore * 10) / 10;

    const modernPct = assetStats.totalImages > 0
        ? Math.round((assetStats.modernImages / assetStats.totalImages) * 100)
        : 100;

    console.log('');
    console.log('╔══════════════════════════════════════════════════════════════════════════╗');
    console.log('║           SpheraOS DESIGN AUDIT — Raport de Conformitate               ║');
    console.log('╠══════════════════════════════════════════════════════════════════════════╣');
    console.log(`║  Fișiere scanate    : ${String(stats.filesScanned).padStart(6)}                                      ║`);
    console.log(`║  Linii analizate    : ${String(stats.totalLines).padStart(6)}                                      ║`);
    console.log(`║  Probleme critice   : ${String(criticals.length).padStart(6)} 🔴                                   ║`);
    console.log(`║  Avertismente       : ${String(warnings.length).padStart(6)} 🟡                                   ║`);
    console.log(`║  Informative        : ${String(infos.length).padStart(6)} 🔵                                   ║`);
    console.log('╠══════════════════════════════════════════════════════════════════════════╣');

    // ── Score verdict ──
    let verdict, bar;
    if (score >= 90) { verdict = '✅ EXCELENT'; bar = '██████████'; }
    else if (score >= 75) { verdict = '⚠️  BUN'; bar = '████████░░'; }
    else if (score >= 60) { verdict = '🟡 MEDIU'; bar = '██████░░░░'; }
    else { verdict = '🔴 SLAB'; bar = '████░░░░░░'; }

    console.log(`║  SCOR DESIGN SYSTEM : ${String(score + '%').padStart(6)} ${bar}  ${verdict.padEnd(14)} ║`);
    console.log('╚══════════════════════════════════════════════════════════════════════════╝');
    console.log('');

    // ── Detail tables ──
    const categories = {};
    for (const issue of issues) {
        if (!categories[issue.category]) categories[issue.category] = [];
        categories[issue.category].push(issue);
    }

    const categoryNames = {
        COLOR: '🎨 Culori',
        TYPOGRAPHY: '🔤 Tipografie',
        SPACING: '📐 Spațiere',
        COMPONENT: '🧩 Componente',
        NAVIGATION: '🔗 Navigare',
        IMAGE: '🖼️  Imagini',
        STYLE: '✨ Stiluri',
        A11Y: '♿ Accesibilitate',
        ASSET: '📦 Asset-uri',
        BRAND: '👻 Rebranding',
    };

    for (const [cat, catIssues] of Object.entries(categories)) {
        console.log(`\n── ${categoryNames[cat] || cat} (${catIssues.length} probleme) ──`);
        console.log('');

        // Show max 10 per category to keep output readable
        const shown = catIssues.slice(0, 10);
        for (const issue of shown) {
            const loc = issue.line > 0 ? `${issue.file}:${issue.line}` : issue.file;
            console.log(`  ${issue.severity}  ${loc}`);
            console.log(`    → ${issue.message}`);
            if (issue.code) console.log(`    │ ${issue.code.substring(0, 100)}`);
            console.log('');
        }

        if (catIssues.length > 10) {
            console.log(`  ... și încă ${catIssues.length - 10} probleme similare\n`);
        }
    }

    // ── Summary Dashboard ──
    console.log('\n╔══════════════════════════════════════════════════════════════════════════╗');
    console.log('║                        DASHBOARD SUMAR                                 ║');
    console.log('╠══════════════════════════════════════════════════════════════════════════╣');
    console.log(`║  Culori hardcoded       : ${String(stats.hardcodedColors).padStart(4)}  │  Token var(--color-*) : ${String(stats.colorTokenUsage).padStart(4)}    ║`);
    console.log(`║  Font-uri hardcoded     : ${String(stats.hardcodedFonts).padStart(4)}  │  Token var(--space-*) : ${String(stats.spaceTokenUsage).padStart(4)}    ║`);
    console.log(`║  Pixeli ficși >100px    : ${String(stats.hardcodedPixels).padStart(4)}  │  Inline styles        : ${String(stats.inlineStyles).padStart(4)}    ║`);
    console.log(`║  <button> native        : ${String(stats.nativeButtons).padStart(4)}  │  <input> native        : ${String(stats.nativeInputs).padStart(4)}    ║`);
    console.log(`║  <a> intern (nu Link)   : ${String(stats.nativeAnchors).padStart(4)}  │  <img> (nu Image)      : ${String(stats.nativeImgs).padStart(4)}    ║`);
    console.log(`║  Imagini >500KB         : ${String(assetStats.oversizedImages).padStart(4)}  │  Format modern (WebP)  : ${String(modernPct + '%').padStart(4)}    ║`);
    console.log(`║  Referințe "Medvita"    : ${String(medvitaCount).padStart(4)}  │                               ║`);
    console.log('╠══════════════════════════════════════════════════════════════════════════╣');
    console.log('║  REGULI BRAND:                                                         ║');
    console.log(`║    Orange (#FE5D16) doar pt accent/highlight : ${medvitaCount === 0 ? '✅' : '⚠️ '}                        ║`);
    console.log(`║    Pe Indigo doar alb sau Baby Blue          : verificare manuală       ║`);
    console.log(`║    Michroma pt brand, Inter pt display       : ${stats.hardcodedFonts === 0 ? '✅' : '⚠️ '}                        ║`);
    console.log('╚══════════════════════════════════════════════════════════════════════════╝');

    // ── Security summary ──
    const securityIssues = issues.filter(i => i.category === 'SECURITY');
    if (securityIssues.length > 0) {
        console.log('\n╔══════════════════════════════════════════════════════════════════════════╗');
        console.log('║                     🛡️  SECURITATE — Probleme detectate                 ║');
        console.log('╠══════════════════════════════════════════════════════════════════════════╣');
        console.log(`║  Secrete expuse    : ${String(stats.exposedSecrets).padStart(4)}                                           ║`);
        console.log(`║  dangerousHTML     : ${String(stats.dangerousHTML).padStart(4)}                                           ║`);
        console.log(`║  eval() / Function : ${String(stats.evalUsage).padStart(4)}                                           ║`);
        console.log('╚══════════════════════════════════════════════════════════════════════════╝');
    }

    // ── Save JSON report ──
    try {
        mkdirSync(REPORT_DIR, { recursive: true });
        const report = {
            timestamp: new Date().toISOString(),
            score,
            verdict,
            stats,
            assetStats,
            medvitaCount,
            summary: { criticals: criticals.length, warnings: warnings.length, infos: infos.length },
            issues,
        };
        writeFileSync(
            join(REPORT_DIR, 'audit-design-report.json'),
            JSON.stringify(report, null, 2)
        );
        console.log('\n📄 Raport JSON salvat: .agent/reports/audit-design-report.json\n');
    } catch { /* skip if can't write */ }

    // ── Exit code ──
    if (criticals.length > 0) {
        console.log(`\n⛔ ${criticals.length} probleme CRITICE necesită rezolvare imediată.\n`);
        process.exit(1);
    } else if (warnings.length > 0) {
        console.log(`\n⚠️  ${warnings.length} avertismente de revizuit.\n`);
        process.exit(0);
    } else {
        console.log('\n✅ Proiectul respectă complet SpheraOS Design System. Zero probleme.\n');
        process.exit(0);
    }
}

// ═══════════════════════════════════════════════════════════════════════════════
// MAIN
// ═══════════════════════════════════════════════════════════════════════════════

console.log('');
console.log('🔍 SpheraOS Design Audit — Scanare în curs...');
console.log(`   Sursa: ${relPath(SRC_DIR)}`);
console.log('');

const files = getAllFiles(SRC_DIR, EXTENSIONS);

// Run all audits
for (const file of files) {
    auditFile(file);
}

const assetStats = auditAssets();
const medvitaCount = auditBrandRules(files);

// Generate report
generateReport(assetStats, medvitaCount);
