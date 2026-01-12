import prisma from '../lib/prisma.js';

export const getAllPosts = async (req, res) => {
  try {
    const posts = await prisma.post.findMany({
      orderBy: { date: 'desc' },
      include: { images: true }
    });
    res.set('Cache-Control', 'no-store');
    res.json(posts);
  } catch {
    res.status(500).json({ error: 'Server error' });
  }
};

export const getPostById = async (req, res) => {
  try {
    const id = Number(req.params.id);

    if (!Number.isInteger(id)) return res.status(404).json({ error: 'Not found' });

    const post = await prisma.post.findUnique({
      where: { id },
      include: { images: true }
    });

    if (!post) return res.status(404).json({ error: 'Not found' });

    res.set('Cache-Control', 'no-store');
    res.json(post);
  } catch {
    res.status(500).json({ error: 'Server error' });
  }
};

export const deletePost = async (req, res) => {
  const id = parseInt(req.params.id);
  
  if (isNaN(id)) {
    return res.status(400).json({ error: 'Nieprawidłowy id posta' });
  }

  try {
    await prisma.post.delete({ where: { id } });
    res.json({ message: 'Post usunięty' });
  } catch (err) {
    res.status(500).json({ error: 'Błąd przy usuwaniu posta' });
  }
};

export const getRecentPosts = async (req, res) => {
  try {
    let limit = Number(req.query.limit ?? 3);
    if (!Number.isFinite(limit) || limit <= 0) limit = 3;
    const posts = await prisma.post.findMany({
      orderBy: { date: 'desc' },
      take: limit,
      include: { images: true }
    });
    res.set('Cache-Control', 'no-store');
    res.json(posts);
  } catch {
    res.status(500).json({ error: 'Server error' });
  }
};
