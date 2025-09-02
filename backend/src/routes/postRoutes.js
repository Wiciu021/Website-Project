import express from 'express';
import {
  getAllPosts,
  getPostById,
  createPost,
  deletePost,
} from '../controllers/postController.js';
import upload from '../lib/multer.js';

const router = express.Router();

router.get('/', getAllPosts);
router.get('/:id', getPostById);
router.post('/', upload.single('image'), createPost);
router.delete('/:id', deletePost);

export default router;
