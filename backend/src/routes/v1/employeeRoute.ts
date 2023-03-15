// Description: Employee route
// Author: Sebastián Gámez Ariza

// Import express router
import { Router } from 'express';

// Import employee controller
import {
    getEmployeesController,
    getEmployeeByIdController,
    createEmployeeController,
    updateEmployeeController,
    deleteEmployeeController
} from '../../controllers/employeeController';

// Create employee router
const employeeRouter: Router = Router();

// Employee routes
employeeRouter
    // Get all employees
    .get('/', getEmployeesController)
    // Get employee by id
    .get('/:id', getEmployeeByIdController)
    // Create employee
    .post('/', createEmployeeController)
    // Update employee
    .put('/:id', updateEmployeeController)
    // Delete employee
    .delete('/:id', deleteEmployeeController);

// Export employee router
export default employeeRouter;