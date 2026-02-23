/**
 * ═══════════════════════════════════════════════════════════════
 * MEDELISE — useMediaQuery Hook
 * ═══════════════════════════════════════════════════════════════
 *
 * Responsive breakpoint detection.
 * Usage: const isMobile = useMediaQuery('(max-width: 768px)');
 */

import { useState, useEffect } from 'react';

export function useMediaQuery(query: string): boolean {
    const [matches, setMatches] = useState(false);

    useEffect(() => {
        const mediaQuery = window.matchMedia(query);
        setMatches(mediaQuery.matches);

        const handler = (e: MediaQueryListEvent) => setMatches(e.matches);
        mediaQuery.addEventListener('change', handler);
        return () => mediaQuery.removeEventListener('change', handler);
    }, [query]);

    return matches;
}
