import type { Metadata } from 'next';
import { GDPRContent } from '@features/legal/components';

export const metadata: Metadata = {
    title: 'Politica de Confidențialitate GDPR',
    description:
        'Politica de confidențialitate GDPR a Medelise — ce date colectăm, cum le folosim, drepturile tale și cum le exerciți.',
    openGraph: {
        title: 'Politica de Confidențialitate GDPR · Medelise',
        description:
            'Află cum Medelise protejează datele tale personale conform GDPR.',
    },
};

export default function PoliticaConfidentialitatePage() {
    return <GDPRContent />;
}
