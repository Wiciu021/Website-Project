import prisma from '../lib/prisma.js';

export const getAllDocs = async (req, res) => {
  try {
    const docs = await prisma.document.findMany({
      orderBy: { 
        date: 'desc' 
      }
    });
    res.json(docs);
  } catch (error) {
    console.error('Error fetching documents:', error);
    res.status(500).json({ error: 'Błąd serwera przy pobieraniu dokumentów' });
  }
};

export const getDocById = async (req, res) => {
  const id = parseInt(req.params.id);
  try {
    const doc = await prisma.document.findUnique({ where: { id } });
    if (!doc) {
      return res.status(404).json({ error: 'Dokument nie znaleziony' });
    }
    res.json(doc);
  } catch (err) {
    res.status(500).json({ error: 'Błąd serwera' });
  }
};