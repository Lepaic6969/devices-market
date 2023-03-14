"use strict";
// Description: This file contains the reference sequelize model
// Author: Sebastián Gámez Ariza
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// Import the sequelize instance
const devicesDatabase_1 = __importDefault(require("../database/devicesDatabase"));
// Import the sequelize library
const sequelize_1 = require("sequelize");
// Create the reference model
const ReferenceModel = devicesDatabase_1.default.define('Reference', {
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    }
}, { timestamps: false, tableName: 'references' });
// Export the reference model
exports.default = ReferenceModel;
