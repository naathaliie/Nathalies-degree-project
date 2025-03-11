import Express from "express";
import { messageModel } from "../dataBase/mongooseModels/messageModel.js";

export function messageRouter(){

    const router = Express.Router();

    //Hämta alla meddelanden
    router.get("/", async (req, res) => {
        try {
        const data = await messageModel.find({});
        res.status(200).send(data);
        } catch (error) {
        console.log("error...");
        res.sendStatus(404);
        res.end(); // Avslutar responsen
        }
    });

    return router
}
