import type { Metadata } from 'next';
import LoginPageContent from '@features/auth/components/LoginPageContent';

export const metadata: Metadata = {
    title: 'Autentificare',
    description:
        'Autentifică-te sau creează un cont Medelise pentru a accesa serviciile medicale premium și portalul de pacient.',
    openGraph: {
        title: 'Autentificare · Medelise',
        description:
            'Accesează contul tău Medelise sau creează unul nou.',
    },
};

export default function LoginPage() {
    return <LoginPageContent />;
}
