import type { Metadata } from 'next';
import { CarieraContent } from '@features/cariera/components';

export const metadata: Metadata = {
    title: 'Carieră',
    description:
        'Alătură-te echipei Medelise Health Solutions. Descoperă pozițiile deschise și construiește o carieră în domeniul medical.',
    openGraph: {
        title: 'Carieră · Medelise',
        description:
            'Alătură-te echipei Medelise. Poziții deschise în domeniul medical.',
    },
};

export default function Cariera() {
    return <CarieraContent />;
}
