"use strict";
// Description: This file contains the database connection
// Author: Sebastián Gámez Ariza
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// There's importing the environment variables
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
// There's importing the ORM
const sequelize_1 = require("sequelize");
// Getting the db url through environment variables
const DB_URL = process.env.DB_URL;
// There's connecting the db 
const sequelize = new sequelize_1.Sequelize(DB_URL);
// There's exporting the db
exports.default = sequelize;
