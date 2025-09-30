import express from 'express';
import {
  getAllTeachers,
  getTeacherById,
} from '../controllers/teachersControllers.js';
 const router = express.Router();

router.get('/', getAllTeachers);
router.get('/:id', getTeacherById);

export default router;