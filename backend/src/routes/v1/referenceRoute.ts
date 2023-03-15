// Description: Reference route
// Author: Sebastián Gámez Ariza

// Import express router
import { Router } from 'express';

// Import reference controller
import {
    getReferencesController,
    getReferenceByIdController,
    createReferenceController,
    updateReferenceController,
    deleteReferenceController
} from '../../controllers/referenceController';

// Create reference router
const referenceRouter: Router = Router();

// Reference routes
referenceRouter
    // Get all references
    .get('/', getReferencesController)
    // Get reference by id
    .get('/:id', getReferenceByIdController)
    // Create reference
    .post('/', createReferenceController)
    // Update reference
    .put('/:id', updateReferenceController)
    // Delete reference
    .delete('/:id', deleteReferenceController);

// Export reference router
export default referenceRouter;