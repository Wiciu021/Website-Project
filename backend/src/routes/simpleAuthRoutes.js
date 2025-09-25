import express from 'express';

const router = express.Router();

router.post('/login', (req, res) => {
  const { username, password } = req.body;
  
  if (username === 'admin' && password === 'admin123') {
    // In a real app, you'd use proper session management
    const token = Buffer.from('admin:' + Date.now()).toString('base64');
    res.json({ success: true, token });
  } else {
    res.status(401).json({ error: 'Invalid credentials' });
  }
});

router.get('/verify', (req, res) => {
  const token = req.headers.authorization?.replace('Bearer ', '');
  if (token && token.startsWith(Buffer.from('admin:').toString('base64').substr(0, 8))) {
    res.json({ success: true, user: { username: 'admin' } });
  } else {
    res.status(401).json({ error: 'Invalid token' });
  }
});

export default router;