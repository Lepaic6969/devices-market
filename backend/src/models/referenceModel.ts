// Description: This file contains the reference sequelize model
// Author: Sebastián Gámez Ariza

// Import the sequelize instance
import devicesDatabase from '../database/devicesDatabase';

// Import the sequelize library
import {DataTypes} from 'sequelize';

// Create the reference model
const ReferenceModel = devicesDatabase.define('reference', {
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
}, {timestamps: false, tableName: 'references'},
);

// Export the reference model
export default ReferenceModel;
