import Card from "../models/Card.js";

const createNewCard = async (req, res) => {
  const { word } = req.body;
  

  const duplicateWord = await Card.findOne({ word });
  if (duplicateWord) {
    const error = new Error("Palabra ya registrada");
    return res.status(400).json({ msg: error.message });
  }
  try {
    const newCard = new Card(req.body);
    const cardSaved = await newCard.save();
    res.json(cardSaved);
  } catch (error) {
    console.log(error);
  }
};
export { createNewCard };
