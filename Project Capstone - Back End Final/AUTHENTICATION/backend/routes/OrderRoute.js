import express from "express";
import {
    createOrder,
    getAllOrders,
    getOrdersByUserId,
    updateOrderStatus
} from "../controllers/OrderController.js";
import { verifyToken } from "../middleware/VerifyToken.js";
import { verifyUser, adminOnly } from "../middleware/AuthUser.js";

const router = express.Router();

// Rute untuk membuat pesanan baru (user harus login)
router.post("/orders", verifyToken, verifyUser, createOrder);

// Rute untuk mendapatkan semua pesanan (khusus admin)
router.get("/admin/orders", verifyToken, verifyUser, adminOnly, getAllOrders);

// Rute untuk mendapatkan pesanan berdasarkan user ID (user harus login)
router.get("/wisatawan/orders", verifyToken, verifyUser, getOrdersByUserId);

// Rute untuk mengupdate status pesanan oleh admin
router.patch("/orders/:orderId", verifyToken, verifyUser, adminOnly, updateOrderStatus);

export default router;
