import Mongoose from "mongoose";

// Definiera ett schema för användaren
const petSchema = new Mongoose.Schema({
    _id: { type: String, required: true, unique: true },
    name: { type: String, required: true},  // Minst 6 tecken för användarnamn
    species: { type: String },
    breed: { type: String, required: true},
    age: { type: String, required: true},
    description: { type: String},
    ownerId: { type: String, required: true, ref: "User" } // Referens till användarens ID
})

// Skapa en Mongoose-modell för användaren baserat på schemat
export const petModel = Mongoose.model("Pet", petSchema);
