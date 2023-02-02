import express from "express";
import { createNewCard, getCard } from "../controllers/cardController.js";

const router = express.Router();

router.post("/", createNewCard);
router.post("/get-translation/:word", getCard);
export default router;
