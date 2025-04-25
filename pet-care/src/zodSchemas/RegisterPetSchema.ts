import { z } from "zod";

export const RegisterPetSchema = z.object({
  name: z.string().min(1, { message: "Namn får inte vara tomt" }),
  species: z.string().min(1, { message: "Typ av husdjur måste anges" }),
  breed: z.string().min(1, { message: "Ras måste anges" }),
  gender: z.string().min(1, { message: "Kön måste anges" }),
});
