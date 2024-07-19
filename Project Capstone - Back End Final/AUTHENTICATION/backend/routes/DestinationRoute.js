import express from "express";
import {
    getDestinations,
    getDestinationById,
    createDestination,
    updateDestination,
    deleteDestination,
    getAdminDestinations,
    getAdminDestinationById
} from "../controllers/Destinations.js";
import { verifyToken } from "../middleware/VerifyToken.js";
import { verifyUser, adminOnly } from "../middleware/AuthUser.js";
import upload from "../middleware/upload.js";

const router = express.Router();

router.post("/destinations", verifyToken, verifyUser, adminOnly, upload.single('gambar'), createDestination);
router.patch("/edit/destinations/:uuid", verifyToken, verifyUser, adminOnly, upload.single('gambar'), updateDestination);

router.get("/admin/destinations", verifyToken, verifyUser, adminOnly, getAdminDestinations);
router.get("/admin/destinations/:uuid", verifyToken, verifyUser, adminOnly, getAdminDestinationById);

router.get("/destinations", verifyToken, verifyUser, getDestinations);
router.get("/destinations/:uuid", verifyToken, verifyUser, getDestinationById); // Pastikan menggunakan uuid sebagai parameter

router.delete("/destinations/:uuid", verifyToken, verifyUser, adminOnly, deleteDestination);

export default router;
