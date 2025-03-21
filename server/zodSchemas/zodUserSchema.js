import { z } from "zod";
import { zodIDSchema } from "./zod-ID-schema.js";

// Definiera ett schema för en användare, id skapas automatiskt via mongoDB
export const zodUserSchema = z.object({
  email: z.string().email("Ogiltig epostadress").min(1, "Email is required"),
  password: z.string().min(1, "Password is required"),
  dateOfRegistration: z
    .string()
    .refine((val) => !isNaN(Date.parse(val)), {
      message: "Date must be a valid date string (YYYY-MM-DD or ISO 8601)",
    })
    .transform((val) => new Date(val + "Z")), // Tvinga tolkning som UTC
  ssn: z
    .string()
    .regex(/^\d{4}-\d{2}-\d{2}$/, "SSN måste vara i formatet YYYY-MM-DD")
    .min(1, "Social security number is required"),
  name: z.string().min(1, "Name is required"),
  surname: z.string().min(1, "Surname is required"),
  street: z.string().min(1, "Street is required"),
  city: z.string().min(1, "City is required"),
  postalCode: z
    .string()
    .regex(/^\d{5}$/, "Postnumret måste vara 5 siffror")
    .min(1, "PostalCode is required"), // Exempel: 50455
  phone: z
    .string()
    .length(10, "Telefonnummret måste vara 10 siffror")
    .optional(),
  pets: z.array(zodIDSchema).default([]), //initialt en tom array
  orders: z.array().default([]),
  favorites: z.array(z.string()).default([]),
  messages: z.array().default([]),
});
