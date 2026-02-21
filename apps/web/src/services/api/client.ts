/**
 * ═══════════════════════════════════════════════════════════════
 * MEDELISE — Generic Typed API Client
 * ═══════════════════════════════════════════════════════════════
 *
 * Wrapper over `fetch` with:
 *   • Full TypeScript generics on every method
 *   • Automatic JSON parsing & error interception
 *   • Auth header injection hook (for future JWT)
 *   • Configurable baseUrl (swap on March 1st)
 *   • Zero-Trust Validation with Zod
 */

import { z } from 'zod';
import { ApiError, type ApiErrorResponse, type RequestConfig } from './types';
import { BASE_URL } from './endpoints';

export class ApiClient {
    private baseUrl: string;
    private defaultHeaders: Record<string, string>;

    constructor(baseUrl: string = BASE_URL) {
        this.baseUrl = baseUrl;
        this.defaultHeaders = {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
        };
    }

    /* ── Auth token injection ── */
    setAuthToken(token: string): void {
        this.defaultHeaders['Authorization'] = `Bearer ${token}`;
    }

    clearAuthToken(): void {
        delete this.defaultHeaders['Authorization'];
    }

    /* ── Core request method with Zod Validation ── */
    private async request<T>(
        method: string,
        path: string,
        schema: z.Schema<T> | undefined,
        config: RequestConfig = {},
    ): Promise<T> {
        const { params, body, headers: customHeaders, ...fetchOptions } = config;

        // Build URL with query params
        const url = new URL(path, this.baseUrl || (typeof window !== 'undefined' ? window.location.origin : 'http://localhost:3000'));
        if (params) {
            Object.entries(params).forEach(([key, value]) => {
                url.searchParams.set(key, String(value));
            });
        }

        // Build headers
        const headers: Record<string, string> = {
            ...this.defaultHeaders,
            ...(customHeaders as Record<string, string> ?? {}),
        };

        // If body is FormData, remove Content-Type to let browser set multipart boundary
        if (body instanceof FormData) {
            delete headers['Content-Type'];
        }

        const response = await fetch(url.toString(), {
            method,
            headers,
            body: body instanceof FormData ? body : body ? JSON.stringify(body) : undefined,
            ...fetchOptions,
        });

        // ── Error interception ──
        if (!response.ok) {
            let errorData: ApiErrorResponse | null = null;
            try {
                errorData = await response.json() as ApiErrorResponse;
            } catch {
                // Response body is not JSON
            }

            throw new ApiError(
                response.status,
                errorData?.error?.code ?? `HTTP_${response.status}`,
                errorData?.error?.message ?? response.statusText,
                errorData?.error?.details,
            );
        }

        // Handle 204 No Content
        if (response.status === 204) {
            return undefined as T;
        }

        // Parse JSON
        const rawData = await response.json();

        // ── Zod Zero-Trust Validation ──
        if (schema) {
            const result = schema.safeParse(rawData);
            if (!result.success) {
                console.error("Zod Validation Error:", result.error);
                throw new Error("Invalid API Data Shape Received");
            }
            return result.data;
        }

        // Fallback for cases where no schema is provided (though we prefer schema)
        return rawData as T;
    }

    /* ── Public methods ── */
    async get<T>(path: string, schema?: z.Schema<T>, config?: RequestConfig): Promise<T> {
        return this.request<T>('GET', path, schema, config);
    }

    async post<T>(path: string, body?: unknown, schema?: z.Schema<T>, config?: RequestConfig): Promise<T> {
        return this.request<T>('POST', path, schema, { ...config, body });
    }

    async put<T>(path: string, body?: unknown, schema?: z.Schema<T>, config?: RequestConfig): Promise<T> {
        return this.request<T>('PUT', path, schema, { ...config, body });
    }

    async patch<T>(path: string, body?: unknown, schema?: z.Schema<T>, config?: RequestConfig): Promise<T> {
        return this.request<T>('PATCH', path, schema, { ...config, body });
    }

    async delete<T>(path: string, schema?: z.Schema<T>, config?: RequestConfig): Promise<T> {
        return this.request<T>('DELETE', path, schema, config);
    }
}

/* ── Singleton instance ── */
export const apiClient = new ApiClient();
