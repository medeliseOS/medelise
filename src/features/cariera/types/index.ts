/**
 * ═══════════════════════════════════════════════════════════════
 * MEDELISE — Cariera Feature Types & Constants
 * ═══════════════════════════════════════════════════════════════
 *
 * Domain types, form constants, and helpers.
 * Data files and components import from here.
 */

/* ── Job Detail ── */
export interface JobDetail {
    /* Listing-level (cards on /cariera) */
    category: string;
    title: string;
    type: string;
    location: string;
    salary: string;
    experience: string;
    deadline: string; /* ISO 8601 date, e.g. '2026-03-15' */

    /* Detail-level (full page /cariera/[slug]) */
    overviewTitle: string;
    overviewBody: string;
    profileTitle: string;
    profileBody: string;
    tasksTitle: string;
    tasksBody: string;
    benefitsTitle: string;
    benefitsBody: string;
    closingText: string;

    sidebar: {
        companyName: string;
        locations: string[];
        website: string;
        jobType: string;
        salary: string;
        workLocation: string;
        datePosted: string;
    };
}

/* ── Helper: compute days remaining from a deadline ── */
export function getDaysRemaining(deadline: string): number {
    const now = new Date();
    const end = new Date(deadline);
    const diff = Math.ceil((end.getTime() - now.getTime()) / (1000 * 60 * 60 * 24));
    return Math.max(0, diff);
}

/* ── Form status ── */
export type FormStatus = 'idle' | 'sending' | 'sent' | 'error';

/* ── Props ── */
export interface ApplicationFormContentProps {
    slug: string;
}

/* ── Specialty options ── */
export const SPECIALTIES = [
    'Medicină Generală',
    'Asistent Medical',
    'Kinetoterapeut',
    'Ambulanțier',
    'Medic de Familie',
    'Coordonator Medical',
    'Altă specialitate',
] as const;

/* ── Experience ranges ── */
export const EXPERIENCE_RANGES = [
    'Sub 1 an',
    '1 – 3 ani',
    '3 – 5 ani',
    '5 – 10 ani',
    'Peste 10 ani',
] as const;

/* ── Professional grade ── */
export const GRADES = ['Debutant', 'Rezident', 'Specialist', 'Principal'] as const;

/* ── Availability ── */
export const AVAILABILITY = ['Full-time', 'Part-time', 'Colaborare', 'Weekenduri'] as const;

/* ── CV file constraints ── */
export const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5 MB
export const ACCEPTED_TYPES = [
    'application/pdf',
    'application/msword',
    'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
] as const;

