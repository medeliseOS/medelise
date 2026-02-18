import type { Metadata } from 'next';
import { MyersCocktailContent } from '@features/iv-therapy/components';

export const metadata: Metadata = {
    title: 'IV Drip Myers-Cocktail | Medelise',
    description: 'Terapia Myers-Cocktail originală, acum la tine acasă. Complex vitaminic complet pentru imunitate, energie și stare de bine.',
};

export default function MyersCocktailPage() {
    return <MyersCocktailContent />;
}
