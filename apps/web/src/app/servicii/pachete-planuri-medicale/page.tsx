import type { Metadata } from 'next';
import PachetePlanuriContent from '@features/servicii/components/PachetePlanuriContent';

export const metadata: Metadata = {
    title: 'Pachete & Planuri Medicale | Medelise',
    description: 'Pachete medicale personalizate: postoperatorii, cronici și seniori. Planuri de îngrijire complete cu Medelise.',
};

export default function PachetePlanuriPage() {
    return <PachetePlanuriContent />;
}
