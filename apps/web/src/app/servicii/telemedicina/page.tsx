import type { Metadata } from 'next';
import TelemedicinaContent from '@features/servicii/components/TelemedicinaContent';

export const metadata: Metadata = {
    title: 'Telemedicină – Consulturi Online | Medelise',
    description: 'Consultații medicale online prin video, interpretare analize și prescripții digitale. Telemedicină accesibilă cu Medelise.',
};

export default function TelemedicinaPage() {
    return <TelemedicinaContent />;
}
