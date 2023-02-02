import express from "express";
import { createNewCard } from "../controllers/cardController.js";

const router = express.Router();

router.post("/", createNewCard);
export default router;
