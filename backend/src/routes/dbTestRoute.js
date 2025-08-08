import express from 'express';
import { dbTest } from '../controllers/dbTestController.js';

const router = express.Router();

router.get('/', dbTest);

export default router;