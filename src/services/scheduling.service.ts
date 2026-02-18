/**
 * ═══════════════════════════════════════════════════════════════
 * MEDELISE — Scheduling Service Adapter
 * ═══════════════════════════════════════════════════════════════
 *
 * Abstracts cart persistence (localStorage → API).
 */

import type { CartItem } from '@features/scheduling/context/CartContext';
// import { apiClient } from './api/client';
// import { ENDPOINTS } from './api/endpoints';

const STORAGE_KEY = 'medelise_cart';

/**
 * Load cart items from persistence layer.
 * Phase 1: localStorage.
 * Phase 2: `return apiClient.get<CartItem[]>(ENDPOINTS.SCHEDULING.SLOTS);`
 */
export function loadCart(): CartItem[] {
    if (typeof window === 'undefined') return [];
    try {
        const stored = localStorage.getItem(STORAGE_KEY);
        return stored ? JSON.parse(stored) : [];
    } catch {
        return [];
    }
}

/**
 * Persist cart items.
 * Phase 1: localStorage.
 * Phase 2: `return apiClient.put(ENDPOINTS.SCHEDULING.SLOTS, items);`
 */
export function saveCart(items: CartItem[]): void {
    if (typeof window === 'undefined') return;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
}

/**
 * Book an appointment.
 * Phase 2: `return apiClient.post(ENDPOINTS.SCHEDULING.BOOK, data);`
 */
export async function bookAppointment(data: {
    items: CartItem[];
    date: string;
    time: string;
    notes?: string;
}): Promise<{ success: boolean; bookingId?: string }> {
    // TODO: Replace with actual API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    return { success: true, bookingId: `BK-${Date.now()}` };
}
