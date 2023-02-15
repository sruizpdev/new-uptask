
const NuevoPassword = () => {
  return (
    <>
    <h1 className="text-sky-600 text-4xl">Restablece tu password</h1>
    <form className="my-5 bg-white p-5">
     
     
      <div className="my-3">
        <label className="uppercase block font-bold" htmlFor="password">
          Nuevo Password
        </label>
        <input
          className="w-full mt-2 p-2 border bg-gray-50"
          id="password"
          type="password"
          placeholder="Introduce tu nuevo password"
        />
      </div>
      
      <input
        type="submit"
        value="Guardar nuevo password"
        className="w-full bg-slate-700 text-white uppercase py-2 hover:cursor-pointer hover:bg-slate-500"
      />
    </form>
    
  </>
  )
}

export default NuevoPassword