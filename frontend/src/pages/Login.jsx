import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import Alerta from "../components/Alerta";
import axios from "axios";
import useAuth from "../hooks/useAuth";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [alerta, setAlerta] = useState({});

  const { setAuth } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if ([email, password].includes("")) {
      setAlerta({ msg: "Todos los campos son obligatorios", error: true });
      return;
    }

    try {
      const { data } = await axios.post(
        "http://localhost:4001/api/usuarios/login",
        { email, password }
      );
      console.log(data);
      localStorage.setItem("token", data.token);
      setAuth(data)
    } catch (error) {
      console.log(error.response.data.msg);
    }
  };

  const { msg } = alerta;
  return (
    <>
      <h1 className="text-sky-600 text-4xl">Inicia sesion</h1>

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
        <div className="my-3">
          <label className="uppercase block font-bold" htmlFor="password">
            Password
          </label>
          <input
            className="w-full mt-2 p-2 border bg-gray-50"
            id="password"
            type="password"
            placeholder="Introduce tu password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <input
          type="submit"
          value="Iniciar Sesión"
          className="w-full bg-slate-700 text-white uppercase py-2 hover:cursor-pointer hover:bg-slate-500"
        />
      </form>
      <nav className="flex justify-between">
        <Link to="/registrar" className="block uppercase my-2 text-sm">
          No tienes cuenta? Registrate
        </Link>
        <Link to="/olvide-password" className="block uppercase my-2 text-sm">
          Olvidé mi password
        </Link>
      </nav>
    </>
  );
};

export default Login;
