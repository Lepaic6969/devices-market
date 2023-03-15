// Description: Service for reference
// Author: Sebastián Gámez Ariza

// Import reference model
import ReferenceModel from '../models/referenceModel';

// Import reference type
import type ReferenceType from '../types/referenceType';

// Import response type
import type ResponseType from '../types/responseType';

// Import check if exist helper
import checkIfExist from '../helpers/checkIfExistHelper';

// Get all references
export const getReferences = async (): Promise<ResponseType> => {
	// Create response
	let response: ResponseType;
	// Try to get all references
	try {
		// Get all references
		const references = await ReferenceModel.findAll();
		// Set response
		response = {
			status: 200,
			message: 'References found successfully',
			data: JSON.stringify(references),
		};
	} catch (error) {
		// Throw error
		console.log(error);
		// Set response
		response = {
			status: 500,
			message: 'Error getting references',
		};
	}

	// Return response
	return response;
};

// Get reference by id
export const getReferenceById = async (id: number): Promise<ResponseType> => {
	let response: ResponseType;
	// Try to get reference by id
	try {
		// Get reference by id
		const reference = await ReferenceModel.findByPk(id);
		// Set response
		response = {
			status: 200,
			message: 'Reference found successfully',
			data: JSON.stringify(reference),
		};
	} catch (error) {
		// Throw error
		console.log(error);
		// Set response
		response = {
			status: 500,
			message: 'Error getting reference',
		};
	}

	// Return response
	return response;
};

// Create reference
export const createReference = async (reference: ReferenceType): Promise<ResponseType> => {
	// Create response
	let response: ResponseType;
	// Try to create reference
	try {
		// Check if reference already exists
		const referenceAlreadyExists = await checkIfExist(ReferenceModel, 'name', reference.name);
		// Check if reference already exists
		if (referenceAlreadyExists) {
			// Set response
			response = {
				status: 400,
				message: 'Reference already exists',
			};
		}
		// If reference doesn't exist
		else {
			// Create reference
			await ReferenceModel.create(reference);
			// Set response
			response = {
				status: 200,
				message: 'Reference created successfully',
			};
		}
	} catch (error) {
		// Throw error
		console.log(error);
		// Set response
		response = {
			status: 500,
			message: 'Error creating reference',
		};
	}

	// Return response
	return response;
};

// Update reference
export const updateReference = async (id: number, reference: ReferenceType): Promise<ResponseType> => {
	// Create response
	let response: ResponseType;
	// Try to update reference
	try {
		// Update reference
		await ReferenceModel.update(reference, {where: {id}});
		// Set response
		response = {
			status: 200,
			message: 'Reference updated successfully',
		};
	} catch (error) {
		// Throw error
		console.log(error);
		// Set response
		response = {
			status: 500,
			message: 'Error updating reference',
		};
	}

	// Return response
	return response;
};

// Delete reference
export const deleteReference = async (id: number): Promise<ResponseType> => {
	// Create response
	let response: ResponseType;
	// Try to delete reference
	try {
		// Delete reference
		await ReferenceModel.destroy({where: {id}});
		// Set response
		response = {
			status: 200,
			message: 'Reference deleted successfully',
		};
	} catch (error) {
		// Throw error
		console.log(error);
		// Set response
		response = {
			status: 500,
			message: 'Error deleting reference',
		};
	}

	// Return response
	return response;
};
