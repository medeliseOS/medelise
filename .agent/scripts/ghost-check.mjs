#!/usr/bin/env node

/**
 * ╔══════════════════════════════════════════════════════════════════════════╗
 * ║  Ghost Check — Medvita Remains Detector                                ║
 * ║  Detectează urme ale numelui vechi "Medvita" în codebase               ║
 * ╠══════════════════════════════════════════════════════════════════════════╣
 * ║  Rulare:  node .agent/scripts/ghost-check.mjs                          ║
 * ║  Output:  Console + .agent/reports/ghost-check-report.json             ║
 * ╚══════════════════════════════════════════════════════════════════════════╝
 */

import { readFileSync, readdirSync, statSync, mkdirSync, writeFileSync } from 'fs';
import { join, relative, extname, basename } from 'path';

// ─── CONFIG ───────────────────────────────────────────────────────────────────
const ROOT_DIR = process.cwd();
const SCAN_DIRS = ['apps', 'packages'];
const EXTENSIONS = ['.tsx', '.ts', '.css', '.json', '.md', '.mjs', '.js'];
const REPORT_DIR = join(ROOT_DIR, '.agent', 'reports');
const REPORT_PATH = join(REPORT_DIR, 'ghost-check-report.json');

// Fișiere excluse din verificare (referințe istorice permise)
const EXCLUDED_FILES = [
    'MASTER_ARCHITECTURE.md',
    'MEDELISE-ARCHITECTURE-RULES.md',
    'ghost-check.mjs',
];

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
                    if (['node_modules', '.next', '.git', 'dist'].includes(entry)) continue;
                    results = results.concat(getAllFiles(fullPath, exts));
                } else if (exts.includes(extname(entry))) {
                    if (!EXCLUDED_FILES.includes(basename(entry))) {
                        results.push(fullPath);
                    }
                }
            } catch { /* skip inaccessible */ }
        }
    } catch { /* skip inaccessible dirs */ }
    return results;
}

function relPath(absPath) {
    return relative(ROOT_DIR, absPath);
}

// ─── SCAN ─────────────────────────────────────────────────────────────────────
const findings = [];

// 1. Scan cod sursă
for (const scanDir of SCAN_DIRS) {
    const fullDir = join(ROOT_DIR, scanDir);
    try {
        const files = getAllFiles(fullDir, EXTENSIONS);
        for (const file of files) {
            try {
                const content = readFileSync(file, 'utf-8');
                const lines = content.split('\n');
                lines.forEach((line, idx) => {
                    if (/medvita/i.test(line)) {
                        findings.push({
                            file: relPath(file),
                            line: idx + 1,
                            type: detectContext(line),
                            content: line.trim().substring(0, 120),
                        });
                    }
                });
            } catch { /* skip */ }
        }
    } catch { /* dir doesn't exist */ }
}

// 2. Scan nume de fișiere
function scanFileNames(dir) {
    try {
        const entries = readdirSync(dir);
        for (const entry of entries) {
            const fullPath = join(dir, entry);
            try {
                const stat = statSync(fullPath);
                if (stat.isDirectory()) {
                    if (['node_modules', '.next', '.git'].includes(entry)) continue;
                    if (/medvita/i.test(entry)) {
                        findings.push({
                            file: relPath(fullPath),
                            line: 0,
                            type: 'FILENAME',
                            content: `Numele directorului conține "Medvita"`,
                        });
                    }
                    scanFileNames(fullPath);
                } else if (/medvita/i.test(entry)) {
                    findings.push({
                        file: relPath(fullPath),
                        line: 0,
                        type: 'FILENAME',
                        content: `Numele fișierului conține "Medvita"`,
                    });
                }
            } catch { /* skip */ }
        }
    } catch { /* skip */ }
}

for (const scanDir of SCAN_DIRS) {
    scanFileNames(join(ROOT_DIR, scanDir));
}

function detectContext(line) {
    if (/\/\/|\/\*|\*/.test(line)) return 'COMMENT';
    if (/alt=|title=|content=|meta|description/i.test(line)) return 'META/ALT';
    if (/import|require/.test(line)) return 'IMPORT';
    if (/"[^"]*medvita[^"]*"|'[^']*medvita[^']*'/i.test(line)) return 'STRING';
    return 'CODE';
}

// ─── REPORT ───────────────────────────────────────────────────────────────────
const timestamp = new Date().toISOString();
const total = findings.length;

// Grupare pe tipuri
const byType = findings.reduce((acc, f) => {
    acc[f.type] = (acc[f.type] || []);
    acc[f.type].push(f);
    return acc;
}, {});

// Console output
console.log('');
console.log('╔══════════════════════════════════════════════════════════════════════════╗');
console.log('║        👻 Ghost Check — Medvita Remains Detector                       ║');
console.log(`╠══════════════════════════════════════════════════════════════════════════╣`);
console.log(`║  Data scan:  ${timestamp.substring(0, 10).padEnd(58)} ║`);
console.log(`║  Referințe găsite: ${String(total).padStart(4)}                                           ║`);
console.log('╚══════════════════════════════════════════════════════════════════════════╝');
console.log('');

if (total === 0) {
    console.log('✅ PERFECT — Zero urme "Medvita" în codebase. Rebranding complet!\n');
} else {
    const typeLabels = {
        COMMENT: '💬 Comentarii',
        'META/ALT': '🏷️  Meta/Alt text',
        IMPORT: '📦 Importuri',
        STRING: '🔤 Stringuri',
        FILENAME: '📁 Nume fișiere',
        CODE: '⚙️  Cod',
    };

    for (const [type, items] of Object.entries(byType)) {
        console.log(`── ${typeLabels[type] || type} (${items.length}) ──\n`);
        for (const item of items.slice(0, 10)) {
            const loc = item.line > 0 ? `${item.file}:${item.line}` : item.file;
            console.log(`  📍 ${loc}`);
            console.log(`     ${item.content}`);
            console.log('');
        }
        if (items.length > 10) {
            console.log(`  ... și încă ${items.length - 10} apariții similare\n`);
        }
    }

    console.log(`\n⛔ ${total} referințe "Medvita" trebuie eliminate.\n`);
    console.log('💡 Fix automat (cu confirmare):');
    console.log('   find apps/ packages/ -type f \\( -name "*.tsx" -o -name "*.ts" \\) -exec sed -i \'s/Medvita/Medelise/gi\' {} +\n');
}

// Salvare JSON report
try {
    mkdirSync(REPORT_DIR, { recursive: true });
    writeFileSync(REPORT_PATH, JSON.stringify({
        timestamp,
        total,
        passed: total === 0,
        byType: Object.fromEntries(
            Object.entries(byType).map(([k, v]) => [k, v.length])
        ),
        findings,
    }, null, 2));
    console.log(`📄 Raport salvat: .agent/reports/ghost-check-report.json\n`);
} catch { /* skip */ }

process.exit(total > 0 ? 1 : 0);
