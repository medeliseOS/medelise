import type { Metadata } from 'next';
import { BoostImunitateContent } from '@features/iv-therapy/components';

export const metadata: Metadata = {
    title: 'IV Drip Boost de Imunitate | Medelise',
    description: 'Tratament perfuzabil pentru întărirea imunității. Protejează-te de răceli și viroze cu terapia noastră IV la Medelise.',
};

export default function BoostImunitatePage() {
    return <BoostImunitateContent />;
}
