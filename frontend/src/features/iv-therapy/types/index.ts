/**
 * ═══════════════════════════════════════════════════════════════
 * MEDELISE — IV Therapy Feature Types
 * ═══════════════════════════════════════════════════════════════
 *
 * Domain types for IV Drip Therapy services.
 * Data files and service layer import from here.
 */

export interface IVDripService {
    id: string;
    title: string;
    slug: string;
    price: number;
    shortDescription: string;
    imagePlaceholder: string;
}
