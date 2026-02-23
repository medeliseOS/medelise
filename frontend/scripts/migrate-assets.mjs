/**
 * Medelise Asset Migration Script
 * Converts all assets to .webp and moves them to the new namespaced structure.
 *
 * Usage: node scripts/migrate-assets.mjs
 */

import sharp from 'sharp';
import { readdir, mkdir, copyFile, stat } from 'fs/promises';
import { join, extname, basename } from 'path';
import { existsSync } from 'fs';

const PUBLIC = 'public';
const DRY_RUN = false; // set true to preview without writing

// ─── Quality Tiers ───────────────────────────────────────────────
const Q_PHOTO = { quality: 82 };       // photos, hero, product
const Q_ICON = { quality: 90, lossless: true };  // small icons
const Q_LOGO = { quality: 95, lossless: true };  // brand logos

// ─── Migration Map ───────────────────────────────────────────────
// [source, destFolder, destFilename, qualityTier]
const migrations = [
    // ── brand-medelise/ ──
    ['icons/medelise-logo-full.png', 'brand-medelise', 'md-logo-full.webp', Q_LOGO],
    ['icons/medelise-wordmark.png', 'brand-medelise', 'md-wordmark.webp', Q_LOGO],
    ['images/logo/logo_os_vivid_orange.svg', 'brand-medelise', 'md-logo-os-vividorange.webp', Q_LOGO],
    ['images/logo/icon_logo/icon_os+_indigo.png', 'brand-medelise', 'md-logo-icon-indigo.webp', Q_LOGO],
    ['images/logo/icon_logo/icon_os+_charcoal.png', 'brand-medelise', 'md-logo-icon-charcoal.webp', Q_LOGO],
    ['images/logo/icon_logo/icon_os+_babyblue.png', 'brand-medelise', 'md-logo-icon-babyblue.webp', Q_LOGO],
    ['images/logo/icon_logo/icon_os+_lightgrey.png', 'brand-medelise', 'md-logo-icon-lightgrey.webp', Q_LOGO],
    ['images/logo/icon_logo/icon_os+_vividorange.png', 'brand-medelise', 'md-logo-icon-vividorange.webp', Q_LOGO],
    ['images/logo/icon_logo/icon_os_indigo.png', 'brand-medelise', 'md-logo-icon-os-indigo.webp', Q_LOGO],
    ['images/logo/icon_logo/icon_os_white.png', 'brand-medelise', 'md-logo-icon-os-white.webp', Q_LOGO],

    // ── icons-medelise/md-system/ ──
    ['icons/Arrow Right Icon.svg', 'icons-medelise/md-system', 'md-ico-arrow-right.webp', Q_ICON],
    ['icons/icon-arrow-left.png', 'icons-medelise/md-system', 'md-ico-arrow-left.webp', Q_ICON],
    ['icons/icon-arrow-right.png', 'icons-medelise/md-system', 'md-ico-arrow-right-png.webp', Q_ICON],
    ['icons/icon-arrow-up-right.svg', 'icons-medelise/md-system', 'md-ico-arrow-up-right.webp', Q_ICON],
    ['icons/chevron-down.png', 'icons-medelise/md-system', 'md-ico-chevron-down.webp', Q_ICON],
    ['icons/icon-chevron-down.png', 'icons-medelise/md-system', 'md-ico-chevron-down-alt.webp', Q_ICON],
    ['icons/close.png', 'icons-medelise/md-system', 'md-ico-close.webp', Q_ICON],
    ['icons/icon-close.png', 'icons-medelise/md-system', 'md-ico-close-alt.webp', Q_ICON],
    ['icons/hamburger-menu.png', 'icons-medelise/md-system', 'md-ico-menu.webp', Q_ICON],
    ['icons/icon-menu.png', 'icons-medelise/md-system', 'md-ico-menu-alt.webp', Q_ICON],
    ['icons/icon-search.png', 'icons-medelise/md-system', 'md-ico-search.webp', Q_ICON],
    ['icons/check.svg', 'icons-medelise/md-system', 'md-ico-check.webp', Q_ICON],
    ['icons/icon-check.svg', 'icons-medelise/md-system', 'md-ico-check-alt.webp', Q_ICON],
    ['icons/check-circle.png', 'icons-medelise/md-system', 'md-ico-check-circle.webp', Q_ICON],
    ['icons/Add.svg', 'icons-medelise/md-system', 'md-ico-add.webp', Q_ICON],
    ['icons/Remove.svg', 'icons-medelise/md-system', 'md-ico-remove.webp', Q_ICON],
    ['icons/More Icon.svg', 'icons-medelise/md-system', 'md-ico-more.webp', Q_ICON],
    ['icons/Calendar Icon.svg', 'icons-medelise/md-system', 'md-ico-calendar.webp', Q_ICON],
    ['icons/Timer.svg', 'icons-medelise/md-system', 'md-ico-timer.webp', Q_ICON],
    ['icons/icon-timer.svg', 'icons-medelise/md-system', 'md-ico-timer-alt.webp', Q_ICON],
    ['icons/Chart Icon.svg', 'icons-medelise/md-system', 'md-ico-chart.webp', Q_ICON],
    ['icons/Chart Icon-1.svg', 'icons-medelise/md-system', 'md-ico-chart-alt.webp', Q_ICON],
    ['icons/Line.svg', 'icons-medelise/md-system', 'md-ico-line.webp', Q_ICON],
    ['icons/Star Solid Full.svg', 'icons-medelise/md-system', 'md-ico-star.webp', Q_ICON],
    ['icons/icon employee/Calendar.svg', 'icons-medelise/md-system', 'md-ico-calendar-emp.webp', Q_ICON],
    ['icons/icon employee/Copy.svg', 'icons-medelise/md-system', 'md-ico-copy.webp', Q_ICON],
    ['icons/icon employee/Flag.svg', 'icons-medelise/md-system', 'md-ico-flag.webp', Q_ICON],
    ['icons/icon employee/Suitcase.svg', 'icons-medelise/md-system', 'md-ico-suitcase.webp', Q_ICON],
    ['icons/icon employee/Money Dollar.svg', 'icons-medelise/md-system', 'md-ico-money-dollar.webp', Q_ICON],
    ['icons/icon employee/Location Point.svg', 'icons-medelise/md-system', 'md-ico-location-emp.webp', Q_ICON],
    ['icons/icon-box.svg', 'icons-medelise/md-system', 'md-ico-box.webp', Q_ICON],

    // ── icons-medelise/md-medical/ ──
    ['icons/icon-stethoscope.svg', 'icons-medelise/md-medical', 'md-ico-stethoscope.webp', Q_ICON],
    ['icons/icon-ambulance.svg', 'icons-medelise/md-medical', 'md-ico-ambulance.webp', Q_ICON],
    ['icons/Heart.svg', 'icons-medelise/md-medical', 'md-ico-heart.webp', Q_ICON],
    ['icons/Atom.svg', 'icons-medelise/md-medical', 'md-ico-atom.webp', Q_ICON],
    ['icons/adn.svg', 'icons-medelise/md-medical', 'md-ico-adn.webp', Q_ICON],

    // ── icons-medelise/md-social/ ──
    ['icons/Social icon.svg', 'icons-medelise/md-social', 'md-ico-social-01.webp', Q_ICON],
    ['icons/Social icon-1.svg', 'icons-medelise/md-social', 'md-ico-social-02.webp', Q_ICON],
    ['icons/icon employee/Facebook.svg', 'icons-medelise/md-social', 'md-ico-facebook.webp', Q_ICON],
    ['icons/icon employee/twitter.svg', 'icons-medelise/md-social', 'md-ico-twitter.webp', Q_ICON],

    // ── icons-medelise/md-about/ ──
    ['icons/about_us_icon/check-circle.svg', 'icons-medelise/md-about', 'md-ico-check-circle.webp', Q_ICON],
    ['icons/about_us_icon/check-folder.svg', 'icons-medelise/md-about', 'md-ico-check-folder.webp', Q_ICON],
    ['icons/about_us_icon/dollar-coin.svg', 'icons-medelise/md-about', 'md-ico-dollar-coin.webp', Q_ICON],
    ['icons/about_us_icon/email-open.svg', 'icons-medelise/md-about', 'md-ico-email-open.webp', Q_ICON],
    ['icons/about_us_icon/mobile.svg', 'icons-medelise/md-about', 'md-ico-mobile.webp', Q_ICON],
    ['icons/about_us_icon/pie-chart-line.svg', 'icons-medelise/md-about', 'md-ico-pie-chart.webp', Q_ICON],
    ['icons/about_us_icon/timer.svg', 'icons-medelise/md-about', 'md-ico-timer.webp', Q_ICON],
    ['icons/about_us_icon/underline-marker.svg', 'icons-medelise/md-about', 'md-ico-underline-marker.webp', Q_ICON],
    ['icons/about_us_icon/user-group.svg', 'icons-medelise/md-about', 'md-ico-user-group.webp', Q_ICON],

    // ── images-medelise/md-hero/ ──
    ['images/hero/background.png', 'images-medelise/md-hero', 'md-img-hero-bg.webp', Q_PHOTO],
    ['images/hero/adn_hero_section.jpeg', 'images-medelise/md-hero', 'md-img-hero-adn.webp', Q_PHOTO],
    ['images/hero/Gemini_Generated_Image_d94yy1d94yy1d94y.jpeg', 'images-medelise/md-hero', 'md-img-hero-medical-01.webp', Q_PHOTO],
    ['images/hero/Gemini_Generated_Image_zcoer0zcoer0zcoe.jpeg', 'images-medelise/md-hero', 'md-img-hero-medical-02.webp', Q_PHOTO],
    ['images/hero/avatar-1.png', 'images-medelise/md-hero', 'md-img-avatar-01.webp', Q_PHOTO],
    ['images/hero/avatar-2.png', 'images-medelise/md-hero', 'md-img-avatar-02.webp', Q_PHOTO],
    ['images/hero/avatar-3.png', 'images-medelise/md-hero', 'md-img-avatar-03.webp', Q_PHOTO],

    // ── images-medelise/md-iv-drip/ ──
    ['images/iv-drip/all-inclusive.png', 'images-medelise/md-iv-drip', 'md-img-drip-all-inclusive.webp', Q_PHOTO],
    ['images/iv-drip/beauty.png', 'images-medelise/md-iv-drip', 'md-img-drip-beauty.webp', Q_PHOTO],
    ['images/iv-drip/boost-energy.png', 'images-medelise/md-iv-drip', 'md-img-drip-boost-energy.webp', Q_PHOTO],
    ['images/iv-drip/dehydration.png', 'images-medelise/md-iv-drip', 'md-img-drip-dehydration.webp', Q_PHOTO],
    ['images/iv-drip/fertility+.png', 'images-medelise/md-iv-drip', 'md-img-drip-fertility.webp', Q_PHOTO],
    ['images/iv-drip/gastroenteritis.png', 'images-medelise/md-iv-drip', 'md-img-drip-gastroenteritis.webp', Q_PHOTO],
    ['images/iv-drip/hangover.png', 'images-medelise/md-iv-drip', 'md-img-drip-hangover.webp', Q_PHOTO],
    ['images/iv-drip/headache-relif.png', 'images-medelise/md-iv-drip', 'md-img-drip-headache-relief.webp', Q_PHOTO],
    ['images/iv-drip/immune-boost.png', 'images-medelise/md-iv-drip', 'md-img-drip-immune-boost.webp', Q_PHOTO],
    ['images/iv-drip/myers-cocktail.png', 'images-medelise/md-iv-drip', 'md-img-drip-myers-cocktail.webp', Q_PHOTO],
    ['images/iv-drip/recovery.png', 'images-medelise/md-iv-drip', 'md-img-drip-recovery.webp', Q_PHOTO],
    ['images/iv-drip/super-immune-boost.png', 'images-medelise/md-iv-drip', 'md-img-drip-super-immune.webp', Q_PHOTO],

    // ── images-medelise/md-quality/ ──
    ['images/quality/dashboard-screenshot.png', 'images-medelise/md-quality', 'md-img-dashboard-screenshot.webp', Q_PHOTO],
    ['images/quality/macbook-tablet.png', 'images-medelise/md-quality', 'md-img-macbook-tablet.webp', Q_PHOTO],
    ['images/quality/splash-iv.png', 'images-medelise/md-quality', 'md-img-splash-iv.webp', Q_PHOTO],
    ['images/quality/a1dae6b8030af2462e8a677865b582caa19ad724.png', 'images-medelise/md-quality', 'md-img-quality-splash-alt.webp', Q_PHOTO],
    ['images/quality/87be9a137ace8b48af42d3a70a78a3cd7a1d29da.png', 'images-medelise/md-quality', 'md-img-quality-hero.webp', Q_PHOTO],
    ['images/quality/c50359054fcb5c47ab34bdf7f3240732a85dd38d.png', 'images-medelise/md-quality', 'md-img-quality-portrait.webp', Q_PHOTO],
    ['images/quality/ea9cadf167f41d73b0c8d437bff884168863a42c.png', 'images-medelise/md-quality', 'md-img-quality-large.webp', Q_PHOTO],
    ['images/quality/fb028d9baf828407e9f6d1df9867e1c14a63d3e0.png', 'images-medelise/md-quality', 'md-img-quality-wide.webp', Q_PHOTO],
    ['images/quality/b3368399f0c0cb5e1f0224477dc9d986000fd6f5.png', 'images-medelise/md-quality', 'md-img-quality-badge.webp', Q_PHOTO],
    ['images/quality/left-light.png', 'images-medelise/md-quality', 'md-img-left-light.webp', Q_PHOTO],
    ['images/quality/macbook-foot.png', 'images-medelise/md-quality', 'md-img-macbook-foot.webp', Q_PHOTO],
    ['images/quality/macbook-foot-alt.png', 'images-medelise/md-quality', 'md-img-macbook-foot-alt.webp', Q_PHOTO],
    ['images/quality/macbook-notch.png', 'images-medelise/md-quality', 'md-img-macbook-notch.webp', Q_PHOTO],

    // ── images-medelise/md-quality/ (SVGs converted) ──
    ['images/quality/macbook-mockup.svg', 'images-medelise/md-quality', 'md-img-macbook-mockup.webp', Q_PHOTO],
    ['images/quality/girl 2.svg', 'images-medelise/md-quality', 'md-img-girl-model.webp', Q_PHOTO],
    ['images/quality/water-medvita-splash-IV.svg', 'images-medelise/md-quality', 'md-img-water-splash.webp', Q_PHOTO],
    ['images/quality/image 76.svg', 'images-medelise/md-quality', 'md-img-quality-illustration.webp', Q_PHOTO],
    ['images/quality/anpc-sal1-1.svg', 'images-medelise/md-quality', 'md-img-anpc-badge.webp', Q_PHOTO],
    ['images/quality/Email.svg', 'images-medelise/md-quality', 'md-img-email-icon.webp', Q_ICON],
    ['images/quality/Facebook.svg', 'images-medelise/md-quality', 'md-img-facebook-icon.webp', Q_ICON],
    ['images/quality/Phone.svg', 'images-medelise/md-quality', 'md-img-phone-icon.webp', Q_ICON],
    ['images/quality/Location Point.svg', 'images-medelise/md-quality', 'md-img-location-icon.webp', Q_ICON],
    ['images/quality/instagram.svg', 'images-medelise/md-quality', 'md-img-instagram-icon.webp', Q_ICON],
    ['images/quality/linkedin.svg', 'images-medelise/md-quality', 'md-img-linkedin-icon.webp', Q_ICON],
    ['images/quality/twitter.svg', 'images-medelise/md-quality', 'md-img-twitter-icon.webp', Q_ICON],

    // ── images-medelise/md-login/ ──
    ['images/quality/Login/orange_medelise_login.svg', 'images-medelise/md-login', 'md-img-login-brand.webp', Q_PHOTO],
    ['images/quality/Login/Intersect.svg', 'images-medelise/md-login', 'md-img-login-intersect-01.webp', Q_PHOTO],
    ['images/quality/Login/Intersect-1.svg', 'images-medelise/md-login', 'md-img-login-intersect-02.webp', Q_PHOTO],
    ['images/quality/Login/Intersect-2.svg', 'images-medelise/md-login', 'md-img-login-intersect-03.webp', Q_PHOTO],
    ['images/quality/Login/Intersect-3.svg', 'images-medelise/md-login', 'md-img-login-intersect-04.webp', Q_PHOTO],
    ['images/quality/Login/Intersect-4.svg', 'images-medelise/md-login', 'md-img-login-intersect-05.webp', Q_PHOTO],
    ['images/quality/Login/human-body-frontal 1.svg', 'images-medelise/md-login', 'md-img-login-human-body.webp', Q_PHOTO],
    ['images/quality/Login/material-symbols_dermatology.svg', 'images-medelise/md-login', 'md-img-login-dermatology.webp', Q_ICON],
    ['images/quality/Login/Arrow Right Icon.svg', 'images-medelise/md-login', 'md-img-login-arrow-right.webp', Q_ICON],
    ['images/quality/Login/Calendar Icon.svg', 'images-medelise/md-login', 'md-img-login-calendar.webp', Q_ICON],
    ['images/quality/Login/More Icon.svg', 'images-medelise/md-login', 'md-img-login-more.webp', Q_ICON],
    ['images/quality/Login/Timer Icon.svg', 'images-medelise/md-login', 'md-img-login-timer.webp', Q_ICON],
    ['images/quality/Login/Social icon.svg', 'images-medelise/md-login', 'md-img-login-social-01.webp', Q_ICON],
    ['images/quality/Login/Social icon-1.svg', 'images-medelise/md-login', 'md-img-login-social-02.webp', Q_ICON],

    // ── images-medelise/md-portal/ ──
    ['images/portal/main-image.svg', 'images-medelise/md-portal', 'md-img-portal-main.webp', Q_PHOTO],
    ['images/portal/side-image.svg', 'images-medelise/md-portal', 'md-img-portal-side.webp', Q_PHOTO],

    // ── images-medelise/md-owner/ ──
    ['images/owner/owner.jpeg', 'images-medelise/md-owner', 'md-img-owner.webp', Q_PHOTO],

    // ── images-medelise/md-watch/ ──
    ['iwatch-hero.png', 'images-medelise/md-watch', 'md-img-iwatch-hero.webp', Q_PHOTO],
    ['iwatch.png', 'images-medelise/md-watch', 'md-img-iwatch.webp', Q_PHOTO],
    ['iwatch_ultra_medelise.png', 'images-medelise/md-watch', 'md-img-iwatch-ultra.webp', Q_PHOTO],

    // ── root favicon ──
    ['icon.png', '', 'favicon.webp', Q_LOGO],

    // ── Ellipse shapes (decorative) ── → md-system
    ['icons/Ellipse 5.svg', 'icons-medelise/md-system', 'md-ico-ellipse-sm-01.webp', Q_ICON],
    ['icons/Ellipse 6.svg', 'icons-medelise/md-system', 'md-ico-ellipse-sm-02.webp', Q_ICON],
    ['icons/Ellipse 20.svg', 'icons-medelise/md-system', 'md-ico-ellipse-md-01.webp', Q_ICON],
    ['icons/Ellipse 22.svg', 'icons-medelise/md-system', 'md-ico-ellipse-md-02.webp', Q_ICON],
    ['icons/Ellipse 28.svg', 'icons-medelise/md-system', 'md-ico-ellipse-lg.webp', Q_ICON],
    ['icons/Ellipse 633.svg', 'icons-medelise/md-system', 'md-ico-ellipse-xl.webp', Q_ICON],

    // ── Intersect shapes (decorative blobs in icons root) ── → md-quality
    ['icons/Intersect.svg', 'images-medelise/md-quality', 'md-img-intersect-01.webp', Q_PHOTO],
    ['icons/Intersect-1.svg', 'images-medelise/md-quality', 'md-img-intersect-02.webp', Q_PHOTO],
    ['icons/Intersect-2.svg', 'images-medelise/md-quality', 'md-img-intersect-03.webp', Q_PHOTO],
    ['icons/Intersect-3.svg', 'images-medelise/md-quality', 'md-img-intersect-04.webp', Q_PHOTO],
    ['icons/Intersect-4.svg', 'images-medelise/md-quality', 'md-img-intersect-05.webp', Q_PHOTO],

    // ── Vector elements ── → md-system
    ['icons/Vector.svg', 'icons-medelise/md-system', 'md-ico-vector-01.webp', Q_ICON],
    ['icons/Vector-1.svg', 'icons-medelise/md-system', 'md-ico-vector-02.webp', Q_ICON],
    ['icons/Vector-2.svg', 'icons-medelise/md-system', 'md-ico-vector-03.webp', Q_ICON],
    ['icons/Vector-3.svg', 'icons-medelise/md-system', 'md-ico-vector-04.webp', Q_ICON],

    // ── iv-drip Photo.svg ──
    ['images/iv-drip/Photo.svg', 'images-medelise/md-iv-drip', 'md-img-drip-photo.webp', Q_PHOTO],
];

// ─── Conversion Engine ───────────────────────────────────────────
let success = 0;
let skipped = 0;
let failed = 0;
const errors = [];

async function convertFile(srcRel, destFolder, destName, quality) {
    const srcPath = join(PUBLIC, srcRel);
    const destDir = destFolder ? join(PUBLIC, destFolder) : PUBLIC;
    const destPath = join(destDir, destName);

    if (!existsSync(srcPath)) {
        skipped++;
        console.log(`⏭  SKIP (not found): ${srcRel}`);
        return;
    }

    if (DRY_RUN) {
        console.log(`🔍 DRY: ${srcRel} → ${destFolder}/${destName}`);
        return;
    }

    try {
        await mkdir(destDir, { recursive: true });

        const ext = extname(srcRel).toLowerCase();

        if (ext === '.svg') {
            // For SVGs, use sharp with density for good rendering
            await sharp(srcPath, { density: 300 })
                .webp(quality)
                .toFile(destPath);
        } else {
            // PNG, JPEG, etc.
            await sharp(srcPath)
                .webp(quality)
                .toFile(destPath);
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

// ─── Main ────────────────────────────────────────────────────────
async function main() {
    console.log('═══════════════════════════════════════════════════');
    console.log('  Medelise Asset Migration — All-WebP Conversion');
    console.log('═══════════════════════════════════════════════════');
    console.log(`  Total files to migrate: ${migrations.length}`);
    console.log(`  Dry run: ${DRY_RUN ? 'YES' : 'NO'}`);
    console.log('');

    for (const [src, dest, name, q] of migrations) {
        await convertFile(src, dest, name, q);
    }

    console.log('');
    console.log('═══════════════════════════════════════════════════');
    console.log(`  ✅ Success: ${success}`);
    console.log(`  ⏭  Skipped: ${skipped}`);
    console.log(`  ❌ Failed:  ${failed}`);
    console.log('═══════════════════════════════════════════════════');

    if (errors.length > 0) {
        console.log('\n  Failed files:');
        errors.forEach(e => console.log(`    - ${e.srcRel}: ${e.error}`));
    }
}

main().catch(console.error);
