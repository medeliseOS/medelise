export interface IVDripService {
    id: string;
    title: string;
    slug: string;
    price: number;
    shortDescription: string;
    imagePlaceholder: string;
}

export const IV_DRIP_SERVICES: IVDripService[] = [
    {
        id: 'deshidratare',
        title: 'Deshidratare',
        slug: '/iv-drip-therapy/deshidratare',
        price: 350,
        shortDescription: 'Rehidratează și revitalizează corpul cu fluide IV.',
        imagePlaceholder: 'Dehydration',
    },
    {
        id: 'boost-de-energie',
        title: 'Boost de Energie',
        slug: '/iv-drip-therapy/boost-de-energie',
        price: 400,
        shortDescription: 'Infuzie cu lichide energizante și vitamine esențiale.',
        imagePlaceholder: 'Energy Boost',
    },
    {
        id: 'anti-mahmureala',
        title: 'Anti-Mahmureală',
        slug: '/iv-drip-therapy/anti-mahmureala',
        price: 450,
        shortDescription: 'Rezolvă greața, durerile de cap și combate oboseala.',
        imagePlaceholder: 'Hangover',
    },
    {
        id: 'recuperare',
        title: 'Recuperare',
        slug: '/iv-drip-therapy/recuperare',
        price: 450,
        shortDescription: 'Recuperare rapidă după efort fizic intens sau boli.',
        imagePlaceholder: 'Recovery',
    },
    {
        id: 'fertility-plus',
        title: 'Fertility+',
        slug: '/iv-drip-therapy/fertility-plus',
        price: 500,
        shortDescription: 'Optimizare celulară pentru sănătatea reproductivă.',
        imagePlaceholder: 'Fertility Plus',
    },
    {
        id: 'boost-de-imunitate',
        title: 'Boost de Imunitate',
        slug: '/iv-drip-therapy/boost-de-imunitate',
        price: 450,
        shortDescription: 'Întărește sistemul imunitar împotriva virusurilor.',
        imagePlaceholder: 'Immunity Boost',
    },
    {
        id: 'super-boost-de-imunitate',
        title: 'Super Boost de Imunitate',
        slug: '/iv-drip-therapy/super-boost-de-imunitate',
        price: 550,
        shortDescription: 'Protecție maximă cu doze mari de Vitamina C și Zinc.',
        imagePlaceholder: 'Super Immunity',
    },
    {
        id: 'frumusete',
        title: 'Frumusețe',
        slug: '/iv-drip-therapy/frumusete',
        price: 480,
        shortDescription: 'Piele strălucitoare, păr sănătos și unghii puternice.',
        imagePlaceholder: 'Beauty',
    },
    {
        id: 'myers-cocktail',
        title: 'Myers-Cocktail',
        slug: '/iv-drip-therapy/myers-cocktail',
        price: 450,
        shortDescription: 'Cocktailul clasic pentru o stare generală de bine.',
        imagePlaceholder: 'Myers Cocktail',
    },
    {
        id: 'calmarea-migrenelor',
        title: 'Calmarea Migrenelor',
        slug: '/iv-drip-therapy/calmarea-migrenelor',
        price: 450,
        shortDescription: 'Soluție rapidă pentru durerile de cap severe.',
        imagePlaceholder: 'Migraine Relief',
    },
    {
        id: 'all-inclusive',
        title: 'All - Inclusive',
        slug: '/iv-drip-therapy/all-inclusive',
        price: 600,
        shortDescription: 'Experiența supremă de revitalizare completă.',
        imagePlaceholder: 'All Inclusive',
    },
    {
        id: 'gastroenterita',
        title: 'Gastroenterită',
        slug: '/iv-drip-therapy/gastroenterita',
        price: 450,
        shortDescription: 'Ameliorează rapid simptomele virozelor digestive.',
        imagePlaceholder: 'Stomach Flu',
    },
];
