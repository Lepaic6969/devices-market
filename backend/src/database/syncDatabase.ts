// Description: Syncs the database with the models
// Author: Sebastián Gámez Ariza

// Import database models
import BrandModel from '../models/brandModel';
import ReferenceModel from '../models/referenceModel';
import DeviceModel from '../models/deviceModel';
import EmployeeModel from '../models/employeeModel';
import RegisterDeviceModel from '../models/registerDeviceModel';

// Sync the database with the models
const syncDatabase = async (): Promise<void> => {
	// Try to sync the database
	try {
		// Sync the database
		await BrandModel.sync();
		await ReferenceModel.sync();
		await DeviceModel.sync();
		await EmployeeModel.sync();
		await RegisterDeviceModel.sync();
		// Log the success message
		console.log('Database synchronized successfully');
	} catch (error) {
		// Log the error message
		console.log(`Error synchronizing the database: ${error}`);
	}
};

// Export the sync database function
export default syncDatabase;
