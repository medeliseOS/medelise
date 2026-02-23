/**
 * ═══════════════════════════════════════════════════════════════
 * MEDELISE — Centralized Endpoint Registry
 * ═══════════════════════════════════════════════════════════════
 *
 * Single source of truth for all API URLs.
 * When the backend launches (March 1st), update BASE_URL
 * and all services will automatically point to the real API.
 */

/** Base URL — empty for static mode, set to API domain for production */
export const BASE_URL = process.env.NEXT_PUBLIC_API_URL ?? '';

export const ENDPOINTS = {
    IV_THERAPY: {
        PRODUCTS: '/api/iv-therapy/products',
        PRODUCT_BY_SLUG: (slug: string) => `/api/iv-therapy/products/${slug}`,
    },
    CARIERA: {
        JOBS: '/api/cariera/jobs',
        JOB_BY_SLUG: (slug: string) => `/api/cariera/jobs/${slug}`,
        APPLY: '/api/cariera/apply',
    },
    CONTACT: {
        SUBMIT: '/api/contact/submit',
    },
    SCHEDULING: {
        SLOTS: '/api/scheduling/slots',
        BOOK: '/api/scheduling/book',
    },
    AUTH: {
        LOGIN: '/api/auth/login',
        REGISTER: '/api/auth/register',
        VERIFY: '/api/auth/verify',
        LOGOUT: '/api/auth/logout',
    },
} as const;
