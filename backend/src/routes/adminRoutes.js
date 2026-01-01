import express from 'express';
import { 
  createPost,
  createDocument, 
  createSubstitution, 
  //createGalleryImage, 
  createTeacher,
} from '../controllers/adminControllers.js';
import upload from '../lib/multer.js';

const router = express.Router();

router.post('/posts', upload.single('image'), createPost);
router.post('/docs', upload.single('document'), createDocument);
router.post('/substitutions', upload.single('document'), createSubstitution);
//router.post('/gallery', upload.single('image'), createGalleryImage);
router.post('/teachers', upload.single('image'), createTeacher);

export default router;