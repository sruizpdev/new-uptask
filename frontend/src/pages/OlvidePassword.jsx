import { Link } from "react-router-dom";
const OlvidePassword = () => {
  return <>
  <h1 className="text-sky-600 text-4xl">Recupera tu acceso</h1>
  <form className="my-5 bg-white p-5">
    <div className="my-3">
      <label className="uppercase block font-bold" htmlFor="email">
        Email
      </label>
      <input
        className="w-full mt-2 p-2 border bg-gray-50"
        id="email"
        type="email"
        placeholder="Introduce tu email"
      />
    </div>
    
    <input
      type="submit"
      value="Recuperar password"
      className="w-full bg-slate-700 text-white uppercase py-2 hover:cursor-pointer hover:bg-slate-500"
    />
  </form>
  <nav className="flex justify-between">
    <Link to="/" className="block uppercase my-2 text-sm">Ya tengo cuenta</Link>
    <Link to="/registrar" className="block uppercase my-2 text-sm">No tienes cuenta? Registrate</Link>
        
  </nav>
</>
};

export default OlvidePassword;