import {z} from "zod";
import { zodIDSchema } from "./zod-ID-schema.js";

// Definiera ett schema för ett husdjurs helathInfo, id skapas automatiskt via mongoDB
export const zodHealthInfoSchema = z.object({
    petId: zodIDSchema, //Måste vara ett giltigt mongoDB-ID
    dateOfRegistration: z.string()
    .refine((val) => !isNaN(Date.parse(val)), {
      message: "Date must be a valid date string (YYYY-MM-DD or ISO 8601)",
    })
    .transform((val) => new Date(Date.parse(val))), // Tvinga tolkning som UTC
    type: z.string().min(1, "Type of helatfInfo is required"),
    date: z.string()
    .refine((val) => !isNaN(Date.parse(val)), {
      message: "Date must be a valid date string (YYYY-MM-DD or ISO 8601)",
    })
    .transform((val) => new Date(Date.parse(val))), // Tvinga tolkning som UTC
    notes: z.string(),
    place: z.string().min(1, "Place is required"),
});
