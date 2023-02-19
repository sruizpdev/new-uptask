import axios from "axios";
import Alerta from "../components/Alerta";

import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

const NuevoPassword = () => {
  const [password, setPassword] = useState("");
const [passwordModificado, setpasswordModificado] = useState(false)
  const [tokenValido, setTokenValido] = useState(false);
  const [alerta, setAlerta] = useState({});
  const params = useParams();
  const { token } = params;
  useEffect(() => {
    const comprobarToken = async () => {
      try {
        const { data } = await axios.get(
          `http://localhost:4001/api/usuarios/olvide-password/${token}`
        );
        setTokenValido(true);
      } catch (error) {
        setAlerta({ msg: error.response.data.msg, error: true });
      }
    };
    comprobarToken();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password.length < 6) {
      setAlerta({ msg: "El password es muy corto", error: true });
      return;
    }
    try {
      const url = `http://localhost:4001/api/usuarios/olvide-password/${token}`;
      const { data } = await axios.post(url, { password });
      setAlerta({ msg: data.msg, error: false });
      setpasswordModificado(true)
    } catch (error) {
      setAlerta({ msg: error.response.data.msg, error: true });
    }
  };

  const { msg } = alerta;
  return (
    <>
      <h1 className="text-sky-600 text-4xl">Restablece tu password</h1>
      {msg && <Alerta alerta={alerta} />}
      {tokenValido && (
        <form className="my-5 bg-white p-5" onSubmit={handleSubmit}>
          <div className="my-3">
            <label className="uppercase block font-bold" htmlFor="password">
              Nuevo Password
            </label>
            <input
              className="w-full mt-2 p-2 border bg-gray-50"
              id="password"
              type="password"
              placeholder="Introduce tu nuevo password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <input
            type="submit"
            value="Guardar nuevo password"
            className="w-full bg-slate-700 text-white uppercase py-2 hover:cursor-pointer hover:bg-slate-500"
          />
        </form>
      )}
      {passwordModificado && (
        <Link to="/" className="block uppercase my-2 text-sm">
          Ya tengo cuenta
        </Link>
      )}
    </>
  );
};

export default NuevoPassword;
