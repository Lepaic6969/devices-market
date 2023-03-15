// Description: This file contains the registerDeviceService
// Author: Sebastián Gámez Ariza

// Import RegisterDeviceModel
import RegisterDeviceModel from '../models/registerDeviceModel';

// Import device model
import DeviceModel from '../models/deviceModel';

// Import employee model
import EmployeeModel from '../models/employeeModel';

// Import register device type
import type RegisterDeviceType from '../types/registerDeviceType';

// Import response type
import type ResponseType from '../types/responseType';

// Get all register devices
export const getRegisterDevices = async (): Promise<ResponseType> => {
	// Create response
	let response: ResponseType;
	// Try to get all register devices
	try {
		// Get all register devices
		const registerDevices = await RegisterDeviceModel.findAll({
			include: [
				{
					model: DeviceModel,
					as: 'device',
				},
				{
					model: EmployeeModel,
					as: 'employee',
				},
			],
		});
		// Return response
		response = {
			status: 200,
			message: 'Register devices found',
			data: JSON.stringify(registerDevices),
		};
	} catch (error) {
		// Return response
		response = {
			status: 500,
			message: 'Error getting register devices',
		};
	}

	// Return response
	return response;
};

// Get register device by id
export const getRegisterDeviceById = async (id: number): Promise<ResponseType> => {
	// Create response
	let response: ResponseType;
	// Try to get register device by id
	try {
		// Get register device by id
		const registerDevice = await RegisterDeviceModel.findByPk(id, {
			include: [
				{
					model: DeviceModel,
					as: 'device',
				},
				{
					model: EmployeeModel,
					as: 'employee',
				},
			],
		});
		// Return response
		response = {
			status: 200,
			message: 'Register device found',
			data: JSON.stringify(registerDevice),
		};
	} catch (error) {
		// Return response
		response = {
			status: 500,
			message: 'Error getting register device',
		};
	}

	// Return response
	return response;
};

// Create register device
export const createRegisterDevice = async (registerDevice: RegisterDeviceType): Promise<ResponseType> => {
	// Create response
	let response: ResponseType;
	// Try to create register device
	try {
		// Create register device
		await RegisterDeviceModel.create(registerDevice);
		// Return response
		response = {
			status: 200,
			message: 'Register device created',
		};
	} catch (error) {
		// Return response
		response = {
			status: 500,
			message: 'Error creating register device',
		};
	}

	// Return response
	return response;
};

// Update register device
export const updateRegisterDevice = async (id: number, registerDevice: RegisterDeviceType): Promise<ResponseType> => {
	// Create response
	let response: ResponseType;
	// Try to update register device
	try {
		// Update register device
		await RegisterDeviceModel.update(registerDevice, {
			where: {id},
		});
		// Return response
		response = {
			status: 200,
			message: 'Register device updated',
		};
	} catch (error) {
		// Return response
		response = {
			status: 500,
			message: 'Error updating register device',
		};
	}

	// Return response
	return response;
};

// Delete register device
export const deleteRegisterDevice = async (id: number): Promise<ResponseType> => {
	// Create response
	let response: ResponseType;
	// Try to delete register device
	try {
		// Delete register device
		await RegisterDeviceModel.destroy({where: {id}});
		// Return response
		response = {
			status: 200,
			message: 'Register device deleted',
		};
	} catch (error) {
		// Return response
		response = {
			status: 500,
			message: 'Error deleting register device',
		};
	}

	// Return response
	return response;
};

