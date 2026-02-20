/**
 * Centralized Navigation Data
 * Single source of truth for all menu items across Desktop/Tablet/Mobile nav.
 */

/* ── Types ──────────────────────────────────────────────────────── */

export interface SubMenuItem {
    title: string;
    subtitle: string;
    href?: string;
}

export interface MegaMenuData {
    title: string;
    heading: string;
    href?: string;
    columns: SubMenuItem[][];
    items: SubMenuItem[];
}

export interface NavLink {
    label: string;
    href: string;
}

export type MegaMenuKey = 'ivDrip' | 'servicii';

/* ── Top Bar Links ──────────────────────────────────────────────── */

export const TOP_LINKS: NavLink[] = [
    { label: 'Despre noi', href: '/despre-noi' },
    { label: 'Cariera', href: '/cariera' },
    { label: 'Contact', href: '/contact' },
    { label: 'FAQs', href: '/faq' },
];

/* ── Main Menu Items ────────────────────────────────────────────── */

export const MAIN_MENU_ITEMS = [
    'IV Drip Therapy',
    'Serviciile noastre',
    'Shop',
    'Medelise Blog',
] as const;

export const MENU_KEY_MAP: Record<string, MegaMenuKey | null> = {
    'IV Drip Therapy': 'ivDrip',
    'Serviciile noastre': 'servicii',
    'Shop': null,
    'Medelise Blog': null,
};

/* ── Items with arrow navigation (tablet/mobile) ────────────────── */

export const MENU_WITH_ARROWS: { label: string; key: MegaMenuKey }[] = [
    { label: 'IV Drip Therapy', key: 'ivDrip' },
    { label: 'Serviciile noastre', key: 'servicii' },
];

export const MENU_SIMPLE: NavLink[] = [
    { label: 'Medelise Blog', href: '#' },
    { label: 'Shop', href: '#' },
];

export const NAV_LINKS: NavLink[] = [
    { label: 'Acasa', href: '/' },
    ...TOP_LINKS,
];

/* ── Mega Menu Data ─────────────────────────────────────────────── */

const IV_DRIP_ITEMS: SubMenuItem[] = [
    { title: 'DESHIDRATARE', subtitle: 'Rehidratare rapidă', href: '/iv-drip-therapy/deshidratare' },
    { title: 'ANTI-MAHMUREALĂ', subtitle: 'Reducerea greței și cefaleei', href: '/iv-drip-therapy/anti-mahmureala' },
    { title: 'RECUPERARE', subtitle: 'Refacere accelerată', href: '/iv-drip-therapy/recuperare' },
    { title: 'FERTILITY+', subtitle: 'Optimizare celulară', href: '/iv-drip-therapy/fertility-plus' },
    { title: 'BOOST DE ENERGIE', subtitle: 'Vitalitate instantă', href: '/iv-drip-therapy/boost-de-energie' },
    { title: 'BOOST DE IMUNITATE', subtitle: 'Susținere antivirală', href: '/iv-drip-therapy/boost-de-imunitate' },
    { title: 'SUPER - BOOST DE IMUNITATE', subtitle: 'Protecție avansată', href: '/iv-drip-therapy/super-boost-de-imunitate' },
    { title: 'FRUMUSETE', subtitle: 'Regenerare celulară', href: '/iv-drip-therapy/frumusete' },
    { title: 'MYERS-COCKTAIL', subtitle: 'Complex vitaminic total', href: '/iv-drip-therapy/myers-cocktail' },
    { title: 'CALMAREA MIGRENELOR', subtitle: 'Relaxare neurovasculară', href: '/iv-drip-therapy/calmarea-migrenelor' },
    { title: 'ALL - INCLUSIVE', subtitle: 'Suport complet', href: '/iv-drip-therapy/all-inclusive' },
    { title: 'GASTROENTERITA', subtitle: 'Hidratare corectivă', href: '/iv-drip-therapy/gastroenterita' },
];

const SERVICII_ITEMS: SubMenuItem[] = [
    { title: 'Monitorizare & Diagnostic', subtitle: 'Parametri vitali, recoltări, EKG, etc.', href: '/servicii/monitorizare-diagnostic' },
    { title: 'Îngrijiri postoperatorii & plăgi', subtitle: 'Plăgi simple, suprainfectate, escare, suturi, etc.', href: '/servicii/ingrijiri-postoperatorii-plagi' },
    { title: 'Administrare & Tratamente', subtitle: 'Injecții, perfuzii, administrări orale, etc.', href: '/servicii/administrare-tratamente' },
    { title: 'Consultații medicale', subtitle: 'Consult medic specialist / medic de familie / etc.', href: '/servicii/consultatii-medicale' },
    { title: 'Kinetoterapie & Recuperare', subtitle: 'Drenaj limfatic, reeducare mers, post-AVC, etc.', href: '/servicii/kinetoterapie-recuperare' },
    { title: 'Masaj terapeutic & relaxare', subtitle: 'Decontracturant, terapeutic, drenaj limfatic, etc.', href: '/servicii/masaj-terapeutic-relaxare' },
    { title: 'Profilaxie & Prevenție', subtitle: 'Educație medicală, prevenție escare, etc.', href: '/servicii/profilaxie-preventie' },
    { title: 'Pachete & Planuri medicale', subtitle: 'Pachete postoperatorii, cronici, seniori, etc.', href: '/servicii/pachete-planuri-medicale' },
    { title: 'Îngrijire seniori & paliativă', subtitle: 'Îngrijiri complexe, pacienți cronici sau terminali, etc.', href: '/servicii/ingrijire-seniori-paliativa' },
    { title: 'Îngrijiri de suport & confort', subtitle: 'Toaletă, igienă, mobilizare ușoară, etc.', href: '/servicii/ingrijiri-suport-confort' },
    { title: 'Servicii de laborator la domiciliu', subtitle: 'Recoltări sânge, urină, buletin de analize, etc.', href: '/servicii/servicii-laborator-domiciliu' },
    { title: 'Telemedicină', subtitle: 'Consulturi video, interpretare analize, etc.', href: '/servicii/telemedicina' },
];

/** Helper: split flat items into N columns for desktop grid */
function toColumns(items: SubMenuItem[], cols: number): SubMenuItem[][] {
    const perCol = Math.ceil(items.length / cols);
    return Array.from({ length: cols }, (_, i) =>
        items.slice(i * perCol, (i + 1) * perCol)
    );
}

export const MEGA_MENUS: Record<MegaMenuKey, MegaMenuData> = {
    ivDrip: {
        title: 'IV DRIP THERAPY',
        heading: 'IV Drip Therapy',
        href: '/iv-drip-therapy',
        columns: toColumns(IV_DRIP_ITEMS, 3),
        items: IV_DRIP_ITEMS,
    },
    servicii: {
        title: 'SERVICIILE NOASTRE',
        heading: 'Serviciile noastre',
        columns: toColumns(SERVICII_ITEMS, 3),
        items: SERVICII_ITEMS,
    },
};
