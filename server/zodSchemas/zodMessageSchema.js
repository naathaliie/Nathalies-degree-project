import { z } from "zod";

// Skapa Zod-schemat för Message
export const zodMessageSchema = z.object({
  sender: z.string().regex(/^[a-f\d]{24}$/i, "Ogiltigt ID-format"),  // Referens till användare, MongoDB ObjectId
  receiver: z.string().regex(/^[a-f\d]{24}$/i, "Ogiltigt ID-format"),  // Referens till användare, MongoDB ObjectId
  content: z.string().min(1, "Meddelandet får inte vara tomt"),  // Innehållet i meddelandet
  read: z.boolean().default(false),  // Lässtatus
  createdAt: z.date().default(() => new Date()),  // Skapelsedatum
});
