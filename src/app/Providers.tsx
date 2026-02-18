'use client';

import { CartProvider } from '@features/scheduling';

/**
 * Client-side Providers wrapper.
 * Wraps all context providers that need 'use client'.
 * Added to layout.tsx to provide global context access.
 */
export default function Providers({ children }: { children: React.ReactNode }) {
    return (
        <CartProvider>
            {children}
        </CartProvider>
    );
}
