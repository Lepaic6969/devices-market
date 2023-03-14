// Description: This file contains the configuration of the database
// Author: Sebastián Gámez Ariza

// Import dotenv
import dotenv from 'dotenv';
// Load the environment variables
dotenv.config();

// Import the dialect type
import { Dialect } from 'sequelize';

// Database configuration
const dataBaseConfig = {
    host: process.env.DB_HOST as string,
    port: parseInt(process.env.DB_PORT as string),
    database: process.env.DB_DATABASE as string,
    username: process.env.DB_USERNAME as string,
    password: process.env.DB_PASSWORD as string,
    dialect: process.env.DB_DIALECT as Dialect,
}

// Export the database configuration
export default dataBaseConfig;
