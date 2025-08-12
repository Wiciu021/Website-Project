import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {

  await prisma.photo.deleteMany({});
  await prisma.album.deleteMany({});
  await prisma.post.deleteMany({});
  await prisma.teacher.deleteMany({});
  //await prisma.historyData.deleteMany({});
  await prisma.docs.deleteMany({});

  const posts = await prisma.post.createMany({
    data: [
      {
        title: 'Zabawy na świeżym powietrzu',
        description: 'Uczniowie klasy 2B spędzili dzień na świeżym powietrzu, biorąc udział w grach zespołowych i zabawach integracyjnych.',
        author: 'Anna Nowak',
        date: new Date('2025-07-20'),
        img: '/static/images/posts/kids1.jpg'
      },
      {
        title: 'Zajęcia plastyczne w klasie 1A',
        description: 'Dzieci rozwijały swoją kreatywność podczas zajęć plastycznych.',
        author: 'Karol Wiśniewski',
        date: new Date('2025-07-18'),
        img: '/static/images/posts/kids2.jpg'
      }
    ]
  });

  const teachers = await prisma.teacher.createMany({
    data: [
      {
        name: 'Bożena',
        surname: 'Kondratiuk',
        jobClassification: 'Dyrektor, nauczycielka języka polskiego',
        roleType: 'headTeacher',
        img: 'user-image.png'
      },
      {
        name: 'Kamil',
        surname: 'Żmudziński',
        jobClassification: 'Wicedyrektor, nauczyciel fizyki, matematyki i informatyki',
        roleType: 'headTeacher',
        img: 'user-image.png'
      }
    ]
  });

  const history = await prisma.historyData.createMany({
    data: [
      {
        title: '2023/2024',
        pdf: 'kalendarium-2023-2024'
      },
      {
        title: '2022/2023',
        pdf: 'kalendarium-2022-2023'
      }
    ]
  });

  const album = await prisma.album.create({
    data: {
      folder: 'mclaren',
      title: 'McLaren Collection',
      description: 'The fastest and sleekest McLarens all in one place.',
      img: 'mclaren1',
      date: new Date('2025-08-01'),
      photos: {
        create: [
          {
            img: 'mclaren1',
            title: 'Sunset Sprint',
            description: 'When the sunset is red but your McLaren is redder.',
            date: new Date('2025-08-01')
          },
          {
            img: 'mclaren2',
            title: 'Track Day Thrills',
            description: 'Because speed limits are just polite suggestions.',
            date: new Date('2025-08-03')
          }
        ]
      }
    }
  });

  const docs = await prisma.docs.createMany({
    data: [
      {
        title: 'Regulamin boiska szkolnego',
        date: '15-08-2016',
        file: 'Regulamin-boiska-szkolnego.pdf'
      },
      {
        title: 'Regulamin Samorządu Uczniowskiego 2023',
        date: '30-09-2023',
        file: 'Regulamin-Samorzadu-Uczniowskiego-2023.pdf'
      }
    ]
  });

  console.log({
    posts: 'Seeded posts data',
    teachers: 'Seeded teachers data',
    history: 'Seeded history data',
    albums: 'Seeded albums and photos data',
    docs: 'Seeded docs data'
  });
}

main()
  .catch(err => {
    console.error(err);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });