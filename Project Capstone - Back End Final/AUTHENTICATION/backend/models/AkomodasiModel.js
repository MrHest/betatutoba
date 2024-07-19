import { Sequelize } from "sequelize";
import db from "../config/Database.js";
import Users from "./UserModel.js";

const { DataTypes } = Sequelize;

const Akomodasi = db.define('akomodasi', {
    uuid: {
        type: DataTypes.STRING,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
        validate: {
            notEmpty: true
        }
    },
    nama: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notEmpty: true,
            len: [3, 50]
        }
    },
    nomorSeri: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
            notEmpty: true
        }
    },
    jenisKendaraan: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notEmpty: true
        }
    },
    merkKendaraan: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notEmpty: true
        }
    },
    warna: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notEmpty: true
        }
    },
    kapasitasPenumpang: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
            notEmpty: true,
            isInt: true,
            min: 1
        }
    },
    userId: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notEmpty: true
        },
        references: {
            model: Users,
            key: 'uuid'
        }
    },
    gambar: {
        type: DataTypes.STRING, // Sesuaikan dengan tipe data yang sesuai untuk menyimpan path gambar atau binary data gambar
        allowNull: true, // Jika tidak ingin wajib ada gambar setiap saat
        validate: {
            // Tambahkan validasi sesuai kebutuhan (opsional)
        }
    }
}, {
    freezeTableName: true
});

export default Akomodasi;
