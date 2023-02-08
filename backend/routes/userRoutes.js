import express from "express";
import { createNewUser,autenticar } from "../controllers/userController.js";

const router = express.Router();

router.post("/", createNewUser);
router.post('/login', autenticar)
export default router;
