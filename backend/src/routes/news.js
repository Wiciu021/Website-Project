import express from 'express';

const router = express.Router();
const pool = require('../db');

// GET all news
router.get('/news', async (req, res, next) => { //pamietaj o next
  try {
    const result = await pool.query('SELECT * FROM news ORDER BY created_at DESC');
    res.json(result.rows);
  } catch (err) {
    res.status(500).json({ error: 'Błąd przy pobieraniu newsów' });
  }
});

//to bedzie dzialac jak nauczyciel sie zaloguje
router.post('/news', async (req, res) => {
  const { title, content } = req.body;
  if (!title || !content) return res.status(400).json({ error: 'Brakuje tytułu lub treści' });

  try {
    const result = await pool.query(
      'INSERT INTO news (title, content) VALUES ($1, $2) RETURNING *',
      [title, content]
    );
    res.status(201).json(result.rows[0]);
  } catch (err) {
    res.status(500).json({ error: 'Błąd przy dodawaniu aktualności' });
  }
});

module.exports = router;
