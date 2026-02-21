import type { Metadata } from 'next';
import { FAQContent } from '@features/legal/components';

export const metadata: Metadata = {
    title: 'Întrebări Frecvente (FAQ)',
    description:
        'Răspunsuri la cele mai frecvente întrebări despre Medelise — servicii, programări, plăți, cont și politica de confidențialitate.',
    openGraph: {
        title: 'Întrebări Frecvente (FAQ) · Medelise',
        description:
            'Găsește rapid răspunsuri la întrebările frecvente despre serviciile Medelise.',
    },
};

export default function FAQPage() {
    return <FAQContent />;
}
