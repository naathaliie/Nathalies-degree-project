import Express from "express"
import { userModel } from "../dataBase/mongooseModels/userModel.js";
import { zodUserSchema } from "../zodSchemas/zodUserSchema.js";
import { zodIDSchema } from "../zodSchemas/zod-ID-schema.js";
import { zodPartialTestSchema } from "../zodSchemas/zodPartialSchema.js";
import { petModel } from "../dataBase/mongooseModels/petModel.js";
import { healthInfoModel } from "../dataBase/mongooseModels/helathInfoModel.js";
import { zodHealthInfoSchema } from "../zodSchemas/zodHealthInfoSchema.js";

export function healthInfoRouter(){
    const router = Express.Router()

    //Hämta alla användare i från databasen
        router.get("/", async (req, res) => {
            try {
            const data = await healthInfoModel.find({});
            res.status(200).send(data);
            } catch (error) {
            console.log("Det gick inte att hämta healthInfo");
            res.sendStatus(404);
            res.end(); // Avslutar responsen
            }
        });

        // Skapa en ny användare (signup)
        router.post("/new", async (req, res) => {
            //Hämta username från body
            const { petId, dateOfRegistration, type, date, notes, place } = req.body

            // Validera först med Zod INNAN datan skickas till databasen
            const zodResult = zodHealthInfoSchema.safeParse(req.body);
            console.log(zodResult);  // Logga resultatet för att se strukturen

            if (!zodResult.success) {
                return res.status(400).json({
                    message: "Zod-validering misslyckades när du skulle lägga till ny helathInfo",
                    errors: zodResult.error.errors,
                });
            }

            try {

            // Kolla om husdjuret finns
            const existingPet = await petModel.findOne({ _id: petId });
            if (!existingPet) {
                return res.status(409).json({ message: "Det finns inget husdjur att spara healtinfon på" });
            }


            // Skapa en ny healthInfo
            const newHealthInfo = await healthInfoModel.create({
                petId,
                dateOfRegistration,
                type,
                date,
                notes,
                place
            });

            // Skicka tillbaka den ny skapade användaren
            res.status(201).json({ message: "HealthInfo skapad", healthInfo: newHealthInfo });
            } catch (error) {
            res.status(500).json({
                message: "Serverfel vid skapande av healthInfo",
                error: error.message,
            });
            }
        });

    return router;
};



