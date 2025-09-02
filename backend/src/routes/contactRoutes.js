import express from 'express';
import { sendEmail } from '../controllers/contactControllers.js';

const router = express.Router();

router.post('/', sendEmail);
//router.post('/', getContactInfo); testowa funkcja do odbierania danych z formularza

export default router;