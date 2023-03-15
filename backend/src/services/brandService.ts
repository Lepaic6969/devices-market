// Description: Brand service
// Author: Sebastián Gámez Ariza

// Import brand model
import BrandModel from '../models/brandModel';

// Import brand type
import type BrandType from '../types/brandType';

// Import response type
import type ResponseType from '../types/responseType';

// Import check if exist helper
import checkIfExist from '../helpers/checkIfExistHelper';

// Get all brands
export const getBrands = async (): Promise<ResponseType> => {
	// Create response
	let response: ResponseType;
	// Try to get all brands
	try {
		// Get all brands
		const brands = await BrandModel.findAll();
		// Set response
		response = {
			status: 200,
			message: 'Brands found successfully',
			data: brands,
		};
	} catch (error) {
		// Throw error
		console.log(error);
		// Set response
		response = {
			status: 500,
			message: 'Error getting brands',
		};
	}

	// Return response
	return response;
};

// Get brand by id
export const getBrandById = async (id: number): Promise<ResponseType> => {
	let response: ResponseType;
	// Try to get brand by id
	try {
		// Get brand by id
		const brand = await BrandModel.findByPk(id);
		// Set response
		response = {
			status: 200,
			message: 'Brand found successfully',
			data: brand,
		};
	} catch (error) {
		// Throw error
		console.log(error);
		// Set response
		response = {
			status: 500,
			message: 'Error getting brand',
		};
	}

	// Return response
	return response;
};

// Create new brand and save it in the database
export const createBrand = async (brand: BrandType): Promise<ResponseType> => {
	let response: ResponseType;
	// Try to create new brand
	try {
		// Check if brand already exists
		const brandAlreadyExists = await checkIfExist(BrandModel, 'name', brand.name);
		// If brand already exists, return error
		if (brandAlreadyExists) {
			// Set response
			response = {
				status: 400,
				message: 'Brand already exists',
			};
		}
		// If brand does not exist, create new brand
		else {
			// Create new brand
			await BrandModel.create(brand);
			// Set response
			response = {
				status: 200,
				message: 'Brand created successfully',
			};
		}
	} catch (error) {
		// Throw error
		console.log(error);
		// Set response
		response = {
			status: 500,
			message: 'Error creating brand',
		};
	}

	// Return response
	return response;
};

// Update brand
export const updateBrand = async (id: number, brand: BrandType): Promise<ResponseType> => {
	let response: ResponseType;
	// Try to update brand
	try {
		// Update brand
		await BrandModel.update(brand, {where: {id}});
		// Set response
		response = {
			status: 200,
			message: 'Brand updated successfully',
		};
	} catch (error) {
		// Throw error
		console.log(error);
		// Set response
		response = {
			status: 500,
			message: 'Error updating brand',
		};
	}

	// Return response
	return response;
};

// Delete brand
export const deleteBrand = async (id: number): Promise<ResponseType> => {
	let response: ResponseType;
	// Try to delete brand
	try {
		// Delete brand
		await BrandModel.destroy({where: {id}});
		// Set response
		response = {
			status: 200,
			message: 'Brand deleted successfully',
		};
	} catch (error) {
		// Throw error
		console.log(error);
		// Set response
		response = {
			status: 500,
			message: 'Error deleting brand',
		};
	}

	// Return response
	return response;
};
