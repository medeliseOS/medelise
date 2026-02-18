import type { Metadata } from 'next';
import RecuperareContent from '@features/iv-therapy/components/RecuperareContent';

export const metadata: Metadata = {
    title: 'IV Drip Recuperare | Medelise',
    description: 'Terapie IV pentru recuperare rapidă după efort sau boală. Rehidratează-te și refă-ți rezervele de energie cu Medelise.',
};

export default function RecuperarePage() {
    return <RecuperareContent />;
}
