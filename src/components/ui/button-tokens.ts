/**
 * ╔══════════════════════════════════════════════════════════════════════╗
 * ║  Button Design Tokens — 8pt Grid Compliant                         ║
 * ║                                                                      ║
 * ║  Central config for responsive button dimensions.                   ║
 * ║  All values are multiples of 4px (base-unit).                       ║
 * ╚══════════════════════════════════════════════════════════════════════╝
 */

export const BUTTON_TOKENS = {
    /** ≥1024px — Desktop */
    desktop: {
        height: 48,
        paddingX: 24,
        fontSize: 16,
        borderRadius: 100,
    },
    /** 768px – 1023px — Tablet */
    tablet: {
        height: 48,
        paddingX: 20,
        fontSize: 16,
        borderRadius: 100,
    },
    /** <768px — Mobile */
    mobile: {
        height: 56,
        paddingX: 16,
        fontSize: 18,
        borderRadius: 100,
    },
} as const;

/** Minimum touch target for accessibility (WCAG 2.5.5) */
export const MIN_TOUCH_TARGET = 48;

/** Variant color map — references CSS custom properties from globals.css */
export const BUTTON_VARIANTS = {
    primary: {
        bg: 'var(--color-primary)',
        bgHover: 'var(--color-primary-hover)',
        text: 'var(--color-white)',
        border: 'transparent',
    },
    secondary: {
        bg: 'var(--color-secondary)',
        bgHover: '#A5D4FF',
        text: 'var(--color-primary)',
        border: 'transparent',
    },
    outline: {
        bg: 'transparent',
        bgHover: 'rgba(33, 49, 112, 0.06)',
        text: 'var(--color-primary)',
        border: 'var(--color-primary)',
    },
    ghost: {
        bg: 'transparent',
        bgHover: 'rgba(33, 49, 112, 0.06)',
        text: 'var(--color-primary)',
        border: 'transparent',
    },
    accent: {
        bg: 'var(--color-accent)',
        bgHover: 'var(--color-accent-hover)',
        text: 'var(--color-white)',
        border: 'transparent',
    },
} as const;

export type ButtonVariant = keyof typeof BUTTON_VARIANTS;
