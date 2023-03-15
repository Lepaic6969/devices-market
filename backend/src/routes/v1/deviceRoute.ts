// Description: Device router
// Author: Sebastián Gámez Ariza

// Import express router
import { Router } from 'express';

// Import device controller
import {
    getDevicesController,
    getDeviceByIdController,
    createDeviceController,
    updateDeviceController,
    deleteDeviceController
} from '../../controllers/deviceController';

// Create device router
const deviceRouter: Router = Router();

// Device routes
deviceRouter
    // Get all devices
    .get('/', getDevicesController)
    // Get device by id
    .get('/:id', getDeviceByIdController)
    // Create device
    .post('/', createDeviceController)
    // Update device
    .put('/:id', updateDeviceController)
    // Delete device
    .delete('/:id', deleteDeviceController);

// Export device router
export default deviceRouter;
