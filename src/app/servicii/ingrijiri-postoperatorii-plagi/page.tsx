import type { Metadata } from 'next';
import IngrijiriPostoperatoriiContent from '@features/servicii/components/IngrijiriPostoperatoriiContent';

export const metadata: Metadata = {
    title: 'Îngrijiri Postoperatorii & Plăgi | Medelise',
    description: 'Îngrijire profesională a plăgilor, escarelor și suturilor la domiciliu. Recuperare postoperatorie asistată de echipa Medelise.',
};

export default function IngrijiriPostoperatoriiPage() {
    return <IngrijiriPostoperatoriiContent />;
}
