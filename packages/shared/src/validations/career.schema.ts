import { z } from 'zod';

export const careerSchema = z.object({
    firstName: z.string().min(2, "Prenumele este obligatoriu"),
    lastName: z.string().min(2, "Numele de familie este obligatoriu"),
    email: z.string().email("Adresa de email este invalidă"),
    phone: z.string().regex(/^(?:(?:(?:\+4)?07\d{8}))$/, "Inserați un număr de telefon valid din România"),
    position: z.string().min(2, "Alegeți o poziție validă"),
    cvLink: z.string().url("Vă rugăm să introduceți un link absolut valid (ex: Google Drive / LinkedIn)").optional(),
    message: z.string().max(1000, "Mesajul este prea lung").optional()
});

export type CareerFormData = z.infer<typeof careerSchema>;
