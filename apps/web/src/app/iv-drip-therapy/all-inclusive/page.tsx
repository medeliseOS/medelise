import type { Metadata } from 'next';
import { AllInclusiveContent } from '@features/iv-therapy/components';

export const metadata: Metadata = {
    title: 'IV Drip All-Inclusive | Medelise',
    description: 'Pachetul complet de vitamine și minerale administrate intravenos la domiciliu. Suport total cu Medelise.',
};

export default function AllInclusivePage() {
    return <AllInclusiveContent />;
}
