/**
 * ═══════════════════════════════════════════════════════════════
 * MEDELISE — Generic API Response Types
 * ═══════════════════════════════════════════════════════════════
 *
 * Shared types for all service adapters.
 * When the backend goes live (March 1st), these types will wrap
 * every API response consistently.
 */

/* ── Success wrapper ── */
export interface ApiResponse<T> {
    data: T;
    success: true;
    message?: string;
}

/* ── Paginated list wrapper ── */
export interface PaginatedResponse<T> {
    data: T[];
    success: true;
    pagination: {
        page: number;
        pageSize: number;
        totalPages: number;
        totalItems: number;
    };
}

/* ── Error shape ── */
export interface ApiErrorResponse {
    success: false;
    error: {
        code: string;
        message: string;
        details?: Record<string, string[]>;
    };
}

/* ── Custom error class ── */
export class ApiError extends Error {
    public readonly status: number;
    public readonly code: string;
    public readonly details?: Record<string, string[]>;

    constructor(status: number, code: string, message: string, details?: Record<string, string[]>) {
        super(message);
        this.name = 'ApiError';
        this.status = status;
        this.code = code;
        this.details = details;
    }
}

/* ── Request config ── */
export interface RequestConfig extends Omit<RequestInit, 'body'> {
    params?: Record<string, string | number | boolean>;
    body?: unknown;
}
