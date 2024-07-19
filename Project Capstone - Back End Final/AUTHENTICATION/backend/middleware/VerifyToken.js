import jwt from "jsonwebtoken";
import Users from "../models/UserModel.js";

export const verifyToken = async (req, res, next) => {
    const authHeader = req.headers["authorization"];
    if (!authHeader) return res.status(401).json({ msg: "Access denied, token missing" });

    const token = authHeader.split(" ")[1];
    if (!token) return res.status(401).json({ msg: "Access denied, token missing" });

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        if (!decoded || !decoded.userId) {
            return res.status(400).json({ msg: "Invalid token" });
        }

        const user = await Users.findOne({
            where: { uuid: decoded.userId }
        });
        if (!user) {
            return res.status(404).json({ msg: "User not found" });
        }

        req.userId = decoded.userId; // Set req.userId dari JWT
        req.role = user.role; // Set req.role dari data user di database

        console.log("verifyToken - userId:", req.userId); // Tambahkan log ini
        console.log("verifyToken - role:", req.role); // Tambahkan log ini

        next();
    } catch (error) {
        return res.status(400).json({ msg: "Invalid token", error: error.message });
    }
};
