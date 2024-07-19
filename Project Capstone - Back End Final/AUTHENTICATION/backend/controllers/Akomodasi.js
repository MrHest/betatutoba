import path from 'path';
import Akomodasi from "../models/AkomodasiModel.js";
import Users from "../models/UserModel.js";

// Controller untuk mendapatkan semua akomodasi untuk wisatawan
export const getAkomodasi = async (req, res) => {
    try {
        const akomodasi = await Akomodasi.findAll();
        res.status(200).json(akomodasi);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Controller untuk mendapatkan akomodasi berdasarkan ID untuk wisatawan
export const getAkomodasiById = async (req, res) => {
    try {
        const { id } = req.params;
        const akomodasi = await Akomodasi.findOne({ where: { id } });
        if (!akomodasi) return res.status(404).json({ message: "Akomodasi tidak ditemukan" });
        res.status(200).json(akomodasi);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Controller untuk mendapatkan semua akomodasi untuk admin
export const getAdminAkomodasi = async (req, res) => {
    try {
        const akomodasi = await Akomodasi.findAll();
        res.status(200).json(akomodasi);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Controller untuk mendapatkan akomodasi berdasarkan ID untuk admin
export const getAdminAkomodasiById = async (req, res) => {
    try {
        const { id } = req.params;
        const akomodasi = await Akomodasi.findOne({ where: { id } });
        if (!akomodasi) {
            return res.status(404).json({ message: "Akomodasi tidak ditemukan" });
        }
        res.status(200).json(akomodasi);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Controller untuk membuat akomodasi baru
export const createAkomodasi = async (req, res) => {
    try {
        const userId = req.userId;
        const user = await Users.findByPk(userId);
        if (!user) {
            return res.status(404).json({ message: "Pengguna tidak ditemukan" });
        }

        const gambarPath = req.file ? path.join('uploads', req.file.filename) : null;

        const akomodasi = await Akomodasi.create({
            ...req.body,
            userId,
            gambar: gambarPath
        });
        res.status(201).json(akomodasi);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Controller untuk mengupdate akomodasi
export const updateAkomodasi = async (req, res) => {
    try {
        const { id } = req.params;
        const gambarPath = req.file ? path.join('uploads', req.file.filename) : undefined;
        const updatedData = {
            ...req.body,
            ...(gambarPath && { gambar: gambarPath })
        };

        const [updated] = await Akomodasi.update(updatedData, { where: { id } });
        if (!updated) return res.status(404).json({ message: "Akomodasi tidak ditemukan" });

        const updatedAkomodasi = await Akomodasi.findOne({ where: { id } });
        res.status(200).json(updatedAkomodasi);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Controller untuk menghapus akomodasi
export const deleteAkomodasi = async (req, res) => {
    try {
        const { id } = req.params;
        const deleted = await Akomodasi.destroy({ where: { id } });
        if (!deleted) return res.status(404).json({ message: "Akomodasi tidak ditemukan" });
        res.status(204).json();
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
