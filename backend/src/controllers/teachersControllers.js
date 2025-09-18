import prisma from '../lib/prisma.js';

export const getAllTeachers = async (req, res) => {
  try {
    const teachers = await prisma.teacher.findMany({
      orderBy: [
        { roleType: 'asc' },
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

export const createTeacher = async (req, res) => {
  const { name, surname, jobClassification, roleType, img } = req.body;
  try {
    const newTeacher = await prisma.teacher.create({
      data: { name, surname, jobClassification, roleType, img }
    });
    res.status(201).json(newTeacher);
  } catch (err) {
    res.status(500).json({ error: 'Nie udało się dodać nauczyciela' });
  }
};

export const deleteTeacher = async (req, res) => {
  const id = parseInt(req.params.id);
  try {
    await prisma.teacher.delete({ where: { id } });
    res.json({ message: 'Nauczyciel usunięty' });
  } catch (err) {
    res.status(500).json({ error: 'Błąd przy usuwaniu nauczyciela' });
  }
};