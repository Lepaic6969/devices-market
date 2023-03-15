// Description: This file contains the brand controller
// Author: Sebastián Gámez Ariza

// Import express types
import type { Request, Response } from 'express';

// Import brand schema
import brandSchema from '../schemas/brandSchema';

// Import brand service
import { 
    getBrands,
    getBrandById, 
    createBrand, 
    updateBrand, 
    deleteBrand 
} from '../services/brandService';

// Import brand type
import type BrandType from '../types/brandType';

// Import response type
import type ResponseType from '../types/responseType';

// Get all brands
export const getBrandsController = async (req: Request, res: Response): Promise<void> => {
    // Get all brands
    const response: ResponseType = await getBrands();
    // Send response
    res.status(response.status).json(response);
}

// Get brand by id
export const getBrandByIdController = async (req: Request, res: Response): Promise<void> => {
    // Get brand by id
    const response: ResponseType = await getBrandById(parseInt(req.params.id));
    // Send response
    res.status(response.status).json(response);
}

// Create brand
export const createBrandController = async (req: Request, res: Response): Promise<void> => {
    // Create response
    let response: ResponseType;
    // Set the new brand to add from the request body
    let newBrand: BrandType = req.body
    // Validate brand
    try {
        // Validate brand 
        await brandSchema.validateAsync(newBrand);
        // Create brand
        response = await createBrand(req.body as BrandType);
    }
    catch (err) {
        // Log error
        console.log(err);
        // Set response
        response = {
            status: 400,
            message: 'Error creating brand',
            data: err,
        };
    }
    // Send response
    res.status(response.status).json(response);
}

// Update brand
export const updateBrandController = async (req: Request, res: Response): Promise<void> => {
    // Create response
    let response: ResponseType;
    // Set the id to update from the request params
    let idToUpdate: number = parseInt(req.params.id);
    // Set the brand to update from the request body
    let brandToUpdate: BrandType = req.body
    // Validate brand
    try {
        // Validate brand 
        await brandSchema.validateAsync(brandToUpdate);
        // Update brand
        response = await updateBrand(idToUpdate, brandToUpdate);
    }
    catch (err) {
        // Log error
        console.log(err);
        // Set response
        response = {
            status: 400,
            message: 'Error updating brand',
            data: err
        };
    }
    // Send response
    res.status(response.status).json(response);
}

// Delete brand
export const deleteBrandController = async (req: Request, res: Response): Promise<void> => {
    // Set the id to delete from the request params
    const idToDelete: number = parseInt(req.params.id);
    // Get brand by id
    const response: ResponseType = await deleteBrand(idToDelete);
    // Send response
    res.status(response.status).json(response);
}
