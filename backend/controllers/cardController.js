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

const getCard = async (req, res) => {
  const { word } = req.params;

  const existWord = await Card.findOne({ word });

  if (!existWord) {
    const error = new Error("La palabra no existe en la BBDD");
    return res.status(404).json({ msg: error.message });
  }

  try {
    res.json(existWord);
  } catch (error) {
    console.log(error);
  }
};
export { createNewCard, getCard };
