// Description: This file contains the schema to validate the employee
// Author: Sebastián Gámez Ariza

// Importing the Joi library
import Joi from 'joi';

// Create the schema to validate the employee model
const employeeSchema = Joi.object({
    id: Joi.number(),
    name: Joi.string()
        .min(3)
        .max(30),
    lastName: Joi.string()
        .min(3)
        .max(30),
    address: Joi.string()
        .min(3)
        .max(255),
    email: Joi.string()
        .email(),
    phone: Joi.number()
});

// Export the schema
export default employeeSchema;
