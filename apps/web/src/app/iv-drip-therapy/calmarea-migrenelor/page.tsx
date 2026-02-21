import type { Metadata } from 'next';
import { CalmareaMigrenelorContent } from '@features/iv-therapy/components';

export const metadata: Metadata = {
    title: 'IV Drip Calmarea Migrenelor | Medelise',
    description: 'Tratament perfuzabil rapid pentru migrene și dureri de cap. Scapă de durere și disconfort la domiciliu cu Medelise.',
};

export default function CalmareaMigrenelorPage() {
    return <CalmareaMigrenelorContent />;
}
