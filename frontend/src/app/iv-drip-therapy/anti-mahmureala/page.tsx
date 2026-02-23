import type { Metadata } from 'next';
import { AntiMahmurealaContent } from '@features/iv-therapy/components';

export const metadata: Metadata = {
    title: 'IV Drip Anti-Mahmureală | Medelise',
    description: 'Tratament perfuzabil rapid pentru mahmureală. Scapă de greață, dureri de cap și deshidratare în confortul casei tale cu Medelise.',
};

export default function AntiMahmurealaPage() {
    return <AntiMahmurealaContent />;
}
