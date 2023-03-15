// Description: This file contains the schema to validate the brand
// Author: Sebastián Gámez Ariza


// Importing the Joi library
import Joi from 'joi';

// Create the schema to validate the brand model
const brandSchema = Joi.object({
    id: Joi.number(),
    name: Joi.string()
            .min(3)
            .max(30)
            .required()
});

// Export the schema
export default brandSchema;
