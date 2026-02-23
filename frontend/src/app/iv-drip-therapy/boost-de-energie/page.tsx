import type { Metadata } from 'next';
import { BoostEnergieContent } from '@features/iv-therapy/components';

export const metadata: Metadata = {
    title: 'IV Drip Boost de Energie | Medelise',
    description: 'Tratament perfuzabil pentru energie instantă și vitalitate. Combate oboseala cronică cu mixul nostru special de vitamine la Medelise.',
};

export default function BoostEnergiePage() {
    return <BoostEnergieContent />;
}
