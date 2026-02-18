import type { Metadata } from 'next';
import { IVDripCatalog } from '@features/iv-therapy/components';

export const metadata: Metadata = {
    title: 'IV Drip Therapy | Medelise',
    description: 'Descoperă gama variată de tratamente IV Drip Medelise. Hidratare, energie, imunitate și recuperare la tine acasă.',
};

export default function IVDripTherapyPage() {
    return <IVDripCatalog />;
}
