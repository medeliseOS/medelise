/**
 * ═══════════════════════════════════════════════════════════════
 * MEDELISE — Auth Service Adapter
 * ═══════════════════════════════════════════════════════════════
 */

// import { apiClient } from './api/client';
// import { ENDPOINTS } from './api/endpoints';

export interface LoginCredentials {
    email: string;
    password: string;
}

export interface RegisterData {
    nume: string;
    prenume: string;
    email: string;
    password: string;
    telefon?: string;
}

export interface AuthResponse {
    success: boolean;
    token?: string;
    user?: {
        id: string;
        email: string;
        name: string;
    };
}

/**
 * Login with email/password.
 * Phase 2: `return apiClient.post<AuthResponse>(ENDPOINTS.AUTH.LOGIN, credentials);`
 */
export async function login(credentials: LoginCredentials): Promise<AuthResponse> {
    // TODO: Replace with actual API call
    await new Promise(resolve => setTimeout(resolve, 800));
    return {
        success: true,
        token: 'mock-jwt-token',
        user: { id: '1', email: credentials.email, name: 'User' },
    };
}

/**
 * Register a new account.
 * Phase 2: `return apiClient.post<AuthResponse>(ENDPOINTS.AUTH.REGISTER, data);`
 */
export async function register(data: RegisterData): Promise<AuthResponse> {
    // TODO: Replace with actual API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    return {
        success: true,
        token: 'mock-jwt-token',
        user: { id: '2', email: data.email, name: `${data.prenume} ${data.nume}` },
    };
}

/**
 * Verify current session token.
 * Phase 2: `return apiClient.get<AuthResponse>(ENDPOINTS.AUTH.VERIFY);`
 */
export async function verifySession(): Promise<AuthResponse> {
    return { success: false };
}

/**
 * Logout — clear session.
 * Phase 2: `return apiClient.post(ENDPOINTS.AUTH.LOGOUT);`
 */
export async function logout(): Promise<void> {
    // TODO: apiClient.post(ENDPOINTS.AUTH.LOGOUT);
}
