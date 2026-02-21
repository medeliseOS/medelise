'use client';

import { CartProvider } from '@features/scheduling';
import { GlobalErrorBoundary } from '../GlobalErrorBoundary';

/**
 * Client-side Providers wrapper.
 * Wraps all context providers that need 'use client'.
 * Added to layout.tsx to provide global context access.
 */
export default function Providers({ children }: { children: React.ReactNode }) {
    return (
        <GlobalErrorBoundary>
            <CartProvider>
                {children}
            </CartProvider>
        </GlobalErrorBoundary>
    );
}
