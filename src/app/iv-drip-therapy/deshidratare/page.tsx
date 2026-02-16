import type { Metadata } from 'next';
import DeshidratareContent from '@/components/services/DeshidratareContent';

export const metadata: Metadata = {
    title: 'IV Drip Deshidratare | Medelise',
    description: 'Tratament perfuzabil pentru rehidratare rapidă la domiciliu. Recuperează-ți energia și echilibrul electrolitic cu Medelise.',
};

export default function DeshidratarePage() {
    return <DeshidratareContent />;
}
