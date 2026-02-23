import type { Metadata } from 'next';
import { GastroenteritaContent } from '@features/iv-therapy/components';

export const metadata: Metadata = {
    title: 'IV Drip Gastroenterită | Medelise',
    description: 'Tratament perfuzabil pentru gastroenterită. Rehidratare rapidă și ameliorarea simptomelor digestive la domiciliu cu Medelise.',
};

export default function GastroenteritaPage() {
    return <GastroenteritaContent />;
}
