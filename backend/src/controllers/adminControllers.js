import prisma from "../lib/prisma.js";
import upload from '../lib/multer.js';
import { uploadToMinio, BUCKETS } from '../lib/multer.js';

export const createPost = async (req, res) => {
  const { title, description, date, author, category } = req.body;

  try {
    let imageKey = 'default.png';
    if (req.file) {
      imageKey = await uploadToMinio(req.file, 'POSTS');
      console.log('Image uploaded with key:', imageKey);
    }

    const newPost = await prisma.post.create({
      data: {
        title,
        description,
        author,
        date,
        img: imageKey,
        category
      }
    });

    console.log('Post created:', newPost);
    res.status(201).json(newPost);
  } catch (error) {
    console.error('Error creating post:', error);
    res.status(500).json({ error: error.message });
  }
};
