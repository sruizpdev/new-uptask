import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";
import Alerta from "../components/Alerta";

const OlvidePassword = () => {
  const [email, setEmail] = useState("");
  const [alerta, setAlerta] = useState({});

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (email === "") {
      setAlerta({
        msg: "email no valido",
        error: true,
      });
      return;
    }
    try {
      const { data } = await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}/api/usuarios/olvide-password`,
        {
          email,
        }
      );
      setAlerta({msg: data.msg, error:false})
      
    } catch (error) {
      setAlerta({ msg: error.response.data.msg, error: true });
    }
  };
  const { msg } = alerta;
  return (
    <>
      <h1 className="text-sky-600 text-4xl">Recupera tu acceso</h1>

      {msg && <Alerta alerta={alerta} />}
      <form className="my-5 bg-white p-5" onSubmit={handleSubmit}>
        <div className="my-3">
          <label className="uppercase block font-bold" htmlFor="email">
            Email
          </label>
          <input
            className="w-full mt-2 p-2 border bg-gray-50"
            id="email"
            type="email"
            placeholder="Introduce tu email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <input
          type="submit"
          value="Recuperar password"
          className="w-full bg-slate-700 text-white uppercase py-2 hover:cursor-pointer hover:bg-slate-500"
        />
      </form>
      <nav className="flex justify-between">
        <Link to="/" className="block uppercase my-2 text-sm">
          Ya tengo cuenta
        </Link>
        <Link to="/registrar" className="block uppercase my-2 text-sm">
          No tienes cuenta? Registrate
        </Link>
      </nav>
    </>
  );
};

export default OlvidePassword;
