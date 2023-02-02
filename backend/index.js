import express from "express";
import dotenv from "dotenv";
import conectarDB from "./config/db.js";
import cardRoutes from './routes/cardRoutes.js'

// probar con require para dotenv

const app = express();

app.use(express.json());

dotenv.config();
conectarDB();

app.use("/api/cards", cardRoutes);

const PORT = process.env.PORT || 4001;

app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});
