import express from 'express';
import { createPost } from '../controllers/adminControllers.js';
import upload from '../lib/multer.js';

const router = express.Router();

router.post('/posts', upload.single('image'), createPost);

export default router;