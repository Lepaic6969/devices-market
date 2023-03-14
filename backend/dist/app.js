"use strict";
// Description: This file is the entry point for the application
// Author: Sebastián Gámez Ariza
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
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
app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});
