import type { Metadata } from 'next';
import { RecuperareContent } from '@features/iv-therapy/components';

export const metadata: Metadata = {
    title: 'IV Drip Recuperare | Medelise',
    description: 'Tratament IV Drip pentru recuperare rapidă la domiciliu. Refacere accelerată post-efort cu Medelise.',
};

export default function RecuperarePage() {
    return <RecuperareContent />;
}
