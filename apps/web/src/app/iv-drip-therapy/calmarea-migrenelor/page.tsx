import type { Metadata } from 'next';
import { CalmareamigrenelorContent } from '@features/iv-therapy/components';

export const metadata: Metadata = {
    title: 'IV Drip Calmarea Migrenelor | Medelise',
    description: 'Tratament IV Drip pentru ameliorarea migrenelor la domiciliu. Relaxare neurovasculară cu Medelise.',
};

export default function CalmareamigrenelorPage() {
    return <CalmareamigrenelorContent />;
}
