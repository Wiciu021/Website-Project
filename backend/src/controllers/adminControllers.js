import prisma from "../lib/prisma.js";
import { uploadToMinio } from '../lib/multer.js';

export const createPost = async (req, res) => {
  try {
    const { title, description, date, author, category } = req.body;
    
    /*
    let imageKey = 'default.png';
    // create deafault image in minio to show if no image is provided

    if (req.file) {
      imageKey = await uploadToMinio(req.file, 'POSTS');
      console.log('Image uploaded with key:', imageKey);
    }*/

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

    let files = [];
    if (Array.isArray(req.files) && req.files.length > 0) {
      files = req.files;
    } else if (req.file) {
      files = [req.file];
    }
    const imagesData = [];

    for (const file of files) {
      const key = `posts/${Date.now()}-${file.originalname}`;
      await s3.send(new PutObjectCommand({
        Bucket: DEFAULT_BUCKET,
        Key: key,
        Body: file.buffer,
        ContentType: file.mimetype,
        CacheControl: 'no-cache'
      }));
      imagesData.push({ key, postId: post.id });
    }

    if (imagesData.length > 0) {
      await prisma.postImage.createMany({
        data: imagesData
      });
      await prisma.post.update({
        where: { id: post.id },
        data: {
          img: imagesData[0].key
        }
      });
    }

    const fullPost = await prisma.post.findUnique({
      where: { id: post.id },
      include: { images: true }
    });

    console.log('Post created:', fullPost);
    res.status(201).json(fullPost);
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
    // create deafault document in minio to show if no document is provided
    
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

export const createSubstitution = async (req, res) => {
  try {
    const { date } = req.body;
    console.log('Received substitution data:', req.body);

    let documentKey = 'default.pdf';

    if (req.file) {
      documentKey = await uploadToMinio(req.file, 'SUBSTITUTIONS');
      console.log('Substitution uploaded with key:', documentKey);
    } else {
      console.warn('No file provided for substitution; using default.');
    }

    const newSubstitution = await prisma.substitution.create({
      data: {
        date,
        file: documentKey
      }
    });

    console.log('Substitution created:', newSubstitution);
    res.status(201).json(newSubstitution);
  } catch (error) {
    console.error('Error creating substitution:', error);
    res.status(500).json({ error: error.message });
  }
};

export const createTeacher = async (req, res) => {
  try {
    const { name, surname, position, category } = req.body;
    console.log('Received teacher data:', req.body);

    let imageKey = 'default.png';

    if (req.file) {
      imageKey = await uploadToMinio(req.file, 'TEACHERS');
      console.log('Image uploaded with key:', imageKey);
    }

    const newTeacher = await prisma.teacher.create({
      data: {
        name,
        surname,
        position,
        img: imageKey,
        category
      }
    });

    console.log('Teacher created:', newTeacher);
    res.status(201).json(newTeacher);
  } catch (error) {
    console.error('Error creating teacher:', error);
    res.status(500).json({ error: error.message });
  }
};