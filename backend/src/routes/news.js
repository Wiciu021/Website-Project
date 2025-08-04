import express from 'express';
import prisma from '../lib/prisma.js';

const router = express.Router();

router.get('/', async (req, res) => {
  const news = await prisma.news.findMany({ orderBy: { createdAt: 'desc' } });
  res.json(news);
});

export default router;