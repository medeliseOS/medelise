/**
 * ═══════════════════════════════════════════════════════════════
 * MEDELISE — IV Therapy Service Adapter
 * ═══════════════════════════════════════════════════════════════
 *
 * Adapter Pattern: currently returns static data from
 * features/iv-therapy/data/ivDripServices.ts.
 *
 * On March 1st, swap the function bodies to use apiClient —
 * ZERO changes needed in any component that consumes this service.
 */

import { IV_DRIP_SERVICES } from '@features/iv-therapy/data/ivDripServices';
import type { IVDripService } from '@features/iv-therapy/types';
// import { apiClient } from './api/client';
// import { ENDPOINTS } from './api/endpoints';

/**
 * Fetch all IV Drip products.
 * Phase 1: returns static data.
 * Phase 2: `return apiClient.get<IVDripService[]>(ENDPOINTS.IV_THERAPY.PRODUCTS);`
 */
export async function getIVProducts(): Promise<IVDripService[]> {
    return IV_DRIP_SERVICES;
}

/**
 * Fetch a single IV Drip product by slug.
 * Phase 1: filters static data.
 * Phase 2: `return apiClient.get<IVDripService>(ENDPOINTS.IV_THERAPY.PRODUCT_BY_SLUG(slug));`
 */
export async function getIVProductBySlug(slug: string): Promise<IVDripService | undefined> {
    return IV_DRIP_SERVICES.find(p => p.slug.endsWith(slug));
}
