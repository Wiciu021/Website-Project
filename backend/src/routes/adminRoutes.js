import express from 'express';
import { createPost, createDocument } from '../controllers/adminControllers.js';
import upload from '../lib/multer.js';

const router = express.Router();

router.post('/posts', upload.single('image'), createPost);
router.post('/docs', upload.single('document'), createDocument);
// router.post('/gallery', upload.single('image'), createGalleryImage);

export default router;