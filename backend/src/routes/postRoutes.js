import express from 'express';
import {
  getAllPosts,
  getPostById,
  deletePost,
  getRecentPosts
} from '../controllers/postController.js';

const router = express.Router();

router.get('/recent', getRecentPosts);
router.get('/', getAllPosts);
router.get('/:id', getPostById);
router.delete('/:id', deletePost);

export default router;
