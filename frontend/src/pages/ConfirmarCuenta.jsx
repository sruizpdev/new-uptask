import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import Alerta from "../components/Alerta";

const ConfirmarCuenta = () => {
  const [alerta, setAlerta] = useState({});
  const [cuentaConfirmada, setCuentaConfirmada] = useState(false);
  const params = useParams();
  const { id } = params;

  useEffect(() => {
    const confirmaCuenta = async () => {
      try {
        const url = `http://localhost:4001/api/usuarios/confirmar/${id}`;
        const { data } = await axios(url);

        setAlerta({
          msg: data.msg,
          error: false,
        });
        setCuentaConfirmada(true);
      } catch (error) {
        setAlerta({
          msg: error.response.data.msg,
          error: true,
        });
      }
    };

    confirmaCuenta();
  }, []);
  const { msg } = alerta;

  return (
    <>
      <h1 className="text-sky-600 text-4xl">Confirma tu cuenta</h1>
      <div>
        {msg && <Alerta alerta={alerta} />}

        {cuentaConfirmada && (
          <Link to="/" className="block uppercase my-2 text-sm">
            Ya tengo cuenta
          </Link>
        )}
      </div>
    </>
  );
};

export default ConfirmarCuenta;
