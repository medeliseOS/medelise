import type { Metadata } from 'next';
import { DespreNoiContent } from '@features/about/components';

export const metadata: Metadata = {
    title: 'Despre Noi',
    description:
        'Descoperă echipa Medelise Health Solutions — misiunea, valorile și angajamentul nostru față de sănătatea ta.',
    openGraph: {
        title: 'Despre Noi · Medelise',
        description:
            'Echipa Medelise — misiunea, valorile și angajamentul nostru față de sănătatea ta.',
    },
};

export default function DespreNoi() {
    return (
        <main className="min-h-screen" style={{ background: '#ffffff' }}>
            <DespreNoiContent />
        </main>
    );
}
