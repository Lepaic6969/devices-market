// Description: Device model for the database
// Author: Sebastián Gámez Ariza

// Import the sequelize instance
import devicesDatabase from '../database/devicesDatabase';

// Import the sequelize library
import {DataTypes} from 'sequelize';

// Import the brand model
import BrandModel from './brandModel';

// Import the reference model
import ReferenceModel from './referenceModel';

// Create the device model
const DeviceModel = devicesDatabase.define('device', {
	id: {
		type: DataTypes.INTEGER,
		primaryKey: true,
		autoIncrement: true,
		allowNull: false,
	},
	name: {
		type: DataTypes.STRING,
		allowNull: false,
	},
	serial: {
		type: DataTypes.STRING,
		allowNull: false,
	},
	description: {
		type: DataTypes.STRING,
		allowNull: false,
	},
	state: {
		type: DataTypes.BOOLEAN,
		allowNull: false,
	},
}, {timestamps: false, tableName: 'devices'},
);

// Create 1 to n relationship with the brand model
DeviceModel.belongsTo(BrandModel, {foreignKey: {
	name: 'brandsId',
	field: 'brands_id',
	allowNull: false
}});

// Create 1 to n relationship with the reference model
DeviceModel.belongsTo(ReferenceModel, {foreignKey: {
	name: 'referencesId',
	field: 'references_id',
	allowNull: false
}});

// Export the device model
export default DeviceModel;
