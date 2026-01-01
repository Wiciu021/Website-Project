import express from 'express';
import {
  getAllGalleryItems,
  getGalleryItemById,
} from '../controllers/galleryControllers.js';

const router = express.Router();

router.get('/', getAllGalleryItems);
router.get('/:id', getGalleryItemById);

export default router;
