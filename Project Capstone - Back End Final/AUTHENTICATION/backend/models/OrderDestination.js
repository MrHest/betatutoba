import { Sequelize } from "sequelize";
import db from "../config/Database.js";
import Orders from "./Order.js";
import Destinations from "./DestinationModel.js";

const { DataTypes } = Sequelize;

const OrderDestination = db.define('order_destination', {
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
        primaryKey: true
    },
    orderId: {
        type: DataTypes.UUID,
        allowNull: false,
        references: {
            model: Orders,
            key: 'id'
        }
    },
    destinationId: {
        type: DataTypes.UUID,
        allowNull: false,
        references: {
            model: Destinations,
            key: 'uuid'
        }
    }
}, {
    freezeTableName: true,
    timestamps: true
});

export default OrderDestination;
