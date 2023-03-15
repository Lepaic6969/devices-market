// Description: This file contains the schema to validate the device
// Author: Sebastián Gámez Ariza

// Importing the Joi library
import Joi from 'joi';

// Create the schema to validate the device model
const deviceSchema = Joi.object({
    id: Joi.number(),
    name: Joi.string()
            .min(3)
            .max(30),
    serial: Joi.string()
            .alphanum(),
    description: Joi.string()
            .min(3)
            .max(255),
    state: Joi.boolean(),
    referenceId: Joi.number(),
    brandId: Joi.number(),
});

// Export the schema
export default deviceSchema;
