// Description: This file contains the service for the employee model
// Author: Sebastián Gámez Ariza

// Import employee model
import EmployeeModel from '../models/employeeModel';

// Import employee type
import type EmployeeType from '../types/employeeType';

// Import the response type
import type ResponseType from '../types/responseType';

// Import check if exist helper
import checkIfExist from '../helpers/checkIfExistHelper';

// Get all employees
export const getAllEmployees = async (): Promise<ResponseType> => {
	// Create response
	let response: ResponseType;
	// Try to get all employees
	try {
		// Get all employees
		const employees = await EmployeeModel.findAll();
		// Return response
		response = {
			status: 200,
			message: 'Employees found',
			data: JSON.stringify(employees),
		};
	} catch (error) {
		// Return response
		response = {
			status: 500,
			message: 'Error getting employees',
		};
	}

	// Return response
	return response;
};

// Get employee by id
export const getEmployeeById = async (id: number): Promise<ResponseType> => {
	// Create response
	let response: ResponseType;
	// Try to get employee by id
	try {
		// Get employee by id
		const employee = await EmployeeModel.findByPk(id);
		// Return response
		response = {
			status: 200,
			message: 'Employee found',
			data: JSON.stringify(employee),
		};
	} catch (error) {
		// Return response
		response = {
			status: 500,
			message: 'Error getting employee',
		};
	}

	// Return response
	return response;
};

// Create employee
export const createEmployee = async (employee: EmployeeType): Promise<ResponseType> => {
	// Create response
	let response: ResponseType;
	// Try to create employee
	try {
		// Check if employee already exists
		const employeeAlreadyExists = await checkIfExist(EmployeeModel, 'email', employee.email);
		// Check if employee already exists
		if (employeeAlreadyExists) {
			// Set response
			response = {
				status: 400,
				message: 'Employee already exists',
			};
		}
		// If employee doesn't exist
		else {
			// Create employee
			await EmployeeModel.create(employee);
			// Return response
			response = {
				status: 200,
				message: 'Employee created',
			};
		}
	} catch (error) {
		// Return response
		response = {
			status: 500,
			message: 'Error creating employee',
		};
	}

	// Return response
	return response;
};

// Update employee
export const updateEmployee = async (id: number, employee: EmployeeType): Promise<ResponseType> => {
	// Create response
	let response: ResponseType;
	// Try to update employee
	try {
		// Update employee
		await EmployeeModel.update(employee, {
			where: {
				id,
			},
		});
		// Return response
		response = {
			status: 200,
			message: 'Employee updated',
			data: JSON.stringify(employee),
		};
	} catch (error) {
		// Return response
		response = {
			status: 500,
			message: 'Error updating employee',
		};
	}

	// Return response
	return response;
};

// Delete employee
export const deleteEmployee = async (id: number): Promise<ResponseType> => {
	// Create response
	let response: ResponseType;
	// Try to delete employee
	try {
		// Delete employee
		await EmployeeModel.destroy({
			where: {
				id,
			},
		});
		// Return response
		response = {
			status: 200,
			message: 'Employee deleted',
		};
	} catch (error) {
		// Return response
		response = {
			status: 500,
			message: 'Error deleting employee',
		};
	}

	// Return response
	return response;
};
