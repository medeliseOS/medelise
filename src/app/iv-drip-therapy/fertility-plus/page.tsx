import type { Metadata } from 'next';
import { FertilityPlusContent } from '@features/iv-therapy/components';

export const metadata: Metadata = {
    title: 'IV Drip Fertility+ | Medelise',
    description: 'Tratament IV pentru optimizarea fertilității. Sprijină sănătatea reproductivă și echilibrul hormonal cu terapia Fertility+ de la Medelise.',
};

export default function FertilityPlusPage() {
    return <FertilityPlusContent />;
}
