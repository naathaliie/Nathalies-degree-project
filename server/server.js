import Express from "express"
import { userRouter } from "./routes/userRouter.js";
import { connectToDB } from "./dataBase/connectToDB.js";

const app = Express()
const port = 3003

app.use(Express.json())//Middleware för att parsa inkommande JSON-data

//Koppla upp mot databasen för ALLA resurser
app.use("*", async (req, res, next) => {
    await connectToDB();
    next();
});

//Få tillgång till alla endpoints/rutter
app.use("/users", userRouter())

app.listen(port, ()=>{
console.log(`Server is running on port: ${port}`)
})
