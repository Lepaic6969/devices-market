//  Description: This file contains a function to check if a value already exists in the database
// Author: Sebastián Gámez Ariza

// Import sequelize types
import {type Model, type ModelStatic} from 'sequelize';

// Create function to check if a value already exists in the database
const checkIfExist = async (model: ModelStatic<Model<any, any>>, property: string, value: string): Promise<boolean> => {
	// Delete spaces and convert to lowercase
	const valueWithoutSpaces = value.toString().trim().toLowerCase();
	// Try to find the value in the database
	let result: any;
	try {
		result = await model.findOne({
			where: {
				[property]: valueWithoutSpaces,
			},
		});
		// Return true if the value already exists
	} catch (error) {
		// Throw error
		throw error;
	}

	// Return true if the value already exists
	return Boolean(result);
};

// Export function
export default checkIfExist;
