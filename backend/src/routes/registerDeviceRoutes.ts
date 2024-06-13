import express from 'express';
const router=express.Router();

//Importo los controladores
import {createRegister,getAllRegisters,getRegisterById,updateRegister,deleteRegister} from '../controllers/registerDeviceController';

router.get('/',getAllRegisters);
router.get('/:id',getRegisterById);
router.post('/',createRegister);
router.put('/:id',updateRegister);
router.delete('/:id',deleteRegister);


export default router;