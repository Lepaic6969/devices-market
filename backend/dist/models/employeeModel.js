"use strict";
// Description: This file contains the employee sequelize model
// Author: Sebastián Gámez Ariza
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// Import the sequelize instance
const devicesDatabase_1 = __importDefault(require("../database/devicesDatabase"));
// Import the sequelize library
const sequelize_1 = require("sequelize");
// Create the employee model
const EmployeeModel = devicesDatabase_1.default.define('Employee', {
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    lastName: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
        field: 'last_name'
    },
    phone: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    }
}, { timestamps: false, tableName: 'employees' });
// Export the employee model
exports.default = EmployeeModel;
