import express from 'express';
import { getSubstitutions, getCurrentSubstitution} from '../controllers/substitutionController.js';

 const router = express.Router();

router.get('/', getSubstitutions);
router.get('/current', getCurrentSubstitution);

export default router;