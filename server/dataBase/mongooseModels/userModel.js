import Mongoose from "mongoose";

// Definiera ett schema för användaren
const userSchema = new Mongoose.Schema({
  email: { type: String, required: true, unique: true},
  password: { type: String, required: true},
  dateOfRegistration: { type: Date, required: true},
  name: { type: String, required: true},
  surname: { type: String, required: true},
  street: { type: String, required: true},
  city: { type: String, required: true},
  postalCode: { type: String, required: true},
  phone: { type: String},
  pets: {
    type: [Mongoose.Schema.Types.ObjectId],
    ref: "Pet",  // Ref till den modell som husdjuren använder
    default: [], // Gör att det är en tom array om inget skickas med
  },
  orders: { type: Array, default: []},
  favorites: { type: Array, default: []},
  messages: { type: Array, default: []}

});

// Skapa en Mongoose-modell för användaren baserat på schemat
export const userModel = Mongoose.model("User", userSchema);
