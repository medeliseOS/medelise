/**
 * ═══════════════════════════════════════════════════════════════
 * MEDELISE — Typed LocalStorage Wrapper
 * ═══════════════════════════════════════════════════════════════
 *
 * Safe, typed access to localStorage.
 * Handles SSR (no window), JSON serialization, and errors.
 */

export function getStorageItem<T>(key: string, fallback: T): T {
    if (typeof window === 'undefined') return fallback;
    try {
        const raw = localStorage.getItem(key);
        return raw ? (JSON.parse(raw) as T) : fallback;
    } catch {
        return fallback;
    }
}

export function setStorageItem<T>(key: string, value: T): void {
    if (typeof window === 'undefined') return;
    try {
        localStorage.setItem(key, JSON.stringify(value));
    } catch {
        console.warn(`[storage] Failed to write key "${key}"`);
    }
}

export function removeStorageItem(key: string): void {
    if (typeof window === 'undefined') return;
    try {
        localStorage.removeItem(key);
    } catch {
        console.warn(`[storage] Failed to remove key "${key}"`);
    }
}
