import express from 'express';
import cors from 'cors';
import postRoutes from './routes/postRoutes.js';
import { fileURLToPath } from 'url';
import prisma from './lib/prisma.js'; 
import path from 'path'

const app = express();

const PORT = process.env.PORT || 8000;
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(cors({
  origin: ['http://localhost', 'http://localhost:3000', 'http://localhost:80']
}));
app.use(express.json());

app.use('/api/aktualnosci', postRoutes);

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Backend działa na porcie ${PORT}`);
});