"use strict";
// Description: This file contains the configuration of the database
// Author: Sebastián Gámez Ariza
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// Import dotenv
const dotenv_1 = __importDefault(require("dotenv"));
// Load the environment variables
dotenv_1.default.config();
// Database configuration
const dataBaseConfig = {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    database: process.env.DB_DATABASE,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    dialect: process.env.DB_DIALECT,
};
// Export the database configuration
exports.default = dataBaseConfig;
