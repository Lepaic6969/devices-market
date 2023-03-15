// Description: This file contains the controller for the employee
// Author: Sebastián Gámez Ariza

// Import the express types
import type { Request, Response } from 'express';

// Import the employee schema
import employeeSchema from '../schemas/employeeSchema';

// Import the employee service
import {
    getEmployees,
    getEmployeeById,
    createEmployee,
    updateEmployee,
    deleteEmployee
} from '../services/employeeService';

// Import the employee type
import type EmployeeType from '../types/employeeType';

// Import the response type
import type ResponseType from '../types/responseType';

// Get all employees
export const getEmployeesController = async (req: Request, res: Response): Promise<void> => {
    // Get all employees
    const response: ResponseType = await getEmployees();
    // Send response
    res.status(response.status).json(response);
}

// Get employee by id
export const getEmployeeByIdController = async (req: Request, res: Response): Promise<void> => {
    // Set employee id
    const employeeId: number = parseInt(req.params.id);
    // Get employee by id
    const response: ResponseType = await getEmployeeById(employeeId);
    // Send response
    res.status(response.status).json(response);
}

// Create employee
export const createEmployeeController = async (req: Request, res: Response): Promise<void> => {
    // Create response
    let response: ResponseType;
    // Set the new employee to add from the request body
    let newEmployee: EmployeeType = req.body
    // Validate employee
    try {
        // Validate employee 
        await employeeSchema.validateAsync(newEmployee);
        // Create employee
        response = await createEmployee(newEmployee);
    }
    catch (err) {
        // Log error
        console.log(err);
        // Set response
        response = {
            status: 400,
            message: 'Error creating employee',
            data: err
        };
    }
    // Send response
    res.status(response.status).json(response);
}

// Update employee
export const updateEmployeeController = async (req: Request, res: Response): Promise<void> => {
    // Create response
    let response: ResponseType;
    // Set employee id
    const employeeId: number = parseInt(req.params.id);
    // Set the employee to update from the request body
    let employeeToUpdate: EmployeeType = req.body
    // Validate employee
    try {
        // Validate employee 
        await employeeSchema.validateAsync(employeeToUpdate);
        // Update employee
        response = await updateEmployee(employeeId, employeeToUpdate);
    }
    catch (err) {
        // Log error
        console.log(err);
        // Set response
        response = {
            status: 400,
            message: 'Error updating employee',
            data: err
        };
    }
    // Send response
    res.status(response.status).json(response);
}

// Delete employee
export const deleteEmployeeController = async (req: Request, res: Response): Promise<void> => {
    // Set employee id
    const employeeId: number = parseInt(req.params.id);
    // Delete employee
    const response: ResponseType = await deleteEmployee(employeeId);
    // Send response
    res.status(response.status).json(response);
}