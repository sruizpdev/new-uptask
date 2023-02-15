import { Link } from "react-router-dom";
import { useState } from "react";
import Alerta from "../components/Alerta";

const Registrar = () => {
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repetirPassword, setRepetirPassword] = useState("");
  const [alerta, setAlerta] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    if ([nombre, email, password, repetirPassword].includes("")) {
      setAlerta({ msg: "Todos los campos son obligatorios", error: true });

      return;
    }
  };
  const { msg } = alerta;
  return (
    <>
      <h1 className="text-sky-600 text-4xl">
        Crea tu cuenta y administra tus proyectos
      </h1>
      {msg && <Alerta alerta={alerta}/>}
      <form className="my-5 bg-white p-5" onSubmit={handleSubmit}>
        <div className="my-3">
          <label className="uppercase block font-bold" htmlFor="nombre">
            Nombre
          </label>
          <input
            className="w-full mt-2 p-2 border bg-gray-50"
            id="nombre"
            type="text"
            placeholder="Introduce tu nombre"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
          />
        </div>
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
        <div className="my-3">
          <label className="uppercase block font-bold" htmlFor="password2">
            Repetir Password
          </label>
          <input
            className="w-full mt-2 p-2 border bg-gray-50"
            id="password2"
            type="password"
            placeholder="Repite tu password"
            value={repetirPassword}
            onChange={(e) => setRepetirPassword(e.target.value)}
          />
        </div>
        <input
          type="submit"
          value="Crear cuenta"
          className="w-full bg-slate-700 text-white uppercase py-2 hover:cursor-pointer hover:bg-slate-500"
        />
      </form>
      <nav className="flex justify-between">
        <Link to="/" className="block uppercase my-2 text-sm">
          ya tengo cuenta
        </Link>
        <Link to="/olvide-password" className="block uppercase my-2 text-sm">
          Olvidé mi password
        </Link>
      </nav>
    </>
  );
};

export default Registrar;
