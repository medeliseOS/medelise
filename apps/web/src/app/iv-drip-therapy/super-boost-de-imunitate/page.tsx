import type { Metadata } from 'next';
import { SuperBoostImunitateContent } from '@features/iv-therapy/components';

export const metadata: Metadata = {
    title: 'IV Drip Super - Boost de Imunitate | Medelise',
    description: 'Tratament avansat pentru imunitate cu doze mari de Vitamina C și Glutation. Protecție maximă și revitalizare la Medelise.',
};

export default function SuperBoostImunitatePage() {
    return <SuperBoostImunitateContent />;
}
