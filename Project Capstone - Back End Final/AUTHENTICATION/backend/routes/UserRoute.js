import express from "express";
import { register, login, logout, me, } from "../controllers/Users.js";
import { verifyToken } from "../middleware/VerifyToken.js";

const router = express.Router();

router.post("/register", register);
router.post("/login", login);
router.post("/logout", logout);
router.get("/me", verifyToken, me); // Menggunakan middleware verifyToken untuk melindungi rute ini

export default router;
