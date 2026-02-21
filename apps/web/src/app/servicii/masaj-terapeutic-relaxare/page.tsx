import type { Metadata } from 'next';
import MasajTerapeuticContent from '@features/servicii/components/MasajTerapeuticContent';

export const metadata: Metadata = {
    title: 'Masaj Terapeutic & Relaxare la Domiciliu | Medelise',
    description: 'Masaj decontracturant, terapeutic și drenaj limfatic la domiciliu. Relaxare și recuperare cu profesioniștii Medelise.',
};

export default function MasajTerapeuticPage() {
    return <MasajTerapeuticContent />;
}
