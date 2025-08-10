import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  await prisma.post.deleteMany({});
  
  const posts = await prisma.post.createMany({
    data: [
      {
        title: 'NIGAAAAA',
        description: 'jhsdfjkdshfjkdshfksdfk;dshf;shiuhoheaofhgaofgau',
        author: 'Your Mama',
        date: new Date(),
        img: '/static/images/posts/kids1.jpg',
      },
      {
        title: 'white',
        description: 'Class orgy',
        author: 'Konrad Malichonrad',
        date: new Date(),
        img: '/static/images/posts/kids2.jpg',
      }
    ]
  });
  
  console.log('Dodano posty:', posts);
}

main()
  .catch(e => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
