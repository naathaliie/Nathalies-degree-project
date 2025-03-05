import {z} from "zod";
import { zodIDSchema } from "./zod-ID-schema.js";

export const zodUserSchema = z.object({
    username: z.string().min(6),  // Minst 6 tecken för användarnamn
    password: z.string().min(6),
    name: z.string(),
    street: z.string().optional(),
    city: z.string().optional(),
    postalCode: z.string().optional().regex(/^\d{5}$/, "Postnummret behöver vara 5 siffror"), // Exempel 50455
    phone: z.string().length(10).optional(),
    pets: z.array(zodIDSchema).default([]).optional(), // Array av PetID

});
