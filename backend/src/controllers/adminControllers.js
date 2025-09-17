import prisma from "../lib/prisma.js";
// import upload from '../lib/multer.js';
import { uploadToMinio } from '../lib/multer.js';

export const createPost = async (req, res) => {
  try {
    const { title, description, date, author, category } = req.body;
    
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

export const createDocument = async (req, res) => {
  try {
    const { title, description, date, category } = req.body;
    console.log('Received document data:', req.body);

    let documentKey = 'default.pdf';
    if (req.file) {
      documentKey = await uploadToMinio(req.file, 'DOCS');
      console.log('Document uploaded with key:', documentKey);
    }

    const newDocument = await prisma.document.create({
      data: {
        title,
        description,
        date,
        file: documentKey,
        category
      }
    });

    console.log('Document created:', newDocument);
    res.status(201).json(newDocument);
  } catch (error) {
    console.error('Error creating document:', error);
    res.status(500).json({ error: error.message });
  }
};
