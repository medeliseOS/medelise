#!/usr/bin/env node
/**
 * ═══════════════════════════════════════════════════════════════
 * MEDELISE — Architecture Audit Script
 * ═══════════════════════════════════════════════════════════════
 * 
 * Enforces the import matrix from MEDELISE-ARCHITECTURE-RULES.md.
 * Zero dependencies — runs on Node.js fs only.
 * 
 * Usage:
 *   node scripts/arch-audit.mjs           # Audit all src/
 *   node scripts/arch-audit.mjs file.tsx   # Audit specific files
 */

import { readFile, readdir, stat } from 'fs/promises';
import { join, relative, resolve } from 'path';

const SRC = resolve('src');

// ═══════════════════════════════════════════════════════════════
// RULES — Import Matrix from MEDELISE-ARCHITECTURE-RULES.md §2.1
// ═══════════════════════════════════════════════════════════════
const RULES = [
    {
        id: 'R1',
        name: 'ui-no-features',
        desc: 'components/ui/ (Atoms) must NOT import from features/',
        from: /^src\/components\/ui\//,
        toForbidden: /^(src\/features\/|@features\/)/,
    },
    {
        id: 'R2',
        name: 'ui-no-shared',
        desc: 'components/ui/ must NOT import from shared/',
        from: /^src\/components\/ui\//,
        toForbidden: /^(src\/shared\/|@shared\/)/,
    },
    {
        id: 'R3',
        name: 'ui-no-layout',
        desc: 'components/ui/ must NOT import from components/layout/',
        from: /^src\/components\/ui\//,
        toForbidden: /^(src\/components\/layout\/|@layout\/)/,
    },
    {
        id: 'R4',
        name: 'layout-no-features',
        desc: 'components/layout/ must NOT import from features/',
        from: /^src\/components\/layout\//,
        toForbidden: /^(src\/features\/|@features\/)/,
    },
    {
        id: 'R5',
        name: 'shared-no-features',
        desc: 'shared/ must NOT import from features/',
        from: /^src\/shared\//,
        toForbidden: /^(src\/features\/|@features\/)/,
    },
    {
        id: 'R6',
        name: 'shared-no-components',
        desc: 'shared/ must NOT import from components/',
        from: /^src\/shared\//,
        toForbidden: /^(src\/components\/|@ui\/|@layout\/)/,
    },
    {
        id: 'R7',
        name: 'lib-is-leaf',
        desc: 'lib/ must NOT import from features/, components/, or shared/',
        from: /^src\/lib\//,
        toForbidden: /^(src\/(features|components|shared)\/|@features\/|@ui\/|@layout\/|@shared\/)/,
    },
    {
        id: 'R8',
        name: 'no-import-from-app',
        desc: 'Only app/ files can import from app/ — no external imports from app/',
        from: /^src\/(?!app\/)/,
        toForbidden: /^(src\/app\/|@\/app\/)/,
    },
];

// ═══════════════════════════════════════════════════════════════
// SCANNER
// ═══════════════════════════════════════════════════════════════
const IMPORT_RE = /(?:import|export)\s+.*?\s+from\s+['"]([^'"]+)['"]/g;
const REQUIRE_RE = /require\s*\(\s*['"]([^'"]+)['"]\s*\)/g;

function extractImports(content) {
    const imports = [];
    for (const match of content.matchAll(IMPORT_RE)) {
        imports.push(match[1]);
    }
    for (const match of content.matchAll(REQUIRE_RE)) {
        imports.push(match[1]);
    }
    return imports;
}

function resolveImportPath(importPath) {
    // Resolve alias paths to src-relative paths for rule matching
    const aliasMap = {
        '@features/': 'src/features/',
        '@ui/': 'src/components/ui/',
        '@layout/': 'src/components/layout/',
        '@shared/': 'src/shared/',
        '@lib/': 'src/lib/',
        '@/': 'src/',
    };

    for (const [alias, resolved] of Object.entries(aliasMap)) {
        if (importPath.startsWith(alias)) {
            return importPath.replace(alias, resolved);
        }
    }
    return importPath;
}

async function walkFiles(dir) {
    const results = [];
    const entries = await readdir(dir, { withFileTypes: true });
    for (const entry of entries) {
        const full = join(dir, entry.name);
        if (entry.isDirectory()) {
            if (['node_modules', '.next', '.husky', '.git'].includes(entry.name)) continue;
            results.push(...await walkFiles(full));
        } else if (/\.(tsx?|mts)$/.test(entry.name)) {
            results.push(full);
        }
    }
    return results;
}

// ═══════════════════════════════════════════════════════════════
// MAIN
// ═══════════════════════════════════════════════════════════════
async function main() {
    const args = process.argv.slice(2);
    let files;

    if (args.length > 0) {
        // Audit specific files (for lint-staged)
        files = args.map(f => resolve(f));
    } else {
        // Audit entire src/
        files = await walkFiles('src');
    }

    const violations = [];

    for (const filePath of files) {
        const relPath = relative(process.cwd(), filePath);
        let content;
        try { content = await readFile(filePath, 'utf-8'); } catch { continue; }

        const imports = extractImports(content);

        for (const imp of imports) {
            // Skip node_modules / relative
            if (!imp.startsWith('@') && !imp.startsWith('src/')) continue;

            const resolvedImport = resolveImportPath(imp);

            for (const rule of RULES) {
                if (rule.from.test(relPath) && rule.toForbidden.test(resolvedImport)) {
                    violations.push({
                        rule: rule.id,
                        ruleName: rule.name,
                        file: relPath,
                        import: imp,
                        desc: rule.desc,
                    });
                }
            }
        }
    }

    // ═══ Output ═══
    if (violations.length === 0) {
        console.log('✅ Architecture audit passed — 0 violations');
        console.log(`   Scanned ${files.length} files against ${RULES.length} rules`);
        process.exit(0);
    } else {
        console.error(`❌ Architecture audit FAILED — ${violations.length} violation(s)\n`);
        for (const v of violations) {
            console.error(`  [${v.rule}] ${v.ruleName}`);
            console.error(`       File:   ${v.file}`);
            console.error(`       Import: ${v.import}`);
            console.error(`       Rule:   ${v.desc}\n`);
        }
        process.exit(1);
    }
}

main();
