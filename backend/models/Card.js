import mongoose from "mongoose";

const cardSchema = mongoose.Schema({
  word: {
    type: String,
    required: true,
    trim: true,
    unique: true,
  },
  translation: {
    type: String,
    required: true,
    trim: true,
  },
});

const Card = mongoose.model("Card", cardSchema);
export default Card;
