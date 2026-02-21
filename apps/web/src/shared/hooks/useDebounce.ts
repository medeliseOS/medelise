/**
 * ═══════════════════════════════════════════════════════════════
 * MEDELISE — useDebounce Hook
 * ═══════════════════════════════════════════════════════════════
 *
 * Debounces a value by a specified delay.
 * Usage: const debouncedSearch = useDebounce(searchTerm, 300);
 */

import { useState, useEffect } from 'react';

export function useDebounce<T>(value: T, delayMs: number = 300): T {
    const [debouncedValue, setDebouncedValue] = useState(value);

    useEffect(() => {
        const timer = setTimeout(() => setDebouncedValue(value), delayMs);
        return () => clearTimeout(timer);
    }, [value, delayMs]);

    return debouncedValue;
}
