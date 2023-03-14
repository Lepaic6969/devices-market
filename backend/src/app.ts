// Description: This file is the entry point for the application
// Author: Sebastián Gámez Ariza

// Import test database function
import testDatabase from './database/testDatabase';

// Import dotenv
import dotenv from 'dotenv';
// Load the environment variables
dotenv.config();

// Importing the express library
import express, { Express } from 'express';

// Importing the cors library
import cors from 'cors';

// Creating the express application
const app: Express = express();

// Set the middlewares
app.use(cors());
app.use(express.json());

// Set the port
const port: number | string = process.env.PORT || 3000;

// Start the server
app.listen(port, async () => {
    console.log(`Server listening on port ${port}`);
    await testDatabase();
});
