import type { Metadata } from 'next';
import { BoostDeImunitateContent } from '@features/iv-therapy/components';

export const metadata: Metadata = {
    title: 'IV Drip Boost de Imunitate | Medelise',
    description: 'Tratament IV Drip pentru susținerea sistemului imunitar la domiciliu. Protecție antivirală cu Medelise.',
};

export default function BoostDeImunitatePage() {
    return <BoostDeImunitateContent />;
}
