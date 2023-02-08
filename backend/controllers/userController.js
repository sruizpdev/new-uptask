import generarId from "../helpers/generarId.js";
import User from "../models/User.js";

const createNewUser = async (req, res) => {
  const { email } = req.body;
  const existUser = await User.findOne({ email });

  if (existUser) {
    const error = new Error("Usuario ya registrado");
    return res.status(400).json({ msg: error.message });
  }
  try {
    const user = new User(req.body);
    user.token = generarId();
    const userSaved = await user.save();

    res.json(userSaved);
  } catch (error) {
    console.log(error);
  }
};
export { createNewUser };
