/**
 * ═══════════════════════════════════════════════════════════════
 * MEDELISE — Shared API Types
 * ═══════════════════════════════════════════════════════════════
 *
 * Re-exports from the services API types for convenience.
 * Components can import from '@shared/types' instead of
 * reaching into the services layer directly.
 */

export type {
    ApiResponse,
    PaginatedResponse,
    ApiErrorResponse,
    RequestConfig,
} from '@services/api/types';
