import express from 'express';
import { getAllDocs, getDocById } from '../controllers/docsController.js';

const router = express.Router();

router.get('/', getAllDocs);
router.get('/:id', getDocById);

export default router;
