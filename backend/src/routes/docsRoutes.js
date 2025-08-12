import express from 'express';
import {
  getAllDocs,
  getDocById,
  createDoc,
  deleteDoc,
} from '../controllers/docsController.js';

const router = express.Router();

router.get('/', getAllDocs);
router.get('/:id', getDocById);
router.post('/', createDoc);
router.delete('/:id', deleteDoc);

export default router;
