import Mongoose from "mongoose";

// Definiera ett schema för användaren
const userSchema = new Mongoose.Schema({
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true},
    name: { type: String, required: true},
    street: { type: String },
    city: { type: String },
    postalCode: { type: String, match: /^\d{5}$/ }, // Exempel för svensk postkod
    phone: { type: String, match: /^\d{10}$/ }, // Exempel för svenskt telefonnummer
    pets: [{ type: String, ref: 'Pet' }] //Detta definierar en referens till husdjursmodellen

});

// Skapa en Mongoose-modell för användaren baserat på schemat
export const userModel = Mongoose.model("User", userSchema);
