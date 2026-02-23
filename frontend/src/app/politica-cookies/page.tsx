import type { Metadata } from 'next';
import { CookiesContent } from '@features/legal/components';

export const metadata: Metadata = {
    title: 'Politica de Cookies',
    description:
        'Politica de cookies a platformei Medelise — tipuri de cookies utilizate, scopurile acestora și cum le poți gestiona.',
    openGraph: {
        title: 'Politica de Cookies · Medelise',
        description:
            'Află ce cookies folosește Medelise și cum le poți gestiona.',
    },
};

export default function PoliticaCookiesPage() {
    return <CookiesContent />;
}
