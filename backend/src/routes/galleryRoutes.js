import express from 'express';
import {
  getAllGalleryItems,
  getGalleryItemById,
  createGalleryItem,
  deleteGalleryItem,
} from '../controllers/galleryControllers.js';

const router = express.Router();

router.get('/', getAllGalleryItems);
router.get('/:id', getGalleryItemById);
router.post('/', createGalleryItem);
router.delete('/:id', deleteGalleryItem);

export default router;
