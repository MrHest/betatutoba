import Users from "../models/UserModel.js";

// Middleware untuk verifikasi pengguna yang login
export const verifyUser = async (req, res, next) => {
    if (!req.userId) {
        return res.status(401).json({ msg: "Login required" });
    }
    try {
        // Lakukan pengecekan pengguna berdasarkan userId yang telah di-set sebelumnya
        const user = await Users.findOne({
            where: { uuid: req.userId }
        });
        if (!user) return res.status(404).json({ msg: "User not found" });
        req.role = user.role; // Set req.role untuk digunakan dalam pengecekan adminOnly
        console.log("verifyUser - userId:", req.userId); // Tambahkan log ini
        console.log("verifyUser - role:", req.role); // Tambahkan log ini
        next();
    } catch (error) {
        return res.status(500).json({ msg: error.message });
    }
};


// Middleware untuk verifikasi akses admin
export const adminOnly = async (req, res, next) => {
    try {
        const user = await Users.findOne({
            where: {
                uuid: req.userId
            }
        });
        if (!user) return res.status(400).json({ msg: "User tidak ditemukan" });
        if (user.role !== "admin") return res.status(403).json({ msg: "Akses ini hanya untuk admin" });
        next();
    } catch (error) {
        return res.status(500).json({ msg: error.message });
    }
};

