import express from 'express';
import {
  getAllTeachers,
  getTeacherById,
  createTeacher,
  deleteTeacher,
} from '../controllers/teachersControllers.js';
 const router = express.Router();

router.get('/', getAllTeachers);
router.get('/:id', getTeacherById);
router.post('/', createTeacher);
router.delete('/:id', deleteTeacher);

export default router;