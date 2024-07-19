import { Sequelize } from "sequelize";
import db from "../config/Database.js";

const { DataTypes } = Sequelize;

const DestinationAkomodasi = db.define('DestinationAkomodasi', {
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
        primaryKey: true
    },
    destinationId: {
        type: DataTypes.UUID,
        allowNull: false, // Pastikan ini tidak boleh null
        references: {
            model: 'destinations',
            key: 'uuid'
        }
    },
    akomodasiId: {
        type: DataTypes.UUID,
        allowNull: false, // Pastikan ini tidak boleh null
        references: {
            model: 'akomodasi',
            key: 'uuid'
        }
    }
}, {
    freezeTableName: true,
    timestamps: false
});


export default DestinationAkomodasi;
