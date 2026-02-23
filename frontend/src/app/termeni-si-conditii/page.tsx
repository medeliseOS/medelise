import type { Metadata } from 'next';
import { TermeniContent } from '@features/legal/components';

export const metadata: Metadata = {
    title: 'Termeni și Condiții',
    description:
        'Termenii și condițiile de utilizare a platformei Medelise — drepturi, obligații, programări, plăți și proprietate intelectuală.',
    openGraph: {
        title: 'Termeni și Condiții · Medelise',
        description:
            'Termenii și condițiile de utilizare a platformei Medelise Health Solutions.',
    },
};

export default function TermeniSiConditiiPage() {
    return <TermeniContent />;
}
