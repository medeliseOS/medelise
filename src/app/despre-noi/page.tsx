import type { Metadata } from 'next';
import DespreNoiContent from '@/components/despre-noi/DespreNoiContent';

export const metadata: Metadata = {
    title: 'Despre Noi',
    description:
        'Descoperă echipa Medvita Health Solutions — misiunea, valorile și angajamentul nostru față de sănătatea ta.',
    openGraph: {
        title: 'Despre Noi · Medvita',
        description:
            'Echipa Medvita — misiunea, valorile și angajamentul nostru față de sănătatea ta.',
    },
};

export default function DespreNoi() {
    return (
        <main className="min-h-screen">
            <DespreNoiContent />
        </main>
    );
}
