import type { Metadata } from 'next';
import IngrijireSenioriContent from '@features/servicii/components/IngrijireSenioriContent';

export const metadata: Metadata = {
    title: 'Îngrijire Seniori & Paliativă | Medelise',
    description: 'Îngrijire la domiciliu pentru seniori și pacienți paliativ: asistență complexă, suport emoțional și confort cu Medelise.',
};

export default function IngrijireSenioriPage() {
    return <IngrijireSenioriContent />;
}
