import type { Metadata } from 'next';
import { FertilityPlusContent } from '@features/iv-therapy/components';

export const metadata: Metadata = {
    title: 'IV Drip Fertility+ | Medelise',
    description: 'Tratament IV Drip pentru optimizarea fertilității la domiciliu. Suport nutrițional avansat cu Medelise.',
};

export default function FertilityPlusPage() {
    return <FertilityPlusContent />;
}
