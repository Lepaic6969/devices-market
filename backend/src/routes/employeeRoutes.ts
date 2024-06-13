import express from 'express';
const router=express.Router();

//Importo los controladores
import {createEmployee,getAllEmployees,getEmployeeById,updateEmployee,deleteEmployee} from '../controllers/employeeController';

router.get('/',getAllEmployees);
router.get('/:id',getEmployeeById);
router.post('/',createEmployee);
router.put('/:id',updateEmployee);
router.delete('/:id',deleteEmployee);


export default router;