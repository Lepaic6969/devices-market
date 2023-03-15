// Description: Model for registerDevice
// Author: Sebastián Gámez Ariza

// Import the sequelize instance
import sequelize from '../database/devicesDatabase';

// Import the data types
import {DataTypes} from 'sequelize';

// Import deviceModel
import deviceModel from './deviceModel';

// Import employeeModel
import employeeModel from './employeeModel';

// Create the model
const registerDeviceModel = sequelize.define('registerDevice', {
	id: {
		type: DataTypes.INTEGER,
		autoIncrement: true,
		primaryKey: true,
		allowNull: false,
	},
	date: {
		type: DataTypes.DATE,
		allowNull: false,
		defaultValue: DataTypes.NOW,
	},
	note: {
		type: DataTypes.STRING,
		allowNull: true,
	},
}, {timestamps: false, tableName: 'register_devices'},
);

// Create 1 - N relationship with device
registerDeviceModel.belongsTo(deviceModel, {foreignKey: {
	name: 'devicesId',
	field: 'devices_id',
	allowNull: false,
}});

// Create 1 - N relationship with employee
registerDeviceModel.belongsTo(employeeModel, {foreignKey: {
	name: 'employeesId',
	field: 'employees_id',
	allowNull: false,
}});

// Export the model
export default registerDeviceModel;

