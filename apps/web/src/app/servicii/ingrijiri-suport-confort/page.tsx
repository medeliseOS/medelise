import type { Metadata } from 'next';
import IngrijiriSuportConfortContent from '@features/servicii/components/IngrijiriSuportConfortContent';

export const metadata: Metadata = {
    title: 'Îngrijiri de Suport & Confort | Medelise',
    description: 'Servicii de suport și confort la domiciliu: igienă, toaletă, mobilizare. Asistență umană și profesională cu Medelise.',
};

export default function IngrijiriSuportConfortPage() {
    return <IngrijiriSuportConfortContent />;
}
