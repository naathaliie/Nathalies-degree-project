import Mongoose from "mongoose";

// Definiera ett schema för ett husdjur
const petSchema = new Mongoose.Schema({
    ownerId: { type: Mongoose.Schema.Types.ObjectId, ref: "User", required: true},// Referens till användarens ID
    dateOfRegistration: { type: Date, required: true},
    name: { type: String, required: true},
    species: { type: String, required: true},
    breed: { type: String, required: true },
    sex: { type: String, required: true},
    birthday: { type: Date, required: true},
    description: { type: Array, default: []},
    healthInfo: {
        type: [Mongoose.Schema.Types.ObjectId],
        ref: "HealthInfo",  // Ref till den modell som healthInfo använder
        default: [], // Gör att det är en tom array om inget skickas med
    },
})

// Skapa en Mongoose-modell för användaren baserat på schemat
export const petModel = Mongoose.model("Pet", petSchema);
