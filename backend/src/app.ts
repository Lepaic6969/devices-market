// Description: This file is the entry point for the application
// Author: Sebastián Gámez Ariza

// Import dotenv
import dotenv from 'dotenv';
// Load the environment variables
dotenv.config();

// Importing the express library
import express, {type Express} from 'express';

// Importing the cors library
import cors from 'cors';

// Import routes
import brandRoute from './routes/v1/brandRoute';
import referenceRoute from './routes/v1/referenceRoute';
import deviceRoute from './routes/v1/deviceRoute';
import employeeRoute from './routes/v1/employeeRoute';
import registerDeviceRoute from './routes/v1/registerDeviceRoute';



// Import test database function
import testDatabase from './database/testDatabase';

// Import sync database function
import syncDatabase from './database/syncDatabase';

// Creating the express application
const app: Express = express();

// Set the middlewares
app.use(cors());
app.use(express.json());

// Set the routes
app.use('/api/v1/brand', brandRoute);
app.use('/api/v1/reference', referenceRoute);
app.use('/api/v1/device', deviceRoute);
app.use('/api/v1/employee', employeeRoute);
app.use('/api/v1/registerDevice', registerDeviceRoute);


// Set the port
const port: number | string = process.env.PORT || 3000;

// Start the server
app.listen(port, async () => {
	// Log the server port
	console.log(`Server listening on port ${port}`);
	// Test the database connection
	await testDatabase();
	// Synchronize the devices database
	await syncDatabase();
});
