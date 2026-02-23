import type { Metadata } from 'next';
import { SuperBoostDeImunitateContent } from '@features/iv-therapy/components';

export const metadata: Metadata = {
    title: 'IV Drip Super Boost de Imunitate | Medelise',
    description: 'Tratament IV Drip cu protecție imunitară avansată la domiciliu. Doze mari de antioxidanți cu Medelise.',
};

export default function SuperBoostDeImunitatePage() {
    return <SuperBoostDeImunitateContent />;
}
