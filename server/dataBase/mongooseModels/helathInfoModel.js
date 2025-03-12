import Mongoose from "mongoose";

// Definiera ett schema för användaren
const healthInfoSchema = new Mongoose.Schema({
    petId: { type: Mongoose.Schema.Types.ObjectId, ref: "Pet", required: true},// Referens till husdjurets ID
    dateOfRegistration: { type: Date, required: true},
    type: { type: String, required: true},
    date: { type: Date, required: true},
    notes: { type: String},
    place: { type: String, required: true},

});

// Skapa en Mongoose-modell för användaren baserat på schemat
export const healthInfoModel = Mongoose.model("HealthInfo", healthInfoSchema);



