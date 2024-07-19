import { Sequelize } from "sequelize";
import db from "../config/Database.js";
import Users from "./UserModel.js";

const { DataTypes } = Sequelize;

const Orders = db.define('orders', {
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
        primaryKey: true
    },
    atasnama: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notEmpty: true,
            len: [5, 50]
        }
    },
    jumlahOrang: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
            notEmpty: true,
            isInt: true,
            min: 1
        }
    },
    status: {
        type: DataTypes.ENUM,
        values: ['pending', 'approved', 'rejected'],
        defaultValue: 'pending',
        allowNull: false
    },
    tanggalBerangkat: {
        type: DataTypes.DATE,
        allowNull: false,
        validate: {
            notEmpty: true
        }
    },
    tanggalSelesai: {
        type: DataTypes.DATE,
        allowNull: false,
        validate: {
            notEmpty: true
        }
    },
    pesanAdmin: {
        type: DataTypes.TEXT,
        allowNull: true
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
}, {
    freezeTableName: true,
    timestamps: true,
    underscored: true
});

export default Orders;
