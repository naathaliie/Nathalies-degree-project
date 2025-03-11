import mongoose from "mongoose";

const messageSchema = new mongoose.Schema({
  sender: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },  // Avsändare (User)
  receiver: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },  // Mottagare (User)
  content: { type: String, required: true },  // Meddelandets innehåll
  read: { type: Boolean, default: false },  // Om meddelandet är läst
  createdAt: { type: Date, default: Date.now },  // Skapelsedatum
});

export const messageModel = mongoose.model("Message", messageSchema);
