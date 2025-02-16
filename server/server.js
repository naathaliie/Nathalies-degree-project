import express from "express"

const app = express()
const port = 3003

app.use(express.json())//Middleware för att parsa inkommande JSON-data

app.get("/", (req, res) => {
    res.send("Hello world, det fungerar yeey!") //Skickar ett enkelt svar på GET
})

app.listen(port, ()=>{
console.log(`Server is running on port: ${port}`)
})