import Users from "../models/UserModel.js";
import argon2 from "argon2";
import jwt from "jsonwebtoken";

// Register
export const register = async (req, res) => {
    const { name, email, password } = req.body;
    try {
        const hashPassword = await argon2.hash(password);
        await Users.create({
            name,
            email,
            password: hashPassword,
            role: "wisatawan"
        });
        res.status(201).json({ msg: "User registered successfully" });
    } catch (error) {
        res.status(500).json({ msg: "Error while registering user", error: error.message });
    }
};

// Login
export const login = async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await Users.findOne({
            where: { email }
        });
        if (!user) return res.status(404).json({ msg: "User not found" });

        const match = await argon2.verify(user.password, password);
        if (!match) return res.status(400).json({ msg: "Wrong password" });

        const token = jwt.sign({ userId: user.uuid, role: user.role }, process.env.JWT_SECRET, { expiresIn: '1h' });
        // Respons harus mengandung token dan role
        res.json({ token, user: { email: user.email, role: user.role } });

    } catch (error) {
        res.status(500).json({ msg: "Error while logging in", error: error.message });
    }
};


// Get Current User
export const me = async (req, res) => {
    try {
        const user = await Users.findOne({
            attributes: ["uuid", "name", "email", "role"],
            where: { uuid: req.userId }
        });
        if (!user) {
            return res.status(400).json({ msg: "Invalid credentials" });
        }
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({ msg: "Error while fetching user", error: error.message });
    }
};

// Logout
export const logout = (req, res) => {
    // Client-side should handle removing the token
    res.json({ msg: "Logout successful" });
};
