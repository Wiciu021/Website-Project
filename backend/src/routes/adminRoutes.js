import express from 'express';
import { createPost } from '../controllers/adminControllers.js';

const router = express.Router();

router.post('/posts', createPost);

export default router;