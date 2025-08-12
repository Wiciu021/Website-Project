import express from 'express';
import {
  getAllPosts,
  getPostById,
  createPost,
  deletePost,
} from '../controllers/postController.js';

const router = express.Router();

router.get('/', getAllPosts);
router.get('/:id', getPostById);
router.post('/', createPost);
router.delete('/:id', deletePost);

export default router;
