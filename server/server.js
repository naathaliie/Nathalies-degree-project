import Express from "express"
import { ConnectToDB } from "./routes/userRouter";

const app = Express()
const port = 3003

app.use(Express.json())//Middleware för att parsa inkommande JSON-data

//Koppla upp mot databasen för ALLA resurser
app.use("*", async (req, res, next) => {
    await ConnectToDB();
    next();
});

app.get("/", (req, res) => {
    res.send("Hello world, det fungerar yeey!") //Skickar ett enkelt svar på GET
})

app.listen(port, ()=>{
console.log(`Server is running on port: ${port}`)
})