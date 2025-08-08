import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  const newPost = await prisma.post.create({
    data: {
      title: 'Nigga',
      description: 'aojsfhgafgha;jgfh;ajhf',
      author: 'Konrad Malichonrad',
      date: new Date(),
      img: 'https://example.com/image.jpg',
    },
  });
  console.log('Dodano post:', newPost);
}

main()
  .catch(e => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
