import prisma from '../lib/prisma.js';

export const getAllTeachers = async (req, res) => {
  try {
    const teachers = await prisma.teacher.findMany({
      orderBy: [
        { category: 'asc' },
        { surname: 'asc' }
      ]
    });
    console.log('Teachers fetched:', teachers);
    res.json(teachers);
  } catch (err) {
    console.error('Database error:', err);
    res.status(500).json({ error: 'Błąd serwera przy pobieraniu nauczycieli' });
  }
};

export const getTeacherById = async (req, res) => {
  const id = parseInt(req.params.id);
  try {
    const teacher = await prisma.teacher.findUnique({ where: { id } });
    if (!teacher) {
      return res.status(404).json({ error: 'Nauczyciel nie znaleziony' });
    }
    res.json(teacher);
  } catch (err) {
    res.status(500).json({ error: 'Błąd serwera' });
  }
};
