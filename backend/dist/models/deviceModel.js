"use strict";
// Description: Device model for the database
// Author: Sebastián Gámez Ariza
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// Import the sequelize instance
const devicesDatabase_1 = __importDefault(require("../database/devicesDatabase"));
// Import the sequelize library
const sequelize_1 = require("sequelize");
// Import the brand model
const brandModel_1 = __importDefault(require("./brandModel"));
// Import the reference model
const referenceModel_1 = __importDefault(require("./referenceModel"));
// Create the device model
const DeviceModel = devicesDatabase_1.default.define('Device', {
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    serial: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    description: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    state: {
        type: sequelize_1.DataTypes.BOOLEAN,
        allowNull: false
    },
}, { timestamps: false, tableName: 'devices' });
// Create 1 to n relationship with the brand model
DeviceModel.belongsTo(brandModel_1.default, { foreignKey: {
        name: 'brands_id',
        allowNull: false
    }
});
// Create 1 to n relationship with the reference model
DeviceModel.belongsTo(referenceModel_1.default, { foreignKey: {
        name: 'references_id',
        allowNull: false,
    } });
// Export the device model
exports.default = DeviceModel;
