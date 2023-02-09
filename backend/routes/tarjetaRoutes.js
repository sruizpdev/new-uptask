import express from "express";
import {
  crearNuevaTarjeta,
  obtenerTarjeta,
} from "../controllers/tarjetaController.js";

const router = express.Router();

router.post("/", crearNuevaTarjeta);
router.post("/obtener-tarjeta/:word", obtenerTarjeta);
export default router;
