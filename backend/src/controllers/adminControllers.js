import prisma from "../lib/prisma.js";

export const createPost = async (req, res) => {
  const { id, title, description, date, img, author, category } = req.body;

  try {
    const newPost = await prisma.post.create({
      data: {
        //id,  dodać potem
        title,
        description,
        author,
        date,
        img: "dasf", //tymczasowe
        category
      }
    });
    res.status(201).json(newPost);
  } catch (error) {
    console.error('Error creating post:', error);
    res.status(500).json({ error: 'server error' });
  }
};
