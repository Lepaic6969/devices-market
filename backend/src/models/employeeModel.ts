// Description: This file contains the employee sequelize model
// Author: Sebastián Gámez Ariza

// Import the sequelize instance
import devicesDatabase from '../database/devicesDatabase';

// Import the sequelize library
import {DataTypes} from 'sequelize';

// Create the employee model
const EmployeeModel = devicesDatabase.define('Employee', {
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
	lastName: {
		type: DataTypes.STRING,
		allowNull: false,
		field: 'last_name',
	},
	phone: {
		type: DataTypes.INTEGER,
		allowNull: false,
	},
	email: {
		type: DataTypes.STRING,
		allowNull: false,
	},
}, {timestamps: false, tableName: 'employees'},
);

// Export the employee model
export default EmployeeModel;
