import prisma from '../lib/prisma.js';

export const getAllGalleryItems = async (req, res) => {
  try {
    const albums = await prisma.album.findMany({
      include: {
        photos: true
      },
      orderBy: {
        date: 'desc'
      }
    });
    res.json(albums);
  } catch (err) {
    res.status(500).json({ error: 'Błąd serwera przy pobieraniu galerii' });
  }
};

export const getGalleryItemById = async (req, res) => {
  const id = parseInt(req.params.id);
  try {
    const album = await prisma.album.findUnique({
      where: { id },
      include: { photos: true }
    });
    if (!album) {
      return res.status(404).json({ error: 'Album nie znaleziony' });
    }
    res.json(album);
  } catch (err) {
    res.status(500).json({ error: 'Błąd serwera' });
  }
};