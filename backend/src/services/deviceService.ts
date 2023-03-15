// Description: This file contains the device service class
// Author: Sebastián Gámez Ariza

// Import device model
import DeviceModel from '../models/deviceModel';

// Import brand model
import BrandModel from '../models/brandModel';

// Import reference model
import ReferenceModel from '../models/referenceModel';

// Import device type
import type DeviceType from '../types/deviceType';

// Import response type
import type ResponseType from '../types/responseType';

// Get all devices
export const getDevices = async (): Promise<ResponseType> => {
	// Create response
	let response: ResponseType;
	// Try to get all devices
	try {
		// Get all devices
		const devices = await DeviceModel.findAll({
			include: [
				{
					model: BrandModel,
					as: 'brand',
				},
				{
					model: ReferenceModel,
					as: 'reference',
				},
			],
		});
		// Return response
		response = {
			status: 200,
			message: 'Devices found',
			data: devices,
		};
	} catch (error) {
		// Log error
		console.log(error);
		// Return response
		response = {
			status: 500,
			message: 'Error getting devices',
		};
	}

	// Return response
	return response;
};

// Get device by id
export const getDeviceById = async (id: number): Promise<ResponseType> => {
	// Create response
	let response: ResponseType;
	// Try to get device by id
	try {
		// Get device by id
		const device = await DeviceModel.findByPk(id, {
			include: [
				{
					model: BrandModel,
					as: 'brand',
				},
				{
					model: ReferenceModel,
					as: 'reference',
				},
			],
		});
		// Return response
		response = {
			status: 200,
			message: 'Device found',
			data: device,
		};
	} catch (error) {
		// Log error
		console.log(error);
		// Return response
		response = {
			status: 500,
			message: 'Error getting device',
		};
	}

	// Return response
	return response;
};

// Create device
export const createDevice = async (device: DeviceType): Promise<ResponseType> => {
	// Create response
	let response: ResponseType;
	// Try to create device
	try {
		// Create device
		await DeviceModel.create(device);
		// Return response
		response = {
			status: 200,
			message: 'Device created',
		};
	} catch (error) {
		// Log error
		console.log(error);
		// Return response
		response = {
			status: 500,
			message: 'Error creating device',
		};
	}

	// Return response
	return response;
};

// Update device
export const updateDevice = async (id: number, device: DeviceType): Promise<ResponseType> => {
	// Create response
	let response: ResponseType;
	// Try to update device
	try {
		// Update device
		await DeviceModel.update(device, {where: {id}});
		// Return response
		response = {
			status: 200,
			message: 'Device updated',
		};
	} catch (error) {
		// Log error
		console.log(error);
		// Return response
		response = {
			status: 500,
			message: 'Error updating device',
		};
	}

	// Return response
	return response;
};

// Delete device
export const deleteDevice = async (id: number): Promise<ResponseType> => {
	// Create response
	let response: ResponseType;
	// Try to delete device
	try {
		// Delete device
		await DeviceModel.destroy({where: {id}});
		// Return response
		response = {
			status: 200,
			message: 'Device deleted',
		};
	} catch (error) {
		// Log error
		console.log(error);
		// Return response
		response = {
			status: 500,
			message: 'Error deleting device',
		};
	}

	// Return response
	return response;
};
