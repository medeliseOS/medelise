import type { Metadata } from 'next';
import ConsultatiiMedicaleContent from '@features/servicii/components/ConsultatiiMedicaleContent';

export const metadata: Metadata = {
    title: 'Consultații Medicale la Domiciliu | Medelise',
    description: 'Consultații medicale la domiciliu cu medici specialiști și medici de familie. Programează rapid cu Medelise.',
};

export default function ConsultatiiMedicalePage() {
    return <ConsultatiiMedicaleContent />;
}
