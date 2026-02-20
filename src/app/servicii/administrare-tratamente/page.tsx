import type { Metadata } from 'next';
import AdministrareTratamenteContent from '@features/servicii/components/AdministrareTratamenteContent';

export const metadata: Metadata = {
    title: 'Administrare Tratamente la Domiciliu | Medelise',
    description: 'Administrare de injecții, perfuzii și tratamente orale la domiciliu de către personal medical autorizat Medelise.',
};

export default function AdministrareTratamentePage() {
    return <AdministrareTratamenteContent />;
}
