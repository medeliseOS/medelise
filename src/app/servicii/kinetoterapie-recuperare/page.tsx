import type { Metadata } from 'next';
import KinetoterapieRecuperareContent from '@features/servicii/components/KinetoterapieRecuperareContent';

export const metadata: Metadata = {
    title: 'Kinetoterapie & Recuperare la Domiciliu | Medelise',
    description: 'Kinetoterapie profesională la domiciliu: drenaj limfatic, recuperare post-AVC, reeducare mers cu Medelise.',
};

export default function KinetoterapieRecuperarePage() {
    return <KinetoterapieRecuperareContent />;
}
