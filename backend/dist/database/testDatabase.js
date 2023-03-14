"use strict";
// Description: This file tests the database connection
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
// Import the database connection
const devicesDatabase_1 = __importDefault(require("./devicesDatabase"));
// Test the database connection
const testDatabase = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield devicesDatabase_1.default.authenticate();
        console.log('Database connection successful');
    }
    catch (error) {
        console.log('Database connection failed');
    }
});
// Export the test database function
exports.default = testDatabase;
