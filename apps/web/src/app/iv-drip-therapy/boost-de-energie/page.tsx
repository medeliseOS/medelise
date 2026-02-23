import type { Metadata } from 'next';
import { BoostDeEnergieContent } from '@features/iv-therapy/components';

export const metadata: Metadata = {
    title: 'IV Drip Boost de Energie | Medelise',
    description: 'Tratament IV Drip energizant la domiciliu. Crește-ți nivelul de energie și combate oboseala cronică cu Medelise.',
};

export default function BoostDeEnergiePage() {
    return <BoostDeEnergieContent />;
}
