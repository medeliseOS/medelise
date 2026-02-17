export interface IVDripReview {
    author: string;
    date: string;
    rating: number; // 1-5
    text: string;
}

export interface DescriptionSection {
    heading: string;
    content: string | string[]; // string = paragraph, string[] = list
}

export interface IVDripDescription {
    title: string;
    intro: string;
    sections: DescriptionSection[];
}

export interface IVDripProductProps {
    /** Unique product ID for cart */
    id: string;
    /** Product title (uppercase) */
    title: string;
    /** Short subtitle / tagline */
    subtitle: string;
    /** Image path (SVG or PNG) */
    imageSrc: string;
    /** Image alt text */
    imageAlt?: string;
    /** Current price in Lei */
    price: number;
    /** Old (strikethrough) price in Lei */
    oldPrice?: number;
    /** Volume options e.g. ['500ml', '1000ml'] */
    volumeOptions?: string[];
    /** Per-ml economy text per volume, indexed same as volumeOptions */
    economyPerMl?: string[];
    /** List of benefit strings */
    benefits: string[];
    /** Description paragraphs for "Descriere" tab */
    description: IVDripDescription;
    /** Customer reviews for "Recenzii" tab */
    reviews: IVDripReview[];
    /** Total review count shown next to stars */
    reviewCount: number;
    /** Average rating (1-5) for the star display */
    averageRating?: number;
    /** Disclaimer text */
    disclaimer?: string;
    /** Override "Why it works" section heading */
    whyHeading?: string;
    /** Override "Why it works" section intro text */
    whyIntro?: string;
    /** Override "Why it works" feature cards */
    whyFeatures?: any[]; // IVWhyFeature imported from IVWhySection
    /** Ideal for section items */
    idealForItems?: string[];
    /** Clinical studies data */
    clinicalStudies?: any[]; // IVClinicalStudy imported from IVClinicalStudiesSection
}
