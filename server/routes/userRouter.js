import Express from "express"
import Mongoose from "mongoose"

export async function ConnectToDB() {
    await Mongoose.connect("mongodb://localhost:27017/")
}

export function userRouter(){
    const router = Express.Router()
    return router
}