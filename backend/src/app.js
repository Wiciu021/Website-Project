import express from 'express';
import cors from 'cors';
import postRoutes from './routes/postRoutes.js';
import dbTest from './routes/dbTestRoute.js';

const app = express();

const PORT = process.env.PORT || 8000;

app.use(cors({
  origin: 'http://localhost'
}));
app.use(express.json());

app.get('/api/hello', (req, res) => {
  res.json({ message: 'Witaj ze strony backendu!' });
});

app.use('/api/posts', postRoutes);

app.use('/test-db', dbTest);

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Backend działa na porcie ${PORT}`);
});