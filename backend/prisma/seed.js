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
    id: 1,
    title: 'Zabawy na świeżym powietrzu',
    description: 'Uczniowie klasy 2B spędzili dzień na świeżym powietrzu, biorąc udział w grach zespołowych i zabawach integracyjnych.',
    img: 'kids1',
    date: new Date('2025-07-20'),
    author: 'Anna Nowak',
    category: 'School'
  },
  {
    id: 2,
    title: 'Zajęcia plastyczne w klasie 1A',
    description: 'Dzieci rozwijały swoją kreatywność, tworząc prace plastyczne z różnorodnych materiałów.',
    img: 'kids2',
    date: new Date('2025-07-18'),
    author: 'Karol Wiśniewski',
    category: 'School'
  },
  {
    id: 3,
    title: 'Wspólne czytanie w bibliotece szkolnej',
    description: 'Klasa 3C odwiedziła bibliotekę, gdzie nauczyciel czytał fragmenty nowej książki o przygodach detektywa Liska.',
    img: 'kids3',
    date: new Date('2025-07-15'),
    author: 'Magdalena Kowalczyk',
    category: 'School'
  },
  {
    id: 4,
    title: 'Eksperymenty z fizyki klasa 6',
    description: 'Uczniowie przeprowadzali proste eksperymenty z grawitacją i ciśnieniem powietrza podczas zajęć w laboratorium.',
    img: 'kids4',
    date: new Date('2025-07-12'),
    author: 'Piotr Zieliński',
    category: 'School'
  },
  {
    id: 5,
    title: 'Wyjazd Erasmus do Hiszpanii',
    description: 'Uczniowie klasy 4B uczestniczyli w tygodniowej wymianie międzynarodowej w ramach programu Erasmus.',
    img: 'erasmus1',
    date: new Date('2025-07-10'),
    author: 'Anna Nowak',
    category: 'Erasmus'
  },
  {
    id: 6,
    title: 'Spotkanie online z partnerami z Włoch',
    description: 'Uczniowie i nauczyciele rozmawiali z włoską szkołą partnerską o wspólnych projektach edukacyjnych.',
    img: 'erasmus2',
    date: new Date('2025-07-08'),
    author: 'Karol Wiśniewski',
    category: 'Erasmus'
  },
  {
    id: 7,
    title: 'Warsztaty kulinarne Erasmus',
    description: 'Uczniowie przygotowywali tradycyjne potrawy z krajów partnerskich programu Erasmus.',
    img: 'erasmus3',
    date: new Date('2025-07-03'),
    author: 'Piotr Zieliński',
    category: 'Erasmus'
  },
  {
    id: 8,
    title: 'Lekcja muzyki na świeżym powietrzu',
    description: 'Klasa 2A grała na instrumentach i śpiewała w ogrodzie szkolnym.',
    img: 'kids5',
    date: new Date('2025-07-05'),
    author: 'Magdalena Kowalczyk',
    category: 'School'
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