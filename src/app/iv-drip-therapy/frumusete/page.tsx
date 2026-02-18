import type { Metadata } from 'next';
import FrumuseteContent from '@features/iv-therapy/components/FrumuseteContent';

export const metadata: Metadata = {
    title: 'IV Drip Frumusețe | Medelise',
    description: 'Tratament de înfrumusețare și revitalizare IV. Piele strălucitoare, păr sănătos și unghii puternice cu complexul nostru de vitamine.',
};

export default function FrumusetePage() {
    return <FrumuseteContent />;
}
