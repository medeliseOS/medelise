import type { Metadata } from 'next';
import { AllInclusiveContent } from '@features/iv-therapy/components';

export const metadata: Metadata = {
    title: 'IV Drip All-Inclusive | Medelise',
    description: 'Tratamentul suprem IV Drip. Pachet complet pentru sănătate, energie, imunitate și frumusețe, livrat la tine acasă de Medelise.',
};

export default function AllInclusivePage() {
    return <AllInclusiveContent />;
}
