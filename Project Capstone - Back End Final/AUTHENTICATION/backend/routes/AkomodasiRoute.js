import express from "express";
import {
    getAkomodasi,
    getAkomodasiById,
    createAkomodasi,
    updateAkomodasi,
    deleteAkomodasi,
    getAdminAkomodasi,
    getAdminAkomodasiById
} from "../controllers/Akomodasi.js";
import { verifyToken } from "../middleware/VerifyToken.js";
import { verifyUser, adminOnly } from "../middleware/AuthUser.js";
import upload from "../middleware/upload.js";

const router = express.Router();

router.get("/admin/accommodations", verifyToken, verifyUser, adminOnly, getAdminAkomodasi);
router.get("/admin/accommodations/:id", verifyToken, verifyUser, adminOnly, getAdminAkomodasiById);
router.post("/accommodations", verifyToken, verifyUser, adminOnly, upload.single('gambar'), createAkomodasi);
router.patch("/edit/accommodations/:id", verifyToken, verifyUser, adminOnly, upload.single('gambar'), updateAkomodasi);
router.delete("/accommodations/:id", verifyToken, verifyUser, adminOnly, deleteAkomodasi);

router.get("/accommodations", verifyToken, verifyUser, getAkomodasi);
router.get("/accommodations/:id", verifyToken, verifyUser, getAkomodasiById);

export default router;
