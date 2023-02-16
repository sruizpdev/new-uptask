import express from "express";
import dotenv from "dotenv";
import conectarDB from "./config/db.js";
import tarjetaRoutes from "./routes/tarjetaRoutes.js";
import usuarioRoutes from "./routes/usuarioRoutes.js";
import proyectoRoutes from "./routes/proyectoRoutes.js";
import tareaRoutes from "./routes/tareaRoutes.js";
import cors from "cors";

const app = express();

app.use(express.json());

dotenv.config();
conectarDB();

const whitelist = [process.env.FRONTEND_URL];

const corsOptions = {
  origin: function (origin, callback) {
    console.log(origin);
    if (whitelist.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error("Error de cors"));
    }
  },
};
app.use(cors(corsOptions));
app.use("/api/usuarios", usuarioRoutes);
app.use("/api/proyectos", proyectoRoutes);
app.use("/api/tareas", tareaRoutes);

app.use("/api/tarjetas", tarjetaRoutes);

const PORT = process.env.PORT || 4001;

app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});
