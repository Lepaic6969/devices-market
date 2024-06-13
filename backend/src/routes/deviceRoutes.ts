import express from 'express';
const router=express.Router();

//Importo los controladores
// import {createDevice,getAllDevices,getDeviceById,updateDevice,deleteDevice} from '../controllers/deviceController';
import {createDevice,getAllDevices,getDeviceById,updateDevice,deleteDevice} from '../controllers/deviceController';

router.get('/',getAllDevices);
router.get('/:id',getDeviceById);
router.post('/',createDevice);
router.put('/:id',updateDevice);
router.delete('/:id',deleteDevice);


export default router;