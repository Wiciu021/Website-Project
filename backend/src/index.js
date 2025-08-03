const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
const PORT = process.env.PORT || 8000;

app.use(cors());
app.use(express.json());

app.get('/api/ping', (req, res) => { // endpoint
  res.json({ message: 'OK' });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

const newsRouter = require('./routes/news');
app.use('/api/news', newsRouter);
c
