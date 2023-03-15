// Description: This file contains the brand sequelize model
// Author: Sebastián Gámez Ariza

// Import the sequelize instance
import devicesDatabase from '../database/devicesDatabase';

// Import the sequelize library
import {DataTypes} from 'sequelize';

// Create the brand model
const BrandModel = devicesDatabase.define('brand', {
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
}, {timestamps: false, tableName: 'brands'},
);

// Export the brand model
export default BrandModel;
