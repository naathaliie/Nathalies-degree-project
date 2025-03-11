import Express from "express"
import { userRouter } from "./routes/userRouter.js";
import { petRouter } from "./routes/petRouter.js";
import { messageRouter } from "./routes/messageRouter.js"
import { testRouter } from "./routes/testRouter.js";
import { connectToDB } from "./dataBase/connectToDB.js";
import { healthInfoRouter } from "./routes/healtInfoRouter.js";

const app = Express()
const port = 3003

app.use(Express.json())//Middleware för att parsa inkommande JSON-data

//Koppla upp mot databasen för ALLA resurser
app.use("*", async (req, res, next) => {
    await connectToDB();
    next();
});

//Få tillgång till alla endpoints/rutter
app.use("/test", testRouter())
app.use("/users", userRouter())
app.use("/pets", petRouter())
app.use("/messages", messageRouter())
app.use("/healthInfo", healthInfoRouter())

app.listen(port, ()=>{
console.log(`Server is running on port: ${port}`)
})
