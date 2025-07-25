const express = require('express');
const router = express.Router();
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

router.get('/', async (req, res) => {
  const news = await prisma.news.findMany();
  res.json(news);
});

router.post('/', async (req, res) => {
  const { title, content } = req.body;
  const createdNews = await prisma.news.create({
    data: {
      title,
      content,
    },
  });
  res.status(201).json(createdNews);
});

module.exports = router;