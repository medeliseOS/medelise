/* ═══════════════════════════════════════════════════════════════════════════
 * Document Requirements — Single Source of Truth
 *
 * Configurare cerințe documente per rol medical.
 * Separă datele de prezentare (architecture.md §D1).
 * ═══════════════════════════════════════════════════════════════════════════ */

/* ─── Types ─── */

export type MedicalRole =
    | 'medic'
    | 'asistent'
    | 'kinetoterapeut'
    | 'ambulantier'
    | 'coordonator';

export interface DocumentRequirement {
    /** Unique identifier */
    id: string;
    /** Display label */
    label: string;
    /** Short description */
    description?: string;
    /** Accepted file extensions (without dot) */
    fileTypes: string[];
    /** Whether the document is mandatory */
    required: boolean;
    /** Tooltip note (validity, thresholds, etc.) */
    tooltip?: string;
    /** Which roles need this document — 'all' for universal */
    roles: MedicalRole[] | 'all';
    /** Visual grouping */
    section: 'general' | 'specific' | 'malpraxis';
}

/* ─── Malpraxis Thresholds (per role) ─── */

export const MALPRAXIS_THRESHOLDS: Record<MedicalRole, string> = {
    medic: 'Minim 37.000€ – 100.000€ · Valabilitate min. 6 luni',
    asistent: 'Minim 10.000€ · Valabilitate min. 6 luni',
    kinetoterapeut: 'Minim 5.000€ · Valabilitate min. 6 luni',
    ambulantier: 'Conform specificațiilor contractuale · Valabilitate min. 6 luni',
    coordonator: 'Conform specificațiilor contractuale · Valabilitate min. 6 luni',
};

/* ─── Role Display Labels ─── */

export const ROLE_LABELS: Record<MedicalRole, string> = {
    medic: 'Medic',
    asistent: 'Asistent Medical',
    kinetoterapeut: 'Kinetoterapeut',
    ambulantier: 'Ambulanțier',
    coordonator: 'Coordonator Medical',
};

/* ─── Slug → MedicalRole mapping (synced with jobData.ts slugs) ─── */

export const SLUG_TO_ROLE: Record<string, MedicalRole> = {
    'asistent-medical-generalist': 'asistent',
    'ambulantier': 'ambulantier',
    'medic-de-familie': 'medic',
    'asistent-coordonator': 'coordonator',
};

/** Get the medical role for a job slug, with fallback */
export function getRoleForSlug(slug: string): MedicalRole {
    return SLUG_TO_ROLE[slug] ?? 'asistent';
}

/* ─── Document Requirements ─── */

export const DOCUMENT_REQUIREMENTS: DocumentRequirement[] = [
    /* ── General (all roles) ── */
    {
        id: 'ci',
        label: 'Carte de Identitate',
        description: 'Copie CI validă (față + verso)',
        fileTypes: ['pdf', 'jpg', 'jpeg'],
        required: true,
        roles: 'all',
        section: 'general',
    },
    {
        id: 'diploma',
        label: 'Diplomă de Studii',
        description: 'Diplomă de licență sau echivalent',
        fileTypes: ['pdf'],
        required: true,
        roles: 'all',
        section: 'general',
    },
    {
        id: 'cazier',
        label: 'Cazier Judiciar',
        description: 'Emis în ultimele 6 luni',
        fileTypes: ['pdf'],
        required: true,
        tooltip: 'Trebuie emis cu cel mult 6 luni înainte de data angajării.',
        roles: 'all',
        section: 'general',
    },
    {
        id: 'integritate',
        label: 'Certificat de Integritate Comportamentală',
        description: 'DIICOT / Parchet',
        fileTypes: ['pdf'],
        required: true,
        roles: 'all',
        section: 'general',
    },
    {
        id: 'adeverinta-medicala',
        label: 'Adeverință Medicală',
        description: 'Apt pentru funcția respectivă',
        fileTypes: ['pdf'],
        required: true,
        tooltip: 'Eliberată de medicul de medicina muncii, valabilitate 3 luni.',
        roles: 'all',
        section: 'general',
    },

    /* ── Specific: Medic ── */
    {
        id: 'parafa',
        label: 'Parafă Medic',
        description: 'Copie parafă cu cod unic',
        fileTypes: ['pdf', 'jpg', 'jpeg'],
        required: true,
        roles: ['medic'],
        section: 'specific',
    },
    {
        id: 'certificat-specialist',
        label: 'Certificat Specialist / Primar',
        description: 'Certificat de medic specialist sau primar',
        fileTypes: ['pdf'],
        required: true,
        roles: ['medic'],
        section: 'specific',
    },
    {
        id: 'cmr',
        label: 'Atestat CMR',
        description: 'Colegiul Medicilor din România — membru activ',
        fileTypes: ['pdf'],
        required: true,
        tooltip: 'Avizul trebuie să fie valabil la momentul angajării.',
        roles: ['medic'],
        section: 'specific',
    },

    /* ── Specific: Asistent ── */
    {
        id: 'oamgmamr',
        label: 'Atestat OAMGMAMR',
        description: 'Ordinul Asistenților Medicali — membru activ',
        fileTypes: ['pdf'],
        required: true,
        tooltip: 'Avizul OAMGMAMR trebuie să fie valabil la momentul angajării.',
        roles: ['asistent'],
        section: 'specific',
    },
    {
        id: 'alp-asistent',
        label: 'Aviz Liberă Practică (ALP)',
        description: 'Aviz de liberă practică emis de OAMGMAMR',
        fileTypes: ['pdf'],
        required: true,
        roles: ['asistent'],
        section: 'specific',
    },

    /* ── Specific: Kinetoterapeut ── */
    {
        id: 'cfzro',
        label: 'Atestat CFZRO',
        description: 'Colegiul Fizioterapeuților din România',
        fileTypes: ['pdf'],
        required: true,
        tooltip: 'Avizul CFZRO trebuie să fie valabil la momentul angajării.',
        roles: ['kinetoterapeut'],
        section: 'specific',
    },
    {
        id: 'alp-kineto',
        label: 'Aviz Liberă Practică (ALP)',
        description: 'Aviz de liberă practică emis de CFZRO',
        fileTypes: ['pdf'],
        required: true,
        roles: ['kinetoterapeut'],
        section: 'specific',
    },

    /* ── Malpraxis (all roles) ── */
    {
        id: 'malpraxis',
        label: 'Poliță Asigurare Malpraxis',
        description: 'Asigurare de răspundere civilă profesională',
        fileTypes: ['pdf'],
        required: true,
        roles: 'all',
        section: 'malpraxis',
    },
];

/* ─── Helper: filter requirements for a given role ─── */

export function getRequirementsForRole(role: MedicalRole): DocumentRequirement[] {
    return DOCUMENT_REQUIREMENTS.filter(
        (doc) => doc.roles === 'all' || doc.roles.includes(role),
    );
}

/* ─── Helper: get malpraxis tooltip for role ─── */

export function getMalpraxisTooltip(role: MedicalRole): string {
    return MALPRAXIS_THRESHOLDS[role];
}

/* ─── B2B Document Requirements ─── */

export const B2B_DOCUMENT_REQUIREMENTS: DocumentRequirement[] = [
    {
        id: 'cui-certificat',
        label: 'CUI / Certificat Înregistrare Fiscală',
        description: 'Copie a Certificatului de Înregistrare Fiscală (CIF/CUI)',
        fileTypes: ['pdf', 'jpg', 'jpeg'],
        required: true,
        roles: 'all',
        section: 'general',
    },
    {
        id: 'certificat-constatator',
        label: 'Certificat Constatator (ORC)',
        description: 'Emis de Oficiul Registrului Comerțului, valabil',
        fileTypes: ['pdf'],
        required: true,
        tooltip: 'Trebuie emis cu cel mult 30 de zile înainte de data aplicării.',
        roles: 'all',
        section: 'general',
    },
    {
        id: 'autorizatie-dsp',
        label: 'Autorizație DSP',
        description: 'Autorizația sanitară de funcționare emisă de DSP',
        fileTypes: ['pdf'],
        required: true,
        roles: 'all',
        section: 'specific',
    },
    {
        id: 'malpraxis-firma',
        label: 'Poliță Malpraxis Firmă',
        description: 'Asigurare de răspundere civilă profesională a societății',
        fileTypes: ['pdf'],
        required: true,
        tooltip: 'Polița trebuie să fie valabilă la momentul colaborării.',
        roles: 'all',
        section: 'malpraxis',
    },
];

/* ─── Helper: get B2B requirements ─── */

export function getB2BRequirements(): DocumentRequirement[] {
    return B2B_DOCUMENT_REQUIREMENTS;
}
