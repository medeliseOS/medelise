import type { Metadata } from 'next';
import { AntiMahmurealaContent } from '@features/iv-therapy/components';

export const metadata: Metadata = {
    title: 'IV Drip Anti-Mahmureală | Medelise',
    description: 'Tratament IV Drip anti-mahmureală la domiciliu. Recuperare rapidă și ameliorarea simptomelor cu Medelise.',
};

export default function AntiMahmurealaPage() {
    return <AntiMahmurealaContent />;
}
