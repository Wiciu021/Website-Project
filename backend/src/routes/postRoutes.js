import express from 'express';
import {
  getAllPosts,
  getPostById,
  deletePost,
} from '../controllers/postController.js';

const router = express.Router();

router.get('/', getAllPosts);
router.get('/:id', getPostById);
router.delete('/:id', deletePost);

export default router;
