/**
 * Centralized Icon Registry
 * ─────────────────────────
 * All UI icon paths from `public/icons-medelise/` and `public/brand-medelise/`.
 * Import from here instead of hardcoding paths in components.
 *
 * Usage:
 *   import { ICONS } from '@/constants/icons';
 *   <Image src={ICONS.menu} alt="Menu" ... />
 *
 * Governance: see `public/icons-medelise/reguli-stricte.md`
 */

export const ICONS = {
    /** Hamburger menu — 3 horizontal lines (navbar mobile/tablet) */
    menu: '/icons-medelise/md-system/md-ico-menu-alt.webp',

    /** Close / X — dismiss overlays, menus (navbar mobile/tablet) */
    close: '/icons-medelise/md-system/md-ico-close-alt.webp',

    /** Chevron down — dropdown indicator (navbar submenu) */
    chevronDown: '/icons-medelise/md-system/md-ico-chevron-down-alt.webp',

    /** Arrow left — carousel previous (testimonials, sliders) */
    arrowLeft: '/icons-medelise/md-system/md-ico-arrow-left.webp',

    /** Arrow right — carousel next (testimonials, sliders) */
    arrowRight: '/icons-medelise/md-system/md-ico-arrow-right-png.webp',

    /** Search — magnifying glass icon */
    search: '/icons-medelise/md-system/md-ico-search.webp',

    /** Ambulance — emergency transport (portal section) */
    ambulance: '/icons-medelise/md-medical/md-ico-ambulance.webp',

    /** Box — package / delivery (portal section) */
    box: '/icons-medelise/md-system/md-ico-box.webp',

    /** Check — check mark in circle (portal section) */
    check: '/icons-medelise/md-system/md-ico-check-alt.webp',

    /** Stethoscope — medical examination (portal section) */
    stethoscope: '/icons-medelise/md-medical/md-ico-stethoscope.webp',

    /** Timer — countdown / scheduling (portal section) */
    timer: '/icons-medelise/md-system/md-ico-timer-alt.webp',

    /** Arrow up-right — external link indicator */
    arrowUpRight: '/icons-medelise/md-system/md-ico-arrow-up-right.webp',
} as const;

/** Type-safe icon key */
export type IconKey = keyof typeof ICONS;
