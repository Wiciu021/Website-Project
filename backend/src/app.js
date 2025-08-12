import express from 'express';
import cors from 'cors';
import path from 'path'
import { fileURLToPath } from 'url';
import postRoutes from './routes/postRoutes.js';
import teachersRoutes from './routes/teachersRoutes.js';
import docsRoutes from './routes/docsRoutes.js';
import galleryRoutes from './routes/galleryRoutes.js';

const app = express();

const PORT = process.env.PORT || 8000;
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(cors({
  origin: ['http://localhost', 'http://localhost:3000', 'http://localhost:80']
}));
app.use(express.json());

app.use('/api/aktualnosci', postRoutes);
app.use('/api/zespol-nauczycieli', teachersRoutes);
app.use('/api/dokumenty-szkolne', docsRoutes);
app.use('/api/galeria', galleryRoutes);

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Backend działa na porcie ${PORT}`);
});