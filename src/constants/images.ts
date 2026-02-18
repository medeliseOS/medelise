/**
 * Centralized Image Registry
 * ──────────────────────────
 * All content image paths from `public/images-medelise/`.
 * Import from here instead of hardcoding paths in components.
 *
 * Usage:
 *   import { IMAGES } from '@/constants/images';
 *   <Image src={IMAGES.quality.macbookMockup} alt="..." ... />
 *
 * Governance: see `public/images-medelise/reguli-stricte.md`
 */

export const IMAGES = {
    /** Quality Section — MacBook mockup assets */
    quality: {
        /** MacBook Pro mockup — desktop version with medical dashboard */
        macbookMockup: '/images-medelise/md-quality/md-img-macbook-mockup.webp',

        /** MacBook Pro — tablet/mobile fallback */
        macbookTablet: '/images-medelise/md-quality/md-img-macbook-tablet.webp',
    },

    /** Portal Section — Patient Portal imagery */
    portal: {
        /** Main composition image — 588×380 */
        mainImage: '/images-medelise/md-portal/md-img-portal-main.webp',

        /** Side accent image — 204×312 */
        sideImage: '/images-medelise/md-portal/md-img-portal-side.webp',
    },

    /** Watch — Apple Watch Ultra assets */
    watch: {
        /** Apple Watch Ultra with Medelise notifications on screen */
        iwatchNotifications: '/images-medelise/md-watch/md-img-iwatch-ultra-notifications.webp',
    },

    /** Hero Section Assets */
    hero: {
        background: '/images-medelise/md-hero/md-img-hero-medical-02.webp',
        avatar1: '/images-medelise/md-hero/md-img-avatar-01.webp',
        avatar2: '/images-medelise/md-hero/md-img-avatar-02.webp',
        avatar3: '/images-medelise/md-hero/md-img-avatar-03.webp',
    },
} as const;

/** Type-safe image section key */
export type ImageSection = keyof typeof IMAGES;
