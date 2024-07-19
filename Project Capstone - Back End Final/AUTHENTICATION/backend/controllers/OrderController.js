import Orders from "../models/Order.js";
import OrderDestination from "../models/OrderDestination.js";
import Destinations from "../models/DestinationModel.js";

// Membuat pesanan baru
export const createOrder = async (req, res) => {
    const { atasnama, jumlahOrang, destinasiIds, tanggalBerangkat, tanggalSelesai } = req.body;
    const userId = req.userId; // Ambil userId dari token yang sudah di-verify

    try {
        const newOrder = await Orders.create({
            userId,
            atasnama,
            jumlahOrang,
            status: 'pending',
            tanggalBerangkat,
            tanggalSelesai
        });

        // Simpan destinasi yang terkait dengan pesanan
        if (destinasiIds && destinasiIds.length > 0) {
            for (const destinationId of destinasiIds) {
                await OrderDestination.create({
                    orderId: newOrder.id,
                    destinationId
                });
            }
        }

        res.status(201).json(newOrder);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Mendapatkan semua pesanan (khusus admin)
export const getAllOrders = async (req, res) => {
    try {
        const orders = await Orders.findAll({
            include: [{
                model: Destinations,
                through: { attributes: [] } // Hanya mengambil data dari tabel Destinations
            }]
        });
        res.status(200).json(orders);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Mendapatkan pesanan berdasarkan user ID (untuk pengguna yang sedang login)
export const getOrdersByUserId = async (req, res) => {
    const userId = req.userId; // Ambil userId dari token yang sudah di-verify

    try {
        const orders = await Orders.findAll({
            where: { userId },
            include: [{
                model: Destinations,
                through: { attributes: [] }
            }]
        });
        res.status(200).json(orders);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Mengupdate status pesanan oleh admin
export const updateOrderStatus = async (req, res) => {
    const { orderId } = req.params;
    const { status, pesanAdmin } = req.body;

    try {
        const order = await Orders.findByPk(orderId);
        if (!order) {
            return res.status(404).json({ message: "Order not found" });
        }

        order.status = status;
        order.pesanAdmin = pesanAdmin;
        await order.save();

        res.status(200).json(order);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
