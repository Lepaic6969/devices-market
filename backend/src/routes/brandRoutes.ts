import express from 'express';
const router=express.Router();

import {createBrand,getAllBrands,getBrandById,updateBrand,deleteBrand} from '../controllers/brandController';

router.get('/',getAllBrands);
router.get('/:id',getBrandById);
router.post('/',createBrand);
router.put('/:id',updateBrand);
router.delete('/:id',deleteBrand);


export default router;

