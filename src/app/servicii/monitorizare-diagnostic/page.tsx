import type { Metadata } from 'next';
import MonitorizareDiagnosticContent from '@features/servicii/components/MonitorizareDiagnosticContent';

export const metadata: Metadata = {
    title: 'Monitorizare & Diagnostic la Domiciliu | Medelise',
    description: 'Servicii de monitorizare a parametrilor vitali, recoltări și EKG disponibile la domiciliu, cu profesioniști medicali Medelise.',
};

export default function MonitorizareDiagnosticPage() {
    return <MonitorizareDiagnosticContent />;
}
