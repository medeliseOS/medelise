import type { Metadata } from 'next';
import { GastroenteritaContent } from '@features/iv-therapy/components';

export const metadata: Metadata = {
    title: 'IV Drip Gastroenterita | Medelise',
    description: 'Tratament IV Drip pentru rehidratare rapidă în cazuri de gastroenterită la domiciliu cu Medelise.',
};

export default function GastroenteritaPage() {
    return <GastroenteritaContent />;
}
