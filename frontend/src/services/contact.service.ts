/**
 * ═══════════════════════════════════════════════════════════════
 * MEDELISE — Contact Service Adapter
 * ═══════════════════════════════════════════════════════════════
 */

// import { apiClient } from './api/client';
// import { ENDPOINTS } from './api/endpoints';

export interface ContactFormData {
    nume: string;
    prenume: string;
    email: string;
    telefon: string;
    mesaj: string;
    subiect?: string;
}

/**
 * Submit the contact form.
 * Phase 1: simulates network delay.
 * Phase 2: `return apiClient.post(ENDPOINTS.CONTACT.SUBMIT, data);`
 */
export async function submitContactForm(data: ContactFormData): Promise<{ success: boolean }> {
    // TODO: Replace with actual API call
    await new Promise(resolve => setTimeout(resolve, 1200));
    return { success: true };
}
