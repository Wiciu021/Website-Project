import express from 'express';
import cors from 'cors';
const app = express();

app.use(cors());
app.use(express.json());

app.get('/api/hello', (req, res) => {
  res.json({ message: 'Witaj ze strony backendu!' });
});

app.listen(8000, () => {
  console.log('Backend działa na porcie 8000');
});