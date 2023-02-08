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

const autenticar = async (req, res) => {
  const { email, password } = req.body;

  const usuario = await User.findOne({ email });
  if (!usuario) {
    const error = new Error("El usuario no existe");
    return res.status(404).json({ msg: error.message });
  }
  if (!usuario.confirmed) {
    const error = new Error("Cuenta no confirmada");
    return res.status(403).json({ msg: error.message });
  }
  if (await usuario.comprobarPassword(password)) {
    res.json({
      _id: usuario._id,
      nombre: usuario.name,
      email: usuario.email,
    });
  } else {
    const error = new Error("El password es incorrecto");
    return res.status(403).json({ msg: error.message });
  }
};
export { createNewUser, autenticar };
