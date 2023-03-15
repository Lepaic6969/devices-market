// Description: Controller for device
// Author: Sebastián Gámez Ariza

// Import express types
import type { Request, Response } from 'express';

// Import device schema
import deviceSchema from '../schemas/deviceSchema';

// Import device service
import {
    getDevices,
    getDeviceById,
    createDevice,
    updateDevice,
    deleteDevice
} from '../services/deviceService';

// Import device type
import type DeviceType from '../types/deviceType';

// Import response type
import type ResponseType from '../types/responseType';

// Get all devices
export const getDevicesController = async (req: Request, res: Response): Promise<void> => {
    // Get all devices
    const response: ResponseType = await getDevices();
    // Send response
    res.status(response.status).json(response);
}

// Get device by id
export const getDeviceByIdController = async (req: Request, res: Response): Promise<void> => {
    // Set device id
    const deviceId: number = parseInt(req.params.id);
    // Get device by id
    const response: ResponseType = await getDeviceById(deviceId);
    // Send response
    res.status(response.status).json(response);
}

// Create device
export const createDeviceController = async (req: Request, res: Response): Promise<void> => {
    // Create response
    let response: ResponseType;
    // Set the new device to add from the request body
    let newDevice: DeviceType = req.body
    // Validate device
    try {
        // Validate device 
        await deviceSchema.validateAsync(newDevice);
        // Create device
        response = await createDevice(newDevice);
    }
    catch (err) {
        // Log error
        console.log(err);
        // Set response
        response = {
            status: 400,
            message: 'Error creating device',
            data: err
        };
    }
    // Send response
    res.status(response.status).json(response);
}

// Update device
export const updateDeviceController = async (req: Request, res: Response): Promise<void> => {
    // Create response
    let response: ResponseType;
    // Set device id
    const deviceId: number = parseInt(req.params.id);
    // Set the new device to update from the request body
    let newDevice: DeviceType = req.body
    // Validate device
    try {
        // Validate device 
        await deviceSchema.validateAsync(newDevice);
        // Update device
        response = await updateDevice(deviceId, newDevice);
    }
    catch (err) {
        // Log error
        console.log(err);
        // Set response
        response = {
            status: 400,
            message: 'Error updating device',
            data: err
        };
    }
    // Send response
    res.status(response.status).json(response);
}

// Delete device
export const deleteDeviceController = async (req: Request, res: Response): Promise<void> => {
    // Set device id
    const deviceId: number = parseInt(req.params.id);
    // Delete device
    const response: ResponseType = await deleteDevice(deviceId);
    // Send response
    res.status(response.status).json(response);
}
