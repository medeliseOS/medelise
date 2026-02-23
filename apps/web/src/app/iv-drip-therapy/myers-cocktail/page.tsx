import type { Metadata } from 'next';
import { MyersCocktailContent } from '@features/iv-therapy/components';

export const metadata: Metadata = {
    title: 'IV Drip Myers Cocktail | Medelise',
    description: 'Tratament IV Drip Myers Cocktail la domiciliu. Complex vitaminic total pentru revitalizare generală cu Medelise.',
};

export default function MyersCocktailPage() {
    return <MyersCocktailContent />;
}
