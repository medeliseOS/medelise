/**
 * ═══════════════════════════════════════════════════════════════
 * MEDELISE — Services Barrel Export
 * ═══════════════════════════════════════════════════════════════
 *
 * Public API for the services layer.
 * Import services through this barrel:
 *   import { getIVProducts } from '@services';
 */

// ── API Infrastructure ──
export { ApiClient, apiClient } from './api/client';
export { ENDPOINTS, BASE_URL } from './api/endpoints';
export { ApiError } from './api/types';
export type { ApiResponse, PaginatedResponse, ApiErrorResponse, RequestConfig } from './api/types';

// ── Feature Services ──
export * from './iv-therapy.service';
export * from './cariera.service';
export * from './contact.service';
export * from './scheduling.service';
export * from './auth.service';
