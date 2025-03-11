import {z} from "zod";
import { zodIDSchema } from "./zod-ID-schema.js";

// Definiera ett schema för en användare, id skapas automatiskt via mongoDB
export const zodUserSchema = z.object({
    username: z.string().min(1, "Username is required"),
    password: z.string().min(1, "Password is required"),
    email: z.string().email("Ogiltig epostadress").min(1, "Email is required"),
    dateOfRegistration: z.string()
    .refine((val) => !isNaN(Date.parse(val)), {
        message: "Date must be a valid date string (YYYY-MM-DD or ISO 8601)",
    })
    .transform((val) => new Date(val)), //konverterar stäng till Date för fatum
    name: z.string().min(1, "Name is required"),
    surname: z.string().min(1, "Surname is required"),
    street: z.string().min(1, "Street is required"),
    city: z.string().min(1, "City is required"),
    postalCode: z.string().regex(/^\d{5}$/, "Postnumret måste vara 5 siffror").min(1, "PostalCode is required"), // Exempel: 50455
    phone: z.string().length(10,"Telefonnummret måste vara 10 siffror").optional(),
    pets: z.array(zodIDSchema).default([]), //initialt en tom array
    orders: z.array().default([]),
    favourites: z.array().default([]),
    messages: z.array().default([]),

});
