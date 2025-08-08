import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function dbTest(req, res) {
  try {
    const posts = await prisma.post.findMany();
    res.json({ success: true, data: posts });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
}