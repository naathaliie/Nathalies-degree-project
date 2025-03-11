import {z} from "zod";
import { zodIDSchema } from "./zod-ID-schema.js";

// Definiera ett schema för ett husdjurs helathInfo, id skapas automatiskt via mongoDB
export const zodHealthInfoSchema = z.object({
    petId: zodIDSchema, //Måste vara ett giltigt mongoDB-ID
    type: z.string().min(1, "Type of helatfInfo is required"),
    date: z.string()
    .refine((val) => !isNaN(Date.parse(val)), {
        message: "Date must be a valid date string (YYYY-MM-DD or ISO 8601)",
    })
    .transform((val) => new Date(val)), //konverterar stäng till Date för fatum
    notes: z.string(),
    place: z.string().min(1, "Place is required"),
});
