"use strict";
// Description: This file is the entry point for the application
// Author: Sebastián Gámez Ariza
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// Import test database function
const testDatabase_1 = __importDefault(require("./database/testDatabase"));
// Import the devices database
const devicesDatabase_1 = __importDefault(require("./database/devicesDatabase"));
// Import dotenv
const dotenv_1 = __importDefault(require("dotenv"));
// Load the environment variables
dotenv_1.default.config();
// Importing the express library
const express_1 = __importDefault(require("express"));
// Importing the cors library
const cors_1 = __importDefault(require("cors"));
// Creating the express application
const app = (0, express_1.default)();
// Set the middlewares
app.use((0, cors_1.default)());
app.use(express_1.default.json());
// Set the port
const port = process.env.PORT || 3000;
// Start the server
app.listen(port, () => __awaiter(void 0, void 0, void 0, function* () {
    // Log the server port
    console.log(`Server listening on port ${port}`);
    // Test the database connection
    yield (0, testDatabase_1.default)();
    // Synchronize the devices database
    yield devicesDatabase_1.default.sync({ force: true });
}));
