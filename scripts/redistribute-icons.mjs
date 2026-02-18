/**
 * Medelise — icon_model → icons-medelise Redistribution
 * Converts 893 PNG icons to WebP, renames with md-ico-{descriptor}.webp
 */

import sharp from 'sharp';
import { readdir, stat, mkdir } from 'fs/promises';
import { join, basename, extname } from 'path';

const SRC_ROOT = '/Users/mi/Desktop/icon_model';
const DEST_ROOT = 'public/icons-medelise';
const Q = { quality: 90, lossless: true };

/* ─── Category → destination folder mapping ─── */
const CATEGORY_MAP = {
    buildings: 'md-buildings',
    business: 'md-business',
    communication: 'md-communication',
    design: 'md-design',
    development: 'md-development',
    devices: 'md-devices',
    document: 'md-document',
    editor: 'md-editor',
    finance: 'md-finance',
    health: 'md-medical',      // merge into existing
    maps: 'md-maps',
    system: 'md-system',       // merge into existing
    weather: 'md-weather',
};

let success = 0, skipped = 0, failed = 0;

/**
 * Walk a directory recursively to find all image files
 */
async function walk(dir) {
    const entries = await readdir(dir, { withFileTypes: true });
    const files = [];
    for (const entry of entries) {
        const fullPath = join(dir, entry.name);
        if (entry.isDirectory()) {
            files.push(...await walk(fullPath));
        } else if (/\.(png|svg)$/i.test(entry.name)) {
            files.push(fullPath);
        }
    }
    return files;
}

/**
 * Convert filename: "heart-pulse-line.png" → "md-ico-heart-pulse.webp"
 * Strips -line suffix and adds md-ico- prefix
 */
function toWebpName(filename) {
    const name = basename(filename, extname(filename));
    // Remove trailing "-line" or "-fill" suffix
    const clean = name.replace(/-(line|fill)$/, '');
    return `md-ico-${clean}.webp`;
}

async function main() {
    console.log('═══ icon_model → icons-medelise Redistribution ═══\n');

    for (const [category, destFolder] of Object.entries(CATEGORY_MAP)) {
        const srcDir = join(SRC_ROOT, category);
        const destDir = join(DEST_ROOT, destFolder);

        await mkdir(destDir, { recursive: true });

        const files = await walk(srcDir);
        console.log(`📁 ${category}/ → ${destFolder}/ (${files.length} files)`);

        for (const srcPath of files) {
            const destName = toWebpName(srcPath);
            const destPath = join(destDir, destName);

            try {
                await sharp(srcPath).webp(Q).toFile(destPath);
                success++;
            } catch (err) {
                failed++;
                console.error(`  ❌ ${basename(srcPath)}: ${err.message}`);
            }
        }
    }

    console.log(`\n═══ Results ═══`);
    console.log(`✅ Converted: ${success}`);
    console.log(`❌ Failed: ${failed}`);
    console.log(`📊 Total: ${success + failed}`);
}

main().catch(console.error);
