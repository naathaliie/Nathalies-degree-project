import { z } from "zod";

export const RegisterUserSchema = z.object({
  email: z.string().email({ message: "Måste vara en giltig e-postadress" }),
  password: z
    .string()
    .min(2, { message: "Lösenord måste vara minst 2 tecken" }),
  name: z.string().min(1, { message: "Namn får inte vara tomt" }),
  surname: z.string().min(1, { message: "Efternamn får inte vara tomt" }),
  street: z.string().min(1, { message: "Adress får inte vara tomt" }),
  postalCode: z.string().min(1, { message: "Postnummer får inte vara tomt" }),
  city: z.string().min(1, { message: "Stad får inte vara tomt" }),
  phone: z.string().min(1, { message: "Telefonnummer får inte vara tomt" }),
});
