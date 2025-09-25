import express from 'express';
import authMiddleware from '../middlewares/authMiddleware.js';

const router = express.Router();

// Test endpoint to verify auth is working
router.get('/verify', authMiddleware, (req, res) => {
  res.json({ 
    message: 'Authentication successful', 
    user: req.user 
  });
});

export default router;