export interface IVClinicalStudy {
    title: string;
    content: string;
}

export interface IVClinicalStudiesSectionProps {
    title?: string;
    heading?: string;
    description?: string;
    studies: IVClinicalStudy[];
}
