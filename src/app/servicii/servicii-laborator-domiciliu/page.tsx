import type { Metadata } from 'next';
import ServiciiLaboratorContent from '@features/servicii/components/ServiciiLaboratorContent';

export const metadata: Metadata = {
    title: 'Analize de Laborator la Domiciliu | Medelise',
    description: 'Recoltări de sânge și urină la domiciliu cu rezultate rapide. Buletin de analize digital cu Medelise.',
};

export default function ServiciiLaboratorPage() {
    return <ServiciiLaboratorContent />;
}
