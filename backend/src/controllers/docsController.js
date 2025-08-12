import prisma from '../lib/prisma.js';

export const getAllDocs = async (req, res) => {
  try {
    const docs = await prisma.docs.findMany({
      orderBy: { date: 'desc' }
    });
    res.json(docs);
  } catch (err) {
    res.status(500).json({ error: 'Błąd serwera przy pobieraniu dokumentów' });
  }
};

export const getDocById = async (req, res) => {
  const id = parseInt(req.params.id);
  try {
    const doc = await prisma.docs.findUnique({ where: { id } });
    if (!doc) {
      return res.status(404).json({ error: 'Dokument nie znaleziony' });
    }
    res.json(doc);
  } catch (err) {
    res.status(500).json({ error: 'Błąd serwera' });
  }
};

export const createDoc = async (req, res) => {
  const { title, date, file } = req.body;
  try {
    const newDoc = await prisma.docs.create({
      data: { title, date, file }
    });
    res.status(201).json(newDoc);
  } catch (err) {
    res.status(500).json({ error: 'Nie udało się dodać dokumentu' });
  }
};

export const deleteDoc = async (req, res) => {
  const id = parseInt(req.params.id);
  try {
    await prisma.docs.delete({ where: { id } });
    res.json({ message: 'Dokument usunięty' });
  } catch (err) {
    res.status(500).json({ error: 'Błąd przy usuwaniu dokumentu' });
  }
};
