import type { Metadata } from 'next';
import { FrumuseteContent } from '@features/iv-therapy/components';

export const metadata: Metadata = {
    title: 'IV Drip Frumusete | Medelise',
    description: 'Tratament IV Drip pentru regenerare celulară și frumusețe la domiciliu. Revitalizare cutanată cu Medelise.',
};

export default function FrumusetePage() {
    return <FrumuseteContent />;
}
