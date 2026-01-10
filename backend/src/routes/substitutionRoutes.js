import express from 'express';
import { getSubstitutions,} from '../controllers/substitutionController.js';

 const router = express.Router();

router.get('/', getSubstitutions);

export default router;