// Description: This file contains the database connection
// Author: Sebastián Gámez Ariza

// Import the sequelize library
import { Sequelize } from 'sequelize';

// Import the database configuration
import dataBaseConfig from './configDatabase';

const { database, username, password, host } = dataBaseConfig;

// Create the database connection
const devicesDatabase = new Sequelize(database, username, password, {
    host: host,
    dialect: 'mysql'
});

// Export the database connection
export default devicesDatabase;
