import express from 'express';
import cors from 'cors';
import path from 'path';
import { fileURLToPath } from 'url';
import config from './config/config.js';

import postRoutes from './routes/postRoutes.js';
import teachersRoutes from './routes/teachersRoutes.js';
import docsRoutes from './routes/docsRoutes.js';
import galleryRoutes from './routes/galleryRoutes.js';
import contactRoutes from './routes/contactRoutes.js';
import adminRoutes from './routes/adminRoutes.js';
import authRoutes from './routes/authRoutes.js';
import substitutionRoutes from './routes/substitutionRoutes.js';

import authMiddleware from './middlewares/authMiddleware.js';

const app = express();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(cors({
  origin: ['http://localhost', 'http://localhost:3000', 'http://localhost:80']
}));
app.use(express.json());

app.use('/api/auth', authRoutes);
app.use('/api/aktualnosci', postRoutes);
app.use('/api/zespol-nauczycieli', teachersRoutes);
app.use('/api/dokumenty-szkolne', docsRoutes);
app.use('/api/galeria', galleryRoutes);
app.use('/api/kontakt', contactRoutes);
app.use('/api/zastepstwa', substitutionRoutes);

// Protected admin routes
app.use('/api/admin', authMiddleware, adminRoutes);

app.listen(config.port, '0.0.0.0', () => {
  console.log(`Backend działa na porcie ${config.port}`);
});