import Card from "../models/Card.js";

const createNewCard = async (req, res) => {
  const newCard = new Card(req.body);
  try {
    const cardSaved = await newCard.save();
    res.json(cardSaved);
  } catch (error) {
    console.log(error);
  }
};
export { createNewCard };
