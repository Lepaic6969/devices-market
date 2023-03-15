// Description: Controller for reference
// Author: Sebastián Gámez Ariza

// Import express types
import type { Request, Response } from 'express';

// Import joi types
import type { ValidationError } from 'joi';

// Import reference schema
import referenceSchema from '../schemas/referenceSchema';

// Import reference service
import {
    getReferences,
    getReferenceById,
    createReference,
    updateReference,
    deleteReference
} from '../services/referenceService';

// Import reference type
import type ReferenceType from '../types/referenceType';

// Import response type
import type ResponseType from '../types/responseType';

// Get all references
export const getReferencesController = async (req: Request, res: Response): Promise<void> => {
    // Get all references
    const response: ResponseType = await getReferences();
    // Send response
    res.status(response.status).json(response);
}

// Get reference by id
export const getReferenceByIdController = async (req: Request, res: Response): Promise<void> => {
    // Set reference id
    const referenceId: number = parseInt(req.params.id);
    // Get reference by id
    const response: ResponseType = await getReferenceById(referenceId);
    // Send response
    res.status(response.status).json(response);
}

// Create reference
export const createReferenceController = async (req: Request, res: Response): Promise<void> => {
    // Create response
    let response: ResponseType;
    // Set the new reference to add from the request body
    let newReference: ReferenceType = req.body
    // Validate reference
    try {
        // Validate reference 
        await referenceSchema.validateAsync(newReference);
        // Create reference
        response = await createReference(newReference);
    }
    catch (err) {
        // Log error
        console.log(err);
        // Set response
        response = {
            status: 400,
            message: 'Error creating reference',
            data: err,
        };
    }
    // Send response
    res.status(response.status).json(response);
}

// Update reference
export const updateReferenceController = async (req: Request, res: Response): Promise<void> => {
    // Create response
    let response: ResponseType;
    // Set reference id
    const referenceId: number = parseInt(req.params.id);
    // Set the reference to update from the request body
    let referenceToUpdate: ReferenceType = req.body
    // Validate reference
    try {
        // Validate reference 
        await referenceSchema.validateAsync(referenceToUpdate);
        // Update reference
        response = await updateReference(referenceId, referenceToUpdate);
    }
    catch (err) {
        // Log error
        console.log(err);
        // Set response
        response = {
            status: 400,
            message: 'Error updating reference',
            data: err
        };
    }
    // Send response
    res.status(response.status).json(response);
}

// Delete reference
export const deleteReferenceController = async (req: Request, res: Response): Promise<void> => {
    // Set reference id
    const referenceId: number = parseInt(req.params.id);
    // Delete reference
    const response: ResponseType = await deleteReference(referenceId);
    // Send response
    res.status(response.status).json(response);
}
