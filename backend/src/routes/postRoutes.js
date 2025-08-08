import express from 'express';
import {
  getAllPosts,
  getPostById,
  createPost,
  deletePost,
} from '../controllers/postController.js';

const router = express.Router();

// GET /api/posts
router.get('/', getAllPosts);

// GET /api/posts/:id
router.get('/:id', getPostById);

// POST /api/posts
router.post('/', createPost);

// DELETE /api/posts/:id
router.delete('/:id', deletePost);

export default router;
