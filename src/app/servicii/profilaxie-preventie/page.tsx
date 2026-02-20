import type { Metadata } from 'next';
import ProfilaxiePreventieContent from '@features/servicii/components/ProfilaxiePreventieContent';

export const metadata: Metadata = {
    title: 'Profilaxie & Prevenție Medicală | Medelise',
    description: 'Servicii de profilaxie și prevenție medicală la domiciliu: educație, evaluări periodice și prevenție escare cu Medelise.',
};

export default function ProfilaxiePreventiePage() {
    return <ProfilaxiePreventieContent />;
}
