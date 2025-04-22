import Express from "express"
import { userModel } from "../dataBase/mongooseModels/userModel.js";
import { zodUserSchema } from "../zodSchemas/zodUserSchema.js";
import { zodIDSchema } from "../zodSchemas/zod-ID-schema.js";
import { zodPartialTestSchema } from "../zodSchemas/zodPartialSchema.js";
import { petModel } from "../dataBase/mongooseModels/petModel.js";

export function userRouter(){
    const router = Express.Router()

    //Hämta alla användare i från databasen
        router.get("/", async (req, res) => {
            try {
            const data = await userModel.find({});
            console.log("Du hämtade ut alla users med ett lyckat resultat från DB")
            res.status(200).send(data);
            } catch (error) {
            console.log("Det gick inte att hämta användare");
            res.sendStatus(500);
            res.end(); // Avslutar responsen
            }
        });

        // Skapa en ny användare (signup)
        router.post("/new", async (req, res) => {
            //Hämta username från body
            const { email, password, dateOfRegistration, name, surname, street, city, postalCode, phone, pets, orders, favorites, messages } = req.body

            // Validera först med Zod INNAN datan skickas till databasen
            const zodResult = zodUserSchema.safeParse(req.body);
            console.log(zodResult);  // Logga resultatet för att se strukturen

            if (!zodResult.success) {
                return res.status(400).json({
                    message: "Zod-validering misslyckades vid signup för en ny user",
                    errors: zodResult.error.errors,
                });
            }

            try {

            // Kolla om epostadressen redan finns
            const existingEmail = await userModel.findOne({ email });
            if (existingEmail) {
                return res.status(409).json({ message: "Epostadressen är redan registrerat på en annan användare" });
            }

            //Kolla om husdjuret finns registrerad på en annan användare
            if (pets.length > 0) {
                const petAlreadyRegistrated = await petModel.findOne({ _id: { $in: pets } });

                if (petAlreadyRegistrated) {
                    return res.status(409).json({ message: "Ett av husdjuren är redan registrerat på en annan användare" });
                }
            }



            // Skapa en ny användare
            const newUser = await userModel.create({
                email,
                password,
                dateOfRegistration,
                name,
                surname,
                street,
                city,
                postalCode,
                phone,
                pets,
                orders,
                favorites,
                messages
            });

            // Skicka tillbaka den ny skapade användaren
            res.status(201).json({ message: "Användare skapad", user: newUser });
            } catch (error) {
            res.status(500).json({
                message: "Serverfel vid skapande av användare",
                error: error.message,
            });
            }
        });

    return router;
};



