import prisma from '../lib/prisma.js';

export const getAllPosts = async (req, res) => {
  try {
    const posts = await prisma.post.findMany({ 
      orderBy: { date: 'desc' } 
    });
    console.log('Posts fetched:', posts);
    res.json(posts);
  } catch (err) {
    console.error('Database error:', err);

    res.status(500).json({ error: 'Błąd serwera przy pobieraniu postów' });
  }
};

export const getPostById = async (req, res) => {
  const id = parseInt(req.params.id);
  if (isNaN(id)) {
    return res.status(400).json({ error: 'Nieprawidłowy id posta' });
  }

  try {
    const post = await prisma.post.findUnique({ where: { id } });
    if (!post) {
      return res.status(404).json({ error: 'Post nie znaleziony' });
    }
    res.json(post);
  } catch (err) {
    res.status(500).json({ error: 'Błąd serwera przy pobieraniu posta' });
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
