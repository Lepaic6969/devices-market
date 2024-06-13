import express from 'express';
const router=express.Router();

import {createReference,getAllReferences,getReferenceById,updateReference,deleteReference} from '../controllers/referenceController';

router.get('/',getAllReferences);
router.get('/:id',getReferenceById);
router.post('/',createReference);
router.put('/:id',updateReference);
router.delete('/:id',deleteReference);


export default router;