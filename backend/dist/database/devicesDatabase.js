"use strict";
// Description: This file contains the database connection
// Author: Sebastián Gámez Ariza
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// Import the sequelize library
const sequelize_1 = require("sequelize");
// Import the database configuration
const configDatabase_1 = __importDefault(require("./configDatabase"));
const { database, username, password, host } = configDatabase_1.default;
// Create the database connection
const devicesDatabase = new sequelize_1.Sequelize(database, username, password, {
    host: host,
    dialect: 'mysql'
});
// Export the database connection
exports.default = devicesDatabase;
