// Description: Brand route
// Author: Sebastián Gámez Ariza

// Import express router
import { Router } from 'express';

// Import brand controller
import {
    getBrandsController,
    getBrandByIdController,
    createBrandController,
    updateBrandController,
    deleteBrandController
} from '../../controllers/brandController';

// Create brand router
const brandRouter: Router = Router();

// Brand routes
brandRouter
    // Get all brands
    .get('/', getBrandsController)
    // Get brand by id
    .get('/:id', getBrandByIdController)
    // Create brand
    .post('/', createBrandController)
    // Update brand
    .put('/:id', updateBrandController)
    // Delete brand
    .delete('/:id', deleteBrandController);

// Export brand router
export default brandRouter;
