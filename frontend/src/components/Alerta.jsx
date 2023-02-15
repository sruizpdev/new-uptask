const Alerta = ({ alerta }) => {
  return (
    <div
      className={`${
        alerta.error ? "from-red-400 to-red-600" : "from-sky-400 to-sky-600"
      } bg-gradient-to-br text-center p-3 text-white m-10 uppercase`}
    >
      {alerta.msg}
    </div>
  );
};

export default Alerta;
