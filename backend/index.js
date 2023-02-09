import express from "express";
import dotenv from "dotenv";
import conectarDB from "./config/db.js";
import cardRoutes from "./routes/tarjetaRoutes.js";
import usuarioRoutes from "./routes/usuarioRoutes.js";

// probar con require para dotenv

const app = express();

app.use(express.json());

dotenv.config();
conectarDB();

app.use("/api/usuarios", usuarioRoutes);

app.use("/api/tarjetas", cardRoutes);

const PORT = process.env.PORT || 4001;

app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});
