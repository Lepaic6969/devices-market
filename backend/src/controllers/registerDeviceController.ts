// Description: This file contains the controller for the register device
// Author: Sebastián Gámez Ariza

// Import the express types
import type { Request, Response } from 'express';

// Import the register device schema
import registerDeviceSchema from '../schemas/registerDeviceSchema';

// Import the register device service
import {
    getRegisterDevices,
    getRegisterDeviceById,
    createRegisterDevice,
    updateRegisterDevice,
    deleteRegisterDevice
} from '../services/registerDeviceService';

// Import the register device type
import type RegisterDeviceType from '../types/registerDeviceType';

// Import the response type
import type ResponseType from '../types/responseType';

// Get all register devices
export const getRegisterDevicesController = async (req: Request, res: Response): Promise<void> => {
    // Get all register devices
    const response: ResponseType = await getRegisterDevices();
    // Send response
    res.status(response.status).json(response);
}

// Get register device by id
export const getRegisterDeviceByIdController = async (req: Request, res: Response): Promise<void> => {
    // Set register device id
    const registerDeviceId: number = parseInt(req.params.id);
    // Get register device by id
    const response: ResponseType = await getRegisterDeviceById(registerDeviceId);
    // Send response
    res.status(response.status).json(response);
}

// Create register device
export const createRegisterDeviceController = async (req: Request, res: Response): Promise<void> => {
    // Create response
    let response: ResponseType;
    // Set the new register device to add from the request body
    let newRegisterDevice: RegisterDeviceType = req.body
    // Validate register device
    try {
        // Validate register device 
        await registerDeviceSchema.validateAsync(newRegisterDevice);
        // Create register device
        response = await createRegisterDevice(newRegisterDevice);
    }
    catch (err) {
        // Log error
        console.log(err);
        // Set response
        response = {
            status: 400,
            message: 'Error creating register device',
            data: err
        }
    }
    // Send response
    res.status(response.status).json(response);
}

// Update register device
export const updateRegisterDeviceController = async (req: Request, res: Response): Promise<void> => {
    // Create response
    let response: ResponseType;
    // Set the register device id to update
    const registerDeviceIdToUpdate: number = parseInt(req.params.id);
    // Set the register device to update from the request body
    let registerDeviceToUpdate: RegisterDeviceType = req.body
    // Validate register device
    try {
        // Validate register device 
        await registerDeviceSchema.validateAsync(registerDeviceToUpdate);
        // Update register device
        response = await updateRegisterDevice(registerDeviceIdToUpdate, registerDeviceToUpdate);
    }
    catch (err) {
        // Log error
        console.log(err);
        // Set response
        response = {
            status: 400,
            message: 'Error updating register device',
            data: err
        }
    }
    // Send response
    res.status(response.status).json(response);
}

// Delete register device
export const deleteRegisterDeviceController = async (req: Request, res: Response): Promise<void> => {
    // Set register device id
    const registerDeviceId: number = parseInt(req.params.id);
    // Delete register device
    const response: ResponseType = await deleteRegisterDevice(registerDeviceId);
    // Send response
    res.status(response.status).json(response);
}
