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

export const createGalleryItem = async (req, res) => {
  const { folder, title, description, img, photos } = req.body;
  try {
    const newAlbum = await prisma.album.create({
      data: {
        folder,
        title,
        description,
        img,
        date: new Date(),
        photos: {
          create: photos
        }
      },
      include: {
        photos: true
      }
    });
    res.status(201).json(newAlbum);
  } catch (err) {
    res.status(500).json({ error: 'Nie udało się utworzyć albumu' });
  }
};

export const deleteGalleryItem = async (req, res) => {
  const id = parseInt(req.params.id);
  try {
    await prisma.photo.deleteMany({ where: { albumId: id } });
    await prisma.album.delete({ where: { id } });
    res.json({ message: 'Album usunięty' });
  } catch (err) {
    res.status(500).json({ error: 'Błąd przy usuwaniu albumu' });
  }
};