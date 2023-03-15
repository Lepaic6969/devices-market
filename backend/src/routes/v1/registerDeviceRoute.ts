// Description: This file contains the route for registering a device
// Author: Sebastián Gámez Ariza

// Import express router
import { Router } from 'express';

// Import register device controller
import {
    getRegisterDevicesController,
    getRegisterDeviceByIdController,
    createRegisterDeviceController,
    updateRegisterDeviceController,
    deleteRegisterDeviceController
} from '../../controllers/registerDeviceController';

// Create register device router
const registerDeviceRouter: Router = Router();

// Register device routes
registerDeviceRouter
    // Get all register devices
    .get('/', getRegisterDevicesController)
    // Get register device by id
    .get('/:id', getRegisterDeviceByIdController)
    // Create register device
    .post('/', createRegisterDeviceController)
    // Update register device
    .put('/:id', updateRegisterDeviceController)
    // Delete register device
    .delete('/:id', deleteRegisterDeviceController);

// Export register device router
export default registerDeviceRouter;