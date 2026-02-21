import { z } from 'zod';

export const contactSchema = z.object({
    name: z.string().min(2, "Numele trebuie să conțină cel puțin 2 caractere"),
    email: z.string().email("Adresa de email este invalidă"),
    phone: z.string().regex(/^(?:(?:(?:\+4)?07\d{8}))$/, "Numărul de telefon trebuie să fie un număr valid din România"),
    message: z.string().min(10, "Mesajul trebuie să conțină cel puțin 10 caractere").max(1000, "Mesajul este prea lung (maxim 1000 caractere)")
});

export type ContactFormData = z.infer<typeof contactSchema>;
