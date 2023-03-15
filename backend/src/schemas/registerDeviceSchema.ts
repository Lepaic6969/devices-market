// Description: Schema for registering a device
// Author: Sebastián Gámez Ariza

// Importing the Joi library
import Joi from 'joi';

// Create the schema to validate the device model
const registerDeviceSchema = Joi.object({
    id: Joi.number(),
    date: Joi.date(),
    note: Joi.string()
        .min(3)
        .max(255),
    employeeId: Joi.number(),
    deviceId: Joi.number(),
});

// Export the schema
export default registerDeviceSchema;
