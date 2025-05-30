import {z} from "zod"
import { zodIDSchema } from "./zod-ID-schema.js";

// Definiera ett schema för ett husdjur, id skapas automatiskt via mongoDB
export const zodPetSchema = z.object({
    ownerId: zodIDSchema, //Måste vara ett giltigt mongoDB-ID
    dateOfRegistration: z.string()
    .refine((val) => !isNaN(Date.parse(val)), {
      message: "Date must be a valid date string (YYYY-MM-DD or ISO 8601)",
    })
    .transform((val) => new Date(val + "Z")), // Tvinga tolkning som UTC
    name: z.string().min(1, "Petname is required"),
    species: z.string().min(1, "Kind of species is required"),
    breed: z.string().min(1, "Breed is required"),
    sex: z.string().min(1, "Sex is required"),
    birthday: z.string()
    .refine((val) => !isNaN(Date.parse(val)), {
        message: "Date must be a valid date string (YYYY-MM-DD or ISO 8601)",
    })
    .transform((val) => new Date(val)), //konverterar stäng till Date för fatum
    description: z.array(z.string()).default([]),
    healthInfo: z.array(zodIDSchema).default([]),
});
