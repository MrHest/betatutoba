import Users from './UserModel.js';
import Destinations from './DestinationModel.js';
import Akomodasi from './AkomodasiModel.js';
import DestinationAkomodasi from './DestinationAkomodasiModel.js';
import Orders from './Order.js';
import OrderDestination from './OrderDestination.js';

// Relasi User dan Destinasi
Users.hasMany(Destinations, { foreignKey: 'userId' });
Destinations.belongsTo(Users, { foreignKey: 'userId' });

// Relasi User dan Akomodasi
Users.hasMany(Akomodasi, { foreignKey: 'userId' });
Akomodasi.belongsTo(Users, { foreignKey: 'userId' });

// Relasi Destinasi dan Akomodasi
Destinations.belongsToMany(Akomodasi, { through: DestinationAkomodasi, foreignKey: 'destinationId' });
Akomodasi.belongsToMany(Destinations, { through: DestinationAkomodasi, foreignKey: 'akomodasiId' });

// Relasi Order dan User
Users.hasMany(Orders, { foreignKey: 'userId' });
Orders.belongsTo(Users, { foreignKey: 'userId' });

// Relasi Order dan Destinasi melalui OrderDestination
Orders.belongsToMany(Destinations, { through: OrderDestination, foreignKey: 'orderId' });
Destinations.belongsToMany(Orders, { through: OrderDestination, foreignKey: 'destinationId' });
