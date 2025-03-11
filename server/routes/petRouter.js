import Express from "express"
import { zodIDSchema } from "../zodSchemas/zod-ID-schema.js";
import { zodPartialTestSchema } from "../zodSchemas/zodPartialSchema.js";
import { petModel } from "../dataBase/mongooseModels/petModel.js";
import { zodPetSchema } from "../zodSchemas/zodPetsSchema.js";
import { userModel } from "../dataBase/mongooseModels/userModel.js";

export function petRouter(){
    const router = Express.Router()

    //Hämta alla pets i från databasen
        router.get("/", async (req, res) => {
            try {
            const data = await petModel.find({});
            res.status(200).send(data);
            } catch (error) {
            console.log("Det gick inte att hämta husdjur");
            res.sendStatus(404);
            res.end(); // Avslutar responsen
            }
        });

        // Skapa en ny användare (signup)
        router.post("/new", async (req, res) => {
            //Hämta username från body
            const { ownerId, dateOfRegistration, name, species, breed, sex, birthday, description, healthInfo } = req.body

            // Validera först med Zod INNAN datan skickas till databasen
            const zodResult = zodPetSchema.safeParse(req.body);
            console.log(zodResult);  // Logga resultatet för att se strukturen

            if (!zodResult.success) {
                return res.status(400).json({
                    message: "Zod-validering misslyckades när du skulle lägga till ett nytt husdjur",
                    errors: zodResult.error.errors,
                });
            }

            try {

            //Kolla så att det finns en ägare med medskickat id
            const existingOwner = await userModel.findOne({_id: ownerId});
            if (!existingOwner) {
                return res.status(409).json({ message: "Det finns ingen user med medskickat ownerId"})
            }

           /*  // Kolla om husdjuret redan finns
            const existingPet = await petModel.findOne({ _id:  });
            if (existingPet) {
                return res.status(409).json({ message: "Husdjuret är redan tillagt" });
            } */

            // Skapa ett nytt husdjur
            const newPet = await petModel.create({
                ownerId,
                dateOfRegistration,
                name,
                species,
                breed,
                sex,
                birthday,
                description,
                healthInfo,
            });

            // Skicka tillbaka det nytillagda husdjuret
            res.status(201).json({ message: "Husdjur tillagt", pet: newPet });
            } catch (error) {
            res.status(500).json({
                message: "Serverfel när du försökte lägga till ett nytt husdjur",
                error: error.message,
            });
            }
        });

    return router;
};



