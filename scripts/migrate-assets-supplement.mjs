/**
 * Medelise Asset Migration — Supplementary Conversion
 * Handles files missed in the first pass (remix-icons, logo-medvita, security, testimonials, watch).
 */

import sharp from 'sharp';
import { mkdir, stat } from 'fs/promises';
import { join, extname } from 'path';
import { existsSync } from 'fs';

const PUBLIC = 'public';
const Q_PHOTO = { quality: 82 };
const Q_ICON = { quality: 90, lossless: true };

const migrations = [
    // ── Login remix-icons → images-medelise/md-login/ ──
    ['images/quality/Login/remix-icons/line/business/mail-line.svg', 'images-medelise/md-login', 'md-img-login-ico-mail.webp', Q_ICON],
    ['images/quality/Login/remix-icons/line/system/lock-line.svg', 'images-medelise/md-login', 'md-img-login-ico-lock.webp', Q_ICON],
    ['images/quality/Login/remix-icons/line/system/eye-line.svg', 'images-medelise/md-login', 'md-img-login-ico-eye.webp', Q_ICON],
    ['images/quality/Login/remix-icons/line/system/search-line.svg', 'images-medelise/md-login', 'md-img-login-ico-search.webp', Q_ICON],
    ['images/quality/Login/remix-icons/line/system/share-box-line.svg', 'images-medelise/md-login', 'md-img-login-ico-share.webp', Q_ICON],
    ['images/quality/Login/remix-icons/line/system/arrow-down-s-line.svg', 'images-medelise/md-login', 'md-img-login-ico-arrow-down.webp', Q_ICON],
    ['images/quality/Login/remix-icons/line/business/calendar-check-line.svg', 'images-medelise/md-login', 'md-img-login-ico-calendar-check.webp', Q_ICON],
    ['images/quality/Login/remix-icons/line/business/pie-chart-line.svg', 'images-medelise/md-login', 'md-img-login-ico-pie-chart.webp', Q_ICON],
    ['images/quality/Login/remix-icons/line/health/empathize-line.svg', 'images-medelise/md-login', 'md-img-login-ico-empathize.webp', Q_ICON],
    ['images/quality/Login/remix-icons/line/health/first-aid-kit-line.svg', 'images-medelise/md-login', 'md-img-login-ico-first-aid.webp', Q_ICON],
    ['images/quality/Login/remix-icons/line/media/notification-3-line.svg', 'images-medelise/md-login', 'md-img-login-ico-notification.webp', Q_ICON],
    ['images/quality/Login/remix-icons/line/user/user-voice-line.svg', 'images-medelise/md-login', 'md-img-login-ico-user-voice.webp', Q_ICON],
    ['images/quality/Login/remix-icons/line/weather/moon-line.svg', 'images-medelise/md-login', 'md-img-login-ico-moon.webp', Q_ICON],
    ['images/quality/Login/remix-icons/line/weather/sun-line.svg', 'images-medelise/md-login', 'md-img-login-ico-sun.webp', Q_ICON],
    ['images/quality/Login/remix-icons/fill/business/calendar-event-fill.svg', 'images-medelise/md-login', 'md-img-login-ico-calendar-fill.webp', Q_ICON],
    ['images/quality/Login/remix-icons/fill/system/add-circle-fill.svg', 'images-medelise/md-login', 'md-img-login-ico-add-circle.webp', Q_ICON],

    // ── logo-medvita icons → brand-medelise/ ──
    ['icons/icon employee/logo-medvita/Black Solid/icon 1.svg', 'brand-medelise', 'md-logo-medvita-black.webp', Q_ICON],
    ['icons/icon employee/logo-medvita/Black Solid/icon 1-1.svg', 'brand-medelise', 'md-logo-medvita-black-alt.webp', Q_ICON],

    // ── security → images-medelise/md-security/ ──
    ['images/security/Touch ID.png', 'images-medelise/md-security', 'md-img-security-touch-id.webp', Q_PHOTO],

    // ── testimonials → images-medelise/md-testimonials/ ──
    ['images/testimonials/avatar.png', 'images-medelise/md-testimonials', 'md-img-testimonial-avatar.webp', Q_PHOTO],
    ['images/testimonials/star-50.png', 'images-medelise/md-testimonials', 'md-img-testimonial-star-50.webp', Q_ICON],
    ['images/testimonials/star-75.png', 'images-medelise/md-testimonials', 'md-img-testimonial-star-75.webp', Q_ICON],
    ['images/testimonials/star-full.png', 'images-medelise/md-testimonials', 'md-img-testimonial-star-full.webp', Q_ICON],
    ['images/testimonials/arrow-left.png', 'images-medelise/md-testimonials', 'md-img-testimonial-arrow-left.webp', Q_ICON],
    ['images/testimonials/arrow-right.png', 'images-medelise/md-testimonials', 'md-img-testimonial-arrow-right.webp', Q_ICON],

    // ── watch (existing file) → images-medelise/md-watch/ ──
    ['images/watch/iwatch-ultra-notifications.png', 'images-medelise/md-watch', 'md-img-iwatch-ultra-notifications.webp', Q_PHOTO],

    // ── anpc duplicate → images-medelise/md-quality/ ──
    ['images/quality/anpc-sal1-1.1.svg', 'images-medelise/md-quality', 'md-img-anpc-badge-alt.webp', Q_PHOTO],
];

let success = 0, skipped = 0, failed = 0;
const errors = [];

async function convertFile(srcRel, destFolder, destName, quality) {
    const srcPath = join(PUBLIC, srcRel);
    const destDir = join(PUBLIC, destFolder);
    const destPath = join(destDir, destName);

    if (!existsSync(srcPath)) {
        skipped++;
        console.log(`⏭  SKIP: ${srcRel}`);
        return;
    }

    try {
        await mkdir(destDir, { recursive: true });
        const ext = extname(srcRel).toLowerCase();
        if (ext === '.svg') {
            await sharp(srcPath, { density: 300 }).webp(quality).toFile(destPath);
        } else {
            await sharp(srcPath).webp(quality).toFile(destPath);
        }
        const srcStat = await stat(srcPath);
        const destStat = await stat(destPath);
        const savings = Math.round((1 - destStat.size / srcStat.size) * 100);
        console.log(`✅ ${srcRel} → ${destFolder}/${destName} (${savings > 0 ? '-' : '+'}${Math.abs(savings)}%)`);
        success++;
    } catch (err) {
        failed++;
        errors.push({ srcRel, error: err.message });
        console.error(`❌ FAIL: ${srcRel} → ${err.message}`);
    }
}

async function main() {
    console.log('═══ Supplementary Conversion ═══');
    for (const [src, dest, name, q] of migrations) await convertFile(src, dest, name, q);
    console.log(`\n✅ ${success} | ⏭ ${skipped} | ❌ ${failed}`);
    if (errors.length) errors.forEach(e => console.log(`  - ${e.srcRel}: ${e.error}`));
}

main().catch(console.error);
