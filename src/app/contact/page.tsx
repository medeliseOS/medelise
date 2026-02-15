import type { Metadata } from 'next';
import ContactContent from '@/components/contact/ContactContent';

export const metadata: Metadata = {
    title: 'Contact',
    description:
        'Contactează echipa Medelise Health Solutions — formular de contact, telefon, email și program de lucru. Răspundem în 24h.',
    openGraph: {
        title: 'Contact · Medelise',
        description:
            'Contactează echipa Medelise — formular, telefon, email. Răspundem în 24h.',
    },
};

export default function ContactPage() {
    return <ContactContent />;
}
